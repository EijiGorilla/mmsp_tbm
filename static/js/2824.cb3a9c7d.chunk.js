"use strict";(self.webpackChunkmmsp_tbm=self.webpackChunkmmsp_tbm||[]).push([[2824],{42824:(e,t,n)=>{n.r(t),n.d(t,{executeBinsQuery:()=>y});var i=n(23084),r=n(1413),a=n(76200),u=n(35995),o=n(77981),s=n(91340),c=n(92975),f=n(22585);async function l(e,t,n){return async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i="string"==typeof e?(0,u.mN)(e):e,l=t.geometry?[t.geometry]:[],S=await(0,s.aX)(l,null,{signal:n.signal}),m=null===S||void 0===S?void 0:S[0];null!=m&&((t=t.clone()).geometry=m);const y=(0,f.A)((0,r.Z)((0,r.Z)({},i.query),{},{f:"json"},function(e){const t=e.geometry,n=e.toJSON(),i=n;let r,a,u;return null!=t&&(a=t.spatialReference,u=(0,c.B9)(a),i.geometryType=(0,o.Ji)(t),i.geometry=JSON.stringify(t),i.inSR=u),n.outSR?(i.outSR=(0,c.B9)(n.outSR),r=e.outSpatialReference):t&&(i.outSR=i.inSR,r=a),i.bin&&(i.bin=JSON.stringify(i.bin)),i.quantizationParameters&&(i.quantizationParameters=JSON.stringify(i.quantizationParameters)),i.outStatistics&&(i.outStatistics=JSON.stringify(i.outStatistics)),i.outTimeReference&&(i.outTimeReference=JSON.stringify(i.outTimeReference)),e.defaultSpatialReference&&(0,c.fS)(a,r)&&(i.defaultSR=i.inSR,delete i.inSR,delete i.outSR),i}(t)));return(0,a.Z)((0,u.v_)(i.path,"queryBins"),(0,r.Z)((0,r.Z)({},n),{},{query:(0,r.Z)((0,r.Z)({},y),n.query)}))}(e,t,n)}var S=n(49929),m=n(49818);async function y(e,t,n){const{data:r}=await l((0,i.en)(e),S.default.from(t),n);return m.Z.fromJSON(r)}}}]);
//# sourceMappingURL=2824.cb3a9c7d.chunk.js.map