"use strict";(self.webpackChunkmmsp_tbm=self.webpackChunkmmsp_tbm||[]).push([[8506],{25666:(e,r,t)=>{t.d(r,{cn:()=>i,j:()=>n,lK:()=>s});const i="updating";function s(e){return"updating"===e?null:e}function n(e){return"updating"===e}},15801:(e,r,t)=>{t.d(r,{Z:()=>f});var i,s=t(27366),n=t(80987),l=t(93002),o=t(51370),a=t(49861),u=(t(25243),t(63780),t(93169),t(69912)),d=t(59147),p=t(58550);const h={type:n.Z,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:y}}},read:!1}};function y(e,r,t){if(e&&Array.isArray(e))return new n.Z(e.map((e=>{const r=function(e){return"group"===e.layerType?c:d.Z}(e);if(r){const i=new r;return i.read(e,t),i}return null!==t&&void 0!==t&&t.messages&&e&&t.messages.push(new o.Z("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:t})),null})))}let c=i=class extends p.Z{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return(0,l.w)(this,(e=>i.forEachSublayer(this.sublayers,(r=>{"building-group"!==r.type&&e(r)}))))}};var g;(0,s._)([(0,a.Cb)({type:["hide","show","hide-children"],json:{write:!0}})],c.prototype,"listMode",void 0),(0,s._)([(0,a.Cb)(h)],c.prototype,"sublayers",void 0),c=i=(0,s._)([(0,u.j)("esri.layers.buildingSublayers.BuildingGroupSublayer")],c),(g=c||(c={})).sublayersProperty=h,g.readSublayers=y,g.forEachSublayer=function e(r,t){r.forEach((r=>{t(r),"building-group"===r.type&&e(r.sublayers,t)}))};const f=c},30494:(e,r,t)=>{t.d(r,{T:()=>n});var i=t(76200),s=t(10064);async function n(e,r,t,n,l,o){let a=null;if(null!=t){const r="".concat(e,"/nodepages/"),s=r+Math.floor(t.rootIndex/t.nodesPerPage);try{return{type:"page",rootPage:(await(0,i.Z)(s,{query:{f:"json",token:n},responseType:"json",signal:o})).data,rootIndex:t.rootIndex,pageSize:t.nodesPerPage,lodMetric:t.lodSelectionMetricType,urlPrefix:r}}catch(h){null!=l&&l.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",s,h),a=h}}if(!r)return null;const u=null===r||void 0===r?void 0:r.split("/").pop(),d="".concat(e,"/nodes/"),p=d+u;try{return{type:"node",rootNode:(await(0,i.Z)(p,{query:{f:"json",token:n},responseType:"json",signal:o})).data,urlPrefix:d}}catch(h){throw new s.Z("sceneservice:root-node-missing","Root node missing.",{pageError:a,nodeError:h,url:p})}}},7452:(e,r,t)=>{t.r(r),t.d(r,{default:()=>$});var i=t(27366),s=t(52639),n=t(7138),l=t(63780),o=t(80987),a=t(42537),u=t(32718),d=t(92026),p=t(66978),h=t(94172),y=t(49861),c=(t(25243),t(93169),t(69912)),g=(t(15801),t(10064)),f=t(54054),b=(t(59147),t(18661)),_=t(37270),w=t(86638),v=t(91505),E=t(79056),m=t(67426);const x=(e,r)=>{let t=class extends((0,m.v)((0,E.IG)(v.Z.EventedMixin(e)))){constructor(e){super(e),this.sublayer=null,this.parent=null,this.view=null}initialize(){}get suspended(){return!this.canResume()}get updating(){return!this.suspended&&this.isUpdating()}get visible(){var e;return!(null===(e=this.sublayer)||void 0===e||!e.visible)}set visible(e){this._overrideIfSome("visible",e)}get fullOpacity(){var e,r;const t=e=>null!=e?e:1;return t(null===(e=this.sublayer)||void 0===e?void 0:e.opacity)*t(null===(r=this.parent)||void 0===r?void 0:r.fullOpacity)}canResume(){var e,r;return!(null!==(e=this.parent)&&void 0!==e&&e.suspended)&&(null===(r=this.view)||void 0===r?void 0:r.ready)&&this.visible||!1}isUpdating(){return!1}};return(0,i._)([(0,y.Cb)()],t.prototype,"sublayer",void 0),(0,i._)([(0,y.Cb)()],t.prototype,"parent",void 0),(0,i._)([(0,y.Cb)({readOnly:!0})],t.prototype,"suspended",null),(0,i._)([(0,y.Cb)({type:Boolean,readOnly:!0})],t.prototype,"updating",null),(0,i._)([(0,y.Cb)()],t.prototype,"view",void 0),(0,i._)([(0,y.Cb)()],t.prototype,"visible",null),(0,i._)([(0,y.Cb)()],t.prototype,"fullOpacity",null),t=(0,i._)([(0,c.j)("esri.views.3d.layers.BuildingSublayerView3D")],t),t};var F,C,S=t(31625),V=t(42757),I=t(67077),M=t(97689),L=t(49420);(C=F||(F={}))[C.Solid=0]="Solid",C[C.WireFrame=1]="WireFrame",C[C.XRay=2]="XRay";const Z=.075;function P(e){switch(e.filterMode.type){case"solid":return{mode:F.Solid};case"wire-frame":return{mode:F.WireFrame,edgeMaterial:(0,M.C8)(e.filterMode.edges,{})};case"x-ray":return{mode:F.XRay}}}function R(e,r){if(null==r)return e.color[3]=0,e.edgeMaterial=null,void(e.pickable=!1);switch(r.mode){case F.Solid:return;case F.WireFrame:return e.color[3]=0,e.edgeMaterial=r.edgeMaterial,void(e.pickable=!1);case F.XRay:return e.color[0]=1,e.color[1]=1,e.color[2]=1,e.color[3]*=.15,e.colorMixMode=L.a9.Replace,e.castShadows=!1,e.pickable=!1,void(e.edgeMaterial=function(e){return null==e?null:(q.lastMaterial!==e&&(q.cachedMaterial=function(e){const r=(0,I.d)(e.color);return r[3]*=Z,{...e,color:r}}(e),q.lastMaterial=e),q.cachedMaterial)}(e.edgeMaterial))}}const q={cachedMaterial:null,lastMaterial:null};var Q=t(31730),A=t(71039),O=t(43812),j=t(51246),k=t(73552),D=t(44011),G=t(1247);t(75505),t(86741),t(47492);class N extends n.Z{constructor(){super(...arguments),this.sublayer=null}get updating(){return!1}get suspended(){return!1}get availableFields(){return[]}get filter(){return null}set filter(e){throw new Error("Not implemented")}queryFeatures(e,r){throw new Error("Not implemented")}queryObjectIds(e,r){throw new Error("Not implemented")}queryFeatureCount(e,r){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,r){throw new Error("Not implemented")}highlight(e){throw new Error("Not implemented")}}(0,i._)([(0,y.Cb)()],N.prototype,"sublayer",void 0),(0,i._)([(0,y.Cb)()],N.prototype,"availableFields",null),(0,i._)([(0,y.Cb)()],N.prototype,"filter",null);var T=t(24405),B=t(93463);let z=class extends((0,G.l)((0,S.NI)(x(N)))){constructor(){super(...arguments),this.type="building-component-sublayer-3d",this.layerView=null,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!1,this.requiredFields=[],this.progressiveLoadFactor=1,this._queryEngine=null}get i3slayer(){return this.sublayer}get layerUid(){return this.sublayer.layer.uid}get sublayerUid(){return this.sublayer.uid}get layerId(){return this.sublayer.layer.id}get sublayerId(){return this.sublayer.id}get layerPopupEnabledAndHasTemplate(){var e;return this.sublayer.popupEnabled&&(0,T.zc)(this.sublayer,null===(e=this.layerView)||void 0===e||null===(e=e.view.popup)||void 0===e?void 0:e.defaultPopupTemplateEnabled)}initialize(){this._updatingHandles.add((()=>[this.sublayer.renderer,this.definitionExpressionFields,this.filterExpressionFields]),(()=>this._updateRequiredFields())),this._updatingHandles.add((()=>this.sublayer.renderer),(e=>this._rendererChange(e)),h.nn);const e=()=>this._filterChange();this._updatingHandles.add((()=>this.parsedDefinitionExpression),e),this._updatingHandles.add((()=>null!=this._filter?this._filter.sortedObjectIds:null),e),this._updatingHandles.add((()=>null!=this._filter?this._filter.parsedWhereClause:null),e),this._updatingHandles.add((()=>[null!=this._filter?this._filter.parsedGeometry:null,null!=this.filter?this.filter.spatialRelationship:null]),(()=>this._geometryFilterChange())),this._updatingHandles.add((()=>this.parsedFilterExpressions),(()=>this._updateSymbologyOverride()),h.nn),this.addResolvingPromise(this._updateRequiredFields())}get lodFactor(){return this.view.qualitySettings.sceneService.object.lodFactor}get parsedFilterExpressions(){return"Overview"!==this.sublayer.modelName&&this.layerView?this.layerView.filterExpressions.map((e=>{let r,[t,i]=e;try{r=f.WhereClause.create(t,this.sublayer.fieldsIndex)}catch(l){return u.Z.getLogger(this).error("Failed to parse filterExpression: "+l),null}if(!r.isStandardized)return u.Z.getLogger(this).error("filterExpression is using non standard function"),null;const s=[],n=r.fieldNames;return(0,D.e8)(n,this.sublayer.fields,{missingFields:s}),s.length>0?(u.Z.getLogger(this).error("filterExpression references unknown fields: ".concat(s.join(", "))),null):[r,i]})).filter((e=>null!=e)):[]}get filter(){return null!=this._filter?this._filter.viewFilter:null}set filter(e){null!=e&&A.z.checkSupport(e)?null!=this._filter?this._filter.viewFilter=e:this._filter=new A.z({viewFilter:e,layerFieldsIndex:this.sublayer.fieldsIndex,loadAsyncModule:e=>this._loadAsyncModule(e),addSqlFilter:(e,r)=>this.addSqlFilter(e,r,this.logError)}):this._filter=null}isUpdating(){return super.isUpdating()||null!=this._filter&&this._filter.updating}_updateSymbologyOverride(){const e=this.parsedFilterExpressions;e.length>0?this._setSymbologyOverride(((r,t)=>{for(const[i,s]of e)try{if(i.testFeature(r))return R(t,s)}catch(P){this.logError(P)}return R(t,null)}),this.filterExpressionFields):this._setSymbologyOverride(null,null)}get filterExpressionFields(){return(0,_.Q0)(this.sublayer.fieldsIndex,this.parsedFilterExpressions.reduce(((e,r)=>{let[t]=r;return e.concat(t.fieldNames)}),new Array))}get availableFields(){const e=this.sublayer,r=e.fieldsIndex;let t=this.requiredFields;if(e.outFields||e.layer.outFields){const i=[...e.outFields||[],...e.layer.outFields||[]];t=[...(0,_.Lk)(r,i),...t]}return(0,_.Q0)(r,t)}_createLayerGraphic(e){const r=new s.Z(null,null,e);return r.layer=this.sublayer.layer,r.sourceLayer=this.sublayer,r}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}async fetchPopupFeatures(e,r){const t=this._validateFetchPopupFeatures(r);if(t)throw t;if(null===r||void 0===r||!r.clientGraphics||0===r.clientGraphics.length)return[];const i=[],s=[],n=null!=this.sublayer.associatedLayer?await this.sublayer.associatedLayer.load():this.sublayer,l=(0,_.Lk)(this.sublayer.fieldsIndex,await(0,T.e7)(n,(0,T.V5)(this.sublayer,r))),o=new Set;for(const a of r.clientGraphics)(0,_.Gm)(l,a,o)?s.push(a):i.push(a);return 0===s.length?i:(null!=this.sublayer.associatedLayer&&await this.sublayer.associatedLayer.load().catch((()=>u.Z.getLogger(this).warn("Failed to load associated feature layer. Displaying popup attributes from cached attributes."))),this.whenGraphicAttributes(s,Array.from(o)).catch((()=>s)).then((e=>i.concat(e))))}async _updateRequiredFields(){const e=(0,_.Q0)(this.sublayer.fieldsIndex,[...this.sublayer.renderer?await this.sublayer.renderer.getRequiredFields(this.sublayer.fieldsIndex):[],...this.definitionExpressionFields||[],...this.filterExpressionFields||[]]);this._set("requiredFields",e)}_validateFetchPopupFeatures(e){const{sublayer:r}=this,{popupEnabled:t}=r;return t?(0,T.V5)(r,e)?void 0:new g.Z("buildingscenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{sublayer:r}):new g.Z("buildingscenelayerview3d:fetchPopupFeatures","Popups are disabled",{sublayer:r})}getFilters(){const e=super.getFilters();return this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),null!=this._filter&&this._filter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return null!=this.filter?this.filter.createQuery(e):new w.Z(e)}queryExtent(e,r){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),null===r||void 0===r?void 0:r.signal)}queryFeatureCount(e,r){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),null===r||void 0===r?void 0:r.signal)}queryFeatures(e,r){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),null===r||void 0===r?void 0:r.signal).then((e=>{if(null===e||void 0===e||!e.features)return e;const r=this.sublayer,t=r.layer;for(const i of e.features)i.layer=t,i.sourceLayer=r;return e}))}queryObjectIds(e,r){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),null===r||void 0===r?void 0:r.signal)}_ensureQueryEngine(){return null==this._queryEngine&&(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=(0,Q.gz)(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new O.u({layerView:this,priority:B.T8.FEATURE_QUERY_ENGINE,spatialIndex:new k.I({featureAdapter:new j.u({objectIdField:this.sublayer.objectIdField,attributeStorageInfo:this.sublayer.attributeStorageInfo,getFeatureExtent:e}),forAllFeatures:(e,r)=>this._forAllFeatures(((r,t,i)=>e({id:r,index:t,meta:i})),r,V.p.QUERYABLE),getFeatureExtent:e,sourceSpatialReference:(0,D.tp)(this.sublayer),viewSpatialReference:this.view.spatialReference})})}_ensureQuery(e){return this._addDefinitionExpressionToQuery(null==e?this.createQuery():w.Z.from(e))}};(0,i._)([(0,y.Cb)()],z.prototype,"i3slayer",null),(0,i._)([(0,y.Cb)()],z.prototype,"layerView",void 0),(0,i._)([(0,y.Cb)()],z.prototype,"lodFactor",null),(0,i._)([(0,y.Cb)({readOnly:!0})],z.prototype,"parsedFilterExpressions",null),(0,i._)([(0,y.Cb)({type:b.Z})],z.prototype,"filter",null),(0,i._)([(0,y.Cb)()],z.prototype,"_filter",void 0),(0,i._)([(0,y.Cb)({type:[String],readOnly:!0})],z.prototype,"filterExpressionFields",null),(0,i._)([(0,y.Cb)({type:[String],readOnly:!0})],z.prototype,"requiredFields",void 0),(0,i._)([(0,y.Cb)({type:[String],readOnly:!0})],z.prototype,"availableFields",null),z=(0,i._)([(0,c.j)("esri.views.3d.layers.BuildingComponentSublayerView3D")],z);const U=z;var W=t(42069),H=t(58890),X=t(67581);class Y extends X.Z{constructor(e){super(e),this.layer=null,this.sublayerViews=null}highlight(e){throw new Error("Not implemented")}}(0,i._)([(0,y.Cb)()],Y.prototype,"layer",void 0),(0,i._)([(0,y.Cb)()],Y.prototype,"sublayerViews",void 0);const J=x(n.Z);let K=class extends((0,W.A)(Y)){constructor(e){super(e),this.type="building-scene-3d",this.sublayerViews=new o.Z,this._abortController=new AbortController,this._loadingComponents=0,this._pendingWhenSublayerViews=new Map,this.ignoresMemoryFactor=!1}get filterExpression(){var e;const r=this.layer.activeFilterId,t=null!=r?this.layer.filters.find((e=>e.id===r)):null,i=null!=t?null===(e=t.filterBlocks)||void 0===e?void 0:e.find((e=>"solid"===e.filterMode.type)):null;return i?i.filterExpression:null}get filterExpressions(){const e=this.layer.activeFilterId,r=null!=e?this.layer.filters.find((r=>r.id===e)):null;return null!==r&&void 0!==r&&r.filterBlocks?r.filterBlocks.toArray().map((e=>{var r;return[null!==(r=e.filterExpression)&&void 0!==r?r:"",P(e)]})):[]}get updatingProgressValue(){const e=this.sublayerViews,r=this._loadingComponents+(e?e.length:0);return e.reduce(((e,r)=>e+r.updatingProgress),0)/r}isUpdating(){return this._loadingComponents>0||this.sublayerViews&&this.sublayerViews.some((e=>e.updating))}initialize(){(0,D.Jf)(this.layer.spatialReference,this.view.spatialReference,this.view.viewingMode),this._initializeSubLayerViews(this.layer.sublayers,this)}destroy(){this.sublayerViews&&(this.sublayerViews.forEach((e=>e.destroy())),this.sublayerViews=null),this._abortController=(0,d.IM)(this._abortController)}_initializeSubLayerViews(e,r){const t=this,i=this.view;e.forEach((e=>{if(!e.isEmpty)if("building-group"===e.type){const t=new J({sublayer:e,view:i,parent:r});this._initializeSubLayerViews(e.sublayers,t)}else"mesh"===e.geometryType&&(this._loadingComponents++,e.load({signal:this._abortController.signal}).then((()=>{const s=new U({sublayer:e,layerView:t,view:i,parent:r});this.sublayerViews.push(s);const n=this._pendingWhenSublayerViews.get(e);if(n){for(const e of n)e.resolve(s);this._pendingWhenSublayerViews.delete(e)}this.addHandles([(0,h.YP)((()=>s.updating),(()=>this.notifyChange("updating")),h.tX),(0,h.YP)((()=>s.updatingProgress),(()=>this.notifyChange("updatingProgressValue")),h.tX)])})).catch((r=>{(0,p.D_)(r)||u.Z.getLogger(this).error("Error while creating view for sublayer ".concat(e.id,"\nLayer: ").concat(this.layer.url,"\n"),r)})).then((()=>{this._loadingComponents--,this.notifyChange("updating"),this.notifyChange("updatingProgressValue")})))}))}getGraphicFromIntersectorTarget(e){for(const r of this.sublayerViews.items)if(r.sublayer.uid===e.sublayerUid)return r.getGraphicFromIntersectorTarget(e);return null}async fetchPopupFeatures(e,r){if(null===r||void 0===r||!r.clientGraphics||0===r.clientGraphics.length)return[];const t=(0,l.Ms)(r.clientGraphics,(e=>e.sourceLayer)),i=[];for(const[s,n]of t){const t=this._findComponent(s);null!=t&&i.push(t.fetchPopupFeatures(e,{...r,clientGraphics:n}))}return(await(0,p.OT)(i)).flat()}whenGraphicBounds(e){const r=this._findComponent(e.sourceLayer);return null==r?Promise.reject():r.whenGraphicBounds(e)}getAABBFromIntersectorTarget(e){for(const r of this.sublayerViews.items)if(r.sublayer.uid===e.sublayerUid)return r.getAABBFromIntersectorTarget(e);return null}async whenSublayerView(e){const r=this._findComponent(e);if(null!=r)return r;const t=this._pendingWhenSublayerViews.get(e),i=(0,p.hh)();return t?t.push(i):this._pendingWhenSublayerViews.set(e,[i]),i.promise}_findComponent(e){return this.sublayerViews.find((r=>e===r.sublayer))}highlight(e){e instanceof s.Z?e=[e]:e instanceof o.Z&&(e=e.toArray());const r=[];if(Array.isArray(e)&&e.length>0&&e[0]instanceof s.Z){const t=e,i=new Map;for(const e of t){let r=i.get(e.sourceLayer);null==r&&(r=[],i.set(e.sourceLayer,r)),r.push(e)}this.sublayerViews.forEach((e=>{const t=i.get(e.sublayer);t&&r.push(e.highlight(t))}))}return(0,a.AL)(r)}get usedMemory(){return this.sublayerViews.reduce(((e,r)=>e+r.usedMemory),0)}get unloadedMemory(){return this.sublayerViews.reduce(((e,r)=>e+r.unloadedMemory),0)}};(0,i._)([(0,y.Cb)()],K.prototype,"sublayerViews",void 0),(0,i._)([(0,y.Cb)({readOnly:!0})],K.prototype,"filterExpression",null),(0,i._)([(0,y.Cb)({readOnly:!0})],K.prototype,"filterExpressions",null),(0,i._)([(0,y.Cb)(H.q)],K.prototype,"updatingProgress",void 0),(0,i._)([(0,y.Cb)({readOnly:!0,dependsOn:[]})],K.prototype,"updatingProgressValue",null),K=(0,i._)([(0,c.j)("esri.views.3d.layers.BuildingSceneLayerView3D")],K);const $=K},1247:(e,r,t)=>{t.d(r,{l:()=>u});var i=t(27366),s=t(32718),n=t(49861),l=(t(25243),t(63780),t(93169),t(69912)),o=t(54054),a=t(44011);const u=e=>{let r=class extends e{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=e=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&s.Z.getLogger(this).error("Error while evaluating definitionExpression: "+e),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&s.Z.getLogger(this).error("Further errors are ignored")}}get parsedDefinitionExpression(){var e;if(null===(e=this.i3slayer)||void 0===e||!e.definitionExpression)return null;try{const e=o.WhereClause.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!e.isStandardized)return s.Z.getLogger(this).error("definitionExpression is using non standard function"),null;const r=[],t=e.fieldNames;return(0,a.e8)(t,this.i3slayer.fields,{missingFields:r}),r.length>0?(s.Z.getLogger(this).error("definitionExpression references unknown fields: ".concat(r.join(", "))),null):(this._definitionExpressionErrors=0,e)}catch(r){return s.Z.getLogger(this).error("Failed to parse definitionExpression: "+r),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:[]}_evaluateClause(e,r){try{return e.testFeature(r)}catch(t){return this.logError(t),!1}}_addDefinitionExpressionToQuery(e){if(!this.parsedDefinitionExpression)return e;const r=this.i3slayer.definitionExpression,t=e.clone();return t.where?t.where="(".concat(r,") AND (").concat(t.where,")"):t.where=r,t}};return(0,i._)([(0,n.Cb)()],r.prototype,"i3slayer",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],r.prototype,"parsedDefinitionExpression",null),(0,i._)([(0,n.Cb)({readOnly:!0})],r.prototype,"definitionExpressionFields",null),r=(0,i._)([(0,l.j)("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],r),r}}}]);
//# sourceMappingURL=8506.67316018.chunk.js.map