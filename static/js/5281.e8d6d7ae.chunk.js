"use strict";(self.webpackChunkmmsp_tbm=self.webpackChunkmmsp_tbm||[]).push([[5281],{96783:(e,n,t)=>{t.d(n,{Z:()=>d});var l=t(27366),a=t(43404),i=t(46784),o=t(49861),r=(t(25243),t(63780),t(93169),t(27135)),s=t(69912);const u=new a.X({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),c=new a.X({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let m=class extends i.wq{constructor(e){super(e),this.type="class-breaks-definition",this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};(0,l._)([(0,r.J)({classBreaksDef:"class-breaks-definition"})],m.prototype,"type",void 0),(0,l._)([(0,o.Cb)({json:{write:!0}})],m.prototype,"breakCount",void 0),(0,l._)([(0,o.Cb)({json:{write:!0}})],m.prototype,"classificationField",void 0),(0,l._)([(0,o.Cb)({type:String,json:{read:u.read,write:u.write}})],m.prototype,"classificationMethod",void 0),(0,l._)([(0,o.Cb)({json:{write:!0}})],m.prototype,"normalizationField",void 0),(0,l._)([(0,o.Cb)({json:{read:c.read,write:c.write}})],m.prototype,"normalizationType",void 0),(0,l._)([(0,o.Cb)({value:null,json:{write:!0}})],m.prototype,"standardDeviationInterval",null),(0,l._)([(0,o.Cb)({value:null,json:{write:!0}})],m.prototype,"definedInterval",null),m=(0,l._)([(0,s.j)("esri.rest.support.ClassBreaksDefinition")],m);const d=m},51905:(e,n,t)=>{t.d(n,{k:()=>i});const l=t(32718).Z.getLogger("esri.rest.support.generateRendererUtils");function a(e,n){return Number(e.toFixed(n))}function i(e){const{normalizationTotal:n}=e;return{classBreaks:o(e),normalizationTotal:n}}function o(e){var n;const t=e.definition,{classificationMethod:l,normalizationType:i,definedInterval:o}=t,c=null!==(n=t.breakCount)&&void 0!==n?n:1,m=[];let d=e.values;if(0===d.length)return[];d=d.sort(((e,n)=>e-n));const f=d[0],p=d[d.length-1];if("equal-interval"===l)if(d.length>=c){const e=(p-f)/c;let n=f;for(let t=1;t<c;t++){const l=a(f+t*e,6);m.push({minValue:n,maxValue:l,label:r(n,l,i)}),n=l}m.push({minValue:n,maxValue:p,label:r(n,p,i)})}else d.forEach((e=>{m.push({minValue:e,maxValue:e,label:r(e,e,i)})}));else if("natural-breaks"===l){const n=s(d),t=e.valueFrequency||n.valueFrequency,l=u(n.uniqueValues,t,c);let o=f;for(let e=1;e<c;e++)if(n.uniqueValues.length>e){const t=a(n.uniqueValues[l[e]],6);m.push({minValue:o,maxValue:t,label:r(o,t,i)}),o=t}m.push({minValue:o,maxValue:p,label:r(o,p,i)})}else if("quantile"===l)if(d.length>=c&&f!==p){let e=f,n=Math.ceil(d.length/c),t=0;for(let l=1;l<c;l++){let a=n+t-1;a>d.length&&(a=d.length-1),a<0&&(a=0),m.push({minValue:e,maxValue:d[a],label:r(e,d[a],i)}),e=d[a],t+=n,n=Math.ceil((d.length-t)/(c-l))}m.push({minValue:e,maxValue:p,label:r(e,p,i)})}else{let e=-1;for(let n=0;n<d.length;n++){const t=d[n];t!==e&&(e=t,m.push({minValue:e,maxValue:t,label:r(e,t,i)}),e=t)}}else if("standard-deviation"===l){const e=function(e){let n=0;for(let t=0;t<e.length;t++)n+=e[t];return n/=e.length,n}(d),n=function(e,n){let t=0;for(let l=0;l<e.length;l++){const a=e[l];t+=(a-n)*(a-n)}return t/=e.length,Math.sqrt(t)}(d,e);if(0===n)m.push({minValue:d[0],maxValue:d[0],label:r(d[0],d[0],i)});else{const t=function(e,n,t,l,a){let i=Math.max(l-e,n-l)/a/t;return i=i>=1?1:i>=.5?.5:.25,i}(f,p,c,e,n)*n;let l=0,o=f;for(let n=c;n>=1;n--){const s=a(e-(n-.5)*t,6);m.push({minValue:o,maxValue:s,label:r(o,s,i)}),o=s,l++}let s=a(e+.5*t,6);m.push({minValue:o,maxValue:s,label:r(o,s,i)}),o=s,l++;for(let n=1;n<=c;n++)s=l===2*c?p:a(e+(n+.5)*t,6),m.push({minValue:o,maxValue:s,label:r(o,s,i)}),o=s,l++}}else if("defined-interval"===l){if(!o)return m;const e=d[0],n=d[d.length-1],t=Math.ceil((n-e)/o);let l=e;for(let s=1;s<t;s++){const n=a(e+s*o,6);m.push({minValue:l,maxValue:n,label:r(l,n,i)}),l=n}m.push({minValue:l,maxValue:n,label:r(l,n,i)})}return m}function r(e,n,t){let l=null;return l=e===n?t&&"percent-of-total"===t?e+"%":e.toString():t&&"percent-of-total"===t?e+"% - "+n+"%":e+" - "+n,l}function s(e){const n=[],t=[];let l=Number.MIN_VALUE,a=1,i=-1;for(let o=0;o<e.length;o++){const r=e[o];r===l?(a++,t[i]=a):null!==r&&(n.push(r),l=r,a=1,t.push(a),i++)}return{uniqueValues:n,valueFrequency:t}}function u(e,n,t){const l=e.length,a=[];t>l&&(t=l);for(let o=0;o<t;o++)a.push(Math.round(o*l/t-1));a.push(l-1);let i=c(a,e,n,t);return function(e,n,t,l,a,i){let o=0,r=0,s=0,u=0,c=!0;for(let d=0;d<2&&c;d++){0===d&&(c=!1);for(let d=0;d<i-1;d++)for(;t[d+1]+1!==t[d+2];){t[d+1]=t[d+1]+1;const i=m(d,t,l,a);s=i.sbMean,o=i.sbSdcm;const f=m(d+1,t,l,a);if(u=f.sbMean,r=f.sbSdcm,!(o+r<n[d]+n[d+1])){t[d+1]=t[d+1]-1;break}n[d]=o,n[d+1]=r,e[d]=s,e[d+1]=u,c=!0}for(let d=i-1;d>0;d--)for(;t[d]!==t[d-1]+1;){t[d]=t[d]-1;const i=m(d-1,t,l,a);s=i.sbMean,o=i.sbSdcm;const f=m(d,t,l,a);if(u=f.sbMean,r=f.sbSdcm,!(o+r<n[d-1]+n[d])){t[d]=t[d]+1;break}n[d-1]=o,n[d]=r,e[d-1]=s,e[d]=u,c=!0}}return c}(i.mean,i.sdcm,a,e,n,t)&&(i=c(a,e,n,t)),a}function c(e,n,t,l){let a=[],i=[],o=[],r=0;const s=[],u=[];for(let p=0;p<l;p++){const l=m(p,e,n,t);s.push(l.sbMean),u.push(l.sbSdcm),r+=u[p]}let c,d=r,f=!0;for(;f||r<d;){f=!1,a=[];for(let n=0;n<l;n++)a.push(e[n]);for(let t=0;t<l;t++)for(let a=e[t]+1;a<=e[t+1];a++)if(c=n[a],t>0&&a!==e[t+1]&&Math.abs(c-s[t])>Math.abs(c-s[t-1]))e[t]=a;else if(t<l-1&&e[t]!==a-1&&Math.abs(c-s[t])>Math.abs(c-s[t+1])){e[t+1]=a-1;break}d=r,r=0,i=[],o=[];for(let a=0;a<l;a++){i.push(s[a]),o.push(u[a]);const l=m(a,e,n,t);s[a]=l.sbMean,u[a]=l.sbSdcm,r+=u[a]}}if(r>d){for(let n=0;n<l;n++)e[n]=a[n],s[n]=i[n],u[n]=o[n];r=d}return{mean:s,sdcm:u}}function m(e,n,t,a){let i=0,o=0;for(let l=n[e]+1;l<=n[e+1];l++){const e=a[l];i+=t[l]*e,o+=e}o<=0&&l.warn("Exception in Natural Breaks calculation");const r=i/o;let s=0;for(let l=n[e]+1;l<=n[e+1];l++)s+=a[l]*(t[l]-r)**2;return{sbMean:r,sbSdcm:s}}},95281:(e,n,t)=>{t.d(n,{do:()=>y,gq:()=>h,qQ:()=>b,yO:()=>g});t(59486),t(10064);var l=t(17842),a=t(86710),i=t(78952),o=t(58971),r=t(92975),s=t(37270),u=t(27811),c=t(62734),m=t(71486),d=t(819),f=t(585);let p=null;const v=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function h(e,n,t,l){const a=(0,r.MP)(t)?(0,r.C5)(t):null,i=a?Math.round((a.valid[1]-a.valid[0])/n.scale[0]):null;return e.map((e=>{const t=new f.Z(e.geometry);return(0,o.RF)(n,t,t,t.hasZ,t.hasM),e.geometry=a?function(e,n,t){return e.x<0?e.x+=n:e.x>t&&(e.x-=n),e}(t,null!==i&&void 0!==i?i:0,l[0]):t,e}))}function b(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,t=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0;const r=new Float64Array(i*o);n=Math.round((0,l.F2)(n));let s=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,m=0,d=0,f=0,p=0;const v=(0,u.wx)(a,t);for(const{geometry:l,attributes:b}of e){const{x:e,y:t}=l,a=Math.max(0,e-n),h=Math.max(0,t-n),g=Math.min(o,t+n),y=Math.min(i,e+n),V=+v(b);for(let l=h;l<g;l++)for(let o=a;o<y;o++){const a=l*i+o,v=(0,u.If)(o-e,l-t,n),h=r[a];m=r[a]+=v*V;const b=m-h;d+=b,f+=b*b,m<s&&(s=m),m>c&&(c=m),p++}}if(!p)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const h=(c-s)/2;return{mean:d/p,stdDev:Math.sqrt((f-d*d/p)/p),min:s,max:c,mid:h,count:p}}function g(e){const n=v.exec(e);if(!n)return null;const{hh:t,mm:l,ss:i,ms:o}=n.groups;return Number(t)*a.fM.hours+Number(l)*a.fM.minutes+Number(i)*a.fM.seconds+Number(o||0)}async function y(e,n){let t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!n)return[];const{field:l,field2:a,field3:o,fieldDelimiter:r,fieldInfos:u,timeZone:f}=e,v=l&&(null===u||void 0===u?void 0:u.find((e=>e.name.toLowerCase()===l.toLowerCase()))),h=!!v&&(0,s.sX)(v),b=!!v&&(0,c.a8)(v),y=e.valueExpression,V=e.normalizationType,x=e.normalizationField,T=e.normalizationTotal,F=[],M=e.viewInfoParams;let I=null,w=null;if(y){if(!p){const{arcadeUtils:e}=await(0,d.LC)();p=e}p.hasGeometryOperations(y)&&await p.enableGeometryOperations(),I=p.createFunction(y),w=M?p.getViewInfo({viewingMode:M.viewingMode,scale:M.scale,spatialReference:new i.Z(M.spatialReference)}):null}const N=e.fieldInfos,z=n[0]&&"declaredClass"in n[0]&&"esri.Graphic"===n[0].declaredClass||!N?null:{fields:N};return n.forEach((e=>{const n=e.attributes;let i;if(y){const n=z?{...e,layer:z}:e,t=p.createExecContext(n,w,f);i=p.executeFunction(I,t)}else n&&(i=n[l],a?(i="".concat((0,m.wk)(i)).concat(r).concat((0,m.wk)(n[a])),o&&(i="".concat(i).concat(r).concat((0,m.wk)(n[o])))):"string"==typeof i&&t&&(b?i=i?new Date(i).getTime():null:h&&(i=i?g(i):null)));if(V&&"number"==typeof i&&isFinite(i)){const e=n&&parseFloat(n[x]);i=(0,m.fk)(i,V,e,T)}F.push(i)})),F}},62734:(e,n,t)=>{t.d(n,{$8:()=>r,a8:()=>o});var l=t(76969),a=t(37270),i=(t(819),t(23037),t(6701));new Set(["integer","small-integer"]);function o(e){return(0,a.y2)(e)||(0,a.UQ)(e)||(0,a.ig)(e)}function r(e,n){const{format:t,timeZoneOptions:a,fieldType:o}=null!==n&&void 0!==n?n:{};let r,s;if(a&&({timeZone:r,timeZoneName:s}=(0,i.Np)(a.layerTimeZone,a.datesInUnknownTimezone,a.viewTimeZone,(0,l.Ze)(t||"short-date-short-time"),o)),"string"==typeof e&&isNaN(Date.parse("time-only"===o?"1970-01-01T".concat(e,"Z"):e)))return e;switch(o){case"date-only":{const n=(0,l.Ze)(t||"short-date");return"string"==typeof e?(0,l.o8)(e,{...n}):(0,l.p6)(e,{...n,timeZone:i.pt})}case"time-only":{const n=(0,l.Ze)(t||"short-time");return"string"==typeof e?(0,l.LJ)(e,n):(0,l.p6)(e,{...n,timeZone:i.pt})}case"timestamp-offset":{if(!r&&"string"==typeof e&&new Date(e).toISOString()!==e)return e;const n=t||a?(0,l.Ze)(t||"short-date-short-time"):void 0,i=n?{...n,timeZone:r,timeZoneName:s}:void 0;return"string"==typeof e?(0,l.i$)(e,i):(0,l.p6)(e,i)}default:{const n=t||a?(0,l.Ze)(t||"short-date-short-time"):void 0;return(0,l.p6)("string"==typeof e?new Date(e):e,n?{...n,timeZone:r,timeZoneName:s}:void 0)}}}},71486:(e,n,t)=>{t.d(n,{DL:()=>O,F_:()=>C,G2:()=>E,H0:()=>h,Lq:()=>y,Qm:()=>Z,S5:()=>v,XL:()=>g,eT:()=>S,fk:()=>_,i5:()=>b,oF:()=>L,wk:()=>p});var l=t(96783),a=t(51905);const i="<Null>",o="equal-interval",r=1,s=5,u=10,c=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,m=new Set(["esriFieldTypeDate","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeOID","esriFieldTypeBigInteger"]),d=new Set(["esriFieldTypeTimeOnly","esriFieldTypeDateOnly"]),f=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function p(e){return null==e||"string"==typeof e&&!e?i:e}function v(e){const n=null!=e.normalizationField||null!=e.normalizationType,t=null!=e.minValue||null!=e.maxValue,l=!!e.sqlExpression&&e.supportsSQLExpression;return!n&&!t&&!l}function h(e){const n=e.returnDistinct?[...new Set(e.values)]:e.values,t=n.filter((e=>null!=e)).sort(),l=t.length,a={count:l,min:t[0],max:t[l-1]};return e.supportsNullCount&&(a.nullcount=n.length-l),e.percentileParams&&(a.median=g(n,e.percentileParams)),a}function b(e){const{values:n,useSampleStdDev:t,supportsNullCount:l}=e;let a=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,o=null,r=null,s=null,u=null,c=0;const m=null==e.minValue?-1/0:e.minValue,d=null==e.maxValue?1/0:e.maxValue;for(const p of n)Number.isFinite(p)?p>=m&&p<=d&&(o=null===o?p:o+p,a=Math.min(a,p),i=Math.max(i,p),c++):"string"==typeof p&&c++;if(c&&null!=o){r=o/c;let e=0;for(const t of n)Number.isFinite(t)&&t>=m&&t<=d&&(e+=(t-r)**2);u=t?c>1?e/(c-1):0:c>0?e/c:0,s=Math.sqrt(u)}else a=null,i=null;const f={avg:r,count:c,max:i,min:a,stddev:s,sum:o,variance:u};return l&&(f.nullcount=n.length-c),e.percentileParams&&(f.median=g(n,e.percentileParams)),f}function g(e,n){const{fieldType:t,value:l,orderBy:a,isDiscrete:i}=n,o=y(t,"desc"===a);if(0===(e=[...e].filter((e=>null!=e)).sort(((e,n)=>o(e,n)))).length)return null;if(l<=0)return e[0];if(l>=1)return e[e.length-1];const r=(e.length-1)*l,s=Math.floor(r),u=s+1,c=r%1,m=e[s],d=e[u];return u>=e.length||i||"string"==typeof m||"string"==typeof d?m:m*(1-c)+d*c}function y(e,n){if(e){if(m.has(e))return D(n);if(d.has(e))return w(n,!1);if("esriFieldTypeTimestampOffset"===e)return function(e){return e?F:T}(n);const t=w(n,!0);if("esriFieldTypeString"===e)return t;if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e)return(e,n)=>t(k(e),k(n))}const t=n?1:-1,l=D(n),a=w(n,!0);return(e,n)=>"number"==typeof e&&"number"==typeof n?l(e,n):"string"==typeof e&&"string"==typeof n?a(e,n):t}const V=(e,n)=>null==e?null==n?0:1:null==n?-1:null,x=(e,n)=>null==e?null==n?0:-1:null==n?1:null;const T=(e,n)=>{var t;return null!==(t=x(e,n))&&void 0!==t?t:e===n?0:new Date(e).getTime()-new Date(n).getTime()},F=(e,n)=>{var t;return null!==(t=V(e,n))&&void 0!==t?t:e===n?0:new Date(n).getTime()-new Date(e).getTime()};const M=(e,n)=>{var t;return null!==(t=x(e,n))&&void 0!==t?t:e===n?0:e<n?-1:1},I=(e,n)=>{var t;return null!==(t=V(e,n))&&void 0!==t?t:e===n?0:e<n?1:-1};function w(e,n){if(!n)return e?I:M;const t=function(e){return e?V:x}(e);return e?(e,n)=>{const l=t(e,n);return null!=l?l:(e=e.toUpperCase())>(n=n.toUpperCase())?-1:e<n?1:0}:(e,n)=>{const l=t(e,n);return null!=l?l:(e=e.toUpperCase())<(n=n.toUpperCase())?-1:e>n?1:0}}const N=(e,n)=>{var t;return null!==(t=V(e,n))&&void 0!==t?t:n-e},z=(e,n)=>{var t;return null!==(t=x(e,n))&&void 0!==t?t:e-n};function D(e){return e?N:z}function k(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function C(e,n){let t;for(t in e)f.includes(t)&&(Number.isFinite(e[t])||(e[t]=null));return n?(["avg","stddev","variance"].forEach((n=>{var t;null!=e[n]&&(e[n]=Math.ceil(null!==(t=e[n])&&void 0!==t?t:0))})),e):e}function S(e){const n={};for(let t of e)(null==t||"string"==typeof t&&""===t.trim())&&(t=null),null==n[t]?n[t]={count:1,data:t}:n[t].count++;return{count:n}}function q(e){return"coded-value"!==(null===e||void 0===e?void 0:e.type)?[]:e.codedValues.map((e=>e.code))}function Z(e,n,t,l){const a=e.count,i=[];if(t&&n){const e=[],t=q(n[0]);for(const a of t)if(n[1]){const t=q(n[1]);for(const i of t)if(n[2]){const t=q(n[2]);for(const n of t)e.push("".concat(p(a)).concat(l).concat(p(i)).concat(l).concat(p(n)))}else e.push("".concat(p(a)).concat(l).concat(p(i)))}else e.push(a);for(const n of e)a.hasOwnProperty(n)||(a[n]={data:n,count:0})}for(const o in a){const e=a[o];i.push({value:e.data,count:e.count,label:e.label})}return{uniqueValueInfos:i}}function _(e,n,t,l){let a=null;switch(n){case"log":0!==e&&(a=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(a=e/l*100);break;case"field":Number.isFinite(t)&&0!==t&&(a=e/t);break;case"natural-log":e>0&&(a=Math.log(e));break;case"square-root":e>0&&(a=e**.5)}return a}function E(e,n){const t=B({field:n.field,normalizationType:n.normalizationType,normalizationField:n.normalizationField,classificationMethod:n.classificationMethod,standardDeviationInterval:n.standardDeviationInterval,breakCount:n.numClasses||s});return e=function(e,n,t){const l=null!==n&&void 0!==n?n:-1/0,a=null!==t&&void 0!==t?t:1/0;return e.filter((e=>Number.isFinite(e)&&e>=l&&e<=a))}(e,n.minValue,n.maxValue),(0,a.k)({definition:t,values:e,normalizationTotal:n.normalizationTotal})}function B(e){const{breakCount:n,field:t,normalizationField:a,normalizationType:i}=e,s=e.classificationMethod||o,u="standard-deviation"===s?e.standardDeviationInterval||r:void 0;return new l.Z({breakCount:n,classificationField:t,classificationMethod:s,normalizationField:"field"===i?a:void 0,normalizationType:i,standardDeviationInterval:u})}function O(e,n){var t,l;let a=e.classBreaks;const i=a.length,o=null===(t=a[0])||void 0===t?void 0:t.minValue,r=null===(l=a[i-1])||void 0===l?void 0:l.maxValue,s="standard-deviation"===n,u=c;return a=a.map((e=>{const n=e.label,t={minValue:e.minValue,maxValue:e.maxValue,label:n};if(s&&n){var l;const e=n.match(u),a=null!==(l=null===e||void 0===e?void 0:e.map((e=>+e.trim())))&&void 0!==l?l:[];2===a.length?(t.minStdDev=a[0],t.maxStdDev=a[1],a[0]<0&&a[1]>0&&(t.hasAvg=!0)):1===a.length&&(n.includes("<")?(t.minStdDev=null,t.maxStdDev=a[0]):n.includes(">")&&(t.minStdDev=a[0],t.maxStdDev=null))}return t})),{minValue:o,maxValue:r,classBreakInfos:a,normalizationTotal:e.normalizationTotal}}function L(e,n){var t,l;const a=P(e,n);if(null==a.min&&null==a.max)return{bins:[],minValue:a.min,maxValue:a.max,normalizationTotal:n.normalizationTotal};const i=a.intervals,o=null!==(t=a.min)&&void 0!==t?t:0,r=null!==(l=a.max)&&void 0!==l?l:0,s=i.map(((e,n)=>({minValue:i[n][0],maxValue:i[n][1],count:0})));for(const u of e)if(null!=u&&u>=o&&u<=r){const e=U(i,u);e>-1&&s[e].count++}return{bins:s,minValue:o,maxValue:r,normalizationTotal:n.normalizationTotal}}function P(e,n){const{field:t,classificationMethod:l,standardDeviationInterval:a,normalizationType:i,normalizationField:o,normalizationTotal:r,minValue:s,maxValue:c}=n,m=n.numBins||u;let d=null,f=null,p=null;if(l&&"equal-interval"!==l||i){const{classBreaks:n}=E(e,{field:t,normalizationType:i,normalizationField:o,normalizationTotal:r,classificationMethod:l,standardDeviationInterval:a,minValue:s,maxValue:c,numClasses:m});d=n[0].minValue,f=n[n.length-1].maxValue,p=n.map((e=>[e.minValue,e.maxValue]))}else{var h,g;if(null!=s&&null!=c)d=s,f=c;else{var y,V;const n=b({values:e,minValue:s,maxValue:c,useSampleStdDev:!i,supportsNullCount:v({normalizationType:i,normalizationField:o,minValue:s,maxValue:c})});d=null!==(y=n.min)&&void 0!==y?y:null,f=null!==(V=n.max)&&void 0!==V?V:null}p=function(e,n,t){const l=(n-e)/t,a=[];let i,o=e;for(let r=1;r<=t;r++)i=o+l,i=Number(i.toFixed(16)),a.push([o,r===t?n:i]),o=i;return a}(null!==(h=d)&&void 0!==h?h:0,null!==(g=f)&&void 0!==g?g:0,m)}return{min:d,max:f,intervals:p}}function U(e,n){let t=-1;for(let l=e.length-1;l>=0;l--)if(n>=e[l][0]){t=l;break}return t}}}]);
//# sourceMappingURL=5281.e8d6d7ae.chunk.js.map