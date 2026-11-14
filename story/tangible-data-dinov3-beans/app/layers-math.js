'use strict';
// Pure observations of saved tensors. No inference, mutation or semantic labels.
const LayerMath = (() => {
 function cosineDistance(a,b) {
  if(a.length!==b.length||!a.length)throw Error('Vector size mismatch');
  let dot=0,aa=0,bb=0;
  for(let i=0;i<a.length;i++){if(!Number.isFinite(a[i])||!Number.isFinite(b[i]))throw Error('Non-finite value');dot+=a[i]*b[i];aa+=a[i]*a[i];bb+=b[i]*b[i];}
  if(!aa||!bb)throw Error('Zero norm');return 1-dot/Math.sqrt(aa*bb);
 }
 function featureVector(data,kind,type,patch) {
  if(type==='cls')return kind==='tokens'?data.subarray(0,1024):kind==='cls'?data:null;
  if(kind!=='tokens'&&kind!=='patch')return null;
  const offset=(patch+(kind==='tokens'?5:0))*1024;return data.subarray(offset,offset+1024);
 }
 function extremes(metrics,key) {
  let increase=null,decrease=null;
  for(let i=1;i<metrics.length;i++){
   if(metrics[i][key]===null||metrics[i-1][key]===null)continue;
   const delta=metrics[i][key]-metrics[i-1][key],v={start:i-1,end:i,delta};
   if(delta>1e-12&&(!increase||delta>increase.delta))increase=v;
   if(delta< -1e-12&&(!decrease||delta<decrease.delta))decrease=v;
  }
  return{increase,decrease};
 }
 return{cosineDistance,featureVector,extremes};
})();
if(typeof module!=='undefined')module.exports=LayerMath;
