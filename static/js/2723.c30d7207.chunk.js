/*! For license information please see 2723.c30d7207.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmmsp_tbm=self.webpackChunkmmsp_tbm||[]).push([[2723],{42723:(t,n,e)=>{e.r(n),e.d(n,{groupTimeZones:()=>d});const o=(()=>{const t=Intl.supportedValuesOf("timeZone");return[...new Set([...t,"Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9"])]})(),l={startDate:(new Date).toISOString(),groupDateRange:365,debug:!1},a=new Set(["Europe","Asia","America","America/Argentina","Africa","Australia","Pacific","Atlantic","Antarctica","Arctic","Indian"]),i=t=>{if(t.includes("Istanbul"))return"Europe";const n=t.lastIndexOf("/");return-1===n?t:t.slice(0,n)},c=t=>a.has(t),r=function(t,n,e,o){let l=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const a=new Map;l&&console.log("Initializing data starting ".concat(n," with ").concat(e," days in the future, comparing ").concat(t.length," timezones"));const r=((t,n,e)=>{const o=[];let l=e.create(t);for(let a=0;a<=n;a++)l=e.increase(l),o.push(e.formatToIsoDateString(l));return o})(n,e,o);return t.map((t=>{const n=t.label,e=i(n),l=r.map((t=>{const e="".concat(t,"-").concat(n);let l=a.get(e);return l||(l=o.isoToTimeZone(t,n),a.set(e,l),l)}));return{...t,continent:e,isRegularContinent:c(e),dates:l}}))},s=(t,n,e)=>t.length===n.length&&t.every(((t,o)=>e.same(t,n[o]))),u=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;const e=t.filter((t=>{let{label:n}=t;return c(i(n))}));if(0===e.length)return[0];return function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;const e=t.length;if(e<=n)return t;const o=Math.min(e-2,n-2),l=(e-1)/(o+1);return[t[0],...Array.from({length:o},((n,e)=>t[Math.round((e+1)*l)])),t[e-1]]}(e.map((n=>t.indexOf(n))),n)};async function d(t){var n,e;const{debug:a,groupDateRange:i,hooks:c,startDate:d,dateEngine:g}={...l,...t},T=[];if(!g)throw new Error("dateEngine is required");const G=o.map((t=>({label:t})));null===c||void 0===c||null===(n=c.onBeforeTimeZoneMetadataCreate)||void 0===n||n.call(c,G);const f=r(G,d,i,g,a);null===c||void 0===c||null===(e=c.onTimeZoneMetadataCreate)||void 0===e||e.call(c,f);for(const o of f){var p,E;const{label:t,continent:n,dates:e}=o;if(o.visited)continue;o.visited=!0;const l={labelTzIndices:void 0,tzs:[{label:t}]};null===c||void 0===c||null===(p=c.onGroupCreate)||void 0===p||p.call(c,l,o);for(const o of f.filter((t=>!t.visited))){const{label:t,continent:a,isRegularContinent:i,dates:r}=o;if((n===a||!i)&&s(e,r,g)){var m;const n={label:t};l.tzs.push(n),null===c||void 0===c||null===(m=c.onGroupTimeZoneAdd)||void 0===m||m.call(c,l,n,o),o.visited=!0}}T.push(l),null===c||void 0===c||null===(E=c.onGroupAdd)||void 0===E||E.call(c,l)}const M=T.map((t=>{var n,e;null===c||void 0===c||null===(n=c.onBeforeFinalGroupCreate)||void 0===n||n.call(c,t),t.tzs=t.tzs.sort(((t,n)=>t.label.localeCompare(n.label)));const o={labelTzIndices:u(t.tzs,7),tzs:t.tzs.map((t=>t.label))};return null===c||void 0===c||null===(e=c.onFinalGroupCreate)||void 0===e||e.call(c,o,t),o})).sort(((t,n)=>n.tzs.length-t.tzs.length));if(a){const t=o.map((t=>M.some((n=>n.tzs.includes(t)))?null:t)).filter(Boolean);if(t.length>0)throw new Error("There are ".concat(t.length," missing timezones: ").concat(t.toString()))}return null!==c&&void 0!==c&&c.onFinalGroupingCreate?c.onFinalGroupingCreate(M):M}}}]);
//# sourceMappingURL=2723.c30d7207.chunk.js.map