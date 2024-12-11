"use strict";(self.webpackChunkmmsp_tbm=self.webpackChunkmmsp_tbm||[]).push([[8035],{77372:(e,t,i)=>{i.d(t,{Z:()=>b});var r=i(27366),n=(i(59486),i(11582)),o=i(17768),s=i(46784),a=i(92026),c=i(49861),l=i(89125),d=(i(84936),i(93169),i(69912)),u=i(25243),g=i(96866),h=i(848);let p=class extends((0,n.J)(s.wq)){constructor(e){super(e),this.type="plane",this.position=null,this.heading=0,this.tilt=0,this.width=10,this.height=10}equals(e){return this.heading===e.heading&&this.tilt===e.tilt&&(0,a._W)(this.position,e.position)&&this.width===e.width&&this.height===e.height}};(0,r._)([(0,c.Cb)({readOnly:!0,json:{read:!1,write:!0}})],p.prototype,"type",void 0),(0,r._)([(0,c.Cb)({type:h.Z}),(0,g.B)()],p.prototype,"position",void 0),(0,r._)([(0,c.Cb)({type:Number,nonNullable:!0,range:{min:0,max:360}}),(0,g.B)(),(0,l.p)((e=>o.BV.normalize((0,u.q9)(e),0,!0)))],p.prototype,"heading",void 0),(0,r._)([(0,c.Cb)({type:Number,nonNullable:!0,range:{min:0,max:360}}),(0,g.B)(),(0,l.p)((e=>o.BV.normalize((0,u.q9)(e),0,!0)))],p.prototype,"tilt",void 0),(0,r._)([(0,c.Cb)({type:Number,nonNullable:!0}),(0,g.B)()],p.prototype,"width",void 0),(0,r._)([(0,c.Cb)({type:Number,nonNullable:!0}),(0,g.B)()],p.prototype,"height",void 0),p=(0,r._)([(0,d.j)("esri.analysis.SlicePlane")],p);const b=p},11316:(e,t,i)=>{i.d(t,{S:()=>h,b:()=>g});var r,n,o=i(30168),s=i(41012),a=i(95276),c=i(58406),l=i(98634),d=i(64201),u=i(4760);function g(e){const t=new d.kG,{vertex:i,fragment:g,attributes:h,varyings:p}=t;return(0,s.Sv)(i,e),h.add(u.T.POSITION,"vec3"),h.add(u.T.UV0,"vec2"),p.add("vUV","vec2"),i.main.add((0,l.H)(r||(r=(0,o.Z)(["vUV = uv0;\ngl_Position = proj * view * vec4(position, 1.0);"])))),g.uniforms.add(new a.N("backgroundColor",(e=>e.backgroundColor)),new a.N("gridColor",(e=>e.gridColor)),new c.p("gridWidth",(e=>e.gridWidth))).main.add((0,l.H)(n||(n=(0,o.Z)(["const float LINE_WIDTH = 1.0;\nvec2 uvScaled = vUV * gridWidth;\nvec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));\nvec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);\ngrid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);\ngrid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);\nfloat gridFade = max(grid.x, grid.y);\nfloat gridAlpha = gridColor.a * gridFade;\nfragColor =\nvec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +\nvec4(gridColor.rgb, 1.0) * gridAlpha;"])))),t}const h=Object.freeze(Object.defineProperty({__proto__:null,build:g},Symbol.toStringTag,{value:"Module"}))},12350:(e,t,i)=>{i.d(t,{o:()=>m});var r=i(1413),n=i(51995),o=i(94172),s=i(12400),a=i(3319),c=i(38978),l=i(35284),d=i(83639),u=i(40508),g=i(70619),h=i(56529),p=i(58901),b=i(99034);class m extends l.Z{constructor(e,t){const i=(0,c.J0)(t),l=i?a.QG:a.cf,m=l*a.Mr,M=a.cf,f={renderOccluded:h.yD.OccludeAndTransparent,isDecoration:!0},I=new p.U((0,r.Z)((0,r.Z)({},f),{},{width:l})),w=new p.U((0,r.Z)((0,r.Z)({},f),{},{width:m})),C=new p.U((0,r.Z)((0,r.Z)({},f),{},{width:M}));super((0,r.Z)((0,r.Z)({view:e},d.X9),function(e){let{isCorner:t,unfocusedMaterial:i,focusedMaterial:r,outlineMaterial:n}=e;const o=t?[(0,s.al)(1,0,0),(0,s.al)(0,0,0),(0,s.al)(0,1,0)]:[(0,s.al)(1,0,0),(0,s.al)(-1,0,0)];return{renderObjects:[new u.r((0,g.rh)(i,o),b.Q9.Unfocused|c.Sc),new u.r((0,g.rh)(r,o),b.Q9.Focused|c.Sc),new u.r((0,g.rh)(n,o),c.vc)],collisionType:{type:"line",paths:[o]},radius:t?a.Qf:a.yy,state:c.Sc}}({isCorner:i,unfocusedMaterial:I,focusedMaterial:w,outlineMaterial:C}))),this._themeHandle=(0,o.YP)((()=>e.effectiveTheme.accentColor),(e=>{const t=n.Z.toUnitRGBA(e);I.setParameters({color:t}),w.setParameters({color:t}),C.setParameters({color:t})}),o.nn)}destroy(){this._themeHandle.remove(),super.destroy()}}},37947:(e,t,i)=>{i.d(t,{Z:()=>I});var r=i(1413),n=i(51995),o=i(86950),s=i(94172),a=i(38978),c=i(35284),l=i(83639),d=i(40508),u=i(91526),g=i(2952),h=i(70619),p=i(56529),b=i(4760),m=i(8080),M=i(58901),f=i(99034);class I extends c.Z{constructor(e,t){const i=new m.j({writeDepth:!1,renderOccluded:p.yD.Opaque,isDecoration:!0}),c=l.rotateManipulatorDefaults.calloutWidth,I=new M.U({width:c,renderOccluded:p.yD.OccludeAndTransparent,isDecoration:!0});super((0,r.Z)({view:e},function(e){let{imageMaterial:t,calloutMaterial:i}=e;const{focusMultiplier:r,calloutLength:n,discRadius:o}=l.rotateManipulatorDefaults,s=o*r,c=(e,t)=>{const i=[0,1,2,2,3,0];return new g.Z(t,[[b.T.POSITION,new u.a([n-e,-e,0,n+e,-e,0,n+e,e,0,n-e,e,0],i,3,!0)],[b.T.UV0,new u.a([0,0,1,0,1,1,0,1],i,2,!0)]])},p=(0,h.rh)(i,[[0,0,0],[n-o,0,0]]),m=(0,h.rh)(i,[[0,0,0],[n-s,0,0]]),M=a.do;return{autoScaleRenderObjects:!1,collisionPriority:1,collisionType:{type:"disc",direction:[0,0,1],offset:[n,0,0]},focusMultiplier:r,radius:o,renderObjects:[new d.r(c(o,t),f.Q9.Unfocused|M),new d.r(p,f.Q9.Unfocused|M),new d.r(c(s,t),f.Q9.Focused|M),new d.r(m,f.Q9.Focused|M)],state:M}}({imageMaterial:i,calloutMaterial:I}))),this._currentTexture=null,this._themeHandle=(0,s.YP)((()=>e.effectiveTheme.accentColor),(e=>{const r=(0,o.G)(e,.5),s=(0,o.mj)(e),a=this._currentTexture,c=t(r,s);i.setParameters({textureId:c.texture.id}),I.setParameters({color:n.Z.toUnitRGBA(e)}),this._currentTexture=c,null===a||void 0===a||a.release()}),s.nn)}destroy(){var e;this._themeHandle.remove(),null!==(e=this._currentTexture)&&void 0!==e&&e.release(),super.destroy()}}},61074:(e,t,i)=>{i.d(t,{K:()=>N,l:()=>r});var r,n,o=i(1413),s=i(51995),a=i(86950),c=i(94172),l=i(29134),d=i(7025),u=i(68700),g=i(32035),h=i(12400),p=i(51378),b=i(3319),m=i(38978),M=i(35284),f=i(40508),I=i(68401),w=i(70619),C=i(56529),T=i(66832),v=i(58901),y=i(99034);(n=r||(r={}))[n.CENTER_ON_CALLOUT=0]="CENTER_ON_CALLOUT",n[n.CENTER_ON_ARROW=1]="CENTER_ON_ARROW";class N extends M.Z{constructor(e,t){const i=new v.U({width:1,renderOccluded:C.yD.OccludeAndTransparent,isDecoration:!0}),n=new T.E({cullFace:I.Vr.Back,renderOccluded:C.yD.Opaque,isDecoration:!0}),l=new T.E({cullFace:I.Vr.Back,renderOccluded:C.yD.Opaque,isDecoration:!0}),d=new T.E({cullFace:I.Vr.Back,renderOccluded:C.yD.Opaque,isDecoration:!0}),u=new T.E({writeDepth:!1,cullFace:I.Vr.Front,renderOccluded:C.yD.Transparent,isDecoration:!0});super((0,o.Z)({view:e},function(e){let{offsetMode:t,tubeMaterial:i,tipMaterial:n,capMaterial:o,outlineMaterial:s,calloutMaterial:a}=e;const c=t===r.CENTER_ON_CALLOUT?b.Eu:0,l=[(0,h.al)(c,0,-b.C7/2),(0,h.al)(c,0,b.C7/2)],d=function(e,t){const i=(0,g.d)((0,h.Ue)(),e[e.length-1],e[e.length-2]);(0,g.n)(i,i),(0,g.h)(i,i,b.GW),(0,g.g)(i,i,e[e.length-1]);{const t=(0,g.d)((0,h.Ue)(),e[0],e[1]);return(0,g.n)(t,t),(0,g.h)(t,t,b.GW),(0,g.g)(t,t,e[0]),[t,...e,i]}}(l),u=A({vertices:l,padding:0,materials:{tube:i,tip:n,cap:o}}),p=A({vertices:l,padding:b.K_,materials:{tube:s,tip:s,cap:s}}),M=(0,w.rh)(a,[[c,0,0],[c-b.Eu,0,0]]),I=(0,w.rh)(a,[[c,0,0],[c-b.Eu,0,0]]);return{renderObjects:[...u.normal.map((e=>new f.r(e,y.Q9.Unfocused|m.do))),...p.normal.map((e=>new f.r(e,y.Q9.Unfocused|m.do))),new f.r(M,y.Q9.Unfocused|m.do|m.Df),...u.focused.map((e=>new f.r(e,y.Q9.Focused|m.do))),...p.focused.map((e=>new f.r(e,y.Q9.Focused|m.do))),new f.r(I,y.Q9.Focused|m.do|m.Df)],autoScaleRenderObjects:!1,collisionType:{type:"line",paths:[d]},collisionPriority:1,radius:b.tv,state:m.do}}({offsetMode:t,tubeMaterial:n,tipMaterial:l,capMaterial:d,outlineMaterial:u,calloutMaterial:i}))),this._themeHandle=(0,c.YP)((()=>e.effectiveTheme.accentColor),(e=>{const t=(0,a.mj)(e),r=s.Z.toUnitRGBA(e),o=s.Z.toUnitRGBA(t),c=s.Z.toUnitRGBA(s.Z.blendColors(t,e,.4)),g=s.Z.toUnitRGBA(s.Z.blendColors(t,e,.14));i.setParameters({color:r}),n.setParameters({color:g}),l.setParameters({color:o}),d.setParameters({color:c}),u.setParameters({color:r})}),c.nn)}destroy(){this._themeHandle.remove(),super.destroy()}}function A(e){let{vertices:t,padding:i,materials:r}=e;const n=e=>{const n=t.slice(),o=(0,g.d)(p.WM.get(),n[0],n[1]);(0,g.n)(o,o);const s=(0,g.d)(p.WM.get(),n[n.length-1],n[n.length-2]);if((0,g.n)(s,s),i>0){const e=(0,g.h)((0,h.Ue)(),s,-i);n[n.length-1]=(0,g.g)(e,e,n[n.length-1]);const t=(0,g.h)((0,h.Ue)(),o,-i);n[0]=(0,g.g)(t,t,n[0])}const a=e?b.XC:1,c=b.GW*a,m=b.tv*a,M=(0,l.yR)(p.MP.get());if(i>0){const e=c/4,t=(0,g.i)(p.WM.get(),0,e,0),r=1+i/e;(0,l.Iu)(M,M,t),(0,l.bA)(M,M,(0,g.i)(p.WM.get(),r,r,r)),(0,l.Iu)(M,M,(0,g.h)(t,t,-1/r))}const f=(0,l.yR)((0,d.Ue)()),I=(0,h.al)(0,1,0),C=(0,l.en)((0,d.Ue)(),(0,u.b0)(p.vD.get(),I,s));C[12]=n[n.length-1][0],C[13]=n[n.length-1][1],C[14]=n[n.length-1][2],(0,l.Jp)(C,C,M);const T=r.tube,v=function(e,t,i){const r=[],n=12;for(let o=0;o<n;o++){const t=o/n*2*Math.PI;r.push([Math.cos(t)*e,Math.sin(t)*e])}return(0,w.x2)(i,r,t,[],[],!1)}(b.sz*(e?b.L0:1)+i,n,T);v.transformation=f;const y=[v],N=r.tip,A=(0,w.QL)(N,c,m,24,!1,!1,!0);A.transformation=C,y.push(A);const W=r.cap,_=(0,w.QL)(W,c,m,24,!1,!0,!1);_.transformation=C,y.push(_);const O=(0,l.en)((0,d.Ue)(),(0,u.b0)(p.vD.get(),I,o));return O[12]=n[0][0],O[13]=n[0][1],O[14]=n[0][2],(0,l.Jp)(O,O,M),y.push(A.instantiate({transformation:O})),y.push(_.instantiate({transformation:O})),y};return{normal:n(!1),focused:n(!0)}}},32909:(e,t,i)=>{i.d(t,{CB:()=>o,bL:()=>s,ku:()=>n});var r=i(86950);const n=(0,i(86361).al)(0,0,0,.04);function o(e){let{accentColor:t}=e;return(0,r.Ch)(t,.5)}function s(e){let{accentColor:t}=e;return(0,r.Ch)(t,.7)}},3319:(e,t,i)=>{i.d(t,{AN:()=>d,C7:()=>T,Ci:()=>O,Eu:()=>C,G0:()=>h,GI:()=>s,GW:()=>w,K_:()=>v,L0:()=>c,Lf:()=>m,Mr:()=>a,P3:()=>u,QG:()=>y,Qf:()=>W,Wp:()=>g,XC:()=>l,Yn:()=>A,ZE:()=>p,ae:()=>Z,cf:()=>N,fg:()=>M,sz:()=>f,tW:()=>o,tv:()=>I,v9:()=>b,yy:()=>_});var r=i(93169),n=i(16889);const o=(0,r.Z)("mac")?"Meta":"Control",s="Shift",a=2,c=1.15,l=1.15,d=2500,u=.02,g=Math.cos((0,n.Vl)(45)),h=Math.cos((0,n.Vl)(5)),p=.95,b=.3,m=2,M=1,f=3,I=11,w=22.5,C=40,T=48,v=2.25,y=4,N=1,A=.3,W=6,_=4,O=1600,Z=.4},38978:(e,t,i)=>{i.d(t,{do:()=>Ie,Df:()=>Te,aZ:()=>we,ww:()=>Ce,zY:()=>ie,Lw:()=>ue,fT:()=>ee,R_:()=>pe,i3:()=>he,j6:()=>K,Rd:()=>re,TA:()=>te,J0:()=>ge,lR:()=>We,Hq:()=>be,m3:()=>Me,oP:()=>fe,Sc:()=>Ne,vc:()=>Ae,Q3:()=>$,EC:()=>oe,A5:()=>se,wj:()=>ae,tF:()=>ne});i(59486);var r=i(77372),n=(i(93169),i(32718)),o=i(16889),s=i(17842),a=i(29134),c=i(32035),l=i(12400),d=i(79803),u=i(14320),g=i(82218),h=i(55652),p=i(40885),b=i(40927),m=i(51378),M=i(32909),f=i(3319),I=i(33906),w=i(83639),C=i(33837),T=i(19093),v=i(86361),y=i(52168),N=i(70619),A=i(56529),W=i(37081),_=i(51992),O=i(23620),Z=i(93822),D=i(12594),P=i(64642),R=i(11983),L=i(98634),E=i(82144),j=i(78914),S=i(11316),U=i(8548),x=i(36207);class H extends L.K{constructor(){super(...arguments),this.backgroundColor=(0,v.al)(1,0,0,.5),this.gridColor=(0,v.al)(0,1,0,.5),this.gridWidth=4}}class G extends j.A{constructor(e,t,r){super(e,t,new E.J(S.S,(()=>i.e(8492).then(i.bind(i,18492)))),r)}initializePipeline(){return(0,x.sm)({blending:x.xW,depthTest:{func:U.wb.LESS},colorWrite:x.gf})}}class V extends R.c{constructor(e){super(e,Y),this.produces=new Map([[Z.r.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>e===W.H_.Color]])}get visible(){return!0}createGLMaterial(e){return new k(e)}createBufferWriter(){return new D.G(P.W1)}getConfiguration(){return _.D}}class k extends O.Z{constructor(e){super(e)}beginSlot(e){return this.acquireTechnique(G,e)}}class Y extends H{constructor(){super(...arguments),this.renderOccluded=A.yD.Occlude,this.isDecoration=!1}}class z extends y._{constructor(e){super(e),this._material=null,this._renderOccluded=A.yD.OccludeAndTransparent,this._gridWidth=1,this._gridColor=(0,v.al)(1,0,0,1),this._backgroundColor=(0,v.al)(1,0,0,1),this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get gridWidth(){return this._gridWidth}set gridWidth(e){this._gridWidth!==e&&(this._gridWidth=e,this._updateMaterial())}get gridColor(){return this._gridColor}set gridColor(e){(0,T.c)(this._gridColor,e),this._updateMaterial()}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){(0,T.c)(this._backgroundColor,e),this._updateMaterial()}createExternalResources(){this._material=new V(this._materialParameters)}destroyExternalResources(){this._material=null}forEachExternalMaterial(e){null!=this._material&&e(this._material)}createGeometries(e){if(null!=this._material){const t=(0,N.g7)(this._material);e.addGeometry(t)}}get _materialParameters(){return{backgroundColor:this._backgroundColor,gridWidth:this._gridWidth,gridColor:this._gridColor,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateMaterial(){null!=this._material&&this._material.setParameters(this._materialParameters)}}var B,Q,X=i(91643),F=i(81703),J=i(99034),q=i(848);i(53866);function K(e,t,i,r,n,o,s,a){return function(e,t,i,r,n,o){const s=(0,c.f)(e,t),a=m.WM.get(),l=m.WM.get();switch(r===Ce.HORIZONTAL_OR_VERTICAL?Math.abs(s)>f.Wp?Ce.HORIZONTAL:Ce.VERTICAL:r){case Ce.VERTICAL:{const r=Math.abs(s)<=f.G0?e:i.viewUp;(0,c.e)(a,r,t),(0,c.c)(l,t);break}case Ce.HORIZONTAL:(0,c.e)(a,i.viewUp,t),(0,c.e)(l,t,a);break;case Ce.TILTED:{const r=Math.abs(s)<=f.G0?t:i.viewUp;(0,c.e)(a,r,e),(0,c.e)(l,e,a);break}}const d=(0,c.e)(m.WM.get(),a,l);(0,c.f)(d,i.viewForward)>0&&(0,c.h)(l,l,-1),(0,c.n)(n,a),(0,c.n)(o,l)}(t,s.worldUpAtPosition(e,m.WM.get()),n,o,a.basis1,a.basis2),(0,c.h)(a.basis1,a.basis1,i),(0,c.h)(a.basis2,a.basis2,r),(0,c.c)(a.origin,e),(0,h.my)(a.basis2,a.basis1,a.origin,a.plane),a}function $(e,t,i,r,n,o){const s=(0,c.c)(m.WM.get(),n.origin);(0,c.g)(s,s,(0,c.h)(m.WM.get(),n.basis1,e.direction[0]<0?1:-1)),(0,c.g)(s,s,(0,c.h)(m.WM.get(),n.basis2,e.direction[1]<0?1:-1));const a=(0,c.l)(n.basis1),l=(0,c.l)(n.basis2),d=(0,c.d)(m.WM.get(),i,s),u=(0,c.d)(m.WM.get(),t,s);let h=0,p=0;if(ge(e)){const t=ue(n),i=ue(o);h=a-.5*e.direction[0]*(0,c.f)(n.basis1,u)/a,p=l-.5*e.direction[1]*(0,c.f)(n.basis2,u)/l;const r=i/t;h*=r,p*=r}const b=h+.5*e.direction[0]*(0,c.f)(n.basis1,d)/a,M=p+.5*e.direction[1]*(0,c.f)(n.basis2,d)/l,I=(0,c.h)(m.WM.get(),n.basis1,b/a),w=(0,c.h)(m.WM.get(),n.basis2,M/l);(b<=0||le(o.origin,I,r)<=f.Ci)&&(0,c.c)(I,o.basis1),(M<=0||le(o.origin,w,r)<=f.Ci)&&(0,c.c)(w,o.basis2);const C=(0,c.c)(m.WM.get(),s);return(0,c.g)(C,C,(0,c.h)(m.WM.get(),I,e.direction[0]<0?-1:1)),(0,c.g)(C,C,(0,c.h)(m.WM.get(),w,e.direction[1]<0?-1:1)),(0,g.f)(C,I,w,o)}function ee(e,t){return f.ae*Math.min(t.width,t.height)*t.computeRenderPixelSizeAt(e)}function te(e,t,i,r){const n=(0,c.e)(m.WM.get(),t,i);return(0,c.e)(n,n,t),(0,h.Yq)(e,n,r)}function ie(e,t){return(0,w.Aq)(e.basis1,e.basis2,e.origin,t)}function re(e,t,i,r){const n=t.worldUpAtPosition(e.origin,m.WM.get()),o=m.WM.get();switch(i){case we.HEADING:(0,c.c)(o,n);break;case we.TILT:(0,c.c)(o,e.basis1)}return(0,h.Yq)(e.origin,o,r)}function ne(e,t,i,r){const n=ce(i,B.NEGATIVE_X),o=m.MP.get();(0,a.jI)(o,t,n.edge*Math.PI/2);const d=(0,c.n)(m.WM.get(),n.basis);let u=(0,c.h)(m.WM.get(),d,n.direction*r.computeScreenPixelSizeAt(n.position)*f.Eu);(0,c.g)(u,u,n.position);const h=r.projectToRenderScreen(u,(0,s.Wv)(m.WM.get())),p=function(e,t){const[i,r,n,o]=e.viewport,s=Math.min(n,o)/16;let a=!0;return t[0]<i+s?(t[0]=i+s,a=!1):t[0]>i+n-s&&(t[0]=i+n-s,a=!1),t[1]<r+s?(t[1]=r+s,a=!1):t[1]>r+o-s&&(t[1]=r+o-s,a=!1),a}(r,h);(0,F.Bh)(r,h,ve),(0,c.n)(ve.direction,ve.direction);const b=m.WM.get();!p&&(0,g.i)(i,ve,b)&&(u=b),o[12]=0,o[13]=0,o[14]=0,e.modelTransform=o,e.renderLocation=(0,l.d9)(u),p?e.state|=Te:e.state&=~Te}function oe(e,t,i,r){const n=(0,c.l)(r.basis1),o=(0,c.l)(r.basis2),s=de(r),l=ue(r),d=(0,c.i)(m.WM.get(),0,0,0);(0,c.g)(d,(0,c.h)(m.WM.get(),r.basis1,t.direction[0]),(0,c.h)(m.WM.get(),r.basis2,t.direction[1])),(0,c.g)(d,r.origin,d);let u=0,g=1;if(ge(t))1===t.direction[0]&&-1===t.direction[1]?u=ye:1===t.direction[0]&&1===t.direction[1]?u=Math.PI:-1===t.direction[0]&&1===t.direction[1]&&(u=3*Math.PI/2),g=l;else{const e=0!==t.direction[0]?1:2;u=1===e?ye:0,g=(1===e?o:n)-s}const h=(0,a.QO)(m.MP.get(),u);(0,a.bA)(h,h,(0,c.i)(m.WM.get(),g,g,g)),(0,a.Jp)(h,i,h),h[12]=0,h[13]=0,h[14]=0,e.modelTransform=h,e.renderLocation=d}function se(e,t,i,r){const n=r.worldUpAtPosition(i.origin,m.WM.get()),o=ce(i,B.POSITIVE_X),s=(0,a.QO)(m.MP.get(),o.edge*Math.PI/2);(0,a.lM)(s,s,-me(i,n)),(0,a.Jp)(s,t,s),s[12]=0,s[13]=0,s[14]=0,e.modelTransform=s,e.renderLocation=o.position}function ae(e,t,i){const r=ce(i,B.POSITIVE_Y),n=(0,a.QO)(m.MP.get(),r.edge*Math.PI/2);(0,a.lM)(n,n,ye),(0,a.Jp)(n,t,n),n[12]=0,n[13]=0,n[14]=0,e.modelTransform=n,e.renderLocation=r.position}function ce(e,t){switch(t){case B.POSITIVE_X:return{basis:e.basis1,direction:1,position:(0,c.g)(m.WM.get(),e.origin,e.basis1),edge:t};case B.POSITIVE_Y:return{basis:e.basis2,direction:1,position:(0,c.g)(m.WM.get(),e.origin,e.basis2),edge:t};case B.NEGATIVE_X:return{basis:e.basis1,direction:-1,position:(0,c.d)(m.WM.get(),e.origin,e.basis1),edge:t};case B.NEGATIVE_Y:return{basis:e.basis2,direction:-1,position:(0,c.d)(m.WM.get(),e.origin,e.basis2),edge:t}}}function le(e,t,i){const r=i.projectToRenderScreen((0,c.g)(m.WM.get(),e,t),(0,s.Wv)(m.WM.get())),n=i.projectToRenderScreen((0,c.d)(m.WM.get(),e,t),(0,s.Wv)(m.WM.get()));return(0,c.k)((0,c.d)(r,r,n))}function de(e){const t=(0,c.l)(e.basis1),i=(0,c.l)(e.basis2);return f.Yn*Math.min(t,i)}function ue(e){return de(e)}function ge(e){return 0!==e.direction[0]&&0!==e.direction[1]}function he(e){return new C.r({view:e,attached:!1,color:(0,M.bL)(e.effectiveTheme),width:f.fg,renderOccluded:A.yD.OccludeAndTransparent,geometry:[[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]]],isDecoration:!0})}function pe(e){return new z({view:e,attached:!1,backgroundColor:M.ku,gridColor:(0,M.CB)(e.effectiveTheme),gridWidth:4,renderOccluded:A.yD.OccludeAndTransparent,isDecoration:!0})}function be(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new r.Z;if(null==e)return null;const{renderCoordsHelper:s}=t,a=s.fromRenderCoords(e.origin,new q.Z({spatialReference:t.spatialReference}));if(null==a)return null;const l=(0,d.tryProjectWithZConversion)(a,i);if(null==l)return null;n.position=l;const u=2*(0,c.l)(e.basis1),g=2*(0,c.l)(e.basis2),h=X.Z.renderUnitScaleFactor(t.spatialReference,i);n.width=u*h,n.height=g*h;const p=s.worldUpAtPosition(e.origin,m.WM.get());return n.tilt=(0,o.BV)(me(e,p)),n.heading=s.headingAtPosition(e.origin,e.basis1)-90,n}function me(e,t){return(0,b.cp)(t,e.basis2,e.basis1)+ye}function Me(e,t){if(null==(null===e||void 0===e?void 0:e.position))return null;const i=(0,I.G)(e.position,t.spatialReference,t.elevationProvider);if(null==i)return null;const r=X.Z.renderUnitScaleFactor(e.position.spatialReference,t.spatialReference),n=e.width*r,o=e.height*r;return{position:i,heading:e.heading,tilt:e.tilt,renderWidth:n,renderHeight:o}}function fe(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:(0,g.a)();if(null==e)return null;const s=function(e,t,i,r,s,a){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:(0,g.a)();return a.toRenderCoords(e,l.origin)?(a.worldBasisAtPosition(l.origin,u.R.X,l.basis1),a.worldBasisAtPosition(l.origin,u.R.Y,l.basis2),(0,h.my)(l.basis2,l.basis1,l.origin,l.plane),(0,g.r)(l,-(0,o.Vl)(t),(0,g.n)(l),l),(0,g.r)(l,(0,o.Vl)(i),l.basis1,l),(0,c.h)(l.basis1,l.basis1,r/2),(0,c.h)(l.basis2,l.basis2,s/2),(0,g.u)(l),l):(n.Z.getLogger("esri.views.3d.analysis.Slice.sliceToolUtils").error("Failed to project slice plane position, projection from ".concat(e.spatialReference.wkid," is not supported")),null)}(e.position,e.heading,e.tilt,e.renderWidth,e.renderHeight,t.renderCoordsHelper,r);return i.tiltEnabled||null==s||function(e,t,i){const r=t.worldUpAtPosition(e.origin,m.WM.get()),n=e.basis1,o=me(e,r),s=Math.round(o/ye)*ye;(0,g.r)(e,s-o,n,i)}(s,t.renderCoordsHelper,s),s}(Q=B||(B={}))[Q.POSITIVE_X=0]="POSITIVE_X",Q[Q.POSITIVE_Y=1]="POSITIVE_Y",Q[Q.NEGATIVE_X=2]="NEGATIVE_X",Q[Q.NEGATIVE_Y=3]="NEGATIVE_Y";const Ie=J.jg.Custom1;var we,Ce;!function(e){e[e.HEADING=1]="HEADING",e[e.TILT=2]="TILT"}(we||(we={})),function(e){e[e.HORIZONTAL_OR_VERTICAL=0]="HORIZONTAL_OR_VERTICAL",e[e.HORIZONTAL=1]="HORIZONTAL",e[e.VERTICAL=2]="VERTICAL",e[e.TILTED=3]="TILTED"}(Ce||(Ce={}));const Te=J.jg.Custom2,ve=(0,p.Ue)(),ye=Math.PI/2,Ne=J.jg.Custom1,Ae=J.jg.Custom2;function We(e){return null!=("building-scene-3d"===e.type?e:null)}},11526:(e,t,i)=>{i.d(t,{O:()=>d,s:()=>u});const r="theme-style";function n(e,t){return function(e,t){const i=new Image(t,t);return i.src=e,i}(function(e){const t=(new XMLSerializer).serializeToString(e);return"data:image/svg+xml;base64,".concat(btoa(t))}(o(function(e){const t=e.split(",")[1],i=atob(t);return(new DOMParser).parseFromString(i,"image/svg+xml")}(e),t)),t.size)}function o(e,t){let{accentColor:i,contrastColor:n}=t;const o=i.toHex(),s=i.a,a=n.toHex(),c=n.a,l=e.getElementsByTagNameNS("http://www.w3.org/2000/svg","style").namedItem(r);return l&&(l.innerHTML="\n      .contrast-fill { fill: ".concat(a,"; fill-opacity: ").concat(c,"; }\n      .contrast-stroke { stroke: ").concat(a,"; stroke-opacity: ").concat(c,";  }\n      .accent-fill { fill: ").concat(o,"; fill-opacity: ").concat(s,"; }\n      .accent-stroke { stroke: ").concat(o,"; stroke-opacity:  ").concat(s,"; }")),e}const s="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxwYXRoIGQ9Ik0yOCAwYTI4IDI4IDAgMSAxIDAgNTYgMjggMjggMCAwIDEgMC01NiIgY2xhc3M9ImFjY2VudC1maWxsIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI0Ljk5IiBkPSJNMjAuMDUgNDAuODZhMTUuMDUgMTUuMDUgMCAwIDAgMTcuMTQtMS41IDE1LjA1IDE1LjA1IDAgMCAwIDQuNDctMTYuNjUgMTUuMDUgMTUuMDUgMCAwIDAtMjIuNzItNy4xNSAxNS4wNSAxNS4wNSAwIDAgMC01LjUgNy4xNSIgY2xhc3M9ImNvbnRyYXN0LXN0cm9rZSIvPjxwYXRoIGQ9Im0xMC45NyAzNS41NyA1LjM4IDEyLjA3IDcuNzktMTMuNDd6IiBjbGFzcz0iY29udHJhc3QtZmlsbCIvPjwvc3ZnPg==",a="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxjaXJjbGUgY3g9IjM5LjQ3OCIgY3k9IjMuMDc4IiByPSIyOCIgY2xhc3M9ImFjY2VudC1maWxsIiB0cmFuc2Zvcm09InJvdGF0ZSg0MC41NDIpIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI1IiBkPSJtNy4wNzQgMzAuMDUzIDI5LjM5NyAxMS45ODUtMy42NzMtMzMuNDkzIiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSIyLjk5NiIgZD0iTTI0LjUwNCAyMy4yMDdhMTEuOTggMTEuOTggMCAwIDAtOS44IDcuNTA3IiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIGNvbnRyYXN0LWZpbGwiLz48cGF0aCBkPSJtMjkuODE4IDIyLjgwOC02LjE4NCA0LjYtLjU0MS04LjM2NHoiIGNsYXNzPSJjb250cmFzdC1maWxsIi8+PC9zdmc+";var c=i(1487);const l=64;function d(e,t){const{accentColor:i,contrastColor:r,preMultiplyAlpha:o}=t;return e.fromData("heading-rotate:[accent:".concat(i,",contrast:").concat(r,",size:").concat(l,"]"),(()=>new c.x(n(s,{accentColor:i,contrastColor:r,size:l}),{mipmap:!0,reloadable:!0,preMultiplyAlpha:o})))}function u(e,t){const{accentColor:i,contrastColor:r,preMultiplyAlpha:o}=t;return e.fromData("tilt-rotate:[accent:".concat(i,",contrast:").concat(r,",size:").concat(l,"]"),(()=>new c.x(n(a,{accentColor:i,contrastColor:r,size:l}),{mipmap:!0,reloadable:!0,preMultiplyAlpha:o})))}}}]);
//# sourceMappingURL=8035.5b33903e.chunk.js.map