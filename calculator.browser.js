/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"frequencia-cardiaca-maxima","title":"FC máxima prevista e índice cronotrópico","fields":[["idade","Idade","num",{"min":10,"max":100,"unit":"anos","ph":"50"}],["fcrep","FC de repouso","num",{"min":30,"max":150,"unit":"bpm","ph":"70"}],["fcpico","FC no pico do esforço","num",{"min":50,"max":230,"unit":"bpm","ph":"160"}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=function(a,e){return function(a,e){var r=Math.pow(10,null==e?1:e);return Math.round(a*r)/r}(a,e).toLocaleString("pt-BR",{minimumFractionDigits:null==e?1:e,maximumFractionDigits:null==e?1:e})};
a.def("frequencia-cardiaca-maxima",function(a){var r=220-a.idade,i=208-.7*a.idade,o=a.fcpico/r*100,t=(a.fcpico-a.fcrep)/(r-a.fcrep);return{main:[e(o,0),"%"],label:"da FC máxima prevista (220 − idade)",level:t<.8?"high":o>=85?"low":"mid",verdict:t<.8?"Índice cronotrópico < 0,80: incompetência cronotrópica (sem betabloqueador)":o>=85?"FC submáxima atingida (≥ 85%)":"Não atingiu 85% da FC prevista",rows:[["FC máxima (220 − idade)",e(r,0)+" bpm"],["FC máxima (Tanaka)",e(i,0)+" bpm"],["85% da FC máxima",e(.85*r,0)+" bpm"],["Índice cronotrópico",e(t,2)]],raw:{classic:r,tanaka:i,pct:o,ci:t}}});
})(window.CALC);
function encodeScientificMetricStates(result,values){
 const original=result.raw||{},states={},raw={...original};
 const set=(field,kind,reasonCode)=>{raw[field]=null;states[field]={kind,value:null,symbol:kind==='positive-infinity'?'∞':null,reasonCode};};
 if(TOOL.id==='frequencia-cardiaca-maxima'&&220-values.idade-values.fcrep===0){
  // The chronotropic index is undefined at zero predicted reserve, even if
  // JavaScript happens to return positive/negative Infinity rather than NaN.
  set('ci','undefined','ZERO_CHRONOTROPIC_RESERVE');
 }
 if(TOOL.id==='numero-necessario-para-tratar'&&original.nnt===Infinity)set('nnt','positive-infinity','NEAR_ZERO_ABSOLUTE_RISK_DIFFERENCE');
 if(TOOL.id==='teste-diagnostico-2x2'){
  if(original.lrp===Infinity)set('lrp','positive-infinity','ZERO_FALSE_POSITIVE_RATE');
  else if(Number.isNaN(original.lrp))set('lrp','undefined','NO_POSITIVE_TEST_RESULTS');
  if(original.lrn===Infinity)set('lrn','positive-infinity','ZERO_SPECIFICITY');
  else if(Number.isNaN(original.lrn))set('lrn','undefined','NO_NEGATIVE_TEST_RESULTS');
 }
 return Object.keys(states).length?{raw,metricStates:states}:{raw:original};
}
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  const scientific=encodeScientificMetricStates(r,values);
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:scientific.raw,...(scientific.metricStates?{metricStates:scientific.metricStates}:{}),...(typeof r.level==='string'?{level:r.level}:{}),...(typeof r.verdict==='string'?{verdict:r.verdict}:{}),...(Array.isArray(r.rows)?{rows:r.rows}:{}),...(typeof r.note==='string'&&r.note?{note:r.note}:{}),clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
