'use strict';
(() => {
 const q=s=>document.querySelector(s),pad=n=>String(n).padStart(3,'0');
 const names={angular_leaf_spot:'모무늬병',bean_rust:'녹병',healthy:'건강'};
 const ls={manifest:null,a:94,b:183,step:3,patch:105,page:0,vector:'cls',status:'loading',request:0,values:null,images:null};
 const cache=new Map(),images=new Map();
 const stage=()=>ls.manifest.stages[ls.step];
 const sample=id=>ls.manifest.samples.find(s=>s.id===id);
 const pair=()=>ls.manifest.pairs.find(p=>p.ids.includes(ls.a)&&p.ids.includes(ls.b));
 const label=id=>`#${pad(id)} · ${names[sample(id).label]}`;
 function setStatus(status,text=''){
  ls.status=status;q('#layerResults').hidden=status!=='ready';q('#layerUnavailable').hidden=status==='ready';
  q('#layerUnavailable').textContent=text;
 }
 async function tensor(id,key){
  const descriptor=sample(id).tensors[key],s=ls.manifest.stages.find(s=>s.key===key);
  if(cache.has(descriptor.url))return cache.get(descriptor.url);
  const promise=(async()=>{
   const r=await fetch(descriptor.url);if(!r.ok)throw Error('Tensor fetch failed');const b=await r.arrayBuffer();
   if(b.byteLength!==descriptor.bytes)throw Error('Tensor length mismatch');
   const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',b)),v=>v.toString(16).padStart(2,'0')).join('');
   if(hash!==descriptor.sha256)throw Error('Tensor integrity mismatch');
   if(s.dtype==='uint8')return new Uint8Array(b);
   const d=new DataView(b),v=new Float32Array(b.byteLength/4);
   for(let i=0;i<v.length;i++){v[i]=d.getFloat32(i*4,true);if(!Number.isFinite(v[i]))throw Error('Non-finite tensor');}return v;
  })();
  cache.set(descriptor.url,promise);try{return await promise;}catch(e){cache.delete(descriptor.url);throw e;}
 }
 function inputImage(id){
  if(!images.has(id))images.set(id,new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>{images.delete(id);reject(Error('Input image failed'));};img.src=sample(id).input_url;}));
  return images.get(id);
 }
 function outline(c){const x=ls.patch%14*32,y=Math.floor(ls.patch/14)*32;c.lineWidth=6;c.strokeStyle='#171719';c.strokeRect(x+2,y+2,28,28);c.lineWidth=3;c.strokeStyle='#fff';c.strokeRect(x+3,y+3,26,26);}
 function drawMaps(){
  for(const [i,name]of ['A','B'].entries()){
   const cv=q('#layerInput'+name),c=cv.getContext('2d');c.drawImage(ls.images[i],0,0,448,448);c.lineWidth=.8;c.strokeStyle='#ffffff50';
   for(let j=1;j<14;j++){c.beginPath();c.moveTo(j*32,0);c.lineTo(j*32,448);c.moveTo(0,j*32);c.lineTo(448,j*32);c.stroke();}outline(c);
  }
  const c=q('#layerHeatmap').getContext('2d'),values=pair().metrics[ls.step].patch_distances;
  c.clearRect(0,0,448,448);
  for(let i=0;i<196;i++){
   const t=values?Math.max(0,Math.min(1,values[i]/2)):0;
   c.fillStyle=`rgb(${Math.round(244+4*t)},${Math.round(244-140*t)},${Math.round(245-208*t)})`;
   c.fillRect(i%14*32,Math.floor(i/14)*32,32,32);
  }
  if(values)outline(c);
  q('#layerMapNote').textContent=values?'색 눈금 0–2 고정 · 같은 위치의 A/B 특징 거리':'이 단계에는 패치 특징 지도가 없습니다. 회색은 거리 0이 아니라 자료 없음입니다.';
  q('#layerPatch').value=ls.patch;
  q('#layerPatchReadout').textContent=`패치 #${pad(ls.patch)} · ${Math.floor(ls.patch/14)+1}행 ${ls.patch%14+1}열${values?' · 거리 '+values[ls.patch].toFixed(6):''}`;
 }
 const fmt=v=>v===null?'해당 없음':v.toFixed(6);
 function drawCurve(){
  const p=pair(),metrics=p.metrics,svg=q('#layerCurve'),w=Math.max(250,svg.getBoundingClientRect().width),x=i=>45+(i-2)/27*(w-70),y=v=>260-v/2*225;
  svg.setAttribute('viewBox',`0 0 ${w} 310`);
  let html='';
  for(const v of [0,.5,1,1.5,2])html+=`<line x1="45" y1="${y(v)}" x2="${w-25}" y2="${y(v)}" stroke="#DBDCDF"/><text x="32" y="${y(v)+5}" text-anchor="end">${v}</text>`;
  html+='<text x="55" y="20">1 − cosine · 0–2</text>';
  for(const [i,label]of (w<500?[[2,'투영'],[11,'B8'],[19,'B16'],[29,'CLS']]:[[2,'투영'],[7,'B4'],[11,'B8'],[15,'B12'],[19,'B16'],[23,'B20'],[27,'B24'],[29,'CLS']]))html+=`<text x="${x(i)}" y="292" text-anchor="middle">${label}</text>`;
  for(const [key,color,dash]of [['cls_distance','#F86825',''],['patch_mean','#585858','stroke-dasharray="6 4"']]){
   const pts=metrics.map((m,i)=>m[key]===null?null:`${x(i)},${y(m[key])}`).filter(Boolean).join(' ');
   html+=`<polyline points="${pts}" fill="none" stroke="${color}" stroke-width="3" ${dash}/>`;
   metrics.forEach((m,i)=>{if(m[key]!==null)html+=`<circle data-step="${i}" cx="${x(i)}" cy="${y(m[key])}" r="${i===ls.step?6:3}" fill="${color}"><title>${ls.manifest.stages[i].label}: ${m[key].toFixed(6)}</title></circle>`;});
  }
  if(ls.step>=2)html+=`<line x1="${x(ls.step)}" x2="${x(ls.step)}" y1="32" y2="260" stroke="#171719" stroke-dasharray="3 4"/>`;
  svg.innerHTML=html;
  q('#layerClsDistance').textContent=fmt(metrics[ls.step].cls_distance);
  q('#layerPatchDistance').textContent=fmt(metrics[ls.step].patch_mean);
  q('#layerIntervals').replaceChildren();
  for(const [key,title] of [['cls_distance','CLS'],['patch_mean','패치 평균']])for(const direction of ['increase','decrease']){
   const interval=p.intervals[key][direction],b=document.createElement('button');b.type='button';
   b.textContent=`${title} 최대 ${direction==='increase'?'증가':'감소'}: `+(interval?`${ls.manifest.stages[interval.start].label} → ${ls.manifest.stages[interval.end].label} (Δ ${interval.delta>0?'+':''}${interval.delta.toFixed(4)})`:'없음');
   b.disabled=!interval;if(interval)b.onclick=()=>setStep(interval.end);q('#layerIntervals').append(b);
  }
 }
 function vector(data){
  const kind=stage().kind;
  if(kind==='rgb'){
   const x=Math.min(499,Math.floor((ls.patch%14*16+8)/224*500)),y=Math.min(499,Math.floor((Math.floor(ls.patch/14)*16+8)/224*500));
   return {v:data.subarray((y*500+x)*3,(y*500+x)*3+3),note:`선택 패치 중심에 대응하는 원본 픽셀 (${x}, ${y})의 RGB. 패치 특징이 아닙니다.`,channels:true};
  }
  if(kind==='input'){
   const x=ls.patch%14*16+8,y=Math.floor(ls.patch/14)*16+8,pos=y*224+x;
   return {v:[data[pos],data[224*224+pos],data[2*224*224+pos]],note:`모델 입력 픽셀 (${x}, ${y})의 정규화된 RGB. 패치 특징이 아닙니다.`,channels:true};
  }
  const v=/^[1-4]$/.test(ls.vector)?kind==='tokens'?data.subarray(Number(ls.vector)*1024,(Number(ls.vector)+1)*1024):null:LayerMath.featureVector(data,kind,ls.vector,ls.patch);
  return{v,note:v?'모델에서 기록한 원값입니다. 표에 별도 L2 정규화를 적용하지 않았습니다. 좌표 번호 자체에 병명 같은 의미는 없습니다.':'이 단계에는 선택한 종류의 벡터가 없습니다.'};
 }
 function renderValues(){
  if(ls.status!=='ready')return;
  const a=vector(ls.values[0]),b=vector(ls.values[1]);
  q('#layerVectorNote').textContent=a.note;q('#layerVector').disabled=!!a.channels;
  q('#layerPage').disabled=!!a.channels||!a.v;
  if(!a.v||!b.v){q('#layerValueTable').innerHTML='<caption>해당 벡터 없음</caption>';return;}
  const start=a.channels?0:ls.page*32,end=Math.min(start+32,a.v.length);
  q('#layerValueTable').innerHTML=`<caption>${label(ls.a)} / ${label(ls.b)} · ${stage().label}</caption><thead><tr><th>${a.channels?'채널':'좌표'}</th><th>A</th><th>B</th><th>A − B</th></tr></thead><tbody>`+Array.from({length:end-start},(_,j)=>{const i=start+j;return`<tr><th scope="row">${a.channels?['R','G','B'][i]:i}</th><td>${Number(a.v[i]).toPrecision(8)}</td><td>${Number(b.v[i]).toPrecision(8)}</td><td>${(a.v[i]-b.v[i]).toPrecision(8)}</td></tr>`;}).join('')+'</tbody>';
 }
 async function render(){
  if(!ls.manifest||!state.data)return;
  if(!sample(state.sample)||state.lens!=='dinov3_l'){window.syncLayers();return;}
  const request=++ls.request,s=stage();q('#layerControls').hidden=false;
  q('#layerProvenance').textContent=JSON.stringify({selected_images:[ls.a,ls.b],stage:s,model:ls.manifest.model,runtime:ls.manifest.runtime,web_export:ls.manifest.web_export},null,2);
  q('#layerStep').value=ls.step;q('#layerStepLabel').textContent=`${ls.step+1} / 30 · ${s.label}`;
  q('#layerShape').textContent=`${s.label} · [${s.shape.join(' × ')}]`;
  q('#layerAxes').textContent=`축: ${s.axes.join(' × ')} · ${s.dtype} · batch=1. `+(s.kind==='tokens'?'201 = CLS 1 + register 4 + 패치 196':'');
  q('#layerLocation').textContent=`추출 위치: ${s.location}`;
  q('#layerNormalization').textContent=`정규화: ${s.normalization}`;
  if(s.key==='projection')q('#layerLocation').textContent+=' · 실제 Conv2d [1 × 1024 × 14 × 14]를 순서만 변경했습니다.';
  q('#layerPrev').disabled=ls.step===0;q('#layerNext').disabled=ls.step===29;
  document.querySelectorAll('[data-layer-stage]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.layerStage)===ls.step)));
  setStatus('loading','선택한 단계의 실제 텐서를 불러오고 무결성을 확인합니다…');
  try{
   const loaded=await Promise.all([tensor(ls.a,s.key),tensor(ls.b,s.key),inputImage(ls.a),inputImage(ls.b)]);
   if(request!==ls.request)return;
   ls.values=loaded.slice(0,2);ls.images=loaded.slice(2);
   for(const [id,key]of [[ls.a,'A'],[ls.b,'B']]){q('#layer'+key+'Title').textContent=label(id);q('#layerOriginal'+key).src=sample(id).original_url;q('#layerOriginal'+key).alt=label(id)+' 원본';q('#layerDownload'+key).href=sample(id).tensors[s.key].url;}
   q('#layerObservation').textContent=s.key==='tokens'?'초기 CLS와 register는 세 이미지에 같은 학습 토큰을 붙인 것입니다. 잎으로 인식해서 같아진 것이 아닙니다. 원본 이미지와 패치 투영값은 이미 서로 다릅니다.':s.kind==='rgb'||s.kind==='input'?'이미지는 처음부터 다릅니다. 아직 CLS나 1024차원 패치 특징을 만든 단계가 아닙니다.':s.key==='projection'?'각 16×16 RGB 조각이 1024개의 숫자로 투영됐습니다. CLS·register는 아직 붙이지 않았습니다.':'이 숫자는 선택한 단계를 통과한 표현입니다. 거리 변화만으로 ‘잎을 인식했다’거나 ‘병을 구별했다’고 단정하지 않습니다.';
   q('#layerProvenance').textContent=JSON.stringify({model:ls.manifest.model,preprocessing:ls.manifest.preprocessing,stage:s,samples:[sample(ls.a),sample(ls.b)].map(v=>({id:v.id,verification:v.verification,tensor:v.tensors[s.key]})),runtime:ls.manifest.runtime,web_export:ls.manifest.web_export},null,2);
   setStatus('ready');drawMaps();drawCurve();renderValues();
  }catch(e){if(request!==ls.request)return;setStatus('error','층별 자료를 읽거나 검증하지 못했습니다. 기존 탐색기는 계속 사용할 수 있습니다.');const b=document.createElement('button');b.textContent='다시 불러오기';b.onclick=render;q('#layerUnavailable').append(b);}
 }
 function setStep(value){if(!Number.isInteger(value)||value<0||value>29)throw Error('Invalid stage');ls.step=value;return render();}
 function setPatch(value){if(!Number.isInteger(value)||value<0||value>195)return;ls.patch=value;if(ls.status==='ready'){drawMaps();renderValues();}}
 function choose(a,b=ls.b){if(!sample(a))return;ls.a=a;ls.b=b===a?ls.manifest.samples.find(s=>s.id!==a).id:b;selectLens('dinov3_l');selectSample(a);}
 window.syncLayers=function(){
  if(!ls.manifest||!state.data)return;
  let link=q('#layerInspectorLink');if(!link){link=document.createElement('div');link.id='layerInspectorLink';link.className='patch-inspector-link';q('.inspector').append(link);}
  const available=!!sample(state.sample)&&state.lens==='dinov3_l';
  q('#layerB').disabled=!available;
  link.innerHTML=`<p class="exploration-availability">${available?'현재 사진으로 살펴볼 수 있다.':sample(state.sample)?'이 사진의 층별 자료는 DINOv3에만 있다.':'현재 사진에는 층별 변화 자료가 없다.'}</p><a href="#layers">${available?'이 사진의 층별 변화 비교하기 ↓':'DINOv3의 준비된 사진 3장 보기 ↓'}</a>`;
  q('#layerA').value=sample(state.sample)?state.sample:'';
  if(!available){
   ++ls.request;q('#layerControls').hidden=true;ls.values=null;
   q('#layerProvenance').textContent=`현재 표본 #${pad(state.sample)} / ${state.lens}에는 층별 자료가 없습니다. 준비된 DINOv3 표본을 선택하면 해당 출처를 표시합니다.`;
   setStatus('unavailable',state.lens!=='dinov3_l'?'층별 자료는 DINOv3-L에서만 추출했습니다. 다른 렌즈의 중간 표현으로 표시하지 않습니다.':`#${pad(state.sample)}에는 층별 자료가 없습니다. 준비된 3장만 비교할 수 있습니다. 다른 표본의 결과를 대신 표시하지 않습니다.`);
   for(const s of ls.manifest.samples){const b=document.createElement('button');b.textContent=label(s.id)+' 보기';b.onclick=()=>choose(s.id);q('#layerUnavailable').append(b);}return;
  }
  ls.a=state.sample;if(ls.a===ls.b)ls.b=ls.manifest.samples.find(s=>s.id!==ls.a).id;
  q('#layerB').value=ls.b;for(const option of q('#layerB').options)option.disabled=Number(option.value)===ls.a;
  render();
 };
 q('#layerA').onchange=e=>choose(Number(e.target.value));
 q('#layerB').onchange=e=>{ls.b=Number(e.target.value);render();};
 q('#layerStep').oninput=e=>setStep(Number(e.target.value));q('#layerPrev').onclick=()=>setStep(ls.step-1);q('#layerNext').onclick=()=>setStep(ls.step+1);
 document.querySelectorAll('[data-layer-stage]').forEach(b=>b.onclick=()=>setStep(Number(b.dataset.layerStage)));
 q('#layerCurve').onclick=e=>{const r=e.currentTarget.getBoundingClientRect(),w=e.currentTarget.viewBox.baseVal.width,x=(e.clientX-r.left)/r.width*w;setStep(Math.max(2,Math.min(29,Math.round((x-45)/(w-70)*27+2))));};
 addEventListener('resize',()=>{if(ls.status==='ready')drawCurve();});
 q('#layerPatch').onchange=e=>{const v=Number(e.target.value);if(Number.isInteger(v)&&v>=0&&v<=195)setPatch(v);else e.target.value=ls.patch;};
 q('#layerVector').onchange=e=>{ls.vector=e.target.value;renderValues();};q('#layerPage').onchange=e=>{ls.page=Number(e.target.value);renderValues();};
 q('#layerPage').replaceChildren(...Array.from({length:32},(_,i)=>new Option(`${i*32}–${i*32+31}`,i)));
 for(const key of ['A','B'])q('#layerOriginal'+key+'Open').onclick=()=>{selectSample(key==='A'?ls.a:ls.b);q('#selectedImageOpen').click();};
 for(const id of ['#layerInputA','#layerInputB','#layerHeatmap']){
  q(id).onclick=e=>{if(ls.status!=='ready')return;const r=e.currentTarget.getBoundingClientRect();setPatch(Math.min(13,Math.max(0,Math.floor((e.clientY-r.top)/r.height*14)))*14+Math.min(13,Math.max(0,Math.floor((e.clientX-r.left)/r.width*14))));};
  q(id).onkeydown=e=>{const delta={ArrowLeft:-1,ArrowRight:1,ArrowUp:-14,ArrowDown:14};if(e.key in delta||e.key==='Home'||e.key==='End'){e.preventDefault();setPatch(e.key==='Home'?0:e.key==='End'?195:Math.max(0,Math.min(195,ls.patch+delta[e.key])));}};
 }
 window.readLayerObservation=()=>({status:ls.status,a:ls.a,b:ls.b,step:ls.step,patch:ls.patch,vector:ls.vector,metric:ls.manifest&&ls.status==='ready'?pair().metrics[ls.step]:null});
 fetch('data/layers.json').then(r=>{if(!r.ok)throw Error('Manifest unavailable');return r.json();}).then(m=>{
  if(m.schema!=='dinov3-layers.v1'||m.stages.length!==30||m.samples.length!==3||m.samples.some(s=>![94,183,256].includes(s.id)))throw Error('Invalid manifest');
  ls.manifest=m;
  for(const key of ['A','B']){q('#layer'+key).replaceChildren(...m.samples.map(s=>new Option(label(s.id),s.id)));q('#layer'+key).disabled=false;}
  q('#layerB').value=ls.b;window.syncLayers();
 }).catch(()=>{setStatus('error','층별 manifest를 불러오지 못했습니다. 페이지를 새로고침해 주세요. 기존 탐색기는 계속 사용할 수 있습니다.');});
})();
