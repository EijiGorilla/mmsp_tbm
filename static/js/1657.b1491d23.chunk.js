"use strict";(self.webpackChunkmmsp_tbm=self.webpackChunkmmsp_tbm||[]).push([[1657],{63231:(e,t,n)=>{function i(e){return null!=a(e)||null!=o(e)}function s(e){return l.test(e)}function r(e){var t;return null!==(t=a(e))&&void 0!==t?t:o(e)}function o(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(d&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,i=0;for(;!t&&i<=e.length;)t=!u.test(e[i]),i++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function a(e){var t,n,i,s;const r=l.exec(e);if(null===r||void 0===r||!r.groups)return null;const o=r.groups,a=+o.year,u=+o.month-1,d=+o.day,h=+(null!==(t=o.hours)&&void 0!==t?t:"0"),c=+(null!==(n=o.minutes)&&void 0!==n?n:"0"),f=+(null!==(i=o.seconds)&&void 0!==i?i:"0");if(h>23)return null;if(c>59)return null;if(f>59)return null;const p=null!==(s=o.ms)&&void 0!==s?s:"0",m=p?+p.padEnd(3,"0").slice(0,3):0;let y;if(o.isUTC||!o.offsetSign)y=Date.UTC(a,u,d,h,c,f,m);else{const e=+o.offsetHours,t=+o.offsetMinutes;y=6e4*("+"===o.offsetSign?-1:1)*(60*e+t)+Date.UTC(a,u,d,h,c,f,m)}return Number.isNaN(y)?null:y}n.d(t,{mu:()=>s,of:()=>i,sG:()=>r});const l=(0,n(70804).Z)(/^(?:(\x2D?\d{4,})\x2D(\d{2})\x2D(\d{2}))(?:T(\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?)?(?:(Z)|(?:(\+|\x2D)(\d{2}):(\d{2})))?$/,{year:1,month:2,day:3,hours:4,minutes:5,seconds:6,ms:7,isUTC:8,offsetSign:9,offsetHours:10,offsetMinutes:11});const u=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,d=!Number.isNaN(new Date("technology 10").getTime())},13491:(e,t,n)=>{n.d(t,{Q:()=>o,b:()=>B});var i=n(63780),s=(n(93169),n(10199)),r=n(36231);class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,t=arguments.length>1?arguments[1]:void 0;this._compareMinX=h,this._compareMinY=c,this._toBBox=e=>e,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),b.prune(),I.prune(),v.prune(),w.prune()}all(e){a(this._data,e)}search(e,t){let n=this._data;const i=this._toBBox;if(_(e,n))for(b.clear();n;){for(let s=0,r=n.children.length;s<r;s++){const r=n.children[s],o=n.leaf?i(r):r;_(e,o)&&(n.leaf?t(r):g(e,o)?a(r,t):b.push(r))}n=b.pop()}}collides(e){let t=this._data;const n=this._toBBox;if(!_(e,t))return!1;for(b.clear();t;){for(let i=0,s=t.children.length;i<s;i++){const s=t.children[i],r=t.leaf?n(s):s;if(_(e,r)){if(t.leaf||g(e,r))return!0;b.push(s)}}t=b.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(),0,e.length-1,0);if(this._data.children.length)if(this._data.height===t.height)this._splitRoot(this._data,t);else{if(this._data.height<t.height){const e=this._data;this._data=t,t=e}this._insert(t,this._data.height-t.height-1,!0)}else this._data=t;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new E([]),this}remove(e){if(!e)return this;let t,n=this._data,s=null,r=0,o=!1;const a=this._toBBox(e);for(v.clear(),w.clear();n||v.length>0;){var l;if(n||(n=v.pop(),s=v.data[v.length-1],r=null!==(l=w.pop())&&void 0!==l?l:0,o=!0),n.leaf&&(t=(0,i.cq)(n.children,e,n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),v.push(n),this._condense(v),this;o||n.leaf||!g(n,a)?s?(r++,n=s.children[r],o=!1):n=null:(v.push(n),w.push(r),r=0,s=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_build(e,t,n,i){const s=n-t+1;let r=this._maxEntries;if(s<=r){const i=new E(e.slice(t,n+1));return l(i,this._toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(i-1)));const o=new S([]);o.height=i;const a=Math.ceil(s/r),u=a*Math.ceil(Math.sqrt(r));x(e,t,n,u,this._compareMinX);for(let l=t;l<=n;l+=u){const t=Math.min(l+u-1,n);x(e,l,t,a,this._compareMinY);for(let n=l;n<=t;n+=a){const s=Math.min(n+a-1,t);o.children.push(this._build(e,n,s,i-1))}}return l(o,this._toBBox),o}_insert(e,t,n){const i=this._toBBox,s=n?e:i(e);v.clear();const r=function(e,t,n,i){for(;i.push(t),!0!==t.leaf&&i.length-1!==n;){let n,i=1/0,s=1/0;for(let r=0,o=t.children.length;r<o;r++){const o=t.children[r],a=f(o),l=m(e,o)-a;l<s?(s=l,i=a<i?a:i,n=o):l===s&&a<i&&(i=a,n=o)}t=n||t.children[0]}return t}(s,this._data,t,v);for(r.children.push(e),d(r,s);t>=0&&v.data[t].children.length>this._maxEntries;)this._split(v,t),t--;!function(e,t,n){for(let i=n;i>=0;i--)d(t.data[i],e)}(s,v,t)}_split(e,t){const n=e.data[t],i=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,i);const r=this._chooseSplitIndex(n,s,i);if(!r)return;const o=n.children.splice(r,n.children.length-r),a=n.leaf?new E(o):new S(o);a.height=n.height,l(n,this._toBBox),l(a,this._toBBox),t?e.data[t-1].children.push(a):this._splitRoot(n,a)}_splitRoot(e,t){this._data=new S([e,t]),this._data.height=e.height+1,l(this._data,this._toBBox)}_chooseSplitIndex(e,t,n){let i,s,r;i=s=1/0;for(let o=t;o<=n-t;o++){const t=u(e,0,o,this._toBBox),a=u(e,o,n,this._toBBox),l=y(t,a),d=f(t)+f(a);l<i?(i=l,r=o,s=d<s?d:s):l===i&&d<s&&(s=d,r=o)}return r}_chooseSplitAxis(e,t,n){const i=e.leaf?this._compareMinX:h,s=e.leaf?this._compareMinY:c;this._allDistMargin(e,t,n,i)<this._allDistMargin(e,t,n,s)&&e.children.sort(i)}_allDistMargin(e,t,n,i){e.children.sort(i);const s=this._toBBox,r=u(e,0,t,s),o=u(e,n-t,n,s);let a=p(r)+p(o);for(let l=t;l<n-t;l++){const t=e.children[l];d(r,e.leaf?s(t):t),a+=p(r)}for(let l=n-t-1;l>=t;l--){const t=e.children[l];d(o,e.leaf?s(t):t),a+=p(o)}return a}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const s=e.data[t-1],r=s.children;r.splice((0,i.cq)(r,n,r.length,s.indexHint),1)}else this.clear();else l(n,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this._compareMinX=new Function("a","b",t.join(e[0])),this._compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function a(e,t){let n=e;for(I.clear();n;){var i;if(!0===n.leaf)for(const e of n.children)t(e);else I.pushArray(n.children);n=null!==(i=I.pop())&&void 0!==i?i:null}}function l(e,t){u(e,0,e.children.length,t,e)}function u(e,t,n,i,s){s||(s=new E([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=t;o<n;o++)r=e.children[o],d(s,e.leaf?i(r):r);return s}function d(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function h(e,t){return e.minX-t.minX}function c(e,t){return e.minY-t.minY}function f(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function p(e){return e.maxX-e.minX+(e.maxY-e.minY)}function m(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function y(e,t){const n=Math.max(e.minX,t.minX),i=Math.max(e.minY,t.minY),s=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,s-n)*Math.max(0,r-i)}function g(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function _(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function x(e,t,n,i,s){const o=[t,n];for(;o.length;){const t=o.pop(),n=o.pop();if(t-n<=i)continue;const a=n+Math.ceil((t-n)/i/2)*i;(0,r.q)(e,a,n,t,s),o.push(n,a,a,t)}}const b=new s.Z,I=new s.Z,v=new s.Z,w=new s.Z({deallocator:void 0});class B{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class F extends B{constructor(){super(...arguments),this.height=1,this.indexHint=new i.SO}}class E extends F{constructor(e){super(),this.children=e,this.leaf=!0}}class S extends F{constructor(e){super(),this.children=e,this.leaf=!1}}},66020:(e,t,n)=>{n.d(t,{H:()=>l});var i=n(93169),s=n(13491),r=n(65156);const o={minX:0,minY:0,maxX:0,maxY:0};function a(e,t,n){(function(e){o.minX=e[0],o.minY=e[1],o.maxX=e[2],o.maxY=e[3]})(t),e.search(o,n)}class l{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.Q(9,(0,i.Z)("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((n,i)=>{e[t++]=i})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const e=(0,r.cS)();for(const t of this._boundsById.values())t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]));return e}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),a(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},68928:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(63780),s=n(10064),r=n(91505),o=n(32718),a=n(41414),l=n(65156),u=n(83406),d=n(66020),h=n(3306),c=n(77835);const f=(0,a.Ue)();class p{constructor(e){this.geometryInfo=e,this._boundsStore=new d.H,this._featuresById=new Map,this.events=new r.Z,this.featureAdapter=c.n}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{null!=t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(null==this.fullBounds)return null;const[t,n,i,s]=this.fullBounds;return{xmin:t,ymin:n,xmax:i,ymax:s,spatialReference:(0,h.S2)(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}upsertMany(e){const t=e.map((e=>this._upsert(e)));return this._emitChanged(),t.filter(i.pC)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t){for(const n of e){const e=this._boundsStore.get(n.objectId);e&&t((0,a.JR)(f,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}_emitChanged(){this.events.emit("changed",void 0)}_add(e){var t;if(!e)return;const n=e.objectId;if(null==n)return void o.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.Z("featurestore:invalid-feature","feature id is missing",{feature:e}));const i=this._featuresById.get(n);let r;if(i?(e.displayId=i.displayId,r=this._boundsStore.get(n),this._boundsStore.delete(n)):null!=this.onFeatureAdd&&this.onFeatureAdd(e),null===(t=e.geometry)||void 0===t||null===(t=t.coords)||void 0===t||!t.length)return this._boundsStore.set(n,null),void this._featuresById.set(n,e);r=(0,u.$)(null!=r?r:(0,l.Ue)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=r&&this._boundsStore.set(n,r),this._featuresById.set(n,e)}_upsert(e){var t;const n=null===e||void 0===e?void 0:e.objectId;if(null==n)return o.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.Z("featurestore:invalid-feature","feature id is missing",{feature:e})),null;const i=this._featuresById.get(n);if(!i)return this._add(e),e;const{geometry:r,attributes:a}=e;for(const s in a)i.attributes[s]=a[s];return r&&(i.geometry=r,this._boundsStore.set(n,null!==(t=(0,u.$)((0,l.Ue)(),r,this.geometryInfo.hasZ,this.geometryInfo.hasM))&&void 0!==t?t:null)),i}_remove(e){null!=this.onFeatureRemove&&this.onFeatureRemove(e);const t=e.objectId;return this._boundsStore.delete(t),this._featuresById.delete(t),e}}},77835:(e,t,n)=>{n.d(t,{n:()=>o});var i=n(85403),s=n(3182),r=n(80457);const o={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new s.u_(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(null==e.centroid&&(e.centroid=(0,i.Y)(new r.Z,e.geometry,t.hasZ,t.hasM)),e.centroid)}},51657:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var i=n(1413),s=n(76200),r=n(14921),o=n(10064),a=n(32718),l=n(66978),u=n(77981),d=n(92975),h=n(83406),c=n(68928),f=n(19995),p=n(51776),m=n(47615),y=n(61040),g=n(68808),_=n(52410),x=n(85249),b=n(37270),I=n(6701);const v={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsQueryWithCacheHint:!0,supportsQueryWithDistance:!0,supportsQueryWithResultType:!0,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class w{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._loadOptions={url:e.url,customParameters:e.customParameters};const n=[],[s]=await Promise.all([e.url?this._fetch(null===t||void 0===t?void 0:t.signal):null,this._checkProjection(e.spatialReference)]),r=(0,m.my)(s,{geometryType:e.geometryType}),a=e.fields||r.fields||[],l=null!=e.hasZ?e.hasZ:r.hasZ,u=r.geometryType;let h=e.objectIdField||r.objectIdFieldName||"__OBJECTID";const f=e.spatialReference||d.YU;let g=e.timeInfo;a===r.fields&&r.unknownFields.length>0&&n.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:r.unknownFields}});const w=new _.Z(a);let B=w.get(h);B?("esriFieldTypeString"!==B.type&&(B.type="esriFieldTypeOID"),B.editable=!1,B.nullable=!1,h=B.name):(B={alias:h,name:h,type:"string"===r.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},a.unshift(B));const F={};for(const i of a){if(null==i.name&&(i.name=i.alias),null==i.alias&&(i.alias=i.name),!i.name)throw new o.Z("geojson-layer:invalid-field-name","field name is missing",{field:i});if(!x.v.jsonValues.includes(i.type))throw new o.Z("geojson-layer:invalid-field-type",'invalid type for field "'.concat(i.name,'"'),{field:i});if(i.name!==B.name){const e=(0,b.os)(i);void 0!==e&&(F[i.name]=e)}null==i.length&&(i.length=(0,b.ZR)(i))}if(g){if(g.startTimeField){const e=w.get(g.startTimeField);e?(g.startTimeField=e.name,e.type="esriFieldTypeDate"):g.startTimeField=null}if(g.endTimeField){const e=w.get(g.endTimeField);e?(g.endTimeField=e.name,e.type="esriFieldTypeDate"):g.endTimeField=null}if(g.trackIdField){const e=w.get(g.trackIdField);e?g.trackIdField=e.name:(g.trackIdField=null,n.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:g}}))}g.startTimeField||g.endTimeField||(n.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:g}}),g=null)}const E=u?(0,y.bU)(u):void 0,S=w.dateFields.length?{timeZoneIANA:I.pt}:null,M={warnings:n,featureErrors:[],layerDefinition:(0,i.Z)((0,i.Z)({},v),{},{drawingInfo:null!==E&&void 0!==E?E:void 0,templates:(0,y.Hq)(F),extent:void 0,geometryType:u,objectIdField:h,fields:a,hasZ:!!l,timeInfo:g,dateFieldsTimeReference:S})};this._queryEngine=new p.q({fieldsIndex:_.Z.fromLayerJSON({fields:a,timeInfo:g,dateFieldsTimeReference:S}),geometryType:u,hasM:!1,hasZ:l,objectIdField:h,spatialReference:f,timeInfo:g,featureStore:new c.Z({geometryType:u,hasM:!1,hasZ:l})});const T=this._queryEngine.fieldsIndex.requiredFields.indexOf(B);T>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(T,1),this._createDefaultAttributes=(0,y.Dm)(F,h);const j=await this._createFeatures(s);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,j);const q=this._normalizeFeatures(j,M.featureErrors);this._queryEngine.featureStore.addMany(q);const{fullExtent:Z,timeExtent:Y}=await this._queryEngine.fetchRecomputedExtents();if(M.layerDefinition.extent=Z,Y){const{start:e,end:t}=Y;M.layerDefinition.timeInfo.timeExtent=[e,t]}return M}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([(0,g.b)(t,n),(0,f._W)(e.adds,t),(0,f._W)(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;this._loadOptions.customParameters=e,null!==(t=this._snapshotTask)&&void 0!==t&&t.abort(),this._snapshotTask=(0,r.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t)}),(e=>{this._queryEngine.featureStore.clear(),(0,l.D_)(e)||a.Z.getLogger("esri.layers.GeoJSONLayer").error(new o.Z("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete();const{fullExtent:n,timeExtent:i}=await this._queryEngine.fetchRecomputedExtents();return{extent:n,timeExtent:i}}async _createFeatures(e){if(null==e)return[];const{geometryType:t,hasZ:n,objectIdField:i}=this._queryEngine,s=(0,m.lG)(e,{geometryType:t,hasZ:n,objectIdField:i});if(!(0,d.fS)(this._queryEngine.spatialReference,d.YU))for(const r of s)null!=r.geometry&&(r.geometry=(0,h.GH)((0,f.iV)((0,h.di)(r.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),d.YU,this._queryEngine.spatialReference)));return s}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch(e){}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions,r=(await(0,s.Z)(null!==t&&void 0!==t?t:"",{responseType:"json",query:(0,i.Z)({},n),signal:e})).data;return(0,m.O3)(r),r}_normalizeFeatures(e,t){const{objectIdField:n,fieldsIndex:i}=this._queryEngine,s=[];for(const r of e){const e=this._createDefaultAttributes(),o=(0,g.O0)(i,e,r.attributes,!0);o?null===t||void 0===t||t.push(o):(this._assignObjectId(e,r.attributes,!0),r.attributes=e,r.objectId=e[n],s.push(r))}return s}async _applyEdits(e){const{adds:t,updates:n,deletes:i}=e,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(null!==t&&void 0!==t&&t.length&&this._applyAddEdits(s,t),null!==n&&void 0!==n&&n.length&&this._applyUpdateEdits(s,n),null!==i&&void 0!==i&&i.length){for(const e of i)s.deleteResults.push((0,g.d1)(e));this._queryEngine.featureStore.removeManyById(i)}const{fullExtent:r,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();return{extent:r,timeExtent:o,featureEditResults:s}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:i,hasM:s,hasZ:r,objectIdField:o,spatialReference:a,featureStore:l,fieldsIndex:d}=this._queryEngine,c=[];for(const h of t){if(h.geometry&&i!==(0,u.Ji)(h.geometry)){n.push((0,g.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=(0,g.O0)(d,t,h.attributes);if(s)n.push(s);else{if(this._assignObjectId(t,h.attributes),h.attributes=t,null!=h.uid){const t=h.attributes[o];e.uidToObjectId[h.uid]=t}if(null!=h.geometry){var p;const e=null!==(p=h.geometry.spatialReference)&&void 0!==p?p:a;h.geometry=(0,f.iV)((0,g.og)(h.geometry,e),e,a)}c.push(h),n.push((0,g.d1)(h.attributes[o]))}}l.addMany((0,h.Yn)([],c,i,r,s,o))}_applyUpdateEdits(e,t){let{updateResults:n}=e;const{geometryType:i,hasM:s,hasZ:r,objectIdField:o,spatialReference:a,featureStore:l,fieldsIndex:d}=this._queryEngine;for(const p of t){const{attributes:e,geometry:t}=p,m=null===e||void 0===e?void 0:e[o];if(null==m){n.push((0,g.av)("Identifier field ".concat(o," missing")));continue}if(!l.has(m)){n.push((0,g.av)("Feature with object id ".concat(m," missing")));continue}const y=(0,h.EI)(l.getFeature(m),i,r,s);if(null!=t){var c;if(i!==(0,u.Ji)(t)){n.push((0,g.av)("Incorrect geometry type."));continue}const e=null!==(c=t.spatialReference)&&void 0!==c?c:a;y.geometry=(0,f.iV)((0,g.og)(t,e),e,a)}if(e){const t=(0,g.O0)(d,y.attributes,e);if(t){n.push(t);continue}}l.add((0,h.XA)(y,i,r,s,o)),n.push((0,g.d1)(m))}}_createObjectIdGenerator(e,t){const n=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===n.type)return()=>n.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const s of t)s.objectId&&(i=Math.max(i,s.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i=this._queryEngine.objectIdField;e[i]=n&&i in t?t[i]:this._objectIdGenerator()}async _checkProjection(e){try{await(0,f._W)(d.YU,e)}catch(t){throw new o.Z("geojson-layer","Projection not supported")}}}},47615:(e,t,n)=>{n.d(t,{O3:()=>w,lG:()=>F,my:()=>B,q9:()=>d});var i=n(63231),s=n(10064),r=n(92975),o=n(3182),a=n(80457),l=n(37270);const u={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function d(e){return u[e]}function*h(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*c(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function f(e){for(const t of e)if(t.length>2)return!0;return!1}function p(e){let t=0;for(let n=0;n<e.length;n++){const i=e[n],s=e[(n+1)%e.length];t+=i[0]*s[1]-s[0]*i[1]}return t<=0}function m(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function y(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return x(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const i of t.coordinates)x(e,i,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const i of t.coordinates){g(e,i[0],n);for(let t=1;t<i.length;t++)_(e,i[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return I(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const i=t.coordinates;g(e,i[0],n);for(let s=1;s<i.length;s++)_(e,i[s],n);return e}(e,t,n)}}function g(e,t,n){const i=m(t);!function(e){return!p(e)}(i)?x(e,i,n):b(e,i,n)}function _(e,t,n){const i=m(t);!function(e){return p(e)}(i)?x(e,i,n):b(e,i,n)}function x(e,t,n){for(const i of t)I(e,i,n);e.lengths.push(t.length)}function b(e,t,n){for(let i=t.length-1;i>=0;i--)I(e,t[i],n);e.lengths.push(t.length)}function I(e,t,n){const[i,s,r]=t;e.coords.push(i,s),n.hasZ&&e.coords.push(r||0)}function v(e){switch(typeof e){case"string":return(0,i.mu)(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function w(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4326;if(!e)throw new s.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new s.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const i="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,o=(0,r.oR)({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(".*(".concat(t,")$"),"i");if(!i||!o.test(i))throw new s.Z("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function B(e){var t,n;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=[],r=new Set,o=new Set;let a,u=!1,p=null,m=!1,{geometryType:y=null}=i;for(const _ of h(e)){const{geometry:e,properties:t,id:n}=_;if((!e||(y||(y=d(e.type)),d(e.type)===y))&&(u||(u=f(c(e))),m||(m=null!=n,m&&(a=typeof n,t&&(p=Object.keys(t).filter((e=>t[e]===n))))),t&&p&&m&&null!=n&&(p.length>1?p=p.filter((e=>t[e]===n)):1===p.length&&(p=t[p[0]]===n?p:[])),t))for(const i in t){if(r.has(i))continue;const e=v(t[i]);if("unknown"===e){o.add(i);continue}o.delete(i),r.add(i);const n=(0,l.q6)(i);n&&s.push({name:n,alias:i,type:e})}}const g=null!==(t=(0,l.q6)(1===(null===(n=p)||void 0===n?void 0:n.length)&&p[0]||null))&&void 0!==t?t:void 0;if(g)for(const d of s)if(d.name===g&&(0,l.H7)(d)){d.type="esriFieldTypeOID";break}return{fields:s,geometryType:y,hasZ:u,objectIdFieldName:g,objectIdFieldType:a,unknownFields:Array.from(o)}}function F(e,t){return Array.from(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const{geometryType:n,objectIdField:i}=t;for(const r of e){var s;const{geometry:e,properties:l,id:u}=r;if(e&&d(e.type)!==n)continue;const h=l||{};let c;i&&(c=h[i],null==u||c||(h[i]=c=u));const f=new o.u_(e?y(new a.Z,e,t):null,h,null,null!==(s=c)&&void 0!==s?s:void 0);yield f}}()}(h(e),t))}},61040:(e,t,n)=>{n.d(t,{Dm:()=>c,Hq:()=>p,MS:()=>m,bU:()=>u});var i=n(1413),s=n(93169),r=n(84652),o=n(60480),a=n(96978),l=n(76115);function u(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?l.I4:"esriGeometryPolyline"===e?l.ET:l.lF}}}const d=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let h=1;function c(e,t){if((0,s.Z)("esri-csp-restrictions"))return()=>(0,i.Z)({[t]:null},e);try{let n="this".concat(f(t)," = null;");for(const t in e)n+="this".concat(f(t)," = ").concat(JSON.stringify(e[t]),";");const i=new Function("\n      return class AttributesClass$".concat(h++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return()=>new i}catch(n){return()=>(0,i.Z)({[t]:null},e)}}function f(e){return d.test(e)?".".concat(e):'["'.concat(e,'"]')}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,r.d9)(e)}}]}function m(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:o.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:a.s,editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},68808:(e,t,n)=>{n.d(t,{O0:()=>c,av:()=>l,b:()=>y,d1:()=>d,og:()=>m});var i=n(63231),s=n(92975),r=n(37270);class o{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function l(e){return new a(e)}class u{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function d(e){return new u(e)}const h=new Set;function c(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];h.clear();for(const o in n){const s=e.get(o);if(!s)continue;const a=f(s,n[o]);if(h.add(s.name),s&&(i||s.editable)){const e=(0,r.Qc)(s,a);if(e)return l((0,r.vP)(e,s,a));t[s.name]=a}}for(const r of null!==(s=e.requiredFields)&&void 0!==s?s:[]){var s;if(!h.has(r.name))return l('missing required field "'.concat(r.name,'"'))}return null}function f(e,t){let n=t;return(0,r.H7)(e)&&"string"==typeof t?n=parseFloat(t):(0,r.qN)(e)&&null!=t&&"string"!=typeof t?n=String(t):(0,r.y2)(e)&&"string"==typeof t&&(n=(0,i.sG)(t)),(0,r.Pz)(n)}let p;function m(e,t){if(!e||!(0,s.JY)(t))return e;if("rings"in e||"paths"in e){if(null==p)throw new TypeError("geometry engine not loaded");return p.simplify(t,e)}return e}async function y(e,t){!(0,s.JY)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==p&&(p=await Promise.all([n.e(9058),n.e(4126)]).then(n.bind(n,50309))),p}()}}}]);
//# sourceMappingURL=1657.b1491d23.chunk.js.map