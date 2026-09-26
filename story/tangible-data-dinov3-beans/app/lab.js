'use strict';
// V2 uses the existing picker + change event. No duplicate scientific state.
(() => {
 const picker=document.getElementById('sample');
 const buttons=[...document.querySelectorAll('[data-lab-sample]')];
 let lastComparison='';
 function compare(){
  if(!state.data||!state.images)return;
  const signature=`${picker.value}/${state.lens}`;
  if(lastComparison===signature)return;
  lastComparison=signature;
  const id=Number(picker.value),pad=n=>String(n).padStart(3,'0');
  const ref=document.getElementById('labCompareReference');
  const img=makeSampleImage(id,'comparison-reference');
  const label=document.createElement('span');
  label.textContent=`비교 기준 #${pad(id)} · ${classNames[state.data.samples[id].class]}`;
  ref.replaceChildren(img,label);
  document.getElementById('labCompareStatus').textContent=`#${pad(id)}에서 찾은 네 모델의 이웃 · 현재 자유 탐색 렌즈 ${lens().name}`;
  const rows=state.data.lenses.map(l=>{
   const row=document.createElement('div');row.className='lab-model-row';
   row.dataset.active=String(l.key===state.lens);
   const label=document.createElement('div');label.className='lab-model-name';
   const name=document.createElement('strong');name.textContent=l.name;
   const dim=document.createElement('span');dim.textContent=`${l.dimension.toLocaleString()}차원`;
   const chosen=document.createElement('span');chosen.textContent=l.key===state.lens?'현재 렌즈':'';chosen.className='lab-active-label';
   label.append(name,dim,chosen);
   const list=document.createElement('div');list.className='lab-model-neighbors';list.setAttribute('role','group');list.setAttribute('aria-label',`${l.name}의 이웃 8장`);
   l.neighbors[id].forEach((n,i)=>{
    const b=document.createElement('button');b.type='button';b.className='lab-neighbor';
    const photo=makeSampleImage(n,'comparison-neighbor');
    const meta=document.createElement('span');meta.className='lab-neighbor-meta';meta.textContent=`#${pad(n)} · ${i+1}위`;
    const value=document.createElement('span');value.className='lab-neighbor-value';value.textContent=l.similarities[id][i].toFixed(4);
    b.append(photo,meta,value);b.setAttribute('aria-label',`${l.name} 이웃 ${i+1}위 표본 ${n}, ${classNames[state.data.samples[n].class]}, cosine ${value.textContent} 선택`);
    b.addEventListener('click',()=>{
     document.querySelector(`.lens-controls [data-lens="${l.key}"]`).click();
     picker.value=String(n);picker.dispatchEvent(new Event('change',{bubbles:true}));
     document.getElementById('lab-compare').focus({preventScroll:true});
    });
    list.append(b);
   });row.append(label,list);return row;
  });
  document.getElementById('labNeighborComparison').replaceChildren(...rows);
 }
 function sync(){
  const ready=!picker.disabled;
  buttons.forEach(b=>{const active=ready&&Number(b.dataset.labSample)===Number(picker.value);b.disabled=!ready;b.setAttribute('aria-pressed',String(active));b.querySelector('.lab-choice').textContent=active?'선택한 사진':'사진 선택';});
  document.getElementById('labSelection').textContent=ready?`선택한 사진 #${String(picker.value).padStart(3,'0')} · ${classNames[state.data.samples[Number(picker.value)].class]}`:'기존 이미지와 임베딩을 준비하고 있습니다.';
  if(ready)compare();
 }
 buttons.forEach(b=>b.addEventListener('click',()=>{
  if(picker.disabled)return;
  picker.value=b.dataset.labSample;
  picker.dispatchEvent(new Event('change',{bubbles:true}));
  sync();
 }));
 picker.addEventListener('change',sync);
 new MutationObserver(sync).observe(picker,{attributes:true,attributeFilter:['disabled'],childList:true});
 new MutationObserver(sync).observe(document.getElementById('explorerNextSelection'),{childList:true,characterData:true,subtree:true});
 function reveal(){
  const id=location.hash.slice(1),target=id&&document.getElementById(id);
  if(!target)return;
  if(target.tagName==='DETAILS')target.open=true;
  for(let p=target.parentElement;p;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true;
 }
 document.querySelectorAll('a[href="#explorerIntro"]').forEach(a=>a.addEventListener('click',()=>{document.getElementById('explorerIntro').open=true;}));
 addEventListener('hashchange',reveal);reveal();
 // The guided comparison precedes the full workspace; the original controllers
 // and their controls stay intact. Direct links still reach the same IDs.
 document.getElementById('explorerIntro').before(document.getElementById('lab-compare'));
 const evidence=document.getElementById('evidence');
 const cue=document.createElement('p');cue.className='lab-step-label';
 cue.textContent='장면 04 · 무엇을 남길 것인가';evidence.prepend(cue);
 const provenance=document.createElement('p');provenance.className='note lab-v2-provenance';
 provenance.textContent='V2 재구성 안내: 아래의 추출 기록은 이전 연구 단계의 이력입니다. 이번 V2에서는 저장된 이미지·임베딩·패치·층별 텐서를 그대로 사용했으며, 새 학습·추론·모델 다운로드를 하지 않았습니다.';
 document.querySelector('#sources .section-intro').after(provenance);
 sync();
})();
