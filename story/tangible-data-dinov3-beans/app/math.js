(function(root){
  'use strict';
  const normalize=v=>{const n=Math.hypot(...v);return v.map(x=>x/n)};
  const dot=(a,b)=>a.reduce((s,x,i)=>s+x*b[i],0);
  const gram=f=>f.map(a=>f.map(b=>dot(a,b)));
  const mse=(a,b)=>a.reduce((s,r,i)=>s+r.reduce((t,x,j)=>t+(x-b[i][j])**2,0),0)/(a.length*a[0].length);
  function gramExample(distortion,alpha,rotate){
    const target=Array.from({length:12},(_,i)=>normalize([Math.cos(i*.48),Math.sin(i*.48),Math.cos(i*.17),Math.sin(i*.17),i<6?.8:-.8,.4]));
    const student=target.map((row,i)=>normalize(row.map((v,j)=>v+(1-alpha)*distortion*Math.sin((i+1)*(j+2)*1.71)*1.6)));
    const rotated=rotate?student.map(v=>[v[0]*Math.cos(1.1)-v[1]*Math.sin(1.1),v[0]*Math.sin(1.1)+v[1]*Math.cos(1.1),...v.slice(2)]):student;
    const gt=gram(target),gs=gram(rotated);
    return {target,student:rotated,gt,gs,loss:mse(gt,gs)};
  }
  function emaExample(m){const student=Array.from({length:160},(_,i)=>.35+Math.min(i/95,1)*.85+.17*Math.sin(i*1.71)+.08*Math.cos(i*.57));let v=student[0];const teacher=student.map(x=>(v=m*v+(1-m)*x));return {student,teacher}}
  function tokenCounts(resolution){const patches=(resolution/16)**2,tokens=patches+5;return {patches,tokens,pairs:tokens**2,ratio:tokens**2/201**2}}
  const api={normalize,dot,gram,mse,gramExample,emaExample,tokenCounts};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.DinoMath=api;
})(typeof window!=='undefined'?window:this);
