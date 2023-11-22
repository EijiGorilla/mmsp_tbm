"use strict";(self.webpackChunkmmsp_tbm=self.webpackChunkmmsp_tbm||[]).push([[143],{36231:(t,i,e)=>{e.d(i,{q:()=>a});var n,s,r,o=e(84397),l={exports:{}};n=l,s=function(){function t(e,n,s,r,o){for(;r>s;){if(r-s>600){var l=r-s+1,a=n-s+1,h=Math.log(l),c=.5*Math.exp(2*h/3),u=.5*Math.sqrt(h*c*(l-c)/l)*(a-l/2<0?-1:1);t(e,n,Math.max(s,Math.floor(n-a*c/l+u)),Math.min(r,Math.floor(n+(l-a)*c/l+u)),o)}var d=e[n],p=s,m=r;for(i(e,s,n),o(e[r],d)>0&&i(e,s,r);p<m;){for(i(e,p,m),p++,m--;o(e[p],d)<0;)p++;for(;o(e[m],d)>0;)m--}0===o(e[s],d)?i(e,s,m):i(e,++m,r),m<=n&&(s=m+1),n<=m&&(r=m-1)}}function i(t,i,e){var n=t[i];t[i]=t[e],t[e]=n}function e(t,i){return t<i?-1:t>i?1:0}return function(i,n,s,r,o){t(i,n,s||0,r||i.length-1,o||e)}},void 0!==(r=s())&&(n.exports=r);const a=(0,o.g)(l.exports)},13491:(t,i,e)=>{e.d(i,{Q:()=>o});var n=e(63780),s=e(27546),r=e(36231);class o{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,i=arguments.length>1?arguments[1]:void 0;this._compareMinX=c,this._compareMinY=u,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this._toBBox=i:this._initFormat(i)),this.clear()}destroy(){this.clear(),b.prune(),x.prune(),v.prune(),C.prune()}all(t){this._all(this._data,t)}search(t,i){let e=this._data;const n=this._toBBox;if(_(t,e))for(b.clear();e;){for(let s=0,r=e.children.length;s<r;s++){const r=e.children[s],o=e.leaf?n(r):r;_(t,o)&&(e.leaf?i(r):f(t,o)?this._all(r,i):b.push(r))}e=b.pop()}}collides(t){let i=this._data;const e=this._toBBox;if(!_(t,i))return!1;for(b.clear();i;){for(let n=0,s=i.children.length;n<s;n++){const s=i.children[n],r=i.leaf?e(s):s;if(_(t,r)){if(i.leaf||f(t,r))return!0;b.push(s)}}i=b.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let i=0,e=t.length;i<e;i++)this.insert(t[i]);return this}let i=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===i.height)this._splitRoot(this._data,i);else{if(this._data.height<i.height){const t=this._data;this._data=i,i=t}this._insert(i,this._data.height-i.height-1,!0)}else this._data=i;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new Y([]),this}remove(t){if(!t)return this;let i,e=this._data,s=null,r=0,o=!1;const l=this._toBBox(t);for(v.clear(),C.clear();e||v.length>0;){var a;if(e||(e=v.pop(),s=v.data[v.length-1],r=null!==(a=C.pop())&&void 0!==a?a:0,o=!0),e.leaf&&(i=(0,n.cq)(e.children,t,e.children.length,e.indexHint),-1!==i))return e.children.splice(i,1),v.push(e),this._condense(v),this;o||e.leaf||!f(e,l)?s?(r++,e=s.children[r],o=!1):e=null:(v.push(e),C.push(r),r=0,s=e,e=e.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_all(t,i){let e=t;for(x.clear();e;){var n;if(!0===e.leaf)for(const t of e.children)i(t);else x.pushArray(e.children);e=null!==(n=x.pop())&&void 0!==n?n:null}}_build(t,i,e,n){const s=e-i+1;let r=this._maxEntries;if(s<=r){const n=new Y(t.slice(i,e+1));return l(n,this._toBBox),n}n||(n=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(n-1)));const o=new E([]);o.height=n;const a=Math.ceil(s/r),h=a*Math.ceil(Math.sqrt(r));y(t,i,e,h,this._compareMinX);for(let l=i;l<=e;l+=h){const i=Math.min(l+h-1,e);y(t,l,i,a,this._compareMinY);for(let e=l;e<=i;e+=a){const s=Math.min(e+a-1,i);o.children.push(this._build(t,e,s,n-1))}}return l(o,this._toBBox),o}_chooseSubtree(t,i,e,n){for(;n.push(i),!0!==i.leaf&&n.length-1!==e;){let e,n=1/0,s=1/0;for(let r=0,o=i.children.length;r<o;r++){const o=i.children[r],l=d(o),a=m(t,o)-l;a<s?(s=a,n=l<n?l:n,e=o):a===s&&l<n&&(n=l,e=o)}i=e||i.children[0]}return i}_insert(t,i,e){const n=this._toBBox,s=e?t:n(t);v.clear();const r=this._chooseSubtree(s,this._data,i,v);for(r.children.push(t),h(r,s);i>=0&&v.data[i].children.length>this._maxEntries;)this._split(v,i),i--;this._adjustParentBBoxes(s,v,i)}_split(t,i){const e=t.data[i],n=e.children.length,s=this._minEntries;this._chooseSplitAxis(e,s,n);const r=this._chooseSplitIndex(e,s,n);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=e.children.splice(r,e.children.length-r),a=e.leaf?new Y(o):new E(o);a.height=e.height,l(e,this._toBBox),l(a,this._toBBox),i?t.data[i-1].children.push(a):this._splitRoot(e,a)}_splitRoot(t,i){this._data=new E([t,i]),this._data.height=t.height+1,l(this._data,this._toBBox)}_chooseSplitIndex(t,i,e){let n,s,r;n=s=1/0;for(let o=i;o<=e-i;o++){const i=a(t,0,o,this._toBBox),l=a(t,o,e,this._toBBox),h=g(i,l),c=d(i)+d(l);h<n?(n=h,r=o,s=c<s?c:s):h===n&&c<s&&(s=c,r=o)}return r}_chooseSplitAxis(t,i,e){const n=t.leaf?this._compareMinX:c,s=t.leaf?this._compareMinY:u;this._allDistMargin(t,i,e,n)<this._allDistMargin(t,i,e,s)&&t.children.sort(n)}_allDistMargin(t,i,e,n){t.children.sort(n);const s=this._toBBox,r=a(t,0,i,s),o=a(t,e-i,e,s);let l=p(r)+p(o);for(let a=i;a<e-i;a++){const i=t.children[a];h(r,t.leaf?s(i):i),l+=p(r)}for(let a=e-i-1;a>=i;a--){const i=t.children[a];h(o,t.leaf?s(i):i),l+=p(o)}return l}_adjustParentBBoxes(t,i,e){for(let n=e;n>=0;n--)h(i.data[n],t)}_condense(t){for(let i=t.length-1;i>=0;i--){const e=t.data[i];if(0===e.children.length)if(i>0){const s=t.data[i-1],r=s.children;r.splice((0,n.cq)(r,e,r.length,s.indexHint),1)}else this.clear();else l(e,this._toBBox)}}_initFormat(t){const i=["return a"," - b",";"];this._compareMinX=new Function("a","b",i.join(t[0])),this._compareMinY=new Function("a","b",i.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function l(t,i){a(t,0,t.children.length,i,t)}function a(t,i,e,n,s){s||(s=new Y([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=i;o<e;o++)r=t.children[o],h(s,t.leaf?n(r):r);return s}function h(t,i){t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY)}function c(t,i){return t.minX-i.minX}function u(t,i){return t.minY-i.minY}function d(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function p(t){return t.maxX-t.minX+(t.maxY-t.minY)}function m(t,i){return(Math.max(i.maxX,t.maxX)-Math.min(i.minX,t.minX))*(Math.max(i.maxY,t.maxY)-Math.min(i.minY,t.minY))}function g(t,i){const e=Math.max(t.minX,i.minX),n=Math.max(t.minY,i.minY),s=Math.min(t.maxX,i.maxX),r=Math.min(t.maxY,i.maxY);return Math.max(0,s-e)*Math.max(0,r-n)}function f(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function _(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function y(t,i,e,n,s){const o=[i,e];for(;o.length;){const i=o.pop(),e=o.pop();if(i-e<=n)continue;const l=e+Math.ceil((i-e)/n/2)*n;(0,r.q)(t,l,e,i,s),o.push(e,l,l,i)}}const b=new s.Z,x=new s.Z,v=new s.Z,C=new s.Z({deallocator:void 0});class I{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class w extends I{constructor(){super(...arguments),this.height=1,this.indexHint=new n.SO}}class Y extends w{constructor(t){super(),this.children=t,this.leaf=!0}}class E extends w{constructor(t){super(),this.children=t,this.leaf=!1}}},85403:(t,i,e)=>{function n(t,i){return t?i?4:3:i?3:2}function s(t,i,e,s,l){if(null===i||void 0===i||!i.lengths.length)return null;const a="upperLeft"===(null===l||void 0===l?void 0:l.originPosition)?-1:1;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const h=t.coords,c=[],u=e?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:d,coords:p}=i,m=n(e,s);let g=0;for(const n of d){const t=r(u,p,g,n,e,s,a);t&&c.push(t),g+=n*m}if(c.sort(((t,i)=>{let n=a*t[2]-a*i[2];return 0===n&&e&&(n=t[4]-i[4]),n})),c.length){let t=6*c[0][2];h[0]=c[0][0]/t,h[1]=c[0][1]/t,e&&(t=6*c[0][4],h[2]=0!==t?c[0][3]/t:0),(h[0]<u[0]||h[0]>u[1]||h[1]<u[2]||h[1]>u[3]||e&&(h[2]<u[4]||h[2]>u[5]))&&(h.length=0)}if(!h.length){const t=i.lengths[0]?o(p,0,d[0],e,s):null;if(!t)return null;h[0]=t[0],h[1]=t[1],e&&t.length>2&&(h[2]=t[2])}return t}function r(t,i,e,s,r,o){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1;const a=n(r,o);let h=e,c=e+a,u=0,d=0,p=0,m=0,g=0;for(let n=0,_=s-1;n<_;n++,h+=a,c+=a){const e=i[h],n=i[h+1],s=i[h+2],o=i[c],l=i[c+1],a=i[c+2];let f=e*l-o*n;m+=f,u+=(e+o)*f,d+=(n+l)*f,r&&(f=e*a-o*s,p+=(s+a)*f,g+=f),e<t[0]&&(t[0]=e),e>t[1]&&(t[1]=e),n<t[2]&&(t[2]=n),n>t[3]&&(t[3]=n),r&&(s<t[4]&&(t[4]=s),s>t[5]&&(t[5]=s))}if(m*l>0&&(m*=-1),g*l>0&&(g*=-1),!m)return null;const f=[u,d,.5*m];return r&&(f[3]=p,f[4]=.5*g),f}function o(t,i,e,s,r){const o=n(s,r);let u=i,d=i+o,p=0,m=0,g=0,f=0;for(let n=0,_=e-1;n<_;n++,u+=o,d+=o){const i=t[u],e=t[u+1],n=t[u+2],r=t[d],o=t[d+1],_=t[d+2],y=s?a(i,e,n,r,o,_):l(i,e,r,o);if(y)if(p+=y,s){const t=c(i,e,n,r,o,_);m+=y*t[0],g+=y*t[1],f+=y*t[2]}else{const t=h(i,e,r,o);m+=y*t[0],g+=y*t[1]}}return p>0?s?[m/p,g/p,f/p]:[m/p,g/p]:e>0?s?[t[i],t[i+1],t[i+2]]:[t[i],t[i+1]]:null}function l(t,i,e,n){const s=e-t,r=n-i;return Math.sqrt(s*s+r*r)}function a(t,i,e,n,s,r){const o=n-t,l=s-i,a=r-e;return Math.sqrt(o*o+l*l+a*a)}function h(t,i,e,n){return[t+.5*(e-t),i+.5*(n-i)]}function c(t,i,e,n,s,r){return[t+.5*(n-t),i+.5*(s-i),e+.5*(r-e)]}e.d(i,{Y:()=>s})},77835:(t,i,e)=>{e.d(i,{n:()=>o});var n=e(85403),s=e(3182),r=e(80457);const o={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,i)=>t.attributes[i],cloneWithGeometry:(t,i)=>new s.u_(i,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,i)=>(null==t.centroid&&(t.centroid=(0,n.Y)(new r.Z,t.geometry,i.hasZ,i.hasM)),t.centroid)}},79510:(t,i,e)=>{e.d(i,{D:()=>V});var n=e(27366),s=e(52639),r=e(7138),o=e(80987),l=e(42537),a=e(92026),h=e(66978),c=e(94172),u=e(49861),d=(e(25243),e(63780),e(93169),e(69912)),p=e(48732),m=e(46634),g=e(30651),f=e(37818),_=e(34610),y=e(86638),b=e(26279),x=e(61310),v=e(17808),C=e(57848),I=e(84328),w=e(46568),Y=e(59453),E=e(96387),M=e(68401),S=e(78485);let V=class extends r.Z{constructor(t){super(t),this.type="graphics-3d",this.graphicsCore=null,this.drapeSourceType=b.Lw.Features,this.scaleVisibilityEnabled=!1,this.frustumVisibilityEnabled=!1,this._suspendResumeExtent=null,this._updatingHandles=new m.R}initialize(){const{layer:t}=this,i="effectiveScaleRange"in t?t:null,e=this.scaleVisibilityEnabled&&null!=i,n=new v.w({owner:this,layer:this.owner.layer,preferredUpdatePolicy:S.j.SYNC,graphicSymbolSupported:!0,componentFactories:{elevationAlignment:(t,i)=>new C._({graphicsCoreOwner:this,graphicsCore:t,queryGraphicUIDsInExtent:i,elevationProvider:this.view.elevationProvider}),scaleVisibility:e?(t,e)=>new Y.c({graphicsCoreOwner:this,layer:i,queryGraphicUIDsInExtent:e,graphicsCore:t,basemapTerrain:this.owner.view.basemapTerrain}):null,objectStates:t=>new w.d(t)}});if(this._set("graphicsCore",n),this.frustumVisibilityEnabled&&this._set("frustumVisibility",new I.L({graphicsCoreOwner:this})),"fullOpacity"in this.owner){const t=this.owner;this._updatingHandles.add((()=>t.fullOpacity),(()=>this.graphicsCore.opacityChange()))}if("elevationInfo"in t){const i=t;this._updatingHandles.add((()=>i.elevationInfo),((t,i)=>{(0,p.Hg)(t,i)&&this._updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())}))}this._set("initializePromise",this._initializeAsync()),this._updatingHandles.addPromise(this.initializePromise)}async _initializeAsync(){try{await this.graphicsCore.initializePromise}catch(t){if((0,h.D_)(t))return;throw t}this.destroyed||(this.addHandles((0,c.YP)((()=>this.view.clippingArea),(()=>this._updateClippingExtent()),c.Z_)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())}destroy(){this._updatingHandles.destroy(),this._set("frustumVisibility",(0,a.SC)(this.frustumVisibility)),this._set("graphicsCore",(0,a.SC)(this.graphicsCore))}get layer(){return this.owner.layer}get view(){return this.owner.view}get scaleVisibility(){var t;return null===(t=this.graphicsCore)||void 0===t?void 0:t.scaleVisibility}get elevationAlignment(){var t;return null===(t=this.graphicsCore)||void 0===t?void 0:t.elevationAlignment}get objectStates(){var t;return null===(t=this.graphicsCore)||void 0===t?void 0:t.objectStates}get scaleVisibilitySuspended(){return!(null==this.scaleVisibility||!this.scaleVisibility.suspended)}get frustumVisibilitySuspended(){return null!=this.frustumVisibility&&this.frustumVisibility.suspended}get suspended(){var t;return null!==(t=this.owner.suspended)&&void 0!==t&&t}get updating(){var t;return!!(null!==(t=this.graphicsCore)&&void 0!==t&&t.updating||null!=this.scaleVisibility&&this.scaleVisibility.updating||null!=this.frustumVisibility&&this.frustumVisibility.updating||this._updatingHandles.updating)}get graphics3DGraphics(){var t;return null===(t=this.graphicsCore)||void 0===t?void 0:t.graphics3DGraphics}get graphics3DGraphicsByObjectID(){var t;return null===(t=this.graphicsCore)||void 0===t?void 0:t.graphics3DGraphicsByObjectID}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){var t;return null!==(t=this.owner.fullOpacity)&&void 0!==t?t:1}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}notifyGraphicGeometryChanged(t){this.graphicsCore.notifyGraphicGeometryChanged(t)}notifyGraphicVisibilityChanged(t){this.graphicsCore.notifyGraphicVisibilityChanged(t)}getRenderingInfo(t,i,e){const n=(0,_.Kb)(t,{renderer:i,arcade:e});if(null!==n&&void 0!==n&&n.color){const t=n.color;t[0]=t[0]/255,t[1]=t[1]/255,t[2]=t[2]/255}return n}getRenderingInfoAsync(t,i,e,n){return(0,_.xn)(t,{renderer:i,arcade:e,...n})}getHit(t){if(this.owner.loadedGraphics){const i=this.owner.loadedGraphics.find((i=>i.uid===t));if(i){const t=this.layer instanceof g.Z?this.layer:null,e=(0,f.mW)(i,t);return{type:"graphic",graphic:e,layer:e.layer}}}return null}whenGraphicBounds(t,i){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(t,i):Promise.reject()}computeAttachmentOrigin(t,i){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(t,i):null}getSymbolLayerSize(t,i){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(t,i):null}maskOccludee(t){const{set:i,handle:e}=this.objectStates.acquireSet(M.V_.MaskOccludee,null);return this.objectStates.setUid(i,t.uid),e}highlight(t){if(t instanceof y.Z)return B;if("number"==typeof t)return this.highlight([t]);if(t instanceof s.Z)return this.highlight([t]);if(t instanceof o.Z&&(t=t.toArray()),Array.isArray(t)&&t.length>0){if(t[0]instanceof s.Z){const i=t.map((t=>t.uid)),{set:e,handle:n}=this.objectStates.acquireSet(M.V_.Highlight,null);return this.objectStates.setUids(e,i),n}if("number"==typeof t[0]){const i=t,{set:e,handle:n}=this.objectStates.acquireSet(M.V_.Highlight,null);return this.objectStates.setObjectIds(e,i),n}}return B}_setupSuspendResumeExtent(){const{scaleVisibility:t,frustumVisibility:i}=this;if(null==t&&null==i)return;const e=e=>{let{computedExtent:n,extentPadding:s}=e;this._suspendResumeExtent=(0,E.Go)(n,this._suspendResumeExtent,x.PY,s),null!=t&&t.setExtent(this._suspendResumeExtent),null!=i&&i.setExtent(this._suspendResumeExtent)};this.addHandles((0,c.YP)((()=>{var t,i;return{computedExtent:null===(t=this.graphicsCore)||void 0===t?void 0:t.computedExtent,extentPadding:null===(i=this.graphicsCore)||void 0===i?void 0:i.extentPadding}}),(t=>e(t)),c.tX))}_updateClippingExtent(){const t=this.view.clippingArea;this.graphicsCore.setClippingExtent(t,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}};(0,n._)([(0,u.Cb)()],V.prototype,"type",void 0),(0,n._)([(0,u.Cb)({constructOnly:!0})],V.prototype,"owner",void 0),(0,n._)([(0,u.Cb)()],V.prototype,"layer",null),(0,n._)([(0,u.Cb)()],V.prototype,"view",null),(0,n._)([(0,u.Cb)({constructOnly:!0})],V.prototype,"graphicsCore",void 0),(0,n._)([(0,u.Cb)()],V.prototype,"scaleVisibility",null),(0,n._)([(0,u.Cb)({constructOnly:!0})],V.prototype,"frustumVisibility",void 0),(0,n._)([(0,u.Cb)()],V.prototype,"elevationAlignment",null),(0,n._)([(0,u.Cb)()],V.prototype,"objectStates",null),(0,n._)([(0,u.Cb)()],V.prototype,"scaleVisibilitySuspended",null),(0,n._)([(0,u.Cb)({readOnly:!0})],V.prototype,"frustumVisibilitySuspended",null),(0,n._)([(0,u.Cb)()],V.prototype,"suspended",null),(0,n._)([(0,u.Cb)({readOnly:!0})],V.prototype,"updating",null),(0,n._)([(0,u.Cb)()],V.prototype,"loadedGraphics",null),(0,n._)([(0,u.Cb)()],V.prototype,"fullOpacity",null),(0,n._)([(0,u.Cb)()],V.prototype,"slicePlaneEnabled",null),(0,n._)([(0,u.Cb)()],V.prototype,"drapeSourceType",void 0),(0,n._)([(0,u.Cb)()],V.prototype,"updatePolicy",null),(0,n._)([(0,u.Cb)({constructOnly:!0})],V.prototype,"scaleVisibilityEnabled",void 0),(0,n._)([(0,u.Cb)({constructOnly:!0})],V.prototype,"frustumVisibilityEnabled",void 0),(0,n._)([(0,u.Cb)()],V.prototype,"initializePromise",void 0),V=(0,n._)([(0,d.j)("esri.views.3d.layers.graphics.GraphicsProcessor")],V);const B=(0,l.kB)()}}]);
//# sourceMappingURL=143.2127f711.chunk.js.map