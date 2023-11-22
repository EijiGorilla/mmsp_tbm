"use strict";(self.webpackChunkmmsp_tbm=self.webpackChunkmmsp_tbm||[]).push([[767],{36231:(t,e,n)=>{n.d(e,{q:()=>h});var i,r,s,a=n(84397),o={exports:{}};i=o,r=function(){function t(n,i,r,s,a){for(;s>r;){if(s-r>600){var o=s-r+1,h=i-r+1,l=Math.log(o),c=.5*Math.exp(2*l/3),m=.5*Math.sqrt(l*c*(o-c)/o)*(h-o/2<0?-1:1);t(n,i,Math.max(r,Math.floor(i-h*c/o+m)),Math.min(s,Math.floor(i+(o-h)*c/o+m)),a)}var u=n[i],d=r,f=s;for(e(n,r,i),a(n[s],u)>0&&e(n,r,s);d<f;){for(e(n,d,f),d++,f--;a(n[d],u)<0;)d++;for(;a(n[f],u)>0;)f--}0===a(n[r],u)?e(n,r,f):e(n,++f,s),f<=i&&(r=f+1),i<=f&&(s=f-1)}}function e(t,e,n){var i=t[e];t[e]=t[n],t[n]=i}function n(t,e){return t<e?-1:t>e?1:0}return function(e,i,r,s,a){t(e,i,r||0,s||e.length-1,a||n)}},void 0!==(s=r())&&(i.exports=s);const h=(0,a.g)(o.exports)},13491:(t,e,n)=>{n.d(e,{Q:()=>a});var i=n(63780),r=n(27546),s=n(36231);class a{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,e=arguments.length>1?arguments[1]:void 0;this._compareMinX=c,this._compareMinY=m,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),g.prune(),X.prune(),Y.prune(),B.prune()}all(t){this._all(this._data,t)}search(t,e){let n=this._data;const i=this._toBBox;if(p(t,n))for(g.clear();n;){for(let r=0,s=n.children.length;r<s;r++){const s=n.children[r],a=n.leaf?i(s):s;p(t,a)&&(n.leaf?e(s):_(t,a)?this._all(s,e):g.push(s))}n=g.pop()}}collides(t){let e=this._data;const n=this._toBBox;if(!p(t,e))return!1;for(g.clear();e;){for(let i=0,r=e.children.length;i<r;i++){const r=e.children[i],s=e.leaf?n(r):r;if(p(t,s)){if(e.leaf||_(t,s))return!0;g.push(r)}}e=g.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===e.height)this._splitRoot(this._data,e);else{if(this._data.height<e.height){const t=this._data;this._data=e,e=t}this._insert(e,this._data.height-e.height-1,!0)}else this._data=e;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new b([]),this}remove(t){if(!t)return this;let e,n=this._data,r=null,s=0,a=!1;const o=this._toBBox(t);for(Y.clear(),B.clear();n||Y.length>0;){var h;if(n||(n=Y.pop(),r=Y.data[Y.length-1],s=null!==(h=B.pop())&&void 0!==h?h:0,a=!0),n.leaf&&(e=(0,i.cq)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),Y.push(n),this._condense(Y),this;a||n.leaf||!_(n,o)?r?(s++,n=r.children[s],a=!1):n=null:(Y.push(n),B.push(s),s=0,r=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_all(t,e){let n=t;for(X.clear();n;){var i;if(!0===n.leaf)for(const t of n.children)e(t);else X.pushArray(n.children);n=null!==(i=X.pop())&&void 0!==i?i:null}}_build(t,e,n,i){const r=n-e+1;let s=this._maxEntries;if(r<=s){const i=new b(t.slice(e,n+1));return o(i,this._toBBox),i}i||(i=Math.ceil(Math.log(r)/Math.log(s)),s=Math.ceil(r/s**(i-1)));const a=new S([]);a.height=i;const h=Math.ceil(r/s),l=h*Math.ceil(Math.sqrt(s));M(t,e,n,l,this._compareMinX);for(let o=e;o<=n;o+=l){const e=Math.min(o+l-1,n);M(t,o,e,h,this._compareMinY);for(let n=o;n<=e;n+=h){const r=Math.min(n+h-1,e);a.children.push(this._build(t,n,r,i-1))}}return o(a,this._toBBox),a}_chooseSubtree(t,e,n,i){for(;i.push(e),!0!==e.leaf&&i.length-1!==n;){let n,i=1/0,r=1/0;for(let s=0,a=e.children.length;s<a;s++){const a=e.children[s],o=u(a),h=f(t,a)-o;h<r?(r=h,i=o<i?o:i,n=a):h===r&&o<i&&(i=o,n=a)}e=n||e.children[0]}return e}_insert(t,e,n){const i=this._toBBox,r=n?t:i(t);Y.clear();const s=this._chooseSubtree(r,this._data,e,Y);for(s.children.push(t),l(s,r);e>=0&&Y.data[e].children.length>this._maxEntries;)this._split(Y,e),e--;this._adjustParentBBoxes(r,Y,e)}_split(t,e){const n=t.data[e],i=n.children.length,r=this._minEntries;this._chooseSplitAxis(n,r,i);const s=this._chooseSplitIndex(n,r,i);if(!s)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const a=n.children.splice(s,n.children.length-s),h=n.leaf?new b(a):new S(a);h.height=n.height,o(n,this._toBBox),o(h,this._toBBox),e?t.data[e-1].children.push(h):this._splitRoot(n,h)}_splitRoot(t,e){this._data=new S([t,e]),this._data.height=t.height+1,o(this._data,this._toBBox)}_chooseSplitIndex(t,e,n){let i,r,s;i=r=1/0;for(let a=e;a<=n-e;a++){const e=h(t,0,a,this._toBBox),o=h(t,a,n,this._toBBox),l=x(e,o),c=u(e)+u(o);l<i?(i=l,s=a,r=c<r?c:r):l===i&&c<r&&(r=c,s=a)}return s}_chooseSplitAxis(t,e,n){const i=t.leaf?this._compareMinX:c,r=t.leaf?this._compareMinY:m;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,r)&&t.children.sort(i)}_allDistMargin(t,e,n,i){t.children.sort(i);const r=this._toBBox,s=h(t,0,e,r),a=h(t,n-e,n,r);let o=d(s)+d(a);for(let h=e;h<n-e;h++){const e=t.children[h];l(s,t.leaf?r(e):e),o+=d(s)}for(let h=n-e-1;h>=e;h--){const e=t.children[h];l(a,t.leaf?r(e):e),o+=d(a)}return o}_adjustParentBBoxes(t,e,n){for(let i=n;i>=0;i--)l(e.data[i],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const r=t.data[e-1],s=r.children;s.splice((0,i.cq)(s,n,s.length,r.indexHint),1)}else this.clear();else o(n,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this._compareMinX=new Function("a","b",e.join(t[0])),this._compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function o(t,e){h(t,0,t.children.length,e,t)}function h(t,e,n,i,r){r||(r=new b([])),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let s,a=e;a<n;a++)s=t.children[a],l(r,t.leaf?i(s):s);return r}function l(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function c(t,e){return t.minX-e.minX}function m(t,e){return t.minY-e.minY}function u(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function d(t){return t.maxX-t.minX+(t.maxY-t.minY)}function f(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function x(t,e){const n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),r=Math.min(t.maxX,e.maxX),s=Math.min(t.maxY,e.maxY);return Math.max(0,r-n)*Math.max(0,s-i)}function _(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function p(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function M(t,e,n,i,r){const a=[e,n];for(;a.length;){const e=a.pop(),n=a.pop();if(e-n<=i)continue;const o=n+Math.ceil((e-n)/i/2)*i;(0,s.q)(t,o,n,e,r),a.push(n,o,o,e)}}const g=new r.Z,X=new r.Z,Y=new r.Z,B=new r.Z({deallocator:void 0});class v{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class w extends v{constructor(){super(...arguments),this.height=1,this.indexHint=new i.SO}}class b extends w{constructor(t){super(),this.children=t,this.leaf=!0}}class S extends w{constructor(t){super(),this.children=t,this.leaf=!1}}},30767:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a});var i=n(93169),r=n(13491),s=n(57898);class a{async createIndex(t,e){var n;const i=new Array;if(null===(n=t.vertexAttributes)||void 0===n||!n.position)return new r.Q;const s=this._createMeshData(t),a=null!=e?await e.invoke("createIndexThread",s,{transferList:i}):this.createIndexThread(s).result;return this._createPooledRBush().fromJSON(a)}createIndexThread(t){const e=new Float64Array(t.position),n=this._createPooledRBush();return t.components?this._createIndexComponentsThread(n,e,t.components.map((t=>new Uint32Array(t)))):this._createIndexAllThread(n,e)}_createIndexAllThread(t,e){const n=new Array(e.length/9);let i=0;for(let r=0;r<e.length;r+=9)n[i++]=o(e,r,r+3,r+6);return t.load(n),{result:t.toJSON()}}_createIndexComponentsThread(t,e,n){let i=0;for(const a of n)i+=a.length/3;const r=new Array(i);let s=0;for(const a of n)for(let t=0;t<a.length;t+=3)r[s++]=o(e,3*a[t],3*a[t+1],3*a[t+2]);return t.load(r),{result:t.toJSON()}}_createMeshData(t){const e=(t.vertexSpace.isRelative?(0,s.I5)({position:t.vertexAttributes.position,normal:null,tangent:null},t.vertexSpace,t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some((t=>!t.faces))?{position:e}:{position:e,components:t.components.map((t=>t.faces))}}_createPooledRBush(){return new r.Q(9,(0,i.Z)("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function o(t,e,n,i){return{minX:Math.min(t[e],t[n],t[i]),maxX:Math.max(t[e],t[n],t[i]),minY:Math.min(t[e+1],t[n+1],t[i+1]),maxY:Math.max(t[e+1],t[n+1],t[i+1]),p0:[t[e],t[e+1],t[e+2]],p1:[t[n],t[n+1],t[n+2]],p2:[t[i],t[i+1],t[i+2]]}}}}]);
//# sourceMappingURL=767.b4a35e2e.chunk.js.map