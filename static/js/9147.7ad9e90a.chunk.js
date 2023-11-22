"use strict";(self.webpackChunkmmsp_tbm=self.webpackChunkmmsp_tbm||[]).push([[9147],{59147:(e,t,r)=>{r.d(t,{Z:()=>P});var o=r(27366),s=r(52639),i=r(44055),p=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(28189),r(9014),r(40464)),a=r(76200),n=r(10064),l=r(43404),u=r(54472),d=r(32718),y=r(67426),c=r(49861),h=(r(25243),r(63780),r(93169),r(27135)),b=r(38511),v=r(69912),m=r(53866),g=r(78952),f=r(64326),C=r(58550),_=r(96978),x=r(45948),S=r(25610),I=r(52410),F=r(37270),w=r(30494),T=r(34207),L=r(86638),j=r(81085),O=r(64575),q=r(44011),R=r(24405);const A="esri.layers.buildingSublayers.BuildingComponentSublayer",Q=d.Z.getLogger(A),U=(0,S.v)();let D=class extends(u.Z.LoadableMixin((0,y.v)(C.Z))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,t;return this.layer?{path:"".concat(null===(e=this.layer.parsedUrl)||void 0===e?void 0:e.path,"/sublayers/").concat(this.id),query:null===(t=this.layer.parsedUrl)||void 0===t?void 0:t.query}:{path:""}}get fieldsIndex(){return new I.Z(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,o=t.associatedLayerID;return null!=r&&"number"==typeof o?new f.default({portalItem:r,layerId:o}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return null!=this.associatedLayer?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=null!=e?e.signal:null,r=this._fetchService(t).then((()=>{this.indexInfo=(0,w.T)(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,Q,t)}));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){return(0,j.eZ)(this,e)}async _fetchService(e){const t=(await(0,a.Z)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r,o,s;const i=null===(r=this.getFeatureType(null===t||void 0===t?void 0:t.feature))||void 0===r||null===(r=r.domains)||void 0===r?void 0:r[e];return i&&"inherited"!==i.type?i:null!==(o=null===(s=this.getField(e))||void 0===s?void 0:s.domain)&&void 0!==o?o:null}getFeatureType(e){return e&&null!=this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){var e;return null!=this.associatedLayer&&null!==(e=this.associatedLayer.types)&&void 0!==e?e:[]}get typeIdField(){return null!=this.associatedLayer?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=null!=this.associatedLayer&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:_.C,{query:t,data:{supportsZ:r,supportsM:o,isVersioned:s}}=e;return{query:t,data:{supportsZ:r,supportsM:o,isVersioned:s}}}createQuery(){const e=new L.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(null!==e&&void 0!==e&&e.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}async queryCachedAttributes(e,t){const r=(0,F.Lk)(this.fieldsIndex,await(0,R.e7)(this,(0,R.V5)(this)));return(0,q.xe)(this.parsedUrl.path,this.attributeStorageInfo,e,t,r)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||0===r.length)throw new n.Z("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const o=new s.Z;return o.attributes=r[0],o.layer=this,o.sourceLayer=this,o}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:null!=this.associatedLayer}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return null!=e&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),null==this.associatedLayer)throw new n.Z("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new n.Z("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};(0,o._)([(0,c.Cb)({readOnly:!0})],D.prototype,"parsedUrl",null),(0,o._)([(0,c.Cb)({type:T.U4,readOnly:!0})],D.prototype,"nodePages",void 0),(0,o._)([(0,c.Cb)({type:[T.QI],readOnly:!0})],D.prototype,"materialDefinitions",void 0),(0,o._)([(0,c.Cb)({type:[T.Yh],readOnly:!0})],D.prototype,"textureSetDefinitions",void 0),(0,o._)([(0,c.Cb)({type:[T.H3],readOnly:!0})],D.prototype,"geometryDefinitions",void 0),(0,o._)([(0,c.Cb)({readOnly:!0})],D.prototype,"serviceUpdateTimeStamp",void 0),(0,o._)([(0,c.Cb)({readOnly:!0})],D.prototype,"store",void 0),(0,o._)([(0,c.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],D.prototype,"rootNode",void 0),(0,o._)([(0,c.Cb)({readOnly:!0})],D.prototype,"attributeStorageInfo",void 0),(0,o._)([(0,c.Cb)(U.fields)],D.prototype,"fields",void 0),(0,o._)([(0,c.Cb)({readOnly:!0})],D.prototype,"fieldsIndex",null),(0,o._)([(0,c.Cb)({readOnly:!0,type:f.default})],D.prototype,"associatedLayer",void 0),(0,o._)([(0,b.r)("service","associatedLayer",["associatedLayerID"])],D.prototype,"readAssociatedLayer",null),(0,o._)([(0,c.Cb)(U.outFields)],D.prototype,"outFields",void 0),(0,o._)([(0,c.Cb)({type:String,readOnly:!0})],D.prototype,"objectIdField",null),(0,o._)([(0,c.Cb)({readOnly:!0,type:String,json:{read:!1}})],D.prototype,"displayField",null),(0,o._)([(0,c.Cb)({readOnly:!0,type:String})],D.prototype,"apiKey",null),(0,o._)([(0,c.Cb)({readOnly:!0,type:m.Z})],D.prototype,"fullExtent",null),(0,o._)([(0,c.Cb)({readOnly:!0,type:g.Z})],D.prototype,"spatialReference",null),(0,o._)([(0,c.Cb)({readOnly:!0})],D.prototype,"version",null),(0,o._)([(0,c.Cb)({readOnly:!0,type:O.Z})],D.prototype,"elevationInfo",null),(0,o._)([(0,c.Cb)({readOnly:!0,type:Number})],D.prototype,"minScale",null),(0,o._)([(0,c.Cb)({readOnly:!0,type:Number})],D.prototype,"maxScale",null),(0,o._)([(0,c.Cb)({readOnly:!0,type:Number})],D.prototype,"effectiveScaleRange",null),(0,o._)([(0,c.Cb)({type:["hide","show"],json:{write:!0}})],D.prototype,"listMode",void 0),(0,o._)([(0,c.Cb)({types:p.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],D.prototype,"renderer",void 0),(0,o._)([(0,c.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],D.prototype,"definitionExpression",void 0),(0,o._)([(0,c.Cb)(x.C_)],D.prototype,"popupEnabled",void 0),(0,o._)([(0,c.Cb)({type:i.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],D.prototype,"popupTemplate",void 0),(0,o._)([(0,c.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],D.prototype,"normalReferenceFrame",void 0),(0,o._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],D.prototype,"defaultPopupTemplate",null),(0,o._)([(0,c.Cb)()],D.prototype,"types",null),(0,o._)([(0,c.Cb)()],D.prototype,"typeIdField",null),(0,o._)([(0,c.Cb)({json:{write:!1}}),(0,h.J)(new l.X({"3DObject":"3d-object",Point:"point"}))],D.prototype,"layerType",void 0),(0,o._)([(0,c.Cb)()],D.prototype,"geometryType",null),(0,o._)([(0,c.Cb)()],D.prototype,"profile",null),(0,o._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],D.prototype,"capabilities",null),D=(0,o._)([(0,v.j)(A)],D);const P=D},58550:(e,t,r)=>{r.d(t,{Z:()=>y});var o=r(27366),s=r(79056),i=r(97642),p=r(49861),a=r(25243),n=(r(63780),r(93169),r(38511)),l=r(69912),u=r(45948);let d=class extends((0,s.IG)(i.w)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:-1}};(0,o._)([(0,p.Cb)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],d.prototype,"title",void 0),(0,o._)([(0,n.r)("service","title",["alias","name"])],d.prototype,"readTitle",null),(0,o._)([(0,p.Cb)()],d.prototype,"layer",void 0),(0,o._)([(0,p.Cb)({type:a.z8,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],d.prototype,"id",void 0),(0,o._)([(0,n.r)("service","id")],d.prototype,"readIdOnlyOnce",null),(0,o._)([(0,p.Cb)((0,u.Lx)(String))],d.prototype,"modelName",void 0),(0,o._)([(0,p.Cb)((0,u.Lx)(Boolean))],d.prototype,"isEmpty",void 0),(0,o._)([(0,p.Cb)({type:Boolean,nonNullable:!0})],d.prototype,"legendEnabled",void 0),(0,o._)([(0,p.Cb)({type:Boolean,json:{name:"visibility",write:!0}})],d.prototype,"visible",void 0),(0,o._)([(0,p.Cb)({type:Number,json:{write:!0}})],d.prototype,"opacity",void 0),d=(0,o._)([(0,l.j)("esri.layers.buildingSublayers.BuildingSublayer")],d);const y=d},34207:(e,t,r)=>{r.d(t,{H3:()=>m,QI:()=>d,U4:()=>n,Yh:()=>c});var o=r(27366),s=r(46784),i=r(49861),p=(r(25243),r(63780),r(93169),r(27135)),a=r(69912);let n=class extends s.wq{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,o._)([(0,i.Cb)({type:Number})],n.prototype,"nodesPerPage",void 0),(0,o._)([(0,i.Cb)({type:Number})],n.prototype,"rootIndex",void 0),(0,o._)([(0,i.Cb)({type:String})],n.prototype,"lodSelectionMetricType",void 0),n=(0,o._)([(0,a.j)("esri.layer.support.I3SNodePageDefinition")],n);let l=class extends s.wq{constructor(){super(...arguments),this.factor=1}};(0,o._)([(0,i.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],l.prototype,"id",void 0),(0,o._)([(0,i.Cb)({type:Number})],l.prototype,"factor",void 0),l=(0,o._)([(0,a.j)("esri.layer.support.I3SMaterialTexture")],l);let u=class extends s.wq{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,o._)([(0,i.Cb)({type:[Number]})],u.prototype,"baseColorFactor",void 0),(0,o._)([(0,i.Cb)({type:l})],u.prototype,"baseColorTexture",void 0),(0,o._)([(0,i.Cb)({type:l})],u.prototype,"metallicRoughnessTexture",void 0),(0,o._)([(0,i.Cb)({type:Number})],u.prototype,"metallicFactor",void 0),(0,o._)([(0,i.Cb)({type:Number})],u.prototype,"roughnessFactor",void 0),u=(0,o._)([(0,a.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],u);let d=class extends s.wq{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,o._)([(0,p.J)({opaque:"opaque",mask:"mask",blend:"blend"})],d.prototype,"alphaMode",void 0),(0,o._)([(0,i.Cb)({type:Number})],d.prototype,"alphaCutoff",void 0),(0,o._)([(0,i.Cb)({type:Boolean})],d.prototype,"doubleSided",void 0),(0,o._)([(0,p.J)({none:"none",back:"back",front:"front"})],d.prototype,"cullFace",void 0),(0,o._)([(0,i.Cb)({type:l})],d.prototype,"normalTexture",void 0),(0,o._)([(0,i.Cb)({type:l})],d.prototype,"occlusionTexture",void 0),(0,o._)([(0,i.Cb)({type:l})],d.prototype,"emissiveTexture",void 0),(0,o._)([(0,i.Cb)({type:[Number]})],d.prototype,"emissiveFactor",void 0),(0,o._)([(0,i.Cb)({type:u})],d.prototype,"pbrMetallicRoughness",void 0),d=(0,o._)([(0,a.j)("esri.layer.support.I3SMaterialDefinition")],d);let y=class extends s.wq{};(0,o._)([(0,i.Cb)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:"".concat(t.index)}}})],y.prototype,"name",void 0),(0,o._)([(0,p.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],y.prototype,"format",void 0),y=(0,o._)([(0,a.j)("esri.layer.support.I3STextureFormat")],y);let c=class extends s.wq{constructor(){super(...arguments),this.atlas=!1}};(0,o._)([(0,i.Cb)({type:[y]})],c.prototype,"formats",void 0),(0,o._)([(0,i.Cb)({type:Boolean})],c.prototype,"atlas",void 0),c=(0,o._)([(0,a.j)("esri.layer.support.I3STextureSetDefinition")],c);let h=class extends s.wq{};(0,o._)([(0,p.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],h.prototype,"type",void 0),(0,o._)([(0,i.Cb)({type:Number})],h.prototype,"component",void 0),h=(0,o._)([(0,a.j)("esri.layer.support.I3SGeometryAttribute")],h);let b=class extends s.wq{};(0,o._)([(0,p.J)({draco:"draco"})],b.prototype,"encoding",void 0),(0,o._)([(0,i.Cb)({type:[String]})],b.prototype,"attributes",void 0),b=(0,o._)([(0,a.j)("esri.layer.support.I3SGeometryCompressedAttributes")],b);let v=class extends s.wq{constructor(){super(...arguments),this.offset=0}};(0,o._)([(0,i.Cb)({type:Number})],v.prototype,"offset",void 0),(0,o._)([(0,i.Cb)({type:h})],v.prototype,"position",void 0),(0,o._)([(0,i.Cb)({type:h})],v.prototype,"normal",void 0),(0,o._)([(0,i.Cb)({type:h})],v.prototype,"uv0",void 0),(0,o._)([(0,i.Cb)({type:h})],v.prototype,"color",void 0),(0,o._)([(0,i.Cb)({type:h})],v.prototype,"uvRegion",void 0),(0,o._)([(0,i.Cb)({type:h})],v.prototype,"featureId",void 0),(0,o._)([(0,i.Cb)({type:h})],v.prototype,"faceRange",void 0),(0,o._)([(0,i.Cb)({type:b})],v.prototype,"compressedAttributes",void 0),v=(0,o._)([(0,a.j)("esri.layer.support.I3SGeometryBuffer")],v);let m=class extends s.wq{};(0,o._)([(0,p.J)({triangle:"triangle"})],m.prototype,"topology",void 0),(0,o._)([(0,i.Cb)()],m.prototype,"geometryBuffers",void 0),m=(0,o._)([(0,a.j)("esri.layer.support.I3SGeometryDefinition")],m)},96978:(e,t,r)=>{r.d(t,{C:()=>o});const o={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}}}]);
//# sourceMappingURL=9147.7ad9e90a.chunk.js.map