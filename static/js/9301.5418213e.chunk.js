"use strict";(self.webpackChunkmmsp_tbm=self.webpackChunkmmsp_tbm||[]).push([[9301],{59301:(t,e,o)=>{o.r(e),o.d(e,{executeAttachmentQuery:()=>p,fetchAttachments:()=>u,processAttachmentQueryResult:()=>c});var n=o(1413),r=o(19545),i=o(76200),a=o(35995),s=o(22585),l=o(11812);function d(t){const e=t.toJSON();return e.attachmentTypes&&(e.attachmentTypes=e.attachmentTypes.join(",")),e.keywords&&(e.keywords=e.keywords.join(",")),e.globalIds&&(e.globalIds=e.globalIds.join(",")),e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.size&&(e.size=e.size.join(",")),e}function c(t,e){const o={};for(const n of e){const{parentObjectId:e,parentGlobalId:i,attachmentInfos:s}=n;for(const n of s){const{id:s}=n,d=(0,a.qg)((0,r.Dp)("".concat(t.path,"/").concat(e,"/attachments/").concat(s))),c=l.Z.fromJSON(n);c.set({url:d,parentObjectId:e,parentGlobalId:i}),o[e]?o[e].push(c):o[e]=[c]}}return o}function p(t,e,o){let r={query:(0,s.A)((0,n.Z)((0,n.Z)({},t.query),{},{f:"json"},d(e)))};return o&&(r=(0,n.Z)((0,n.Z)((0,n.Z)({},o),r),{},{query:(0,n.Z)((0,n.Z)({},o.query),r.query)})),(0,i.Z)(t.path+"/queryAttachments",r).then((t=>t.data.attachmentGroups))}async function u(t,e,o){const{objectIds:n}=e,r=[];for(const a of n)r.push((0,i.Z)(t.path+"/"+a+"/attachments",o));return Promise.all(r).then((t=>n.map(((e,o)=>({parentObjectId:e,attachmentInfos:t[o].data.attachmentInfos})))))}},11812:(t,e,o)=>{o.d(e,{Z:()=>u});var n,r=o(27366),i=o(46784),a=o(49861),s=o(25243),l=(o(84936),o(93169),o(69912));function d(t){const{exifInfo:e,exifName:o,tagName:n}=t;if(!e||!o||!n)return null;const r=e.find((t=>t.name===o));return r?function(t){const{tagName:e,tags:o}=t;if(!o||!e)return null;const n=o.find((t=>t.name===e));return(null===n||void 0===n?void 0:n.value)||null}({tagName:n,tags:r.tags}):null}const c={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let p=n=class extends i.wq{constructor(t){super(t),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:t}=this,e=d({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:t});return c[e]||null}clone(){return new n({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};(0,r._)([(0,a.Cb)({type:String})],p.prototype,"contentType",void 0),(0,r._)([(0,a.Cb)()],p.prototype,"exifInfo",void 0),(0,r._)([(0,a.Cb)({readOnly:!0})],p.prototype,"orientationInfo",null),(0,r._)([(0,a.Cb)({type:s.z8})],p.prototype,"id",void 0),(0,r._)([(0,a.Cb)({type:String})],p.prototype,"globalId",void 0),(0,r._)([(0,a.Cb)({type:String})],p.prototype,"keywords",void 0),(0,r._)([(0,a.Cb)({type:String})],p.prototype,"name",void 0),(0,r._)([(0,a.Cb)({json:{read:!1}})],p.prototype,"parentGlobalId",void 0),(0,r._)([(0,a.Cb)({json:{read:!1}})],p.prototype,"parentObjectId",void 0),(0,r._)([(0,a.Cb)({type:s.z8})],p.prototype,"size",void 0),(0,r._)([(0,a.Cb)({json:{read:!1}})],p.prototype,"url",void 0),p=n=(0,r._)([(0,l.j)("esri.rest.query.support.AttachmentInfo")],p);const u=p}}]);
//# sourceMappingURL=9301.5418213e.chunk.js.map