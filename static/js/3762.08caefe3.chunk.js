"use strict";(self.webpackChunkmmsp_tbm=self.webpackChunkmmsp_tbm||[]).push([[3762],{18300:(e,t,i)=>{i.d(t,{L:()=>v,b:()=>m});var n,s,r=i(30168),a=i(14226),l=i(81949),o=i(88396),c=i(6394),h=i(8084),d=i(82999),u=i(58406),p=i(98634),_=i(8654),g=i(64201),f=i(4760);function m(e){const t=new g.kG;t.include(h.j,e);const{vertex:i,fragment:l}=t;return i.uniforms.add(new _.g("modelView",((e,t)=>(0,a.w)(b,t.camera.viewMatrix,e.origin))),new _.g("proj",((e,t)=>t.camera.projectionMatrix)),new u.p("glowWidth",((e,t)=>e.glowWidth*t.camera.pixelRatio)),new d.A("pixelToNDC",((e,t)=>(0,o.s)(P,2/t.camera.fullViewport[2],2/t.camera.fullViewport[3])))),t.attributes.add(f.T.START,"vec3"),t.attributes.add(f.T.END,"vec3"),t.attributes.add(f.T.UP,"vec3"),t.attributes.add(f.T.EXTRUDE,"vec2"),t.varyings.add("uv","vec2"),t.varyings.add("vViewStart","vec3"),t.varyings.add("vViewEnd","vec3"),t.varyings.add("vViewPlane","vec4"),i.code.add((0,p.H)(n||(n=(0,r.Z)(["void main() {\nvec3 pos = mix(start, end, extrude.x);\nvec4 viewPos = modelView * vec4(pos, 1);\nvec4 projPos = proj * viewPos;\nvec2 ndcPos = projPos.xy / projPos.w;\nvec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;\nvec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);\nvec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);\nvec2 lxy = abs(sign(projExtrudeDir) - ndcPos);\nndcPos += length(lxy) * projExtrudeDir;\nvec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));\nvec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;\nvViewStart = (modelView * vec4(start, 1)).xyz;\nvViewEnd = (modelView * vec4(end, 1)).xyz;\nvViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));\nfloat xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;\nndcPos.x += xPaddingPixels * pixelToNDC.x;\nuv = ndcPos * 0.5 + 0.5;\ngl_Position = vec4(ndcPos, 0, 1);\n}"])))),l.uniforms.add(new u.p("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),l.code.add((0,p.H)(s||(s=(0,r.Z)(["float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {\nvec3 origin = mix(start, end, 0.5);\nvec3 basis = end - origin;\nvec3 posAtOrigin = pos - origin;\nfloat x = dot(normalize(basis), posAtOrigin);\nfloat y = dot(plane.xyz, posAtOrigin);\nfloat dx = max(abs(x) - length(basis), 0.0);\nfloat dy = y;\nfloat dist = length(vec2(dx, dy));\nfloat width = fwidth(y);\nfloat maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;\nfloat pixelDist = dist / min(width, maxPixelDistance);\nreturn abs(pixelDist);\n}\nvoid main() {\nvec3 pos;\nvec3 normal;\nfloat depthDiscontinuityAlpha;\nvec3 dEndStart = vViewEnd - vViewStart;\nif (dot(dEndStart, dEndStart) < 1e-5) {\ndiscard;\n}\nif (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {\ndiscard;\n}\nfloat distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);\nvec4 color = laserlineProfile(distance);\nfloat alpha = 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));\nfragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);\n}"])))),t}const P=(0,c.a)(),b=(0,l.a)(),v=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}))},83671:(e,t,i)=>{i.d(t,{L:()=>k,b:()=>q,d:()=>I});var n,s,r,a,l,o,c,h,d,u,p,_,g,f,m=i(30168),P=i(16889),b=i(88396),v=i(6394),x=i(11186),w=i(71353),E=i(90045),V=i(67077),y=i(85981),D=i(55652),S=i(23470),L=i(8084),C=i(24967),M=i(82999),R=i(49450),A=i(95276),T=i(58406),z=i(98634),O=i(64201);const I=(0,P.Vl)(6);function q(e){const t=new O.kG;t.include(C.k),t.include(L.j,e);const i=t.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(i.uniforms.add(new T.p("maxPixelDistance",((t,i)=>e.heightManifoldEnabled?2*i.camera.computeScreenPixelSizeAt(t.heightManifoldTarget):2*i.camera.computeScreenPixelSizeAt(t.lineVerticalPlaneSegment.origin)))),i.code.add((0,z.H)(n||(n=(0,m.Z)(["float planeDistancePixels(vec4 plane, vec3 pos) {\nfloat dist = dot(plane.xyz, pos) + plane.w;\nfloat width = fwidth(dist);\ndist /= min(width, maxPixelDistance);\nreturn abs(dist);\n}"])))),e.spherical){const e=(e,t,i)=>(0,x.e)(e,t.heightManifoldTarget,i.camera.viewMatrix),t=(e,t)=>(0,x.e)(e,[0,0,0],t.camera.viewMatrix);i.uniforms.add(new A.N("heightManifoldOrigin",((i,n)=>(e(W,i,n),t(G,n),(0,x.f)(G,G,W),(0,x.n)(Z,G),Z[3]=(0,x.l)(G),Z))),new R.J("globalOrigin",((e,i)=>t(W,i))),new T.p("cosSphericalAngleThreshold",((e,t)=>1-Math.max(2,(0,x.o)(t.camera.eye,e.heightManifoldTarget)*t.camera.perRenderPixelRatio)/(0,x.l)(e.heightManifoldTarget)))),i.code.add((0,z.H)(s||(s=(0,m.Z)(["float globeDistancePixels(float posInGlobalOriginLength) {\nfloat dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);\nfloat width = fwidth(dist);\ndist /= min(width, maxPixelDistance);\nreturn abs(dist);\n}\nfloat heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {\nvec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);\nfloat cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);\nvec3 posInGlobalOrigin = globalOrigin - pos;\nfloat posInGlobalOriginLength = length(posInGlobalOrigin);\nfloat sphericalDistance = globeDistancePixels(posInGlobalOriginLength);\nfloat planarDistance = planeDistancePixels(heightPlane, pos);\nreturn cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;\n}"]))))}else i.code.add((0,z.H)(r||(r=(0,m.Z)(["float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {\nreturn planeDistancePixels(heightPlane, pos);\n}"]))));if(e.pointDistanceEnabled&&(i.uniforms.add(new T.p("maxPixelDistance",((e,t)=>2*t.camera.computeScreenPixelSizeAt(e.pointDistanceTarget)))),i.code.add((0,z.H)(a||(a=(0,m.Z)(["float sphereDistancePixels(vec4 sphere, vec3 pos) {\nfloat dist = distance(sphere.xyz, pos) - sphere.w;\nfloat width = fwidth(dist);\ndist /= min(width, maxPixelDistance);\nreturn abs(dist);\n}"]))))),e.intersectsLineEnabled&&(i.uniforms.add(new T.p("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),i.code.add((0,z.H)(l||(l=(0,m.Z)(["float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {\nfloat dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);\nreturn abs(dist) - radius;\n}"]))))),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&i.code.add((0,z.H)(o||(o=(0,m.Z)(["bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {\nvec3 dir = end - start;\nfloat t2 = dot(dir, pos - start);\nfloat l2 = dot(dir, dir);\nreturn t2 >= 0.0 && t2 <= l2;\n}"])))),i.code.add((0,z.H)(c||(c=(0,m.Z)(["void main() {\nvec3 pos;\nvec3 normal;\nfloat depthDiscontinuityAlpha;\nif (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {\ndiscard;\n}\nvec4 color = vec4(0, 0, 0, 0);"])))),e.heightManifoldEnabled){i.uniforms.add(new M.A("angleCutoff",(e=>H(e))),new A.N("heightPlane",((e,t)=>N(e.heightManifoldTarget,e.renderCoordsHelper.worldUpAtPosition(e.heightManifoldTarget,W),t.camera.viewMatrix))));const t=e.spherical?(0,z.H)(h||(h=(0,m.Z)(["normalize(globalOrigin - pos)"]))):(0,z.H)(d||(d=(0,m.Z)(["heightPlane.xyz"])));i.code.add((0,z.H)(u||(u=(0,m.Z)(["\n    {\n      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, ",")));\n      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));\n      color = max(color, heightManifoldColor * heightManifoldAlpha);\n    }\n    "])),t))}return e.pointDistanceEnabled&&(i.uniforms.add(new M.A("angleCutoff",(e=>H(e))),new A.N("pointDistanceSphere",((e,t)=>function(e,t){return(0,x.e)(J,e.pointDistanceOrigin,t.camera.viewMatrix),J[3]=(0,x.o)(e.pointDistanceOrigin,e.pointDistanceTarget),J}(e,t)))),i.code.add((0,z.H)(p||(p=(0,m.Z)(["{\nfloat pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);\nvec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);\nfloat pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));\ncolor = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);\n}"]))))),e.lineVerticalPlaneEnabled&&(i.uniforms.add(new M.A("angleCutoff",(e=>H(e))),new A.N("lineVerticalPlane",((e,t)=>function(e,t){const i=(0,y.KU)(e.lineVerticalPlaneSegment,.5,W),n=e.renderCoordsHelper.worldUpAtPosition(i,B),s=(0,x.n)(G,e.lineVerticalPlaneSegment.vector),r=(0,x.b)(Z,n,s);return(0,x.n)(r,r),N(e.lineVerticalPlaneSegment.origin,r,t.camera.viewMatrix)}(e,t))),new R.J("lineVerticalStart",((e,t)=>function(e,t){const i=(0,x.c)(W,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(i,0),(0,x.e)(i,i,t.camera.viewMatrix)}(e,t))),new R.J("lineVerticalEnd",((e,t)=>function(e,t){const i=(0,x.g)(W,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(i,0),(0,x.e)(i,i,t.camera.viewMatrix)}(e,t)))),i.code.add((0,z.H)(_||(_=(0,m.Z)(["{\nif (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {\nfloat lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);\nvec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);\nfloat lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));\ncolor = max(color, lineVerticalColor * lineVerticalAlpha);\n}\n}"]))))),e.intersectsLineEnabled&&(i.uniforms.add(new M.A("angleCutoff",(e=>H(e))),new R.J("intersectsLineStart",((e,t)=>(0,x.e)(W,e.lineStartWorld,t.camera.viewMatrix))),new R.J("intersectsLineEnd",((e,t)=>(0,x.e)(W,e.lineEndWorld,t.camera.viewMatrix))),new R.J("intersectsLineDirection",((e,t)=>((0,x.c)(Z,e.intersectsLineSegment.vector),Z[3]=0,(0,x.n)(W,(0,E.t)(Z,Z,t.camera.viewMatrix))))),new T.p("intersectsLineRadius",(e=>e.intersectsLineRadius))),i.code.add((0,z.H)(g||(g=(0,m.Z)(["{\nif (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {\nfloat intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);\nvec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);\nfloat intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));\ncolor = max(color, intersectsLineColor * intersectsLineAlpha);\n}\n}"]))))),i.code.add((0,z.H)(f||(f=(0,m.Z)(["fragColor = laserlineOutput(color * depthDiscontinuityAlpha);\n}"])))),t}function H(e){return(0,b.s)(U,Math.cos(e.angleCutoff),Math.cos(Math.max(0,e.angleCutoff-(0,P.Vl)(2))))}function N(e,t,i){return(0,x.e)(j,e,i),(0,x.c)(Z,t),Z[3]=0,(0,E.t)(Z,Z,i),(0,D.Yq)(j,Z,F)}const U=(0,v.a)(),W=(0,w.c)(),Z=(0,V.c)(),B=(0,w.c)(),G=(0,w.c)(),j=(0,w.c)(),F=(0,D.Ue)(),J=(0,S.c)(),k=Object.freeze(Object.defineProperty({__proto__:null,build:q,defaultAngleCutoff:I},Symbol.toStringTag,{value:"Module"}))},62389:(e,t,i)=>{i.d(t,{W:()=>J});var n=i(11186),s=i(71353),r=i(85981),a=i(86244),l=i(27366),o=i(92026),c=i(49861),h=(i(25243),i(63780),i(93169),i(69912)),d=i(70444),u=i(95773),p=i(40885),_=i(50951),g=i(86372),f=i(50256),m=i(55158),P=i(80658),b=i(4760),v=i(82144),x=i(31132),w=i(27627),E=i(18300),V=i(8548),y=i(36207);class D extends x.A{initializeProgram(e){return new w.$(e.rctx,D.shader.get().build(this.configuration),S)}initializePipeline(){return(0,y.sm)({blending:(0,y.if)(V.zi.ONE,V.zi.ONE_MINUS_SRC_ALPHA),colorWrite:y.BK})}}D.shader=new v.J(E.L,(()=>i.e(7515).then(i.bind(i,97515))));const S=new Map([[b.T.START,0],[b.T.END,1],[b.T.UP,2],[b.T.EXTRUDE,3]]);var L=i(44070);class C{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=(0,s.c)(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const t=(0,g.bg)(3*e.length);let i=0;for(const n of e)t[i++]=n[0],t[i++]=n[1],t[i++]=n[2];this.buffers=[t]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const e=this._buffers[0],t=3*Math.floor(e.length/3/2);(0,n.s)(this._origin,e[t],e[t+1],e[t+2])}else(0,n.s)(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(e){const t=this._ensureVAO(e);null!=t&&(e.bindVAO(t),e.drawArrays(V.MX.TRIANGLES,0,this._count))}dispose(){null!=this._vao&&this._vao.dispose()}_ensureVAO(e){return null==this._buffers?null:(null==this._vao&&(this._vao=this._createVAO(e,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,t){const i=this._createDataBuffer(t);return this._dirty=!1,new P.U(e,S,{data:(0,f.K)(A)},{data:L.f.createVertex(e,V.l1.STATIC_DRAW,i)})}_ensureVertexData(e,t){var i;if(!this._dirty)return;const n=this._createDataBuffer(t);null!==(i=e.vertexBuffers.data)&&void 0!==i&&i.setData(n),this._dirty=!1}_numberOfRenderVertices(e){return 2*(e.length/3-1)*3}_createDataBuffer(e){const t=e.reduce(((e,t)=>e+this._numberOfRenderVertices(t)),0);this._count=t;const i=A.createBuffer(t),s=this._origin;let r=0,a=0;for(const l of e){for(let e=0;e<l.length;e+=3){const t=(0,n.s)(R,l[e],l[e+1],l[e+2]);0===e?a=this._renderCoordsHelper.getAltitude(t):this._renderCoordsHelper.setAltitude(t,a);const o=this._renderCoordsHelper.worldUpAtPosition(t,M),c=r+2*e,h=(0,n.f)(R,t,s);if(e<l.length-3){i.up.setVec(c,o),i.up.setVec(c+3,o),i.up.setVec(c+5,o);for(let e=0;e<6;e++)i.start.setVec(c+e,h);i.extrude.setValues(c,0,-1),i.extrude.setValues(c+1,1,-1),i.extrude.setValues(c+2,1,1),i.extrude.setValues(c+3,0,-1),i.extrude.setValues(c+4,1,1),i.extrude.setValues(c+5,0,1)}if(e>0){i.up.setVec(c-2,o),i.up.setVec(c-4,o),i.up.setVec(c-5,o);for(let e=-6;e<0;e++)i.end.setVec(c+e,h)}}r+=this._numberOfRenderVertices(l)}return i.buffer}}const M=(0,s.c)(),R=(0,s.c)(),A=(0,m.U$)().vec3f(b.T.START).vec3f(b.T.END).vec3f(b.T.UP).vec2f(b.T.EXTRUDE);var T=i(70374),z=i(93822),O=i(22909),I=i(33559);class q extends I.m{constructor(){super(...arguments),this.contrastControlEnabled=!1}}(0,l._)([(0,I.o)()],q.prototype,"contrastControlEnabled",void 0);var H=i(16889),N=i(98634),U=i(7566),W=i(83671);class Z extends N.K{constructor(){super(...arguments),this.innerColor=(0,s.f)(1,1,1),this.innerWidth=1,this.glowColor=(0,s.f)(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=(0,H.Vl)(6),this.pointDistanceOrigin=(0,s.c)(),this.pointDistanceTarget=(0,s.c)(),this.lineVerticalPlaneSegment=(0,r.Ue)(),this.intersectsLineSegment=(0,r.Ue)(),this.intersectsLineRadius=3,this.heightManifoldTarget=(0,s.c)(),this.lineStartWorld=(0,s.c)(),this.lineEndWorld=(0,s.c)()}}class B extends x.A{initializeProgram(e){return new w.$(e.rctx,B.shader.get().build(this.configuration),U.i)}initializePipeline(){return(0,y.sm)({blending:(0,y.if)(V.zi.ONE,V.zi.ONE_MINUS_SRC_ALPHA),colorWrite:y.BK})}}B.shader=new v.J(W.L,(()=>i.e(5693).then(i.bind(i,45693))));class G extends q{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1,this.spherical=!1}}(0,l._)([(0,I.o)()],G.prototype,"heightManifoldEnabled",void 0),(0,l._)([(0,I.o)()],G.prototype,"pointDistanceEnabled",void 0),(0,l._)([(0,I.o)()],G.prototype,"lineVerticalPlaneEnabled",void 0),(0,l._)([(0,I.o)()],G.prototype,"intersectsLineEnabled",void 0),(0,l._)([(0,I.o)()],G.prototype,"spherical",void 0);let j=class extends T.He{constructor(e){super(e),this._technique=null,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._viewingMode=_.JY.Local,this._pathVerticalPlaneEnabled=!1,this._pathVerticalPlaneData=null,this._pathTechnique=null,this._passParameters=new Z,this.produces=new Map([[z.r.LASERLINES,()=>!this.contrastControlEnabled],[z.r.LASERLINES_CONTRAST_CONTROL,()=>this.contrastControlEnabled]])}initialize(){this._passParameters.renderCoordsHelper=this.renderCoordsHelper}consumes(){return T.of}get isDecoration(){return this._isDecoration}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this._requestRender())}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(e){(0,n.c)(this._passParameters.heightManifoldTarget,e),this._requestRender()}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this._requestRender())}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(e){(0,n.c)(this._passParameters.pointDistanceTarget,e),this._requestRender()}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(e){(0,n.c)(this._passParameters.pointDistanceOrigin,e),this._requestRender()}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this._requestRender())}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){(0,r.JG)(e,this._passParameters.lineVerticalPlaneSegment),this._requestRender()}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this._requestRender())}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(e){(0,r.JG)(e,this._passParameters.intersectsLineSegment),this._requestRender()}get intersectsLineRadius(){return this._passParameters.intersectsLineRadius}set intersectsLineRadius(e){e!==this._passParameters.intersectsLineRadius&&(this._passParameters.intersectsLineRadius=e,this._requestRender())}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this._requestRender())}get viewingMode(){return this._viewingMode}set viewingMode(e){e!==this._viewingMode&&(this._viewingMode=e,this._requestRender())}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(e){e!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=e,null!=this._pathVerticalPlaneData&&this._requestRender())}set pathVerticalPlaneVertices(e){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new C(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this._requestRender()}set pathVerticalPlaneBuffers(e){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new C(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this._requestRender()}setParameters(e){(0,O.LO)(this._passParameters,e)&&this._requestRender()}initializeRenderContext(e){this._context=e,this._techniqueRepository=e.techniqueRepository,this._techniqueConfig=new G;const t=new q;t.contrastControlEnabled=this.contrastControlEnabled,this._pathTechnique=this._techniqueRepository.acquire(D,t)}uninitializeRenderContext(){this._technique=(0,o.RY)(this._technique),this._pathVerticalPlaneData=(0,o.M2)(this._pathVerticalPlaneData),this._pathTechnique=(0,o.RY)(this._pathTechnique)}prepareTechnique(){return this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled?(this._techniqueConfig.heightManifoldEnabled=this.heightManifoldEnabled,this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled,this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled,this._techniqueConfig.contrastControlEnabled=this.contrastControlEnabled,this._techniqueConfig.spherical=this._viewingMode===_.JY.Global,this._technique=this._techniqueRepository.releaseAndAcquire(B,this._techniqueConfig,this._technique),this._technique):this._pathTechnique}renderNode(e,t){(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(e,t),this.pathVerticalPlaneEnabled&&this._renderPath(e)}_renderUnified(e,t){const i=e.rctx;this._updatePassParameters(e),i.bindTechnique(t,this._passParameters,e.bindParameters),i.screen.draw()}_renderPath(e){if(null==this._pathVerticalPlaneData||null==this._pathTechnique)return;const t=e.rctx,i=this._pathTechnique;t.bindTechnique(i,{...this._passParameters,origin:this._pathVerticalPlaneData.origin},e.bindParameters),this._pathVerticalPlaneData.draw(e.rctx)}_updatePassParameters(e){if(!this._intersectsLineEnabled)return;const t=e.bindParameters.camera;if(this._intersectsLineInfinite){if((0,d.iL)((0,p.re)(this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector),F),F.c0=-Number.MAX_VALUE,!(0,u.zq)(t.frustum,F))return;(0,d.Ws)(F,this._passParameters.lineStartWorld),(0,d.S$)(F,this._passParameters.lineEndWorld)}else(0,n.c)(this._passParameters.lineStartWorld,this._passParameters.intersectsLineSegment.origin),(0,n.g)(this._passParameters.lineEndWorld,this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector)}_requestRender(){this._context&&this._context.requestRender()}get test(){return{passParameters:this._passParameters}}};(0,l._)([(0,c.Cb)({constructOnly:!0})],j.prototype,"contrastControlEnabled",void 0),(0,l._)([(0,c.Cb)({constructOnly:!0})],j.prototype,"_isDecoration",void 0),(0,l._)([(0,c.Cb)({constructOnly:!0})],j.prototype,"renderCoordsHelper",void 0),j=(0,l._)([(0,h.j)("esri.views.3d.support.LaserLineRenderer")],j);const F=(0,d.Ue)();class J extends a.l{constructor(e){super(e),this._angleCutoff=W.d,this._style={},this._heightManifoldTarget=(0,s.c)(),this._heightManifoldEnabled=!1,this._intersectsLine=(0,r.Ue)(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProperties(e)}get testData(){return this._renderer}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(e){null!=e?((0,n.c)(this._heightManifoldTarget,e),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if(null==e)return void(this.intersectsLine=null);const t=this.view.renderCoordsHelper.worldUpAtPosition(e,k);this.intersectsLine=(0,r.al)(e,t),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(e){null!=e?((0,r.JG)(e,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){this._lineVerticalPlaneSegment=null!=e?(0,r.JG)(e):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(e){this._pointDistanceLine=null!=e?{origin:(0,s.g)(e.origin),target:e.target?(0,s.g)(e.target):null}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||null!=this._pointDistanceLine||null!=this._pathVerticalPlaneBuffers)?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){null==this._renderer&&(this._renderer=new j({renderCoordsHelper:this.view.renderCoordsHelper,contrastControlEnabled:!0,_isDecoration:this.isDecoration}),this._renderer.viewingMode=this.view.state.viewingMode,this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this._renderer))}_syncStyle(){null!=this._renderer&&(this._renderer.setParameters(this._style),null!=this._style.intersectsLineRadius&&(this._renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){null!=this._renderer&&this._renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){null!=this._renderer&&(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){null!=this._renderer&&(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){null!=this._renderer&&(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){null!=this._renderer&&(this._renderer.pathVerticalPlaneEnabled=null!=this._pathVerticalPlaneBuffers&&this.visible,null!=this._pathVerticalPlaneBuffers&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){null!=this._renderer&&(this._renderer.lineVerticalPlaneEnabled=null!=this._lineVerticalPlaneSegment&&this.visible,null!=this._lineVerticalPlaneSegment&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){if(null==this._renderer)return;const e=this._pointDistanceLine,t=null!=e;this._renderer.pointDistanceEnabled=t&&null!=e.target&&this.visible,t&&(this._renderer.pointDistanceOrigin=e.origin,null!=e.target&&(this._renderer.pointDistanceTarget=e.target))}_disposeRenderer(){null!=this._renderer&&this.view._stage&&(this.view._stage.removeRenderPlugin(this._renderer),this._renderer=null)}}const k=(0,s.c)()},66730:(e,t,i)=>{i.d(t,{L:()=>P});var n=i(16889),s=i(11186),r=i(71353),a=i(90045),l=i(67077),o=i(5986),c=i(41414),h=i(51378),d=i(52168),u=i(69691),p=i(78935),_=i(67794),g=i(70619),f=i(4760),m=i(21400);class P extends d._{constructor(e){super(e),this._material=null,this._texture=null,this._geometry=null,this._size=3,this._color=(0,l.f)(1,0,1,1),this._pixelSnappingEnabled=!0,this._primitive="square",this._outlineSize=1,this._outlineColor=(0,l.f)(1,1,1,1),this._elevationInfo=null,this.applyProperties(e)}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get size(){return this._size}set size(e){if(e!==this._size){const t=this._preferredTextureSize;this._size=e,t<this._preferredTextureSize?this.recreate():this._updateSizeAttribute()}}get color(){return this._color}set color(e){(0,a.h)(e,this._color)||((0,a.c)(this._color,e),this._updateMaterial())}get pixelSnappingEnabled(){return this._pixelSnappingEnabled}set pixelSnappingEnabled(e){this._pixelSnappingEnabled!==e&&(this._pixelSnappingEnabled=e,this._updateMaterial())}get primitive(){return this._primitive}set primitive(e){this._primitive!==e&&(this._primitive=e,this.recreate())}get outlineSize(){return this._outlineSize}set outlineSize(e){e!==this._outlineSize&&(this._outlineSize=e,this._updateMaterial())}get outlineColor(){return this._outlineColor}set outlineColor(e){(0,a.h)(e,this._outlineColor)||((0,a.c)(this._outlineColor,e),this._updateMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.recreateGeometry()}_updateMaterial(){this._material&&this._material.setParameters(this._materialParameters)}_updateSizeAttribute(){const e=this.object;if(null==e)return;const t=e.geometries[0];if(null==t)return;const i=t.getMutableAttribute(f.T.SIZE).data,n=this._geometrySize;i[0]=n,i[1]=n,e.geometryVertexAttributeUpdated(e.geometries[0],f.T.SIZE)}get _materialParameters(){var e;return{color:this._color,textureIsSignedDistanceField:!0,sampleSignedDistanceFieldTexelCenter:(0,_.Rg)(this._primitive),distanceFieldBoundingBox:v,occlusionTest:!1,outlineColor:this._outlineColor,outlineSize:this._outlineSize,textureId:null===(e=this._texture)||void 0===e?void 0:e.id,polygonOffset:!1,shaderPolygonOffset:0,drawInSecondSlot:!0,depthEnabled:!1,pixelSnappingEnabled:this.pixelSnappingEnabled,isDecoration:this.isDecoration}}get _geometrySize(){return this._size/b}createExternalResources(){this._texture=(0,_.cU)(this._primitive,this._preferredTextureSize),this._material=new m.A(this._materialParameters);const e=this.view._stage;this._texture.load(e.renderView.renderingContext),e.add(this._texture)}destroyExternalResources(){this._texture&&(this.view._stage.remove(this._texture),this._texture.dispose(),this._texture=null),this._material=null}createGeometries(e){const t=this._createRenderGeometry();null!=t&&e.addGeometry(t)}forEachExternalMaterial(e){this._material&&e(this._material)}get _preferredTextureSize(){return(0,n.uZ)(2*this._geometrySize,16,128)}calculateMapBounds(e){var t;const i=null===(t=this.object)||void 0===t?void 0:t.geometries[0];if(!i)return!1;const n=i.attributes.get(f.T.POSITION);return(0,o.S)(n.data,this.view.renderCoordsHelper.spatialReference,x,this.view.spatialReference),(0,c.G1)(e,x),!0}_createRenderGeometry(){const{geometry:e,_material:t}=this;if(null==e||null==t)return null;const{renderCoordsHelper:i,elevationProvider:n}=this.view,r=(0,u.w7)(e,n,p.o.fromElevationInfo(this.elevationInfo),i),a=(0,s.s)(h.WM.get(),e.x,e.y,r),l=h.WM.get();(0,o.S)(a,e.spatialReference,l,i.spatialReference);const c=this._geometrySize;return(0,g.dV)(t,null,l,null,[c,c],[0,0,0,1])}}const b=_.hy,v=[b/2,b/2,1-b/2,1-b/2],x=(0,r.c)()},8084:(e,t,i)=>{i.d(t,{j:()=>m});var n,s,r,a,l,o,c=i(30168),h=i(21002),d=i(96415),u=i(82999),p=i(49450),_=i(58406),g=i(98634),f=i(19253);function m(e,t){const i=e.fragment;i.include(h.S),e.include(d.GZ),i.uniforms.add(new _.p("globalAlpha",(e=>e.globalAlpha)),new p.J("glowColor",(e=>e.glowColor)),new _.p("glowWidth",((e,t)=>e.glowWidth*t.camera.pixelRatio)),new _.p("glowFalloff",(e=>e.glowFalloff)),new p.J("innerColor",(e=>e.innerColor)),new _.p("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio)),new f.A("depthMap",((e,t)=>{var i;return null===(i=t.linearDepth)||void 0===i?void 0:i.colorTexture})),new u.A("nearFar",((e,t)=>t.camera.nearFar)),new f.A("frameColor",((e,t)=>t.mainColor))),i.code.add((0,g.H)(n||(n=(0,c.Z)(["vec4 blendPremultiplied(vec4 source, vec4 dest) {\nfloat oneMinusSourceAlpha = 1.0 - source.a;\nreturn vec4(\nsource.rgb + dest.rgb * oneMinusSourceAlpha,\nsource.a + dest.a * oneMinusSourceAlpha\n);\n}"])))),i.code.add((0,g.H)(s||(s=(0,c.Z)(["vec4 premultipliedColor(vec3 rgb, float alpha) {\nreturn vec4(rgb * alpha, alpha);\n}"])))),i.code.add((0,g.H)(r||(r=(0,c.Z)(["vec4 laserlineProfile(float dist) {\nif (dist > glowWidth) {\nreturn vec4(0.0);\n}\nfloat innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));\nfloat glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);\nreturn blendPremultiplied(\npremultipliedColor(innerColor, innerAlpha),\npremultipliedColor(glowColor, glowAlpha)\n);\n}"])))),i.code.add((0,g.H)(a||(a=(0,c.Z)(["bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {\nfloat depth = linearDepthFromTexture(depthMap, uv, nearFar);\nif (-depth == nearFar[0]) {\nreturn false;\n}\npos = reconstructPosition(gl_FragCoord.xy, depth);\nnormal = normalize(cross(dFdx(pos), dFdy(pos)));\nfloat ddepth = fwidth(depth);\ndepthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);\nreturn true;\n}"])))),t.contrastControlEnabled?(i.uniforms.add(new _.p("globalAlphaContrastBoost",(e=>null!=e.globalAlphaContrastBoost?e.globalAlphaContrastBoost:1))),i.code.add((0,g.H)(l||(l=(0,c.Z)(["float rgbToLuminance(vec3 color) {\nreturn dot(vec3(0.2126, 0.7152, 0.0722), color);\n}\nvec4 laserlineOutput(vec4 color) {\nfloat backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);\nfloat alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);\nreturn color * alpha;\n}"]))))):i.code.add((0,g.H)(o||(o=(0,c.Z)(["vec4 laserlineOutput(vec4 color) {\nreturn color * globalAlpha;\n}"]))))}}}]);
//# sourceMappingURL=3762.08caefe3.chunk.js.map