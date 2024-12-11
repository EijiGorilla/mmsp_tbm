"use strict";(self.webpackChunkmmsp_tbm=self.webpackChunkmmsp_tbm||[]).push([[1340],{91340:(e,t,n)=>{n.d(t,{it:()=>R,aX:()=>M,hR:()=>w});var s=n(42265),o=n(10064),r=n(32718),i=n(80885),c=n(29909),f=n(76335),l=n(92975),u=n(81753),a=n(1413),p=(n(59486),n(76200)),h=n(77981),y=n(23084);var g=n(35995),m=n(35594);const Z=()=>r.Z.getLogger("esri.geometry.support.normalizeUtils");function d(e){return"polygon"===e[0].type}function x(e){return"polyline"===e[0].type}function w(e,t){if(!(e instanceof c.Z||e instanceof i.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw Z().error(e),new o.Z(e)}const n=(0,f.x3)(e),s=[];for(const o of n){const e=[];s.push(e),e.push([o[0][0],o[0][1]]);for(let n=0;n<o.length-1;n++){const s=o[n][0],r=o[n][1],i=o[n+1][0],c=o[n+1][1],f=Math.sqrt((i-s)*(i-s)+(c-r)*(c-r)),l=(c-r)/f,u=(i-s)/f,a=f/t;if(a>1){for(let c=1;c<=a-1;c++){const n=c*t,o=u*n+s,i=l*n+r;e.push([o,i])}const n=(f+Math.floor(a-1)*t)/2,o=u*n+s,i=l*n+r;e.push([o,i])}e.push([i,c])}}return function(e){return"polygon"===e.type}(e)?new i.Z({rings:s,spatialReference:e.spatialReference}):new c.Z({paths:s,spatialReference:e.spatialReference})}function b(e,t,n){if(t){const t=w(e,1e6);e=(0,u.Sx)(t,!0)}return n&&(e=(0,f.Sy)(e,n)),e}function S(e,t,n){if(Array.isArray(e)){const s=e[0];if(s>t){const n=(0,f.XZ)(s,t);e[0]=s+n*(-2*t)}else if(s<n){const t=(0,f.XZ)(s,n);e[0]=s+t*(-2*n)}}else{const s=e.x;if(s>t){const n=(0,f.XZ)(s,t);e=e.clone().offset(n*(-2*t),0)}else if(s<n){const t=(0,f.XZ)(s,n);e=e.clone().offset(t*(-2*n),0)}}return e}function v(e,t){let n=-1;for(let s=0;s<t.cutIndexes.length;s++){const o=t.cutIndexes[s],r=t.geometries[s],i=(0,f.x3)(r);for(let e=0;e<i.length;e++){const t=i[e];t.some((n=>{if(n[0]<180)return!0;{let n=0;for(let e=0;e<t.length;e++){const s=t[e][0];n=s>n?s:n}n=Number(n.toFixed(9));const s=-360*(0,f.XZ)(n,180);for(let o=0;o<t.length;o++){const t=r.getPoint(e,o);r.setPoint(e,o,t.clone().offset(s,0))}return!0}}))}if(o===n){if(d(e))for(const t of(0,f.x3)(r))e[o]=e[o].addRing(t);else if(x(e))for(const t of(0,f.x3)(r))e[o]=e[o].addPath(t)}else n=o,e[o]=r}return e}async function M(e,t,n){var o;if(!Array.isArray(e))return M([e],t);t&&"string"!=typeof t&&Z().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const r="string"==typeof t?t:null!==(o=null===t||void 0===t?void 0:t.url)&&void 0!==o?o:s.default.geometryServiceUrl;let d,x,w,R,X,N,J,q,O=0;const L=[],U=[];for(const s of e)if(null!=s)if(d||(d=s.spatialReference,x=(0,l.C5)(d),w=d.isWebMercator,N=w?102100:4326,R=f.UZ[N].maxX,X=f.UZ[N].minX,J=f.UZ[N].plus180Line,q=f.UZ[N].minus180Line),x)if("mesh"===s.type)U.push(s);else if("point"===s.type)U.push(S(s.clone(),R,X));else if("multipoint"===s.type){const e=s.clone();e.points=e.points.map((e=>S(e,R,X))),U.push(e)}else if("extent"===s.type){const e=s.clone()._normalize(!1,!1,x);U.push(e.rings?new i.Z(e):e)}else if(s.extent){const e=s.extent,t=(0,f.XZ)(e.xmin,X)*(2*R);let n=0===t?s.clone():(0,f.Sy)(s.clone(),t);e.offset(t,0);let{xmin:o,xmax:r}=e;o=Number(o.toFixed(9)),r=Number(r.toFixed(9)),e.intersects(J)&&r!==R?(O=r>O?r:O,n=b(n,w),L.push(n),U.push("cut")):e.intersects(q)&&o!==X?(O=r*(2*R)>O?r*(2*R):O,n=b(n,w,360),L.push(n),U.push("cut")):U.push(n)}else U.push(s.clone());else U.push(s);else U.push(s);let A=(0,f.XZ)(O,R),C=-90;const j=A,F=new c.Z;for(;A>0;){const e=360*A-180;F.addPath([[e,C],[e,-1*C]]),C*=-1,A--}if(L.length>0&&j>0){const t=v(L,await async function(e,t,n,s){const o=(0,y.en)(e),r=t[0].spatialReference,i=(0,a.Z)((0,a.Z)({},s),{},{responseType:"json",query:(0,a.Z)((0,a.Z)({},o.query),{},{f:"json",sr:(0,l.B9)(r),target:JSON.stringify({geometryType:(0,h.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(n)})}),c=await(0,p.Z)(o.path+"/cut",i),{cutIndexes:f,geometries:u=[]}=c.data;return{cutIndexes:f,geometries:u.map((e=>{const t=(0,h.im)(e);return t.spatialReference=r,t}))}}(r,L,F,n)),s=[],o=[];for(let n=0;n<U.length;n++){const r=U[n];if("cut"!==r)o.push(r);else{const r=t.shift(),i=e[n];null!=i&&"polygon"===i.type&&i.rings&&i.rings.length>1&&r.rings.length>=i.rings.length?(s.push(r),o.push("simplify")):o.push(w?(0,u.$)(r):r)}}if(!s.length)return o;const i=await async function(e,t,n){const s="string"==typeof e?(0,g.mN)(e):e,o=t[0].spatialReference,r=(0,h.Ji)(t[0]),i=(0,a.Z)((0,a.Z)({},n),{},{query:(0,a.Z)((0,a.Z)({},s.query),{},{f:"json",sr:(0,l.B9)(o),geometries:JSON.stringify((0,m.F)(t))})}),{data:c}=await(0,p.Z)(s.path+"/simplify",i);return(0,m.o)(c.geometries,r,o)}(r,s,n),c=[];for(let e=0;e<o.length;e++){const t=o[e];"simplify"!==t?c.push(t):c.push(w?(0,u.$)(i.shift()):i.shift())}return c}const W=[];for(let s=0;s<U.length;s++){const e=U[s];if("cut"!==e)W.push(e);else{const e=L.shift();W.push(!0===w?(0,u.$)(e):e)}}return W}function R(e,t,n){const s=(0,l.C5)(n);if(null==s)return e;const[o,r]=s.valid,i=2*r;let c=0,f=0;t>r?c=Math.ceil(Math.abs(t-r)/i):t<o&&(c=-Math.ceil(Math.abs(t-o)/i)),e>r?f=Math.ceil(Math.abs(e-r)/i):e<o&&(f=-Math.ceil(Math.abs(e-o)/i));let u=e+(c-f)*i;const a=u-t;return a>r?u-=i:a<o&&(u+=i),u}},76335:(e,t,n)=>{n.d(t,{Sy:()=>f,UZ:()=>i,XZ:()=>c,x3:()=>l});var s=n(29909),o=n(78952),r=n(77981);const i={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new s.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:o.Z.WebMercator}),minus180Line:new s.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:o.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new s.Z({paths:[[[180,-180],[180,180]]],spatialReference:o.Z.WGS84}),minus180Line:new s.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:o.Z.WGS84})}};function c(e,t){return Math.ceil((e-t)/(2*t))}function f(e,t){const n=l(e);for(const s of n)for(const e of s)e[0]+=t;return e}function l(e){return(0,r.oU)(e)?e.rings:e.paths}},35594:(e,t,n)=>{n.d(t,{F:()=>o,o:()=>r});var s=n(77981);function o(e){return{geometryType:(0,s.Ji)(e[0]),geometries:e.map((e=>e.toJSON()))}}function r(e,t,n){const o=(0,s.q9)(t);return e.map((e=>{const t=o.fromJSON(e);return t.spatialReference=n,t}))}},23084:(e,t,n)=>{n.d(t,{cv:()=>f,en:()=>c,lA:()=>i});var s=n(1413),o=(n(42265),n(19545),n(84652)),r=n(35995);n(66660);function i(e,t){return t?(0,s.Z)((0,s.Z)({},t),{},{query:(0,s.Z)((0,s.Z)({},null!==e&&void 0!==e?e:{}),t.query)}):{query:e}}function c(e){return"string"==typeof e?(0,r.mN)(e):(0,o.d9)(e)}function f(e,t,n){const s={};for(const o in e){if("declaredClass"===o)continue;const r=e[o];if(null!=r&&"function"!=typeof r)if(Array.isArray(r))s[o]=r.map((e=>f(e)));else if("object"==typeof r)if(r.toJSON){const e=r.toJSON(null===n||void 0===n?void 0:n[o]);s[o]=t?e:JSON.stringify(e)}else s[o]=t?r:JSON.stringify(r);else s[o]=r}return s}}}]);
//# sourceMappingURL=1340.3c4ee203.chunk.js.map