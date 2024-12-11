"use strict";(self.webpackChunkmmsp_tbm=self.webpackChunkmmsp_tbm||[]).push([[6354],{23254:(e,t,i)=>{i.d(t,{a:()=>u});const r=2654435761,n=2246822519,s=3266489917,l=668265263,a=374761393;function o(e){const t=[];for(let i=0,r=e.length;i<r;i++){let r=e.charCodeAt(i);r<128?t.push(r):r<2048?t.push(192|r>>6,128|63&r):r<55296||r>=57344?t.push(224|r>>12,128|r>>6&63,128|63&r):(i++,r=65536+((1023&r)<<10|1023&e.charCodeAt(i)),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r))}return new Uint8Array(t)}class u{constructor(e){this._seed=e,this._totallen=0,this._bufs=[],this.init()}init(){return this._bufs=[],this._totallen=0,this}updateFloatArray(e){const t=[];for(const i of e)isNaN(i)?t.push("NaN"):i===1/0?t.push("Infinity"):i===-1/0?t.push("-Infinity"):0===i?t.push("0"):t.push(i.toString(16));this.update(o(t.join("")))}updateIntArray(e){const t=Int32Array.from(e);this.update(new Uint8Array(t.buffer))}updateUint8Array(e){this.update(Uint8Array.from(e))}updateWithString(e){return this.update(o(e))}update(e){return this._bufs.push(e),this._totallen+=e.length,this}digest(){const e=new Uint8Array(this._totallen);let t=0;for(const i of this._bufs)e.set(i,t),t+=i.length;return this.init(),this._xxHash32(e,this._seed)}_xxHash32(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const i=e;let o=t+a&4294967295,u=0;if(i.length>=16){const i=[t+r+n&4294967295,t+n&4294967295,t+0&4294967295,t-r&4294967295],s=e,l=s.length-16;let a=0;for(u=0;(4294967280&u)<=l;u+=4){const e=u,t=s[e]+(s[e+1]<<8),l=s[e+2]+(s[e+3]<<8),o=t*n+(l*n<<16);let d=i[a]+o&4294967295;d=d<<13|d>>>19;const h=65535&d,p=d>>>16;i[a]=h*r+(p*r<<16)&4294967295,a=a+1&3}o=(i[0]<<1|i[0]>>>31)+(i[1]<<7|i[1]>>>25)+(i[2]<<12|i[2]>>>20)+(i[3]<<18|i[3]>>>14)&4294967295}o=o+e.length&4294967295;const d=e.length-4;for(;u<=d;u+=4){const e=u,t=i[e]+(i[e+1]<<8),r=i[e+2]+(i[e+3]<<8);o=o+(t*s+(r*s<<16))&4294967295,o=o<<17|o>>>15,o=(65535&o)*l+((o>>>16)*l<<16)&4294967295}for(;u<i.length;++u)o+=i[u]*a,o=o<<11|o>>>21,o=(65535&o)*r+((o>>>16)*r<<16)&4294967295;return o^=o>>>15,o=((65535&o)*n&4294967295)+((o>>>16)*n<<16),o^=o>>>13,o=((65535&o)*s&4294967295)+((o>>>16)*s<<16),o^=o>>>16,o<0?o+4294967296:o}}},87072:(e,t,i)=>{function r(e){var t;const i=e.layer;return"floorInfo"in i&&null!==(t=i.floorInfo)&&void 0!==t&&t.floorField&&"floors"in e.view?s(e.view.floors,i.floorInfo.floorField):null}function n(e,t){var i;return"floorInfo"in t&&null!==(i=t.floorInfo)&&void 0!==i&&i.floorField?s(e,t.floorInfo.floorField):null}function s(e,t){if(null===e||void 0===e||!e.length)return null;const i=e.filter((e=>""!==e)).map((e=>"'".concat(e,"'")));return i.push("''"),"".concat(t," IN (").concat(i.join(","),") OR ").concat(t," IS NULL")}i.d(t,{c:()=>r,f:()=>n})},14317:(e,t,i)=>{i.d(t,{h:()=>s});i(63780),i(44927),i(84652),i(32718);var r=i(86710),n=i(54486);i(3276),i(83217);function s(e,t,i){if(null==(null===e||void 0===e?void 0:e.timeInfo))return null;const{datesInUnknownTimezone:s=!1,timeOffset:l,useViewTime:a}=e;let o=e.timeExtent;s&&(o=function(e){if(!e)return e;const{start:t,end:i}=e;return new n.Z({start:null!=t?(0,r.Nm)(t,t.getTimezoneOffset(),"minutes"):t,end:null!=i?(0,r.Nm)(i,i.getTimezoneOffset(),"minutes"):i})}(o));let u=a?t&&o?t.intersection(o):t||o:o;return!u||u.isEmpty||u.isAllTime?u:(l&&(u=u.offset(-l.value,l.unit)),s&&(u=function(e){if(!e)return e;const{start:t,end:i}=e;return new n.Z({start:null!=t?(0,r.Nm)(t,-t.getTimezoneOffset(),"minutes"):t,end:null!=i?(0,r.Nm)(i,-i.getTimezoneOffset(),"minutes"):i})}(u)),u.equals(i)?i:u)}},42069:(e,t,i)=>{i.d(t,{A:()=>d});var r=i(27366),n=i(42537),s=i(66978),l=i(94172),a=i(49861),o=(i(93169),i(32718),i(84936),i(69912)),u=i(5354);const d=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(){super.postscript(),(0,u.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,n.kB)((()=>e.abort()))),await(0,l.N1)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),t),(0,s.k_)(t);const i=(0,u.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}};return(0,r._)([(0,a.Cb)()],t.prototype,"view",void 0),(0,r._)([(0,a.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,r._)([(0,o.j)("esri.views.3d.layers.LayerView3D")],t),t}},53586:(e,t,i)=>{i.d(t,{I:()=>H});var r=i(1413),n=i(27366),s=i(52639),l=i(23254),a=i(41644),o=i(42537),u=i(92026),d=i(67426),h=i(66978),p=i(94172),c=i(49861),y=(i(32718),i(84936),i(69912)),g=i(48732),v=i(46634),f=i(81753),b=i(58801),_=i(34610),m=i(86638),C=i(26279),E=i(61310),w=i(14173),x=i(8186),S=i(57848),O=i(75556),I=i(46568),R=i(59453),F=i(96387),V=i(84786),A=i(26511),T=i(27732),Q=i(78485),N=i(74075);let H=class extends d.D{constructor(e){super(e),this.type="graphics-3d",this._randomRotationRenderers=null,this._updatingHandles=new v.R,this.elevationFeatureExpressionEnabled=!1,this.scaleVisibilityEnabled=!1,this.filterVisibilityEnabled=!1,this.frustumVisibilityEnabled=!1,this.elevationAlignmentEnabled=!1,this.timeExtentEnabled=!1,this.setUidToIdOnAdd=!0,this.dataExtent=null,this.drapeSourceType=C.Lw.Features,this.preferredUpdatePolicy=Q.j.ASYNC,this._suspendResumeExtent=null}initialize(){const e=this.owner,t=(this.filterVisibilityEnabled||this.timeExtentEnabled)&&"multipatch"!==e.layer.geometryType,i=new x.w({owner:this,layer:this.layer,preferredUpdatePolicy:this.preferredUpdatePolicy,elevationFeatureExpressionEnabled:this.elevationFeatureExpressionEnabled,graphicSymbolSupported:!1,hasZ:e.hasZ,hasM:e.hasM,setUidToIdOnAdd:this.setUidToIdOnAdd,componentFactories:{deconflictor:t=>e.view.deconflictor.addGraphicsOwner(t),labeler:(t,i)=>e.view.labeler.addGraphicsOwner(t,i),elevationAlignment:this.elevationAlignmentEnabled?(t,i)=>new S._({graphicsCoreOwner:this,graphicsCore:t,queryGraphicUIDsInExtent:i,elevationProvider:e.view.elevationProvider}):null,scaleVisibility:this.scaleVisibilityEnabled?(t,i)=>new R.c({graphicsCoreOwner:this,layer:this.layer,queryGraphicUIDsInExtent:i,graphicsCore:t,basemapTerrain:e.view.basemapTerrain}):null,filterVisibility:t?t=>new A.n({context:(0,r.Z)((0,r.Z)({},t),{},{configuration:e})}):null,objectStates:e=>new I.d(e)}});this._set("graphicsCore",i),this.frustumVisibilityEnabled&&this._set("frustumVisibility",new O.L({graphicsCoreOwner:this})),this.elevationAlignment&&this._updatingHandles.add((()=>this.layer.elevationInfo),((e,t)=>{(0,g.Hg)(e,t)&&this._updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())})),this._updatingHandles.add((()=>this.layer.labelsVisible),(()=>this.graphicsCore.updateVisibilityInfo())),this._updatingHandles.add((()=>this.layer.labelingInfo),((e,t)=>{(0,g.Hg)(e,t)&&this.graphicsCore.updateLabelingInfo()})),this._updatingHandles.add((()=>this.preferredUpdatePolicy),(e=>this.graphicsCore.preferredUpdatePolicy=e)),this.addResolvingPromise(this._initializeAsync())}async _initializeAsync(){await(0,h.U3)(this.graphicsCore.initializePromise);const e=this.owner;this._updatingHandles.add((()=>this.renderer),(e=>this._updatingHandles.addPromise(this.graphicsCore.rendererChange(e)))),this._updatingHandles.add((()=>e.fullOpacity),(()=>this.graphicsCore.opacityChange())),this._setupSuspendResumeExtent(),this.updateClippingExtent&&(this._updatingHandles.add((()=>e.view.clippingArea),(()=>this._updateClippingExtent())),this._updateClippingExtent()),this.graphicsCore.startCreateGraphics(),this.graphicsCore.labelsEnabled&&await(0,h.U3)(this.graphicsCore.updateLabelingInfo())}destroy(){this._updatingHandles.destroy(),this._set("frustumVisibility",(0,u.SC)(this.frustumVisibility)),this._set("graphicsCore",(0,u.SC)(this.graphicsCore)),this._set("owner",null)}get layer(){return this.owner.layer}get dataUpdating(){var e,t;return null!==(e=null===(t=this.graphicsCore)||void 0===t?void 0:t.dataUpdating)&&void 0!==e&&e}get renderer(){const{renderer:e,objectIdField:t}=this.layer;if(!e||!t||"heatmap"===e.type||!e.visualVariables)return e;const i=e.visualVariables.findIndex((e=>"rotation"===e.type&&null!=e.valueExpression&&(0,b.v)(e.valueExpression)===t&&(null==e.axis||"heading"===e.axis)&&"geographic"===e.rotationType));if(i<0)return e;const r=e.clone();return r.visualVariables?(r.visualVariables.splice(i,1),this._randomRotationRenderers||(this._randomRotationRenderers=new WeakMap),this._randomRotationRenderers.set(r,t),r):e}get scaleVisibility(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.scaleVisibility}get filterVisibility(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.filterVisibility}get elevationAlignment(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.elevationAlignment}get suspendResumeExtentMode(){var e;return null!==(e=this.owner.suspendResumeExtentMode)&&void 0!==e?e:"computed"}get scaleVisibilitySuspended(){return null!=this.scaleVisibility&&this.scaleVisibility.suspended}get suspended(){return this.owner.suspended}get legendEnabled(){return null==this.frustumVisibility||!this.frustumVisibility.suspended}get suspendInfo(){const e={};return this.scaleVisibilitySuspended&&(e.outsideScaleRange=!0),null!=this.frustumVisibility&&this.frustumVisibility.suspended&&(e.outsideOfView=!0),e}get updating(){var e,t;return!!(null!==(e=this.graphicsCore)&&void 0!==e&&e.updating||null!==(t=this.frustumVisibility)&&void 0!==t&&t.updating||this._updatingHandles.updating)}get updatingRemaining(){var e,t;return null!==(e=null===(t=this.graphicsCore)||void 0===t?void 0:t.updatingRemaining)&&void 0!==e?e:0}get featureStore(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.featureStore}get view(){return this.owner.view}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){var e;return null===(e=this.owner)||void 0===e?void 0:e.fullOpacity}get filter(){return"filter"in this.owner?this.owner.filter:null}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}get featureSpatialReference(){return"featureSpatialReference"in this.owner?this.owner.featureSpatialReference:this.owner.view.spatialReference}get graphics3DGraphics(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphics}get graphics3DGraphicsByObjectID(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphicsByObjectID}get symbolUpdateType(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.symbolUpdateType}get displayFeatureLimit(){var e;const t=this.view.quality,i=null===(e=this.graphicsCore)||void 0===e?void 0:e.displayFeatureLimit;if(1===t)return i;const r=Math.ceil(i.maximumNumberOfFeatures*t);return new w.J(i.maximumTotalNumberOfVertices,r,i.averageSymbolComplexity)}get usedMemory(){var e,t;return null!==(e=null===(t=this.graphicsCore)||void 0===t?void 0:t.usedMemory)&&void 0!==e?e:0}get loadedFeatures(){var e,t;return null!==(e=null===(t=this.graphicsCore)||void 0===t?void 0:t.numberOfGraphics)&&void 0!==e?e:0}get usedMemoryPerFeature(){var e,t;return null!==(e=null===(t=this.graphicsCore)||void 0===t?void 0:t.usedMemoryPerGraphic)&&void 0!==e?e:0}get unprocessedMemoryEstimate(){var e,t;return null!==(e=null===(t=this.graphicsCore)||void 0===t?void 0:t.unprocessedMemoryEstimate)&&void 0!==e?e:0}get performanceInfo(){return this.graphicsCore.performanceInfo}maskOccludee(e){var t;const i=null===(t=this.graphicsCore)||void 0===t?void 0:t.objectStates;if(!i)return(0,o.kB)();const{set:r,handle:n}=i.acquireOccludeeSet(null);return i.setUid(r,e.uid),n}highlight(e){var t,i;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0;const l=null===(t=this.graphicsCore)||void 0===t?void 0:t.objectStates;if(!l)return T.qK;if(null!==(i=n)&&void 0!==i||(n=N.b),e instanceof m.Z){const{set:t,handle:i}=l.acquireHighlightSet(n,r);return this.owner.queryObjectIds(e).then((e=>l.setObjectIds(t,e))),i}let a=(0,T.OL)(e);if(0===a.length)return T.qK;if(a[0]instanceof s.Z){const e=a;if(null==(0,V.g)(this.layer.fieldsIndex,e[0].attributes,r)){const t=e.map((e=>e.uid)),{set:i,handle:r}=l.acquireHighlightSet(n,null);return l.setUids(i,t),r}a=e.map((e=>(0,V.g)(this.layer.fieldsIndex,e.attributes,r)))}if((0,T.Nl)(a[0])){const e=a,{set:t,handle:i}=l.acquireHighlightSet(n,r);return l.setObjectIds(t,e),i}return T.qK}resetObjectStates(){var e;null===(e=this.graphicsCore)||void 0===e||null===(e=e.objectStates)||void 0===e||e.reset()}whenGraphicBounds(e,t){var i;return null===(i=this.graphicsCore)||void 0===i?void 0:i.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){var i;return null===(i=this.graphicsCore)||void 0===i?void 0:i.computeAttachmentOrigin(e,t)}notifyGraphicGeometryChanged(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}notifyGraphicVisibilityChanged(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}getRenderingInfo(e,t,i){var r;const n=(0,_.Kb)(e,{renderer:t,arcade:i});if(null!==n&&void 0!==n&&n.color){const e=n.color;e[0]=e[0]/255,e[1]=e[1]/255,e[2]=e[2]/255}if(null!=n&&null!=t&&null!==(r=this._randomRotationRenderers)&&void 0!==r&&r.has(t)){const i=this._randomRotationRenderers.get(t),r=e.attributes[i],s=new l.a(0);s.updateFloatArray([r]),s.updateUint8Array([173]),n.heading=8.381e-8*s.digest()}return n}getRenderingInfoAsync(e,t,i,n){return(0,_.xn)(e,(0,r.Z)({renderer:t,arcade:i},n))}getSymbolLayerSize(e,t){var i;return null===(i=this.graphicsCore)||void 0===i?void 0:i.getSymbolLayerSize(e,t)}setObjectIdVisibility(e,t){var i;null===(i=this.graphicsCore)||void 0===i||i.setObjectIdVisibility(e,t)}refreshFilter(){null!=this.filterVisibility&&this.filterVisibility.reapply()}getGraphics3DGraphicByObjectId(e){var t;return null===(t=this.graphicsCore)||void 0===t?void 0:t.getGraphics3DGraphicByObjectId(e)}_updateClippingExtent(){const e=this.owner.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.owner.view.spatialReference)&&(this.updateClippingExtent(e)||this.graphicsCore.recreateAllGraphics())}_setupSuspendResumeExtent(){(this.frustumVisibility||this.scaleVisibility)&&this.addHandles((0,p.YP)((()=>this.suspendResumeExtentMode),(()=>{switch(this.removeHandles(q),this.suspendResumeExtentMode){case"computed":this.addHandles([(0,p.YP)((()=>this.graphicsCore.computedExtent),(e=>this._updateSuspendResumeExtent(e)),p.nn),(0,p.YP)((()=>this.graphicsCore.extentPadding),(()=>this._updateSuspendResumeExtent(this.graphicsCore.computedExtent)))],q);break;case"data":this.addHandles([(0,p.gx)((()=>this.dataExtent),(e=>this._updateSuspendResumeExtent(e)),p.nn),(0,p.YP)((()=>this.graphicsCore.extentPadding),(()=>this._updateSuspendResumeExtent(this.dataExtent)))],q);break;default:(0,a.Bg)(this.suspendResumeExtentMode)}}),p.nn))}_updateSuspendResumeExtent(e){e?this._suspendResumeExtentChanged(this._extentToSuspendResumeRect(e,this._suspendResumeExtent)):this._suspendResumeExtentChanged(null)}_extentToSuspendResumeRect(e,t){const i=this.owner.view.spatialReference;if(!e.spatialReference.equals(i)){if(!(0,f.Q8)(e,i))return;e=(0,f.iV)(e,i)}return(0,F.Go)(e,t,E.PY,this.graphicsCore.extentPadding)}_suspendResumeExtentChanged(e){null!=this.frustumVisibility&&this.frustumVisibility.setExtent(e),null!=this.scaleVisibility&&this.scaleVisibility.setExtent(e)}};(0,n._)([(0,c.Cb)()],H.prototype,"type",void 0),(0,n._)([(0,c.Cb)({constructOnly:!0})],H.prototype,"owner",void 0),(0,n._)([(0,c.Cb)()],H.prototype,"layer",null),(0,n._)([(0,c.Cb)({readOnly:!0})],H.prototype,"dataUpdating",null),(0,n._)([(0,c.Cb)()],H.prototype,"renderer",null),(0,n._)([(0,c.Cb)({constructOnly:!0})],H.prototype,"updateClippingExtent",void 0),(0,n._)([(0,c.Cb)({constructOnly:!0})],H.prototype,"elevationFeatureExpressionEnabled",void 0),(0,n._)([(0,c.Cb)({constructOnly:!0})],H.prototype,"graphicsCore",void 0),(0,n._)([(0,c.Cb)({constructOnly:!0})],H.prototype,"scaleVisibilityEnabled",void 0),(0,n._)([(0,c.Cb)({constructOnly:!0})],H.prototype,"filterVisibilityEnabled",void 0),(0,n._)([(0,c.Cb)({constructOnly:!0})],H.prototype,"frustumVisibilityEnabled",void 0),(0,n._)([(0,c.Cb)({constructOnly:!0})],H.prototype,"elevationAlignmentEnabled",void 0),(0,n._)([(0,c.Cb)({constructOnly:!0})],H.prototype,"timeExtentEnabled",void 0),(0,n._)([(0,c.Cb)({constructOnly:!0})],H.prototype,"setUidToIdOnAdd",void 0),(0,n._)([(0,c.Cb)()],H.prototype,"scaleVisibility",null),(0,n._)([(0,c.Cb)()],H.prototype,"filterVisibility",null),(0,n._)([(0,c.Cb)()],H.prototype,"elevationAlignment",null),(0,n._)([(0,c.Cb)({constructOnly:!0})],H.prototype,"frustumVisibility",void 0),(0,n._)([(0,c.Cb)()],H.prototype,"suspendResumeExtentMode",null),(0,n._)([(0,c.Cb)()],H.prototype,"dataExtent",void 0),(0,n._)([(0,c.Cb)()],H.prototype,"scaleVisibilitySuspended",null),(0,n._)([(0,c.Cb)()],H.prototype,"suspended",null),(0,n._)([(0,c.Cb)()],H.prototype,"legendEnabled",null),(0,n._)([(0,c.Cb)()],H.prototype,"suspendInfo",null),(0,n._)([(0,c.Cb)()],H.prototype,"updating",null),(0,n._)([(0,c.Cb)()],H.prototype,"updatingRemaining",null),(0,n._)([(0,c.Cb)()],H.prototype,"featureStore",null),(0,n._)([(0,c.Cb)()],H.prototype,"view",null),(0,n._)([(0,c.Cb)()],H.prototype,"loadedGraphics",null),(0,n._)([(0,c.Cb)()],H.prototype,"fullOpacity",null),(0,n._)([(0,c.Cb)()],H.prototype,"filter",null),(0,n._)([(0,c.Cb)()],H.prototype,"slicePlaneEnabled",null),(0,n._)([(0,c.Cb)()],H.prototype,"drapeSourceType",void 0),(0,n._)([(0,c.Cb)()],H.prototype,"updatePolicy",null),(0,n._)([(0,c.Cb)()],H.prototype,"preferredUpdatePolicy",void 0),(0,n._)([(0,c.Cb)({readOnly:!0})],H.prototype,"displayFeatureLimit",null),H=(0,n._)([(0,y.j)("esri.views.3d.layers.graphics.Graphics3DFeatureProcessor")],H);const q="suspendResumeExtentMode"},82607:(e,t,i)=>{i.d(t,{q:()=>g});var r=i(1413),n=i(27366),s=(i(59486),i(7138)),l=i(49861),a=(i(93169),i(32718),i(84936),i(69912)),o=i(53866),u=i(51776),d=i(52410),h=i(49818),p=i(86638),c=i(27823);const y=u.q;let g=class extends s.Z{get layer(){return this.context.layer}get spatialReference(){return this.context.spatialReference}get _queryGeometryType(){switch(this.layer.geometryType){case"multipoint":case"point":case"polygon":case"polyline":return this.layer.geometryType;case"mesh":return"polygon";default:return}}get defaultQueryJSON(){return new p.Z({outSpatialReference:this.spatialReference}).toJSON()}get _dataQueryEngine(){return this._ensureDataQueryEngine()}constructor(e){super(e),this._dataQueryEngineInstance=null}destroy(){this.clear()}clear(){return!!this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null,!0)}async executeQueryForIdSet(e,t,i){return this._dataQueryEngine.executeQueryForIdSet(this._ensureQueryJSON(e,t),i)}async executeQueryForCount(e,t){return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),t)}async executeQueryForExtent(e,t){const{count:i,extent:r}=await this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),t);return{count:i,extent:o.Z.fromJSON(r)}}async executeQueryForIds(e,t){return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),t)}async executeQueryForLatestObservations(e,t){const i=await this._dataQueryEngine.executeQueryForLatestObservations(this._ensureQueryJSON(e),t),r=h.Z.fromJSON(i);return r.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),r}async executeQuery(e,t){const i=await this._dataQueryEngine.executeQuery(this._ensureQueryJSON(e),t),r=h.Z.fromJSON(i);return r.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),r}_ensureQueryJSON(e,t){let i=this.defaultQueryJSON;if(null!=e&&("outSpatialReference"in e&&!e.outSpatialReference&&(e.outSpatialReference=this.spatialReference),i=e.toJSON()),null!=t){const e=t.geometries.map((e=>e.toJSON())).reduce(((e,t)=>(e.rings=e.rings.concat(t.rings),e)));i=(0,r.Z)((0,r.Z)({},i),{},{sceneFilter:(0,r.Z)((0,r.Z)({},t),{},{geometry:e})})}return i}_ensureDataQueryEngine(){var e,t;if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const i="timeInfo"in this.layer&&(null===(e=this.layer.timeInfo)||void 0===e?void 0:e.toJSON())||null,r=this.layer.objectIdField,n=c.M.toJSON(this._queryGeometryType),s=(null===(t=this.layer.fieldsIndex)||void 0===t?void 0:t.toJSON())||new d.Z([]),l=this.priority,a=this.spatialReference.toJSON(),{hasZ:o,hasM:u,featureStore:h,scheduler:p}=this.context;return this._dataQueryEngineInstance=new y({hasZ:o,hasM:u,geometryType:n,fieldsIndex:s,timeInfo:i,spatialReference:a,objectIdField:r,featureStore:h,scheduler:p,priority:l}),this._dataQueryEngineInstance}};(0,n._)([(0,l.Cb)({constructOnly:!0})],g.prototype,"context",void 0),(0,n._)([(0,l.Cb)({constructOnly:!0})],g.prototype,"priority",void 0),(0,n._)([(0,l.Cb)()],g.prototype,"layer",null),(0,n._)([(0,l.Cb)()],g.prototype,"spatialReference",null),(0,n._)([(0,l.Cb)()],g.prototype,"_queryGeometryType",null),(0,n._)([(0,l.Cb)()],g.prototype,"defaultQueryJSON",null),g=(0,n._)([(0,a.j)("esri.views.3d.layers.graphics.QueryEngine")],g)},26511:(e,t,i)=>{i.d(t,{n:()=>v});var r=i(27366),n=i(7138),s=i(32718),l=i(92026),a=i(66978),o=i(94172),u=i(49861),d=(i(93169),i(84936),i(69912)),h=i(46634),p=i(18661),c=i(87072),y=i(82607),g=i(93463);let v=class extends n.Z{constructor(e){super(e),this._frameTask=null,this._queryEngine=null,this._updateRequested=!0,this._updatingHandles=new h.R,this._abortController=new AbortController}initialize(){var e,t;const i=g.T8.FILTER_VISIBILITY,{layer:r,view:n}=this._configuration,{featureStore:s}=this.context,l=null!==(e=this._configuration.hasZ)&&void 0!==e&&e,a=null!==(t=this._configuration.hasM)&&void 0!==t&&t;this._queryEngine=new y.q({context:{spatialReference:n.spatialReference,layer:r,scheduler:n.resourceController.scheduler,featureStore:s,hasM:a,hasZ:l},priority:i}),this._frameTask=n.resourceController.scheduler.registerTask(i),this._updatingHandles.add((()=>[this._compositedFeatureFilter,this._sceneFilter]),(()=>this._updateRequested=!0),o.nn),this._updatingHandles.addWhen((()=>!this._frameTask.updating&&this._updateRequested),(()=>{this._frameTask.schedule((()=>this._updateVisibility()),this._abortController.signal),this._updateRequested=!1}),o.nn)}destroy(){this._abortController.abort(),this._updatingHandles.destroy(),this.clear(),this._frameTask=(0,l.hw)(this._frameTask),this._queryEngine=(0,l.SC)(this._queryEngine),this._set("context",null)}get updating(){return this._updateRequested||this._updatingHandles.updating||this._frameTask.updating}get defaultVisibility(){return null==this._compositedFeatureFilter&&null==this._sceneFilter}get _featureFilter(){return"filter"in this._configuration?this._configuration.filter:null}get _sceneFilter(){return"layerFilter"in this._configuration?this._configuration.layerFilter:null}get _floorFilter(){return(0,c.c)(this._configuration)}get _timeExtent(){return"timeExtent"in this._configuration?this._configuration.timeExtent:null}get _compositedFeatureFilter(){var e,t,i;const{_featureFilter:r,_timeExtent:n,_floorFilter:s}=this;if(null==n&&null==s)return r;const l=null!==(e=null===r||void 0===r?void 0:r.clone())&&void 0!==e?e:new p.Z;if(null!=n&&(l.timeExtent=null!==(t=null===(i=l.timeExtent)||void 0===i?void 0:i.intersection(n))&&void 0!==t?t:n),null!=s){const e=null==l.where||""===l.where;l.where=e?s:"(".concat(l.where,") AND (").concat(s,")")}return l}get _configuration(){return this.context.configuration}reapply(){this._updateRequested=!0}clear(){this._queryEngine.clear(),this.context.clearFeaturesVisibility()}async _updateVisibility(){const e=this._compositedFeatureFilter,t=this._sceneFilter,{signal:i}=this._abortController,r=this._frameTask,{context:n}=this;if((0,a.k_)(i),null==e&&null==t||0===n.getFeatureCount())return await r.schedule((()=>this.clear()),i);try{const s=await this._queryEngine.executeQueryForIdSet(e,t,i);return(0,a.k_)(i),await r.schedule((()=>{n.updateFeatureVisibilities((e=>s.has(e)))}),i)}catch(l){return(0,a.r9)(l),s.Z.getLogger(this).warn("FeatureFilter query failed: ".concat(l),{error:l}),await r.schedule((()=>{n.setAllFeaturesVisibility(!0)}),i)}}};(0,r._)([(0,u.Cb)({constructOnly:!0})],v.prototype,"context",void 0),(0,r._)([(0,u.Cb)()],v.prototype,"updating",null),(0,r._)([(0,u.Cb)()],v.prototype,"defaultVisibility",null),(0,r._)([(0,u.Cb)()],v.prototype,"_featureFilter",null),(0,r._)([(0,u.Cb)()],v.prototype,"_sceneFilter",null),(0,r._)([(0,u.Cb)()],v.prototype,"_floorFilter",null),(0,r._)([(0,u.Cb)()],v.prototype,"_timeExtent",null),(0,r._)([(0,u.Cb)()],v.prototype,"_compositedFeatureFilter",null),(0,r._)([(0,u.Cb)()],v.prototype,"_configuration",null),(0,r._)([(0,u.Cb)()],v.prototype,"_updateRequested",void 0),v=(0,r._)([(0,d.j)("esri.views.3d.layers.support.FeatureVisibilityFilter")],v)},84786:(e,t,i)=>{function r(e,t,i){if(!i||null==t)return null;if(!e)return function(e,t){const i=t.toLowerCase();for(const r in e)if(r.toLowerCase()===i)return e[r];return null}(t,i);const r=e.get(i);return r?t[r.name]:null}i.d(t,{g:()=>r})},67581:(e,t,i)=>{i.d(t,{Z:()=>g});var r=i(27366),n=i(7138),s=i(91505),l=i(79056),a=i(32718),o=i(92026),u=i(67426),d=i(49861),h=(i(93169),i(84936),i(69912)),p=i(46634),c=i(69787);let y=class extends((0,l.IG)((0,u.v)(s.Z.EventedMixin(n.Z)))){constructor(e){super(e),this._updatingHandles=new p.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",r=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";a.Z.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(r,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,o.SC)(this._updatingHandles)}get fullOpacity(){var e,t,i,r;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(r=this.parent)||void 0===r?void 0:r.fullOpacity)&&void 0!==i?i:1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){var e;const t=this.view.timeExtent,i=null===(e=this.layer)||void 0===e?void 0:e.visibilityTimeExtent;return!t||!i||!t.intersection(i).isEmpty}canResume(){var e,t,i;const r=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)&&(0,c.Cy)(r)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0);const r=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,c.Cy)(r)&&this.visibleAtCurrentScale||(i.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(i.outsideVisibilityTimeExtent=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,r._)([(0,d.Cb)()],y.prototype,"view",void 0),(0,r._)([(0,d.Cb)()],y.prototype,"fullOpacity",null),(0,r._)([(0,d.Cb)()],y.prototype,"layer",void 0),(0,r._)([(0,d.Cb)()],y.prototype,"parent",void 0),(0,r._)([(0,d.Cb)({readOnly:!0})],y.prototype,"suspended",null),(0,r._)([(0,d.Cb)({readOnly:!0})],y.prototype,"suspendInfo",null),(0,r._)([(0,d.Cb)({readOnly:!0})],y.prototype,"legendEnabled",null),(0,r._)([(0,d.Cb)({type:Boolean,readOnly:!0})],y.prototype,"updating",null),(0,r._)([(0,d.Cb)({readOnly:!0})],y.prototype,"updatingProgress",null),(0,r._)([(0,d.Cb)()],y.prototype,"updateSuspended",null),(0,r._)([(0,d.Cb)()],y.prototype,"visible",null),(0,r._)([(0,d.Cb)({readOnly:!0})],y.prototype,"visibleAtCurrentScale",null),(0,r._)([(0,d.Cb)({readOnly:!0})],y.prototype,"visibleAtCurrentTimeExtent",null),y=(0,r._)([(0,h.j)("esri.views.layers.LayerView")],y);const g=y},3276:(e,t,i)=>{i.d(t,{s:()=>s});var r=i(49901);class n extends r.G{constructor(e,t){super(e,t,"webmap")}}function s(e){return null!=e&&"object"==typeof e&&"declaredClass"in e&&"esri.WebMap"===e.declaredClass}new n(2,32)}}]);
//# sourceMappingURL=6354.e4dbe147.chunk.js.map