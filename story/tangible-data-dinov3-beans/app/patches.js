'use strict';
(() => {
  const q = s => document.querySelector(s);
  const N = 14, P = N * N;
  const pstate = {manifest:null, sample:null, matrix:null, image:null, patch:105, status:'loading', request:0};
  const cache = new Map();
  const names = {angular_leaf_spot:'모무늬병',bean_rust:'녹병',healthy:'건강'};
  const roles = {central:'중심부',peripheral:'주변부'};
  const pad = n => String(n).padStart(3,'0');

  function setStatus(status, message) {
    pstate.status = status;
    q('#patchWorkspace').hidden = status !== 'ready';
    q('#patchUnavailable').hidden = status === 'ready';
    q('#patchUnavailable').textContent = message || '';
  }
  async function loadSample(sample) {
    if (cache.has(sample.id)) return cache.get(sample.id);
    const request = Promise.all([
      fetch(sample.cosine_url).then(async r => {
        if (!r.ok) throw Error('패치 유사도 자료를 읽지 못했습니다.');
        const bytes = await r.arrayBuffer();
        if (bytes.byteLength !== P * P * 4) throw Error('패치 행렬 크기가 일치하지 않습니다.');
        const digest = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)), b => b.toString(16).padStart(2,'0')).join('');
        if (digest !== sample.cosine_sha256) throw Error('패치 행렬의 무결성 검증에 실패했습니다.');
        const view = new DataView(bytes), matrix = new Float32Array(P * P);
        for (let i=0;i<matrix.length;i++) {
          matrix[i] = view.getFloat32(i*4,true);
          if (!Number.isFinite(matrix[i]) || Math.abs(matrix[i]) > 1.00001) throw Error('유효하지 않은 유사도 값입니다.');
        }
        return matrix;
      }),
      new Promise((resolve,reject) => {const image = new Image();image.onload=()=>resolve(image);image.onerror=()=>reject(Error('모델 입력 이미지를 읽지 못했습니다.'));image.src=sample.input_url;}),
      new Promise((resolve,reject) => {const image = new Image();image.onload=()=>resolve(image);image.onerror=()=>reject(Error('원본 이미지를 읽지 못했습니다.'));image.src=sample.original_url;})
    ]);
    cache.set(sample.id,request);
    try {return await request;} catch(error) {cache.delete(sample.id);throw error;}
  }
  function patchColor(value) {
    const end=value<0?[96,150,213]:[248,104,37],base=[244,244,245],t=Math.min(1,Math.abs(value));
    return `rgb(${base.map((v,i)=>Math.round(v+(end[i]-v)*t)).join(',')})`;
  }
  function outline(ctx, cell, selected) {
    const x=selected%N*cell,y=Math.floor(selected/N)*cell;
    ctx.strokeStyle='#171719';ctx.lineWidth=5;ctx.strokeRect(x+2.5,y+2.5,cell-5,cell-5);
    ctx.strokeStyle='#FFC23F';ctx.lineWidth=2;ctx.strokeRect(x+3,y+3,cell-6,cell-6);
  }
  function drawMap() {
    const input=q('#patchInput'),heat=q('#patchHeatmap'),ic=input.getContext('2d'),hc=heat.getContext('2d');
    const cell=input.width/N, row=Math.floor(pstate.patch/N),col=pstate.patch%N;
    ic.clearRect(0,0,input.width,input.height);ic.drawImage(pstate.image,0,0,input.width,input.height);
    ic.strokeStyle='rgba(255,255,255,.4)';ic.lineWidth=.7;
    for(let i=1;i<N;i++){ic.beginPath();ic.moveTo(i*cell,0);ic.lineTo(i*cell,input.height);ic.moveTo(0,i*cell);ic.lineTo(input.width,i*cell);ic.stroke();}
    hc.clearRect(0,0,heat.width,heat.height);
    if(q('#patchOverlay').checked) hc.drawImage(pstate.image,0,0,heat.width,heat.height);
    hc.globalAlpha=q('#patchOverlay').checked?.67:1;
    for(let i=0;i<P;i++){hc.fillStyle=patchColor(pstate.matrix[pstate.patch*P+i]);hc.fillRect(i%N*cell,Math.floor(i/N)*cell,cell,cell);}
    hc.globalAlpha=1;outline(ic,cell,pstate.patch);outline(hc,cell,pstate.patch);
    const detail=q('#patchDetail'),dc=detail.getContext('2d');dc.imageSmoothingEnabled=false;dc.drawImage(pstate.image,col*16,row*16,16,16,0,0,96,96);
  }
  function selectedValues() {return Array.from(pstate.matrix.slice(pstate.patch*P,(pstate.patch+1)*P));}
  function renderPatch() {
    if(pstate.status!=='ready') return;
    const row=Math.floor(pstate.patch/N),col=pstate.patch%N,values=selectedValues();
    q('#patchRow').value=row+1;q('#patchColumn').value=col+1;
    q('#patchReadout').textContent=`패치 #${pad(pstate.patch)} · ${row+1}행 ${col+1}열`;
    q('#patchCoordinates').textContent=`입력 픽셀 x ${col*16}–${col*16+15}, y ${row*16}–${row*16+15} · ID는 0부터`;
    const nearest=values.map((v,i)=>({id:i,value:v})).filter(x=>x.id!==pstate.patch).sort((a,b)=>b.value-a.value||a.id-b.id);
    q('#patchStats').textContent=`최소 ${Math.min(...values).toFixed(4)} · 다른 패치의 최대 ${nearest[0].value.toFixed(4)}`;
    q('#patchNeighbors').replaceChildren(...nearest.slice(0,4).map(p=>{const b=document.createElement('button');b.type='button';b.innerHTML=`#${pad(p.id)}<span>${p.value.toFixed(4)}</span>`;b.setAttribute('aria-label',`패치 ${p.id}, cosine ${p.value.toFixed(4)}를 기준으로 선택`);b.onclick=()=>setPatch(p.id);return b;}));
    q('#patchValueTable').innerHTML='<caption>기준 #'+pad(pstate.patch)+' · 행/열 1–14 · cosine</caption><thead><tr><th>행/열</th>'+Array.from({length:N},(_,i)=>`<th scope="col">${i+1}</th>`).join('')+'</tr></thead><tbody>'+Array.from({length:N},(_,r)=>`<tr><th scope="row">${r+1}</th>`+values.slice(r*N,(r+1)*N).map((v,c)=>`<td data-reference="${r*N+c===pstate.patch}">${v.toFixed(3)}</td>`).join('')+'</tr>').join('')+'</tbody>';
    drawMap();
  }
  function setPatch(id) {
    if(!Number.isInteger(id)||id<0||id>=P) throw Error('Patch must be an integer from 0 through 195');
    pstate.patch=id;renderPatch();
  }
  function renderProvenance(sample) {
    const m=pstate.manifest;
    q('#patchProvenance').replaceChildren();
    const rows=[['모델',m.model.id],['모델 revision',m.model.revision],['가중치 SHA-256',m.model.weight_sha256],['특징',`${m.model.output}; ${m.model.slice}; 196 × 1024; float32`],['정규화','입력 mean [0.485, 0.456, 0.406], std [0.229, 0.224, 0.225]. 출력 패치마다 별도 L2 정규화.'],['실행',`${m.runtime.torch} / Transformers ${m.runtime.transformers} · 학습 없음 · 6장 + 반복 검증 1회`],['반복 검증',`같은 이미지 특징의 최대 절대 차이 ${m.runtime.repeat_max_absolute_difference}`]];
    if(sample) rows.push(['선택 원본',sample.file],['원본 SHA-256',sample.image_sha256],['입력 PNG SHA-256',sample.input_png_sha256],['cosine 행렬 SHA-256',sample.cosine_sha256],['기존 CLS 재현',sample.cls_cosine_to_prior_artifact.toFixed(10)],['행렬 저장 오차',`float64 계산 → float32 저장 최대 차이 ${sample.float32_export_max_error.toExponential(3)}`]);
    for(const [name,value]of rows){const p=document.createElement('p');p.className='patch-provenance-row';const strong=document.createElement('strong');strong.textContent=name;const code=document.createElement('code');code.textContent=value;p.append(strong,document.createElement('br'),code);q('#patchProvenance').append(p);}
  }
  window.syncRealPatches = async function() {
    if(!pstate.manifest||!state.data) return;
    const request=++pstate.request,sample=pstate.manifest.samples.find(s=>s.id===state.sample);
    q('#patchLensNotice').textContent=state.lens==='dinov3_l'?'3D · 패치 모두 DINOv3-L':`3D: ${lens().name} / 아래 패치: DINOv3-L 고정`;
    document.querySelectorAll('[data-patch-sample]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.patchSample)===state.sample)));
    for(const option of q('#sample').options){const id=Number(option.value);option.textContent=`#${pad(id)} · ${classNames[state.data.samples[id].class]}${pstate.manifest.selection.ids.includes(id)?' · 패치 탐색':''}`;}
    let link=q('#patchInspectorLink');if(!link){link=document.createElement('div');link.id='patchInspectorLink';link.className='patch-inspector-link';q('.inspector').append(link);}
    link.innerHTML=`<a href="#real-patches">${sample?'이 표본의 실제 패치 열기 ↓':'패치가 준비된 6장 고르기 ↓'}</a>`;
    q('#patchSampleTitle').textContent=`#${pad(state.sample)} · ${classNames[state.data.samples[state.sample].class]}${sample?' · '+roles[sample.selection_role]:''}`;
    renderProvenance(sample);
    if(!sample){pstate.sample=null;pstate.matrix=null;pstate.image=null;setStatus('unavailable','이 표본은 이번 6장 추론 범위에 포함되지 않습니다. 위의 썸네일에서 표본을 선택해 주세요. 다른 이미지의 지도를 대신 표시하지 않습니다.');return;}
    if(pstate.sample?.id===sample.id&&pstate.status==='ready')return;
    pstate.sample=sample;setStatus('loading','실제 이미지와 검증된 패치 행렬을 불러오는 중입니다…');
    try {
      const [matrix,image]=await loadSample(sample);
      if(request!==pstate.request)return;
      pstate.matrix=matrix;pstate.image=image;pstate.patch=sample.initial_patch;
      const original=q('#patchOriginal');original.src=sample.original_url;original.alt=`#${pad(sample.id)} ${names[sample.class]} 원본 500×500 이미지`;
      setStatus('ready');renderPatch();
    } catch(error) {
      if(request!==pstate.request)return;
      pstate.matrix=null;pstate.image=null;setStatus('error','패치 자료를 읽지 못했습니다. 기존 3D 탐색과 다른 설명은 계속 사용할 수 있습니다.');
      const retry=document.createElement('button');retry.className='patch-error-retry';retry.textContent='이 표본 다시 불러오기';retry.onclick=()=>window.syncRealPatches();q('#patchUnavailable').append(retry);console.warn(error.message);
    }
  };
  for(const id of ['#patchInput','#patchHeatmap']) {
    const canvas=q(id);
    canvas.addEventListener('click',e=>{if(pstate.status!=='ready')return;const r=canvas.getBoundingClientRect(),col=Math.min(N-1,Math.max(0,Math.floor((e.clientX-r.left)/r.width*N))),row=Math.min(N-1,Math.max(0,Math.floor((e.clientY-r.top)/r.height*N)));setPatch(row*N+col);});
    canvas.addEventListener('keydown',e=>{if(pstate.status!=='ready')return;let row=Math.floor(pstate.patch/N),col=pstate.patch%N;if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(e.key))return;e.preventDefault();if(e.key==='ArrowLeft')col=Math.max(0,col-1);if(e.key==='ArrowRight')col=Math.min(N-1,col+1);if(e.key==='ArrowUp')row=Math.max(0,row-1);if(e.key==='ArrowDown')row=Math.min(N-1,row+1);setPatch(e.key==='Home'?0:e.key==='End'?P-1:row*N+col);});
  }
  function readPosition() {const r=Number(q('#patchRow').value),c=Number(q('#patchColumn').value);if(Number.isInteger(r)&&r>=1&&r<=N&&Number.isInteger(c)&&c>=1&&c<=N)setPatch((r-1)*N+c-1);else renderPatch();}
  for(const id of ['#patchRow','#patchColumn']) {
    q(id).addEventListener('change',readPosition);
    q(id).addEventListener('blur',readPosition);
    q(id).addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();readPosition();}});
  }
  q('#patchOverlay').onchange=()=>{if(pstate.status==='ready')drawMap();};
  function readPatch() {
    const result={status:pstate.status,embeddingSample:state.sample,embeddingLens:state.lens,patchModel:'dinov3_l',sample:pstate.sample?.id??null};
    if(pstate.status==='ready')Object.assign(result,{patch:pstate.patch,row:Math.floor(pstate.patch/N)+1,column:pstate.patch%N+1,cosines:selectedValues(),attention:false});
    return result;
  }
  function registerTools() {
    if(!document.modelContext?.registerTool)return;
    const lifecycle=new AbortController();window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
    const register=tool=>{try{Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{}};
    register({name:'read_patch_observation',title:'실제 패치 관측 읽기',description:'선택한 표본과 실제 DINOv3 패치 cosine 지도 값을 읽습니다. attention이나 인과적 설명이 아닙니다.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute:readPatch});
    register({name:'configure_patch_view',title:'실제 패치 기준 선택',description:'기존 3D 표본 선택을 동기화하고 6장 중 하나의 실제 패치 지도를 표시합니다. 신규 추론이나 훈련은 실행하지 않습니다.',inputSchema:{type:'object',properties:{sample:{type:'integer',enum:pstate.manifest.selection.ids},patch:{type:'integer',minimum:0,maximum:195}},required:['sample','patch'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},async execute(input){if(!input||typeof input!=='object'||Object.keys(input).some(k=>!['sample','patch'].includes(k))||!pstate.manifest.selection.ids.includes(input.sample)||!Number.isInteger(input.patch)||input.patch<0||input.patch>=P)throw Error('Choose a prepared sample and integer patch 0–195');await selectSample(input.sample);if(pstate.status!=='ready'||pstate.sample.id!==input.sample)throw Error('Patch data unavailable or selection changed');setPatch(input.patch);return{sample:input.sample,patch:input.patch,status:'ready',model:'dinov3_l'};}});
  }
  fetch('data/patches.json').then(r=>{if(!r.ok)throw Error('Missing patch manifest');return r.json();}).then(async manifest=>{
    if(manifest.schema!=='dinov3-real-patches.v1'||manifest.samples.length!==6)throw Error('Invalid patch manifest');pstate.manifest=manifest;
    q('#patchSamples').replaceChildren(...manifest.samples.map(s=>{const button=document.createElement('button');button.type='button';button.className='patch-sample';button.dataset.patchSample=s.id;button.setAttribute('aria-pressed','false');button.setAttribute('aria-label',`표본 ${s.id} ${names[s.class]} ${roles[s.selection_role]} 선택`);button.innerHTML=`<img src="${s.original_url}" width="500" height="500" alt=""><strong>#${pad(s.id)}</strong><span>${names[s.class]}</span><small>${roles[s.selection_role]}</small>`;button.onclick=()=>{if(state.data)selectSample(s.id);};return button;}));
    await window.syncRealPatches();registerTools();
  }).catch(error=>{setStatus('error','실제 패치 자료를 불러오지 못했습니다. 페이지를 새로고침해 주세요.');q('#patchSampleTitle').textContent='실제 패치 자료 불러오기 실패';console.warn(error.message);});
})();
