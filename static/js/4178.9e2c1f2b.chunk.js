"use strict";(self.webpackChunkmmsp_tbm=self.webpackChunkmmsp_tbm||[]).push([[4178],{84178:(n,e,t)=>{t.r(e),t.d(e,{buffer:()=>z,changeDefaultSpatialReferenceTolerance:()=>Y,clearDefaultSpatialReferenceTolerance:()=>$,clip:()=>w,contains:()=>g,convexHull:()=>N,crosses:()=>h,cut:()=>m,densify:()=>W,difference:()=>k,disjoint:()=>O,distance:()=>v,equals:()=>S,extendedSpatialReferenceInfo:()=>y,flipHorizontal:()=>B,flipVertical:()=>G,generalize:()=>_,geodesicArea:()=>Q,geodesicBuffer:()=>C,geodesicDensify:()=>F,geodesicLength:()=>U,intersect:()=>T,intersectLinesToPoints:()=>X,intersects:()=>A,isSimple:()=>D,nearestCoordinate:()=>H,nearestVertex:()=>I,nearestVertices:()=>P,offset:()=>E,overlaps:()=>b,planarArea:()=>K,planarLength:()=>M,relate:()=>Z,rotate:()=>q,simplify:()=>J,symmetricDifference:()=>L,touches:()=>R,union:()=>V,within:()=>x});var r=t(1413),i=(t(59486),t(70431)),a=t(848),c=t(77981);function o(n){var e;return Array.isArray(n)?null===(e=n[0])||void 0===e?void 0:e.spatialReference:null===n||void 0===n?void 0:n.spatialReference}function u(n){return n?Array.isArray(n)?n.map(u):n.toJSON?n.toJSON():n:n}function s(n){return Array.isArray(n)?n.map((n=>(0,c.im)(n))):(0,c.im)(n)}let f;async function l(){return f||(f=(0,i.bA)("geometryEngineWorker",{strategy:"distributed"})),f}async function p(n,e){return(await l()).invoke("executeGEOperation",{operation:n,parameters:u(e)})}async function d(n,e){const t=await l();return Promise.all(t.broadcast("executeGEOperation",{operation:n,parameters:u(e)}))}function y(n){return p("extendedSpatialReferenceInfo",[n])}async function w(n,e){return s(await p("clip",[o(n),n,e]))}async function m(n,e){return s(await p("cut",[o(n),n,e]))}function g(n,e){return p("contains",[o(n),n,e])}function h(n,e){return p("crosses",[o(n),n,e])}function v(n,e,t){return p("distance",[o(n),n,e,t])}function S(n,e){return p("equals",[o(n),n,e])}function A(n,e){return p("intersects",[o(n),n,e])}function R(n,e){return p("touches",[o(n),n,e])}function x(n,e){return p("within",[o(n),n,e])}function O(n,e){return p("disjoint",[o(n),n,e])}function b(n,e){return p("overlaps",[o(n),n,e])}function Z(n,e,t){return p("relate",[o(n),n,e,t])}function D(n){return p("isSimple",[o(n),n])}async function J(n){return s(await p("simplify",[o(n),n]))}async function N(n){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return s(await p("convexHull",[o(n),n,e]))}async function k(n,e){return s(await p("difference",[o(n),n,e]))}async function L(n,e){return s(await p("symmetricDifference",[o(n),n,e]))}async function T(n,e){return s(await p("intersect",[o(n),n,e]))}async function V(n){const e=function(n,e){let t;return Array.isArray(n)?t=n:(t=[],t.push(n),null!=e&&t.push(e)),t}(n,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null);return s(await p("union",[o(e),e]))}async function E(n,e,t,r,i,a){return s(await p("offset",[o(n),n,e,t,r,i,a]))}async function z(n,e,t){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=[o(n),n,e,t,r];return s(await p("buffer",i))}async function C(n,e,t,r,i,a){const c=[o(n),n,e,t,r,i,a];return s(await p("geodesicBuffer",c))}async function H(n,e){let t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const i=await p("nearestCoordinate",[o(n),n,e,t]);return(0,r.Z)((0,r.Z)({},i),{},{coordinate:a.Z.fromJSON(i.coordinate)})}async function I(n,e){const t=await p("nearestVertex",[o(n),n,e]);return(0,r.Z)((0,r.Z)({},t),{},{coordinate:a.Z.fromJSON(t.coordinate)})}async function P(n,e,t,i){return(await p("nearestVertices",[o(n),n,e,t,i])).map((n=>(0,r.Z)((0,r.Z)({},n),{},{coordinate:a.Z.fromJSON(n.coordinate)})))}function j(n){var e;return"xmin"in n?n.center:"x"in n?n:null===(e=n.extent)||void 0===e?void 0:e.center}async function q(n,e,t){var r;if(null==n)throw new nn;const i=n.spatialReference;if(null==(t=null!==(r=t)&&void 0!==r?r:j(n)))throw new nn;const a=n.constructor.fromJSON(await p("rotate",[i,n,e,t]));return a.spatialReference=i,a}async function B(n,e){var t;if(null==n)throw new nn;const r=n.spatialReference;if(null==(e=null!==(t=e)&&void 0!==t?t:j(n)))throw new nn;const i=n.constructor.fromJSON(await p("flipHorizontal",[r,n,e]));return i.spatialReference=r,i}async function G(n,e){var t;if(null==n)throw new nn;const r=n.spatialReference;if(null==(e=null!==(t=e)&&void 0!==t?t:j(n)))throw new nn;const i=n.constructor.fromJSON(await p("flipVertical",[r,n,e]));return i.spatialReference=r,i}async function _(n,e,t,r){return s(await p("generalize",[o(n),n,e,t,r]))}async function W(n,e,t){return s(await p("densify",[o(n),n,e,t]))}async function F(n,e,t){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return s(await p("geodesicDensify",[o(n),n,e,t,r]))}function K(n,e){return p("planarArea",[o(n),n,e])}function M(n,e){return p("planarLength",[o(n),n,e])}function Q(n,e,t){return p("geodesicArea",[o(n),n,e,t])}function U(n,e,t){return p("geodesicLength",[o(n),n,e,t])}async function X(n,e){return s(await p("intersectLinesToPoints",[o(n),n,e]))}async function Y(n,e){await d("changeDefaultSpatialReferenceTolerance",[n,e])}async function $(n){await d("clearDefaultSpatialReferenceTolerance",[n])}class nn extends Error{constructor(){super("Illegal Argument Exception")}}}}]);
//# sourceMappingURL=4178.9e2c1f2b.chunk.js.map