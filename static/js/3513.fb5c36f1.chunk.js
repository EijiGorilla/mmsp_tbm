"use strict";(self.webpackChunkmmsp_tbm=self.webpackChunkmmsp_tbm||[]).push([[3513],{33513:(e,t,r)=>{r.r(t),r.d(t,{default:()=>H});var o=r(27366),l=(r(59486),r(52639)),i=(r(51508),r(80987)),n=r(10064),a=r(84652),s=r(97642),y=r(18202),p=r(51370),u=r(49861),d=(r(25243),r(38511)),c=r(69912),m=r(31201),f=r(79803),b=r(65156),g=r(91340),h=r(92975),S=r(64326),v=r(93655),O=r(30651),C=r(25820),w=r(6693),_=r(6061),N=r(29598),L=r(56811),J=r(83040),T=r(61459),x=r(16851),M=r(16072),I=r(58009),j=r(78952),Z=r(53866);function R(e){return"markup"===e.featureCollectionType||e.layers.some((e=>null!=e.layerDefinition.visibilityField||!E(e)))}function E(e){var t;let{layerDefinition:r,featureSet:o}=e;const l=null!==(t=r.geometryType)&&void 0!==t?t:o.geometryType;return B.find((e=>{var t;return l===e.geometryTypeJSON&&(null===(t=r.drawingInfo)||void 0===t||null===(t=t.renderer)||void 0===t||null===(t=t.symbol)||void 0===t?void 0:t.type)===e.identifyingSymbol.type}))}function D(){return new Z.Z({xmin:-180,ymin:-90,xmax:180,ymax:90})}const G=new J.Z({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),P=new J.Z({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let F=class extends v.Z{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get fullExtent(){var e;const t=null===(e=this.layer)||void 0===e?void 0:e.spatialReference,r=this.fullBounds;return t?null==r?(0,f.projectOrLoad)(D(),t).geometry:(0,b.HH)(r,t):null}get fullBounds(){var e;const t=null===(e=this.layer)||void 0===e?void 0:e.spatialReference;if(!t)return null;const r=(0,b.cS)();return this.graphics.forEach((e=>{const o=null!=e.geometry?(0,f.projectOrLoad)(e.geometry,t).geometry:null;null!=o&&(0,b.jn)(r,"point"===o.type?o:o.extent,r)})),(0,b.fS)(r,b.G_)?null:r}get sublayers(){return this.graphics}};(0,o._)([(0,u.Cb)({readOnly:!0})],F.prototype,"fullExtent",null),(0,o._)([(0,u.Cb)({readOnly:!0})],F.prototype,"fullBounds",null),(0,o._)([(0,u.Cb)({readOnly:!0})],F.prototype,"sublayers",null),(0,o._)([(0,u.Cb)()],F.prototype,"layer",void 0),(0,o._)([(0,u.Cb)()],F.prototype,"layerId",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],F.prototype,"visibilityMode",void 0),F=(0,o._)([(0,c.j)("esri.layers.MapNotesLayer.MapNotesSublayer")],F);const B=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new T.Z).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new x.Z).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new M.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new M.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new I.Z).toJSON()}];let k=class extends((0,w.h)((0,L.M)((0,_.q)((0,N.I)((0,s.R)(O.Z)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=j.Z.WGS84,this.sublayers=new i.Z(B.map((e=>new F({id:e.id,layerId:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!R(t)&&"portal-item"!==(null===r||void 0===r?void 0:r.origin)}}}readFeatureCollections(e,t,r){if(!R(t))return null;const o=t.layers.map((e=>{const t=new S.default;return t.read(e,r),t}));return new i.Z({items:o})}readLegacyfeatureCollectionJSON(e,t){return R(t)?(0,a.d9)(t.featureCollection):null}get fullExtent(){var e;const t=this.spatialReference,r=(0,b.cS)();return null!=this.sublayers?this.sublayers.forEach((e=>{let{fullBounds:t}=e;return null!=t?(0,b.jn)(r,t,r):r}),r):null!==(e=this.featureCollectionJSON)&&void 0!==e&&e.layers.some((e=>e.layerDefinition.extent))&&this.featureCollectionJSON.layers.forEach((e=>{const o=(0,f.projectOrLoad)(e.layerDefinition.extent,t).geometry;null!=o&&(0,b.jn)(r,o,r)})),(0,b.fS)(r,b.G_)?(0,f.projectOrLoad)(D(),t).geometry:(0,b.HH)(r,t)}readMinScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.minScale)return r.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.maxScale)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?j.Z.fromJSON(t.layers[0].layerDefinition.spatialReference):j.Z.WGS84}readSublayers(e,t,r){if(R(t))return null;const o=[];let n=t.layers.reduce(((e,t)=>{var r;return Math.max(e,null!==(r=t.layerDefinition.id)&&void 0!==r?r:-1)}),-1)+1;for(const i of t.layers){var a;const{layerDefinition:e,featureSet:t}=i,r=null!==(a=e.id)&&void 0!==a?a:n++,s=E(i);if(null!=s){const i=new F({id:s.id,title:e.name,layerId:r,layer:this,graphics:t.features.map((e=>{let{geometry:t,symbol:r,attributes:o,popupInfo:i}=e;return l.Z.fromJSON({attributes:o,geometry:t,symbol:r,popupTemplate:i})}))});o.push(i)}}return new i.Z(o)}writeSublayers(e,t,r,o){var l;const{minScale:i,maxScale:a}=this;if(null==e)return;const s=e.some((e=>e.graphics.length>0));if(!this.capabilities.operations.supportsMapNotesEditing)return void(s&&(null===o||void 0===o||null===(l=o.messages)||void 0===l||l.push(new n.Z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const p=[];let u=this.spatialReference.toJSON();e:for(const n of e)for(const e of n.graphics)if(null!=e.geometry){u=e.geometry.spatialReference.toJSON();break e}for(const n of B){const t=e.find((e=>n.id===e.id));this._writeMapNoteSublayer(p,t,n,i,a,u,o)}(0,y.RB)("featureCollection.layers",p,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=(0,a.d9)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(null==this.sublayers)return;let e=null;const t=[];for(const o of this.sublayers)for(const r of o.graphics)if(null!=r.geometry){const o=r.geometry;e?(0,h.fS)(o.spatialReference,e)||((0,f.canProjectWithoutEngine)(o.spatialReference,e)||(0,f.isLoaded)()||await(0,f.load)(),r.geometry=(0,f.project)(o,e)):e=o.spatialReference,t.push(r)}const r=await(0,g.aX)(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]))}_findSublayer(e){var t,r;return null==this.sublayers?null:null!==(t=null===(r=this.sublayers)||void 0===r?void 0:r.find((t=>t.id===e)))&&void 0!==t?t:null}_writeMapNoteSublayer(e,t,r,o,l,i,n){const s=[];if(null!=t){for(const e of t.graphics)this._writeMapNote(s,e,r.geometryType,n);this._normalizeObjectIds(s,G),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,a.d9)(r.identifyingSymbol)}},id:t.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:l,objectIdField:"OBJECTID",fields:[G.toJSON(),P.toJSON()],spatialReference:i},featureSet:{features:s,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,o){var l,i;if(null==t)return;const{geometry:n,symbol:a,popupTemplate:s}=t;if(null==n)return;if(n.type!==r)return void(null===o||void 0===o||null===(l=o.messages)||void 0===l||l.push(new p.Z("map-notes-layer:invalid-geometry-type",'Geometry "'.concat(n.type,'" cannot be saved in "').concat(r,'" layer'),{graphic:t})));if(null==a)return void(null===o||void 0===o||null===(i=o.messages)||void 0===i||i.push(new p.Z("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const y={attributes:{...t.attributes},geometry:n.toJSON(),symbol:a.toJSON()};null!=s&&(y.popupInfo=s.toJSON()),e.push(y)}_normalizeObjectIds(e,t){const r=t.name;let o=(0,C.S)(r,e)+1;const l=new Set;for(const i of e){i.attributes||(i.attributes={});const{attributes:e}=i;(null==e[r]||l.has(e[r]))&&(e[r]=o++),l.add(e[r])}}};(0,o._)([(0,u.Cb)({readOnly:!0})],k.prototype,"capabilities",void 0),(0,o._)([(0,d.r)(["portal-item","web-map"],"capabilities",["layers"])],k.prototype,"readCapabilities",null),(0,o._)([(0,u.Cb)({readOnly:!0})],k.prototype,"featureCollections",void 0),(0,o._)([(0,d.r)(["web-map","portal-item"],"featureCollections",["layers"])],k.prototype,"readFeatureCollections",null),(0,o._)([(0,u.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],k.prototype,"featureCollectionJSON",void 0),(0,o._)([(0,d.r)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],k.prototype,"readLegacyfeatureCollectionJSON",null),(0,o._)([(0,u.Cb)({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],k.prototype,"featureCollectionType",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],k.prototype,"fullExtent",null),(0,o._)([(0,u.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],k.prototype,"legendEnabled",void 0),(0,o._)([(0,u.Cb)({type:["show","hide","hide-children"]})],k.prototype,"listMode",void 0),(0,o._)([(0,u.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],k.prototype,"minScale",void 0),(0,o._)([(0,d.r)(["web-map","portal-item"],"minScale",["layers"])],k.prototype,"readMinScale",null),(0,o._)([(0,u.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],k.prototype,"maxScale",void 0),(0,o._)([(0,d.r)(["web-map","portal-item"],"maxScale",["layers"])],k.prototype,"readMaxScale",null),(0,o._)([(0,u.Cb)({readOnly:!0})],k.prototype,"multipointLayer",null),(0,o._)([(0,u.Cb)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],k.prototype,"operationalLayerType",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],k.prototype,"pointLayer",null),(0,o._)([(0,u.Cb)({readOnly:!0})],k.prototype,"polygonLayer",null),(0,o._)([(0,u.Cb)({readOnly:!0})],k.prototype,"polylineLayer",null),(0,o._)([(0,u.Cb)({type:j.Z})],k.prototype,"spatialReference",void 0),(0,o._)([(0,d.r)(["web-map","portal-item"],"spatialReference",["layers"])],k.prototype,"readSpatialReference",null),(0,o._)([(0,u.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],k.prototype,"sublayers",void 0),(0,o._)([(0,d.r)("web-map","sublayers",["layers"])],k.prototype,"readSublayers",null),(0,o._)([(0,m.c)("web-map","sublayers")],k.prototype,"writeSublayers",null),(0,o._)([(0,u.Cb)({readOnly:!0})],k.prototype,"textLayer",null),(0,o._)([(0,u.Cb)()],k.prototype,"title",void 0),(0,o._)([(0,u.Cb)({readOnly:!0,json:{read:!1}})],k.prototype,"type",void 0),k=(0,o._)([(0,c.j)("esri.layers.MapNotesLayer")],k);const H=k},25820:(e,t,r)=>{r.d(t,{S:()=>l,X:()=>o});const o=1;function l(e,t){let r=0;for(const l of t){var o;const t=null===(o=l.attributes)||void 0===o?void 0:o[e];"number"==typeof t&&isFinite(t)&&(r=Math.max(r,t))}return r}}}]);
//# sourceMappingURL=3513.fb5c36f1.chunk.js.map