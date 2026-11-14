'use strict';
// Reuse the explorer's existing selection event; no duplicate selection state or inference.
(() => {
 const picker=document.getElementById('sample');
 const buttons=[...document.querySelectorAll('[data-context-sample]')];
 const status=document.getElementById('contextSelectionStatus');
 function sync(){
  const ready=!picker.disabled;
  buttons.forEach(button=>button.disabled=!ready);
  status.textContent=ready?'실제 사진의 표본 탐색 버튼을 누르면 3D 선택·이웃·패치·층별 상세가 함께 바뀝니다.':'사진은 기존 원본입니다. 탐색 데이터가 준비되면 표본 선택 버튼이 활성화됩니다.';
 }
 buttons.forEach(button=>button.addEventListener('click',()=>{
  if(picker.disabled)return;
  picker.value=button.dataset.contextSample;
  picker.dispatchEvent(new Event('change',{bubbles:true}));
  document.getElementById('explorer').scrollIntoView({block:'start'});
  picker.focus({preventScroll:true});
 }));
 new MutationObserver(sync).observe(picker,{attributes:true,attributeFilter:['disabled']});
 sync();
})();
