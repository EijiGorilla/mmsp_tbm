"use strict";(self.webpackChunkmmsp_tbm=self.webpackChunkmmsp_tbm||[]).push([[680],{6741:(e,r,t)=>{t.d(r,{O:()=>m});var i=t(27366),l=t(76200),a=t(77427),s=t(66978),o=t(35995),n=t(49901),d=t(49861),u=(t(25243),t(63780),t(93169),t(38511)),y=t(69912),p=t(25265),c=t(53866),h=t(78952),b=t(25899),f=t(45948),v=t(73117);const m=e=>{let r=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesMap=null}readCapabilities(e,r){var t,i;const l=r.capabilities&&r.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!l)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const a=this.type,s="tile"!==a&&!!r.supportsDynamicLayers,o=l.includes("query"),d=l.includes("map"),u=!!r.exportTilesAllowed,y=l.includes("tilemap"),p=l.includes("data"),c="tile"!==a&&(!r.tileInfo||s),h="tile"!==a&&(!r.tileInfo||s),b="tile"!==a,f=r.cimVersion&&n.G.parse(r.cimVersion),v=null!==(t=null===f||void 0===f?void 0:f.since(1,4))&&void 0!==t&&t,m=null!==(i=null===f||void 0===f?void 0:f.since(2,0))&&void 0!==i&&i;return{operations:{supportsExportMap:d,supportsExportTiles:u,supportsIdentify:o,supportsQuery:p,supportsTileMap:y},exportMap:d?{supportsArcadeExpressionForLabeling:v,supportsSublayersChanges:b,supportsDynamicLayers:s,supportsSublayerVisibility:c,supportsSublayerDefinitionExpression:h,supportsCIMSymbols:m}:null,exportTiles:u?{maxExportTilesCount:+r.maxExportTilesCount}:null}}readVersion(e,r){let t=r.currentVersion;return t||(t=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),t}async fetchRelatedService(e){const r=this.portalItem;if(!r||!(0,v.Fj)(r))return null;this._relatedFeatureServicePromise||(this._relatedFeatureServicePromise=r.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},e).then((e=>{var r;return null!==(r=e.find((e=>"Feature Service"===e.type)))&&void 0!==r?r:null}),(()=>null)));const t=await this._relatedFeatureServicePromise;return(0,s.k_)(e),t?{itemId:t.id,url:t.url}:null}async fetchSublayerInfo(e,r){const{source:t}=e;if(null!==this&&void 0!==this&&this.portalItem&&"tile"===this.type&&"map-layer"===(null===t||void 0===t?void 0:t.type)&&(0,v.Fj)(this.portalItem)&&e.originIdOf("url")<p.s3.SERVICE){const i=await this.fetchRelatedService(r);i&&(e.url=(0,o.v_)(i.url,t.mapLayerId.toString()),e.layerItemId=i.itemId)}const{url:i}=e;let a;if("data-layer"===t.type)a=(await(0,l.Z)(i,{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey},...r})).data;else if(i&&e.originIdOf("url")>p.s3.SERVICE)try{var s,n;const e=await this._fetchAllLayersAndTablesFromService(i),r=null!==(s=null===(n=(0,b.Qc)(i))||void 0===n?void 0:n.sublayer)&&void 0!==s?s:t.mapLayerId;a=e.get(r)}catch{}else{let i=e.id;"map-layer"===(null===t||void 0===t?void 0:t.type)&&(i=t.mapLayerId);try{a=(await this.fetchAllLayersAndTables(r)).get(i)}catch{}}return a}async fetchAllLayersAndTables(e){var r;return this._fetchAllLayersAndTablesFromService(null===(r=this.parsedUrl)||void 0===r?void 0:r.path,e)}async _fetchAllLayersAndTablesFromService(e,r){await this.load(r),this._allLayersAndTablesMap||(this._allLayersAndTablesMap=new Map);const t=(0,b.Qc)(e),i=(0,a.s1)(this._allLayersAndTablesMap,null===t||void 0===t?void 0:t.url.path,(()=>(0,l.Z)((0,o.v_)(null===t||void 0===t?void 0:t.url.path,"/layers"),{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then((e=>{const r=new Map;for(const t of e.data.layers)r.set(t.id,t);return{result:r}}),(e=>({error:e}))))),n=await i;if((0,s.k_)(r),"result"in n)return n.result;throw n.error}};return(0,i._)([(0,d.Cb)({readOnly:!0})],r.prototype,"capabilities",void 0),(0,i._)([(0,u.r)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],r.prototype,"readCapabilities",null),(0,i._)([(0,d.Cb)({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),(0,i._)([(0,d.Cb)({type:c.Z})],r.prototype,"fullExtent",void 0),(0,i._)([(0,d.Cb)(f.id)],r.prototype,"id",void 0),(0,i._)([(0,d.Cb)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),(0,i._)([(0,d.Cb)(f.C_)],r.prototype,"popupEnabled",void 0),(0,i._)([(0,d.Cb)({type:h.Z})],r.prototype,"spatialReference",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],r.prototype,"version",void 0),(0,i._)([(0,u.r)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),r=(0,i._)([(0,y.j)("esri.layers.mixins.ArcGISMapService")],r),r}},18870:(e,r,t)=>{t.d(r,{x:()=>m});var i=t(27366),l=t(80987),a=t(77178),s=t(10064),o=t(32718),n=t(94172),d=t(49861),u=(t(25243),t(63780),t(93169),t(23879)),y=t(69912),p=t(25265),c=t(77990),h=t(58132);const b=o.Z.getLogger("esri.layers.TileLayer");const f=l.Z.ofType(c.Z);function v(e,r){e&&e.forEach((e=>{r(e),e.sublayers&&e.sublayers.length&&v(e.sublayers,r)}))}const m=e=>{let r=class extends e{constructor(){super(...arguments),this.allSublayers=new a.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={[p.s3.SERVICE]:{},[p.s3.PORTAL_ITEM]:{},[p.s3.WEB_SCENE]:{},[p.s3.WEB_MAP]:{}},this.addHandles((0,n.YP)((()=>this.sublayers),((e,r)=>this._handleSublayersChange(e,r)),n.Z_))}destroy(){this.allSublayers.destroy()}readSublayers(e,r){if(!r||!e)return;const{sublayersSourceJSON:t}=this,i=(0,p.M9)(r.origin);if(i<p.s3.SERVICE)return;if(t[i]={context:r,visibleLayers:e.visibleLayers||t[i].visibleLayers,layers:e.layers||t[i].layers},i>p.s3.SERVICE)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:l,origin:a}=this.createSublayersForOrigin("web-document"),s=(0,u.vw)(this);s.setDefaultOrigin(a),this._set("sublayers",new f(l)),s.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find((r=>r.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){var r;const t=(0,p.M9)("web-document"===e?"web-map":e);let i=p.s3.SERVICE,l=this.sublayersSourceJSON[p.s3.SERVICE].layers,a=this.sublayersSourceJSON[p.s3.SERVICE].context,s=null;const o=[p.s3.PORTAL_ITEM,p.s3.WEB_SCENE,p.s3.WEB_MAP].filter((e=>e<=t));for(const p of o){const e=this.sublayersSourceJSON[p];(0,h.ac)(e.layers)&&(i=p,l=e.layers,a=e.context,e.visibleLayers&&(s={visibleLayers:e.visibleLayers,context:e.context}))}const n=[p.s3.PORTAL_ITEM,p.s3.WEB_SCENE,p.s3.WEB_MAP].filter((e=>e>i&&e<=t));let d=null;for(const p of n){const{layers:e,visibleLayers:r,context:t}=this.sublayersSourceJSON[p];e&&(d={layers:e,context:t}),r&&(s={visibleLayers:r,context:t})}const u=function(e,r){const t=[],i={};return e?(e.forEach((e=>{const l=new c.Z;if(l.read(e,r),i[l.id]=l,null!=e.parentLayerId&&-1!==e.parentLayerId){const r=i[e.parentLayerId];r.sublayers||(r.sublayers=[]),r.sublayers.unshift(l)}else t.unshift(l)})),t):t}(l,a),y=new Map,b=new Set;if(d)for(const p of d.layers)y.set(p.id,p);if(null!==(r=s)&&void 0!==r&&r.visibleLayers)for(const p of s.visibleLayers)b.add(p);return v(u,(e=>{d&&e.read(y.get(e.id),d.context),s&&e.read({defaultVisibility:b.has(e.id)},s.context)})),{origin:(0,p.x3)(i),sublayers:new f({items:u})}}read(e,r){super.read(e,r),this.readSublayers(e,r)}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this.removeHandles("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this.addHandles([e.on("after-add",(e=>{let{item:r}=e;r.parent=this,r.layer=this})),e.on("after-remove",(e=>{let{item:r}=e;r.parent=null,r.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.addHandles(e.on("before-changes",(e=>{b.error(new s.Z("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()})),"sublayers-owner"))}};return(0,i._)([(0,d.Cb)({readOnly:!0})],r.prototype,"allSublayers",void 0),(0,i._)([(0,d.Cb)({readOnly:!0,type:l.Z.ofType(c.Z)})],r.prototype,"serviceSublayers",void 0),(0,i._)([(0,d.Cb)({value:null,type:f,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],r.prototype,"sublayersSourceJSON",void 0),r=(0,i._)([(0,y.j)("esri.layers.mixins.SublayersOwner")],r),r}},77990:(e,r,t)=>{t.d(r,{Z:()=>K});var i,l=t(27366),a=(t(59486),t(44055)),s=(t(94931),t(78451),t(98689),t(57823),t(32066),t(49018),t(34999),t(28189),t(9014),t(40464)),o=t(76200),n=t(51508),d=t(80987),u=t(10064),y=t(93169),p=t(79056),c=t(84652),h=t(54472),b=t(32718),f=t(97642),v=t(76672),m=t(35995),g=t(49861),S=t(89125),I=t(38511),w=t(69912),_=t(31201),E=t(25243),L=t(25265),C=t(23879),x=t(89623),O=t(87165),T=t(83040),D=t(52410),F=t(77748),P=t(85116),A=t(71065),M=t(49630),V=t(64020),j=t(23505),Z=t(99837),N=t(86638),R=t(81085),k=t(53866),q=t(27823);function U(e){return null!=e&&"esriSMS"===e.type}function B(e,r,t){var i;const l=this.originIdOf(r)>=(0,L.M9)(t.origin);return{ignoreOrigin:!0,allowNull:l,enabled:!!t&&"map-image"===(null===(i=t.layer)||void 0===i?void 0:i.type)&&(t.writeSublayerStructure||l)}}function J(e,r,t){var i;return{enabled:!!t&&"tile"===(null===(i=t.layer)||void 0===i?void 0:i.type)&&(t.origin&&this.originIdOf(r)>=(0,L.M9)(t.origin)||this._isOverridden(r))}}function Q(e,r,t){return{ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function G(e,r,t){return{ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||this.originIdOf(r)>=(0,L.M9)(t.origin))}}let W=0;const H=new Set;H.add("layer"),H.add("parent"),H.add("loaded"),H.add("loadStatus"),H.add("loadError"),H.add("loadWarnings");let z=i=class extends((0,f.R)((0,p.IG)(h.Z))){constructor(e){super(e),this.capabilities=void 0,this.maxScaleRange={minScale:0,maxScale:0},this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.type="sublayer",this.types=null,this._lastParsedUrl=null}async load(e){return this.addResolvingPromise((async()=>{const{layer:r,url:t}=this;if(!r&&!t)throw new u.Z("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});const i=r?await r.fetchSublayerInfo(this,e):(await(0,o.Z)(t,{responseType:"json",query:{f:"json"},...e})).data;i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service"}))})()),this}readCapabilities(e,r){r=r.layerDefinition||r;const{operations:{supportsQuery:t,supportsQueryAttachments:i},query:{supportsFormatPBF:l},data:{supportsAttachment:a}}=(0,M.h)(r,this.url);return{exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:t,supportsQueryAttachments:i},data:{supportsAttachment:a},query:{supportsFormatPBF:l}}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get effectiveScaleRange(){const{minScale:e,maxScale:r}=this;return{minScale:e,maxScale:r}}readMaxScaleRange(e,r){var t,i;return{minScale:null!==(t=(r=r.layerDefinition||r).minScale)&&void 0!==t?t:0,maxScale:null!==(i=r.maxScale)&&void 0!==i?i:0}}get fieldsIndex(){return new D.Z(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields)for(const t of r.fields)if("esriFieldTypeGlobalID"===t.type)return t.name}get id(){const e=this._get("id");return null!==e&&void 0!==e?e:W++}set id(e){var r;this._get("id")!==e&&(!1!==(null===(r=this.layer)||void 0===r||null===(r=r.capabilities)||void 0===r||null===(r=r.exportMap)||void 0===r?void 0:r.supportsDynamicLayers)?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,r,t,i){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map((e=>e.write({},i)))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e))}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,r){var t;return r.minScale||(null===(t=r.layerDefinition)||void 0===t?void 0:t.minScale)||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,r){var t;return r.maxScale||(null===(t=r.layerDefinition)||void 0===t?void 0:t.maxScale)||0}readObjectIdFieldFromService(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;if(r.fields)for(const t of r.fields)if("esriFieldTypeOID"===t.type)return t.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,r){var t,i;const l=r.layerDefinition;return 1-.01*(null!==(t=null!=(null===l||void 0===l?void 0:l.transparency)?l.transparency:null===l||void 0===l||null===(i=l.drawingInfo)||void 0===i?void 0:i.transparency)&&void 0!==t?t:0)}writeOpacity(e,r,t,i){r.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,r){this.parent&&this.parent!==this.layer?r.parentLayerId=(0,E.vU)(this.parent.id):r.parentLayerId=-1}get queryTask(){var e,r;if(!this.layer)return null;const{spatialReference:t}=this.layer,i="gdbVersion"in this.layer?this.layer.gdbVersion:void 0,{capabilities:l,fieldsIndex:a}=this,s=(0,y.Z)("featurelayer-pbf")&&(null===l||void 0===l?void 0:l.query.supportsFormatPBF),o=null!==(e=null===l||void 0===l||null===(r=l.operations)||void 0===r?void 0:r.supportsQueryAttachments)&&void 0!==e&&e;return new x.Z({url:this.url,pbfSupported:s,fieldsIndex:a,gdbVersion:i,sourceSpatialReference:t,queryAttachmentsSupported:o})}set renderer(e){if(e)for(const r of e.getSymbols())if((0,n.dU)(r)){b.Z.getLogger(this).warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new j.R({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return(0,E.se)(d.Z.ofType(i),e)}writeSublayers(e,r,t){var i;(null===(i=this.sublayers)||void 0===i?void 0:i.length)&&(r[t]=this.sublayers.map((e=>e.id)).toArray().reverse())}readTitle(e,r){var t,i;return null!==(t=null===(i=r.layerDefinition)||void 0===i?void 0:i.name)&&void 0!==t?t:r.name}readTypeIdField(e,r){let t=(r=r.layerDefinition||r).typeIdField;if(t&&r.fields){t=t.toLowerCase();const e=r.fields.find((e=>e.name.toLowerCase()===t));e&&(t=e.name)}return t}get url(){var e,r;const t=null!==(e=null===(r=this.layer)||void 0===r?void 0:r.parsedUrl)&&void 0!==e?e:this._lastParsedUrl,i=this.source;if(!t)return null;if(this._lastParsedUrl=t,"map-layer"===(null===i||void 0===i?void 0:i.type))return"".concat(t.path,"/").concat(i.mapLayerId);const l={layer:JSON.stringify({source:this.source})};return"".concat(t.path,"/dynamicLayer?").concat((0,m.B7)(l))}set url(e){this._overrideIfSome("url",e)}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,r,t,i){r[t]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=(0,C.vw)(this),r=new i;return(0,C.vw)(r).store=e.clone(H),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}createPopupTemplate(e){return(0,R.eZ)(this,e)}createQuery(){return new N.Z({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var e;if(this.hasOwnProperty("sublayers"))return null;const r=(await Promise.resolve().then(t.bind(t,64326))).default,{layer:i,url:l}=this;let a;if(l&&this.originIdOf("url")>L.s3.SERVICE)a=new r({url:l});else{if(null===i||void 0===i||!i.parsedUrl)throw new u.Z("createFeatureLayer:missing-information","Cannot create a FeatureLayer without a url or a parent layer");{const e=i.parsedUrl;a=new r({url:e.path}),e&&this.source&&("map-layer"===this.source.type?a.layerId=this.source.mapLayerId:a.dynamicDataSource=this.source)}}return null!=(null===i||void 0===i?void 0:i.refreshInterval)&&(a.refreshInterval=i.refreshInterval),this.definitionExpression&&(a.definitionExpression=this.definitionExpression),this.floorInfo&&(a.floorInfo=(0,c.d9)(this.floorInfo)),this.originIdOf("labelingInfo")>L.s3.SERVICE&&(a.labelingInfo=(0,c.d9)(this.labelingInfo)),this.originIdOf("labelsVisible")>L.s3.DEFAULTS&&(a.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>L.s3.DEFAULTS&&(a.legendEnabled=this.legendEnabled),this.originIdOf("visible")>L.s3.DEFAULTS&&(a.visible=this.visible),this.originIdOf("minScale")>L.s3.DEFAULTS&&(a.minScale=this.minScale),this.originIdOf("maxScale")>L.s3.DEFAULTS&&(a.maxScale=this.maxScale),this.originIdOf("opacity")>L.s3.DEFAULTS&&(a.opacity=this.opacity),this.originIdOf("popupTemplate")>L.s3.DEFAULTS&&(a.popupTemplate=(0,c.d9)(this.popupTemplate)),this.originIdOf("renderer")>L.s3.SERVICE&&(a.renderer=(0,c.d9)(this.renderer)),"data-layer"===(null===(e=this.source)||void 0===e?void 0:e.type)&&(a.dynamicDataSource=this.source.clone()),this.originIdOf("title")>L.s3.DEFAULTS&&(a.title=this.title),"map-image"===(null===i||void 0===i?void 0:i.type)&&i.originIdOf("customParameters")>L.s3.DEFAULTS&&(a.customParameters=i.customParameters),"tile"===(null===i||void 0===i?void 0:i.type)&&i.originIdOf("customParameters")>L.s3.DEFAULTS&&(a.customParameters=i.customParameters),a}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:r,types:t}=this;if(!r||!e)return null;const i=e.attributes?e.attributes[r]:void 0;if(null==i)return null;let l=null;return null!==t&&void 0!==t&&t.some((e=>{const{id:r}=e;return null!=r&&(r.toString()===i.toString()&&(l=e),!!l)})),l}getFieldDomain(e,r){const t=null===r||void 0===r?void 0:r.feature,i=this.getFeatureType(t);if(i){const r=i.domains&&i.domains[e];if(r&&"inherited"!==r.type)return r}return this._getLayerDomain(e)}async queryAttachments(e,r){var t,i;await this.load(),e=Z.Z.from(e);const l=this.capabilities;if(null===l||void 0===l||null===(t=l.data)||void 0===t||!t.supportsAttachment)throw new u.Z("queryAttachments:not-supported","this layer doesn't support attachments");const{attachmentTypes:a,objectIds:s,globalIds:o,num:n,size:d,start:y,where:p}=e;if((null===l||void 0===l||null===(i=l.operations)||void 0===i||!i.supportsQueryAttachments)&&((null===a||void 0===a?void 0:a.length)>0||(null===o||void 0===o?void 0:o.length)>0||(null===d||void 0===d?void 0:d.length)>0||n||y||p))throw new u.Z("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",e);if(!(null!==s&&void 0!==s&&s.length||null!==o&&void 0!==o&&o.length||p))throw new u.Z("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",e);return this.queryTask.executeAttachmentQuery(e,r)}async queryFeatures(){var e,r;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.createQuery(),i=arguments.length>1?arguments[1]:void 0;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new u.Z("queryFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new u.Z("queryFeatures:not-supported","this layer has no url.");const l=await this.queryTask.execute(t,{...i,query:{...null===(e=this.layer)||void 0===e?void 0:e.customParameters,token:null===(r=this.layer)||void 0===r?void 0:r.apiKey}});if(null!==l&&void 0!==l&&l.features)for(const a of l.features)a.sourceLayer=this;return l}toExportImageJSON(e){var r;const t={id:this.id,source:(null===(r=this.source)||void 0===r?void 0:r.toJSON())||{mapLayerId:this.id,type:"mapLayer"}},i=(0,v._)(e,this.definitionExpression);null!=i&&(t.definitionExpression=i);const l=["renderer","labelingInfo","opacity","labelsVisible"].reduce(((e,r)=>(e[r]=this.originIdOf(r),e)),{}),a=Object.keys(l).some((e=>l[e]>L.s3.SERVICE));if(a){const e=t.drawingInfo={};if(l.renderer>L.s3.SERVICE&&(e.renderer=this.renderer?this.renderer.toJSON():null),l.labelsVisible>L.s3.SERVICE&&(e.showLabels=this.labelsVisible),this.labelsVisible&&l.labelingInfo>L.s3.SERVICE)if(this.labelingInfo){var s;!this.loaded&&(null===(s=this.labelingInfo)||void 0===s?void 0:s.some((e=>!e.labelPlacement)))&&b.Z.getLogger(this).warnOnce("A Sublayer (title: ".concat(this.title,", id: ").concat(this.id,") has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type."),{sublayer:this});let r=this.labelingInfo;null!=this.geometryType&&(r=(0,P.a)(this.labelingInfo,q.M.toJSON(this.geometryType))),e.showLabels=!0,e.labelingInfo=r.filter((e=>e.labelPlacement)).map((e=>e.toJSON({origin:"service",layer:this.layer})))}else e.showLabels=!1;l.opacity>L.s3.SERVICE&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer)}return t}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,(e=>{var r;e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(null!==(r=e.outline)&&void 0!==r&&r.color?e.color=e.outline.color:e.color=[0,0,0,0])}))}_forEachSimpleMarkerSymbols(e,r){if(e){var t;const i=null!==(t="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:null)&&void 0!==t?t:[];for(const e of i)U(e.symbol)&&r(e.symbol);"symbol"in e&&U(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&U(e.defaultSymbol)&&r(e.defaultSymbol)}}_setAndNotifyLayer(e,r){const t=this.layer,i=this._get(e);let l,a;switch(e){case"definitionExpression":case"floorInfo":l="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":l="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":l="supportsDynamicLayers",a="supportsModification"}const s=(0,C.vw)(this).getDefaultOrigin();if("service"!==s){var o,n;if(l&&!1===(null===(o=this.layer)||void 0===o||null===(o=o.capabilities)||void 0===o||null===(o=o.exportMap)||void 0===o?void 0:o[l]))return void this._logLockedError(e,"capability not available 'layer.capabilities.exportMap.".concat(l,"'"));if(a&&!1===(null===(n=this.capabilities)||void 0===n?void 0:n.exportMap[a]))return void this._logLockedError(e,"capability not available 'capabilities.exportMap.".concat(a,"'"))}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,r),"service"!==s&&i!==r&&t&&t.emit&&t.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this.removeAllHandles()),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this.addHandles([e.on("after-add",(e=>{let{item:r}=e;r.parent=this,r.layer=this.layer})),e.on("after-remove",(e=>{let{item:r}=e;r.parent=null,r.layer=null})),e.on("before-changes",(e=>{var r;const t=null===(r=this.layer)||void 0===r||null===(r=r.capabilities)||void 0===r||null===(r=r.exportMap)||void 0===r?void 0:r.supportsSublayersChanges;null==t||t||(b.Z.getLogger(this).error(new u.Z("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault())}))]))}_logLockedError(e,r){const{layer:t,declaredClass:i}=this;b.Z.getLogger(i).error(new u.Z("sublayer:locked","Property '".concat(String(e),"' can't be changed on Sublayer from the layer '").concat(null===t||void 0===t?void 0:t.id,"'"),{reason:r,sublayer:this,layer:t}))}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}};z.test={isMapImageLayerOverridePolicy:e=>e===Q||e===B,isTileImageLayerOverridePolicy:e=>e===J},(0,l._)([(0,g.Cb)({readOnly:!0})],z.prototype,"capabilities",void 0),(0,l._)([(0,I.r)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],z.prototype,"readCapabilities",null),(0,l._)([(0,g.Cb)()],z.prototype,"defaultPopupTemplate",null),(0,l._)([(0,g.Cb)({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:B}}})],z.prototype,"definitionExpression",null),(0,l._)([(0,g.Cb)({readOnly:!0})],z.prototype,"effectiveScaleRange",null),(0,l._)([(0,I.r)("service","maxScaleRange",["minScale","maxScale"])],z.prototype,"readMaxScaleRange",null),(0,l._)([(0,g.Cb)({type:[T.Z],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],z.prototype,"fields",void 0),(0,l._)([(0,g.Cb)({readOnly:!0})],z.prototype,"fieldsIndex",null),(0,l._)([(0,g.Cb)({type:A.Z,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:B},origins:{"web-scene":{read:!1,write:!1}}}})],z.prototype,"floorInfo",null),(0,l._)([(0,g.Cb)({type:k.Z,json:{read:{source:"layerDefinition.extent"}}})],z.prototype,"fullExtent",void 0),(0,l._)([(0,g.Cb)({type:q.M.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:q.M.read}}}}})],z.prototype,"geometryType",void 0),(0,l._)([(0,g.Cb)({type:String})],z.prototype,"globalIdField",void 0),(0,l._)([(0,I.r)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],z.prototype,"readGlobalIdFieldFromService",null),(0,l._)([(0,g.Cb)({type:E.z8,json:{write:{ignoreOrigin:!0}}})],z.prototype,"id",null),(0,l._)([(0,g.Cb)({value:null,type:[F.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:Q}}})],z.prototype,"labelingInfo",null),(0,l._)([(0,_.c)("labelingInfo")],z.prototype,"writeLabelingInfo",null),(0,l._)([(0,g.Cb)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:Q}}})],z.prototype,"labelsVisible",null),(0,l._)([(0,g.Cb)({value:null})],z.prototype,"layer",null),(0,l._)([(0,g.Cb)({type:String,json:{write:{overridePolicy:J}}})],z.prototype,"layerItemId",void 0),(0,l._)([(0,g.Cb)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:G}}})],z.prototype,"legendEnabled",void 0),(0,l._)([(0,g.Cb)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],z.prototype,"listMode",null),(0,l._)([(0,g.Cb)({type:Number,value:0,json:{write:{overridePolicy:Q}}})],z.prototype,"minScale",null),(0,l._)([(0,I.r)("minScale",["minScale","layerDefinition.minScale"])],z.prototype,"readMinScale",null),(0,l._)([(0,g.Cb)({type:Number,value:0,json:{write:{overridePolicy:Q}}})],z.prototype,"maxScale",null),(0,l._)([(0,I.r)("maxScale",["maxScale","layerDefinition.maxScale"])],z.prototype,"readMaxScale",null),(0,l._)([(0,g.Cb)({type:String})],z.prototype,"objectIdField",void 0),(0,l._)([(0,I.r)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],z.prototype,"readObjectIdFieldFromService",null),(0,l._)([(0,g.Cb)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:Q}}})],z.prototype,"opacity",null),(0,l._)([(0,I.r)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],z.prototype,"readOpacity",null),(0,l._)([(0,_.c)("opacity")],z.prototype,"writeOpacity",null),(0,l._)([(0,g.Cb)({json:{type:E.z8,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:Q}}})],z.prototype,"parent",void 0),(0,l._)([(0,_.c)("parent")],z.prototype,"writeParent",null),(0,l._)([(0,g.Cb)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:G,writer(e,r,t){r[t]=!e}}}})],z.prototype,"popupEnabled",void 0),(0,l._)([(0,g.Cb)({type:a.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:G}}})],z.prototype,"popupTemplate",void 0),(0,l._)([(0,g.Cb)({readOnly:!0})],z.prototype,"queryTask",null),(0,l._)([(0,g.Cb)({types:s.A,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:Q},origins:{"web-scene":{types:s.o,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:Q}}}}})],z.prototype,"renderer",null),(0,l._)([(0,g.Cb)({types:{key:"type",base:null,typeMap:{"data-layer":V.n,"map-layer":j.R}},cast(e){if(e){if("mapLayerId"in e)return(0,E.TJ)(j.R,e);if("dataSource"in e)return(0,E.TJ)(V.n,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:Q}}})],z.prototype,"source",null),(0,l._)([(0,g.Cb)()],z.prototype,"sourceJSON",void 0),(0,l._)([(0,g.Cb)({value:null,json:{type:[E.z8],write:{target:"subLayerIds",allowNull:!0,overridePolicy:Q}}})],z.prototype,"sublayers",null),(0,l._)([(0,S.p)("sublayers")],z.prototype,"castSublayers",null),(0,l._)([(0,_.c)("sublayers")],z.prototype,"writeSublayers",null),(0,l._)([(0,g.Cb)({type:String,json:{name:"name",write:{overridePolicy:G}}})],z.prototype,"title",void 0),(0,l._)([(0,I.r)("service","title",["name","layerDefinition.name"])],z.prototype,"readTitle",null),(0,l._)([(0,g.Cb)({type:String})],z.prototype,"typeIdField",void 0),(0,l._)([(0,g.Cb)({json:{read:!1},readOnly:!0,value:"sublayer"})],z.prototype,"type",void 0),(0,l._)([(0,I.r)("typeIdField",["layerDefinition.typeIdField"])],z.prototype,"readTypeIdField",null),(0,l._)([(0,g.Cb)({type:[O.Z],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],z.prototype,"types",void 0),(0,l._)([(0,g.Cb)({type:String,json:{name:"layerUrl",write:{overridePolicy:J}}})],z.prototype,"url",null),(0,l._)([(0,g.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:Q}}})],z.prototype,"visible",null),(0,l._)([(0,_.c)("visible")],z.prototype,"writeVisible",null),z=i=(0,l._)([(0,w.j)("esri.layers.support.Sublayer")],z);const K=z},83690:(e,r,t)=>{t.d(r,{V:()=>s,g:()=>a});var i=t(10064),l=t(66978);async function a(e,r,t){let a;try{a=await createImageBitmap(e)}catch(s){throw new i.Z("request:server","Unable to load ".concat(r),{url:r,error:s})}return(0,l.k_)(t),a}async function s(e,r,t,a,s){let o;try{o=await createImageBitmap(e)}catch(n){throw new i.Z("request:server","Unable to load tile ".concat(r,"/").concat(t,"/").concat(a),{error:n,level:r,row:t,col:a})}return(0,l.k_)(s),o}},58132:(e,r,t)=>{t.d(r,{FN:()=>a,QV:()=>l,ac:()=>o});var i=t(25265);function l(e,r,t){const i=r.flatten((e=>{let{sublayers:r}=e;return r})).length;return i!==e.length||(!!e.some((e=>e.originIdOf("minScale")>t||e.originIdOf("maxScale")>t||e.originIdOf("renderer")>t||e.originIdOf("labelingInfo")>t||e.originIdOf("opacity")>t||e.originIdOf("labelsVisible")>t||e.originIdOf("source")>t))||!s(e,r))}function a(e,r,t){return!!e.some((e=>{const r=e.source;return!(!r||"map-layer"===r.type&&r.mapLayerId===e.id&&(null==r.gdbVersion||r.gdbVersion===t))||e.originIdOf("renderer")>i.s3.SERVICE||e.originIdOf("labelingInfo")>i.s3.SERVICE||e.originIdOf("opacity")>i.s3.SERVICE||e.originIdOf("labelsVisible")>i.s3.SERVICE}))||!s(e,r)}function s(e,r){if(null===e||void 0===e||!e.length||null==r)return!0;const t=r.slice().reverse().flatten((e=>{let{sublayers:r}=e;return r&&r.toArray().reverse()})).map((e=>e.id)).toArray();if(e.length>t.length)return!1;let i=0;const l=t.length;for(const{id:a}of e){for(;i<l&&t[i]!==a;)i++;if(i>=l)return!1}return!0}function o(e){return!!e&&e.some((e=>{var r;return null!=e.minScale||null!=(null===(r=e.layerDefinition)||void 0===r?void 0:r.minScale)}))}}}]);
//# sourceMappingURL=680.bc3f203b.chunk.js.map