/*! For license information please see 3580.7c9d4d77.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmmsp_tbm=self.webpackChunkmmsp_tbm||[]).push([[3580],{93580:(e,t,i)=>{i.r(t),i.d(t,{CalciteColorPickerSwatch:()=>s,defineCustomElement:()=>c});var r=i(97446);const s=r.C,c=r.d},97446:(e,t,i)=>{i.d(t,{C:()=>p,d:()=>w});var r=i(51554),s=i(56760),c=i(92358),l=i(79730);const n="swatch",h="swatch--no-color",o="checker",a="rgba(0, 0, 0, 0.3)",d="rgba(255, 255, 255, 0.15)",u={squareSize:4,size:8},p=(0,r.GH)(class extends r.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.active=!1,this.color=void 0,this.scale="m"}handleColorChange(e){this.internalColor=e?(0,s.c)(e):null}componentWillLoad(){this.handleColorChange(this.color)}render(){const e=!this.internalColor,t={[n]:!0,[h]:e};return(0,r.h)("svg",{class:t,xmlns:"http://www.w3.org/2000/svg"},this.renderSwatch())}renderSwatch(){const{active:e,el:t,internalColor:i}=this,s=e?"100%":"0",n={height:"100%",rx:s,stroke:"light"===(0,c.r)(t)?a:d,"stroke-width":"2",width:"100%"};if(!i)return(0,r.h)(r.HY,null,(0,r.h)("clipPath",{id:"shape"},(0,r.h)("rect",{height:"100%",rx:s,width:"100%"})),(0,r.h)("rect",{"clip-path":"inset(0 round ".concat(s,")"),rx:s,...n}),(0,r.h)("line",{"clip-path":"url(#shape)","stroke-width":"3",x1:"100%",x2:"0",y1:"0",y2:"100%"}));const h=i.alpha(),p=(0,l.h)(i),w=(0,l.h)(i,h<1);return(0,r.h)(r.HY,null,(0,r.h)("title",null,w),(0,r.h)("defs",null,(0,r.h)("pattern",{height:u.size,id:"checker",patternUnits:"userSpaceOnUse",width:u.size,x:"0",y:"0"},(0,r.h)("rect",{class:o,height:u.squareSize,width:u.squareSize,x:"0",y:"0"}),(0,r.h)("rect",{class:o,height:u.squareSize,width:u.squareSize,x:u.squareSize,y:u.squareSize}))),(0,r.h)("rect",{fill:"url(#checker)",height:"100%",rx:s,width:"100%"}),(0,r.h)("rect",{fill:p,style:{"clip-path":h<1?"polygon(100% 0, 0 0, 0 100%)":"inset(0 round ".concat(s,")")},...n}),h<1?(0,r.h)("rect",{fill:w,key:"opacity-fill",style:{"clip-path":"polygon(100% 0, 100% 100%, 0 100%)"},...n}):null)}get el(){return this}static get watchers(){return{color:["handleColorChange"]}}static get style(){return":host{position:relative;display:inline-flex}:host([scale=s]){block-size:1.25rem;inline-size:1.25rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem}.swatch{overflow:hidden;block-size:inherit;inline-size:inherit}.swatch rect{transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.swatch--no-color rect{fill:var(--calcite-ui-foreground-1)}.swatch--no-color line{stroke:var(--calcite-ui-danger)}.checker{fill:#cacaca}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-color-picker-swatch",{active:[516],color:[1],scale:[513]}]);function w(){if("undefined"===typeof customElements)return;["calcite-color-picker-swatch"].forEach((e=>{if("calcite-color-picker-swatch"===e)customElements.get(e)||customElements.define(e,p)}))}w()}}]);
//# sourceMappingURL=3580.7c9d4d77.chunk.js.map