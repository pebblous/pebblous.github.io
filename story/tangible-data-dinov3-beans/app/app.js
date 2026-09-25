'use strict';
const $ = s => document.querySelector(s);
const colors=['#6096D5','#F86825','#51C57A'];
const classNames=['모무늬병','녹병','건강'];
const state={data:null,images:null,lens:'dinov3_l',sample:94,yaw:-.45,pitch:.3,zoom:1};
const canvas=$('#cloud'),ctx=canvas.getContext('2d');
let projected=[],drag=null;
function lens(){return state.data.lenses.find(l=>l.key===state.lens)}
function selectLens(key){if(!state.data.lenses.some(l=>l.key===key))throw new Error('Unknown lens');state.lens=key;updateExplorer();return window.syncRealPatches?.()}
function selectSample(id){if(!Number.isInteger(id)||id<0||id>=300)throw new Error('Sample must be 0–299');state.sample=id;updateExplorer();return window.syncRealPatches?.()}
function makeSampleImage(id,kind){
 const sample=state.images?.samples[id],img=document.createElement('img');
 img.alt=`#${String(id).padStart(3,'0')} ${classNames[state.data.samples[id].class]} 원본`;
 img.width=500;img.height=500;img.decoding='async';
 img.dataset.sampleImage=id;img.dataset.kind=kind;
 if(!sample){const note=document.createElement('span');note.className='sample-image-error';note.textContent='이미지 목록을 읽지 못했습니다.';return note;}
 img.onerror=()=>{const note=document.createElement('span');note.className='sample-image-error';note.setAttribute('role','status');note.textContent=`#${id} 이미지 로딩 실패 · 다시 선택해 주세요.`;img.replaceWith(note);};
 img.src=sample.url;return img;
}
function updateExplorer(){
 const l=lens(),s=state.sample;
 document.querySelectorAll('[data-lens]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lens===state.lens)));
 $('#sample').value=s;
 $('#projectionLabel').textContent=`${l.dimension.toLocaleString()}D → 3D · 분산 ${(l.variance.reduce((a,b)=>a+b)*100).toFixed(1)}% 보존`;
 $('#sampleMeta').innerHTML=`${classNames[state.data.samples[s].class]} · ${['제거','보존','보호 + 보존'][l.selection[s]]}<br>H_RBT_OOF · selection seed 0`;
 $('#selectedImageHost').replaceChildren(makeSampleImage(s,'selected'));
 $('#selectedImageOpen').disabled=!state.images;
 $('#selectedImageOpen').setAttribute('aria-label',`표본 ${s} 원본 이미지 확대`);
 $('#samplePatchStatus').textContent=!state.images?'이미지 목록을 읽지 못했습니다. 페이지를 새로고침해 주세요.':state.images.samples[s].patch_available?'실제 DINOv3 패치 탐색 가능':'이 표본의 패치 추론은 없습니다. 원본과 CLS 이웃만 제공합니다.';
 $('#neighbors').replaceChildren(...l.neighbors[s].map((n,i)=>{
  const b=document.createElement('button');b.className='neighbor-row';b.type='button';b.dataset.neighbor=n;
  b.append(makeSampleImage(n,'neighbor'));
  const info=document.createElement('span');info.className='neighbor-info';
  const identity=document.createElement('span');identity.textContent=`#${String(n).padStart(3,'0')}`;
  const value=document.createElement('span');value.textContent=l.similarities[s][i].toFixed(4);info.append(identity,value);
  const name=document.createElement('span');name.className='neighbor-class';name.textContent=classNames[state.data.samples[n].class];
  b.append(info,name);b.setAttribute('aria-label',`이웃 표본 ${n}, ${name.textContent}, cosine ${value.textContent} 선택`);
  b.onclick=()=>{selectSample(n);if(innerWidth<=650)$('.inspector').scrollIntoView({block:'start'});};return b;
 }));
 const v2=state.data.lenses[0].neighbors[s],overlap=l.neighbors[s].filter(n=>v2.includes(n)).length;
 $('#overlap').textContent=state.lens==='dinov2_reg_l'?'기준 렌즈 · DINOv2-L의 상위 8개 이웃':`DINOv2-L과 공유하는 이웃 ${overlap} / 8`;
 drawCloud();syncImageDialog();window.syncLayers?.();
}
const imageDialog=$('#imageDialog');
let imageScale='fit',dialogSample=null;
function setImageScale(scale){
 imageScale=scale;
 $('#imageDialogHost').dataset.scale=scale;
 document.querySelectorAll('[data-image-scale]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.imageScale===scale)));
}
function syncImageDialog(){
 if(!imageDialog.open||dialogSample===state.sample)return;
 const sample=state.images.samples[state.sample];dialogSample=sample.id;
 $('#imageDialogTitle').textContent=`#${String(sample.id).padStart(3,'0')} · ${classNames[sample.class]} 원본`;
 $('#imageDialogHost').replaceChildren(makeSampleImage(sample.id,'enlarged'));
 $('#imageDialogFile').textContent=sample.file;
 $('#imageDialogHash').textContent=sample.sha256;
 setImageScale('fit');$('#imageDialogHost').scrollTo(0,0);
}
$('#selectedImageOpen').onclick=()=>{if(!state.images)return;dialogSample=null;imageDialog.showModal();document.documentElement.classList.add('image-dialog-open');syncImageDialog();};
$('#imageDialogClose').onclick=()=>imageDialog.close();
imageDialog.addEventListener('close',()=>{document.documentElement.classList.remove('image-dialog-open');$('#selectedImageOpen').focus({preventScroll:true});});
document.querySelectorAll('[data-image-scale]').forEach(b=>b.onclick=()=>setImageScale(b.dataset.imageScale));
function drawCloud(){if(!state.data)return;const rect=canvas.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);canvas.width=rect.width*dpr;canvas.height=rect.height*dpr;ctx.scale(dpr,dpr);const w=rect.width,h=rect.height,l=lens(),scale=Math.min(w,h)*.32*state.zoom;const max=Math.max(...l.xyz.flat().map(Math.abs));function proj(a){const x=a[0]/max,y=a[1]/max,z=a[2]/max;const rx=x*Math.cos(state.yaw)+z*Math.sin(state.yaw),rz=-x*Math.sin(state.yaw)+z*Math.cos(state.yaw),ry=y*Math.cos(state.pitch)-rz*Math.sin(state.pitch),depth=y*Math.sin(state.pitch)+rz*Math.cos(state.pitch);const p=3/(3+depth);return {x:w*.5+rx*scale*p,y:h*.5-ry*scale*p,z:depth,p};}ctx.lineWidth=.6;ctx.strokeStyle='#37383C';for(let i=-1;i<=1.01;i+=.25){for(const line of [[[-1,-.8,i],[1,-.8,i]],[[i,-.8,-1],[i,-.8,1]]]){const a=proj(line[0].map(v=>v*max)),b=proj(line[1].map(v=>v*max));ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}[['PC1',[1.15,-.8,0]],['PC2',[0,1.15,0]],['PC3',[0,-.8,1.15]]].forEach(([t,a])=>{const p=proj(a.map(v=>v*max));ctx.fillStyle='#AEB0B6';ctx.font='11px "TT Firs Neue", Pretendard';ctx.fillText(t,p.x,p.y)});projected=l.xyz.map((a,i)=>({...proj(a),id:i}));const selected=projected[state.sample];const near=new Set(l.neighbors[state.sample]);ctx.strokeStyle='#FFFFFF70';ctx.lineWidth=1;for(const id of near){const p=projected[id];ctx.beginPath();ctx.moveTo(selected.x,selected.y);ctx.lineTo(p.x,p.y);ctx.stroke()}[...projected].sort((a,b)=>b.z-a.z).forEach(p=>{const active=p.id===state.sample,n=near.has(p.id);ctx.globalAlpha=active||n?1:.38+.35*(1-p.z/2);ctx.beginPath();ctx.fillStyle=colors[state.data.samples[p.id].class];ctx.arc(p.x,p.y,(active?6:n?4.2:2.9)*p.p,0,Math.PI*2);ctx.fill();if(active){ctx.globalAlpha=1;ctx.strokeStyle='#fff';ctx.lineWidth=1.4;ctx.beginPath();ctx.arc(p.x,p.y,10*p.p,0,Math.PI*2);ctx.stroke();ctx.font='12px "TT Firs Neue", Pretendard';ctx.fillStyle='#fff';ctx.fillText('#'+String(p.id).padStart(3,'0'),p.x+15,p.y-12)}});ctx.globalAlpha=1}
canvas.addEventListener('pointerdown',e=>{drag={x:e.clientX,y:e.clientY,total:0};canvas.setPointerCapture(e.pointerId)});
canvas.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;drag.total+=Math.abs(dx)+Math.abs(dy);state.yaw+=dx*.008;state.pitch=Math.max(-1.3,Math.min(1.3,state.pitch+dy*.008));drag.x=e.clientX;drag.y=e.clientY;drawCloud()});
canvas.addEventListener('pointerup',e=>{if(drag&&drag.total<6){const r=canvas.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;const p=projected.reduce((best,p)=>{const d=Math.hypot(p.x-x,p.y-y);return d<best.d?{...p,d}:best},{d:15});if(p.id!==undefined)selectSample(p.id)}drag=null});canvas.addEventListener('pointercancel',()=>drag=null);
function zoom(v){state.zoom=Math.max(.5,Math.min(2.6,state.zoom*v));drawCloud()}
canvas.addEventListener('wheel',e=>{if(document.activeElement!==canvas)return;e.preventDefault();zoom(e.deltaY<0?1.08:1/1.08)},{passive:false});canvas.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','-','='].includes(e.key)){e.preventDefault();if(e.key==='ArrowLeft')state.yaw-=.1;if(e.key==='ArrowRight')state.yaw+=.1;if(e.key==='ArrowUp')state.pitch-=.1;if(e.key==='ArrowDown')state.pitch+=.1;if(e.key==='+'||e.key==='=')zoom(1.1);if(e.key==='-')zoom(1/1.1);drawCloud()}});
$('#zoomIn').onclick=()=>zoom(1.15);$('#zoomOut').onclick=()=>zoom(1/1.15);$('#resetView').onclick=()=>{state.yaw=-.45;state.pitch=.3;state.zoom=1;drawCloud()};new ResizeObserver(drawCloud).observe(canvas);
Promise.all([
 fetch('data/embeddings.json').then(r=>{if(!r.ok)throw Error('Data unavailable');return r.json();}),
 fetch('data/images.json').then(r=>{if(!r.ok)throw Error('Image manifest unavailable');return r.json();}).catch(()=>null)
]).then(([data,images])=>{
 state.data=data;
 if(images?.schema==='dinov3-sample-images.v1'&&images.samples?.length===data.samples.length&&images.samples.every((s,i)=>s.id===i&&s.file===data.samples[i].file))state.images=images;
 $('#sample').replaceChildren(...data.samples.map(s=>new Option(`#${String(s.id).padStart(3,'0')} · ${classNames[s.class]}`,s.id)));
 $('#sample').disabled=false;$('#sample').onchange=e=>selectSample(Number(e.target.value));
 document.querySelectorAll('[data-lens]').forEach(b=>b.onclick=()=>selectLens(b.dataset.lens));
 updateExplorer();if(window.initReport)window.initReport(data);window.syncRealPatches?.();
}).catch(e=>{$('#dataError').hidden=false;$('#projectionLabel').textContent='데이터 로딩 실패';console.error(e)});
