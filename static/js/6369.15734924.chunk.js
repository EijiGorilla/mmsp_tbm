/*! For license information please see 6369.15734924.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmmsp_tbm=self.webpackChunkmmsp_tbm||[]).push([[6369],{26369:(e,t,i)=>{i.r(t),i.d(t,{CalciteSelect:()=>g,defineCustomElement:()=>E});var n=i(51554),l=i(92358),c=i(85955),a=i(13160),s=i(74310),o=i(47242),r=i(72021),d=i(64044),h=i(57601);const p="icon",u="icon-container",m="select";function v(e){return"CALCITE-OPTION"===e.tagName}const b=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteSelectChange=(0,n.yM)(this,"calciteSelectChange",6),this.componentToNativeEl=new Map,this.mutationObserver=(0,r.c)("mutation",(()=>this.populateInternalSelect())),this.handleInternalSelectChange=()=>{const e=this.selectEl.selectedOptions[0];this.selectFromNativeOption(e),requestAnimationFrame((()=>this.emitChangeEvent()))},this.populateInternalSelect=()=>{const e=Array.from(this.el.children).filter((e=>"CALCITE-OPTION"===e.tagName||"CALCITE-OPTION-GROUP"===e.tagName));this.clearInternalSelect(),e.forEach((e=>{var t;return null===(t=this.selectEl)||void 0===t?void 0:t.append(this.toNativeElement(e))}))},this.storeSelectRef=e=>{this.selectEl=e,this.populateInternalSelect();const t=this.selectEl.selectedOptions[0];this.selectFromNativeOption(t)},this.emitChangeEvent=()=>{this.calciteSelectChange.emit()},this.disabled=!1,this.form=void 0,this.label=void 0,this.name=void 0,this.required=!1,this.scale="m",this.value=null,this.selectedOption=void 0,this.width="auto"}valueHandler(e){this.el.querySelectorAll("calcite-option").forEach((t=>t.selected=t.value===e))}selectedOptionHandler(e){this.value=null===e||void 0===e?void 0:e.value}connectedCallback(){var e;const{el:t}=this;null===(e=this.mutationObserver)||void 0===e||e.observe(t,{subtree:!0,childList:!0}),(0,a.c)(this),(0,s.c)(this),(0,c.c)(this)}disconnectedCallback(){var e;null===(e=this.mutationObserver)||void 0===e||e.disconnect(),(0,a.d)(this),(0,s.d)(this),(0,c.d)(this)}componentWillLoad(){(0,o.a)(this)}componentDidLoad(){var e,t;(0,o.s)(this),(0,c.a)(this,null!==(e=null===(t=this.selectedOption)||void 0===t?void 0:t.value)&&void 0!==e?e:"")}componentDidRender(){(0,a.u)(this)}async setFocus(){await(0,o.c)(this),(0,l.k)(this.selectEl)}handleOptionOrGroupChange(e){e.stopPropagation();const t=e.target,i=this.componentToNativeEl.get(t);i&&(this.updateNativeElement(t,i),v(t)&&t.selected&&(this.deselectAllExcept(t),this.selectedOption=t))}onLabelClick(){this.setFocus()}updateNativeElement(e,t){if(t.disabled=e.disabled,t.label=e.label,v(e)){const i=t;i.selected=e.selected,i.value=e.value,i.innerText=e.label}}clearInternalSelect(){this.componentToNativeEl.forEach((e=>e.remove())),this.componentToNativeEl.clear()}selectFromNativeOption(e){if(!e)return;let t;this.componentToNativeEl.forEach(((i,n)=>{v(n)&&i===e&&(n.selected=!0,t=n,this.deselectAllExcept(n))})),t&&(this.selectedOption=t)}toNativeElement(e){if(v(e)){const t=document.createElement("option");return this.updateNativeElement(e,t),this.componentToNativeEl.set(e,t),t}if(function(e){return"CALCITE-OPTION-GROUP"===e.tagName}(e)){const t=document.createElement("optgroup");return this.updateNativeElement(e,t),Array.from(e.children).forEach((i=>{const n=this.toNativeElement(i);t.append(n),this.componentToNativeEl.set(e,n)})),this.componentToNativeEl.set(e,t),t}throw new Error("unsupported element child provided")}deselectAllExcept(e){this.el.querySelectorAll("calcite-option").forEach((t=>{t!==e&&(t.selected=!1)}))}renderChevron(){return(0,n.h)("div",{class:u},(0,n.h)("calcite-icon",{class:p,icon:"chevron-down",scale:(0,d.g)(this.scale)}))}render(){return(0,n.h)(n.HY,null,(0,n.h)("select",{"aria-label":(0,s.g)(this),class:m,disabled:this.disabled,onChange:this.handleInternalSelectChange,ref:this.storeSelectRef},(0,n.h)("slot",null)),this.renderChevron(),(0,n.h)(c.H,{component:this}))}get el(){return this}static get watchers(){return{value:["valueHandler"],selectedOption:["selectedOptionHandler"]}}static get style(){return":host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;align-items:stretch;inline-size:var(--select-width)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){block-size:1.5rem;--calcite-select-font-size:var(--calcite-font-size--2);--calcite-select-spacing-inline:0.5rem 2rem}:host([scale=s]) .icon-container{padding-inline:0.5rem}:host([scale=m]){block-size:2rem;--calcite-select-font-size:var(--calcite-font-size--1);--calcite-select-spacing-inline:0.75rem 2.5rem}:host([scale=m]) .icon-container{padding-inline:0.75rem}:host([scale=l]){block-size:44px;--calcite-select-font-size:var(--calcite-font-size-0);--calcite-select-spacing-inline:1rem 3rem}:host([scale=l]) .icon-container{padding-inline:1rem}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}.select{margin:0px;box-sizing:border-box;inline-size:100%;cursor:pointer;-webkit-appearance:none;appearance:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);font-family:inherit;color:var(--calcite-ui-text-2);outline-color:transparent;font-size:var(--calcite-select-font-size);padding-inline:var(--calcite-select-spacing-inline);border-inline-end-width:0px}.select:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.select:hover{background-color:var(--calcite-ui-foreground-2)}select:disabled{border-color:var(--calcite-ui-border-input);--tw-bg-opacity:1}.icon-container{pointer-events:none;position:absolute;inset-block:0px;display:flex;align-items:center;border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:transparent;color:var(--calcite-ui-text-2);inset-inline-end:0px;border-inline-width:0px 1px}.select:focus~.icon-container{border-color:transparent}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-select",{disabled:[516],form:[513],label:[1],name:[513],required:[516],scale:[513],value:[1025],selectedOption:[1040],width:[513],setFocus:[64]},[[0,"calciteInternalOptionChange","handleOptionOrGroupChange"],[0,"calciteInternalOptionGroupChange","handleOptionOrGroupChange"]]]);function f(){if("undefined"===typeof customElements)return;["calcite-select","calcite-icon"].forEach((e=>{switch(e){case"calcite-select":customElements.get(e)||customElements.define(e,b);break;case"calcite-icon":customElements.get(e)||(0,h.d)()}}))}f();const g=b,E=f}}]);
//# sourceMappingURL=6369.15734924.chunk.js.map