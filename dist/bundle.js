/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@xterm/xterm/css/xterm.css":
/*!*************************************************!*\
  !*** ./node_modules/@xterm/xterm/css/xterm.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_xterm_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js!./xterm.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@xterm/xterm/css/xterm.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_xterm_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_xterm_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_xterm_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_xterm_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@xterm/xterm/lib/xterm.js":
/*!************************************************!*\
  !*** ./node_modules/@xterm/xterm/lib/xterm.js ***!
  \************************************************/
/***/ ((module) => {

!function(e,t){if(true)module.exports=t();else { var s, i; }}(globalThis,(()=>(()=>{"use strict";var e={4567:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.AccessibilityManager=void 0;const n=i(9042),o=i(9924),a=i(844),h=i(4725),c=i(2585),l=i(3656);let d=t.AccessibilityManager=class extends a.Disposable{constructor(e,t,i,s){super(),this._terminal=e,this._coreBrowserService=i,this._renderService=s,this._rowColumns=new WeakMap,this._liveRegionLineCount=0,this._charsToConsume=[],this._charsToAnnounce="",this._accessibilityContainer=this._coreBrowserService.mainDocument.createElement("div"),this._accessibilityContainer.classList.add("xterm-accessibility"),this._rowContainer=this._coreBrowserService.mainDocument.createElement("div"),this._rowContainer.setAttribute("role","list"),this._rowContainer.classList.add("xterm-accessibility-tree"),this._rowElements=[];for(let e=0;e<this._terminal.rows;e++)this._rowElements[e]=this._createAccessibilityTreeNode(),this._rowContainer.appendChild(this._rowElements[e]);if(this._topBoundaryFocusListener=e=>this._handleBoundaryFocus(e,0),this._bottomBoundaryFocusListener=e=>this._handleBoundaryFocus(e,1),this._rowElements[0].addEventListener("focus",this._topBoundaryFocusListener),this._rowElements[this._rowElements.length-1].addEventListener("focus",this._bottomBoundaryFocusListener),this._refreshRowsDimensions(),this._accessibilityContainer.appendChild(this._rowContainer),this._liveRegion=this._coreBrowserService.mainDocument.createElement("div"),this._liveRegion.classList.add("live-region"),this._liveRegion.setAttribute("aria-live","assertive"),this._accessibilityContainer.appendChild(this._liveRegion),this._liveRegionDebouncer=this.register(new o.TimeBasedDebouncer(this._renderRows.bind(this))),!this._terminal.element)throw new Error("Cannot enable accessibility before Terminal.open");this._terminal.element.insertAdjacentElement("afterbegin",this._accessibilityContainer),this.register(this._terminal.onResize((e=>this._handleResize(e.rows)))),this.register(this._terminal.onRender((e=>this._refreshRows(e.start,e.end)))),this.register(this._terminal.onScroll((()=>this._refreshRows()))),this.register(this._terminal.onA11yChar((e=>this._handleChar(e)))),this.register(this._terminal.onLineFeed((()=>this._handleChar("\n")))),this.register(this._terminal.onA11yTab((e=>this._handleTab(e)))),this.register(this._terminal.onKey((e=>this._handleKey(e.key)))),this.register(this._terminal.onBlur((()=>this._clearLiveRegion()))),this.register(this._renderService.onDimensionsChange((()=>this._refreshRowsDimensions()))),this.register((0,l.addDisposableDomListener)(document,"selectionchange",(()=>this._handleSelectionChange()))),this.register(this._coreBrowserService.onDprChange((()=>this._refreshRowsDimensions()))),this._refreshRows(),this.register((0,a.toDisposable)((()=>{this._accessibilityContainer.remove(),this._rowElements.length=0})))}_handleTab(e){for(let t=0;t<e;t++)this._handleChar(" ")}_handleChar(e){this._liveRegionLineCount<21&&(this._charsToConsume.length>0?this._charsToConsume.shift()!==e&&(this._charsToAnnounce+=e):this._charsToAnnounce+=e,"\n"===e&&(this._liveRegionLineCount++,21===this._liveRegionLineCount&&(this._liveRegion.textContent+=n.tooMuchOutput)))}_clearLiveRegion(){this._liveRegion.textContent="",this._liveRegionLineCount=0}_handleKey(e){this._clearLiveRegion(),/\p{Control}/u.test(e)||this._charsToConsume.push(e)}_refreshRows(e,t){this._liveRegionDebouncer.refresh(e,t,this._terminal.rows)}_renderRows(e,t){const i=this._terminal.buffer,s=i.lines.length.toString();for(let r=e;r<=t;r++){const e=i.lines.get(i.ydisp+r),t=[],n=e?.translateToString(!0,void 0,void 0,t)||"",o=(i.ydisp+r+1).toString(),a=this._rowElements[r];a&&(0===n.length?(a.innerText=" ",this._rowColumns.set(a,[0,1])):(a.textContent=n,this._rowColumns.set(a,t)),a.setAttribute("aria-posinset",o),a.setAttribute("aria-setsize",s))}this._announceCharacters()}_announceCharacters(){0!==this._charsToAnnounce.length&&(this._liveRegion.textContent+=this._charsToAnnounce,this._charsToAnnounce="")}_handleBoundaryFocus(e,t){const i=e.target,s=this._rowElements[0===t?1:this._rowElements.length-2];if(i.getAttribute("aria-posinset")===(0===t?"1":`${this._terminal.buffer.lines.length}`))return;if(e.relatedTarget!==s)return;let r,n;if(0===t?(r=i,n=this._rowElements.pop(),this._rowContainer.removeChild(n)):(r=this._rowElements.shift(),n=i,this._rowContainer.removeChild(r)),r.removeEventListener("focus",this._topBoundaryFocusListener),n.removeEventListener("focus",this._bottomBoundaryFocusListener),0===t){const e=this._createAccessibilityTreeNode();this._rowElements.unshift(e),this._rowContainer.insertAdjacentElement("afterbegin",e)}else{const e=this._createAccessibilityTreeNode();this._rowElements.push(e),this._rowContainer.appendChild(e)}this._rowElements[0].addEventListener("focus",this._topBoundaryFocusListener),this._rowElements[this._rowElements.length-1].addEventListener("focus",this._bottomBoundaryFocusListener),this._terminal.scrollLines(0===t?-1:1),this._rowElements[0===t?1:this._rowElements.length-2].focus(),e.preventDefault(),e.stopImmediatePropagation()}_handleSelectionChange(){if(0===this._rowElements.length)return;const e=document.getSelection();if(!e)return;if(e.isCollapsed)return void(this._rowContainer.contains(e.anchorNode)&&this._terminal.clearSelection());if(!e.anchorNode||!e.focusNode)return void console.error("anchorNode and/or focusNode are null");let t={node:e.anchorNode,offset:e.anchorOffset},i={node:e.focusNode,offset:e.focusOffset};if((t.node.compareDocumentPosition(i.node)&Node.DOCUMENT_POSITION_PRECEDING||t.node===i.node&&t.offset>i.offset)&&([t,i]=[i,t]),t.node.compareDocumentPosition(this._rowElements[0])&(Node.DOCUMENT_POSITION_CONTAINED_BY|Node.DOCUMENT_POSITION_FOLLOWING)&&(t={node:this._rowElements[0].childNodes[0],offset:0}),!this._rowContainer.contains(t.node))return;const s=this._rowElements.slice(-1)[0];if(i.node.compareDocumentPosition(s)&(Node.DOCUMENT_POSITION_CONTAINED_BY|Node.DOCUMENT_POSITION_PRECEDING)&&(i={node:s,offset:s.textContent?.length??0}),!this._rowContainer.contains(i.node))return;const r=({node:e,offset:t})=>{const i=e instanceof Text?e.parentNode:e;let s=parseInt(i?.getAttribute("aria-posinset"),10)-1;if(isNaN(s))return console.warn("row is invalid. Race condition?"),null;const r=this._rowColumns.get(i);if(!r)return console.warn("columns is null. Race condition?"),null;let n=t<r.length?r[t]:r.slice(-1)[0]+1;return n>=this._terminal.cols&&(++s,n=0),{row:s,column:n}},n=r(t),o=r(i);if(n&&o){if(n.row>o.row||n.row===o.row&&n.column>=o.column)throw new Error("invalid range");this._terminal.select(n.column,n.row,(o.row-n.row)*this._terminal.cols-n.column+o.column)}}_handleResize(e){this._rowElements[this._rowElements.length-1].removeEventListener("focus",this._bottomBoundaryFocusListener);for(let e=this._rowContainer.children.length;e<this._terminal.rows;e++)this._rowElements[e]=this._createAccessibilityTreeNode(),this._rowContainer.appendChild(this._rowElements[e]);for(;this._rowElements.length>e;)this._rowContainer.removeChild(this._rowElements.pop());this._rowElements[this._rowElements.length-1].addEventListener("focus",this._bottomBoundaryFocusListener),this._refreshRowsDimensions()}_createAccessibilityTreeNode(){const e=this._coreBrowserService.mainDocument.createElement("div");return e.setAttribute("role","listitem"),e.tabIndex=-1,this._refreshRowDimensions(e),e}_refreshRowsDimensions(){if(this._renderService.dimensions.css.cell.height){this._accessibilityContainer.style.width=`${this._renderService.dimensions.css.canvas.width}px`,this._rowElements.length!==this._terminal.rows&&this._handleResize(this._terminal.rows);for(let e=0;e<this._terminal.rows;e++)this._refreshRowDimensions(this._rowElements[e])}}_refreshRowDimensions(e){e.style.height=`${this._renderService.dimensions.css.cell.height}px`}};t.AccessibilityManager=d=s([r(1,c.IInstantiationService),r(2,h.ICoreBrowserService),r(3,h.IRenderService)],d)},3614:(e,t)=>{function i(e){return e.replace(/\r?\n/g,"\r")}function s(e,t){return t?"[200~"+e+"[201~":e}function r(e,t,r,n){e=s(e=i(e),r.decPrivateModes.bracketedPasteMode&&!0!==n.rawOptions.ignoreBracketedPasteMode),r.triggerDataEvent(e,!0),t.value=""}function n(e,t,i){const s=i.getBoundingClientRect(),r=e.clientX-s.left-10,n=e.clientY-s.top-10;t.style.width="20px",t.style.height="20px",t.style.left=`${r}px`,t.style.top=`${n}px`,t.style.zIndex="1000",t.focus()}Object.defineProperty(t,"__esModule",{value:!0}),t.rightClickHandler=t.moveTextAreaUnderMouseCursor=t.paste=t.handlePasteEvent=t.copyHandler=t.bracketTextForPaste=t.prepareTextForTerminal=void 0,t.prepareTextForTerminal=i,t.bracketTextForPaste=s,t.copyHandler=function(e,t){e.clipboardData&&e.clipboardData.setData("text/plain",t.selectionText),e.preventDefault()},t.handlePasteEvent=function(e,t,i,s){e.stopPropagation(),e.clipboardData&&r(e.clipboardData.getData("text/plain"),t,i,s)},t.paste=r,t.moveTextAreaUnderMouseCursor=n,t.rightClickHandler=function(e,t,i,s,r){n(e,t,i),r&&s.rightClickSelect(e),t.value=s.selectionText,t.select()}},7239:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ColorContrastCache=void 0;const s=i(1505);t.ColorContrastCache=class{constructor(){this._color=new s.TwoKeyMap,this._css=new s.TwoKeyMap}setCss(e,t,i){this._css.set(e,t,i)}getCss(e,t){return this._css.get(e,t)}setColor(e,t,i){this._color.set(e,t,i)}getColor(e,t){return this._color.get(e,t)}clear(){this._color.clear(),this._css.clear()}}},3656:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addDisposableDomListener=void 0,t.addDisposableDomListener=function(e,t,i,s){e.addEventListener(t,i,s);let r=!1;return{dispose:()=>{r||(r=!0,e.removeEventListener(t,i,s))}}}},3551:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.Linkifier=void 0;const n=i(3656),o=i(8460),a=i(844),h=i(2585),c=i(4725);let l=t.Linkifier=class extends a.Disposable{get currentLink(){return this._currentLink}constructor(e,t,i,s,r){super(),this._element=e,this._mouseService=t,this._renderService=i,this._bufferService=s,this._linkProviderService=r,this._linkCacheDisposables=[],this._isMouseOut=!0,this._wasResized=!1,this._activeLine=-1,this._onShowLinkUnderline=this.register(new o.EventEmitter),this.onShowLinkUnderline=this._onShowLinkUnderline.event,this._onHideLinkUnderline=this.register(new o.EventEmitter),this.onHideLinkUnderline=this._onHideLinkUnderline.event,this.register((0,a.getDisposeArrayDisposable)(this._linkCacheDisposables)),this.register((0,a.toDisposable)((()=>{this._lastMouseEvent=void 0,this._activeProviderReplies?.clear()}))),this.register(this._bufferService.onResize((()=>{this._clearCurrentLink(),this._wasResized=!0}))),this.register((0,n.addDisposableDomListener)(this._element,"mouseleave",(()=>{this._isMouseOut=!0,this._clearCurrentLink()}))),this.register((0,n.addDisposableDomListener)(this._element,"mousemove",this._handleMouseMove.bind(this))),this.register((0,n.addDisposableDomListener)(this._element,"mousedown",this._handleMouseDown.bind(this))),this.register((0,n.addDisposableDomListener)(this._element,"mouseup",this._handleMouseUp.bind(this)))}_handleMouseMove(e){this._lastMouseEvent=e;const t=this._positionFromMouseEvent(e,this._element,this._mouseService);if(!t)return;this._isMouseOut=!1;const i=e.composedPath();for(let e=0;e<i.length;e++){const t=i[e];if(t.classList.contains("xterm"))break;if(t.classList.contains("xterm-hover"))return}this._lastBufferCell&&t.x===this._lastBufferCell.x&&t.y===this._lastBufferCell.y||(this._handleHover(t),this._lastBufferCell=t)}_handleHover(e){if(this._activeLine!==e.y||this._wasResized)return this._clearCurrentLink(),this._askForLink(e,!1),void(this._wasResized=!1);this._currentLink&&this._linkAtPosition(this._currentLink.link,e)||(this._clearCurrentLink(),this._askForLink(e,!0))}_askForLink(e,t){this._activeProviderReplies&&t||(this._activeProviderReplies?.forEach((e=>{e?.forEach((e=>{e.link.dispose&&e.link.dispose()}))})),this._activeProviderReplies=new Map,this._activeLine=e.y);let i=!1;for(const[s,r]of this._linkProviderService.linkProviders.entries())if(t){const t=this._activeProviderReplies?.get(s);t&&(i=this._checkLinkProviderResult(s,e,i))}else r.provideLinks(e.y,(t=>{if(this._isMouseOut)return;const r=t?.map((e=>({link:e})));this._activeProviderReplies?.set(s,r),i=this._checkLinkProviderResult(s,e,i),this._activeProviderReplies?.size===this._linkProviderService.linkProviders.length&&this._removeIntersectingLinks(e.y,this._activeProviderReplies)}))}_removeIntersectingLinks(e,t){const i=new Set;for(let s=0;s<t.size;s++){const r=t.get(s);if(r)for(let t=0;t<r.length;t++){const s=r[t],n=s.link.range.start.y<e?0:s.link.range.start.x,o=s.link.range.end.y>e?this._bufferService.cols:s.link.range.end.x;for(let e=n;e<=o;e++){if(i.has(e)){r.splice(t--,1);break}i.add(e)}}}}_checkLinkProviderResult(e,t,i){if(!this._activeProviderReplies)return i;const s=this._activeProviderReplies.get(e);let r=!1;for(let t=0;t<e;t++)this._activeProviderReplies.has(t)&&!this._activeProviderReplies.get(t)||(r=!0);if(!r&&s){const e=s.find((e=>this._linkAtPosition(e.link,t)));e&&(i=!0,this._handleNewLink(e))}if(this._activeProviderReplies.size===this._linkProviderService.linkProviders.length&&!i)for(let e=0;e<this._activeProviderReplies.size;e++){const s=this._activeProviderReplies.get(e)?.find((e=>this._linkAtPosition(e.link,t)));if(s){i=!0,this._handleNewLink(s);break}}return i}_handleMouseDown(){this._mouseDownLink=this._currentLink}_handleMouseUp(e){if(!this._currentLink)return;const t=this._positionFromMouseEvent(e,this._element,this._mouseService);t&&this._mouseDownLink===this._currentLink&&this._linkAtPosition(this._currentLink.link,t)&&this._currentLink.link.activate(e,this._currentLink.link.text)}_clearCurrentLink(e,t){this._currentLink&&this._lastMouseEvent&&(!e||!t||this._currentLink.link.range.start.y>=e&&this._currentLink.link.range.end.y<=t)&&(this._linkLeave(this._element,this._currentLink.link,this._lastMouseEvent),this._currentLink=void 0,(0,a.disposeArray)(this._linkCacheDisposables))}_handleNewLink(e){if(!this._lastMouseEvent)return;const t=this._positionFromMouseEvent(this._lastMouseEvent,this._element,this._mouseService);t&&this._linkAtPosition(e.link,t)&&(this._currentLink=e,this._currentLink.state={decorations:{underline:void 0===e.link.decorations||e.link.decorations.underline,pointerCursor:void 0===e.link.decorations||e.link.decorations.pointerCursor},isHovered:!0},this._linkHover(this._element,e.link,this._lastMouseEvent),e.link.decorations={},Object.defineProperties(e.link.decorations,{pointerCursor:{get:()=>this._currentLink?.state?.decorations.pointerCursor,set:e=>{this._currentLink?.state&&this._currentLink.state.decorations.pointerCursor!==e&&(this._currentLink.state.decorations.pointerCursor=e,this._currentLink.state.isHovered&&this._element.classList.toggle("xterm-cursor-pointer",e))}},underline:{get:()=>this._currentLink?.state?.decorations.underline,set:t=>{this._currentLink?.state&&this._currentLink?.state?.decorations.underline!==t&&(this._currentLink.state.decorations.underline=t,this._currentLink.state.isHovered&&this._fireUnderlineEvent(e.link,t))}}}),this._linkCacheDisposables.push(this._renderService.onRenderedViewportChange((e=>{if(!this._currentLink)return;const t=0===e.start?0:e.start+1+this._bufferService.buffer.ydisp,i=this._bufferService.buffer.ydisp+1+e.end;if(this._currentLink.link.range.start.y>=t&&this._currentLink.link.range.end.y<=i&&(this._clearCurrentLink(t,i),this._lastMouseEvent)){const e=this._positionFromMouseEvent(this._lastMouseEvent,this._element,this._mouseService);e&&this._askForLink(e,!1)}}))))}_linkHover(e,t,i){this._currentLink?.state&&(this._currentLink.state.isHovered=!0,this._currentLink.state.decorations.underline&&this._fireUnderlineEvent(t,!0),this._currentLink.state.decorations.pointerCursor&&e.classList.add("xterm-cursor-pointer")),t.hover&&t.hover(i,t.text)}_fireUnderlineEvent(e,t){const i=e.range,s=this._bufferService.buffer.ydisp,r=this._createLinkUnderlineEvent(i.start.x-1,i.start.y-s-1,i.end.x,i.end.y-s-1,void 0);(t?this._onShowLinkUnderline:this._onHideLinkUnderline).fire(r)}_linkLeave(e,t,i){this._currentLink?.state&&(this._currentLink.state.isHovered=!1,this._currentLink.state.decorations.underline&&this._fireUnderlineEvent(t,!1),this._currentLink.state.decorations.pointerCursor&&e.classList.remove("xterm-cursor-pointer")),t.leave&&t.leave(i,t.text)}_linkAtPosition(e,t){const i=e.range.start.y*this._bufferService.cols+e.range.start.x,s=e.range.end.y*this._bufferService.cols+e.range.end.x,r=t.y*this._bufferService.cols+t.x;return i<=r&&r<=s}_positionFromMouseEvent(e,t,i){const s=i.getCoords(e,t,this._bufferService.cols,this._bufferService.rows);if(s)return{x:s[0],y:s[1]+this._bufferService.buffer.ydisp}}_createLinkUnderlineEvent(e,t,i,s,r){return{x1:e,y1:t,x2:i,y2:s,cols:this._bufferService.cols,fg:r}}};t.Linkifier=l=s([r(1,c.IMouseService),r(2,c.IRenderService),r(3,h.IBufferService),r(4,c.ILinkProviderService)],l)},9042:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tooMuchOutput=t.promptLabel=void 0,t.promptLabel="Terminal input",t.tooMuchOutput="Too much output to announce, navigate to rows manually to read"},3730:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.OscLinkProvider=void 0;const n=i(511),o=i(2585);let a=t.OscLinkProvider=class{constructor(e,t,i){this._bufferService=e,this._optionsService=t,this._oscLinkService=i}provideLinks(e,t){const i=this._bufferService.buffer.lines.get(e-1);if(!i)return void t(void 0);const s=[],r=this._optionsService.rawOptions.linkHandler,o=new n.CellData,a=i.getTrimmedLength();let c=-1,l=-1,d=!1;for(let t=0;t<a;t++)if(-1!==l||i.hasContent(t)){if(i.loadCell(t,o),o.hasExtendedAttrs()&&o.extended.urlId){if(-1===l){l=t,c=o.extended.urlId;continue}d=o.extended.urlId!==c}else-1!==l&&(d=!0);if(d||-1!==l&&t===a-1){const i=this._oscLinkService.getLinkData(c)?.uri;if(i){const n={start:{x:l+1,y:e},end:{x:t+(d||t!==a-1?0:1),y:e}};let o=!1;if(!r?.allowNonHttpProtocols)try{const e=new URL(i);["http:","https:"].includes(e.protocol)||(o=!0)}catch(e){o=!0}o||s.push({text:i,range:n,activate:(e,t)=>r?r.activate(e,t,n):h(0,t),hover:(e,t)=>r?.hover?.(e,t,n),leave:(e,t)=>r?.leave?.(e,t,n)})}d=!1,o.hasExtendedAttrs()&&o.extended.urlId?(l=t,c=o.extended.urlId):(l=-1,c=-1)}}t(s)}};function h(e,t){if(confirm(`Do you want to navigate to ${t}?\n\nWARNING: This link could potentially be dangerous`)){const e=window.open();if(e){try{e.opener=null}catch{}e.location.href=t}else console.warn("Opening link blocked as opener could not be cleared")}}t.OscLinkProvider=a=s([r(0,o.IBufferService),r(1,o.IOptionsService),r(2,o.IOscLinkService)],a)},6193:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RenderDebouncer=void 0,t.RenderDebouncer=class{constructor(e,t){this._renderCallback=e,this._coreBrowserService=t,this._refreshCallbacks=[]}dispose(){this._animationFrame&&(this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0)}addRefreshCallback(e){return this._refreshCallbacks.push(e),this._animationFrame||(this._animationFrame=this._coreBrowserService.window.requestAnimationFrame((()=>this._innerRefresh()))),this._animationFrame}refresh(e,t,i){this._rowCount=i,e=void 0!==e?e:0,t=void 0!==t?t:this._rowCount-1,this._rowStart=void 0!==this._rowStart?Math.min(this._rowStart,e):e,this._rowEnd=void 0!==this._rowEnd?Math.max(this._rowEnd,t):t,this._animationFrame||(this._animationFrame=this._coreBrowserService.window.requestAnimationFrame((()=>this._innerRefresh())))}_innerRefresh(){if(this._animationFrame=void 0,void 0===this._rowStart||void 0===this._rowEnd||void 0===this._rowCount)return void this._runRefreshCallbacks();const e=Math.max(this._rowStart,0),t=Math.min(this._rowEnd,this._rowCount-1);this._rowStart=void 0,this._rowEnd=void 0,this._renderCallback(e,t),this._runRefreshCallbacks()}_runRefreshCallbacks(){for(const e of this._refreshCallbacks)e(0);this._refreshCallbacks=[]}}},3236:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Terminal=void 0;const s=i(3614),r=i(3656),n=i(3551),o=i(9042),a=i(3730),h=i(1680),c=i(3107),l=i(5744),d=i(2950),_=i(1296),u=i(428),f=i(4269),v=i(5114),p=i(8934),g=i(3230),m=i(9312),S=i(4725),C=i(6731),b=i(8055),w=i(8969),y=i(8460),E=i(844),k=i(6114),L=i(8437),D=i(2584),R=i(7399),x=i(5941),A=i(9074),B=i(2585),T=i(5435),M=i(4567),O=i(779);class P extends w.CoreTerminal{get onFocus(){return this._onFocus.event}get onBlur(){return this._onBlur.event}get onA11yChar(){return this._onA11yCharEmitter.event}get onA11yTab(){return this._onA11yTabEmitter.event}get onWillOpen(){return this._onWillOpen.event}constructor(e={}){super(e),this.browser=k,this._keyDownHandled=!1,this._keyDownSeen=!1,this._keyPressHandled=!1,this._unprocessedDeadKey=!1,this._accessibilityManager=this.register(new E.MutableDisposable),this._onCursorMove=this.register(new y.EventEmitter),this.onCursorMove=this._onCursorMove.event,this._onKey=this.register(new y.EventEmitter),this.onKey=this._onKey.event,this._onRender=this.register(new y.EventEmitter),this.onRender=this._onRender.event,this._onSelectionChange=this.register(new y.EventEmitter),this.onSelectionChange=this._onSelectionChange.event,this._onTitleChange=this.register(new y.EventEmitter),this.onTitleChange=this._onTitleChange.event,this._onBell=this.register(new y.EventEmitter),this.onBell=this._onBell.event,this._onFocus=this.register(new y.EventEmitter),this._onBlur=this.register(new y.EventEmitter),this._onA11yCharEmitter=this.register(new y.EventEmitter),this._onA11yTabEmitter=this.register(new y.EventEmitter),this._onWillOpen=this.register(new y.EventEmitter),this._setup(),this._decorationService=this._instantiationService.createInstance(A.DecorationService),this._instantiationService.setService(B.IDecorationService,this._decorationService),this._linkProviderService=this._instantiationService.createInstance(O.LinkProviderService),this._instantiationService.setService(S.ILinkProviderService,this._linkProviderService),this._linkProviderService.registerLinkProvider(this._instantiationService.createInstance(a.OscLinkProvider)),this.register(this._inputHandler.onRequestBell((()=>this._onBell.fire()))),this.register(this._inputHandler.onRequestRefreshRows(((e,t)=>this.refresh(e,t)))),this.register(this._inputHandler.onRequestSendFocus((()=>this._reportFocus()))),this.register(this._inputHandler.onRequestReset((()=>this.reset()))),this.register(this._inputHandler.onRequestWindowsOptionsReport((e=>this._reportWindowsOptions(e)))),this.register(this._inputHandler.onColor((e=>this._handleColorEvent(e)))),this.register((0,y.forwardEvent)(this._inputHandler.onCursorMove,this._onCursorMove)),this.register((0,y.forwardEvent)(this._inputHandler.onTitleChange,this._onTitleChange)),this.register((0,y.forwardEvent)(this._inputHandler.onA11yChar,this._onA11yCharEmitter)),this.register((0,y.forwardEvent)(this._inputHandler.onA11yTab,this._onA11yTabEmitter)),this.register(this._bufferService.onResize((e=>this._afterResize(e.cols,e.rows)))),this.register((0,E.toDisposable)((()=>{this._customKeyEventHandler=void 0,this.element?.parentNode?.removeChild(this.element)})))}_handleColorEvent(e){if(this._themeService)for(const t of e){let e,i="";switch(t.index){case 256:e="foreground",i="10";break;case 257:e="background",i="11";break;case 258:e="cursor",i="12";break;default:e="ansi",i="4;"+t.index}switch(t.type){case 0:const s=b.color.toColorRGB("ansi"===e?this._themeService.colors.ansi[t.index]:this._themeService.colors[e]);this.coreService.triggerDataEvent(`${D.C0.ESC}]${i};${(0,x.toRgbString)(s)}${D.C1_ESCAPED.ST}`);break;case 1:if("ansi"===e)this._themeService.modifyColors((e=>e.ansi[t.index]=b.channels.toColor(...t.color)));else{const i=e;this._themeService.modifyColors((e=>e[i]=b.channels.toColor(...t.color)))}break;case 2:this._themeService.restoreColor(t.index)}}}_setup(){super._setup(),this._customKeyEventHandler=void 0}get buffer(){return this.buffers.active}focus(){this.textarea&&this.textarea.focus({preventScroll:!0})}_handleScreenReaderModeOptionChange(e){e?!this._accessibilityManager.value&&this._renderService&&(this._accessibilityManager.value=this._instantiationService.createInstance(M.AccessibilityManager,this)):this._accessibilityManager.clear()}_handleTextAreaFocus(e){this.coreService.decPrivateModes.sendFocus&&this.coreService.triggerDataEvent(D.C0.ESC+"[I"),this.element.classList.add("focus"),this._showCursor(),this._onFocus.fire()}blur(){return this.textarea?.blur()}_handleTextAreaBlur(){this.textarea.value="",this.refresh(this.buffer.y,this.buffer.y),this.coreService.decPrivateModes.sendFocus&&this.coreService.triggerDataEvent(D.C0.ESC+"[O"),this.element.classList.remove("focus"),this._onBlur.fire()}_syncTextArea(){if(!this.textarea||!this.buffer.isCursorInViewport||this._compositionHelper.isComposing||!this._renderService)return;const e=this.buffer.ybase+this.buffer.y,t=this.buffer.lines.get(e);if(!t)return;const i=Math.min(this.buffer.x,this.cols-1),s=this._renderService.dimensions.css.cell.height,r=t.getWidth(i),n=this._renderService.dimensions.css.cell.width*r,o=this.buffer.y*this._renderService.dimensions.css.cell.height,a=i*this._renderService.dimensions.css.cell.width;this.textarea.style.left=a+"px",this.textarea.style.top=o+"px",this.textarea.style.width=n+"px",this.textarea.style.height=s+"px",this.textarea.style.lineHeight=s+"px",this.textarea.style.zIndex="-5"}_initGlobal(){this._bindKeys(),this.register((0,r.addDisposableDomListener)(this.element,"copy",(e=>{this.hasSelection()&&(0,s.copyHandler)(e,this._selectionService)})));const e=e=>(0,s.handlePasteEvent)(e,this.textarea,this.coreService,this.optionsService);this.register((0,r.addDisposableDomListener)(this.textarea,"paste",e)),this.register((0,r.addDisposableDomListener)(this.element,"paste",e)),k.isFirefox?this.register((0,r.addDisposableDomListener)(this.element,"mousedown",(e=>{2===e.button&&(0,s.rightClickHandler)(e,this.textarea,this.screenElement,this._selectionService,this.options.rightClickSelectsWord)}))):this.register((0,r.addDisposableDomListener)(this.element,"contextmenu",(e=>{(0,s.rightClickHandler)(e,this.textarea,this.screenElement,this._selectionService,this.options.rightClickSelectsWord)}))),k.isLinux&&this.register((0,r.addDisposableDomListener)(this.element,"auxclick",(e=>{1===e.button&&(0,s.moveTextAreaUnderMouseCursor)(e,this.textarea,this.screenElement)})))}_bindKeys(){this.register((0,r.addDisposableDomListener)(this.textarea,"keyup",(e=>this._keyUp(e)),!0)),this.register((0,r.addDisposableDomListener)(this.textarea,"keydown",(e=>this._keyDown(e)),!0)),this.register((0,r.addDisposableDomListener)(this.textarea,"keypress",(e=>this._keyPress(e)),!0)),this.register((0,r.addDisposableDomListener)(this.textarea,"compositionstart",(()=>this._compositionHelper.compositionstart()))),this.register((0,r.addDisposableDomListener)(this.textarea,"compositionupdate",(e=>this._compositionHelper.compositionupdate(e)))),this.register((0,r.addDisposableDomListener)(this.textarea,"compositionend",(()=>this._compositionHelper.compositionend()))),this.register((0,r.addDisposableDomListener)(this.textarea,"input",(e=>this._inputEvent(e)),!0)),this.register(this.onRender((()=>this._compositionHelper.updateCompositionElements())))}open(e){if(!e)throw new Error("Terminal requires a parent element.");if(e.isConnected||this._logService.debug("Terminal.open was called on an element that was not attached to the DOM"),this.element?.ownerDocument.defaultView&&this._coreBrowserService)return void(this.element.ownerDocument.defaultView!==this._coreBrowserService.window&&(this._coreBrowserService.window=this.element.ownerDocument.defaultView));this._document=e.ownerDocument,this.options.documentOverride&&this.options.documentOverride instanceof Document&&(this._document=this.optionsService.rawOptions.documentOverride),this.element=this._document.createElement("div"),this.element.dir="ltr",this.element.classList.add("terminal"),this.element.classList.add("xterm"),e.appendChild(this.element);const t=this._document.createDocumentFragment();this._viewportElement=this._document.createElement("div"),this._viewportElement.classList.add("xterm-viewport"),t.appendChild(this._viewportElement),this._viewportScrollArea=this._document.createElement("div"),this._viewportScrollArea.classList.add("xterm-scroll-area"),this._viewportElement.appendChild(this._viewportScrollArea),this.screenElement=this._document.createElement("div"),this.screenElement.classList.add("xterm-screen"),this.register((0,r.addDisposableDomListener)(this.screenElement,"mousemove",(e=>this.updateCursorStyle(e)))),this._helperContainer=this._document.createElement("div"),this._helperContainer.classList.add("xterm-helpers"),this.screenElement.appendChild(this._helperContainer),t.appendChild(this.screenElement),this.textarea=this._document.createElement("textarea"),this.textarea.classList.add("xterm-helper-textarea"),this.textarea.setAttribute("aria-label",o.promptLabel),k.isChromeOS||this.textarea.setAttribute("aria-multiline","false"),this.textarea.setAttribute("autocorrect","off"),this.textarea.setAttribute("autocapitalize","off"),this.textarea.setAttribute("spellcheck","false"),this.textarea.tabIndex=0,this._coreBrowserService=this.register(this._instantiationService.createInstance(v.CoreBrowserService,this.textarea,e.ownerDocument.defaultView??window,this._document??"undefined"!=typeof window?window.document:null)),this._instantiationService.setService(S.ICoreBrowserService,this._coreBrowserService),this.register((0,r.addDisposableDomListener)(this.textarea,"focus",(e=>this._handleTextAreaFocus(e)))),this.register((0,r.addDisposableDomListener)(this.textarea,"blur",(()=>this._handleTextAreaBlur()))),this._helperContainer.appendChild(this.textarea),this._charSizeService=this._instantiationService.createInstance(u.CharSizeService,this._document,this._helperContainer),this._instantiationService.setService(S.ICharSizeService,this._charSizeService),this._themeService=this._instantiationService.createInstance(C.ThemeService),this._instantiationService.setService(S.IThemeService,this._themeService),this._characterJoinerService=this._instantiationService.createInstance(f.CharacterJoinerService),this._instantiationService.setService(S.ICharacterJoinerService,this._characterJoinerService),this._renderService=this.register(this._instantiationService.createInstance(g.RenderService,this.rows,this.screenElement)),this._instantiationService.setService(S.IRenderService,this._renderService),this.register(this._renderService.onRenderedViewportChange((e=>this._onRender.fire(e)))),this.onResize((e=>this._renderService.resize(e.cols,e.rows))),this._compositionView=this._document.createElement("div"),this._compositionView.classList.add("composition-view"),this._compositionHelper=this._instantiationService.createInstance(d.CompositionHelper,this.textarea,this._compositionView),this._helperContainer.appendChild(this._compositionView),this._mouseService=this._instantiationService.createInstance(p.MouseService),this._instantiationService.setService(S.IMouseService,this._mouseService),this.linkifier=this.register(this._instantiationService.createInstance(n.Linkifier,this.screenElement)),this.element.appendChild(t);try{this._onWillOpen.fire(this.element)}catch{}this._renderService.hasRenderer()||this._renderService.setRenderer(this._createRenderer()),this.viewport=this._instantiationService.createInstance(h.Viewport,this._viewportElement,this._viewportScrollArea),this.viewport.onRequestScrollLines((e=>this.scrollLines(e.amount,e.suppressScrollEvent,1))),this.register(this._inputHandler.onRequestSyncScrollBar((()=>this.viewport.syncScrollArea()))),this.register(this.viewport),this.register(this.onCursorMove((()=>{this._renderService.handleCursorMove(),this._syncTextArea()}))),this.register(this.onResize((()=>this._renderService.handleResize(this.cols,this.rows)))),this.register(this.onBlur((()=>this._renderService.handleBlur()))),this.register(this.onFocus((()=>this._renderService.handleFocus()))),this.register(this._renderService.onDimensionsChange((()=>this.viewport.syncScrollArea()))),this._selectionService=this.register(this._instantiationService.createInstance(m.SelectionService,this.element,this.screenElement,this.linkifier)),this._instantiationService.setService(S.ISelectionService,this._selectionService),this.register(this._selectionService.onRequestScrollLines((e=>this.scrollLines(e.amount,e.suppressScrollEvent)))),this.register(this._selectionService.onSelectionChange((()=>this._onSelectionChange.fire()))),this.register(this._selectionService.onRequestRedraw((e=>this._renderService.handleSelectionChanged(e.start,e.end,e.columnSelectMode)))),this.register(this._selectionService.onLinuxMouseSelection((e=>{this.textarea.value=e,this.textarea.focus(),this.textarea.select()}))),this.register(this._onScroll.event((e=>{this.viewport.syncScrollArea(),this._selectionService.refresh()}))),this.register((0,r.addDisposableDomListener)(this._viewportElement,"scroll",(()=>this._selectionService.refresh()))),this.register(this._instantiationService.createInstance(c.BufferDecorationRenderer,this.screenElement)),this.register((0,r.addDisposableDomListener)(this.element,"mousedown",(e=>this._selectionService.handleMouseDown(e)))),this.coreMouseService.areMouseEventsActive?(this._selectionService.disable(),this.element.classList.add("enable-mouse-events")):this._selectionService.enable(),this.options.screenReaderMode&&(this._accessibilityManager.value=this._instantiationService.createInstance(M.AccessibilityManager,this)),this.register(this.optionsService.onSpecificOptionChange("screenReaderMode",(e=>this._handleScreenReaderModeOptionChange(e)))),this.options.overviewRulerWidth&&(this._overviewRulerRenderer=this.register(this._instantiationService.createInstance(l.OverviewRulerRenderer,this._viewportElement,this.screenElement))),this.optionsService.onSpecificOptionChange("overviewRulerWidth",(e=>{!this._overviewRulerRenderer&&e&&this._viewportElement&&this.screenElement&&(this._overviewRulerRenderer=this.register(this._instantiationService.createInstance(l.OverviewRulerRenderer,this._viewportElement,this.screenElement)))})),this._charSizeService.measure(),this.refresh(0,this.rows-1),this._initGlobal(),this.bindMouse()}_createRenderer(){return this._instantiationService.createInstance(_.DomRenderer,this,this._document,this.element,this.screenElement,this._viewportElement,this._helperContainer,this.linkifier)}bindMouse(){const e=this,t=this.element;function i(t){const i=e._mouseService.getMouseReportCoords(t,e.screenElement);if(!i)return!1;let s,r;switch(t.overrideType||t.type){case"mousemove":r=32,void 0===t.buttons?(s=3,void 0!==t.button&&(s=t.button<3?t.button:3)):s=1&t.buttons?0:4&t.buttons?1:2&t.buttons?2:3;break;case"mouseup":r=0,s=t.button<3?t.button:3;break;case"mousedown":r=1,s=t.button<3?t.button:3;break;case"wheel":if(e._customWheelEventHandler&&!1===e._customWheelEventHandler(t))return!1;if(0===e.viewport.getLinesScrolled(t))return!1;r=t.deltaY<0?0:1,s=4;break;default:return!1}return!(void 0===r||void 0===s||s>4)&&e.coreMouseService.triggerMouseEvent({col:i.col,row:i.row,x:i.x,y:i.y,button:s,action:r,ctrl:t.ctrlKey,alt:t.altKey,shift:t.shiftKey})}const s={mouseup:null,wheel:null,mousedrag:null,mousemove:null},n={mouseup:e=>(i(e),e.buttons||(this._document.removeEventListener("mouseup",s.mouseup),s.mousedrag&&this._document.removeEventListener("mousemove",s.mousedrag)),this.cancel(e)),wheel:e=>(i(e),this.cancel(e,!0)),mousedrag:e=>{e.buttons&&i(e)},mousemove:e=>{e.buttons||i(e)}};this.register(this.coreMouseService.onProtocolChange((e=>{e?("debug"===this.optionsService.rawOptions.logLevel&&this._logService.debug("Binding to mouse events:",this.coreMouseService.explainEvents(e)),this.element.classList.add("enable-mouse-events"),this._selectionService.disable()):(this._logService.debug("Unbinding from mouse events."),this.element.classList.remove("enable-mouse-events"),this._selectionService.enable()),8&e?s.mousemove||(t.addEventListener("mousemove",n.mousemove),s.mousemove=n.mousemove):(t.removeEventListener("mousemove",s.mousemove),s.mousemove=null),16&e?s.wheel||(t.addEventListener("wheel",n.wheel,{passive:!1}),s.wheel=n.wheel):(t.removeEventListener("wheel",s.wheel),s.wheel=null),2&e?s.mouseup||(s.mouseup=n.mouseup):(this._document.removeEventListener("mouseup",s.mouseup),s.mouseup=null),4&e?s.mousedrag||(s.mousedrag=n.mousedrag):(this._document.removeEventListener("mousemove",s.mousedrag),s.mousedrag=null)}))),this.coreMouseService.activeProtocol=this.coreMouseService.activeProtocol,this.register((0,r.addDisposableDomListener)(t,"mousedown",(e=>{if(e.preventDefault(),this.focus(),this.coreMouseService.areMouseEventsActive&&!this._selectionService.shouldForceSelection(e))return i(e),s.mouseup&&this._document.addEventListener("mouseup",s.mouseup),s.mousedrag&&this._document.addEventListener("mousemove",s.mousedrag),this.cancel(e)}))),this.register((0,r.addDisposableDomListener)(t,"wheel",(e=>{if(!s.wheel){if(this._customWheelEventHandler&&!1===this._customWheelEventHandler(e))return!1;if(!this.buffer.hasScrollback){const t=this.viewport.getLinesScrolled(e);if(0===t)return;const i=D.C0.ESC+(this.coreService.decPrivateModes.applicationCursorKeys?"O":"[")+(e.deltaY<0?"A":"B");let s="";for(let e=0;e<Math.abs(t);e++)s+=i;return this.coreService.triggerDataEvent(s,!0),this.cancel(e,!0)}return this.viewport.handleWheel(e)?this.cancel(e):void 0}}),{passive:!1})),this.register((0,r.addDisposableDomListener)(t,"touchstart",(e=>{if(!this.coreMouseService.areMouseEventsActive)return this.viewport.handleTouchStart(e),this.cancel(e)}),{passive:!0})),this.register((0,r.addDisposableDomListener)(t,"touchmove",(e=>{if(!this.coreMouseService.areMouseEventsActive)return this.viewport.handleTouchMove(e)?void 0:this.cancel(e)}),{passive:!1}))}refresh(e,t){this._renderService?.refreshRows(e,t)}updateCursorStyle(e){this._selectionService?.shouldColumnSelect(e)?this.element.classList.add("column-select"):this.element.classList.remove("column-select")}_showCursor(){this.coreService.isCursorInitialized||(this.coreService.isCursorInitialized=!0,this.refresh(this.buffer.y,this.buffer.y))}scrollLines(e,t,i=0){1===i?(super.scrollLines(e,t,i),this.refresh(0,this.rows-1)):this.viewport?.scrollLines(e)}paste(e){(0,s.paste)(e,this.textarea,this.coreService,this.optionsService)}attachCustomKeyEventHandler(e){this._customKeyEventHandler=e}attachCustomWheelEventHandler(e){this._customWheelEventHandler=e}registerLinkProvider(e){return this._linkProviderService.registerLinkProvider(e)}registerCharacterJoiner(e){if(!this._characterJoinerService)throw new Error("Terminal must be opened first");const t=this._characterJoinerService.register(e);return this.refresh(0,this.rows-1),t}deregisterCharacterJoiner(e){if(!this._characterJoinerService)throw new Error("Terminal must be opened first");this._characterJoinerService.deregister(e)&&this.refresh(0,this.rows-1)}get markers(){return this.buffer.markers}registerMarker(e){return this.buffer.addMarker(this.buffer.ybase+this.buffer.y+e)}registerDecoration(e){return this._decorationService.registerDecoration(e)}hasSelection(){return!!this._selectionService&&this._selectionService.hasSelection}select(e,t,i){this._selectionService.setSelection(e,t,i)}getSelection(){return this._selectionService?this._selectionService.selectionText:""}getSelectionPosition(){if(this._selectionService&&this._selectionService.hasSelection)return{start:{x:this._selectionService.selectionStart[0],y:this._selectionService.selectionStart[1]},end:{x:this._selectionService.selectionEnd[0],y:this._selectionService.selectionEnd[1]}}}clearSelection(){this._selectionService?.clearSelection()}selectAll(){this._selectionService?.selectAll()}selectLines(e,t){this._selectionService?.selectLines(e,t)}_keyDown(e){if(this._keyDownHandled=!1,this._keyDownSeen=!0,this._customKeyEventHandler&&!1===this._customKeyEventHandler(e))return!1;const t=this.browser.isMac&&this.options.macOptionIsMeta&&e.altKey;if(!t&&!this._compositionHelper.keydown(e))return this.options.scrollOnUserInput&&this.buffer.ybase!==this.buffer.ydisp&&this.scrollToBottom(),!1;t||"Dead"!==e.key&&"AltGraph"!==e.key||(this._unprocessedDeadKey=!0);const i=(0,R.evaluateKeyboardEvent)(e,this.coreService.decPrivateModes.applicationCursorKeys,this.browser.isMac,this.options.macOptionIsMeta);if(this.updateCursorStyle(e),3===i.type||2===i.type){const t=this.rows-1;return this.scrollLines(2===i.type?-t:t),this.cancel(e,!0)}return 1===i.type&&this.selectAll(),!!this._isThirdLevelShift(this.browser,e)||(i.cancel&&this.cancel(e,!0),!i.key||!!(e.key&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&1===e.key.length&&e.key.charCodeAt(0)>=65&&e.key.charCodeAt(0)<=90)||(this._unprocessedDeadKey?(this._unprocessedDeadKey=!1,!0):(i.key!==D.C0.ETX&&i.key!==D.C0.CR||(this.textarea.value=""),this._onKey.fire({key:i.key,domEvent:e}),this._showCursor(),this.coreService.triggerDataEvent(i.key,!0),!this.optionsService.rawOptions.screenReaderMode||e.altKey||e.ctrlKey?this.cancel(e,!0):void(this._keyDownHandled=!0))))}_isThirdLevelShift(e,t){const i=e.isMac&&!this.options.macOptionIsMeta&&t.altKey&&!t.ctrlKey&&!t.metaKey||e.isWindows&&t.altKey&&t.ctrlKey&&!t.metaKey||e.isWindows&&t.getModifierState("AltGraph");return"keypress"===t.type?i:i&&(!t.keyCode||t.keyCode>47)}_keyUp(e){this._keyDownSeen=!1,this._customKeyEventHandler&&!1===this._customKeyEventHandler(e)||(function(e){return 16===e.keyCode||17===e.keyCode||18===e.keyCode}(e)||this.focus(),this.updateCursorStyle(e),this._keyPressHandled=!1)}_keyPress(e){let t;if(this._keyPressHandled=!1,this._keyDownHandled)return!1;if(this._customKeyEventHandler&&!1===this._customKeyEventHandler(e))return!1;if(this.cancel(e),e.charCode)t=e.charCode;else if(null===e.which||void 0===e.which)t=e.keyCode;else{if(0===e.which||0===e.charCode)return!1;t=e.which}return!(!t||(e.altKey||e.ctrlKey||e.metaKey)&&!this._isThirdLevelShift(this.browser,e)||(t=String.fromCharCode(t),this._onKey.fire({key:t,domEvent:e}),this._showCursor(),this.coreService.triggerDataEvent(t,!0),this._keyPressHandled=!0,this._unprocessedDeadKey=!1,0))}_inputEvent(e){if(e.data&&"insertText"===e.inputType&&(!e.composed||!this._keyDownSeen)&&!this.optionsService.rawOptions.screenReaderMode){if(this._keyPressHandled)return!1;this._unprocessedDeadKey=!1;const t=e.data;return this.coreService.triggerDataEvent(t,!0),this.cancel(e),!0}return!1}resize(e,t){e!==this.cols||t!==this.rows?super.resize(e,t):this._charSizeService&&!this._charSizeService.hasValidSize&&this._charSizeService.measure()}_afterResize(e,t){this._charSizeService?.measure(),this.viewport?.syncScrollArea(!0)}clear(){if(0!==this.buffer.ybase||0!==this.buffer.y){this.buffer.clearAllMarkers(),this.buffer.lines.set(0,this.buffer.lines.get(this.buffer.ybase+this.buffer.y)),this.buffer.lines.length=1,this.buffer.ydisp=0,this.buffer.ybase=0,this.buffer.y=0;for(let e=1;e<this.rows;e++)this.buffer.lines.push(this.buffer.getBlankLine(L.DEFAULT_ATTR_DATA));this._onScroll.fire({position:this.buffer.ydisp,source:0}),this.viewport?.reset(),this.refresh(0,this.rows-1)}}reset(){this.options.rows=this.rows,this.options.cols=this.cols;const e=this._customKeyEventHandler;this._setup(),super.reset(),this._selectionService?.reset(),this._decorationService.reset(),this.viewport?.reset(),this._customKeyEventHandler=e,this.refresh(0,this.rows-1)}clearTextureAtlas(){this._renderService?.clearTextureAtlas()}_reportFocus(){this.element?.classList.contains("focus")?this.coreService.triggerDataEvent(D.C0.ESC+"[I"):this.coreService.triggerDataEvent(D.C0.ESC+"[O")}_reportWindowsOptions(e){if(this._renderService)switch(e){case T.WindowsOptionsReportType.GET_WIN_SIZE_PIXELS:const e=this._renderService.dimensions.css.canvas.width.toFixed(0),t=this._renderService.dimensions.css.canvas.height.toFixed(0);this.coreService.triggerDataEvent(`${D.C0.ESC}[4;${t};${e}t`);break;case T.WindowsOptionsReportType.GET_CELL_SIZE_PIXELS:const i=this._renderService.dimensions.css.cell.width.toFixed(0),s=this._renderService.dimensions.css.cell.height.toFixed(0);this.coreService.triggerDataEvent(`${D.C0.ESC}[6;${s};${i}t`)}}cancel(e,t){if(this.options.cancelEvents||t)return e.preventDefault(),e.stopPropagation(),!1}}t.Terminal=P},9924:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TimeBasedDebouncer=void 0,t.TimeBasedDebouncer=class{constructor(e,t=1e3){this._renderCallback=e,this._debounceThresholdMS=t,this._lastRefreshMs=0,this._additionalRefreshRequested=!1}dispose(){this._refreshTimeoutID&&clearTimeout(this._refreshTimeoutID)}refresh(e,t,i){this._rowCount=i,e=void 0!==e?e:0,t=void 0!==t?t:this._rowCount-1,this._rowStart=void 0!==this._rowStart?Math.min(this._rowStart,e):e,this._rowEnd=void 0!==this._rowEnd?Math.max(this._rowEnd,t):t;const s=Date.now();if(s-this._lastRefreshMs>=this._debounceThresholdMS)this._lastRefreshMs=s,this._innerRefresh();else if(!this._additionalRefreshRequested){const e=s-this._lastRefreshMs,t=this._debounceThresholdMS-e;this._additionalRefreshRequested=!0,this._refreshTimeoutID=window.setTimeout((()=>{this._lastRefreshMs=Date.now(),this._innerRefresh(),this._additionalRefreshRequested=!1,this._refreshTimeoutID=void 0}),t)}}_innerRefresh(){if(void 0===this._rowStart||void 0===this._rowEnd||void 0===this._rowCount)return;const e=Math.max(this._rowStart,0),t=Math.min(this._rowEnd,this._rowCount-1);this._rowStart=void 0,this._rowEnd=void 0,this._renderCallback(e,t)}}},1680:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.Viewport=void 0;const n=i(3656),o=i(4725),a=i(8460),h=i(844),c=i(2585);let l=t.Viewport=class extends h.Disposable{constructor(e,t,i,s,r,o,h,c){super(),this._viewportElement=e,this._scrollArea=t,this._bufferService=i,this._optionsService=s,this._charSizeService=r,this._renderService=o,this._coreBrowserService=h,this.scrollBarWidth=0,this._currentRowHeight=0,this._currentDeviceCellHeight=0,this._lastRecordedBufferLength=0,this._lastRecordedViewportHeight=0,this._lastRecordedBufferHeight=0,this._lastTouchY=0,this._lastScrollTop=0,this._wheelPartialScroll=0,this._refreshAnimationFrame=null,this._ignoreNextScrollEvent=!1,this._smoothScrollState={startTime:0,origin:-1,target:-1},this._onRequestScrollLines=this.register(new a.EventEmitter),this.onRequestScrollLines=this._onRequestScrollLines.event,this.scrollBarWidth=this._viewportElement.offsetWidth-this._scrollArea.offsetWidth||15,this.register((0,n.addDisposableDomListener)(this._viewportElement,"scroll",this._handleScroll.bind(this))),this._activeBuffer=this._bufferService.buffer,this.register(this._bufferService.buffers.onBufferActivate((e=>this._activeBuffer=e.activeBuffer))),this._renderDimensions=this._renderService.dimensions,this.register(this._renderService.onDimensionsChange((e=>this._renderDimensions=e))),this._handleThemeChange(c.colors),this.register(c.onChangeColors((e=>this._handleThemeChange(e)))),this.register(this._optionsService.onSpecificOptionChange("scrollback",(()=>this.syncScrollArea()))),setTimeout((()=>this.syncScrollArea()))}_handleThemeChange(e){this._viewportElement.style.backgroundColor=e.background.css}reset(){this._currentRowHeight=0,this._currentDeviceCellHeight=0,this._lastRecordedBufferLength=0,this._lastRecordedViewportHeight=0,this._lastRecordedBufferHeight=0,this._lastTouchY=0,this._lastScrollTop=0,this._coreBrowserService.window.requestAnimationFrame((()=>this.syncScrollArea()))}_refresh(e){if(e)return this._innerRefresh(),void(null!==this._refreshAnimationFrame&&this._coreBrowserService.window.cancelAnimationFrame(this._refreshAnimationFrame));null===this._refreshAnimationFrame&&(this._refreshAnimationFrame=this._coreBrowserService.window.requestAnimationFrame((()=>this._innerRefresh())))}_innerRefresh(){if(this._charSizeService.height>0){this._currentRowHeight=this._renderDimensions.device.cell.height/this._coreBrowserService.dpr,this._currentDeviceCellHeight=this._renderDimensions.device.cell.height,this._lastRecordedViewportHeight=this._viewportElement.offsetHeight;const e=Math.round(this._currentRowHeight*this._lastRecordedBufferLength)+(this._lastRecordedViewportHeight-this._renderDimensions.css.canvas.height);this._lastRecordedBufferHeight!==e&&(this._lastRecordedBufferHeight=e,this._scrollArea.style.height=this._lastRecordedBufferHeight+"px")}const e=this._bufferService.buffer.ydisp*this._currentRowHeight;this._viewportElement.scrollTop!==e&&(this._ignoreNextScrollEvent=!0,this._viewportElement.scrollTop=e),this._refreshAnimationFrame=null}syncScrollArea(e=!1){if(this._lastRecordedBufferLength!==this._bufferService.buffer.lines.length)return this._lastRecordedBufferLength=this._bufferService.buffer.lines.length,void this._refresh(e);this._lastRecordedViewportHeight===this._renderService.dimensions.css.canvas.height&&this._lastScrollTop===this._activeBuffer.ydisp*this._currentRowHeight&&this._renderDimensions.device.cell.height===this._currentDeviceCellHeight||this._refresh(e)}_handleScroll(e){if(this._lastScrollTop=this._viewportElement.scrollTop,!this._viewportElement.offsetParent)return;if(this._ignoreNextScrollEvent)return this._ignoreNextScrollEvent=!1,void this._onRequestScrollLines.fire({amount:0,suppressScrollEvent:!0});const t=Math.round(this._lastScrollTop/this._currentRowHeight)-this._bufferService.buffer.ydisp;this._onRequestScrollLines.fire({amount:t,suppressScrollEvent:!0})}_smoothScroll(){if(this._isDisposed||-1===this._smoothScrollState.origin||-1===this._smoothScrollState.target)return;const e=this._smoothScrollPercent();this._viewportElement.scrollTop=this._smoothScrollState.origin+Math.round(e*(this._smoothScrollState.target-this._smoothScrollState.origin)),e<1?this._coreBrowserService.window.requestAnimationFrame((()=>this._smoothScroll())):this._clearSmoothScrollState()}_smoothScrollPercent(){return this._optionsService.rawOptions.smoothScrollDuration&&this._smoothScrollState.startTime?Math.max(Math.min((Date.now()-this._smoothScrollState.startTime)/this._optionsService.rawOptions.smoothScrollDuration,1),0):1}_clearSmoothScrollState(){this._smoothScrollState.startTime=0,this._smoothScrollState.origin=-1,this._smoothScrollState.target=-1}_bubbleScroll(e,t){const i=this._viewportElement.scrollTop+this._lastRecordedViewportHeight;return!(t<0&&0!==this._viewportElement.scrollTop||t>0&&i<this._lastRecordedBufferHeight)||(e.cancelable&&e.preventDefault(),!1)}handleWheel(e){const t=this._getPixelsScrolled(e);return 0!==t&&(this._optionsService.rawOptions.smoothScrollDuration?(this._smoothScrollState.startTime=Date.now(),this._smoothScrollPercent()<1?(this._smoothScrollState.origin=this._viewportElement.scrollTop,-1===this._smoothScrollState.target?this._smoothScrollState.target=this._viewportElement.scrollTop+t:this._smoothScrollState.target+=t,this._smoothScrollState.target=Math.max(Math.min(this._smoothScrollState.target,this._viewportElement.scrollHeight),0),this._smoothScroll()):this._clearSmoothScrollState()):this._viewportElement.scrollTop+=t,this._bubbleScroll(e,t))}scrollLines(e){if(0!==e)if(this._optionsService.rawOptions.smoothScrollDuration){const t=e*this._currentRowHeight;this._smoothScrollState.startTime=Date.now(),this._smoothScrollPercent()<1?(this._smoothScrollState.origin=this._viewportElement.scrollTop,this._smoothScrollState.target=this._smoothScrollState.origin+t,this._smoothScrollState.target=Math.max(Math.min(this._smoothScrollState.target,this._viewportElement.scrollHeight),0),this._smoothScroll()):this._clearSmoothScrollState()}else this._onRequestScrollLines.fire({amount:e,suppressScrollEvent:!1})}_getPixelsScrolled(e){if(0===e.deltaY||e.shiftKey)return 0;let t=this._applyScrollModifier(e.deltaY,e);return e.deltaMode===WheelEvent.DOM_DELTA_LINE?t*=this._currentRowHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(t*=this._currentRowHeight*this._bufferService.rows),t}getBufferElements(e,t){let i,s="";const r=[],n=t??this._bufferService.buffer.lines.length,o=this._bufferService.buffer.lines;for(let t=e;t<n;t++){const e=o.get(t);if(!e)continue;const n=o.get(t+1)?.isWrapped;if(s+=e.translateToString(!n),!n||t===o.length-1){const e=document.createElement("div");e.textContent=s,r.push(e),s.length>0&&(i=e),s=""}}return{bufferElements:r,cursorElement:i}}getLinesScrolled(e){if(0===e.deltaY||e.shiftKey)return 0;let t=this._applyScrollModifier(e.deltaY,e);return e.deltaMode===WheelEvent.DOM_DELTA_PIXEL?(t/=this._currentRowHeight+0,this._wheelPartialScroll+=t,t=Math.floor(Math.abs(this._wheelPartialScroll))*(this._wheelPartialScroll>0?1:-1),this._wheelPartialScroll%=1):e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(t*=this._bufferService.rows),t}_applyScrollModifier(e,t){const i=this._optionsService.rawOptions.fastScrollModifier;return"alt"===i&&t.altKey||"ctrl"===i&&t.ctrlKey||"shift"===i&&t.shiftKey?e*this._optionsService.rawOptions.fastScrollSensitivity*this._optionsService.rawOptions.scrollSensitivity:e*this._optionsService.rawOptions.scrollSensitivity}handleTouchStart(e){this._lastTouchY=e.touches[0].pageY}handleTouchMove(e){const t=this._lastTouchY-e.touches[0].pageY;return this._lastTouchY=e.touches[0].pageY,0!==t&&(this._viewportElement.scrollTop+=t,this._bubbleScroll(e,t))}};t.Viewport=l=s([r(2,c.IBufferService),r(3,c.IOptionsService),r(4,o.ICharSizeService),r(5,o.IRenderService),r(6,o.ICoreBrowserService),r(7,o.IThemeService)],l)},3107:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.BufferDecorationRenderer=void 0;const n=i(4725),o=i(844),a=i(2585);let h=t.BufferDecorationRenderer=class extends o.Disposable{constructor(e,t,i,s,r){super(),this._screenElement=e,this._bufferService=t,this._coreBrowserService=i,this._decorationService=s,this._renderService=r,this._decorationElements=new Map,this._altBufferIsActive=!1,this._dimensionsChanged=!1,this._container=document.createElement("div"),this._container.classList.add("xterm-decoration-container"),this._screenElement.appendChild(this._container),this.register(this._renderService.onRenderedViewportChange((()=>this._doRefreshDecorations()))),this.register(this._renderService.onDimensionsChange((()=>{this._dimensionsChanged=!0,this._queueRefresh()}))),this.register(this._coreBrowserService.onDprChange((()=>this._queueRefresh()))),this.register(this._bufferService.buffers.onBufferActivate((()=>{this._altBufferIsActive=this._bufferService.buffer===this._bufferService.buffers.alt}))),this.register(this._decorationService.onDecorationRegistered((()=>this._queueRefresh()))),this.register(this._decorationService.onDecorationRemoved((e=>this._removeDecoration(e)))),this.register((0,o.toDisposable)((()=>{this._container.remove(),this._decorationElements.clear()})))}_queueRefresh(){void 0===this._animationFrame&&(this._animationFrame=this._renderService.addRefreshCallback((()=>{this._doRefreshDecorations(),this._animationFrame=void 0})))}_doRefreshDecorations(){for(const e of this._decorationService.decorations)this._renderDecoration(e);this._dimensionsChanged=!1}_renderDecoration(e){this._refreshStyle(e),this._dimensionsChanged&&this._refreshXPosition(e)}_createElement(e){const t=this._coreBrowserService.mainDocument.createElement("div");t.classList.add("xterm-decoration"),t.classList.toggle("xterm-decoration-top-layer","top"===e?.options?.layer),t.style.width=`${Math.round((e.options.width||1)*this._renderService.dimensions.css.cell.width)}px`,t.style.height=(e.options.height||1)*this._renderService.dimensions.css.cell.height+"px",t.style.top=(e.marker.line-this._bufferService.buffers.active.ydisp)*this._renderService.dimensions.css.cell.height+"px",t.style.lineHeight=`${this._renderService.dimensions.css.cell.height}px`;const i=e.options.x??0;return i&&i>this._bufferService.cols&&(t.style.display="none"),this._refreshXPosition(e,t),t}_refreshStyle(e){const t=e.marker.line-this._bufferService.buffers.active.ydisp;if(t<0||t>=this._bufferService.rows)e.element&&(e.element.style.display="none",e.onRenderEmitter.fire(e.element));else{let i=this._decorationElements.get(e);i||(i=this._createElement(e),e.element=i,this._decorationElements.set(e,i),this._container.appendChild(i),e.onDispose((()=>{this._decorationElements.delete(e),i.remove()}))),i.style.top=t*this._renderService.dimensions.css.cell.height+"px",i.style.display=this._altBufferIsActive?"none":"block",e.onRenderEmitter.fire(i)}}_refreshXPosition(e,t=e.element){if(!t)return;const i=e.options.x??0;"right"===(e.options.anchor||"left")?t.style.right=i?i*this._renderService.dimensions.css.cell.width+"px":"":t.style.left=i?i*this._renderService.dimensions.css.cell.width+"px":""}_removeDecoration(e){this._decorationElements.get(e)?.remove(),this._decorationElements.delete(e),e.dispose()}};t.BufferDecorationRenderer=h=s([r(1,a.IBufferService),r(2,n.ICoreBrowserService),r(3,a.IDecorationService),r(4,n.IRenderService)],h)},5871:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ColorZoneStore=void 0,t.ColorZoneStore=class{constructor(){this._zones=[],this._zonePool=[],this._zonePoolIndex=0,this._linePadding={full:0,left:0,center:0,right:0}}get zones(){return this._zonePool.length=Math.min(this._zonePool.length,this._zones.length),this._zones}clear(){this._zones.length=0,this._zonePoolIndex=0}addDecoration(e){if(e.options.overviewRulerOptions){for(const t of this._zones)if(t.color===e.options.overviewRulerOptions.color&&t.position===e.options.overviewRulerOptions.position){if(this._lineIntersectsZone(t,e.marker.line))return;if(this._lineAdjacentToZone(t,e.marker.line,e.options.overviewRulerOptions.position))return void this._addLineToZone(t,e.marker.line)}if(this._zonePoolIndex<this._zonePool.length)return this._zonePool[this._zonePoolIndex].color=e.options.overviewRulerOptions.color,this._zonePool[this._zonePoolIndex].position=e.options.overviewRulerOptions.position,this._zonePool[this._zonePoolIndex].startBufferLine=e.marker.line,this._zonePool[this._zonePoolIndex].endBufferLine=e.marker.line,void this._zones.push(this._zonePool[this._zonePoolIndex++]);this._zones.push({color:e.options.overviewRulerOptions.color,position:e.options.overviewRulerOptions.position,startBufferLine:e.marker.line,endBufferLine:e.marker.line}),this._zonePool.push(this._zones[this._zones.length-1]),this._zonePoolIndex++}}setPadding(e){this._linePadding=e}_lineIntersectsZone(e,t){return t>=e.startBufferLine&&t<=e.endBufferLine}_lineAdjacentToZone(e,t,i){return t>=e.startBufferLine-this._linePadding[i||"full"]&&t<=e.endBufferLine+this._linePadding[i||"full"]}_addLineToZone(e,t){e.startBufferLine=Math.min(e.startBufferLine,t),e.endBufferLine=Math.max(e.endBufferLine,t)}}},5744:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.OverviewRulerRenderer=void 0;const n=i(5871),o=i(4725),a=i(844),h=i(2585),c={full:0,left:0,center:0,right:0},l={full:0,left:0,center:0,right:0},d={full:0,left:0,center:0,right:0};let _=t.OverviewRulerRenderer=class extends a.Disposable{get _width(){return this._optionsService.options.overviewRulerWidth||0}constructor(e,t,i,s,r,o,h){super(),this._viewportElement=e,this._screenElement=t,this._bufferService=i,this._decorationService=s,this._renderService=r,this._optionsService=o,this._coreBrowserService=h,this._colorZoneStore=new n.ColorZoneStore,this._shouldUpdateDimensions=!0,this._shouldUpdateAnchor=!0,this._lastKnownBufferLength=0,this._canvas=this._coreBrowserService.mainDocument.createElement("canvas"),this._canvas.classList.add("xterm-decoration-overview-ruler"),this._refreshCanvasDimensions(),this._viewportElement.parentElement?.insertBefore(this._canvas,this._viewportElement);const c=this._canvas.getContext("2d");if(!c)throw new Error("Ctx cannot be null");this._ctx=c,this._registerDecorationListeners(),this._registerBufferChangeListeners(),this._registerDimensionChangeListeners(),this.register((0,a.toDisposable)((()=>{this._canvas?.remove()})))}_registerDecorationListeners(){this.register(this._decorationService.onDecorationRegistered((()=>this._queueRefresh(void 0,!0)))),this.register(this._decorationService.onDecorationRemoved((()=>this._queueRefresh(void 0,!0))))}_registerBufferChangeListeners(){this.register(this._renderService.onRenderedViewportChange((()=>this._queueRefresh()))),this.register(this._bufferService.buffers.onBufferActivate((()=>{this._canvas.style.display=this._bufferService.buffer===this._bufferService.buffers.alt?"none":"block"}))),this.register(this._bufferService.onScroll((()=>{this._lastKnownBufferLength!==this._bufferService.buffers.normal.lines.length&&(this._refreshDrawHeightConstants(),this._refreshColorZonePadding())})))}_registerDimensionChangeListeners(){this.register(this._renderService.onRender((()=>{this._containerHeight&&this._containerHeight===this._screenElement.clientHeight||(this._queueRefresh(!0),this._containerHeight=this._screenElement.clientHeight)}))),this.register(this._optionsService.onSpecificOptionChange("overviewRulerWidth",(()=>this._queueRefresh(!0)))),this.register(this._coreBrowserService.onDprChange((()=>this._queueRefresh(!0)))),this._queueRefresh(!0)}_refreshDrawConstants(){const e=Math.floor(this._canvas.width/3),t=Math.ceil(this._canvas.width/3);l.full=this._canvas.width,l.left=e,l.center=t,l.right=e,this._refreshDrawHeightConstants(),d.full=0,d.left=0,d.center=l.left,d.right=l.left+l.center}_refreshDrawHeightConstants(){c.full=Math.round(2*this._coreBrowserService.dpr);const e=this._canvas.height/this._bufferService.buffer.lines.length,t=Math.round(Math.max(Math.min(e,12),6)*this._coreBrowserService.dpr);c.left=t,c.center=t,c.right=t}_refreshColorZonePadding(){this._colorZoneStore.setPadding({full:Math.floor(this._bufferService.buffers.active.lines.length/(this._canvas.height-1)*c.full),left:Math.floor(this._bufferService.buffers.active.lines.length/(this._canvas.height-1)*c.left),center:Math.floor(this._bufferService.buffers.active.lines.length/(this._canvas.height-1)*c.center),right:Math.floor(this._bufferService.buffers.active.lines.length/(this._canvas.height-1)*c.right)}),this._lastKnownBufferLength=this._bufferService.buffers.normal.lines.length}_refreshCanvasDimensions(){this._canvas.style.width=`${this._width}px`,this._canvas.width=Math.round(this._width*this._coreBrowserService.dpr),this._canvas.style.height=`${this._screenElement.clientHeight}px`,this._canvas.height=Math.round(this._screenElement.clientHeight*this._coreBrowserService.dpr),this._refreshDrawConstants(),this._refreshColorZonePadding()}_refreshDecorations(){this._shouldUpdateDimensions&&this._refreshCanvasDimensions(),this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height),this._colorZoneStore.clear();for(const e of this._decorationService.decorations)this._colorZoneStore.addDecoration(e);this._ctx.lineWidth=1;const e=this._colorZoneStore.zones;for(const t of e)"full"!==t.position&&this._renderColorZone(t);for(const t of e)"full"===t.position&&this._renderColorZone(t);this._shouldUpdateDimensions=!1,this._shouldUpdateAnchor=!1}_renderColorZone(e){this._ctx.fillStyle=e.color,this._ctx.fillRect(d[e.position||"full"],Math.round((this._canvas.height-1)*(e.startBufferLine/this._bufferService.buffers.active.lines.length)-c[e.position||"full"]/2),l[e.position||"full"],Math.round((this._canvas.height-1)*((e.endBufferLine-e.startBufferLine)/this._bufferService.buffers.active.lines.length)+c[e.position||"full"]))}_queueRefresh(e,t){this._shouldUpdateDimensions=e||this._shouldUpdateDimensions,this._shouldUpdateAnchor=t||this._shouldUpdateAnchor,void 0===this._animationFrame&&(this._animationFrame=this._coreBrowserService.window.requestAnimationFrame((()=>{this._refreshDecorations(),this._animationFrame=void 0})))}};t.OverviewRulerRenderer=_=s([r(2,h.IBufferService),r(3,h.IDecorationService),r(4,o.IRenderService),r(5,h.IOptionsService),r(6,o.ICoreBrowserService)],_)},2950:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.CompositionHelper=void 0;const n=i(4725),o=i(2585),a=i(2584);let h=t.CompositionHelper=class{get isComposing(){return this._isComposing}constructor(e,t,i,s,r,n){this._textarea=e,this._compositionView=t,this._bufferService=i,this._optionsService=s,this._coreService=r,this._renderService=n,this._isComposing=!1,this._isSendingComposition=!1,this._compositionPosition={start:0,end:0},this._dataAlreadySent=""}compositionstart(){this._isComposing=!0,this._compositionPosition.start=this._textarea.value.length,this._compositionView.textContent="",this._dataAlreadySent="",this._compositionView.classList.add("active")}compositionupdate(e){this._compositionView.textContent=e.data,this.updateCompositionElements(),setTimeout((()=>{this._compositionPosition.end=this._textarea.value.length}),0)}compositionend(){this._finalizeComposition(!0)}keydown(e){if(this._isComposing||this._isSendingComposition){if(229===e.keyCode)return!1;if(16===e.keyCode||17===e.keyCode||18===e.keyCode)return!1;this._finalizeComposition(!1)}return 229!==e.keyCode||(this._handleAnyTextareaChanges(),!1)}_finalizeComposition(e){if(this._compositionView.classList.remove("active"),this._isComposing=!1,e){const e={start:this._compositionPosition.start,end:this._compositionPosition.end};this._isSendingComposition=!0,setTimeout((()=>{if(this._isSendingComposition){let t;this._isSendingComposition=!1,e.start+=this._dataAlreadySent.length,t=this._isComposing?this._textarea.value.substring(e.start,e.end):this._textarea.value.substring(e.start),t.length>0&&this._coreService.triggerDataEvent(t,!0)}}),0)}else{this._isSendingComposition=!1;const e=this._textarea.value.substring(this._compositionPosition.start,this._compositionPosition.end);this._coreService.triggerDataEvent(e,!0)}}_handleAnyTextareaChanges(){const e=this._textarea.value;setTimeout((()=>{if(!this._isComposing){const t=this._textarea.value,i=t.replace(e,"");this._dataAlreadySent=i,t.length>e.length?this._coreService.triggerDataEvent(i,!0):t.length<e.length?this._coreService.triggerDataEvent(`${a.C0.DEL}`,!0):t.length===e.length&&t!==e&&this._coreService.triggerDataEvent(t,!0)}}),0)}updateCompositionElements(e){if(this._isComposing){if(this._bufferService.buffer.isCursorInViewport){const e=Math.min(this._bufferService.buffer.x,this._bufferService.cols-1),t=this._renderService.dimensions.css.cell.height,i=this._bufferService.buffer.y*this._renderService.dimensions.css.cell.height,s=e*this._renderService.dimensions.css.cell.width;this._compositionView.style.left=s+"px",this._compositionView.style.top=i+"px",this._compositionView.style.height=t+"px",this._compositionView.style.lineHeight=t+"px",this._compositionView.style.fontFamily=this._optionsService.rawOptions.fontFamily,this._compositionView.style.fontSize=this._optionsService.rawOptions.fontSize+"px";const r=this._compositionView.getBoundingClientRect();this._textarea.style.left=s+"px",this._textarea.style.top=i+"px",this._textarea.style.width=Math.max(r.width,1)+"px",this._textarea.style.height=Math.max(r.height,1)+"px",this._textarea.style.lineHeight=r.height+"px"}e||setTimeout((()=>this.updateCompositionElements(!0)),0)}}};t.CompositionHelper=h=s([r(2,o.IBufferService),r(3,o.IOptionsService),r(4,o.ICoreService),r(5,n.IRenderService)],h)},9806:(e,t)=>{function i(e,t,i){const s=i.getBoundingClientRect(),r=e.getComputedStyle(i),n=parseInt(r.getPropertyValue("padding-left")),o=parseInt(r.getPropertyValue("padding-top"));return[t.clientX-s.left-n,t.clientY-s.top-o]}Object.defineProperty(t,"__esModule",{value:!0}),t.getCoords=t.getCoordsRelativeToElement=void 0,t.getCoordsRelativeToElement=i,t.getCoords=function(e,t,s,r,n,o,a,h,c){if(!o)return;const l=i(e,t,s);return l?(l[0]=Math.ceil((l[0]+(c?a/2:0))/a),l[1]=Math.ceil(l[1]/h),l[0]=Math.min(Math.max(l[0],1),r+(c?1:0)),l[1]=Math.min(Math.max(l[1],1),n),l):void 0}},9504:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.moveToCellSequence=void 0;const s=i(2584);function r(e,t,i,s){const r=e-n(e,i),a=t-n(t,i),l=Math.abs(r-a)-function(e,t,i){let s=0;const r=e-n(e,i),a=t-n(t,i);for(let n=0;n<Math.abs(r-a);n++){const a="A"===o(e,t)?-1:1,h=i.buffer.lines.get(r+a*n);h?.isWrapped&&s++}return s}(e,t,i);return c(l,h(o(e,t),s))}function n(e,t){let i=0,s=t.buffer.lines.get(e),r=s?.isWrapped;for(;r&&e>=0&&e<t.rows;)i++,s=t.buffer.lines.get(--e),r=s?.isWrapped;return i}function o(e,t){return e>t?"A":"B"}function a(e,t,i,s,r,n){let o=e,a=t,h="";for(;o!==i||a!==s;)o+=r?1:-1,r&&o>n.cols-1?(h+=n.buffer.translateBufferLineToString(a,!1,e,o),o=0,e=0,a++):!r&&o<0&&(h+=n.buffer.translateBufferLineToString(a,!1,0,e+1),o=n.cols-1,e=o,a--);return h+n.buffer.translateBufferLineToString(a,!1,e,o)}function h(e,t){const i=t?"O":"[";return s.C0.ESC+i+e}function c(e,t){e=Math.floor(e);let i="";for(let s=0;s<e;s++)i+=t;return i}t.moveToCellSequence=function(e,t,i,s){const o=i.buffer.x,l=i.buffer.y;if(!i.buffer.hasScrollback)return function(e,t,i,s,o,l){return 0===r(t,s,o,l).length?"":c(a(e,t,e,t-n(t,o),!1,o).length,h("D",l))}(o,l,0,t,i,s)+r(l,t,i,s)+function(e,t,i,s,o,l){let d;d=r(t,s,o,l).length>0?s-n(s,o):t;const _=s,u=function(e,t,i,s,o,a){let h;return h=r(i,s,o,a).length>0?s-n(s,o):t,e<i&&h<=s||e>=i&&h<s?"C":"D"}(e,t,i,s,o,l);return c(a(e,d,i,_,"C"===u,o).length,h(u,l))}(o,l,e,t,i,s);let d;if(l===t)return d=o>e?"D":"C",c(Math.abs(o-e),h(d,s));d=l>t?"D":"C";const _=Math.abs(l-t);return c(function(e,t){return t.cols-e}(l>t?e:o,i)+(_-1)*i.cols+1+((l>t?o:e)-1),h(d,s))}},1296:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.DomRenderer=void 0;const n=i(3787),o=i(2550),a=i(2223),h=i(6171),c=i(6052),l=i(4725),d=i(8055),_=i(8460),u=i(844),f=i(2585),v="xterm-dom-renderer-owner-",p="xterm-rows",g="xterm-fg-",m="xterm-bg-",S="xterm-focus",C="xterm-selection";let b=1,w=t.DomRenderer=class extends u.Disposable{constructor(e,t,i,s,r,a,l,d,f,g,m,S,w){super(),this._terminal=e,this._document=t,this._element=i,this._screenElement=s,this._viewportElement=r,this._helperContainer=a,this._linkifier2=l,this._charSizeService=f,this._optionsService=g,this._bufferService=m,this._coreBrowserService=S,this._themeService=w,this._terminalClass=b++,this._rowElements=[],this._selectionRenderModel=(0,c.createSelectionRenderModel)(),this.onRequestRedraw=this.register(new _.EventEmitter).event,this._rowContainer=this._document.createElement("div"),this._rowContainer.classList.add(p),this._rowContainer.style.lineHeight="normal",this._rowContainer.setAttribute("aria-hidden","true"),this._refreshRowElements(this._bufferService.cols,this._bufferService.rows),this._selectionContainer=this._document.createElement("div"),this._selectionContainer.classList.add(C),this._selectionContainer.setAttribute("aria-hidden","true"),this.dimensions=(0,h.createRenderDimensions)(),this._updateDimensions(),this.register(this._optionsService.onOptionChange((()=>this._handleOptionsChanged()))),this.register(this._themeService.onChangeColors((e=>this._injectCss(e)))),this._injectCss(this._themeService.colors),this._rowFactory=d.createInstance(n.DomRendererRowFactory,document),this._element.classList.add(v+this._terminalClass),this._screenElement.appendChild(this._rowContainer),this._screenElement.appendChild(this._selectionContainer),this.register(this._linkifier2.onShowLinkUnderline((e=>this._handleLinkHover(e)))),this.register(this._linkifier2.onHideLinkUnderline((e=>this._handleLinkLeave(e)))),this.register((0,u.toDisposable)((()=>{this._element.classList.remove(v+this._terminalClass),this._rowContainer.remove(),this._selectionContainer.remove(),this._widthCache.dispose(),this._themeStyleElement.remove(),this._dimensionsStyleElement.remove()}))),this._widthCache=new o.WidthCache(this._document,this._helperContainer),this._widthCache.setFont(this._optionsService.rawOptions.fontFamily,this._optionsService.rawOptions.fontSize,this._optionsService.rawOptions.fontWeight,this._optionsService.rawOptions.fontWeightBold),this._setDefaultSpacing()}_updateDimensions(){const e=this._coreBrowserService.dpr;this.dimensions.device.char.width=this._charSizeService.width*e,this.dimensions.device.char.height=Math.ceil(this._charSizeService.height*e),this.dimensions.device.cell.width=this.dimensions.device.char.width+Math.round(this._optionsService.rawOptions.letterSpacing),this.dimensions.device.cell.height=Math.floor(this.dimensions.device.char.height*this._optionsService.rawOptions.lineHeight),this.dimensions.device.char.left=0,this.dimensions.device.char.top=0,this.dimensions.device.canvas.width=this.dimensions.device.cell.width*this._bufferService.cols,this.dimensions.device.canvas.height=this.dimensions.device.cell.height*this._bufferService.rows,this.dimensions.css.canvas.width=Math.round(this.dimensions.device.canvas.width/e),this.dimensions.css.canvas.height=Math.round(this.dimensions.device.canvas.height/e),this.dimensions.css.cell.width=this.dimensions.css.canvas.width/this._bufferService.cols,this.dimensions.css.cell.height=this.dimensions.css.canvas.height/this._bufferService.rows;for(const e of this._rowElements)e.style.width=`${this.dimensions.css.canvas.width}px`,e.style.height=`${this.dimensions.css.cell.height}px`,e.style.lineHeight=`${this.dimensions.css.cell.height}px`,e.style.overflow="hidden";this._dimensionsStyleElement||(this._dimensionsStyleElement=this._document.createElement("style"),this._screenElement.appendChild(this._dimensionsStyleElement));const t=`${this._terminalSelector} .${p} span { display: inline-block; height: 100%; vertical-align: top;}`;this._dimensionsStyleElement.textContent=t,this._selectionContainer.style.height=this._viewportElement.style.height,this._screenElement.style.width=`${this.dimensions.css.canvas.width}px`,this._screenElement.style.height=`${this.dimensions.css.canvas.height}px`}_injectCss(e){this._themeStyleElement||(this._themeStyleElement=this._document.createElement("style"),this._screenElement.appendChild(this._themeStyleElement));let t=`${this._terminalSelector} .${p} { color: ${e.foreground.css}; font-family: ${this._optionsService.rawOptions.fontFamily}; font-size: ${this._optionsService.rawOptions.fontSize}px; font-kerning: none; white-space: pre}`;t+=`${this._terminalSelector} .${p} .xterm-dim { color: ${d.color.multiplyOpacity(e.foreground,.5).css};}`,t+=`${this._terminalSelector} span:not(.xterm-bold) { font-weight: ${this._optionsService.rawOptions.fontWeight};}${this._terminalSelector} span.xterm-bold { font-weight: ${this._optionsService.rawOptions.fontWeightBold};}${this._terminalSelector} span.xterm-italic { font-style: italic;}`;const i=`blink_underline_${this._terminalClass}`,s=`blink_bar_${this._terminalClass}`,r=`blink_block_${this._terminalClass}`;t+=`@keyframes ${i} { 50% {  border-bottom-style: hidden; }}`,t+=`@keyframes ${s} { 50% {  box-shadow: none; }}`,t+=`@keyframes ${r} { 0% {  background-color: ${e.cursor.css};  color: ${e.cursorAccent.css}; } 50% {  background-color: inherit;  color: ${e.cursor.css}; }}`,t+=`${this._terminalSelector} .${p}.${S} .xterm-cursor.xterm-cursor-blink.xterm-cursor-underline { animation: ${i} 1s step-end infinite;}${this._terminalSelector} .${p}.${S} .xterm-cursor.xterm-cursor-blink.xterm-cursor-bar { animation: ${s} 1s step-end infinite;}${this._terminalSelector} .${p}.${S} .xterm-cursor.xterm-cursor-blink.xterm-cursor-block { animation: ${r} 1s step-end infinite;}${this._terminalSelector} .${p} .xterm-cursor.xterm-cursor-block { background-color: ${e.cursor.css}; color: ${e.cursorAccent.css};}${this._terminalSelector} .${p} .xterm-cursor.xterm-cursor-block:not(.xterm-cursor-blink) { background-color: ${e.cursor.css} !important; color: ${e.cursorAccent.css} !important;}${this._terminalSelector} .${p} .xterm-cursor.xterm-cursor-outline { outline: 1px solid ${e.cursor.css}; outline-offset: -1px;}${this._terminalSelector} .${p} .xterm-cursor.xterm-cursor-bar { box-shadow: ${this._optionsService.rawOptions.cursorWidth}px 0 0 ${e.cursor.css} inset;}${this._terminalSelector} .${p} .xterm-cursor.xterm-cursor-underline { border-bottom: 1px ${e.cursor.css}; border-bottom-style: solid; height: calc(100% - 1px);}`,t+=`${this._terminalSelector} .${C} { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}${this._terminalSelector}.focus .${C} div { position: absolute; background-color: ${e.selectionBackgroundOpaque.css};}${this._terminalSelector} .${C} div { position: absolute; background-color: ${e.selectionInactiveBackgroundOpaque.css};}`;for(const[i,s]of e.ansi.entries())t+=`${this._terminalSelector} .${g}${i} { color: ${s.css}; }${this._terminalSelector} .${g}${i}.xterm-dim { color: ${d.color.multiplyOpacity(s,.5).css}; }${this._terminalSelector} .${m}${i} { background-color: ${s.css}; }`;t+=`${this._terminalSelector} .${g}${a.INVERTED_DEFAULT_COLOR} { color: ${d.color.opaque(e.background).css}; }${this._terminalSelector} .${g}${a.INVERTED_DEFAULT_COLOR}.xterm-dim { color: ${d.color.multiplyOpacity(d.color.opaque(e.background),.5).css}; }${this._terminalSelector} .${m}${a.INVERTED_DEFAULT_COLOR} { background-color: ${e.foreground.css}; }`,this._themeStyleElement.textContent=t}_setDefaultSpacing(){const e=this.dimensions.css.cell.width-this._widthCache.get("W",!1,!1);this._rowContainer.style.letterSpacing=`${e}px`,this._rowFactory.defaultSpacing=e}handleDevicePixelRatioChange(){this._updateDimensions(),this._widthCache.clear(),this._setDefaultSpacing()}_refreshRowElements(e,t){for(let e=this._rowElements.length;e<=t;e++){const e=this._document.createElement("div");this._rowContainer.appendChild(e),this._rowElements.push(e)}for(;this._rowElements.length>t;)this._rowContainer.removeChild(this._rowElements.pop())}handleResize(e,t){this._refreshRowElements(e,t),this._updateDimensions(),this.handleSelectionChanged(this._selectionRenderModel.selectionStart,this._selectionRenderModel.selectionEnd,this._selectionRenderModel.columnSelectMode)}handleCharSizeChanged(){this._updateDimensions(),this._widthCache.clear(),this._setDefaultSpacing()}handleBlur(){this._rowContainer.classList.remove(S),this.renderRows(0,this._bufferService.rows-1)}handleFocus(){this._rowContainer.classList.add(S),this.renderRows(this._bufferService.buffer.y,this._bufferService.buffer.y)}handleSelectionChanged(e,t,i){if(this._selectionContainer.replaceChildren(),this._rowFactory.handleSelectionChanged(e,t,i),this.renderRows(0,this._bufferService.rows-1),!e||!t)return;this._selectionRenderModel.update(this._terminal,e,t,i);const s=this._selectionRenderModel.viewportStartRow,r=this._selectionRenderModel.viewportEndRow,n=this._selectionRenderModel.viewportCappedStartRow,o=this._selectionRenderModel.viewportCappedEndRow;if(n>=this._bufferService.rows||o<0)return;const a=this._document.createDocumentFragment();if(i){const i=e[0]>t[0];a.appendChild(this._createSelectionElement(n,i?t[0]:e[0],i?e[0]:t[0],o-n+1))}else{const i=s===n?e[0]:0,h=n===r?t[0]:this._bufferService.cols;a.appendChild(this._createSelectionElement(n,i,h));const c=o-n-1;if(a.appendChild(this._createSelectionElement(n+1,0,this._bufferService.cols,c)),n!==o){const e=r===o?t[0]:this._bufferService.cols;a.appendChild(this._createSelectionElement(o,0,e))}}this._selectionContainer.appendChild(a)}_createSelectionElement(e,t,i,s=1){const r=this._document.createElement("div"),n=t*this.dimensions.css.cell.width;let o=this.dimensions.css.cell.width*(i-t);return n+o>this.dimensions.css.canvas.width&&(o=this.dimensions.css.canvas.width-n),r.style.height=s*this.dimensions.css.cell.height+"px",r.style.top=e*this.dimensions.css.cell.height+"px",r.style.left=`${n}px`,r.style.width=`${o}px`,r}handleCursorMove(){}_handleOptionsChanged(){this._updateDimensions(),this._injectCss(this._themeService.colors),this._widthCache.setFont(this._optionsService.rawOptions.fontFamily,this._optionsService.rawOptions.fontSize,this._optionsService.rawOptions.fontWeight,this._optionsService.rawOptions.fontWeightBold),this._setDefaultSpacing()}clear(){for(const e of this._rowElements)e.replaceChildren()}renderRows(e,t){const i=this._bufferService.buffer,s=i.ybase+i.y,r=Math.min(i.x,this._bufferService.cols-1),n=this._optionsService.rawOptions.cursorBlink,o=this._optionsService.rawOptions.cursorStyle,a=this._optionsService.rawOptions.cursorInactiveStyle;for(let h=e;h<=t;h++){const e=h+i.ydisp,t=this._rowElements[h],c=i.lines.get(e);if(!t||!c)break;t.replaceChildren(...this._rowFactory.createRow(c,e,e===s,o,a,r,n,this.dimensions.css.cell.width,this._widthCache,-1,-1))}}get _terminalSelector(){return`.${v}${this._terminalClass}`}_handleLinkHover(e){this._setCellUnderline(e.x1,e.x2,e.y1,e.y2,e.cols,!0)}_handleLinkLeave(e){this._setCellUnderline(e.x1,e.x2,e.y1,e.y2,e.cols,!1)}_setCellUnderline(e,t,i,s,r,n){i<0&&(e=0),s<0&&(t=0);const o=this._bufferService.rows-1;i=Math.max(Math.min(i,o),0),s=Math.max(Math.min(s,o),0),r=Math.min(r,this._bufferService.cols);const a=this._bufferService.buffer,h=a.ybase+a.y,c=Math.min(a.x,r-1),l=this._optionsService.rawOptions.cursorBlink,d=this._optionsService.rawOptions.cursorStyle,_=this._optionsService.rawOptions.cursorInactiveStyle;for(let o=i;o<=s;++o){const u=o+a.ydisp,f=this._rowElements[o],v=a.lines.get(u);if(!f||!v)break;f.replaceChildren(...this._rowFactory.createRow(v,u,u===h,d,_,c,l,this.dimensions.css.cell.width,this._widthCache,n?o===i?e:0:-1,n?(o===s?t:r)-1:-1))}}};t.DomRenderer=w=s([r(7,f.IInstantiationService),r(8,l.ICharSizeService),r(9,f.IOptionsService),r(10,f.IBufferService),r(11,l.ICoreBrowserService),r(12,l.IThemeService)],w)},3787:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.DomRendererRowFactory=void 0;const n=i(2223),o=i(643),a=i(511),h=i(2585),c=i(8055),l=i(4725),d=i(4269),_=i(6171),u=i(3734);let f=t.DomRendererRowFactory=class{constructor(e,t,i,s,r,n,o){this._document=e,this._characterJoinerService=t,this._optionsService=i,this._coreBrowserService=s,this._coreService=r,this._decorationService=n,this._themeService=o,this._workCell=new a.CellData,this._columnSelectMode=!1,this.defaultSpacing=0}handleSelectionChanged(e,t,i){this._selectionStart=e,this._selectionEnd=t,this._columnSelectMode=i}createRow(e,t,i,s,r,a,h,l,_,f,p){const g=[],m=this._characterJoinerService.getJoinedCharacters(t),S=this._themeService.colors;let C,b=e.getNoBgTrimmedLength();i&&b<a+1&&(b=a+1);let w=0,y="",E=0,k=0,L=0,D=!1,R=0,x=!1,A=0;const B=[],T=-1!==f&&-1!==p;for(let M=0;M<b;M++){e.loadCell(M,this._workCell);let b=this._workCell.getWidth();if(0===b)continue;let O=!1,P=M,I=this._workCell;if(m.length>0&&M===m[0][0]){O=!0;const t=m.shift();I=new d.JoinedCellData(this._workCell,e.translateToString(!0,t[0],t[1]),t[1]-t[0]),P=t[1]-1,b=I.getWidth()}const H=this._isCellInSelection(M,t),F=i&&M===a,W=T&&M>=f&&M<=p;let U=!1;this._decorationService.forEachDecorationAtCell(M,t,void 0,(e=>{U=!0}));let N=I.getChars()||o.WHITESPACE_CELL_CHAR;if(" "===N&&(I.isUnderline()||I.isOverline())&&(N=" "),A=b*l-_.get(N,I.isBold(),I.isItalic()),C){if(w&&(H&&x||!H&&!x&&I.bg===E)&&(H&&x&&S.selectionForeground||I.fg===k)&&I.extended.ext===L&&W===D&&A===R&&!F&&!O&&!U){I.isInvisible()?y+=o.WHITESPACE_CELL_CHAR:y+=N,w++;continue}w&&(C.textContent=y),C=this._document.createElement("span"),w=0,y=""}else C=this._document.createElement("span");if(E=I.bg,k=I.fg,L=I.extended.ext,D=W,R=A,x=H,O&&a>=M&&a<=P&&(a=M),!this._coreService.isCursorHidden&&F&&this._coreService.isCursorInitialized)if(B.push("xterm-cursor"),this._coreBrowserService.isFocused)h&&B.push("xterm-cursor-blink"),B.push("bar"===s?"xterm-cursor-bar":"underline"===s?"xterm-cursor-underline":"xterm-cursor-block");else if(r)switch(r){case"outline":B.push("xterm-cursor-outline");break;case"block":B.push("xterm-cursor-block");break;case"bar":B.push("xterm-cursor-bar");break;case"underline":B.push("xterm-cursor-underline")}if(I.isBold()&&B.push("xterm-bold"),I.isItalic()&&B.push("xterm-italic"),I.isDim()&&B.push("xterm-dim"),y=I.isInvisible()?o.WHITESPACE_CELL_CHAR:I.getChars()||o.WHITESPACE_CELL_CHAR,I.isUnderline()&&(B.push(`xterm-underline-${I.extended.underlineStyle}`)," "===y&&(y=" "),!I.isUnderlineColorDefault()))if(I.isUnderlineColorRGB())C.style.textDecorationColor=`rgb(${u.AttributeData.toColorRGB(I.getUnderlineColor()).join(",")})`;else{let e=I.getUnderlineColor();this._optionsService.rawOptions.drawBoldTextInBrightColors&&I.isBold()&&e<8&&(e+=8),C.style.textDecorationColor=S.ansi[e].css}I.isOverline()&&(B.push("xterm-overline")," "===y&&(y=" ")),I.isStrikethrough()&&B.push("xterm-strikethrough"),W&&(C.style.textDecoration="underline");let $=I.getFgColor(),j=I.getFgColorMode(),z=I.getBgColor(),K=I.getBgColorMode();const q=!!I.isInverse();if(q){const e=$;$=z,z=e;const t=j;j=K,K=t}let V,G,X,J=!1;switch(this._decorationService.forEachDecorationAtCell(M,t,void 0,(e=>{"top"!==e.options.layer&&J||(e.backgroundColorRGB&&(K=50331648,z=e.backgroundColorRGB.rgba>>8&16777215,V=e.backgroundColorRGB),e.foregroundColorRGB&&(j=50331648,$=e.foregroundColorRGB.rgba>>8&16777215,G=e.foregroundColorRGB),J="top"===e.options.layer)})),!J&&H&&(V=this._coreBrowserService.isFocused?S.selectionBackgroundOpaque:S.selectionInactiveBackgroundOpaque,z=V.rgba>>8&16777215,K=50331648,J=!0,S.selectionForeground&&(j=50331648,$=S.selectionForeground.rgba>>8&16777215,G=S.selectionForeground)),J&&B.push("xterm-decoration-top"),K){case 16777216:case 33554432:X=S.ansi[z],B.push(`xterm-bg-${z}`);break;case 50331648:X=c.channels.toColor(z>>16,z>>8&255,255&z),this._addStyle(C,`background-color:#${v((z>>>0).toString(16),"0",6)}`);break;default:q?(X=S.foreground,B.push(`xterm-bg-${n.INVERTED_DEFAULT_COLOR}`)):X=S.background}switch(V||I.isDim()&&(V=c.color.multiplyOpacity(X,.5)),j){case 16777216:case 33554432:I.isBold()&&$<8&&this._optionsService.rawOptions.drawBoldTextInBrightColors&&($+=8),this._applyMinimumContrast(C,X,S.ansi[$],I,V,void 0)||B.push(`xterm-fg-${$}`);break;case 50331648:const e=c.channels.toColor($>>16&255,$>>8&255,255&$);this._applyMinimumContrast(C,X,e,I,V,G)||this._addStyle(C,`color:#${v($.toString(16),"0",6)}`);break;default:this._applyMinimumContrast(C,X,S.foreground,I,V,G)||q&&B.push(`xterm-fg-${n.INVERTED_DEFAULT_COLOR}`)}B.length&&(C.className=B.join(" "),B.length=0),F||O||U?C.textContent=y:w++,A!==this.defaultSpacing&&(C.style.letterSpacing=`${A}px`),g.push(C),M=P}return C&&w&&(C.textContent=y),g}_applyMinimumContrast(e,t,i,s,r,n){if(1===this._optionsService.rawOptions.minimumContrastRatio||(0,_.treatGlyphAsBackgroundColor)(s.getCode()))return!1;const o=this._getContrastCache(s);let a;if(r||n||(a=o.getColor(t.rgba,i.rgba)),void 0===a){const e=this._optionsService.rawOptions.minimumContrastRatio/(s.isDim()?2:1);a=c.color.ensureContrastRatio(r||t,n||i,e),o.setColor((r||t).rgba,(n||i).rgba,a??null)}return!!a&&(this._addStyle(e,`color:${a.css}`),!0)}_getContrastCache(e){return e.isDim()?this._themeService.colors.halfContrastCache:this._themeService.colors.contrastCache}_addStyle(e,t){e.setAttribute("style",`${e.getAttribute("style")||""}${t};`)}_isCellInSelection(e,t){const i=this._selectionStart,s=this._selectionEnd;return!(!i||!s)&&(this._columnSelectMode?i[0]<=s[0]?e>=i[0]&&t>=i[1]&&e<s[0]&&t<=s[1]:e<i[0]&&t>=i[1]&&e>=s[0]&&t<=s[1]:t>i[1]&&t<s[1]||i[1]===s[1]&&t===i[1]&&e>=i[0]&&e<s[0]||i[1]<s[1]&&t===s[1]&&e<s[0]||i[1]<s[1]&&t===i[1]&&e>=i[0])}};function v(e,t,i){for(;e.length<i;)e=t+e;return e}t.DomRendererRowFactory=f=s([r(1,l.ICharacterJoinerService),r(2,h.IOptionsService),r(3,l.ICoreBrowserService),r(4,h.ICoreService),r(5,h.IDecorationService),r(6,l.IThemeService)],f)},2550:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WidthCache=void 0,t.WidthCache=class{constructor(e,t){this._flat=new Float32Array(256),this._font="",this._fontSize=0,this._weight="normal",this._weightBold="bold",this._measureElements=[],this._container=e.createElement("div"),this._container.classList.add("xterm-width-cache-measure-container"),this._container.setAttribute("aria-hidden","true"),this._container.style.whiteSpace="pre",this._container.style.fontKerning="none";const i=e.createElement("span");i.classList.add("xterm-char-measure-element");const s=e.createElement("span");s.classList.add("xterm-char-measure-element"),s.style.fontWeight="bold";const r=e.createElement("span");r.classList.add("xterm-char-measure-element"),r.style.fontStyle="italic";const n=e.createElement("span");n.classList.add("xterm-char-measure-element"),n.style.fontWeight="bold",n.style.fontStyle="italic",this._measureElements=[i,s,r,n],this._container.appendChild(i),this._container.appendChild(s),this._container.appendChild(r),this._container.appendChild(n),t.appendChild(this._container),this.clear()}dispose(){this._container.remove(),this._measureElements.length=0,this._holey=void 0}clear(){this._flat.fill(-9999),this._holey=new Map}setFont(e,t,i,s){e===this._font&&t===this._fontSize&&i===this._weight&&s===this._weightBold||(this._font=e,this._fontSize=t,this._weight=i,this._weightBold=s,this._container.style.fontFamily=this._font,this._container.style.fontSize=`${this._fontSize}px`,this._measureElements[0].style.fontWeight=`${i}`,this._measureElements[1].style.fontWeight=`${s}`,this._measureElements[2].style.fontWeight=`${i}`,this._measureElements[3].style.fontWeight=`${s}`,this.clear())}get(e,t,i){let s=0;if(!t&&!i&&1===e.length&&(s=e.charCodeAt(0))<256){if(-9999!==this._flat[s])return this._flat[s];const t=this._measure(e,0);return t>0&&(this._flat[s]=t),t}let r=e;t&&(r+="B"),i&&(r+="I");let n=this._holey.get(r);if(void 0===n){let s=0;t&&(s|=1),i&&(s|=2),n=this._measure(e,s),n>0&&this._holey.set(r,n)}return n}_measure(e,t){const i=this._measureElements[t];return i.textContent=e.repeat(32),i.offsetWidth/32}}},2223:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TEXT_BASELINE=t.DIM_OPACITY=t.INVERTED_DEFAULT_COLOR=void 0;const s=i(6114);t.INVERTED_DEFAULT_COLOR=257,t.DIM_OPACITY=.5,t.TEXT_BASELINE=s.isFirefox||s.isLegacyEdge?"bottom":"ideographic"},6171:(e,t)=>{function i(e){return 57508<=e&&e<=57558}function s(e){return e>=128512&&e<=128591||e>=127744&&e<=128511||e>=128640&&e<=128767||e>=9728&&e<=9983||e>=9984&&e<=10175||e>=65024&&e<=65039||e>=129280&&e<=129535||e>=127462&&e<=127487}Object.defineProperty(t,"__esModule",{value:!0}),t.computeNextVariantOffset=t.createRenderDimensions=t.treatGlyphAsBackgroundColor=t.allowRescaling=t.isEmoji=t.isRestrictedPowerlineGlyph=t.isPowerlineGlyph=t.throwIfFalsy=void 0,t.throwIfFalsy=function(e){if(!e)throw new Error("value must not be falsy");return e},t.isPowerlineGlyph=i,t.isRestrictedPowerlineGlyph=function(e){return 57520<=e&&e<=57527},t.isEmoji=s,t.allowRescaling=function(e,t,r,n){return 1===t&&r>Math.ceil(1.5*n)&&void 0!==e&&e>255&&!s(e)&&!i(e)&&!function(e){return 57344<=e&&e<=63743}(e)},t.treatGlyphAsBackgroundColor=function(e){return i(e)||function(e){return 9472<=e&&e<=9631}(e)},t.createRenderDimensions=function(){return{css:{canvas:{width:0,height:0},cell:{width:0,height:0}},device:{canvas:{width:0,height:0},cell:{width:0,height:0},char:{width:0,height:0,left:0,top:0}}}},t.computeNextVariantOffset=function(e,t,i=0){return(e-(2*Math.round(t)-i))%(2*Math.round(t))}},6052:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createSelectionRenderModel=void 0;class i{constructor(){this.clear()}clear(){this.hasSelection=!1,this.columnSelectMode=!1,this.viewportStartRow=0,this.viewportEndRow=0,this.viewportCappedStartRow=0,this.viewportCappedEndRow=0,this.startCol=0,this.endCol=0,this.selectionStart=void 0,this.selectionEnd=void 0}update(e,t,i,s=!1){if(this.selectionStart=t,this.selectionEnd=i,!t||!i||t[0]===i[0]&&t[1]===i[1])return void this.clear();const r=e.buffers.active.ydisp,n=t[1]-r,o=i[1]-r,a=Math.max(n,0),h=Math.min(o,e.rows-1);a>=e.rows||h<0?this.clear():(this.hasSelection=!0,this.columnSelectMode=s,this.viewportStartRow=n,this.viewportEndRow=o,this.viewportCappedStartRow=a,this.viewportCappedEndRow=h,this.startCol=t[0],this.endCol=i[0])}isCellSelected(e,t,i){return!!this.hasSelection&&(i-=e.buffer.active.viewportY,this.columnSelectMode?this.startCol<=this.endCol?t>=this.startCol&&i>=this.viewportCappedStartRow&&t<this.endCol&&i<=this.viewportCappedEndRow:t<this.startCol&&i>=this.viewportCappedStartRow&&t>=this.endCol&&i<=this.viewportCappedEndRow:i>this.viewportStartRow&&i<this.viewportEndRow||this.viewportStartRow===this.viewportEndRow&&i===this.viewportStartRow&&t>=this.startCol&&t<this.endCol||this.viewportStartRow<this.viewportEndRow&&i===this.viewportEndRow&&t<this.endCol||this.viewportStartRow<this.viewportEndRow&&i===this.viewportStartRow&&t>=this.startCol)}}t.createSelectionRenderModel=function(){return new i}},456:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SelectionModel=void 0,t.SelectionModel=class{constructor(e){this._bufferService=e,this.isSelectAllActive=!1,this.selectionStartLength=0}clearSelection(){this.selectionStart=void 0,this.selectionEnd=void 0,this.isSelectAllActive=!1,this.selectionStartLength=0}get finalSelectionStart(){return this.isSelectAllActive?[0,0]:this.selectionEnd&&this.selectionStart&&this.areSelectionValuesReversed()?this.selectionEnd:this.selectionStart}get finalSelectionEnd(){if(this.isSelectAllActive)return[this._bufferService.cols,this._bufferService.buffer.ybase+this._bufferService.rows-1];if(this.selectionStart){if(!this.selectionEnd||this.areSelectionValuesReversed()){const e=this.selectionStart[0]+this.selectionStartLength;return e>this._bufferService.cols?e%this._bufferService.cols==0?[this._bufferService.cols,this.selectionStart[1]+Math.floor(e/this._bufferService.cols)-1]:[e%this._bufferService.cols,this.selectionStart[1]+Math.floor(e/this._bufferService.cols)]:[e,this.selectionStart[1]]}if(this.selectionStartLength&&this.selectionEnd[1]===this.selectionStart[1]){const e=this.selectionStart[0]+this.selectionStartLength;return e>this._bufferService.cols?[e%this._bufferService.cols,this.selectionStart[1]+Math.floor(e/this._bufferService.cols)]:[Math.max(e,this.selectionEnd[0]),this.selectionEnd[1]]}return this.selectionEnd}}areSelectionValuesReversed(){const e=this.selectionStart,t=this.selectionEnd;return!(!e||!t)&&(e[1]>t[1]||e[1]===t[1]&&e[0]>t[0])}handleTrim(e){return this.selectionStart&&(this.selectionStart[1]-=e),this.selectionEnd&&(this.selectionEnd[1]-=e),this.selectionEnd&&this.selectionEnd[1]<0?(this.clearSelection(),!0):(this.selectionStart&&this.selectionStart[1]<0&&(this.selectionStart[1]=0),!1)}}},428:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.CharSizeService=void 0;const n=i(2585),o=i(8460),a=i(844);let h=t.CharSizeService=class extends a.Disposable{get hasValidSize(){return this.width>0&&this.height>0}constructor(e,t,i){super(),this._optionsService=i,this.width=0,this.height=0,this._onCharSizeChange=this.register(new o.EventEmitter),this.onCharSizeChange=this._onCharSizeChange.event;try{this._measureStrategy=this.register(new d(this._optionsService))}catch{this._measureStrategy=this.register(new l(e,t,this._optionsService))}this.register(this._optionsService.onMultipleOptionChange(["fontFamily","fontSize"],(()=>this.measure())))}measure(){const e=this._measureStrategy.measure();e.width===this.width&&e.height===this.height||(this.width=e.width,this.height=e.height,this._onCharSizeChange.fire())}};t.CharSizeService=h=s([r(2,n.IOptionsService)],h);class c extends a.Disposable{constructor(){super(...arguments),this._result={width:0,height:0}}_validateAndSet(e,t){void 0!==e&&e>0&&void 0!==t&&t>0&&(this._result.width=e,this._result.height=t)}}class l extends c{constructor(e,t,i){super(),this._document=e,this._parentElement=t,this._optionsService=i,this._measureElement=this._document.createElement("span"),this._measureElement.classList.add("xterm-char-measure-element"),this._measureElement.textContent="W".repeat(32),this._measureElement.setAttribute("aria-hidden","true"),this._measureElement.style.whiteSpace="pre",this._measureElement.style.fontKerning="none",this._parentElement.appendChild(this._measureElement)}measure(){return this._measureElement.style.fontFamily=this._optionsService.rawOptions.fontFamily,this._measureElement.style.fontSize=`${this._optionsService.rawOptions.fontSize}px`,this._validateAndSet(Number(this._measureElement.offsetWidth)/32,Number(this._measureElement.offsetHeight)),this._result}}class d extends c{constructor(e){super(),this._optionsService=e,this._canvas=new OffscreenCanvas(100,100),this._ctx=this._canvas.getContext("2d");const t=this._ctx.measureText("W");if(!("width"in t&&"fontBoundingBoxAscent"in t&&"fontBoundingBoxDescent"in t))throw new Error("Required font metrics not supported")}measure(){this._ctx.font=`${this._optionsService.rawOptions.fontSize}px ${this._optionsService.rawOptions.fontFamily}`;const e=this._ctx.measureText("W");return this._validateAndSet(e.width,e.fontBoundingBoxAscent+e.fontBoundingBoxDescent),this._result}}},4269:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.CharacterJoinerService=t.JoinedCellData=void 0;const n=i(3734),o=i(643),a=i(511),h=i(2585);class c extends n.AttributeData{constructor(e,t,i){super(),this.content=0,this.combinedData="",this.fg=e.fg,this.bg=e.bg,this.combinedData=t,this._width=i}isCombined(){return 2097152}getWidth(){return this._width}getChars(){return this.combinedData}getCode(){return 2097151}setFromCharData(e){throw new Error("not implemented")}getAsCharData(){return[this.fg,this.getChars(),this.getWidth(),this.getCode()]}}t.JoinedCellData=c;let l=t.CharacterJoinerService=class e{constructor(e){this._bufferService=e,this._characterJoiners=[],this._nextCharacterJoinerId=0,this._workCell=new a.CellData}register(e){const t={id:this._nextCharacterJoinerId++,handler:e};return this._characterJoiners.push(t),t.id}deregister(e){for(let t=0;t<this._characterJoiners.length;t++)if(this._characterJoiners[t].id===e)return this._characterJoiners.splice(t,1),!0;return!1}getJoinedCharacters(e){if(0===this._characterJoiners.length)return[];const t=this._bufferService.buffer.lines.get(e);if(!t||0===t.length)return[];const i=[],s=t.translateToString(!0);let r=0,n=0,a=0,h=t.getFg(0),c=t.getBg(0);for(let e=0;e<t.getTrimmedLength();e++)if(t.loadCell(e,this._workCell),0!==this._workCell.getWidth()){if(this._workCell.fg!==h||this._workCell.bg!==c){if(e-r>1){const e=this._getJoinedRanges(s,a,n,t,r);for(let t=0;t<e.length;t++)i.push(e[t])}r=e,a=n,h=this._workCell.fg,c=this._workCell.bg}n+=this._workCell.getChars().length||o.WHITESPACE_CELL_CHAR.length}if(this._bufferService.cols-r>1){const e=this._getJoinedRanges(s,a,n,t,r);for(let t=0;t<e.length;t++)i.push(e[t])}return i}_getJoinedRanges(t,i,s,r,n){const o=t.substring(i,s);let a=[];try{a=this._characterJoiners[0].handler(o)}catch(e){console.error(e)}for(let t=1;t<this._characterJoiners.length;t++)try{const i=this._characterJoiners[t].handler(o);for(let t=0;t<i.length;t++)e._mergeRanges(a,i[t])}catch(e){console.error(e)}return this._stringRangesToCellRanges(a,r,n),a}_stringRangesToCellRanges(e,t,i){let s=0,r=!1,n=0,a=e[s];if(a){for(let h=i;h<this._bufferService.cols;h++){const i=t.getWidth(h),c=t.getString(h).length||o.WHITESPACE_CELL_CHAR.length;if(0!==i){if(!r&&a[0]<=n&&(a[0]=h,r=!0),a[1]<=n){if(a[1]=h,a=e[++s],!a)break;a[0]<=n?(a[0]=h,r=!0):r=!1}n+=c}}a&&(a[1]=this._bufferService.cols)}}static _mergeRanges(e,t){let i=!1;for(let s=0;s<e.length;s++){const r=e[s];if(i){if(t[1]<=r[0])return e[s-1][1]=t[1],e;if(t[1]<=r[1])return e[s-1][1]=Math.max(t[1],r[1]),e.splice(s,1),e;e.splice(s,1),s--}else{if(t[1]<=r[0])return e.splice(s,0,t),e;if(t[1]<=r[1])return r[0]=Math.min(t[0],r[0]),e;t[0]<r[1]&&(r[0]=Math.min(t[0],r[0]),i=!0)}}return i?e[e.length-1][1]=t[1]:e.push(t),e}};t.CharacterJoinerService=l=s([r(0,h.IBufferService)],l)},5114:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CoreBrowserService=void 0;const s=i(844),r=i(8460),n=i(3656);class o extends s.Disposable{constructor(e,t,i){super(),this._textarea=e,this._window=t,this.mainDocument=i,this._isFocused=!1,this._cachedIsFocused=void 0,this._screenDprMonitor=new a(this._window),this._onDprChange=this.register(new r.EventEmitter),this.onDprChange=this._onDprChange.event,this._onWindowChange=this.register(new r.EventEmitter),this.onWindowChange=this._onWindowChange.event,this.register(this.onWindowChange((e=>this._screenDprMonitor.setWindow(e)))),this.register((0,r.forwardEvent)(this._screenDprMonitor.onDprChange,this._onDprChange)),this._textarea.addEventListener("focus",(()=>this._isFocused=!0)),this._textarea.addEventListener("blur",(()=>this._isFocused=!1))}get window(){return this._window}set window(e){this._window!==e&&(this._window=e,this._onWindowChange.fire(this._window))}get dpr(){return this.window.devicePixelRatio}get isFocused(){return void 0===this._cachedIsFocused&&(this._cachedIsFocused=this._isFocused&&this._textarea.ownerDocument.hasFocus(),queueMicrotask((()=>this._cachedIsFocused=void 0))),this._cachedIsFocused}}t.CoreBrowserService=o;class a extends s.Disposable{constructor(e){super(),this._parentWindow=e,this._windowResizeListener=this.register(new s.MutableDisposable),this._onDprChange=this.register(new r.EventEmitter),this.onDprChange=this._onDprChange.event,this._outerListener=()=>this._setDprAndFireIfDiffers(),this._currentDevicePixelRatio=this._parentWindow.devicePixelRatio,this._updateDpr(),this._setWindowResizeListener(),this.register((0,s.toDisposable)((()=>this.clearListener())))}setWindow(e){this._parentWindow=e,this._setWindowResizeListener(),this._setDprAndFireIfDiffers()}_setWindowResizeListener(){this._windowResizeListener.value=(0,n.addDisposableDomListener)(this._parentWindow,"resize",(()=>this._setDprAndFireIfDiffers()))}_setDprAndFireIfDiffers(){this._parentWindow.devicePixelRatio!==this._currentDevicePixelRatio&&this._onDprChange.fire(this._parentWindow.devicePixelRatio),this._updateDpr()}_updateDpr(){this._outerListener&&(this._resolutionMediaMatchList?.removeListener(this._outerListener),this._currentDevicePixelRatio=this._parentWindow.devicePixelRatio,this._resolutionMediaMatchList=this._parentWindow.matchMedia(`screen and (resolution: ${this._parentWindow.devicePixelRatio}dppx)`),this._resolutionMediaMatchList.addListener(this._outerListener))}clearListener(){this._resolutionMediaMatchList&&this._outerListener&&(this._resolutionMediaMatchList.removeListener(this._outerListener),this._resolutionMediaMatchList=void 0,this._outerListener=void 0)}}},779:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LinkProviderService=void 0;const s=i(844);class r extends s.Disposable{constructor(){super(),this.linkProviders=[],this.register((0,s.toDisposable)((()=>this.linkProviders.length=0)))}registerLinkProvider(e){return this.linkProviders.push(e),{dispose:()=>{const t=this.linkProviders.indexOf(e);-1!==t&&this.linkProviders.splice(t,1)}}}}t.LinkProviderService=r},8934:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.MouseService=void 0;const n=i(4725),o=i(9806);let a=t.MouseService=class{constructor(e,t){this._renderService=e,this._charSizeService=t}getCoords(e,t,i,s,r){return(0,o.getCoords)(window,e,t,i,s,this._charSizeService.hasValidSize,this._renderService.dimensions.css.cell.width,this._renderService.dimensions.css.cell.height,r)}getMouseReportCoords(e,t){const i=(0,o.getCoordsRelativeToElement)(window,e,t);if(this._charSizeService.hasValidSize)return i[0]=Math.min(Math.max(i[0],0),this._renderService.dimensions.css.canvas.width-1),i[1]=Math.min(Math.max(i[1],0),this._renderService.dimensions.css.canvas.height-1),{col:Math.floor(i[0]/this._renderService.dimensions.css.cell.width),row:Math.floor(i[1]/this._renderService.dimensions.css.cell.height),x:Math.floor(i[0]),y:Math.floor(i[1])}}};t.MouseService=a=s([r(0,n.IRenderService),r(1,n.ICharSizeService)],a)},3230:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.RenderService=void 0;const n=i(6193),o=i(4725),a=i(8460),h=i(844),c=i(7226),l=i(2585);let d=t.RenderService=class extends h.Disposable{get dimensions(){return this._renderer.value.dimensions}constructor(e,t,i,s,r,o,l,d){super(),this._rowCount=e,this._charSizeService=s,this._renderer=this.register(new h.MutableDisposable),this._pausedResizeTask=new c.DebouncedIdleTask,this._observerDisposable=this.register(new h.MutableDisposable),this._isPaused=!1,this._needsFullRefresh=!1,this._isNextRenderRedrawOnly=!0,this._needsSelectionRefresh=!1,this._canvasWidth=0,this._canvasHeight=0,this._selectionState={start:void 0,end:void 0,columnSelectMode:!1},this._onDimensionsChange=this.register(new a.EventEmitter),this.onDimensionsChange=this._onDimensionsChange.event,this._onRenderedViewportChange=this.register(new a.EventEmitter),this.onRenderedViewportChange=this._onRenderedViewportChange.event,this._onRender=this.register(new a.EventEmitter),this.onRender=this._onRender.event,this._onRefreshRequest=this.register(new a.EventEmitter),this.onRefreshRequest=this._onRefreshRequest.event,this._renderDebouncer=new n.RenderDebouncer(((e,t)=>this._renderRows(e,t)),l),this.register(this._renderDebouncer),this.register(l.onDprChange((()=>this.handleDevicePixelRatioChange()))),this.register(o.onResize((()=>this._fullRefresh()))),this.register(o.buffers.onBufferActivate((()=>this._renderer.value?.clear()))),this.register(i.onOptionChange((()=>this._handleOptionsChanged()))),this.register(this._charSizeService.onCharSizeChange((()=>this.handleCharSizeChanged()))),this.register(r.onDecorationRegistered((()=>this._fullRefresh()))),this.register(r.onDecorationRemoved((()=>this._fullRefresh()))),this.register(i.onMultipleOptionChange(["customGlyphs","drawBoldTextInBrightColors","letterSpacing","lineHeight","fontFamily","fontSize","fontWeight","fontWeightBold","minimumContrastRatio","rescaleOverlappingGlyphs"],(()=>{this.clear(),this.handleResize(o.cols,o.rows),this._fullRefresh()}))),this.register(i.onMultipleOptionChange(["cursorBlink","cursorStyle"],(()=>this.refreshRows(o.buffer.y,o.buffer.y,!0)))),this.register(d.onChangeColors((()=>this._fullRefresh()))),this._registerIntersectionObserver(l.window,t),this.register(l.onWindowChange((e=>this._registerIntersectionObserver(e,t))))}_registerIntersectionObserver(e,t){if("IntersectionObserver"in e){const i=new e.IntersectionObserver((e=>this._handleIntersectionChange(e[e.length-1])),{threshold:0});i.observe(t),this._observerDisposable.value=(0,h.toDisposable)((()=>i.disconnect()))}}_handleIntersectionChange(e){this._isPaused=void 0===e.isIntersecting?0===e.intersectionRatio:!e.isIntersecting,this._isPaused||this._charSizeService.hasValidSize||this._charSizeService.measure(),!this._isPaused&&this._needsFullRefresh&&(this._pausedResizeTask.flush(),this.refreshRows(0,this._rowCount-1),this._needsFullRefresh=!1)}refreshRows(e,t,i=!1){this._isPaused?this._needsFullRefresh=!0:(i||(this._isNextRenderRedrawOnly=!1),this._renderDebouncer.refresh(e,t,this._rowCount))}_renderRows(e,t){this._renderer.value&&(e=Math.min(e,this._rowCount-1),t=Math.min(t,this._rowCount-1),this._renderer.value.renderRows(e,t),this._needsSelectionRefresh&&(this._renderer.value.handleSelectionChanged(this._selectionState.start,this._selectionState.end,this._selectionState.columnSelectMode),this._needsSelectionRefresh=!1),this._isNextRenderRedrawOnly||this._onRenderedViewportChange.fire({start:e,end:t}),this._onRender.fire({start:e,end:t}),this._isNextRenderRedrawOnly=!0)}resize(e,t){this._rowCount=t,this._fireOnCanvasResize()}_handleOptionsChanged(){this._renderer.value&&(this.refreshRows(0,this._rowCount-1),this._fireOnCanvasResize())}_fireOnCanvasResize(){this._renderer.value&&(this._renderer.value.dimensions.css.canvas.width===this._canvasWidth&&this._renderer.value.dimensions.css.canvas.height===this._canvasHeight||this._onDimensionsChange.fire(this._renderer.value.dimensions))}hasRenderer(){return!!this._renderer.value}setRenderer(e){this._renderer.value=e,this._renderer.value&&(this._renderer.value.onRequestRedraw((e=>this.refreshRows(e.start,e.end,!0))),this._needsSelectionRefresh=!0,this._fullRefresh())}addRefreshCallback(e){return this._renderDebouncer.addRefreshCallback(e)}_fullRefresh(){this._isPaused?this._needsFullRefresh=!0:this.refreshRows(0,this._rowCount-1)}clearTextureAtlas(){this._renderer.value&&(this._renderer.value.clearTextureAtlas?.(),this._fullRefresh())}handleDevicePixelRatioChange(){this._charSizeService.measure(),this._renderer.value&&(this._renderer.value.handleDevicePixelRatioChange(),this.refreshRows(0,this._rowCount-1))}handleResize(e,t){this._renderer.value&&(this._isPaused?this._pausedResizeTask.set((()=>this._renderer.value?.handleResize(e,t))):this._renderer.value.handleResize(e,t),this._fullRefresh())}handleCharSizeChanged(){this._renderer.value?.handleCharSizeChanged()}handleBlur(){this._renderer.value?.handleBlur()}handleFocus(){this._renderer.value?.handleFocus()}handleSelectionChanged(e,t,i){this._selectionState.start=e,this._selectionState.end=t,this._selectionState.columnSelectMode=i,this._renderer.value?.handleSelectionChanged(e,t,i)}handleCursorMove(){this._renderer.value?.handleCursorMove()}clear(){this._renderer.value?.clear()}};t.RenderService=d=s([r(2,l.IOptionsService),r(3,o.ICharSizeService),r(4,l.IDecorationService),r(5,l.IBufferService),r(6,o.ICoreBrowserService),r(7,o.IThemeService)],d)},9312:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.SelectionService=void 0;const n=i(9806),o=i(9504),a=i(456),h=i(4725),c=i(8460),l=i(844),d=i(6114),_=i(4841),u=i(511),f=i(2585),v=String.fromCharCode(160),p=new RegExp(v,"g");let g=t.SelectionService=class extends l.Disposable{constructor(e,t,i,s,r,n,o,h,d){super(),this._element=e,this._screenElement=t,this._linkifier=i,this._bufferService=s,this._coreService=r,this._mouseService=n,this._optionsService=o,this._renderService=h,this._coreBrowserService=d,this._dragScrollAmount=0,this._enabled=!0,this._workCell=new u.CellData,this._mouseDownTimeStamp=0,this._oldHasSelection=!1,this._oldSelectionStart=void 0,this._oldSelectionEnd=void 0,this._onLinuxMouseSelection=this.register(new c.EventEmitter),this.onLinuxMouseSelection=this._onLinuxMouseSelection.event,this._onRedrawRequest=this.register(new c.EventEmitter),this.onRequestRedraw=this._onRedrawRequest.event,this._onSelectionChange=this.register(new c.EventEmitter),this.onSelectionChange=this._onSelectionChange.event,this._onRequestScrollLines=this.register(new c.EventEmitter),this.onRequestScrollLines=this._onRequestScrollLines.event,this._mouseMoveListener=e=>this._handleMouseMove(e),this._mouseUpListener=e=>this._handleMouseUp(e),this._coreService.onUserInput((()=>{this.hasSelection&&this.clearSelection()})),this._trimListener=this._bufferService.buffer.lines.onTrim((e=>this._handleTrim(e))),this.register(this._bufferService.buffers.onBufferActivate((e=>this._handleBufferActivate(e)))),this.enable(),this._model=new a.SelectionModel(this._bufferService),this._activeSelectionMode=0,this.register((0,l.toDisposable)((()=>{this._removeMouseDownListeners()})))}reset(){this.clearSelection()}disable(){this.clearSelection(),this._enabled=!1}enable(){this._enabled=!0}get selectionStart(){return this._model.finalSelectionStart}get selectionEnd(){return this._model.finalSelectionEnd}get hasSelection(){const e=this._model.finalSelectionStart,t=this._model.finalSelectionEnd;return!(!e||!t||e[0]===t[0]&&e[1]===t[1])}get selectionText(){const e=this._model.finalSelectionStart,t=this._model.finalSelectionEnd;if(!e||!t)return"";const i=this._bufferService.buffer,s=[];if(3===this._activeSelectionMode){if(e[0]===t[0])return"";const r=e[0]<t[0]?e[0]:t[0],n=e[0]<t[0]?t[0]:e[0];for(let o=e[1];o<=t[1];o++){const e=i.translateBufferLineToString(o,!0,r,n);s.push(e)}}else{const r=e[1]===t[1]?t[0]:void 0;s.push(i.translateBufferLineToString(e[1],!0,e[0],r));for(let r=e[1]+1;r<=t[1]-1;r++){const e=i.lines.get(r),t=i.translateBufferLineToString(r,!0);e?.isWrapped?s[s.length-1]+=t:s.push(t)}if(e[1]!==t[1]){const e=i.lines.get(t[1]),r=i.translateBufferLineToString(t[1],!0,0,t[0]);e&&e.isWrapped?s[s.length-1]+=r:s.push(r)}}return s.map((e=>e.replace(p," "))).join(d.isWindows?"\r\n":"\n")}clearSelection(){this._model.clearSelection(),this._removeMouseDownListeners(),this.refresh(),this._onSelectionChange.fire()}refresh(e){this._refreshAnimationFrame||(this._refreshAnimationFrame=this._coreBrowserService.window.requestAnimationFrame((()=>this._refresh()))),d.isLinux&&e&&this.selectionText.length&&this._onLinuxMouseSelection.fire(this.selectionText)}_refresh(){this._refreshAnimationFrame=void 0,this._onRedrawRequest.fire({start:this._model.finalSelectionStart,end:this._model.finalSelectionEnd,columnSelectMode:3===this._activeSelectionMode})}_isClickInSelection(e){const t=this._getMouseBufferCoords(e),i=this._model.finalSelectionStart,s=this._model.finalSelectionEnd;return!!(i&&s&&t)&&this._areCoordsInSelection(t,i,s)}isCellInSelection(e,t){const i=this._model.finalSelectionStart,s=this._model.finalSelectionEnd;return!(!i||!s)&&this._areCoordsInSelection([e,t],i,s)}_areCoordsInSelection(e,t,i){return e[1]>t[1]&&e[1]<i[1]||t[1]===i[1]&&e[1]===t[1]&&e[0]>=t[0]&&e[0]<i[0]||t[1]<i[1]&&e[1]===i[1]&&e[0]<i[0]||t[1]<i[1]&&e[1]===t[1]&&e[0]>=t[0]}_selectWordAtCursor(e,t){const i=this._linkifier.currentLink?.link?.range;if(i)return this._model.selectionStart=[i.start.x-1,i.start.y-1],this._model.selectionStartLength=(0,_.getRangeLength)(i,this._bufferService.cols),this._model.selectionEnd=void 0,!0;const s=this._getMouseBufferCoords(e);return!!s&&(this._selectWordAt(s,t),this._model.selectionEnd=void 0,!0)}selectAll(){this._model.isSelectAllActive=!0,this.refresh(),this._onSelectionChange.fire()}selectLines(e,t){this._model.clearSelection(),e=Math.max(e,0),t=Math.min(t,this._bufferService.buffer.lines.length-1),this._model.selectionStart=[0,e],this._model.selectionEnd=[this._bufferService.cols,t],this.refresh(),this._onSelectionChange.fire()}_handleTrim(e){this._model.handleTrim(e)&&this.refresh()}_getMouseBufferCoords(e){const t=this._mouseService.getCoords(e,this._screenElement,this._bufferService.cols,this._bufferService.rows,!0);if(t)return t[0]--,t[1]--,t[1]+=this._bufferService.buffer.ydisp,t}_getMouseEventScrollAmount(e){let t=(0,n.getCoordsRelativeToElement)(this._coreBrowserService.window,e,this._screenElement)[1];const i=this._renderService.dimensions.css.canvas.height;return t>=0&&t<=i?0:(t>i&&(t-=i),t=Math.min(Math.max(t,-50),50),t/=50,t/Math.abs(t)+Math.round(14*t))}shouldForceSelection(e){return d.isMac?e.altKey&&this._optionsService.rawOptions.macOptionClickForcesSelection:e.shiftKey}handleMouseDown(e){if(this._mouseDownTimeStamp=e.timeStamp,(2!==e.button||!this.hasSelection)&&0===e.button){if(!this._enabled){if(!this.shouldForceSelection(e))return;e.stopPropagation()}e.preventDefault(),this._dragScrollAmount=0,this._enabled&&e.shiftKey?this._handleIncrementalClick(e):1===e.detail?this._handleSingleClick(e):2===e.detail?this._handleDoubleClick(e):3===e.detail&&this._handleTripleClick(e),this._addMouseDownListeners(),this.refresh(!0)}}_addMouseDownListeners(){this._screenElement.ownerDocument&&(this._screenElement.ownerDocument.addEventListener("mousemove",this._mouseMoveListener),this._screenElement.ownerDocument.addEventListener("mouseup",this._mouseUpListener)),this._dragScrollIntervalTimer=this._coreBrowserService.window.setInterval((()=>this._dragScroll()),50)}_removeMouseDownListeners(){this._screenElement.ownerDocument&&(this._screenElement.ownerDocument.removeEventListener("mousemove",this._mouseMoveListener),this._screenElement.ownerDocument.removeEventListener("mouseup",this._mouseUpListener)),this._coreBrowserService.window.clearInterval(this._dragScrollIntervalTimer),this._dragScrollIntervalTimer=void 0}_handleIncrementalClick(e){this._model.selectionStart&&(this._model.selectionEnd=this._getMouseBufferCoords(e))}_handleSingleClick(e){if(this._model.selectionStartLength=0,this._model.isSelectAllActive=!1,this._activeSelectionMode=this.shouldColumnSelect(e)?3:0,this._model.selectionStart=this._getMouseBufferCoords(e),!this._model.selectionStart)return;this._model.selectionEnd=void 0;const t=this._bufferService.buffer.lines.get(this._model.selectionStart[1]);t&&t.length!==this._model.selectionStart[0]&&0===t.hasWidth(this._model.selectionStart[0])&&this._model.selectionStart[0]++}_handleDoubleClick(e){this._selectWordAtCursor(e,!0)&&(this._activeSelectionMode=1)}_handleTripleClick(e){const t=this._getMouseBufferCoords(e);t&&(this._activeSelectionMode=2,this._selectLineAt(t[1]))}shouldColumnSelect(e){return e.altKey&&!(d.isMac&&this._optionsService.rawOptions.macOptionClickForcesSelection)}_handleMouseMove(e){if(e.stopImmediatePropagation(),!this._model.selectionStart)return;const t=this._model.selectionEnd?[this._model.selectionEnd[0],this._model.selectionEnd[1]]:null;if(this._model.selectionEnd=this._getMouseBufferCoords(e),!this._model.selectionEnd)return void this.refresh(!0);2===this._activeSelectionMode?this._model.selectionEnd[1]<this._model.selectionStart[1]?this._model.selectionEnd[0]=0:this._model.selectionEnd[0]=this._bufferService.cols:1===this._activeSelectionMode&&this._selectToWordAt(this._model.selectionEnd),this._dragScrollAmount=this._getMouseEventScrollAmount(e),3!==this._activeSelectionMode&&(this._dragScrollAmount>0?this._model.selectionEnd[0]=this._bufferService.cols:this._dragScrollAmount<0&&(this._model.selectionEnd[0]=0));const i=this._bufferService.buffer;if(this._model.selectionEnd[1]<i.lines.length){const e=i.lines.get(this._model.selectionEnd[1]);e&&0===e.hasWidth(this._model.selectionEnd[0])&&this._model.selectionEnd[0]<this._bufferService.cols&&this._model.selectionEnd[0]++}t&&t[0]===this._model.selectionEnd[0]&&t[1]===this._model.selectionEnd[1]||this.refresh(!0)}_dragScroll(){if(this._model.selectionEnd&&this._model.selectionStart&&this._dragScrollAmount){this._onRequestScrollLines.fire({amount:this._dragScrollAmount,suppressScrollEvent:!1});const e=this._bufferService.buffer;this._dragScrollAmount>0?(3!==this._activeSelectionMode&&(this._model.selectionEnd[0]=this._bufferService.cols),this._model.selectionEnd[1]=Math.min(e.ydisp+this._bufferService.rows,e.lines.length-1)):(3!==this._activeSelectionMode&&(this._model.selectionEnd[0]=0),this._model.selectionEnd[1]=e.ydisp),this.refresh()}}_handleMouseUp(e){const t=e.timeStamp-this._mouseDownTimeStamp;if(this._removeMouseDownListeners(),this.selectionText.length<=1&&t<500&&e.altKey&&this._optionsService.rawOptions.altClickMovesCursor){if(this._bufferService.buffer.ybase===this._bufferService.buffer.ydisp){const t=this._mouseService.getCoords(e,this._element,this._bufferService.cols,this._bufferService.rows,!1);if(t&&void 0!==t[0]&&void 0!==t[1]){const e=(0,o.moveToCellSequence)(t[0]-1,t[1]-1,this._bufferService,this._coreService.decPrivateModes.applicationCursorKeys);this._coreService.triggerDataEvent(e,!0)}}}else this._fireEventIfSelectionChanged()}_fireEventIfSelectionChanged(){const e=this._model.finalSelectionStart,t=this._model.finalSelectionEnd,i=!(!e||!t||e[0]===t[0]&&e[1]===t[1]);i?e&&t&&(this._oldSelectionStart&&this._oldSelectionEnd&&e[0]===this._oldSelectionStart[0]&&e[1]===this._oldSelectionStart[1]&&t[0]===this._oldSelectionEnd[0]&&t[1]===this._oldSelectionEnd[1]||this._fireOnSelectionChange(e,t,i)):this._oldHasSelection&&this._fireOnSelectionChange(e,t,i)}_fireOnSelectionChange(e,t,i){this._oldSelectionStart=e,this._oldSelectionEnd=t,this._oldHasSelection=i,this._onSelectionChange.fire()}_handleBufferActivate(e){this.clearSelection(),this._trimListener.dispose(),this._trimListener=e.activeBuffer.lines.onTrim((e=>this._handleTrim(e)))}_convertViewportColToCharacterIndex(e,t){let i=t;for(let s=0;t>=s;s++){const r=e.loadCell(s,this._workCell).getChars().length;0===this._workCell.getWidth()?i--:r>1&&t!==s&&(i+=r-1)}return i}setSelection(e,t,i){this._model.clearSelection(),this._removeMouseDownListeners(),this._model.selectionStart=[e,t],this._model.selectionStartLength=i,this.refresh(),this._fireEventIfSelectionChanged()}rightClickSelect(e){this._isClickInSelection(e)||(this._selectWordAtCursor(e,!1)&&this.refresh(!0),this._fireEventIfSelectionChanged())}_getWordAt(e,t,i=!0,s=!0){if(e[0]>=this._bufferService.cols)return;const r=this._bufferService.buffer,n=r.lines.get(e[1]);if(!n)return;const o=r.translateBufferLineToString(e[1],!1);let a=this._convertViewportColToCharacterIndex(n,e[0]),h=a;const c=e[0]-a;let l=0,d=0,_=0,u=0;if(" "===o.charAt(a)){for(;a>0&&" "===o.charAt(a-1);)a--;for(;h<o.length&&" "===o.charAt(h+1);)h++}else{let t=e[0],i=e[0];0===n.getWidth(t)&&(l++,t--),2===n.getWidth(i)&&(d++,i++);const s=n.getString(i).length;for(s>1&&(u+=s-1,h+=s-1);t>0&&a>0&&!this._isCharWordSeparator(n.loadCell(t-1,this._workCell));){n.loadCell(t-1,this._workCell);const e=this._workCell.getChars().length;0===this._workCell.getWidth()?(l++,t--):e>1&&(_+=e-1,a-=e-1),a--,t--}for(;i<n.length&&h+1<o.length&&!this._isCharWordSeparator(n.loadCell(i+1,this._workCell));){n.loadCell(i+1,this._workCell);const e=this._workCell.getChars().length;2===this._workCell.getWidth()?(d++,i++):e>1&&(u+=e-1,h+=e-1),h++,i++}}h++;let f=a+c-l+_,v=Math.min(this._bufferService.cols,h-a+l+d-_-u);if(t||""!==o.slice(a,h).trim()){if(i&&0===f&&32!==n.getCodePoint(0)){const t=r.lines.get(e[1]-1);if(t&&n.isWrapped&&32!==t.getCodePoint(this._bufferService.cols-1)){const t=this._getWordAt([this._bufferService.cols-1,e[1]-1],!1,!0,!1);if(t){const e=this._bufferService.cols-t.start;f-=e,v+=e}}}if(s&&f+v===this._bufferService.cols&&32!==n.getCodePoint(this._bufferService.cols-1)){const t=r.lines.get(e[1]+1);if(t?.isWrapped&&32!==t.getCodePoint(0)){const t=this._getWordAt([0,e[1]+1],!1,!1,!0);t&&(v+=t.length)}}return{start:f,length:v}}}_selectWordAt(e,t){const i=this._getWordAt(e,t);if(i){for(;i.start<0;)i.start+=this._bufferService.cols,e[1]--;this._model.selectionStart=[i.start,e[1]],this._model.selectionStartLength=i.length}}_selectToWordAt(e){const t=this._getWordAt(e,!0);if(t){let i=e[1];for(;t.start<0;)t.start+=this._bufferService.cols,i--;if(!this._model.areSelectionValuesReversed())for(;t.start+t.length>this._bufferService.cols;)t.length-=this._bufferService.cols,i++;this._model.selectionEnd=[this._model.areSelectionValuesReversed()?t.start:t.start+t.length,i]}}_isCharWordSeparator(e){return 0!==e.getWidth()&&this._optionsService.rawOptions.wordSeparator.indexOf(e.getChars())>=0}_selectLineAt(e){const t=this._bufferService.buffer.getWrappedRangeForLine(e),i={start:{x:0,y:t.first},end:{x:this._bufferService.cols-1,y:t.last}};this._model.selectionStart=[0,t.first],this._model.selectionEnd=void 0,this._model.selectionStartLength=(0,_.getRangeLength)(i,this._bufferService.cols)}};t.SelectionService=g=s([r(3,f.IBufferService),r(4,f.ICoreService),r(5,h.IMouseService),r(6,f.IOptionsService),r(7,h.IRenderService),r(8,h.ICoreBrowserService)],g)},4725:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ILinkProviderService=t.IThemeService=t.ICharacterJoinerService=t.ISelectionService=t.IRenderService=t.IMouseService=t.ICoreBrowserService=t.ICharSizeService=void 0;const s=i(8343);t.ICharSizeService=(0,s.createDecorator)("CharSizeService"),t.ICoreBrowserService=(0,s.createDecorator)("CoreBrowserService"),t.IMouseService=(0,s.createDecorator)("MouseService"),t.IRenderService=(0,s.createDecorator)("RenderService"),t.ISelectionService=(0,s.createDecorator)("SelectionService"),t.ICharacterJoinerService=(0,s.createDecorator)("CharacterJoinerService"),t.IThemeService=(0,s.createDecorator)("ThemeService"),t.ILinkProviderService=(0,s.createDecorator)("LinkProviderService")},6731:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeService=t.DEFAULT_ANSI_COLORS=void 0;const n=i(7239),o=i(8055),a=i(8460),h=i(844),c=i(2585),l=o.css.toColor("#ffffff"),d=o.css.toColor("#000000"),_=o.css.toColor("#ffffff"),u=o.css.toColor("#000000"),f={css:"rgba(255, 255, 255, 0.3)",rgba:4294967117};t.DEFAULT_ANSI_COLORS=Object.freeze((()=>{const e=[o.css.toColor("#2e3436"),o.css.toColor("#cc0000"),o.css.toColor("#4e9a06"),o.css.toColor("#c4a000"),o.css.toColor("#3465a4"),o.css.toColor("#75507b"),o.css.toColor("#06989a"),o.css.toColor("#d3d7cf"),o.css.toColor("#555753"),o.css.toColor("#ef2929"),o.css.toColor("#8ae234"),o.css.toColor("#fce94f"),o.css.toColor("#729fcf"),o.css.toColor("#ad7fa8"),o.css.toColor("#34e2e2"),o.css.toColor("#eeeeec")],t=[0,95,135,175,215,255];for(let i=0;i<216;i++){const s=t[i/36%6|0],r=t[i/6%6|0],n=t[i%6];e.push({css:o.channels.toCss(s,r,n),rgba:o.channels.toRgba(s,r,n)})}for(let t=0;t<24;t++){const i=8+10*t;e.push({css:o.channels.toCss(i,i,i),rgba:o.channels.toRgba(i,i,i)})}return e})());let v=t.ThemeService=class extends h.Disposable{get colors(){return this._colors}constructor(e){super(),this._optionsService=e,this._contrastCache=new n.ColorContrastCache,this._halfContrastCache=new n.ColorContrastCache,this._onChangeColors=this.register(new a.EventEmitter),this.onChangeColors=this._onChangeColors.event,this._colors={foreground:l,background:d,cursor:_,cursorAccent:u,selectionForeground:void 0,selectionBackgroundTransparent:f,selectionBackgroundOpaque:o.color.blend(d,f),selectionInactiveBackgroundTransparent:f,selectionInactiveBackgroundOpaque:o.color.blend(d,f),ansi:t.DEFAULT_ANSI_COLORS.slice(),contrastCache:this._contrastCache,halfContrastCache:this._halfContrastCache},this._updateRestoreColors(),this._setTheme(this._optionsService.rawOptions.theme),this.register(this._optionsService.onSpecificOptionChange("minimumContrastRatio",(()=>this._contrastCache.clear()))),this.register(this._optionsService.onSpecificOptionChange("theme",(()=>this._setTheme(this._optionsService.rawOptions.theme))))}_setTheme(e={}){const i=this._colors;if(i.foreground=p(e.foreground,l),i.background=p(e.background,d),i.cursor=p(e.cursor,_),i.cursorAccent=p(e.cursorAccent,u),i.selectionBackgroundTransparent=p(e.selectionBackground,f),i.selectionBackgroundOpaque=o.color.blend(i.background,i.selectionBackgroundTransparent),i.selectionInactiveBackgroundTransparent=p(e.selectionInactiveBackground,i.selectionBackgroundTransparent),i.selectionInactiveBackgroundOpaque=o.color.blend(i.background,i.selectionInactiveBackgroundTransparent),i.selectionForeground=e.selectionForeground?p(e.selectionForeground,o.NULL_COLOR):void 0,i.selectionForeground===o.NULL_COLOR&&(i.selectionForeground=void 0),o.color.isOpaque(i.selectionBackgroundTransparent)){const e=.3;i.selectionBackgroundTransparent=o.color.opacity(i.selectionBackgroundTransparent,e)}if(o.color.isOpaque(i.selectionInactiveBackgroundTransparent)){const e=.3;i.selectionInactiveBackgroundTransparent=o.color.opacity(i.selectionInactiveBackgroundTransparent,e)}if(i.ansi=t.DEFAULT_ANSI_COLORS.slice(),i.ansi[0]=p(e.black,t.DEFAULT_ANSI_COLORS[0]),i.ansi[1]=p(e.red,t.DEFAULT_ANSI_COLORS[1]),i.ansi[2]=p(e.green,t.DEFAULT_ANSI_COLORS[2]),i.ansi[3]=p(e.yellow,t.DEFAULT_ANSI_COLORS[3]),i.ansi[4]=p(e.blue,t.DEFAULT_ANSI_COLORS[4]),i.ansi[5]=p(e.magenta,t.DEFAULT_ANSI_COLORS[5]),i.ansi[6]=p(e.cyan,t.DEFAULT_ANSI_COLORS[6]),i.ansi[7]=p(e.white,t.DEFAULT_ANSI_COLORS[7]),i.ansi[8]=p(e.brightBlack,t.DEFAULT_ANSI_COLORS[8]),i.ansi[9]=p(e.brightRed,t.DEFAULT_ANSI_COLORS[9]),i.ansi[10]=p(e.brightGreen,t.DEFAULT_ANSI_COLORS[10]),i.ansi[11]=p(e.brightYellow,t.DEFAULT_ANSI_COLORS[11]),i.ansi[12]=p(e.brightBlue,t.DEFAULT_ANSI_COLORS[12]),i.ansi[13]=p(e.brightMagenta,t.DEFAULT_ANSI_COLORS[13]),i.ansi[14]=p(e.brightCyan,t.DEFAULT_ANSI_COLORS[14]),i.ansi[15]=p(e.brightWhite,t.DEFAULT_ANSI_COLORS[15]),e.extendedAnsi){const s=Math.min(i.ansi.length-16,e.extendedAnsi.length);for(let r=0;r<s;r++)i.ansi[r+16]=p(e.extendedAnsi[r],t.DEFAULT_ANSI_COLORS[r+16])}this._contrastCache.clear(),this._halfContrastCache.clear(),this._updateRestoreColors(),this._onChangeColors.fire(this.colors)}restoreColor(e){this._restoreColor(e),this._onChangeColors.fire(this.colors)}_restoreColor(e){if(void 0!==e)switch(e){case 256:this._colors.foreground=this._restoreColors.foreground;break;case 257:this._colors.background=this._restoreColors.background;break;case 258:this._colors.cursor=this._restoreColors.cursor;break;default:this._colors.ansi[e]=this._restoreColors.ansi[e]}else for(let e=0;e<this._restoreColors.ansi.length;++e)this._colors.ansi[e]=this._restoreColors.ansi[e]}modifyColors(e){e(this._colors),this._onChangeColors.fire(this.colors)}_updateRestoreColors(){this._restoreColors={foreground:this._colors.foreground,background:this._colors.background,cursor:this._colors.cursor,ansi:this._colors.ansi.slice()}}};function p(e,t){if(void 0!==e)try{return o.css.toColor(e)}catch{}return t}t.ThemeService=v=s([r(0,c.IOptionsService)],v)},6349:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CircularList=void 0;const s=i(8460),r=i(844);class n extends r.Disposable{constructor(e){super(),this._maxLength=e,this.onDeleteEmitter=this.register(new s.EventEmitter),this.onDelete=this.onDeleteEmitter.event,this.onInsertEmitter=this.register(new s.EventEmitter),this.onInsert=this.onInsertEmitter.event,this.onTrimEmitter=this.register(new s.EventEmitter),this.onTrim=this.onTrimEmitter.event,this._array=new Array(this._maxLength),this._startIndex=0,this._length=0}get maxLength(){return this._maxLength}set maxLength(e){if(this._maxLength===e)return;const t=new Array(e);for(let i=0;i<Math.min(e,this.length);i++)t[i]=this._array[this._getCyclicIndex(i)];this._array=t,this._maxLength=e,this._startIndex=0}get length(){return this._length}set length(e){if(e>this._length)for(let t=this._length;t<e;t++)this._array[t]=void 0;this._length=e}get(e){return this._array[this._getCyclicIndex(e)]}set(e,t){this._array[this._getCyclicIndex(e)]=t}push(e){this._array[this._getCyclicIndex(this._length)]=e,this._length===this._maxLength?(this._startIndex=++this._startIndex%this._maxLength,this.onTrimEmitter.fire(1)):this._length++}recycle(){if(this._length!==this._maxLength)throw new Error("Can only recycle when the buffer is full");return this._startIndex=++this._startIndex%this._maxLength,this.onTrimEmitter.fire(1),this._array[this._getCyclicIndex(this._length-1)]}get isFull(){return this._length===this._maxLength}pop(){return this._array[this._getCyclicIndex(this._length---1)]}splice(e,t,...i){if(t){for(let i=e;i<this._length-t;i++)this._array[this._getCyclicIndex(i)]=this._array[this._getCyclicIndex(i+t)];this._length-=t,this.onDeleteEmitter.fire({index:e,amount:t})}for(let t=this._length-1;t>=e;t--)this._array[this._getCyclicIndex(t+i.length)]=this._array[this._getCyclicIndex(t)];for(let t=0;t<i.length;t++)this._array[this._getCyclicIndex(e+t)]=i[t];if(i.length&&this.onInsertEmitter.fire({index:e,amount:i.length}),this._length+i.length>this._maxLength){const e=this._length+i.length-this._maxLength;this._startIndex+=e,this._length=this._maxLength,this.onTrimEmitter.fire(e)}else this._length+=i.length}trimStart(e){e>this._length&&(e=this._length),this._startIndex+=e,this._length-=e,this.onTrimEmitter.fire(e)}shiftElements(e,t,i){if(!(t<=0)){if(e<0||e>=this._length)throw new Error("start argument out of range");if(e+i<0)throw new Error("Cannot shift elements in list beyond index 0");if(i>0){for(let s=t-1;s>=0;s--)this.set(e+s+i,this.get(e+s));const s=e+t+i-this._length;if(s>0)for(this._length+=s;this._length>this._maxLength;)this._length--,this._startIndex++,this.onTrimEmitter.fire(1)}else for(let s=0;s<t;s++)this.set(e+s+i,this.get(e+s))}}_getCyclicIndex(e){return(this._startIndex+e)%this._maxLength}}t.CircularList=n},1439:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.clone=void 0,t.clone=function e(t,i=5){if("object"!=typeof t)return t;const s=Array.isArray(t)?[]:{};for(const r in t)s[r]=i<=1?t[r]:t[r]&&e(t[r],i-1);return s}},8055:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.contrastRatio=t.toPaddedHex=t.rgba=t.rgb=t.css=t.color=t.channels=t.NULL_COLOR=void 0;let i=0,s=0,r=0,n=0;var o,a,h,c,l;function d(e){const t=e.toString(16);return t.length<2?"0"+t:t}function _(e,t){return e<t?(t+.05)/(e+.05):(e+.05)/(t+.05)}t.NULL_COLOR={css:"#00000000",rgba:0},function(e){e.toCss=function(e,t,i,s){return void 0!==s?`#${d(e)}${d(t)}${d(i)}${d(s)}`:`#${d(e)}${d(t)}${d(i)}`},e.toRgba=function(e,t,i,s=255){return(e<<24|t<<16|i<<8|s)>>>0},e.toColor=function(t,i,s,r){return{css:e.toCss(t,i,s,r),rgba:e.toRgba(t,i,s,r)}}}(o||(t.channels=o={})),function(e){function t(e,t){return n=Math.round(255*t),[i,s,r]=l.toChannels(e.rgba),{css:o.toCss(i,s,r,n),rgba:o.toRgba(i,s,r,n)}}e.blend=function(e,t){if(n=(255&t.rgba)/255,1===n)return{css:t.css,rgba:t.rgba};const a=t.rgba>>24&255,h=t.rgba>>16&255,c=t.rgba>>8&255,l=e.rgba>>24&255,d=e.rgba>>16&255,_=e.rgba>>8&255;return i=l+Math.round((a-l)*n),s=d+Math.round((h-d)*n),r=_+Math.round((c-_)*n),{css:o.toCss(i,s,r),rgba:o.toRgba(i,s,r)}},e.isOpaque=function(e){return 255==(255&e.rgba)},e.ensureContrastRatio=function(e,t,i){const s=l.ensureContrastRatio(e.rgba,t.rgba,i);if(s)return o.toColor(s>>24&255,s>>16&255,s>>8&255)},e.opaque=function(e){const t=(255|e.rgba)>>>0;return[i,s,r]=l.toChannels(t),{css:o.toCss(i,s,r),rgba:t}},e.opacity=t,e.multiplyOpacity=function(e,i){return n=255&e.rgba,t(e,n*i/255)},e.toColorRGB=function(e){return[e.rgba>>24&255,e.rgba>>16&255,e.rgba>>8&255]}}(a||(t.color=a={})),function(e){let t,a;try{const e=document.createElement("canvas");e.width=1,e.height=1;const i=e.getContext("2d",{willReadFrequently:!0});i&&(t=i,t.globalCompositeOperation="copy",a=t.createLinearGradient(0,0,1,1))}catch{}e.toColor=function(e){if(e.match(/#[\da-f]{3,8}/i))switch(e.length){case 4:return i=parseInt(e.slice(1,2).repeat(2),16),s=parseInt(e.slice(2,3).repeat(2),16),r=parseInt(e.slice(3,4).repeat(2),16),o.toColor(i,s,r);case 5:return i=parseInt(e.slice(1,2).repeat(2),16),s=parseInt(e.slice(2,3).repeat(2),16),r=parseInt(e.slice(3,4).repeat(2),16),n=parseInt(e.slice(4,5).repeat(2),16),o.toColor(i,s,r,n);case 7:return{css:e,rgba:(parseInt(e.slice(1),16)<<8|255)>>>0};case 9:return{css:e,rgba:parseInt(e.slice(1),16)>>>0}}const h=e.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);if(h)return i=parseInt(h[1]),s=parseInt(h[2]),r=parseInt(h[3]),n=Math.round(255*(void 0===h[5]?1:parseFloat(h[5]))),o.toColor(i,s,r,n);if(!t||!a)throw new Error("css.toColor: Unsupported css format");if(t.fillStyle=a,t.fillStyle=e,"string"!=typeof t.fillStyle)throw new Error("css.toColor: Unsupported css format");if(t.fillRect(0,0,1,1),[i,s,r,n]=t.getImageData(0,0,1,1).data,255!==n)throw new Error("css.toColor: Unsupported css format");return{rgba:o.toRgba(i,s,r,n),css:e}}}(h||(t.css=h={})),function(e){function t(e,t,i){const s=e/255,r=t/255,n=i/255;return.2126*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))}e.relativeLuminance=function(e){return t(e>>16&255,e>>8&255,255&e)},e.relativeLuminance2=t}(c||(t.rgb=c={})),function(e){function t(e,t,i){const s=e>>24&255,r=e>>16&255,n=e>>8&255;let o=t>>24&255,a=t>>16&255,h=t>>8&255,l=_(c.relativeLuminance2(o,a,h),c.relativeLuminance2(s,r,n));for(;l<i&&(o>0||a>0||h>0);)o-=Math.max(0,Math.ceil(.1*o)),a-=Math.max(0,Math.ceil(.1*a)),h-=Math.max(0,Math.ceil(.1*h)),l=_(c.relativeLuminance2(o,a,h),c.relativeLuminance2(s,r,n));return(o<<24|a<<16|h<<8|255)>>>0}function a(e,t,i){const s=e>>24&255,r=e>>16&255,n=e>>8&255;let o=t>>24&255,a=t>>16&255,h=t>>8&255,l=_(c.relativeLuminance2(o,a,h),c.relativeLuminance2(s,r,n));for(;l<i&&(o<255||a<255||h<255);)o=Math.min(255,o+Math.ceil(.1*(255-o))),a=Math.min(255,a+Math.ceil(.1*(255-a))),h=Math.min(255,h+Math.ceil(.1*(255-h))),l=_(c.relativeLuminance2(o,a,h),c.relativeLuminance2(s,r,n));return(o<<24|a<<16|h<<8|255)>>>0}e.blend=function(e,t){if(n=(255&t)/255,1===n)return t;const a=t>>24&255,h=t>>16&255,c=t>>8&255,l=e>>24&255,d=e>>16&255,_=e>>8&255;return i=l+Math.round((a-l)*n),s=d+Math.round((h-d)*n),r=_+Math.round((c-_)*n),o.toRgba(i,s,r)},e.ensureContrastRatio=function(e,i,s){const r=c.relativeLuminance(e>>8),n=c.relativeLuminance(i>>8);if(_(r,n)<s){if(n<r){const n=t(e,i,s),o=_(r,c.relativeLuminance(n>>8));if(o<s){const t=a(e,i,s);return o>_(r,c.relativeLuminance(t>>8))?n:t}return n}const o=a(e,i,s),h=_(r,c.relativeLuminance(o>>8));if(h<s){const n=t(e,i,s);return h>_(r,c.relativeLuminance(n>>8))?o:n}return o}},e.reduceLuminance=t,e.increaseLuminance=a,e.toChannels=function(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}}(l||(t.rgba=l={})),t.toPaddedHex=d,t.contrastRatio=_},8969:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CoreTerminal=void 0;const s=i(844),r=i(2585),n=i(4348),o=i(7866),a=i(744),h=i(7302),c=i(6975),l=i(8460),d=i(1753),_=i(1480),u=i(7994),f=i(9282),v=i(5435),p=i(5981),g=i(2660);let m=!1;class S extends s.Disposable{get onScroll(){return this._onScrollApi||(this._onScrollApi=this.register(new l.EventEmitter),this._onScroll.event((e=>{this._onScrollApi?.fire(e.position)}))),this._onScrollApi.event}get cols(){return this._bufferService.cols}get rows(){return this._bufferService.rows}get buffers(){return this._bufferService.buffers}get options(){return this.optionsService.options}set options(e){for(const t in e)this.optionsService.options[t]=e[t]}constructor(e){super(),this._windowsWrappingHeuristics=this.register(new s.MutableDisposable),this._onBinary=this.register(new l.EventEmitter),this.onBinary=this._onBinary.event,this._onData=this.register(new l.EventEmitter),this.onData=this._onData.event,this._onLineFeed=this.register(new l.EventEmitter),this.onLineFeed=this._onLineFeed.event,this._onResize=this.register(new l.EventEmitter),this.onResize=this._onResize.event,this._onWriteParsed=this.register(new l.EventEmitter),this.onWriteParsed=this._onWriteParsed.event,this._onScroll=this.register(new l.EventEmitter),this._instantiationService=new n.InstantiationService,this.optionsService=this.register(new h.OptionsService(e)),this._instantiationService.setService(r.IOptionsService,this.optionsService),this._bufferService=this.register(this._instantiationService.createInstance(a.BufferService)),this._instantiationService.setService(r.IBufferService,this._bufferService),this._logService=this.register(this._instantiationService.createInstance(o.LogService)),this._instantiationService.setService(r.ILogService,this._logService),this.coreService=this.register(this._instantiationService.createInstance(c.CoreService)),this._instantiationService.setService(r.ICoreService,this.coreService),this.coreMouseService=this.register(this._instantiationService.createInstance(d.CoreMouseService)),this._instantiationService.setService(r.ICoreMouseService,this.coreMouseService),this.unicodeService=this.register(this._instantiationService.createInstance(_.UnicodeService)),this._instantiationService.setService(r.IUnicodeService,this.unicodeService),this._charsetService=this._instantiationService.createInstance(u.CharsetService),this._instantiationService.setService(r.ICharsetService,this._charsetService),this._oscLinkService=this._instantiationService.createInstance(g.OscLinkService),this._instantiationService.setService(r.IOscLinkService,this._oscLinkService),this._inputHandler=this.register(new v.InputHandler(this._bufferService,this._charsetService,this.coreService,this._logService,this.optionsService,this._oscLinkService,this.coreMouseService,this.unicodeService)),this.register((0,l.forwardEvent)(this._inputHandler.onLineFeed,this._onLineFeed)),this.register(this._inputHandler),this.register((0,l.forwardEvent)(this._bufferService.onResize,this._onResize)),this.register((0,l.forwardEvent)(this.coreService.onData,this._onData)),this.register((0,l.forwardEvent)(this.coreService.onBinary,this._onBinary)),this.register(this.coreService.onRequestScrollToBottom((()=>this.scrollToBottom()))),this.register(this.coreService.onUserInput((()=>this._writeBuffer.handleUserInput()))),this.register(this.optionsService.onMultipleOptionChange(["windowsMode","windowsPty"],(()=>this._handleWindowsPtyOptionChange()))),this.register(this._bufferService.onScroll((e=>{this._onScroll.fire({position:this._bufferService.buffer.ydisp,source:0}),this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop,this._bufferService.buffer.scrollBottom)}))),this.register(this._inputHandler.onScroll((e=>{this._onScroll.fire({position:this._bufferService.buffer.ydisp,source:0}),this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop,this._bufferService.buffer.scrollBottom)}))),this._writeBuffer=this.register(new p.WriteBuffer(((e,t)=>this._inputHandler.parse(e,t)))),this.register((0,l.forwardEvent)(this._writeBuffer.onWriteParsed,this._onWriteParsed))}write(e,t){this._writeBuffer.write(e,t)}writeSync(e,t){this._logService.logLevel<=r.LogLevelEnum.WARN&&!m&&(this._logService.warn("writeSync is unreliable and will be removed soon."),m=!0),this._writeBuffer.writeSync(e,t)}input(e,t=!0){this.coreService.triggerDataEvent(e,t)}resize(e,t){isNaN(e)||isNaN(t)||(e=Math.max(e,a.MINIMUM_COLS),t=Math.max(t,a.MINIMUM_ROWS),this._bufferService.resize(e,t))}scroll(e,t=!1){this._bufferService.scroll(e,t)}scrollLines(e,t,i){this._bufferService.scrollLines(e,t,i)}scrollPages(e){this.scrollLines(e*(this.rows-1))}scrollToTop(){this.scrollLines(-this._bufferService.buffer.ydisp)}scrollToBottom(){this.scrollLines(this._bufferService.buffer.ybase-this._bufferService.buffer.ydisp)}scrollToLine(e){const t=e-this._bufferService.buffer.ydisp;0!==t&&this.scrollLines(t)}registerEscHandler(e,t){return this._inputHandler.registerEscHandler(e,t)}registerDcsHandler(e,t){return this._inputHandler.registerDcsHandler(e,t)}registerCsiHandler(e,t){return this._inputHandler.registerCsiHandler(e,t)}registerOscHandler(e,t){return this._inputHandler.registerOscHandler(e,t)}_setup(){this._handleWindowsPtyOptionChange()}reset(){this._inputHandler.reset(),this._bufferService.reset(),this._charsetService.reset(),this.coreService.reset(),this.coreMouseService.reset()}_handleWindowsPtyOptionChange(){let e=!1;const t=this.optionsService.rawOptions.windowsPty;t&&void 0!==t.buildNumber&&void 0!==t.buildNumber?e=!!("conpty"===t.backend&&t.buildNumber<21376):this.optionsService.rawOptions.windowsMode&&(e=!0),e?this._enableWindowsWrappingHeuristics():this._windowsWrappingHeuristics.clear()}_enableWindowsWrappingHeuristics(){if(!this._windowsWrappingHeuristics.value){const e=[];e.push(this.onLineFeed(f.updateWindowsModeWrappedState.bind(null,this._bufferService))),e.push(this.registerCsiHandler({final:"H"},(()=>((0,f.updateWindowsModeWrappedState)(this._bufferService),!1)))),this._windowsWrappingHeuristics.value=(0,s.toDisposable)((()=>{for(const t of e)t.dispose()}))}}}t.CoreTerminal=S},8460:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.runAndSubscribe=t.forwardEvent=t.EventEmitter=void 0,t.EventEmitter=class{constructor(){this._listeners=[],this._disposed=!1}get event(){return this._event||(this._event=e=>(this._listeners.push(e),{dispose:()=>{if(!this._disposed)for(let t=0;t<this._listeners.length;t++)if(this._listeners[t]===e)return void this._listeners.splice(t,1)}})),this._event}fire(e,t){const i=[];for(let e=0;e<this._listeners.length;e++)i.push(this._listeners[e]);for(let s=0;s<i.length;s++)i[s].call(void 0,e,t)}dispose(){this.clearListeners(),this._disposed=!0}clearListeners(){this._listeners&&(this._listeners.length=0)}},t.forwardEvent=function(e,t){return e((e=>t.fire(e)))},t.runAndSubscribe=function(e,t){return t(void 0),e((e=>t(e)))}},5435:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.InputHandler=t.WindowsOptionsReportType=void 0;const n=i(2584),o=i(7116),a=i(2015),h=i(844),c=i(482),l=i(8437),d=i(8460),_=i(643),u=i(511),f=i(3734),v=i(2585),p=i(1480),g=i(6242),m=i(6351),S=i(5941),C={"(":0,")":1,"*":2,"+":3,"-":1,".":2},b=131072;function w(e,t){if(e>24)return t.setWinLines||!1;switch(e){case 1:return!!t.restoreWin;case 2:return!!t.minimizeWin;case 3:return!!t.setWinPosition;case 4:return!!t.setWinSizePixels;case 5:return!!t.raiseWin;case 6:return!!t.lowerWin;case 7:return!!t.refreshWin;case 8:return!!t.setWinSizeChars;case 9:return!!t.maximizeWin;case 10:return!!t.fullscreenWin;case 11:return!!t.getWinState;case 13:return!!t.getWinPosition;case 14:return!!t.getWinSizePixels;case 15:return!!t.getScreenSizePixels;case 16:return!!t.getCellSizePixels;case 18:return!!t.getWinSizeChars;case 19:return!!t.getScreenSizeChars;case 20:return!!t.getIconTitle;case 21:return!!t.getWinTitle;case 22:return!!t.pushTitle;case 23:return!!t.popTitle;case 24:return!!t.setWinLines}return!1}var y;!function(e){e[e.GET_WIN_SIZE_PIXELS=0]="GET_WIN_SIZE_PIXELS",e[e.GET_CELL_SIZE_PIXELS=1]="GET_CELL_SIZE_PIXELS"}(y||(t.WindowsOptionsReportType=y={}));let E=0;class k extends h.Disposable{getAttrData(){return this._curAttrData}constructor(e,t,i,s,r,h,_,f,v=new a.EscapeSequenceParser){super(),this._bufferService=e,this._charsetService=t,this._coreService=i,this._logService=s,this._optionsService=r,this._oscLinkService=h,this._coreMouseService=_,this._unicodeService=f,this._parser=v,this._parseBuffer=new Uint32Array(4096),this._stringDecoder=new c.StringToUtf32,this._utf8Decoder=new c.Utf8ToUtf32,this._workCell=new u.CellData,this._windowTitle="",this._iconName="",this._windowTitleStack=[],this._iconNameStack=[],this._curAttrData=l.DEFAULT_ATTR_DATA.clone(),this._eraseAttrDataInternal=l.DEFAULT_ATTR_DATA.clone(),this._onRequestBell=this.register(new d.EventEmitter),this.onRequestBell=this._onRequestBell.event,this._onRequestRefreshRows=this.register(new d.EventEmitter),this.onRequestRefreshRows=this._onRequestRefreshRows.event,this._onRequestReset=this.register(new d.EventEmitter),this.onRequestReset=this._onRequestReset.event,this._onRequestSendFocus=this.register(new d.EventEmitter),this.onRequestSendFocus=this._onRequestSendFocus.event,this._onRequestSyncScrollBar=this.register(new d.EventEmitter),this.onRequestSyncScrollBar=this._onRequestSyncScrollBar.event,this._onRequestWindowsOptionsReport=this.register(new d.EventEmitter),this.onRequestWindowsOptionsReport=this._onRequestWindowsOptionsReport.event,this._onA11yChar=this.register(new d.EventEmitter),this.onA11yChar=this._onA11yChar.event,this._onA11yTab=this.register(new d.EventEmitter),this.onA11yTab=this._onA11yTab.event,this._onCursorMove=this.register(new d.EventEmitter),this.onCursorMove=this._onCursorMove.event,this._onLineFeed=this.register(new d.EventEmitter),this.onLineFeed=this._onLineFeed.event,this._onScroll=this.register(new d.EventEmitter),this.onScroll=this._onScroll.event,this._onTitleChange=this.register(new d.EventEmitter),this.onTitleChange=this._onTitleChange.event,this._onColor=this.register(new d.EventEmitter),this.onColor=this._onColor.event,this._parseStack={paused:!1,cursorStartX:0,cursorStartY:0,decodedLength:0,position:0},this._specialColors=[256,257,258],this.register(this._parser),this._dirtyRowTracker=new L(this._bufferService),this._activeBuffer=this._bufferService.buffer,this.register(this._bufferService.buffers.onBufferActivate((e=>this._activeBuffer=e.activeBuffer))),this._parser.setCsiHandlerFallback(((e,t)=>{this._logService.debug("Unknown CSI code: ",{identifier:this._parser.identToString(e),params:t.toArray()})})),this._parser.setEscHandlerFallback((e=>{this._logService.debug("Unknown ESC code: ",{identifier:this._parser.identToString(e)})})),this._parser.setExecuteHandlerFallback((e=>{this._logService.debug("Unknown EXECUTE code: ",{code:e})})),this._parser.setOscHandlerFallback(((e,t,i)=>{this._logService.debug("Unknown OSC code: ",{identifier:e,action:t,data:i})})),this._parser.setDcsHandlerFallback(((e,t,i)=>{"HOOK"===t&&(i=i.toArray()),this._logService.debug("Unknown DCS code: ",{identifier:this._parser.identToString(e),action:t,payload:i})})),this._parser.setPrintHandler(((e,t,i)=>this.print(e,t,i))),this._parser.registerCsiHandler({final:"@"},(e=>this.insertChars(e))),this._parser.registerCsiHandler({intermediates:" ",final:"@"},(e=>this.scrollLeft(e))),this._parser.registerCsiHandler({final:"A"},(e=>this.cursorUp(e))),this._parser.registerCsiHandler({intermediates:" ",final:"A"},(e=>this.scrollRight(e))),this._parser.registerCsiHandler({final:"B"},(e=>this.cursorDown(e))),this._parser.registerCsiHandler({final:"C"},(e=>this.cursorForward(e))),this._parser.registerCsiHandler({final:"D"},(e=>this.cursorBackward(e))),this._parser.registerCsiHandler({final:"E"},(e=>this.cursorNextLine(e))),this._parser.registerCsiHandler({final:"F"},(e=>this.cursorPrecedingLine(e))),this._parser.registerCsiHandler({final:"G"},(e=>this.cursorCharAbsolute(e))),this._parser.registerCsiHandler({final:"H"},(e=>this.cursorPosition(e))),this._parser.registerCsiHandler({final:"I"},(e=>this.cursorForwardTab(e))),this._parser.registerCsiHandler({final:"J"},(e=>this.eraseInDisplay(e,!1))),this._parser.registerCsiHandler({prefix:"?",final:"J"},(e=>this.eraseInDisplay(e,!0))),this._parser.registerCsiHandler({final:"K"},(e=>this.eraseInLine(e,!1))),this._parser.registerCsiHandler({prefix:"?",final:"K"},(e=>this.eraseInLine(e,!0))),this._parser.registerCsiHandler({final:"L"},(e=>this.insertLines(e))),this._parser.registerCsiHandler({final:"M"},(e=>this.deleteLines(e))),this._parser.registerCsiHandler({final:"P"},(e=>this.deleteChars(e))),this._parser.registerCsiHandler({final:"S"},(e=>this.scrollUp(e))),this._parser.registerCsiHandler({final:"T"},(e=>this.scrollDown(e))),this._parser.registerCsiHandler({final:"X"},(e=>this.eraseChars(e))),this._parser.registerCsiHandler({final:"Z"},(e=>this.cursorBackwardTab(e))),this._parser.registerCsiHandler({final:"`"},(e=>this.charPosAbsolute(e))),this._parser.registerCsiHandler({final:"a"},(e=>this.hPositionRelative(e))),this._parser.registerCsiHandler({final:"b"},(e=>this.repeatPrecedingCharacter(e))),this._parser.registerCsiHandler({final:"c"},(e=>this.sendDeviceAttributesPrimary(e))),this._parser.registerCsiHandler({prefix:">",final:"c"},(e=>this.sendDeviceAttributesSecondary(e))),this._parser.registerCsiHandler({final:"d"},(e=>this.linePosAbsolute(e))),this._parser.registerCsiHandler({final:"e"},(e=>this.vPositionRelative(e))),this._parser.registerCsiHandler({final:"f"},(e=>this.hVPosition(e))),this._parser.registerCsiHandler({final:"g"},(e=>this.tabClear(e))),this._parser.registerCsiHandler({final:"h"},(e=>this.setMode(e))),this._parser.registerCsiHandler({prefix:"?",final:"h"},(e=>this.setModePrivate(e))),this._parser.registerCsiHandler({final:"l"},(e=>this.resetMode(e))),this._parser.registerCsiHandler({prefix:"?",final:"l"},(e=>this.resetModePrivate(e))),this._parser.registerCsiHandler({final:"m"},(e=>this.charAttributes(e))),this._parser.registerCsiHandler({final:"n"},(e=>this.deviceStatus(e))),this._parser.registerCsiHandler({prefix:"?",final:"n"},(e=>this.deviceStatusPrivate(e))),this._parser.registerCsiHandler({intermediates:"!",final:"p"},(e=>this.softReset(e))),this._parser.registerCsiHandler({intermediates:" ",final:"q"},(e=>this.setCursorStyle(e))),this._parser.registerCsiHandler({final:"r"},(e=>this.setScrollRegion(e))),this._parser.registerCsiHandler({final:"s"},(e=>this.saveCursor(e))),this._parser.registerCsiHandler({final:"t"},(e=>this.windowOptions(e))),this._parser.registerCsiHandler({final:"u"},(e=>this.restoreCursor(e))),this._parser.registerCsiHandler({intermediates:"'",final:"}"},(e=>this.insertColumns(e))),this._parser.registerCsiHandler({intermediates:"'",final:"~"},(e=>this.deleteColumns(e))),this._parser.registerCsiHandler({intermediates:'"',final:"q"},(e=>this.selectProtected(e))),this._parser.registerCsiHandler({intermediates:"$",final:"p"},(e=>this.requestMode(e,!0))),this._parser.registerCsiHandler({prefix:"?",intermediates:"$",final:"p"},(e=>this.requestMode(e,!1))),this._parser.setExecuteHandler(n.C0.BEL,(()=>this.bell())),this._parser.setExecuteHandler(n.C0.LF,(()=>this.lineFeed())),this._parser.setExecuteHandler(n.C0.VT,(()=>this.lineFeed())),this._parser.setExecuteHandler(n.C0.FF,(()=>this.lineFeed())),this._parser.setExecuteHandler(n.C0.CR,(()=>this.carriageReturn())),this._parser.setExecuteHandler(n.C0.BS,(()=>this.backspace())),this._parser.setExecuteHandler(n.C0.HT,(()=>this.tab())),this._parser.setExecuteHandler(n.C0.SO,(()=>this.shiftOut())),this._parser.setExecuteHandler(n.C0.SI,(()=>this.shiftIn())),this._parser.setExecuteHandler(n.C1.IND,(()=>this.index())),this._parser.setExecuteHandler(n.C1.NEL,(()=>this.nextLine())),this._parser.setExecuteHandler(n.C1.HTS,(()=>this.tabSet())),this._parser.registerOscHandler(0,new g.OscHandler((e=>(this.setTitle(e),this.setIconName(e),!0)))),this._parser.registerOscHandler(1,new g.OscHandler((e=>this.setIconName(e)))),this._parser.registerOscHandler(2,new g.OscHandler((e=>this.setTitle(e)))),this._parser.registerOscHandler(4,new g.OscHandler((e=>this.setOrReportIndexedColor(e)))),this._parser.registerOscHandler(8,new g.OscHandler((e=>this.setHyperlink(e)))),this._parser.registerOscHandler(10,new g.OscHandler((e=>this.setOrReportFgColor(e)))),this._parser.registerOscHandler(11,new g.OscHandler((e=>this.setOrReportBgColor(e)))),this._parser.registerOscHandler(12,new g.OscHandler((e=>this.setOrReportCursorColor(e)))),this._parser.registerOscHandler(104,new g.OscHandler((e=>this.restoreIndexedColor(e)))),this._parser.registerOscHandler(110,new g.OscHandler((e=>this.restoreFgColor(e)))),this._parser.registerOscHandler(111,new g.OscHandler((e=>this.restoreBgColor(e)))),this._parser.registerOscHandler(112,new g.OscHandler((e=>this.restoreCursorColor(e)))),this._parser.registerEscHandler({final:"7"},(()=>this.saveCursor())),this._parser.registerEscHandler({final:"8"},(()=>this.restoreCursor())),this._parser.registerEscHandler({final:"D"},(()=>this.index())),this._parser.registerEscHandler({final:"E"},(()=>this.nextLine())),this._parser.registerEscHandler({final:"H"},(()=>this.tabSet())),this._parser.registerEscHandler({final:"M"},(()=>this.reverseIndex())),this._parser.registerEscHandler({final:"="},(()=>this.keypadApplicationMode())),this._parser.registerEscHandler({final:">"},(()=>this.keypadNumericMode())),this._parser.registerEscHandler({final:"c"},(()=>this.fullReset())),this._parser.registerEscHandler({final:"n"},(()=>this.setgLevel(2))),this._parser.registerEscHandler({final:"o"},(()=>this.setgLevel(3))),this._parser.registerEscHandler({final:"|"},(()=>this.setgLevel(3))),this._parser.registerEscHandler({final:"}"},(()=>this.setgLevel(2))),this._parser.registerEscHandler({final:"~"},(()=>this.setgLevel(1))),this._parser.registerEscHandler({intermediates:"%",final:"@"},(()=>this.selectDefaultCharset())),this._parser.registerEscHandler({intermediates:"%",final:"G"},(()=>this.selectDefaultCharset()));for(const e in o.CHARSETS)this._parser.registerEscHandler({intermediates:"(",final:e},(()=>this.selectCharset("("+e))),this._parser.registerEscHandler({intermediates:")",final:e},(()=>this.selectCharset(")"+e))),this._parser.registerEscHandler({intermediates:"*",final:e},(()=>this.selectCharset("*"+e))),this._parser.registerEscHandler({intermediates:"+",final:e},(()=>this.selectCharset("+"+e))),this._parser.registerEscHandler({intermediates:"-",final:e},(()=>this.selectCharset("-"+e))),this._parser.registerEscHandler({intermediates:".",final:e},(()=>this.selectCharset("."+e))),this._parser.registerEscHandler({intermediates:"/",final:e},(()=>this.selectCharset("/"+e)));this._parser.registerEscHandler({intermediates:"#",final:"8"},(()=>this.screenAlignmentPattern())),this._parser.setErrorHandler((e=>(this._logService.error("Parsing error: ",e),e))),this._parser.registerDcsHandler({intermediates:"$",final:"q"},new m.DcsHandler(((e,t)=>this.requestStatusString(e,t))))}_preserveStack(e,t,i,s){this._parseStack.paused=!0,this._parseStack.cursorStartX=e,this._parseStack.cursorStartY=t,this._parseStack.decodedLength=i,this._parseStack.position=s}_logSlowResolvingAsync(e){this._logService.logLevel<=v.LogLevelEnum.WARN&&Promise.race([e,new Promise(((e,t)=>setTimeout((()=>t("#SLOW_TIMEOUT")),5e3)))]).catch((e=>{if("#SLOW_TIMEOUT"!==e)throw e;console.warn("async parser handler taking longer than 5000 ms")}))}_getCurrentLinkId(){return this._curAttrData.extended.urlId}parse(e,t){let i,s=this._activeBuffer.x,r=this._activeBuffer.y,n=0;const o=this._parseStack.paused;if(o){if(i=this._parser.parse(this._parseBuffer,this._parseStack.decodedLength,t))return this._logSlowResolvingAsync(i),i;s=this._parseStack.cursorStartX,r=this._parseStack.cursorStartY,this._parseStack.paused=!1,e.length>b&&(n=this._parseStack.position+b)}if(this._logService.logLevel<=v.LogLevelEnum.DEBUG&&this._logService.debug("parsing data"+("string"==typeof e?` "${e}"`:` "${Array.prototype.map.call(e,(e=>String.fromCharCode(e))).join("")}"`),"string"==typeof e?e.split("").map((e=>e.charCodeAt(0))):e),this._parseBuffer.length<e.length&&this._parseBuffer.length<b&&(this._parseBuffer=new Uint32Array(Math.min(e.length,b))),o||this._dirtyRowTracker.clearRange(),e.length>b)for(let t=n;t<e.length;t+=b){const n=t+b<e.length?t+b:e.length,o="string"==typeof e?this._stringDecoder.decode(e.substring(t,n),this._parseBuffer):this._utf8Decoder.decode(e.subarray(t,n),this._parseBuffer);if(i=this._parser.parse(this._parseBuffer,o))return this._preserveStack(s,r,o,t),this._logSlowResolvingAsync(i),i}else if(!o){const t="string"==typeof e?this._stringDecoder.decode(e,this._parseBuffer):this._utf8Decoder.decode(e,this._parseBuffer);if(i=this._parser.parse(this._parseBuffer,t))return this._preserveStack(s,r,t,0),this._logSlowResolvingAsync(i),i}this._activeBuffer.x===s&&this._activeBuffer.y===r||this._onCursorMove.fire();const a=this._dirtyRowTracker.end+(this._bufferService.buffer.ybase-this._bufferService.buffer.ydisp),h=this._dirtyRowTracker.start+(this._bufferService.buffer.ybase-this._bufferService.buffer.ydisp);h<this._bufferService.rows&&this._onRequestRefreshRows.fire(Math.min(h,this._bufferService.rows-1),Math.min(a,this._bufferService.rows-1))}print(e,t,i){let s,r;const n=this._charsetService.charset,o=this._optionsService.rawOptions.screenReaderMode,a=this._bufferService.cols,h=this._coreService.decPrivateModes.wraparound,d=this._coreService.modes.insertMode,u=this._curAttrData;let f=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y);this._dirtyRowTracker.markDirty(this._activeBuffer.y),this._activeBuffer.x&&i-t>0&&2===f.getWidth(this._activeBuffer.x-1)&&f.setCellFromCodepoint(this._activeBuffer.x-1,0,1,u);let v=this._parser.precedingJoinState;for(let g=t;g<i;++g){if(s=e[g],s<127&&n){const e=n[String.fromCharCode(s)];e&&(s=e.charCodeAt(0))}const t=this._unicodeService.charProperties(s,v);r=p.UnicodeService.extractWidth(t);const i=p.UnicodeService.extractShouldJoin(t),m=i?p.UnicodeService.extractWidth(v):0;if(v=t,o&&this._onA11yChar.fire((0,c.stringFromCodePoint)(s)),this._getCurrentLinkId()&&this._oscLinkService.addLineToLink(this._getCurrentLinkId(),this._activeBuffer.ybase+this._activeBuffer.y),this._activeBuffer.x+r-m>a)if(h){const e=f;let t=this._activeBuffer.x-m;for(this._activeBuffer.x=m,this._activeBuffer.y++,this._activeBuffer.y===this._activeBuffer.scrollBottom+1?(this._activeBuffer.y--,this._bufferService.scroll(this._eraseAttrData(),!0)):(this._activeBuffer.y>=this._bufferService.rows&&(this._activeBuffer.y=this._bufferService.rows-1),this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y).isWrapped=!0),f=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y),m>0&&f instanceof l.BufferLine&&f.copyCellsFrom(e,t,0,m,!1);t<a;)e.setCellFromCodepoint(t++,0,1,u)}else if(this._activeBuffer.x=a-1,2===r)continue;if(i&&this._activeBuffer.x){const e=f.getWidth(this._activeBuffer.x-1)?1:2;f.addCodepointToCell(this._activeBuffer.x-e,s,r);for(let e=r-m;--e>=0;)f.setCellFromCodepoint(this._activeBuffer.x++,0,0,u)}else if(d&&(f.insertCells(this._activeBuffer.x,r-m,this._activeBuffer.getNullCell(u)),2===f.getWidth(a-1)&&f.setCellFromCodepoint(a-1,_.NULL_CELL_CODE,_.NULL_CELL_WIDTH,u)),f.setCellFromCodepoint(this._activeBuffer.x++,s,r,u),r>0)for(;--r;)f.setCellFromCodepoint(this._activeBuffer.x++,0,0,u)}this._parser.precedingJoinState=v,this._activeBuffer.x<a&&i-t>0&&0===f.getWidth(this._activeBuffer.x)&&!f.hasContent(this._activeBuffer.x)&&f.setCellFromCodepoint(this._activeBuffer.x,0,1,u),this._dirtyRowTracker.markDirty(this._activeBuffer.y)}registerCsiHandler(e,t){return"t"!==e.final||e.prefix||e.intermediates?this._parser.registerCsiHandler(e,t):this._parser.registerCsiHandler(e,(e=>!w(e.params[0],this._optionsService.rawOptions.windowOptions)||t(e)))}registerDcsHandler(e,t){return this._parser.registerDcsHandler(e,new m.DcsHandler(t))}registerEscHandler(e,t){return this._parser.registerEscHandler(e,t)}registerOscHandler(e,t){return this._parser.registerOscHandler(e,new g.OscHandler(t))}bell(){return this._onRequestBell.fire(),!0}lineFeed(){return this._dirtyRowTracker.markDirty(this._activeBuffer.y),this._optionsService.rawOptions.convertEol&&(this._activeBuffer.x=0),this._activeBuffer.y++,this._activeBuffer.y===this._activeBuffer.scrollBottom+1?(this._activeBuffer.y--,this._bufferService.scroll(this._eraseAttrData())):this._activeBuffer.y>=this._bufferService.rows?this._activeBuffer.y=this._bufferService.rows-1:this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y).isWrapped=!1,this._activeBuffer.x>=this._bufferService.cols&&this._activeBuffer.x--,this._dirtyRowTracker.markDirty(this._activeBuffer.y),this._onLineFeed.fire(),!0}carriageReturn(){return this._activeBuffer.x=0,!0}backspace(){if(!this._coreService.decPrivateModes.reverseWraparound)return this._restrictCursor(),this._activeBuffer.x>0&&this._activeBuffer.x--,!0;if(this._restrictCursor(this._bufferService.cols),this._activeBuffer.x>0)this._activeBuffer.x--;else if(0===this._activeBuffer.x&&this._activeBuffer.y>this._activeBuffer.scrollTop&&this._activeBuffer.y<=this._activeBuffer.scrollBottom&&this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y)?.isWrapped){this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y).isWrapped=!1,this._activeBuffer.y--,this._activeBuffer.x=this._bufferService.cols-1;const e=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y);e.hasWidth(this._activeBuffer.x)&&!e.hasContent(this._activeBuffer.x)&&this._activeBuffer.x--}return this._restrictCursor(),!0}tab(){if(this._activeBuffer.x>=this._bufferService.cols)return!0;const e=this._activeBuffer.x;return this._activeBuffer.x=this._activeBuffer.nextStop(),this._optionsService.rawOptions.screenReaderMode&&this._onA11yTab.fire(this._activeBuffer.x-e),!0}shiftOut(){return this._charsetService.setgLevel(1),!0}shiftIn(){return this._charsetService.setgLevel(0),!0}_restrictCursor(e=this._bufferService.cols-1){this._activeBuffer.x=Math.min(e,Math.max(0,this._activeBuffer.x)),this._activeBuffer.y=this._coreService.decPrivateModes.origin?Math.min(this._activeBuffer.scrollBottom,Math.max(this._activeBuffer.scrollTop,this._activeBuffer.y)):Math.min(this._bufferService.rows-1,Math.max(0,this._activeBuffer.y)),this._dirtyRowTracker.markDirty(this._activeBuffer.y)}_setCursor(e,t){this._dirtyRowTracker.markDirty(this._activeBuffer.y),this._coreService.decPrivateModes.origin?(this._activeBuffer.x=e,this._activeBuffer.y=this._activeBuffer.scrollTop+t):(this._activeBuffer.x=e,this._activeBuffer.y=t),this._restrictCursor(),this._dirtyRowTracker.markDirty(this._activeBuffer.y)}_moveCursor(e,t){this._restrictCursor(),this._setCursor(this._activeBuffer.x+e,this._activeBuffer.y+t)}cursorUp(e){const t=this._activeBuffer.y-this._activeBuffer.scrollTop;return t>=0?this._moveCursor(0,-Math.min(t,e.params[0]||1)):this._moveCursor(0,-(e.params[0]||1)),!0}cursorDown(e){const t=this._activeBuffer.scrollBottom-this._activeBuffer.y;return t>=0?this._moveCursor(0,Math.min(t,e.params[0]||1)):this._moveCursor(0,e.params[0]||1),!0}cursorForward(e){return this._moveCursor(e.params[0]||1,0),!0}cursorBackward(e){return this._moveCursor(-(e.params[0]||1),0),!0}cursorNextLine(e){return this.cursorDown(e),this._activeBuffer.x=0,!0}cursorPrecedingLine(e){return this.cursorUp(e),this._activeBuffer.x=0,!0}cursorCharAbsolute(e){return this._setCursor((e.params[0]||1)-1,this._activeBuffer.y),!0}cursorPosition(e){return this._setCursor(e.length>=2?(e.params[1]||1)-1:0,(e.params[0]||1)-1),!0}charPosAbsolute(e){return this._setCursor((e.params[0]||1)-1,this._activeBuffer.y),!0}hPositionRelative(e){return this._moveCursor(e.params[0]||1,0),!0}linePosAbsolute(e){return this._setCursor(this._activeBuffer.x,(e.params[0]||1)-1),!0}vPositionRelative(e){return this._moveCursor(0,e.params[0]||1),!0}hVPosition(e){return this.cursorPosition(e),!0}tabClear(e){const t=e.params[0];return 0===t?delete this._activeBuffer.tabs[this._activeBuffer.x]:3===t&&(this._activeBuffer.tabs={}),!0}cursorForwardTab(e){if(this._activeBuffer.x>=this._bufferService.cols)return!0;let t=e.params[0]||1;for(;t--;)this._activeBuffer.x=this._activeBuffer.nextStop();return!0}cursorBackwardTab(e){if(this._activeBuffer.x>=this._bufferService.cols)return!0;let t=e.params[0]||1;for(;t--;)this._activeBuffer.x=this._activeBuffer.prevStop();return!0}selectProtected(e){const t=e.params[0];return 1===t&&(this._curAttrData.bg|=536870912),2!==t&&0!==t||(this._curAttrData.bg&=-536870913),!0}_eraseInBufferLine(e,t,i,s=!1,r=!1){const n=this._activeBuffer.lines.get(this._activeBuffer.ybase+e);n.replaceCells(t,i,this._activeBuffer.getNullCell(this._eraseAttrData()),r),s&&(n.isWrapped=!1)}_resetBufferLine(e,t=!1){const i=this._activeBuffer.lines.get(this._activeBuffer.ybase+e);i&&(i.fill(this._activeBuffer.getNullCell(this._eraseAttrData()),t),this._bufferService.buffer.clearMarkers(this._activeBuffer.ybase+e),i.isWrapped=!1)}eraseInDisplay(e,t=!1){let i;switch(this._restrictCursor(this._bufferService.cols),e.params[0]){case 0:for(i=this._activeBuffer.y,this._dirtyRowTracker.markDirty(i),this._eraseInBufferLine(i++,this._activeBuffer.x,this._bufferService.cols,0===this._activeBuffer.x,t);i<this._bufferService.rows;i++)this._resetBufferLine(i,t);this._dirtyRowTracker.markDirty(i);break;case 1:for(i=this._activeBuffer.y,this._dirtyRowTracker.markDirty(i),this._eraseInBufferLine(i,0,this._activeBuffer.x+1,!0,t),this._activeBuffer.x+1>=this._bufferService.cols&&(this._activeBuffer.lines.get(i+1).isWrapped=!1);i--;)this._resetBufferLine(i,t);this._dirtyRowTracker.markDirty(0);break;case 2:for(i=this._bufferService.rows,this._dirtyRowTracker.markDirty(i-1);i--;)this._resetBufferLine(i,t);this._dirtyRowTracker.markDirty(0);break;case 3:const e=this._activeBuffer.lines.length-this._bufferService.rows;e>0&&(this._activeBuffer.lines.trimStart(e),this._activeBuffer.ybase=Math.max(this._activeBuffer.ybase-e,0),this._activeBuffer.ydisp=Math.max(this._activeBuffer.ydisp-e,0),this._onScroll.fire(0))}return!0}eraseInLine(e,t=!1){switch(this._restrictCursor(this._bufferService.cols),e.params[0]){case 0:this._eraseInBufferLine(this._activeBuffer.y,this._activeBuffer.x,this._bufferService.cols,0===this._activeBuffer.x,t);break;case 1:this._eraseInBufferLine(this._activeBuffer.y,0,this._activeBuffer.x+1,!1,t);break;case 2:this._eraseInBufferLine(this._activeBuffer.y,0,this._bufferService.cols,!0,t)}return this._dirtyRowTracker.markDirty(this._activeBuffer.y),!0}insertLines(e){this._restrictCursor();let t=e.params[0]||1;if(this._activeBuffer.y>this._activeBuffer.scrollBottom||this._activeBuffer.y<this._activeBuffer.scrollTop)return!0;const i=this._activeBuffer.ybase+this._activeBuffer.y,s=this._bufferService.rows-1-this._activeBuffer.scrollBottom,r=this._bufferService.rows-1+this._activeBuffer.ybase-s+1;for(;t--;)this._activeBuffer.lines.splice(r-1,1),this._activeBuffer.lines.splice(i,0,this._activeBuffer.getBlankLine(this._eraseAttrData()));return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y,this._activeBuffer.scrollBottom),this._activeBuffer.x=0,!0}deleteLines(e){this._restrictCursor();let t=e.params[0]||1;if(this._activeBuffer.y>this._activeBuffer.scrollBottom||this._activeBuffer.y<this._activeBuffer.scrollTop)return!0;const i=this._activeBuffer.ybase+this._activeBuffer.y;let s;for(s=this._bufferService.rows-1-this._activeBuffer.scrollBottom,s=this._bufferService.rows-1+this._activeBuffer.ybase-s;t--;)this._activeBuffer.lines.splice(i,1),this._activeBuffer.lines.splice(s,0,this._activeBuffer.getBlankLine(this._eraseAttrData()));return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y,this._activeBuffer.scrollBottom),this._activeBuffer.x=0,!0}insertChars(e){this._restrictCursor();const t=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y);return t&&(t.insertCells(this._activeBuffer.x,e.params[0]||1,this._activeBuffer.getNullCell(this._eraseAttrData())),this._dirtyRowTracker.markDirty(this._activeBuffer.y)),!0}deleteChars(e){this._restrictCursor();const t=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y);return t&&(t.deleteCells(this._activeBuffer.x,e.params[0]||1,this._activeBuffer.getNullCell(this._eraseAttrData())),this._dirtyRowTracker.markDirty(this._activeBuffer.y)),!0}scrollUp(e){let t=e.params[0]||1;for(;t--;)this._activeBuffer.lines.splice(this._activeBuffer.ybase+this._activeBuffer.scrollTop,1),this._activeBuffer.lines.splice(this._activeBuffer.ybase+this._activeBuffer.scrollBottom,0,this._activeBuffer.getBlankLine(this._eraseAttrData()));return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom),!0}scrollDown(e){let t=e.params[0]||1;for(;t--;)this._activeBuffer.lines.splice(this._activeBuffer.ybase+this._activeBuffer.scrollBottom,1),this._activeBuffer.lines.splice(this._activeBuffer.ybase+this._activeBuffer.scrollTop,0,this._activeBuffer.getBlankLine(l.DEFAULT_ATTR_DATA));return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom),!0}scrollLeft(e){if(this._activeBuffer.y>this._activeBuffer.scrollBottom||this._activeBuffer.y<this._activeBuffer.scrollTop)return!0;const t=e.params[0]||1;for(let e=this._activeBuffer.scrollTop;e<=this._activeBuffer.scrollBottom;++e){const i=this._activeBuffer.lines.get(this._activeBuffer.ybase+e);i.deleteCells(0,t,this._activeBuffer.getNullCell(this._eraseAttrData())),i.isWrapped=!1}return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom),!0}scrollRight(e){if(this._activeBuffer.y>this._activeBuffer.scrollBottom||this._activeBuffer.y<this._activeBuffer.scrollTop)return!0;const t=e.params[0]||1;for(let e=this._activeBuffer.scrollTop;e<=this._activeBuffer.scrollBottom;++e){const i=this._activeBuffer.lines.get(this._activeBuffer.ybase+e);i.insertCells(0,t,this._activeBuffer.getNullCell(this._eraseAttrData())),i.isWrapped=!1}return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom),!0}insertColumns(e){if(this._activeBuffer.y>this._activeBuffer.scrollBottom||this._activeBuffer.y<this._activeBuffer.scrollTop)return!0;const t=e.params[0]||1;for(let e=this._activeBuffer.scrollTop;e<=this._activeBuffer.scrollBottom;++e){const i=this._activeBuffer.lines.get(this._activeBuffer.ybase+e);i.insertCells(this._activeBuffer.x,t,this._activeBuffer.getNullCell(this._eraseAttrData())),i.isWrapped=!1}return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom),!0}deleteColumns(e){if(this._activeBuffer.y>this._activeBuffer.scrollBottom||this._activeBuffer.y<this._activeBuffer.scrollTop)return!0;const t=e.params[0]||1;for(let e=this._activeBuffer.scrollTop;e<=this._activeBuffer.scrollBottom;++e){const i=this._activeBuffer.lines.get(this._activeBuffer.ybase+e);i.deleteCells(this._activeBuffer.x,t,this._activeBuffer.getNullCell(this._eraseAttrData())),i.isWrapped=!1}return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom),!0}eraseChars(e){this._restrictCursor();const t=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y);return t&&(t.replaceCells(this._activeBuffer.x,this._activeBuffer.x+(e.params[0]||1),this._activeBuffer.getNullCell(this._eraseAttrData())),this._dirtyRowTracker.markDirty(this._activeBuffer.y)),!0}repeatPrecedingCharacter(e){const t=this._parser.precedingJoinState;if(!t)return!0;const i=e.params[0]||1,s=p.UnicodeService.extractWidth(t),r=this._activeBuffer.x-s,n=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y).getString(r),o=new Uint32Array(n.length*i);let a=0;for(let e=0;e<n.length;){const t=n.codePointAt(e)||0;o[a++]=t,e+=t>65535?2:1}let h=a;for(let e=1;e<i;++e)o.copyWithin(h,0,a),h+=a;return this.print(o,0,h),!0}sendDeviceAttributesPrimary(e){return e.params[0]>0||(this._is("xterm")||this._is("rxvt-unicode")||this._is("screen")?this._coreService.triggerDataEvent(n.C0.ESC+"[?1;2c"):this._is("linux")&&this._coreService.triggerDataEvent(n.C0.ESC+"[?6c")),!0}sendDeviceAttributesSecondary(e){return e.params[0]>0||(this._is("xterm")?this._coreService.triggerDataEvent(n.C0.ESC+"[>0;276;0c"):this._is("rxvt-unicode")?this._coreService.triggerDataEvent(n.C0.ESC+"[>85;95;0c"):this._is("linux")?this._coreService.triggerDataEvent(e.params[0]+"c"):this._is("screen")&&this._coreService.triggerDataEvent(n.C0.ESC+"[>83;40003;0c")),!0}_is(e){return 0===(this._optionsService.rawOptions.termName+"").indexOf(e)}setMode(e){for(let t=0;t<e.length;t++)switch(e.params[t]){case 4:this._coreService.modes.insertMode=!0;break;case 20:this._optionsService.options.convertEol=!0}return!0}setModePrivate(e){for(let t=0;t<e.length;t++)switch(e.params[t]){case 1:this._coreService.decPrivateModes.applicationCursorKeys=!0;break;case 2:this._charsetService.setgCharset(0,o.DEFAULT_CHARSET),this._charsetService.setgCharset(1,o.DEFAULT_CHARSET),this._charsetService.setgCharset(2,o.DEFAULT_CHARSET),this._charsetService.setgCharset(3,o.DEFAULT_CHARSET);break;case 3:this._optionsService.rawOptions.windowOptions.setWinLines&&(this._bufferService.resize(132,this._bufferService.rows),this._onRequestReset.fire());break;case 6:this._coreService.decPrivateModes.origin=!0,this._setCursor(0,0);break;case 7:this._coreService.decPrivateModes.wraparound=!0;break;case 12:this._optionsService.options.cursorBlink=!0;break;case 45:this._coreService.decPrivateModes.reverseWraparound=!0;break;case 66:this._logService.debug("Serial port requested application keypad."),this._coreService.decPrivateModes.applicationKeypad=!0,this._onRequestSyncScrollBar.fire();break;case 9:this._coreMouseService.activeProtocol="X10";break;case 1e3:this._coreMouseService.activeProtocol="VT200";break;case 1002:this._coreMouseService.activeProtocol="DRAG";break;case 1003:this._coreMouseService.activeProtocol="ANY";break;case 1004:this._coreService.decPrivateModes.sendFocus=!0,this._onRequestSendFocus.fire();break;case 1005:this._logService.debug("DECSET 1005 not supported (see #2507)");break;case 1006:this._coreMouseService.activeEncoding="SGR";break;case 1015:this._logService.debug("DECSET 1015 not supported (see #2507)");break;case 1016:this._coreMouseService.activeEncoding="SGR_PIXELS";break;case 25:this._coreService.isCursorHidden=!1;break;case 1048:this.saveCursor();break;case 1049:this.saveCursor();case 47:case 1047:this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()),this._coreService.isCursorInitialized=!0,this._onRequestRefreshRows.fire(0,this._bufferService.rows-1),this._onRequestSyncScrollBar.fire();break;case 2004:this._coreService.decPrivateModes.bracketedPasteMode=!0}return!0}resetMode(e){for(let t=0;t<e.length;t++)switch(e.params[t]){case 4:this._coreService.modes.insertMode=!1;break;case 20:this._optionsService.options.convertEol=!1}return!0}resetModePrivate(e){for(let t=0;t<e.length;t++)switch(e.params[t]){case 1:this._coreService.decPrivateModes.applicationCursorKeys=!1;break;case 3:this._optionsService.rawOptions.windowOptions.setWinLines&&(this._bufferService.resize(80,this._bufferService.rows),this._onRequestReset.fire());break;case 6:this._coreService.decPrivateModes.origin=!1,this._setCursor(0,0);break;case 7:this._coreService.decPrivateModes.wraparound=!1;break;case 12:this._optionsService.options.cursorBlink=!1;break;case 45:this._coreService.decPrivateModes.reverseWraparound=!1;break;case 66:this._logService.debug("Switching back to normal keypad."),this._coreService.decPrivateModes.applicationKeypad=!1,this._onRequestSyncScrollBar.fire();break;case 9:case 1e3:case 1002:case 1003:this._coreMouseService.activeProtocol="NONE";break;case 1004:this._coreService.decPrivateModes.sendFocus=!1;break;case 1005:this._logService.debug("DECRST 1005 not supported (see #2507)");break;case 1006:case 1016:this._coreMouseService.activeEncoding="DEFAULT";break;case 1015:this._logService.debug("DECRST 1015 not supported (see #2507)");break;case 25:this._coreService.isCursorHidden=!0;break;case 1048:this.restoreCursor();break;case 1049:case 47:case 1047:this._bufferService.buffers.activateNormalBuffer(),1049===e.params[t]&&this.restoreCursor(),this._coreService.isCursorInitialized=!0,this._onRequestRefreshRows.fire(0,this._bufferService.rows-1),this._onRequestSyncScrollBar.fire();break;case 2004:this._coreService.decPrivateModes.bracketedPasteMode=!1}return!0}requestMode(e,t){const i=this._coreService.decPrivateModes,{activeProtocol:s,activeEncoding:r}=this._coreMouseService,o=this._coreService,{buffers:a,cols:h}=this._bufferService,{active:c,alt:l}=a,d=this._optionsService.rawOptions,_=e=>e?1:2,u=e.params[0];return f=u,v=t?2===u?4:4===u?_(o.modes.insertMode):12===u?3:20===u?_(d.convertEol):0:1===u?_(i.applicationCursorKeys):3===u?d.windowOptions.setWinLines?80===h?2:132===h?1:0:0:6===u?_(i.origin):7===u?_(i.wraparound):8===u?3:9===u?_("X10"===s):12===u?_(d.cursorBlink):25===u?_(!o.isCursorHidden):45===u?_(i.reverseWraparound):66===u?_(i.applicationKeypad):67===u?4:1e3===u?_("VT200"===s):1002===u?_("DRAG"===s):1003===u?_("ANY"===s):1004===u?_(i.sendFocus):1005===u?4:1006===u?_("SGR"===r):1015===u?4:1016===u?_("SGR_PIXELS"===r):1048===u?1:47===u||1047===u||1049===u?_(c===l):2004===u?_(i.bracketedPasteMode):0,o.triggerDataEvent(`${n.C0.ESC}[${t?"":"?"}${f};${v}$y`),!0;var f,v}_updateAttrColor(e,t,i,s,r){return 2===t?(e|=50331648,e&=-16777216,e|=f.AttributeData.fromColorRGB([i,s,r])):5===t&&(e&=-50331904,e|=33554432|255&i),e}_extractColor(e,t,i){const s=[0,0,-1,0,0,0];let r=0,n=0;do{if(s[n+r]=e.params[t+n],e.hasSubParams(t+n)){const i=e.getSubParams(t+n);let o=0;do{5===s[1]&&(r=1),s[n+o+1+r]=i[o]}while(++o<i.length&&o+n+1+r<s.length);break}if(5===s[1]&&n+r>=2||2===s[1]&&n+r>=5)break;s[1]&&(r=1)}while(++n+t<e.length&&n+r<s.length);for(let e=2;e<s.length;++e)-1===s[e]&&(s[e]=0);switch(s[0]){case 38:i.fg=this._updateAttrColor(i.fg,s[1],s[3],s[4],s[5]);break;case 48:i.bg=this._updateAttrColor(i.bg,s[1],s[3],s[4],s[5]);break;case 58:i.extended=i.extended.clone(),i.extended.underlineColor=this._updateAttrColor(i.extended.underlineColor,s[1],s[3],s[4],s[5])}return n}_processUnderline(e,t){t.extended=t.extended.clone(),(!~e||e>5)&&(e=1),t.extended.underlineStyle=e,t.fg|=268435456,0===e&&(t.fg&=-268435457),t.updateExtended()}_processSGR0(e){e.fg=l.DEFAULT_ATTR_DATA.fg,e.bg=l.DEFAULT_ATTR_DATA.bg,e.extended=e.extended.clone(),e.extended.underlineStyle=0,e.extended.underlineColor&=-67108864,e.updateExtended()}charAttributes(e){if(1===e.length&&0===e.params[0])return this._processSGR0(this._curAttrData),!0;const t=e.length;let i;const s=this._curAttrData;for(let r=0;r<t;r++)i=e.params[r],i>=30&&i<=37?(s.fg&=-50331904,s.fg|=16777216|i-30):i>=40&&i<=47?(s.bg&=-50331904,s.bg|=16777216|i-40):i>=90&&i<=97?(s.fg&=-50331904,s.fg|=16777224|i-90):i>=100&&i<=107?(s.bg&=-50331904,s.bg|=16777224|i-100):0===i?this._processSGR0(s):1===i?s.fg|=134217728:3===i?s.bg|=67108864:4===i?(s.fg|=268435456,this._processUnderline(e.hasSubParams(r)?e.getSubParams(r)[0]:1,s)):5===i?s.fg|=536870912:7===i?s.fg|=67108864:8===i?s.fg|=1073741824:9===i?s.fg|=2147483648:2===i?s.bg|=134217728:21===i?this._processUnderline(2,s):22===i?(s.fg&=-134217729,s.bg&=-134217729):23===i?s.bg&=-67108865:24===i?(s.fg&=-268435457,this._processUnderline(0,s)):25===i?s.fg&=-536870913:27===i?s.fg&=-67108865:28===i?s.fg&=-1073741825:29===i?s.fg&=2147483647:39===i?(s.fg&=-67108864,s.fg|=16777215&l.DEFAULT_ATTR_DATA.fg):49===i?(s.bg&=-67108864,s.bg|=16777215&l.DEFAULT_ATTR_DATA.bg):38===i||48===i||58===i?r+=this._extractColor(e,r,s):53===i?s.bg|=1073741824:55===i?s.bg&=-1073741825:59===i?(s.extended=s.extended.clone(),s.extended.underlineColor=-1,s.updateExtended()):100===i?(s.fg&=-67108864,s.fg|=16777215&l.DEFAULT_ATTR_DATA.fg,s.bg&=-67108864,s.bg|=16777215&l.DEFAULT_ATTR_DATA.bg):this._logService.debug("Unknown SGR attribute: %d.",i);return!0}deviceStatus(e){switch(e.params[0]){case 5:this._coreService.triggerDataEvent(`${n.C0.ESC}[0n`);break;case 6:const e=this._activeBuffer.y+1,t=this._activeBuffer.x+1;this._coreService.triggerDataEvent(`${n.C0.ESC}[${e};${t}R`)}return!0}deviceStatusPrivate(e){if(6===e.params[0]){const e=this._activeBuffer.y+1,t=this._activeBuffer.x+1;this._coreService.triggerDataEvent(`${n.C0.ESC}[?${e};${t}R`)}return!0}softReset(e){return this._coreService.isCursorHidden=!1,this._onRequestSyncScrollBar.fire(),this._activeBuffer.scrollTop=0,this._activeBuffer.scrollBottom=this._bufferService.rows-1,this._curAttrData=l.DEFAULT_ATTR_DATA.clone(),this._coreService.reset(),this._charsetService.reset(),this._activeBuffer.savedX=0,this._activeBuffer.savedY=this._activeBuffer.ybase,this._activeBuffer.savedCurAttrData.fg=this._curAttrData.fg,this._activeBuffer.savedCurAttrData.bg=this._curAttrData.bg,this._activeBuffer.savedCharset=this._charsetService.charset,this._coreService.decPrivateModes.origin=!1,!0}setCursorStyle(e){const t=e.params[0]||1;switch(t){case 1:case 2:this._optionsService.options.cursorStyle="block";break;case 3:case 4:this._optionsService.options.cursorStyle="underline";break;case 5:case 6:this._optionsService.options.cursorStyle="bar"}const i=t%2==1;return this._optionsService.options.cursorBlink=i,!0}setScrollRegion(e){const t=e.params[0]||1;let i;return(e.length<2||(i=e.params[1])>this._bufferService.rows||0===i)&&(i=this._bufferService.rows),i>t&&(this._activeBuffer.scrollTop=t-1,this._activeBuffer.scrollBottom=i-1,this._setCursor(0,0)),!0}windowOptions(e){if(!w(e.params[0],this._optionsService.rawOptions.windowOptions))return!0;const t=e.length>1?e.params[1]:0;switch(e.params[0]){case 14:2!==t&&this._onRequestWindowsOptionsReport.fire(y.GET_WIN_SIZE_PIXELS);break;case 16:this._onRequestWindowsOptionsReport.fire(y.GET_CELL_SIZE_PIXELS);break;case 18:this._bufferService&&this._coreService.triggerDataEvent(`${n.C0.ESC}[8;${this._bufferService.rows};${this._bufferService.cols}t`);break;case 22:0!==t&&2!==t||(this._windowTitleStack.push(this._windowTitle),this._windowTitleStack.length>10&&this._windowTitleStack.shift()),0!==t&&1!==t||(this._iconNameStack.push(this._iconName),this._iconNameStack.length>10&&this._iconNameStack.shift());break;case 23:0!==t&&2!==t||this._windowTitleStack.length&&this.setTitle(this._windowTitleStack.pop()),0!==t&&1!==t||this._iconNameStack.length&&this.setIconName(this._iconNameStack.pop())}return!0}saveCursor(e){return this._activeBuffer.savedX=this._activeBuffer.x,this._activeBuffer.savedY=this._activeBuffer.ybase+this._activeBuffer.y,this._activeBuffer.savedCurAttrData.fg=this._curAttrData.fg,this._activeBuffer.savedCurAttrData.bg=this._curAttrData.bg,this._activeBuffer.savedCharset=this._charsetService.charset,!0}restoreCursor(e){return this._activeBuffer.x=this._activeBuffer.savedX||0,this._activeBuffer.y=Math.max(this._activeBuffer.savedY-this._activeBuffer.ybase,0),this._curAttrData.fg=this._activeBuffer.savedCurAttrData.fg,this._curAttrData.bg=this._activeBuffer.savedCurAttrData.bg,this._charsetService.charset=this._savedCharset,this._activeBuffer.savedCharset&&(this._charsetService.charset=this._activeBuffer.savedCharset),this._restrictCursor(),!0}setTitle(e){return this._windowTitle=e,this._onTitleChange.fire(e),!0}setIconName(e){return this._iconName=e,!0}setOrReportIndexedColor(e){const t=[],i=e.split(";");for(;i.length>1;){const e=i.shift(),s=i.shift();if(/^\d+$/.exec(e)){const i=parseInt(e);if(D(i))if("?"===s)t.push({type:0,index:i});else{const e=(0,S.parseColor)(s);e&&t.push({type:1,index:i,color:e})}}}return t.length&&this._onColor.fire(t),!0}setHyperlink(e){const t=e.split(";");return!(t.length<2)&&(t[1]?this._createHyperlink(t[0],t[1]):!t[0]&&this._finishHyperlink())}_createHyperlink(e,t){this._getCurrentLinkId()&&this._finishHyperlink();const i=e.split(":");let s;const r=i.findIndex((e=>e.startsWith("id=")));return-1!==r&&(s=i[r].slice(3)||void 0),this._curAttrData.extended=this._curAttrData.extended.clone(),this._curAttrData.extended.urlId=this._oscLinkService.registerLink({id:s,uri:t}),this._curAttrData.updateExtended(),!0}_finishHyperlink(){return this._curAttrData.extended=this._curAttrData.extended.clone(),this._curAttrData.extended.urlId=0,this._curAttrData.updateExtended(),!0}_setOrReportSpecialColor(e,t){const i=e.split(";");for(let e=0;e<i.length&&!(t>=this._specialColors.length);++e,++t)if("?"===i[e])this._onColor.fire([{type:0,index:this._specialColors[t]}]);else{const s=(0,S.parseColor)(i[e]);s&&this._onColor.fire([{type:1,index:this._specialColors[t],color:s}])}return!0}setOrReportFgColor(e){return this._setOrReportSpecialColor(e,0)}setOrReportBgColor(e){return this._setOrReportSpecialColor(e,1)}setOrReportCursorColor(e){return this._setOrReportSpecialColor(e,2)}restoreIndexedColor(e){if(!e)return this._onColor.fire([{type:2}]),!0;const t=[],i=e.split(";");for(let e=0;e<i.length;++e)if(/^\d+$/.exec(i[e])){const s=parseInt(i[e]);D(s)&&t.push({type:2,index:s})}return t.length&&this._onColor.fire(t),!0}restoreFgColor(e){return this._onColor.fire([{type:2,index:256}]),!0}restoreBgColor(e){return this._onColor.fire([{type:2,index:257}]),!0}restoreCursorColor(e){return this._onColor.fire([{type:2,index:258}]),!0}nextLine(){return this._activeBuffer.x=0,this.index(),!0}keypadApplicationMode(){return this._logService.debug("Serial port requested application keypad."),this._coreService.decPrivateModes.applicationKeypad=!0,this._onRequestSyncScrollBar.fire(),!0}keypadNumericMode(){return this._logService.debug("Switching back to normal keypad."),this._coreService.decPrivateModes.applicationKeypad=!1,this._onRequestSyncScrollBar.fire(),!0}selectDefaultCharset(){return this._charsetService.setgLevel(0),this._charsetService.setgCharset(0,o.DEFAULT_CHARSET),!0}selectCharset(e){return 2!==e.length?(this.selectDefaultCharset(),!0):("/"===e[0]||this._charsetService.setgCharset(C[e[0]],o.CHARSETS[e[1]]||o.DEFAULT_CHARSET),!0)}index(){return this._restrictCursor(),this._activeBuffer.y++,this._activeBuffer.y===this._activeBuffer.scrollBottom+1?(this._activeBuffer.y--,this._bufferService.scroll(this._eraseAttrData())):this._activeBuffer.y>=this._bufferService.rows&&(this._activeBuffer.y=this._bufferService.rows-1),this._restrictCursor(),!0}tabSet(){return this._activeBuffer.tabs[this._activeBuffer.x]=!0,!0}reverseIndex(){if(this._restrictCursor(),this._activeBuffer.y===this._activeBuffer.scrollTop){const e=this._activeBuffer.scrollBottom-this._activeBuffer.scrollTop;this._activeBuffer.lines.shiftElements(this._activeBuffer.ybase+this._activeBuffer.y,e,1),this._activeBuffer.lines.set(this._activeBuffer.ybase+this._activeBuffer.y,this._activeBuffer.getBlankLine(this._eraseAttrData())),this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom)}else this._activeBuffer.y--,this._restrictCursor();return!0}fullReset(){return this._parser.reset(),this._onRequestReset.fire(),!0}reset(){this._curAttrData=l.DEFAULT_ATTR_DATA.clone(),this._eraseAttrDataInternal=l.DEFAULT_ATTR_DATA.clone()}_eraseAttrData(){return this._eraseAttrDataInternal.bg&=-67108864,this._eraseAttrDataInternal.bg|=67108863&this._curAttrData.bg,this._eraseAttrDataInternal}setgLevel(e){return this._charsetService.setgLevel(e),!0}screenAlignmentPattern(){const e=new u.CellData;e.content=1<<22|"E".charCodeAt(0),e.fg=this._curAttrData.fg,e.bg=this._curAttrData.bg,this._setCursor(0,0);for(let t=0;t<this._bufferService.rows;++t){const i=this._activeBuffer.ybase+this._activeBuffer.y+t,s=this._activeBuffer.lines.get(i);s&&(s.fill(e),s.isWrapped=!1)}return this._dirtyRowTracker.markAllDirty(),this._setCursor(0,0),!0}requestStatusString(e,t){const i=this._bufferService.buffer,s=this._optionsService.rawOptions;return(e=>(this._coreService.triggerDataEvent(`${n.C0.ESC}${e}${n.C0.ESC}\\`),!0))('"q'===e?`P1$r${this._curAttrData.isProtected()?1:0}"q`:'"p'===e?'P1$r61;1"p':"r"===e?`P1$r${i.scrollTop+1};${i.scrollBottom+1}r`:"m"===e?"P1$r0m":" q"===e?`P1$r${{block:2,underline:4,bar:6}[s.cursorStyle]-(s.cursorBlink?1:0)} q`:"P0$r")}markRangeDirty(e,t){this._dirtyRowTracker.markRangeDirty(e,t)}}t.InputHandler=k;let L=class{constructor(e){this._bufferService=e,this.clearRange()}clearRange(){this.start=this._bufferService.buffer.y,this.end=this._bufferService.buffer.y}markDirty(e){e<this.start?this.start=e:e>this.end&&(this.end=e)}markRangeDirty(e,t){e>t&&(E=e,e=t,t=E),e<this.start&&(this.start=e),t>this.end&&(this.end=t)}markAllDirty(){this.markRangeDirty(0,this._bufferService.rows-1)}};function D(e){return 0<=e&&e<256}L=s([r(0,v.IBufferService)],L)},844:(e,t)=>{function i(e){for(const t of e)t.dispose();e.length=0}Object.defineProperty(t,"__esModule",{value:!0}),t.getDisposeArrayDisposable=t.disposeArray=t.toDisposable=t.MutableDisposable=t.Disposable=void 0,t.Disposable=class{constructor(){this._disposables=[],this._isDisposed=!1}dispose(){this._isDisposed=!0;for(const e of this._disposables)e.dispose();this._disposables.length=0}register(e){return this._disposables.push(e),e}unregister(e){const t=this._disposables.indexOf(e);-1!==t&&this._disposables.splice(t,1)}},t.MutableDisposable=class{constructor(){this._isDisposed=!1}get value(){return this._isDisposed?void 0:this._value}set value(e){this._isDisposed||e===this._value||(this._value?.dispose(),this._value=e)}clear(){this.value=void 0}dispose(){this._isDisposed=!0,this._value?.dispose(),this._value=void 0}},t.toDisposable=function(e){return{dispose:e}},t.disposeArray=i,t.getDisposeArrayDisposable=function(e){return{dispose:()=>i(e)}}},1505:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FourKeyMap=t.TwoKeyMap=void 0;class i{constructor(){this._data={}}set(e,t,i){this._data[e]||(this._data[e]={}),this._data[e][t]=i}get(e,t){return this._data[e]?this._data[e][t]:void 0}clear(){this._data={}}}t.TwoKeyMap=i,t.FourKeyMap=class{constructor(){this._data=new i}set(e,t,s,r,n){this._data.get(e,t)||this._data.set(e,t,new i),this._data.get(e,t).set(s,r,n)}get(e,t,i,s){return this._data.get(e,t)?.get(i,s)}clear(){this._data.clear()}}},6114:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isChromeOS=t.isLinux=t.isWindows=t.isIphone=t.isIpad=t.isMac=t.getSafariVersion=t.isSafari=t.isLegacyEdge=t.isFirefox=t.isNode=void 0,t.isNode="undefined"!=typeof process&&"title"in process;const i=t.isNode?"node":navigator.userAgent,s=t.isNode?"node":navigator.platform;t.isFirefox=i.includes("Firefox"),t.isLegacyEdge=i.includes("Edge"),t.isSafari=/^((?!chrome|android).)*safari/i.test(i),t.getSafariVersion=function(){if(!t.isSafari)return 0;const e=i.match(/Version\/(\d+)/);return null===e||e.length<2?0:parseInt(e[1])},t.isMac=["Macintosh","MacIntel","MacPPC","Mac68K"].includes(s),t.isIpad="iPad"===s,t.isIphone="iPhone"===s,t.isWindows=["Windows","Win16","Win32","WinCE"].includes(s),t.isLinux=s.indexOf("Linux")>=0,t.isChromeOS=/\bCrOS\b/.test(i)},6106:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SortedList=void 0;let i=0;t.SortedList=class{constructor(e){this._getKey=e,this._array=[]}clear(){this._array.length=0}insert(e){0!==this._array.length?(i=this._search(this._getKey(e)),this._array.splice(i,0,e)):this._array.push(e)}delete(e){if(0===this._array.length)return!1;const t=this._getKey(e);if(void 0===t)return!1;if(i=this._search(t),-1===i)return!1;if(this._getKey(this._array[i])!==t)return!1;do{if(this._array[i]===e)return this._array.splice(i,1),!0}while(++i<this._array.length&&this._getKey(this._array[i])===t);return!1}*getKeyIterator(e){if(0!==this._array.length&&(i=this._search(e),!(i<0||i>=this._array.length)&&this._getKey(this._array[i])===e))do{yield this._array[i]}while(++i<this._array.length&&this._getKey(this._array[i])===e)}forEachByKey(e,t){if(0!==this._array.length&&(i=this._search(e),!(i<0||i>=this._array.length)&&this._getKey(this._array[i])===e))do{t(this._array[i])}while(++i<this._array.length&&this._getKey(this._array[i])===e)}values(){return[...this._array].values()}_search(e){let t=0,i=this._array.length-1;for(;i>=t;){let s=t+i>>1;const r=this._getKey(this._array[s]);if(r>e)i=s-1;else{if(!(r<e)){for(;s>0&&this._getKey(this._array[s-1])===e;)s--;return s}t=s+1}}return t}}},7226:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DebouncedIdleTask=t.IdleTaskQueue=t.PriorityTaskQueue=void 0;const s=i(6114);class r{constructor(){this._tasks=[],this._i=0}enqueue(e){this._tasks.push(e),this._start()}flush(){for(;this._i<this._tasks.length;)this._tasks[this._i]()||this._i++;this.clear()}clear(){this._idleCallback&&(this._cancelCallback(this._idleCallback),this._idleCallback=void 0),this._i=0,this._tasks.length=0}_start(){this._idleCallback||(this._idleCallback=this._requestCallback(this._process.bind(this)))}_process(e){this._idleCallback=void 0;let t=0,i=0,s=e.timeRemaining(),r=0;for(;this._i<this._tasks.length;){if(t=Date.now(),this._tasks[this._i]()||this._i++,t=Math.max(1,Date.now()-t),i=Math.max(t,i),r=e.timeRemaining(),1.5*i>r)return s-t<-20&&console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(s-t))}ms`),void this._start();s=r}this.clear()}}class n extends r{_requestCallback(e){return setTimeout((()=>e(this._createDeadline(16))))}_cancelCallback(e){clearTimeout(e)}_createDeadline(e){const t=Date.now()+e;return{timeRemaining:()=>Math.max(0,t-Date.now())}}}t.PriorityTaskQueue=n,t.IdleTaskQueue=!s.isNode&&"requestIdleCallback"in window?class extends r{_requestCallback(e){return requestIdleCallback(e)}_cancelCallback(e){cancelIdleCallback(e)}}:n,t.DebouncedIdleTask=class{constructor(){this._queue=new t.IdleTaskQueue}set(e){this._queue.clear(),this._queue.enqueue(e)}flush(){this._queue.flush()}}},9282:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.updateWindowsModeWrappedState=void 0;const s=i(643);t.updateWindowsModeWrappedState=function(e){const t=e.buffer.lines.get(e.buffer.ybase+e.buffer.y-1),i=t?.get(e.cols-1),r=e.buffer.lines.get(e.buffer.ybase+e.buffer.y);r&&i&&(r.isWrapped=i[s.CHAR_DATA_CODE_INDEX]!==s.NULL_CELL_CODE&&i[s.CHAR_DATA_CODE_INDEX]!==s.WHITESPACE_CELL_CODE)}},3734:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ExtendedAttrs=t.AttributeData=void 0;class i{constructor(){this.fg=0,this.bg=0,this.extended=new s}static toColorRGB(e){return[e>>>16&255,e>>>8&255,255&e]}static fromColorRGB(e){return(255&e[0])<<16|(255&e[1])<<8|255&e[2]}clone(){const e=new i;return e.fg=this.fg,e.bg=this.bg,e.extended=this.extended.clone(),e}isInverse(){return 67108864&this.fg}isBold(){return 134217728&this.fg}isUnderline(){return this.hasExtendedAttrs()&&0!==this.extended.underlineStyle?1:268435456&this.fg}isBlink(){return 536870912&this.fg}isInvisible(){return 1073741824&this.fg}isItalic(){return 67108864&this.bg}isDim(){return 134217728&this.bg}isStrikethrough(){return 2147483648&this.fg}isProtected(){return 536870912&this.bg}isOverline(){return 1073741824&this.bg}getFgColorMode(){return 50331648&this.fg}getBgColorMode(){return 50331648&this.bg}isFgRGB(){return 50331648==(50331648&this.fg)}isBgRGB(){return 50331648==(50331648&this.bg)}isFgPalette(){return 16777216==(50331648&this.fg)||33554432==(50331648&this.fg)}isBgPalette(){return 16777216==(50331648&this.bg)||33554432==(50331648&this.bg)}isFgDefault(){return 0==(50331648&this.fg)}isBgDefault(){return 0==(50331648&this.bg)}isAttributeDefault(){return 0===this.fg&&0===this.bg}getFgColor(){switch(50331648&this.fg){case 16777216:case 33554432:return 255&this.fg;case 50331648:return 16777215&this.fg;default:return-1}}getBgColor(){switch(50331648&this.bg){case 16777216:case 33554432:return 255&this.bg;case 50331648:return 16777215&this.bg;default:return-1}}hasExtendedAttrs(){return 268435456&this.bg}updateExtended(){this.extended.isEmpty()?this.bg&=-268435457:this.bg|=268435456}getUnderlineColor(){if(268435456&this.bg&&~this.extended.underlineColor)switch(50331648&this.extended.underlineColor){case 16777216:case 33554432:return 255&this.extended.underlineColor;case 50331648:return 16777215&this.extended.underlineColor;default:return this.getFgColor()}return this.getFgColor()}getUnderlineColorMode(){return 268435456&this.bg&&~this.extended.underlineColor?50331648&this.extended.underlineColor:this.getFgColorMode()}isUnderlineColorRGB(){return 268435456&this.bg&&~this.extended.underlineColor?50331648==(50331648&this.extended.underlineColor):this.isFgRGB()}isUnderlineColorPalette(){return 268435456&this.bg&&~this.extended.underlineColor?16777216==(50331648&this.extended.underlineColor)||33554432==(50331648&this.extended.underlineColor):this.isFgPalette()}isUnderlineColorDefault(){return 268435456&this.bg&&~this.extended.underlineColor?0==(50331648&this.extended.underlineColor):this.isFgDefault()}getUnderlineStyle(){return 268435456&this.fg?268435456&this.bg?this.extended.underlineStyle:1:0}getUnderlineVariantOffset(){return this.extended.underlineVariantOffset}}t.AttributeData=i;class s{get ext(){return this._urlId?-469762049&this._ext|this.underlineStyle<<26:this._ext}set ext(e){this._ext=e}get underlineStyle(){return this._urlId?5:(469762048&this._ext)>>26}set underlineStyle(e){this._ext&=-469762049,this._ext|=e<<26&469762048}get underlineColor(){return 67108863&this._ext}set underlineColor(e){this._ext&=-67108864,this._ext|=67108863&e}get urlId(){return this._urlId}set urlId(e){this._urlId=e}get underlineVariantOffset(){const e=(3758096384&this._ext)>>29;return e<0?4294967288^e:e}set underlineVariantOffset(e){this._ext&=536870911,this._ext|=e<<29&3758096384}constructor(e=0,t=0){this._ext=0,this._urlId=0,this._ext=e,this._urlId=t}clone(){return new s(this._ext,this._urlId)}isEmpty(){return 0===this.underlineStyle&&0===this._urlId}}t.ExtendedAttrs=s},9092:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Buffer=t.MAX_BUFFER_SIZE=void 0;const s=i(6349),r=i(7226),n=i(3734),o=i(8437),a=i(4634),h=i(511),c=i(643),l=i(4863),d=i(7116);t.MAX_BUFFER_SIZE=4294967295,t.Buffer=class{constructor(e,t,i){this._hasScrollback=e,this._optionsService=t,this._bufferService=i,this.ydisp=0,this.ybase=0,this.y=0,this.x=0,this.tabs={},this.savedY=0,this.savedX=0,this.savedCurAttrData=o.DEFAULT_ATTR_DATA.clone(),this.savedCharset=d.DEFAULT_CHARSET,this.markers=[],this._nullCell=h.CellData.fromCharData([0,c.NULL_CELL_CHAR,c.NULL_CELL_WIDTH,c.NULL_CELL_CODE]),this._whitespaceCell=h.CellData.fromCharData([0,c.WHITESPACE_CELL_CHAR,c.WHITESPACE_CELL_WIDTH,c.WHITESPACE_CELL_CODE]),this._isClearing=!1,this._memoryCleanupQueue=new r.IdleTaskQueue,this._memoryCleanupPosition=0,this._cols=this._bufferService.cols,this._rows=this._bufferService.rows,this.lines=new s.CircularList(this._getCorrectBufferLength(this._rows)),this.scrollTop=0,this.scrollBottom=this._rows-1,this.setupTabStops()}getNullCell(e){return e?(this._nullCell.fg=e.fg,this._nullCell.bg=e.bg,this._nullCell.extended=e.extended):(this._nullCell.fg=0,this._nullCell.bg=0,this._nullCell.extended=new n.ExtendedAttrs),this._nullCell}getWhitespaceCell(e){return e?(this._whitespaceCell.fg=e.fg,this._whitespaceCell.bg=e.bg,this._whitespaceCell.extended=e.extended):(this._whitespaceCell.fg=0,this._whitespaceCell.bg=0,this._whitespaceCell.extended=new n.ExtendedAttrs),this._whitespaceCell}getBlankLine(e,t){return new o.BufferLine(this._bufferService.cols,this.getNullCell(e),t)}get hasScrollback(){return this._hasScrollback&&this.lines.maxLength>this._rows}get isCursorInViewport(){const e=this.ybase+this.y-this.ydisp;return e>=0&&e<this._rows}_getCorrectBufferLength(e){if(!this._hasScrollback)return e;const i=e+this._optionsService.rawOptions.scrollback;return i>t.MAX_BUFFER_SIZE?t.MAX_BUFFER_SIZE:i}fillViewportRows(e){if(0===this.lines.length){void 0===e&&(e=o.DEFAULT_ATTR_DATA);let t=this._rows;for(;t--;)this.lines.push(this.getBlankLine(e))}}clear(){this.ydisp=0,this.ybase=0,this.y=0,this.x=0,this.lines=new s.CircularList(this._getCorrectBufferLength(this._rows)),this.scrollTop=0,this.scrollBottom=this._rows-1,this.setupTabStops()}resize(e,t){const i=this.getNullCell(o.DEFAULT_ATTR_DATA);let s=0;const r=this._getCorrectBufferLength(t);if(r>this.lines.maxLength&&(this.lines.maxLength=r),this.lines.length>0){if(this._cols<e)for(let t=0;t<this.lines.length;t++)s+=+this.lines.get(t).resize(e,i);let n=0;if(this._rows<t)for(let s=this._rows;s<t;s++)this.lines.length<t+this.ybase&&(this._optionsService.rawOptions.windowsMode||void 0!==this._optionsService.rawOptions.windowsPty.backend||void 0!==this._optionsService.rawOptions.windowsPty.buildNumber?this.lines.push(new o.BufferLine(e,i)):this.ybase>0&&this.lines.length<=this.ybase+this.y+n+1?(this.ybase--,n++,this.ydisp>0&&this.ydisp--):this.lines.push(new o.BufferLine(e,i)));else for(let e=this._rows;e>t;e--)this.lines.length>t+this.ybase&&(this.lines.length>this.ybase+this.y+1?this.lines.pop():(this.ybase++,this.ydisp++));if(r<this.lines.maxLength){const e=this.lines.length-r;e>0&&(this.lines.trimStart(e),this.ybase=Math.max(this.ybase-e,0),this.ydisp=Math.max(this.ydisp-e,0),this.savedY=Math.max(this.savedY-e,0)),this.lines.maxLength=r}this.x=Math.min(this.x,e-1),this.y=Math.min(this.y,t-1),n&&(this.y+=n),this.savedX=Math.min(this.savedX,e-1),this.scrollTop=0}if(this.scrollBottom=t-1,this._isReflowEnabled&&(this._reflow(e,t),this._cols>e))for(let t=0;t<this.lines.length;t++)s+=+this.lines.get(t).resize(e,i);this._cols=e,this._rows=t,this._memoryCleanupQueue.clear(),s>.1*this.lines.length&&(this._memoryCleanupPosition=0,this._memoryCleanupQueue.enqueue((()=>this._batchedMemoryCleanup())))}_batchedMemoryCleanup(){let e=!0;this._memoryCleanupPosition>=this.lines.length&&(this._memoryCleanupPosition=0,e=!1);let t=0;for(;this._memoryCleanupPosition<this.lines.length;)if(t+=this.lines.get(this._memoryCleanupPosition++).cleanupMemory(),t>100)return!0;return e}get _isReflowEnabled(){const e=this._optionsService.rawOptions.windowsPty;return e&&e.buildNumber?this._hasScrollback&&"conpty"===e.backend&&e.buildNumber>=21376:this._hasScrollback&&!this._optionsService.rawOptions.windowsMode}_reflow(e,t){this._cols!==e&&(e>this._cols?this._reflowLarger(e,t):this._reflowSmaller(e,t))}_reflowLarger(e,t){const i=(0,a.reflowLargerGetLinesToRemove)(this.lines,this._cols,e,this.ybase+this.y,this.getNullCell(o.DEFAULT_ATTR_DATA));if(i.length>0){const s=(0,a.reflowLargerCreateNewLayout)(this.lines,i);(0,a.reflowLargerApplyNewLayout)(this.lines,s.layout),this._reflowLargerAdjustViewport(e,t,s.countRemoved)}}_reflowLargerAdjustViewport(e,t,i){const s=this.getNullCell(o.DEFAULT_ATTR_DATA);let r=i;for(;r-- >0;)0===this.ybase?(this.y>0&&this.y--,this.lines.length<t&&this.lines.push(new o.BufferLine(e,s))):(this.ydisp===this.ybase&&this.ydisp--,this.ybase--);this.savedY=Math.max(this.savedY-i,0)}_reflowSmaller(e,t){const i=this.getNullCell(o.DEFAULT_ATTR_DATA),s=[];let r=0;for(let n=this.lines.length-1;n>=0;n--){let h=this.lines.get(n);if(!h||!h.isWrapped&&h.getTrimmedLength()<=e)continue;const c=[h];for(;h.isWrapped&&n>0;)h=this.lines.get(--n),c.unshift(h);const l=this.ybase+this.y;if(l>=n&&l<n+c.length)continue;const d=c[c.length-1].getTrimmedLength(),_=(0,a.reflowSmallerGetNewLineLengths)(c,this._cols,e),u=_.length-c.length;let f;f=0===this.ybase&&this.y!==this.lines.length-1?Math.max(0,this.y-this.lines.maxLength+u):Math.max(0,this.lines.length-this.lines.maxLength+u);const v=[];for(let e=0;e<u;e++){const e=this.getBlankLine(o.DEFAULT_ATTR_DATA,!0);v.push(e)}v.length>0&&(s.push({start:n+c.length+r,newLines:v}),r+=v.length),c.push(...v);let p=_.length-1,g=_[p];0===g&&(p--,g=_[p]);let m=c.length-u-1,S=d;for(;m>=0;){const e=Math.min(S,g);if(void 0===c[p])break;if(c[p].copyCellsFrom(c[m],S-e,g-e,e,!0),g-=e,0===g&&(p--,g=_[p]),S-=e,0===S){m--;const e=Math.max(m,0);S=(0,a.getWrappedLineTrimmedLength)(c,e,this._cols)}}for(let t=0;t<c.length;t++)_[t]<e&&c[t].setCell(_[t],i);let C=u-f;for(;C-- >0;)0===this.ybase?this.y<t-1?(this.y++,this.lines.pop()):(this.ybase++,this.ydisp++):this.ybase<Math.min(this.lines.maxLength,this.lines.length+r)-t&&(this.ybase===this.ydisp&&this.ydisp++,this.ybase++);this.savedY=Math.min(this.savedY+u,this.ybase+t-1)}if(s.length>0){const e=[],t=[];for(let e=0;e<this.lines.length;e++)t.push(this.lines.get(e));const i=this.lines.length;let n=i-1,o=0,a=s[o];this.lines.length=Math.min(this.lines.maxLength,this.lines.length+r);let h=0;for(let c=Math.min(this.lines.maxLength-1,i+r-1);c>=0;c--)if(a&&a.start>n+h){for(let e=a.newLines.length-1;e>=0;e--)this.lines.set(c--,a.newLines[e]);c++,e.push({index:n+1,amount:a.newLines.length}),h+=a.newLines.length,a=s[++o]}else this.lines.set(c,t[n--]);let c=0;for(let t=e.length-1;t>=0;t--)e[t].index+=c,this.lines.onInsertEmitter.fire(e[t]),c+=e[t].amount;const l=Math.max(0,i+r-this.lines.maxLength);l>0&&this.lines.onTrimEmitter.fire(l)}}translateBufferLineToString(e,t,i=0,s){const r=this.lines.get(e);return r?r.translateToString(t,i,s):""}getWrappedRangeForLine(e){let t=e,i=e;for(;t>0&&this.lines.get(t).isWrapped;)t--;for(;i+1<this.lines.length&&this.lines.get(i+1).isWrapped;)i++;return{first:t,last:i}}setupTabStops(e){for(null!=e?this.tabs[e]||(e=this.prevStop(e)):(this.tabs={},e=0);e<this._cols;e+=this._optionsService.rawOptions.tabStopWidth)this.tabs[e]=!0}prevStop(e){for(null==e&&(e=this.x);!this.tabs[--e]&&e>0;);return e>=this._cols?this._cols-1:e<0?0:e}nextStop(e){for(null==e&&(e=this.x);!this.tabs[++e]&&e<this._cols;);return e>=this._cols?this._cols-1:e<0?0:e}clearMarkers(e){this._isClearing=!0;for(let t=0;t<this.markers.length;t++)this.markers[t].line===e&&(this.markers[t].dispose(),this.markers.splice(t--,1));this._isClearing=!1}clearAllMarkers(){this._isClearing=!0;for(let e=0;e<this.markers.length;e++)this.markers[e].dispose(),this.markers.splice(e--,1);this._isClearing=!1}addMarker(e){const t=new l.Marker(e);return this.markers.push(t),t.register(this.lines.onTrim((e=>{t.line-=e,t.line<0&&t.dispose()}))),t.register(this.lines.onInsert((e=>{t.line>=e.index&&(t.line+=e.amount)}))),t.register(this.lines.onDelete((e=>{t.line>=e.index&&t.line<e.index+e.amount&&t.dispose(),t.line>e.index&&(t.line-=e.amount)}))),t.register(t.onDispose((()=>this._removeMarker(t)))),t}_removeMarker(e){this._isClearing||this.markers.splice(this.markers.indexOf(e),1)}}},8437:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BufferLine=t.DEFAULT_ATTR_DATA=void 0;const s=i(3734),r=i(511),n=i(643),o=i(482);t.DEFAULT_ATTR_DATA=Object.freeze(new s.AttributeData);let a=0;class h{constructor(e,t,i=!1){this.isWrapped=i,this._combined={},this._extendedAttrs={},this._data=new Uint32Array(3*e);const s=t||r.CellData.fromCharData([0,n.NULL_CELL_CHAR,n.NULL_CELL_WIDTH,n.NULL_CELL_CODE]);for(let t=0;t<e;++t)this.setCell(t,s);this.length=e}get(e){const t=this._data[3*e+0],i=2097151&t;return[this._data[3*e+1],2097152&t?this._combined[e]:i?(0,o.stringFromCodePoint)(i):"",t>>22,2097152&t?this._combined[e].charCodeAt(this._combined[e].length-1):i]}set(e,t){this._data[3*e+1]=t[n.CHAR_DATA_ATTR_INDEX],t[n.CHAR_DATA_CHAR_INDEX].length>1?(this._combined[e]=t[1],this._data[3*e+0]=2097152|e|t[n.CHAR_DATA_WIDTH_INDEX]<<22):this._data[3*e+0]=t[n.CHAR_DATA_CHAR_INDEX].charCodeAt(0)|t[n.CHAR_DATA_WIDTH_INDEX]<<22}getWidth(e){return this._data[3*e+0]>>22}hasWidth(e){return 12582912&this._data[3*e+0]}getFg(e){return this._data[3*e+1]}getBg(e){return this._data[3*e+2]}hasContent(e){return 4194303&this._data[3*e+0]}getCodePoint(e){const t=this._data[3*e+0];return 2097152&t?this._combined[e].charCodeAt(this._combined[e].length-1):2097151&t}isCombined(e){return 2097152&this._data[3*e+0]}getString(e){const t=this._data[3*e+0];return 2097152&t?this._combined[e]:2097151&t?(0,o.stringFromCodePoint)(2097151&t):""}isProtected(e){return 536870912&this._data[3*e+2]}loadCell(e,t){return a=3*e,t.content=this._data[a+0],t.fg=this._data[a+1],t.bg=this._data[a+2],2097152&t.content&&(t.combinedData=this._combined[e]),268435456&t.bg&&(t.extended=this._extendedAttrs[e]),t}setCell(e,t){2097152&t.content&&(this._combined[e]=t.combinedData),268435456&t.bg&&(this._extendedAttrs[e]=t.extended),this._data[3*e+0]=t.content,this._data[3*e+1]=t.fg,this._data[3*e+2]=t.bg}setCellFromCodepoint(e,t,i,s){268435456&s.bg&&(this._extendedAttrs[e]=s.extended),this._data[3*e+0]=t|i<<22,this._data[3*e+1]=s.fg,this._data[3*e+2]=s.bg}addCodepointToCell(e,t,i){let s=this._data[3*e+0];2097152&s?this._combined[e]+=(0,o.stringFromCodePoint)(t):2097151&s?(this._combined[e]=(0,o.stringFromCodePoint)(2097151&s)+(0,o.stringFromCodePoint)(t),s&=-2097152,s|=2097152):s=t|1<<22,i&&(s&=-12582913,s|=i<<22),this._data[3*e+0]=s}insertCells(e,t,i){if((e%=this.length)&&2===this.getWidth(e-1)&&this.setCellFromCodepoint(e-1,0,1,i),t<this.length-e){const s=new r.CellData;for(let i=this.length-e-t-1;i>=0;--i)this.setCell(e+t+i,this.loadCell(e+i,s));for(let s=0;s<t;++s)this.setCell(e+s,i)}else for(let t=e;t<this.length;++t)this.setCell(t,i);2===this.getWidth(this.length-1)&&this.setCellFromCodepoint(this.length-1,0,1,i)}deleteCells(e,t,i){if(e%=this.length,t<this.length-e){const s=new r.CellData;for(let i=0;i<this.length-e-t;++i)this.setCell(e+i,this.loadCell(e+t+i,s));for(let e=this.length-t;e<this.length;++e)this.setCell(e,i)}else for(let t=e;t<this.length;++t)this.setCell(t,i);e&&2===this.getWidth(e-1)&&this.setCellFromCodepoint(e-1,0,1,i),0!==this.getWidth(e)||this.hasContent(e)||this.setCellFromCodepoint(e,0,1,i)}replaceCells(e,t,i,s=!1){if(s)for(e&&2===this.getWidth(e-1)&&!this.isProtected(e-1)&&this.setCellFromCodepoint(e-1,0,1,i),t<this.length&&2===this.getWidth(t-1)&&!this.isProtected(t)&&this.setCellFromCodepoint(t,0,1,i);e<t&&e<this.length;)this.isProtected(e)||this.setCell(e,i),e++;else for(e&&2===this.getWidth(e-1)&&this.setCellFromCodepoint(e-1,0,1,i),t<this.length&&2===this.getWidth(t-1)&&this.setCellFromCodepoint(t,0,1,i);e<t&&e<this.length;)this.setCell(e++,i)}resize(e,t){if(e===this.length)return 4*this._data.length*2<this._data.buffer.byteLength;const i=3*e;if(e>this.length){if(this._data.buffer.byteLength>=4*i)this._data=new Uint32Array(this._data.buffer,0,i);else{const e=new Uint32Array(i);e.set(this._data),this._data=e}for(let i=this.length;i<e;++i)this.setCell(i,t)}else{this._data=this._data.subarray(0,i);const t=Object.keys(this._combined);for(let i=0;i<t.length;i++){const s=parseInt(t[i],10);s>=e&&delete this._combined[s]}const s=Object.keys(this._extendedAttrs);for(let t=0;t<s.length;t++){const i=parseInt(s[t],10);i>=e&&delete this._extendedAttrs[i]}}return this.length=e,4*i*2<this._data.buffer.byteLength}cleanupMemory(){if(4*this._data.length*2<this._data.buffer.byteLength){const e=new Uint32Array(this._data.length);return e.set(this._data),this._data=e,1}return 0}fill(e,t=!1){if(t)for(let t=0;t<this.length;++t)this.isProtected(t)||this.setCell(t,e);else{this._combined={},this._extendedAttrs={};for(let t=0;t<this.length;++t)this.setCell(t,e)}}copyFrom(e){this.length!==e.length?this._data=new Uint32Array(e._data):this._data.set(e._data),this.length=e.length,this._combined={};for(const t in e._combined)this._combined[t]=e._combined[t];this._extendedAttrs={};for(const t in e._extendedAttrs)this._extendedAttrs[t]=e._extendedAttrs[t];this.isWrapped=e.isWrapped}clone(){const e=new h(0);e._data=new Uint32Array(this._data),e.length=this.length;for(const t in this._combined)e._combined[t]=this._combined[t];for(const t in this._extendedAttrs)e._extendedAttrs[t]=this._extendedAttrs[t];return e.isWrapped=this.isWrapped,e}getTrimmedLength(){for(let e=this.length-1;e>=0;--e)if(4194303&this._data[3*e+0])return e+(this._data[3*e+0]>>22);return 0}getNoBgTrimmedLength(){for(let e=this.length-1;e>=0;--e)if(4194303&this._data[3*e+0]||50331648&this._data[3*e+2])return e+(this._data[3*e+0]>>22);return 0}copyCellsFrom(e,t,i,s,r){const n=e._data;if(r)for(let r=s-1;r>=0;r--){for(let e=0;e<3;e++)this._data[3*(i+r)+e]=n[3*(t+r)+e];268435456&n[3*(t+r)+2]&&(this._extendedAttrs[i+r]=e._extendedAttrs[t+r])}else for(let r=0;r<s;r++){for(let e=0;e<3;e++)this._data[3*(i+r)+e]=n[3*(t+r)+e];268435456&n[3*(t+r)+2]&&(this._extendedAttrs[i+r]=e._extendedAttrs[t+r])}const o=Object.keys(e._combined);for(let s=0;s<o.length;s++){const r=parseInt(o[s],10);r>=t&&(this._combined[r-t+i]=e._combined[r])}}translateToString(e,t,i,s){t=t??0,i=i??this.length,e&&(i=Math.min(i,this.getTrimmedLength())),s&&(s.length=0);let r="";for(;t<i;){const e=this._data[3*t+0],i=2097151&e,a=2097152&e?this._combined[t]:i?(0,o.stringFromCodePoint)(i):n.WHITESPACE_CELL_CHAR;if(r+=a,s)for(let e=0;e<a.length;++e)s.push(t);t+=e>>22||1}return s&&s.push(t),r}}t.BufferLine=h},4841:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getRangeLength=void 0,t.getRangeLength=function(e,t){if(e.start.y>e.end.y)throw new Error(`Buffer range end (${e.end.x}, ${e.end.y}) cannot be before start (${e.start.x}, ${e.start.y})`);return t*(e.end.y-e.start.y)+(e.end.x-e.start.x+1)}},4634:(e,t)=>{function i(e,t,i){if(t===e.length-1)return e[t].getTrimmedLength();const s=!e[t].hasContent(i-1)&&1===e[t].getWidth(i-1),r=2===e[t+1].getWidth(0);return s&&r?i-1:i}Object.defineProperty(t,"__esModule",{value:!0}),t.getWrappedLineTrimmedLength=t.reflowSmallerGetNewLineLengths=t.reflowLargerApplyNewLayout=t.reflowLargerCreateNewLayout=t.reflowLargerGetLinesToRemove=void 0,t.reflowLargerGetLinesToRemove=function(e,t,s,r,n){const o=[];for(let a=0;a<e.length-1;a++){let h=a,c=e.get(++h);if(!c.isWrapped)continue;const l=[e.get(a)];for(;h<e.length&&c.isWrapped;)l.push(c),c=e.get(++h);if(r>=a&&r<h){a+=l.length-1;continue}let d=0,_=i(l,d,t),u=1,f=0;for(;u<l.length;){const e=i(l,u,t),r=e-f,o=s-_,a=Math.min(r,o);l[d].copyCellsFrom(l[u],f,_,a,!1),_+=a,_===s&&(d++,_=0),f+=a,f===e&&(u++,f=0),0===_&&0!==d&&2===l[d-1].getWidth(s-1)&&(l[d].copyCellsFrom(l[d-1],s-1,_++,1,!1),l[d-1].setCell(s-1,n))}l[d].replaceCells(_,s,n);let v=0;for(let e=l.length-1;e>0&&(e>d||0===l[e].getTrimmedLength());e--)v++;v>0&&(o.push(a+l.length-v),o.push(v)),a+=l.length-1}return o},t.reflowLargerCreateNewLayout=function(e,t){const i=[];let s=0,r=t[s],n=0;for(let o=0;o<e.length;o++)if(r===o){const i=t[++s];e.onDeleteEmitter.fire({index:o-n,amount:i}),o+=i-1,n+=i,r=t[++s]}else i.push(o);return{layout:i,countRemoved:n}},t.reflowLargerApplyNewLayout=function(e,t){const i=[];for(let s=0;s<t.length;s++)i.push(e.get(t[s]));for(let t=0;t<i.length;t++)e.set(t,i[t]);e.length=t.length},t.reflowSmallerGetNewLineLengths=function(e,t,s){const r=[],n=e.map(((s,r)=>i(e,r,t))).reduce(((e,t)=>e+t));let o=0,a=0,h=0;for(;h<n;){if(n-h<s){r.push(n-h);break}o+=s;const c=i(e,a,t);o>c&&(o-=c,a++);const l=2===e[a].getWidth(o-1);l&&o--;const d=l?s-1:s;r.push(d),h+=d}return r},t.getWrappedLineTrimmedLength=i},5295:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BufferSet=void 0;const s=i(8460),r=i(844),n=i(9092);class o extends r.Disposable{constructor(e,t){super(),this._optionsService=e,this._bufferService=t,this._onBufferActivate=this.register(new s.EventEmitter),this.onBufferActivate=this._onBufferActivate.event,this.reset(),this.register(this._optionsService.onSpecificOptionChange("scrollback",(()=>this.resize(this._bufferService.cols,this._bufferService.rows)))),this.register(this._optionsService.onSpecificOptionChange("tabStopWidth",(()=>this.setupTabStops())))}reset(){this._normal=new n.Buffer(!0,this._optionsService,this._bufferService),this._normal.fillViewportRows(),this._alt=new n.Buffer(!1,this._optionsService,this._bufferService),this._activeBuffer=this._normal,this._onBufferActivate.fire({activeBuffer:this._normal,inactiveBuffer:this._alt}),this.setupTabStops()}get alt(){return this._alt}get active(){return this._activeBuffer}get normal(){return this._normal}activateNormalBuffer(){this._activeBuffer!==this._normal&&(this._normal.x=this._alt.x,this._normal.y=this._alt.y,this._alt.clearAllMarkers(),this._alt.clear(),this._activeBuffer=this._normal,this._onBufferActivate.fire({activeBuffer:this._normal,inactiveBuffer:this._alt}))}activateAltBuffer(e){this._activeBuffer!==this._alt&&(this._alt.fillViewportRows(e),this._alt.x=this._normal.x,this._alt.y=this._normal.y,this._activeBuffer=this._alt,this._onBufferActivate.fire({activeBuffer:this._alt,inactiveBuffer:this._normal}))}resize(e,t){this._normal.resize(e,t),this._alt.resize(e,t),this.setupTabStops(e)}setupTabStops(e){this._normal.setupTabStops(e),this._alt.setupTabStops(e)}}t.BufferSet=o},511:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CellData=void 0;const s=i(482),r=i(643),n=i(3734);class o extends n.AttributeData{constructor(){super(...arguments),this.content=0,this.fg=0,this.bg=0,this.extended=new n.ExtendedAttrs,this.combinedData=""}static fromCharData(e){const t=new o;return t.setFromCharData(e),t}isCombined(){return 2097152&this.content}getWidth(){return this.content>>22}getChars(){return 2097152&this.content?this.combinedData:2097151&this.content?(0,s.stringFromCodePoint)(2097151&this.content):""}getCode(){return this.isCombined()?this.combinedData.charCodeAt(this.combinedData.length-1):2097151&this.content}setFromCharData(e){this.fg=e[r.CHAR_DATA_ATTR_INDEX],this.bg=0;let t=!1;if(e[r.CHAR_DATA_CHAR_INDEX].length>2)t=!0;else if(2===e[r.CHAR_DATA_CHAR_INDEX].length){const i=e[r.CHAR_DATA_CHAR_INDEX].charCodeAt(0);if(55296<=i&&i<=56319){const s=e[r.CHAR_DATA_CHAR_INDEX].charCodeAt(1);56320<=s&&s<=57343?this.content=1024*(i-55296)+s-56320+65536|e[r.CHAR_DATA_WIDTH_INDEX]<<22:t=!0}else t=!0}else this.content=e[r.CHAR_DATA_CHAR_INDEX].charCodeAt(0)|e[r.CHAR_DATA_WIDTH_INDEX]<<22;t&&(this.combinedData=e[r.CHAR_DATA_CHAR_INDEX],this.content=2097152|e[r.CHAR_DATA_WIDTH_INDEX]<<22)}getAsCharData(){return[this.fg,this.getChars(),this.getWidth(),this.getCode()]}}t.CellData=o},643:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WHITESPACE_CELL_CODE=t.WHITESPACE_CELL_WIDTH=t.WHITESPACE_CELL_CHAR=t.NULL_CELL_CODE=t.NULL_CELL_WIDTH=t.NULL_CELL_CHAR=t.CHAR_DATA_CODE_INDEX=t.CHAR_DATA_WIDTH_INDEX=t.CHAR_DATA_CHAR_INDEX=t.CHAR_DATA_ATTR_INDEX=t.DEFAULT_EXT=t.DEFAULT_ATTR=t.DEFAULT_COLOR=void 0,t.DEFAULT_COLOR=0,t.DEFAULT_ATTR=256|t.DEFAULT_COLOR<<9,t.DEFAULT_EXT=0,t.CHAR_DATA_ATTR_INDEX=0,t.CHAR_DATA_CHAR_INDEX=1,t.CHAR_DATA_WIDTH_INDEX=2,t.CHAR_DATA_CODE_INDEX=3,t.NULL_CELL_CHAR="",t.NULL_CELL_WIDTH=1,t.NULL_CELL_CODE=0,t.WHITESPACE_CELL_CHAR=" ",t.WHITESPACE_CELL_WIDTH=1,t.WHITESPACE_CELL_CODE=32},4863:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Marker=void 0;const s=i(8460),r=i(844);class n{get id(){return this._id}constructor(e){this.line=e,this.isDisposed=!1,this._disposables=[],this._id=n._nextId++,this._onDispose=this.register(new s.EventEmitter),this.onDispose=this._onDispose.event}dispose(){this.isDisposed||(this.isDisposed=!0,this.line=-1,this._onDispose.fire(),(0,r.disposeArray)(this._disposables),this._disposables.length=0)}register(e){return this._disposables.push(e),e}}t.Marker=n,n._nextId=1},7116:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_CHARSET=t.CHARSETS=void 0,t.CHARSETS={},t.DEFAULT_CHARSET=t.CHARSETS.B,t.CHARSETS[0]={"`":"◆",a:"▒",b:"␉",c:"␌",d:"␍",e:"␊",f:"°",g:"±",h:"␤",i:"␋",j:"┘",k:"┐",l:"┌",m:"└",n:"┼",o:"⎺",p:"⎻",q:"─",r:"⎼",s:"⎽",t:"├",u:"┤",v:"┴",w:"┬",x:"│",y:"≤",z:"≥","{":"π","|":"≠","}":"£","~":"·"},t.CHARSETS.A={"#":"£"},t.CHARSETS.B=void 0,t.CHARSETS[4]={"#":"£","@":"¾","[":"ij","\\":"½","]":"|","{":"¨","|":"f","}":"¼","~":"´"},t.CHARSETS.C=t.CHARSETS[5]={"[":"Ä","\\":"Ö","]":"Å","^":"Ü","`":"é","{":"ä","|":"ö","}":"å","~":"ü"},t.CHARSETS.R={"#":"£","@":"à","[":"°","\\":"ç","]":"§","{":"é","|":"ù","}":"è","~":"¨"},t.CHARSETS.Q={"@":"à","[":"â","\\":"ç","]":"ê","^":"î","`":"ô","{":"é","|":"ù","}":"è","~":"û"},t.CHARSETS.K={"@":"§","[":"Ä","\\":"Ö","]":"Ü","{":"ä","|":"ö","}":"ü","~":"ß"},t.CHARSETS.Y={"#":"£","@":"§","[":"°","\\":"ç","]":"é","`":"ù","{":"à","|":"ò","}":"è","~":"ì"},t.CHARSETS.E=t.CHARSETS[6]={"@":"Ä","[":"Æ","\\":"Ø","]":"Å","^":"Ü","`":"ä","{":"æ","|":"ø","}":"å","~":"ü"},t.CHARSETS.Z={"#":"£","@":"§","[":"¡","\\":"Ñ","]":"¿","{":"°","|":"ñ","}":"ç"},t.CHARSETS.H=t.CHARSETS[7]={"@":"É","[":"Ä","\\":"Ö","]":"Å","^":"Ü","`":"é","{":"ä","|":"ö","}":"å","~":"ü"},t.CHARSETS["="]={"#":"ù","@":"à","[":"é","\\":"ç","]":"ê","^":"î",_:"è","`":"ô","{":"ä","|":"ö","}":"ü","~":"û"}},2584:(e,t)=>{var i,s,r;Object.defineProperty(t,"__esModule",{value:!0}),t.C1_ESCAPED=t.C1=t.C0=void 0,function(e){e.NUL="\0",e.SOH="",e.STX="",e.ETX="",e.EOT="",e.ENQ="",e.ACK="",e.BEL="",e.BS="\b",e.HT="\t",e.LF="\n",e.VT="\v",e.FF="\f",e.CR="\r",e.SO="",e.SI="",e.DLE="",e.DC1="",e.DC2="",e.DC3="",e.DC4="",e.NAK="",e.SYN="",e.ETB="",e.CAN="",e.EM="",e.SUB="",e.ESC="",e.FS="",e.GS="",e.RS="",e.US="",e.SP=" ",e.DEL=""}(i||(t.C0=i={})),function(e){e.PAD="",e.HOP="",e.BPH="",e.NBH="",e.IND="",e.NEL="",e.SSA="",e.ESA="",e.HTS="",e.HTJ="",e.VTS="",e.PLD="",e.PLU="",e.RI="",e.SS2="",e.SS3="",e.DCS="",e.PU1="",e.PU2="",e.STS="",e.CCH="",e.MW="",e.SPA="",e.EPA="",e.SOS="",e.SGCI="",e.SCI="",e.CSI="",e.ST="",e.OSC="",e.PM="",e.APC=""}(s||(t.C1=s={})),function(e){e.ST=`${i.ESC}\\`}(r||(t.C1_ESCAPED=r={}))},7399:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.evaluateKeyboardEvent=void 0;const s=i(2584),r={48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"']};t.evaluateKeyboardEvent=function(e,t,i,n){const o={type:0,cancel:!1,key:void 0},a=(e.shiftKey?1:0)|(e.altKey?2:0)|(e.ctrlKey?4:0)|(e.metaKey?8:0);switch(e.keyCode){case 0:"UIKeyInputUpArrow"===e.key?o.key=t?s.C0.ESC+"OA":s.C0.ESC+"[A":"UIKeyInputLeftArrow"===e.key?o.key=t?s.C0.ESC+"OD":s.C0.ESC+"[D":"UIKeyInputRightArrow"===e.key?o.key=t?s.C0.ESC+"OC":s.C0.ESC+"[C":"UIKeyInputDownArrow"===e.key&&(o.key=t?s.C0.ESC+"OB":s.C0.ESC+"[B");break;case 8:o.key=e.ctrlKey?"\b":s.C0.DEL,e.altKey&&(o.key=s.C0.ESC+o.key);break;case 9:if(e.shiftKey){o.key=s.C0.ESC+"[Z";break}o.key=s.C0.HT,o.cancel=!0;break;case 13:o.key=e.altKey?s.C0.ESC+s.C0.CR:s.C0.CR,o.cancel=!0;break;case 27:o.key=s.C0.ESC,e.altKey&&(o.key=s.C0.ESC+s.C0.ESC),o.cancel=!0;break;case 37:if(e.metaKey)break;a?(o.key=s.C0.ESC+"[1;"+(a+1)+"D",o.key===s.C0.ESC+"[1;3D"&&(o.key=s.C0.ESC+(i?"b":"[1;5D"))):o.key=t?s.C0.ESC+"OD":s.C0.ESC+"[D";break;case 39:if(e.metaKey)break;a?(o.key=s.C0.ESC+"[1;"+(a+1)+"C",o.key===s.C0.ESC+"[1;3C"&&(o.key=s.C0.ESC+(i?"f":"[1;5C"))):o.key=t?s.C0.ESC+"OC":s.C0.ESC+"[C";break;case 38:if(e.metaKey)break;a?(o.key=s.C0.ESC+"[1;"+(a+1)+"A",i||o.key!==s.C0.ESC+"[1;3A"||(o.key=s.C0.ESC+"[1;5A")):o.key=t?s.C0.ESC+"OA":s.C0.ESC+"[A";break;case 40:if(e.metaKey)break;a?(o.key=s.C0.ESC+"[1;"+(a+1)+"B",i||o.key!==s.C0.ESC+"[1;3B"||(o.key=s.C0.ESC+"[1;5B")):o.key=t?s.C0.ESC+"OB":s.C0.ESC+"[B";break;case 45:e.shiftKey||e.ctrlKey||(o.key=s.C0.ESC+"[2~");break;case 46:o.key=a?s.C0.ESC+"[3;"+(a+1)+"~":s.C0.ESC+"[3~";break;case 36:o.key=a?s.C0.ESC+"[1;"+(a+1)+"H":t?s.C0.ESC+"OH":s.C0.ESC+"[H";break;case 35:o.key=a?s.C0.ESC+"[1;"+(a+1)+"F":t?s.C0.ESC+"OF":s.C0.ESC+"[F";break;case 33:e.shiftKey?o.type=2:e.ctrlKey?o.key=s.C0.ESC+"[5;"+(a+1)+"~":o.key=s.C0.ESC+"[5~";break;case 34:e.shiftKey?o.type=3:e.ctrlKey?o.key=s.C0.ESC+"[6;"+(a+1)+"~":o.key=s.C0.ESC+"[6~";break;case 112:o.key=a?s.C0.ESC+"[1;"+(a+1)+"P":s.C0.ESC+"OP";break;case 113:o.key=a?s.C0.ESC+"[1;"+(a+1)+"Q":s.C0.ESC+"OQ";break;case 114:o.key=a?s.C0.ESC+"[1;"+(a+1)+"R":s.C0.ESC+"OR";break;case 115:o.key=a?s.C0.ESC+"[1;"+(a+1)+"S":s.C0.ESC+"OS";break;case 116:o.key=a?s.C0.ESC+"[15;"+(a+1)+"~":s.C0.ESC+"[15~";break;case 117:o.key=a?s.C0.ESC+"[17;"+(a+1)+"~":s.C0.ESC+"[17~";break;case 118:o.key=a?s.C0.ESC+"[18;"+(a+1)+"~":s.C0.ESC+"[18~";break;case 119:o.key=a?s.C0.ESC+"[19;"+(a+1)+"~":s.C0.ESC+"[19~";break;case 120:o.key=a?s.C0.ESC+"[20;"+(a+1)+"~":s.C0.ESC+"[20~";break;case 121:o.key=a?s.C0.ESC+"[21;"+(a+1)+"~":s.C0.ESC+"[21~";break;case 122:o.key=a?s.C0.ESC+"[23;"+(a+1)+"~":s.C0.ESC+"[23~";break;case 123:o.key=a?s.C0.ESC+"[24;"+(a+1)+"~":s.C0.ESC+"[24~";break;default:if(!e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)if(i&&!n||!e.altKey||e.metaKey)!i||e.altKey||e.ctrlKey||e.shiftKey||!e.metaKey?e.key&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&e.keyCode>=48&&1===e.key.length?o.key=e.key:e.key&&e.ctrlKey&&("_"===e.key&&(o.key=s.C0.US),"@"===e.key&&(o.key=s.C0.NUL)):65===e.keyCode&&(o.type=1);else{const t=r[e.keyCode],i=t?.[e.shiftKey?1:0];if(i)o.key=s.C0.ESC+i;else if(e.keyCode>=65&&e.keyCode<=90){const t=e.ctrlKey?e.keyCode-64:e.keyCode+32;let i=String.fromCharCode(t);e.shiftKey&&(i=i.toUpperCase()),o.key=s.C0.ESC+i}else if(32===e.keyCode)o.key=s.C0.ESC+(e.ctrlKey?s.C0.NUL:" ");else if("Dead"===e.key&&e.code.startsWith("Key")){let t=e.code.slice(3,4);e.shiftKey||(t=t.toLowerCase()),o.key=s.C0.ESC+t,o.cancel=!0}}else e.keyCode>=65&&e.keyCode<=90?o.key=String.fromCharCode(e.keyCode-64):32===e.keyCode?o.key=s.C0.NUL:e.keyCode>=51&&e.keyCode<=55?o.key=String.fromCharCode(e.keyCode-51+27):56===e.keyCode?o.key=s.C0.DEL:219===e.keyCode?o.key=s.C0.ESC:220===e.keyCode?o.key=s.C0.FS:221===e.keyCode&&(o.key=s.C0.GS)}return o}},482:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Utf8ToUtf32=t.StringToUtf32=t.utf32ToString=t.stringFromCodePoint=void 0,t.stringFromCodePoint=function(e){return e>65535?(e-=65536,String.fromCharCode(55296+(e>>10))+String.fromCharCode(e%1024+56320)):String.fromCharCode(e)},t.utf32ToString=function(e,t=0,i=e.length){let s="";for(let r=t;r<i;++r){let t=e[r];t>65535?(t-=65536,s+=String.fromCharCode(55296+(t>>10))+String.fromCharCode(t%1024+56320)):s+=String.fromCharCode(t)}return s},t.StringToUtf32=class{constructor(){this._interim=0}clear(){this._interim=0}decode(e,t){const i=e.length;if(!i)return 0;let s=0,r=0;if(this._interim){const i=e.charCodeAt(r++);56320<=i&&i<=57343?t[s++]=1024*(this._interim-55296)+i-56320+65536:(t[s++]=this._interim,t[s++]=i),this._interim=0}for(let n=r;n<i;++n){const r=e.charCodeAt(n);if(55296<=r&&r<=56319){if(++n>=i)return this._interim=r,s;const o=e.charCodeAt(n);56320<=o&&o<=57343?t[s++]=1024*(r-55296)+o-56320+65536:(t[s++]=r,t[s++]=o)}else 65279!==r&&(t[s++]=r)}return s}},t.Utf8ToUtf32=class{constructor(){this.interim=new Uint8Array(3)}clear(){this.interim.fill(0)}decode(e,t){const i=e.length;if(!i)return 0;let s,r,n,o,a=0,h=0,c=0;if(this.interim[0]){let s=!1,r=this.interim[0];r&=192==(224&r)?31:224==(240&r)?15:7;let n,o=0;for(;(n=63&this.interim[++o])&&o<4;)r<<=6,r|=n;const h=192==(224&this.interim[0])?2:224==(240&this.interim[0])?3:4,l=h-o;for(;c<l;){if(c>=i)return 0;if(n=e[c++],128!=(192&n)){c--,s=!0;break}this.interim[o++]=n,r<<=6,r|=63&n}s||(2===h?r<128?c--:t[a++]=r:3===h?r<2048||r>=55296&&r<=57343||65279===r||(t[a++]=r):r<65536||r>1114111||(t[a++]=r)),this.interim.fill(0)}const l=i-4;let d=c;for(;d<i;){for(;!(!(d<l)||128&(s=e[d])||128&(r=e[d+1])||128&(n=e[d+2])||128&(o=e[d+3]));)t[a++]=s,t[a++]=r,t[a++]=n,t[a++]=o,d+=4;if(s=e[d++],s<128)t[a++]=s;else if(192==(224&s)){if(d>=i)return this.interim[0]=s,a;if(r=e[d++],128!=(192&r)){d--;continue}if(h=(31&s)<<6|63&r,h<128){d--;continue}t[a++]=h}else if(224==(240&s)){if(d>=i)return this.interim[0]=s,a;if(r=e[d++],128!=(192&r)){d--;continue}if(d>=i)return this.interim[0]=s,this.interim[1]=r,a;if(n=e[d++],128!=(192&n)){d--;continue}if(h=(15&s)<<12|(63&r)<<6|63&n,h<2048||h>=55296&&h<=57343||65279===h)continue;t[a++]=h}else if(240==(248&s)){if(d>=i)return this.interim[0]=s,a;if(r=e[d++],128!=(192&r)){d--;continue}if(d>=i)return this.interim[0]=s,this.interim[1]=r,a;if(n=e[d++],128!=(192&n)){d--;continue}if(d>=i)return this.interim[0]=s,this.interim[1]=r,this.interim[2]=n,a;if(o=e[d++],128!=(192&o)){d--;continue}if(h=(7&s)<<18|(63&r)<<12|(63&n)<<6|63&o,h<65536||h>1114111)continue;t[a++]=h}}return a}}},225:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UnicodeV6=void 0;const s=i(1480),r=[[768,879],[1155,1158],[1160,1161],[1425,1469],[1471,1471],[1473,1474],[1476,1477],[1479,1479],[1536,1539],[1552,1557],[1611,1630],[1648,1648],[1750,1764],[1767,1768],[1770,1773],[1807,1807],[1809,1809],[1840,1866],[1958,1968],[2027,2035],[2305,2306],[2364,2364],[2369,2376],[2381,2381],[2385,2388],[2402,2403],[2433,2433],[2492,2492],[2497,2500],[2509,2509],[2530,2531],[2561,2562],[2620,2620],[2625,2626],[2631,2632],[2635,2637],[2672,2673],[2689,2690],[2748,2748],[2753,2757],[2759,2760],[2765,2765],[2786,2787],[2817,2817],[2876,2876],[2879,2879],[2881,2883],[2893,2893],[2902,2902],[2946,2946],[3008,3008],[3021,3021],[3134,3136],[3142,3144],[3146,3149],[3157,3158],[3260,3260],[3263,3263],[3270,3270],[3276,3277],[3298,3299],[3393,3395],[3405,3405],[3530,3530],[3538,3540],[3542,3542],[3633,3633],[3636,3642],[3655,3662],[3761,3761],[3764,3769],[3771,3772],[3784,3789],[3864,3865],[3893,3893],[3895,3895],[3897,3897],[3953,3966],[3968,3972],[3974,3975],[3984,3991],[3993,4028],[4038,4038],[4141,4144],[4146,4146],[4150,4151],[4153,4153],[4184,4185],[4448,4607],[4959,4959],[5906,5908],[5938,5940],[5970,5971],[6002,6003],[6068,6069],[6071,6077],[6086,6086],[6089,6099],[6109,6109],[6155,6157],[6313,6313],[6432,6434],[6439,6440],[6450,6450],[6457,6459],[6679,6680],[6912,6915],[6964,6964],[6966,6970],[6972,6972],[6978,6978],[7019,7027],[7616,7626],[7678,7679],[8203,8207],[8234,8238],[8288,8291],[8298,8303],[8400,8431],[12330,12335],[12441,12442],[43014,43014],[43019,43019],[43045,43046],[64286,64286],[65024,65039],[65056,65059],[65279,65279],[65529,65531]],n=[[68097,68099],[68101,68102],[68108,68111],[68152,68154],[68159,68159],[119143,119145],[119155,119170],[119173,119179],[119210,119213],[119362,119364],[917505,917505],[917536,917631],[917760,917999]];let o;t.UnicodeV6=class{constructor(){if(this.version="6",!o){o=new Uint8Array(65536),o.fill(1),o[0]=0,o.fill(0,1,32),o.fill(0,127,160),o.fill(2,4352,4448),o[9001]=2,o[9002]=2,o.fill(2,11904,42192),o[12351]=1,o.fill(2,44032,55204),o.fill(2,63744,64256),o.fill(2,65040,65050),o.fill(2,65072,65136),o.fill(2,65280,65377),o.fill(2,65504,65511);for(let e=0;e<r.length;++e)o.fill(0,r[e][0],r[e][1]+1)}}wcwidth(e){return e<32?0:e<127?1:e<65536?o[e]:function(e,t){let i,s=0,r=t.length-1;if(e<t[0][0]||e>t[r][1])return!1;for(;r>=s;)if(i=s+r>>1,e>t[i][1])s=i+1;else{if(!(e<t[i][0]))return!0;r=i-1}return!1}(e,n)?0:e>=131072&&e<=196605||e>=196608&&e<=262141?2:1}charProperties(e,t){let i=this.wcwidth(e),r=0===i&&0!==t;if(r){const e=s.UnicodeService.extractWidth(t);0===e?r=!1:e>i&&(i=e)}return s.UnicodeService.createPropertyValue(0,i,r)}}},5981:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WriteBuffer=void 0;const s=i(8460),r=i(844);class n extends r.Disposable{constructor(e){super(),this._action=e,this._writeBuffer=[],this._callbacks=[],this._pendingData=0,this._bufferOffset=0,this._isSyncWriting=!1,this._syncCalls=0,this._didUserInput=!1,this._onWriteParsed=this.register(new s.EventEmitter),this.onWriteParsed=this._onWriteParsed.event}handleUserInput(){this._didUserInput=!0}writeSync(e,t){if(void 0!==t&&this._syncCalls>t)return void(this._syncCalls=0);if(this._pendingData+=e.length,this._writeBuffer.push(e),this._callbacks.push(void 0),this._syncCalls++,this._isSyncWriting)return;let i;for(this._isSyncWriting=!0;i=this._writeBuffer.shift();){this._action(i);const e=this._callbacks.shift();e&&e()}this._pendingData=0,this._bufferOffset=2147483647,this._isSyncWriting=!1,this._syncCalls=0}write(e,t){if(this._pendingData>5e7)throw new Error("write data discarded, use flow control to avoid losing data");if(!this._writeBuffer.length){if(this._bufferOffset=0,this._didUserInput)return this._didUserInput=!1,this._pendingData+=e.length,this._writeBuffer.push(e),this._callbacks.push(t),void this._innerWrite();setTimeout((()=>this._innerWrite()))}this._pendingData+=e.length,this._writeBuffer.push(e),this._callbacks.push(t)}_innerWrite(e=0,t=!0){const i=e||Date.now();for(;this._writeBuffer.length>this._bufferOffset;){const e=this._writeBuffer[this._bufferOffset],s=this._action(e,t);if(s){const e=e=>Date.now()-i>=12?setTimeout((()=>this._innerWrite(0,e))):this._innerWrite(i,e);return void s.catch((e=>(queueMicrotask((()=>{throw e})),Promise.resolve(!1)))).then(e)}const r=this._callbacks[this._bufferOffset];if(r&&r(),this._bufferOffset++,this._pendingData-=e.length,Date.now()-i>=12)break}this._writeBuffer.length>this._bufferOffset?(this._bufferOffset>50&&(this._writeBuffer=this._writeBuffer.slice(this._bufferOffset),this._callbacks=this._callbacks.slice(this._bufferOffset),this._bufferOffset=0),setTimeout((()=>this._innerWrite()))):(this._writeBuffer.length=0,this._callbacks.length=0,this._pendingData=0,this._bufferOffset=0),this._onWriteParsed.fire()}}t.WriteBuffer=n},5941:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.toRgbString=t.parseColor=void 0;const i=/^([\da-f])\/([\da-f])\/([\da-f])$|^([\da-f]{2})\/([\da-f]{2})\/([\da-f]{2})$|^([\da-f]{3})\/([\da-f]{3})\/([\da-f]{3})$|^([\da-f]{4})\/([\da-f]{4})\/([\da-f]{4})$/,s=/^[\da-f]+$/;function r(e,t){const i=e.toString(16),s=i.length<2?"0"+i:i;switch(t){case 4:return i[0];case 8:return s;case 12:return(s+s).slice(0,3);default:return s+s}}t.parseColor=function(e){if(!e)return;let t=e.toLowerCase();if(0===t.indexOf("rgb:")){t=t.slice(4);const e=i.exec(t);if(e){const t=e[1]?15:e[4]?255:e[7]?4095:65535;return[Math.round(parseInt(e[1]||e[4]||e[7]||e[10],16)/t*255),Math.round(parseInt(e[2]||e[5]||e[8]||e[11],16)/t*255),Math.round(parseInt(e[3]||e[6]||e[9]||e[12],16)/t*255)]}}else if(0===t.indexOf("#")&&(t=t.slice(1),s.exec(t)&&[3,6,9,12].includes(t.length))){const e=t.length/3,i=[0,0,0];for(let s=0;s<3;++s){const r=parseInt(t.slice(e*s,e*s+e),16);i[s]=1===e?r<<4:2===e?r:3===e?r>>4:r>>8}return i}},t.toRgbString=function(e,t=16){const[i,s,n]=e;return`rgb:${r(i,t)}/${r(s,t)}/${r(n,t)}`}},5770:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PAYLOAD_LIMIT=void 0,t.PAYLOAD_LIMIT=1e7},6351:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DcsHandler=t.DcsParser=void 0;const s=i(482),r=i(8742),n=i(5770),o=[];t.DcsParser=class{constructor(){this._handlers=Object.create(null),this._active=o,this._ident=0,this._handlerFb=()=>{},this._stack={paused:!1,loopPosition:0,fallThrough:!1}}dispose(){this._handlers=Object.create(null),this._handlerFb=()=>{},this._active=o}registerHandler(e,t){void 0===this._handlers[e]&&(this._handlers[e]=[]);const i=this._handlers[e];return i.push(t),{dispose:()=>{const e=i.indexOf(t);-1!==e&&i.splice(e,1)}}}clearHandler(e){this._handlers[e]&&delete this._handlers[e]}setHandlerFallback(e){this._handlerFb=e}reset(){if(this._active.length)for(let e=this._stack.paused?this._stack.loopPosition-1:this._active.length-1;e>=0;--e)this._active[e].unhook(!1);this._stack.paused=!1,this._active=o,this._ident=0}hook(e,t){if(this.reset(),this._ident=e,this._active=this._handlers[e]||o,this._active.length)for(let e=this._active.length-1;e>=0;e--)this._active[e].hook(t);else this._handlerFb(this._ident,"HOOK",t)}put(e,t,i){if(this._active.length)for(let s=this._active.length-1;s>=0;s--)this._active[s].put(e,t,i);else this._handlerFb(this._ident,"PUT",(0,s.utf32ToString)(e,t,i))}unhook(e,t=!0){if(this._active.length){let i=!1,s=this._active.length-1,r=!1;if(this._stack.paused&&(s=this._stack.loopPosition-1,i=t,r=this._stack.fallThrough,this._stack.paused=!1),!r&&!1===i){for(;s>=0&&(i=this._active[s].unhook(e),!0!==i);s--)if(i instanceof Promise)return this._stack.paused=!0,this._stack.loopPosition=s,this._stack.fallThrough=!1,i;s--}for(;s>=0;s--)if(i=this._active[s].unhook(!1),i instanceof Promise)return this._stack.paused=!0,this._stack.loopPosition=s,this._stack.fallThrough=!0,i}else this._handlerFb(this._ident,"UNHOOK",e);this._active=o,this._ident=0}};const a=new r.Params;a.addParam(0),t.DcsHandler=class{constructor(e){this._handler=e,this._data="",this._params=a,this._hitLimit=!1}hook(e){this._params=e.length>1||e.params[0]?e.clone():a,this._data="",this._hitLimit=!1}put(e,t,i){this._hitLimit||(this._data+=(0,s.utf32ToString)(e,t,i),this._data.length>n.PAYLOAD_LIMIT&&(this._data="",this._hitLimit=!0))}unhook(e){let t=!1;if(this._hitLimit)t=!1;else if(e&&(t=this._handler(this._data,this._params),t instanceof Promise))return t.then((e=>(this._params=a,this._data="",this._hitLimit=!1,e)));return this._params=a,this._data="",this._hitLimit=!1,t}}},2015:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EscapeSequenceParser=t.VT500_TRANSITION_TABLE=t.TransitionTable=void 0;const s=i(844),r=i(8742),n=i(6242),o=i(6351);class a{constructor(e){this.table=new Uint8Array(e)}setDefault(e,t){this.table.fill(e<<4|t)}add(e,t,i,s){this.table[t<<8|e]=i<<4|s}addMany(e,t,i,s){for(let r=0;r<e.length;r++)this.table[t<<8|e[r]]=i<<4|s}}t.TransitionTable=a;const h=160;t.VT500_TRANSITION_TABLE=function(){const e=new a(4095),t=Array.apply(null,Array(256)).map(((e,t)=>t)),i=(e,i)=>t.slice(e,i),s=i(32,127),r=i(0,24);r.push(25),r.push.apply(r,i(28,32));const n=i(0,14);let o;for(o in e.setDefault(1,0),e.addMany(s,0,2,0),n)e.addMany([24,26,153,154],o,3,0),e.addMany(i(128,144),o,3,0),e.addMany(i(144,152),o,3,0),e.add(156,o,0,0),e.add(27,o,11,1),e.add(157,o,4,8),e.addMany([152,158,159],o,0,7),e.add(155,o,11,3),e.add(144,o,11,9);return e.addMany(r,0,3,0),e.addMany(r,1,3,1),e.add(127,1,0,1),e.addMany(r,8,0,8),e.addMany(r,3,3,3),e.add(127,3,0,3),e.addMany(r,4,3,4),e.add(127,4,0,4),e.addMany(r,6,3,6),e.addMany(r,5,3,5),e.add(127,5,0,5),e.addMany(r,2,3,2),e.add(127,2,0,2),e.add(93,1,4,8),e.addMany(s,8,5,8),e.add(127,8,5,8),e.addMany([156,27,24,26,7],8,6,0),e.addMany(i(28,32),8,0,8),e.addMany([88,94,95],1,0,7),e.addMany(s,7,0,7),e.addMany(r,7,0,7),e.add(156,7,0,0),e.add(127,7,0,7),e.add(91,1,11,3),e.addMany(i(64,127),3,7,0),e.addMany(i(48,60),3,8,4),e.addMany([60,61,62,63],3,9,4),e.addMany(i(48,60),4,8,4),e.addMany(i(64,127),4,7,0),e.addMany([60,61,62,63],4,0,6),e.addMany(i(32,64),6,0,6),e.add(127,6,0,6),e.addMany(i(64,127),6,0,0),e.addMany(i(32,48),3,9,5),e.addMany(i(32,48),5,9,5),e.addMany(i(48,64),5,0,6),e.addMany(i(64,127),5,7,0),e.addMany(i(32,48),4,9,5),e.addMany(i(32,48),1,9,2),e.addMany(i(32,48),2,9,2),e.addMany(i(48,127),2,10,0),e.addMany(i(48,80),1,10,0),e.addMany(i(81,88),1,10,0),e.addMany([89,90,92],1,10,0),e.addMany(i(96,127),1,10,0),e.add(80,1,11,9),e.addMany(r,9,0,9),e.add(127,9,0,9),e.addMany(i(28,32),9,0,9),e.addMany(i(32,48),9,9,12),e.addMany(i(48,60),9,8,10),e.addMany([60,61,62,63],9,9,10),e.addMany(r,11,0,11),e.addMany(i(32,128),11,0,11),e.addMany(i(28,32),11,0,11),e.addMany(r,10,0,10),e.add(127,10,0,10),e.addMany(i(28,32),10,0,10),e.addMany(i(48,60),10,8,10),e.addMany([60,61,62,63],10,0,11),e.addMany(i(32,48),10,9,12),e.addMany(r,12,0,12),e.add(127,12,0,12),e.addMany(i(28,32),12,0,12),e.addMany(i(32,48),12,9,12),e.addMany(i(48,64),12,0,11),e.addMany(i(64,127),12,12,13),e.addMany(i(64,127),10,12,13),e.addMany(i(64,127),9,12,13),e.addMany(r,13,13,13),e.addMany(s,13,13,13),e.add(127,13,0,13),e.addMany([27,156,24,26],13,14,0),e.add(h,0,2,0),e.add(h,8,5,8),e.add(h,6,0,6),e.add(h,11,0,11),e.add(h,13,13,13),e}();class c extends s.Disposable{constructor(e=t.VT500_TRANSITION_TABLE){super(),this._transitions=e,this._parseStack={state:0,handlers:[],handlerPos:0,transition:0,chunkPos:0},this.initialState=0,this.currentState=this.initialState,this._params=new r.Params,this._params.addParam(0),this._collect=0,this.precedingJoinState=0,this._printHandlerFb=(e,t,i)=>{},this._executeHandlerFb=e=>{},this._csiHandlerFb=(e,t)=>{},this._escHandlerFb=e=>{},this._errorHandlerFb=e=>e,this._printHandler=this._printHandlerFb,this._executeHandlers=Object.create(null),this._csiHandlers=Object.create(null),this._escHandlers=Object.create(null),this.register((0,s.toDisposable)((()=>{this._csiHandlers=Object.create(null),this._executeHandlers=Object.create(null),this._escHandlers=Object.create(null)}))),this._oscParser=this.register(new n.OscParser),this._dcsParser=this.register(new o.DcsParser),this._errorHandler=this._errorHandlerFb,this.registerEscHandler({final:"\\"},(()=>!0))}_identifier(e,t=[64,126]){let i=0;if(e.prefix){if(e.prefix.length>1)throw new Error("only one byte as prefix supported");if(i=e.prefix.charCodeAt(0),i&&60>i||i>63)throw new Error("prefix must be in range 0x3c .. 0x3f")}if(e.intermediates){if(e.intermediates.length>2)throw new Error("only two bytes as intermediates are supported");for(let t=0;t<e.intermediates.length;++t){const s=e.intermediates.charCodeAt(t);if(32>s||s>47)throw new Error("intermediate must be in range 0x20 .. 0x2f");i<<=8,i|=s}}if(1!==e.final.length)throw new Error("final must be a single byte");const s=e.final.charCodeAt(0);if(t[0]>s||s>t[1])throw new Error(`final must be in range ${t[0]} .. ${t[1]}`);return i<<=8,i|=s,i}identToString(e){const t=[];for(;e;)t.push(String.fromCharCode(255&e)),e>>=8;return t.reverse().join("")}setPrintHandler(e){this._printHandler=e}clearPrintHandler(){this._printHandler=this._printHandlerFb}registerEscHandler(e,t){const i=this._identifier(e,[48,126]);void 0===this._escHandlers[i]&&(this._escHandlers[i]=[]);const s=this._escHandlers[i];return s.push(t),{dispose:()=>{const e=s.indexOf(t);-1!==e&&s.splice(e,1)}}}clearEscHandler(e){this._escHandlers[this._identifier(e,[48,126])]&&delete this._escHandlers[this._identifier(e,[48,126])]}setEscHandlerFallback(e){this._escHandlerFb=e}setExecuteHandler(e,t){this._executeHandlers[e.charCodeAt(0)]=t}clearExecuteHandler(e){this._executeHandlers[e.charCodeAt(0)]&&delete this._executeHandlers[e.charCodeAt(0)]}setExecuteHandlerFallback(e){this._executeHandlerFb=e}registerCsiHandler(e,t){const i=this._identifier(e);void 0===this._csiHandlers[i]&&(this._csiHandlers[i]=[]);const s=this._csiHandlers[i];return s.push(t),{dispose:()=>{const e=s.indexOf(t);-1!==e&&s.splice(e,1)}}}clearCsiHandler(e){this._csiHandlers[this._identifier(e)]&&delete this._csiHandlers[this._identifier(e)]}setCsiHandlerFallback(e){this._csiHandlerFb=e}registerDcsHandler(e,t){return this._dcsParser.registerHandler(this._identifier(e),t)}clearDcsHandler(e){this._dcsParser.clearHandler(this._identifier(e))}setDcsHandlerFallback(e){this._dcsParser.setHandlerFallback(e)}registerOscHandler(e,t){return this._oscParser.registerHandler(e,t)}clearOscHandler(e){this._oscParser.clearHandler(e)}setOscHandlerFallback(e){this._oscParser.setHandlerFallback(e)}setErrorHandler(e){this._errorHandler=e}clearErrorHandler(){this._errorHandler=this._errorHandlerFb}reset(){this.currentState=this.initialState,this._oscParser.reset(),this._dcsParser.reset(),this._params.reset(),this._params.addParam(0),this._collect=0,this.precedingJoinState=0,0!==this._parseStack.state&&(this._parseStack.state=2,this._parseStack.handlers=[])}_preserveStack(e,t,i,s,r){this._parseStack.state=e,this._parseStack.handlers=t,this._parseStack.handlerPos=i,this._parseStack.transition=s,this._parseStack.chunkPos=r}parse(e,t,i){let s,r=0,n=0,o=0;if(this._parseStack.state)if(2===this._parseStack.state)this._parseStack.state=0,o=this._parseStack.chunkPos+1;else{if(void 0===i||1===this._parseStack.state)throw this._parseStack.state=1,new Error("improper continuation due to previous async handler, giving up parsing");const t=this._parseStack.handlers;let n=this._parseStack.handlerPos-1;switch(this._parseStack.state){case 3:if(!1===i&&n>-1)for(;n>=0&&(s=t[n](this._params),!0!==s);n--)if(s instanceof Promise)return this._parseStack.handlerPos=n,s;this._parseStack.handlers=[];break;case 4:if(!1===i&&n>-1)for(;n>=0&&(s=t[n](),!0!==s);n--)if(s instanceof Promise)return this._parseStack.handlerPos=n,s;this._parseStack.handlers=[];break;case 6:if(r=e[this._parseStack.chunkPos],s=this._dcsParser.unhook(24!==r&&26!==r,i),s)return s;27===r&&(this._parseStack.transition|=1),this._params.reset(),this._params.addParam(0),this._collect=0;break;case 5:if(r=e[this._parseStack.chunkPos],s=this._oscParser.end(24!==r&&26!==r,i),s)return s;27===r&&(this._parseStack.transition|=1),this._params.reset(),this._params.addParam(0),this._collect=0}this._parseStack.state=0,o=this._parseStack.chunkPos+1,this.precedingJoinState=0,this.currentState=15&this._parseStack.transition}for(let i=o;i<t;++i){switch(r=e[i],n=this._transitions.table[this.currentState<<8|(r<160?r:h)],n>>4){case 2:for(let s=i+1;;++s){if(s>=t||(r=e[s])<32||r>126&&r<h){this._printHandler(e,i,s),i=s-1;break}if(++s>=t||(r=e[s])<32||r>126&&r<h){this._printHandler(e,i,s),i=s-1;break}if(++s>=t||(r=e[s])<32||r>126&&r<h){this._printHandler(e,i,s),i=s-1;break}if(++s>=t||(r=e[s])<32||r>126&&r<h){this._printHandler(e,i,s),i=s-1;break}}break;case 3:this._executeHandlers[r]?this._executeHandlers[r]():this._executeHandlerFb(r),this.precedingJoinState=0;break;case 0:break;case 1:if(this._errorHandler({position:i,code:r,currentState:this.currentState,collect:this._collect,params:this._params,abort:!1}).abort)return;break;case 7:const o=this._csiHandlers[this._collect<<8|r];let a=o?o.length-1:-1;for(;a>=0&&(s=o[a](this._params),!0!==s);a--)if(s instanceof Promise)return this._preserveStack(3,o,a,n,i),s;a<0&&this._csiHandlerFb(this._collect<<8|r,this._params),this.precedingJoinState=0;break;case 8:do{switch(r){case 59:this._params.addParam(0);break;case 58:this._params.addSubParam(-1);break;default:this._params.addDigit(r-48)}}while(++i<t&&(r=e[i])>47&&r<60);i--;break;case 9:this._collect<<=8,this._collect|=r;break;case 10:const c=this._escHandlers[this._collect<<8|r];let l=c?c.length-1:-1;for(;l>=0&&(s=c[l](),!0!==s);l--)if(s instanceof Promise)return this._preserveStack(4,c,l,n,i),s;l<0&&this._escHandlerFb(this._collect<<8|r),this.precedingJoinState=0;break;case 11:this._params.reset(),this._params.addParam(0),this._collect=0;break;case 12:this._dcsParser.hook(this._collect<<8|r,this._params);break;case 13:for(let s=i+1;;++s)if(s>=t||24===(r=e[s])||26===r||27===r||r>127&&r<h){this._dcsParser.put(e,i,s),i=s-1;break}break;case 14:if(s=this._dcsParser.unhook(24!==r&&26!==r),s)return this._preserveStack(6,[],0,n,i),s;27===r&&(n|=1),this._params.reset(),this._params.addParam(0),this._collect=0,this.precedingJoinState=0;break;case 4:this._oscParser.start();break;case 5:for(let s=i+1;;s++)if(s>=t||(r=e[s])<32||r>127&&r<h){this._oscParser.put(e,i,s),i=s-1;break}break;case 6:if(s=this._oscParser.end(24!==r&&26!==r),s)return this._preserveStack(5,[],0,n,i),s;27===r&&(n|=1),this._params.reset(),this._params.addParam(0),this._collect=0,this.precedingJoinState=0}this.currentState=15&n}}}t.EscapeSequenceParser=c},6242:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OscHandler=t.OscParser=void 0;const s=i(5770),r=i(482),n=[];t.OscParser=class{constructor(){this._state=0,this._active=n,this._id=-1,this._handlers=Object.create(null),this._handlerFb=()=>{},this._stack={paused:!1,loopPosition:0,fallThrough:!1}}registerHandler(e,t){void 0===this._handlers[e]&&(this._handlers[e]=[]);const i=this._handlers[e];return i.push(t),{dispose:()=>{const e=i.indexOf(t);-1!==e&&i.splice(e,1)}}}clearHandler(e){this._handlers[e]&&delete this._handlers[e]}setHandlerFallback(e){this._handlerFb=e}dispose(){this._handlers=Object.create(null),this._handlerFb=()=>{},this._active=n}reset(){if(2===this._state)for(let e=this._stack.paused?this._stack.loopPosition-1:this._active.length-1;e>=0;--e)this._active[e].end(!1);this._stack.paused=!1,this._active=n,this._id=-1,this._state=0}_start(){if(this._active=this._handlers[this._id]||n,this._active.length)for(let e=this._active.length-1;e>=0;e--)this._active[e].start();else this._handlerFb(this._id,"START")}_put(e,t,i){if(this._active.length)for(let s=this._active.length-1;s>=0;s--)this._active[s].put(e,t,i);else this._handlerFb(this._id,"PUT",(0,r.utf32ToString)(e,t,i))}start(){this.reset(),this._state=1}put(e,t,i){if(3!==this._state){if(1===this._state)for(;t<i;){const i=e[t++];if(59===i){this._state=2,this._start();break}if(i<48||57<i)return void(this._state=3);-1===this._id&&(this._id=0),this._id=10*this._id+i-48}2===this._state&&i-t>0&&this._put(e,t,i)}}end(e,t=!0){if(0!==this._state){if(3!==this._state)if(1===this._state&&this._start(),this._active.length){let i=!1,s=this._active.length-1,r=!1;if(this._stack.paused&&(s=this._stack.loopPosition-1,i=t,r=this._stack.fallThrough,this._stack.paused=!1),!r&&!1===i){for(;s>=0&&(i=this._active[s].end(e),!0!==i);s--)if(i instanceof Promise)return this._stack.paused=!0,this._stack.loopPosition=s,this._stack.fallThrough=!1,i;s--}for(;s>=0;s--)if(i=this._active[s].end(!1),i instanceof Promise)return this._stack.paused=!0,this._stack.loopPosition=s,this._stack.fallThrough=!0,i}else this._handlerFb(this._id,"END",e);this._active=n,this._id=-1,this._state=0}}},t.OscHandler=class{constructor(e){this._handler=e,this._data="",this._hitLimit=!1}start(){this._data="",this._hitLimit=!1}put(e,t,i){this._hitLimit||(this._data+=(0,r.utf32ToString)(e,t,i),this._data.length>s.PAYLOAD_LIMIT&&(this._data="",this._hitLimit=!0))}end(e){let t=!1;if(this._hitLimit)t=!1;else if(e&&(t=this._handler(this._data),t instanceof Promise))return t.then((e=>(this._data="",this._hitLimit=!1,e)));return this._data="",this._hitLimit=!1,t}}},8742:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Params=void 0;const i=2147483647;class s{static fromArray(e){const t=new s;if(!e.length)return t;for(let i=Array.isArray(e[0])?1:0;i<e.length;++i){const s=e[i];if(Array.isArray(s))for(let e=0;e<s.length;++e)t.addSubParam(s[e]);else t.addParam(s)}return t}constructor(e=32,t=32){if(this.maxLength=e,this.maxSubParamsLength=t,t>256)throw new Error("maxSubParamsLength must not be greater than 256");this.params=new Int32Array(e),this.length=0,this._subParams=new Int32Array(t),this._subParamsLength=0,this._subParamsIdx=new Uint16Array(e),this._rejectDigits=!1,this._rejectSubDigits=!1,this._digitIsSub=!1}clone(){const e=new s(this.maxLength,this.maxSubParamsLength);return e.params.set(this.params),e.length=this.length,e._subParams.set(this._subParams),e._subParamsLength=this._subParamsLength,e._subParamsIdx.set(this._subParamsIdx),e._rejectDigits=this._rejectDigits,e._rejectSubDigits=this._rejectSubDigits,e._digitIsSub=this._digitIsSub,e}toArray(){const e=[];for(let t=0;t<this.length;++t){e.push(this.params[t]);const i=this._subParamsIdx[t]>>8,s=255&this._subParamsIdx[t];s-i>0&&e.push(Array.prototype.slice.call(this._subParams,i,s))}return e}reset(){this.length=0,this._subParamsLength=0,this._rejectDigits=!1,this._rejectSubDigits=!1,this._digitIsSub=!1}addParam(e){if(this._digitIsSub=!1,this.length>=this.maxLength)this._rejectDigits=!0;else{if(e<-1)throw new Error("values lesser than -1 are not allowed");this._subParamsIdx[this.length]=this._subParamsLength<<8|this._subParamsLength,this.params[this.length++]=e>i?i:e}}addSubParam(e){if(this._digitIsSub=!0,this.length)if(this._rejectDigits||this._subParamsLength>=this.maxSubParamsLength)this._rejectSubDigits=!0;else{if(e<-1)throw new Error("values lesser than -1 are not allowed");this._subParams[this._subParamsLength++]=e>i?i:e,this._subParamsIdx[this.length-1]++}}hasSubParams(e){return(255&this._subParamsIdx[e])-(this._subParamsIdx[e]>>8)>0}getSubParams(e){const t=this._subParamsIdx[e]>>8,i=255&this._subParamsIdx[e];return i-t>0?this._subParams.subarray(t,i):null}getSubParamsAll(){const e={};for(let t=0;t<this.length;++t){const i=this._subParamsIdx[t]>>8,s=255&this._subParamsIdx[t];s-i>0&&(e[t]=this._subParams.slice(i,s))}return e}addDigit(e){let t;if(this._rejectDigits||!(t=this._digitIsSub?this._subParamsLength:this.length)||this._digitIsSub&&this._rejectSubDigits)return;const s=this._digitIsSub?this._subParams:this.params,r=s[t-1];s[t-1]=~r?Math.min(10*r+e,i):e}}t.Params=s},5741:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AddonManager=void 0,t.AddonManager=class{constructor(){this._addons=[]}dispose(){for(let e=this._addons.length-1;e>=0;e--)this._addons[e].instance.dispose()}loadAddon(e,t){const i={instance:t,dispose:t.dispose,isDisposed:!1};this._addons.push(i),t.dispose=()=>this._wrappedAddonDispose(i),t.activate(e)}_wrappedAddonDispose(e){if(e.isDisposed)return;let t=-1;for(let i=0;i<this._addons.length;i++)if(this._addons[i]===e){t=i;break}if(-1===t)throw new Error("Could not dispose an addon that has not been loaded");e.isDisposed=!0,e.dispose.apply(e.instance),this._addons.splice(t,1)}}},8771:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BufferApiView=void 0;const s=i(3785),r=i(511);t.BufferApiView=class{constructor(e,t){this._buffer=e,this.type=t}init(e){return this._buffer=e,this}get cursorY(){return this._buffer.y}get cursorX(){return this._buffer.x}get viewportY(){return this._buffer.ydisp}get baseY(){return this._buffer.ybase}get length(){return this._buffer.lines.length}getLine(e){const t=this._buffer.lines.get(e);if(t)return new s.BufferLineApiView(t)}getNullCell(){return new r.CellData}}},3785:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BufferLineApiView=void 0;const s=i(511);t.BufferLineApiView=class{constructor(e){this._line=e}get isWrapped(){return this._line.isWrapped}get length(){return this._line.length}getCell(e,t){if(!(e<0||e>=this._line.length))return t?(this._line.loadCell(e,t),t):this._line.loadCell(e,new s.CellData)}translateToString(e,t,i){return this._line.translateToString(e,t,i)}}},8285:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BufferNamespaceApi=void 0;const s=i(8771),r=i(8460),n=i(844);class o extends n.Disposable{constructor(e){super(),this._core=e,this._onBufferChange=this.register(new r.EventEmitter),this.onBufferChange=this._onBufferChange.event,this._normal=new s.BufferApiView(this._core.buffers.normal,"normal"),this._alternate=new s.BufferApiView(this._core.buffers.alt,"alternate"),this._core.buffers.onBufferActivate((()=>this._onBufferChange.fire(this.active)))}get active(){if(this._core.buffers.active===this._core.buffers.normal)return this.normal;if(this._core.buffers.active===this._core.buffers.alt)return this.alternate;throw new Error("Active buffer is neither normal nor alternate")}get normal(){return this._normal.init(this._core.buffers.normal)}get alternate(){return this._alternate.init(this._core.buffers.alt)}}t.BufferNamespaceApi=o},7975:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ParserApi=void 0,t.ParserApi=class{constructor(e){this._core=e}registerCsiHandler(e,t){return this._core.registerCsiHandler(e,(e=>t(e.toArray())))}addCsiHandler(e,t){return this.registerCsiHandler(e,t)}registerDcsHandler(e,t){return this._core.registerDcsHandler(e,((e,i)=>t(e,i.toArray())))}addDcsHandler(e,t){return this.registerDcsHandler(e,t)}registerEscHandler(e,t){return this._core.registerEscHandler(e,t)}addEscHandler(e,t){return this.registerEscHandler(e,t)}registerOscHandler(e,t){return this._core.registerOscHandler(e,t)}addOscHandler(e,t){return this.registerOscHandler(e,t)}}},7090:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UnicodeApi=void 0,t.UnicodeApi=class{constructor(e){this._core=e}register(e){this._core.unicodeService.register(e)}get versions(){return this._core.unicodeService.versions}get activeVersion(){return this._core.unicodeService.activeVersion}set activeVersion(e){this._core.unicodeService.activeVersion=e}}},744:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.BufferService=t.MINIMUM_ROWS=t.MINIMUM_COLS=void 0;const n=i(8460),o=i(844),a=i(5295),h=i(2585);t.MINIMUM_COLS=2,t.MINIMUM_ROWS=1;let c=t.BufferService=class extends o.Disposable{get buffer(){return this.buffers.active}constructor(e){super(),this.isUserScrolling=!1,this._onResize=this.register(new n.EventEmitter),this.onResize=this._onResize.event,this._onScroll=this.register(new n.EventEmitter),this.onScroll=this._onScroll.event,this.cols=Math.max(e.rawOptions.cols||0,t.MINIMUM_COLS),this.rows=Math.max(e.rawOptions.rows||0,t.MINIMUM_ROWS),this.buffers=this.register(new a.BufferSet(e,this))}resize(e,t){this.cols=e,this.rows=t,this.buffers.resize(e,t),this._onResize.fire({cols:e,rows:t})}reset(){this.buffers.reset(),this.isUserScrolling=!1}scroll(e,t=!1){const i=this.buffer;let s;s=this._cachedBlankLine,s&&s.length===this.cols&&s.getFg(0)===e.fg&&s.getBg(0)===e.bg||(s=i.getBlankLine(e,t),this._cachedBlankLine=s),s.isWrapped=t;const r=i.ybase+i.scrollTop,n=i.ybase+i.scrollBottom;if(0===i.scrollTop){const e=i.lines.isFull;n===i.lines.length-1?e?i.lines.recycle().copyFrom(s):i.lines.push(s.clone()):i.lines.splice(n+1,0,s.clone()),e?this.isUserScrolling&&(i.ydisp=Math.max(i.ydisp-1,0)):(i.ybase++,this.isUserScrolling||i.ydisp++)}else{const e=n-r+1;i.lines.shiftElements(r+1,e-1,-1),i.lines.set(n,s.clone())}this.isUserScrolling||(i.ydisp=i.ybase),this._onScroll.fire(i.ydisp)}scrollLines(e,t,i){const s=this.buffer;if(e<0){if(0===s.ydisp)return;this.isUserScrolling=!0}else e+s.ydisp>=s.ybase&&(this.isUserScrolling=!1);const r=s.ydisp;s.ydisp=Math.max(Math.min(s.ydisp+e,s.ybase),0),r!==s.ydisp&&(t||this._onScroll.fire(s.ydisp))}};t.BufferService=c=s([r(0,h.IOptionsService)],c)},7994:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CharsetService=void 0,t.CharsetService=class{constructor(){this.glevel=0,this._charsets=[]}reset(){this.charset=void 0,this._charsets=[],this.glevel=0}setgLevel(e){this.glevel=e,this.charset=this._charsets[e]}setgCharset(e,t){this._charsets[e]=t,this.glevel===e&&(this.charset=t)}}},1753:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.CoreMouseService=void 0;const n=i(2585),o=i(8460),a=i(844),h={NONE:{events:0,restrict:()=>!1},X10:{events:1,restrict:e=>4!==e.button&&1===e.action&&(e.ctrl=!1,e.alt=!1,e.shift=!1,!0)},VT200:{events:19,restrict:e=>32!==e.action},DRAG:{events:23,restrict:e=>32!==e.action||3!==e.button},ANY:{events:31,restrict:e=>!0}};function c(e,t){let i=(e.ctrl?16:0)|(e.shift?4:0)|(e.alt?8:0);return 4===e.button?(i|=64,i|=e.action):(i|=3&e.button,4&e.button&&(i|=64),8&e.button&&(i|=128),32===e.action?i|=32:0!==e.action||t||(i|=3)),i}const l=String.fromCharCode,d={DEFAULT:e=>{const t=[c(e,!1)+32,e.col+32,e.row+32];return t[0]>255||t[1]>255||t[2]>255?"":`[M${l(t[0])}${l(t[1])}${l(t[2])}`},SGR:e=>{const t=0===e.action&&4!==e.button?"m":"M";return`[<${c(e,!0)};${e.col};${e.row}${t}`},SGR_PIXELS:e=>{const t=0===e.action&&4!==e.button?"m":"M";return`[<${c(e,!0)};${e.x};${e.y}${t}`}};let _=t.CoreMouseService=class extends a.Disposable{constructor(e,t){super(),this._bufferService=e,this._coreService=t,this._protocols={},this._encodings={},this._activeProtocol="",this._activeEncoding="",this._lastEvent=null,this._onProtocolChange=this.register(new o.EventEmitter),this.onProtocolChange=this._onProtocolChange.event;for(const e of Object.keys(h))this.addProtocol(e,h[e]);for(const e of Object.keys(d))this.addEncoding(e,d[e]);this.reset()}addProtocol(e,t){this._protocols[e]=t}addEncoding(e,t){this._encodings[e]=t}get activeProtocol(){return this._activeProtocol}get areMouseEventsActive(){return 0!==this._protocols[this._activeProtocol].events}set activeProtocol(e){if(!this._protocols[e])throw new Error(`unknown protocol "${e}"`);this._activeProtocol=e,this._onProtocolChange.fire(this._protocols[e].events)}get activeEncoding(){return this._activeEncoding}set activeEncoding(e){if(!this._encodings[e])throw new Error(`unknown encoding "${e}"`);this._activeEncoding=e}reset(){this.activeProtocol="NONE",this.activeEncoding="DEFAULT",this._lastEvent=null}triggerMouseEvent(e){if(e.col<0||e.col>=this._bufferService.cols||e.row<0||e.row>=this._bufferService.rows)return!1;if(4===e.button&&32===e.action)return!1;if(3===e.button&&32!==e.action)return!1;if(4!==e.button&&(2===e.action||3===e.action))return!1;if(e.col++,e.row++,32===e.action&&this._lastEvent&&this._equalEvents(this._lastEvent,e,"SGR_PIXELS"===this._activeEncoding))return!1;if(!this._protocols[this._activeProtocol].restrict(e))return!1;const t=this._encodings[this._activeEncoding](e);return t&&("DEFAULT"===this._activeEncoding?this._coreService.triggerBinaryEvent(t):this._coreService.triggerDataEvent(t,!0)),this._lastEvent=e,!0}explainEvents(e){return{down:!!(1&e),up:!!(2&e),drag:!!(4&e),move:!!(8&e),wheel:!!(16&e)}}_equalEvents(e,t,i){if(i){if(e.x!==t.x)return!1;if(e.y!==t.y)return!1}else{if(e.col!==t.col)return!1;if(e.row!==t.row)return!1}return e.button===t.button&&e.action===t.action&&e.ctrl===t.ctrl&&e.alt===t.alt&&e.shift===t.shift}};t.CoreMouseService=_=s([r(0,n.IBufferService),r(1,n.ICoreService)],_)},6975:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.CoreService=void 0;const n=i(1439),o=i(8460),a=i(844),h=i(2585),c=Object.freeze({insertMode:!1}),l=Object.freeze({applicationCursorKeys:!1,applicationKeypad:!1,bracketedPasteMode:!1,origin:!1,reverseWraparound:!1,sendFocus:!1,wraparound:!0});let d=t.CoreService=class extends a.Disposable{constructor(e,t,i){super(),this._bufferService=e,this._logService=t,this._optionsService=i,this.isCursorInitialized=!1,this.isCursorHidden=!1,this._onData=this.register(new o.EventEmitter),this.onData=this._onData.event,this._onUserInput=this.register(new o.EventEmitter),this.onUserInput=this._onUserInput.event,this._onBinary=this.register(new o.EventEmitter),this.onBinary=this._onBinary.event,this._onRequestScrollToBottom=this.register(new o.EventEmitter),this.onRequestScrollToBottom=this._onRequestScrollToBottom.event,this.modes=(0,n.clone)(c),this.decPrivateModes=(0,n.clone)(l)}reset(){this.modes=(0,n.clone)(c),this.decPrivateModes=(0,n.clone)(l)}triggerDataEvent(e,t=!1){if(this._optionsService.rawOptions.disableStdin)return;const i=this._bufferService.buffer;t&&this._optionsService.rawOptions.scrollOnUserInput&&i.ybase!==i.ydisp&&this._onRequestScrollToBottom.fire(),t&&this._onUserInput.fire(),this._logService.debug(`sending data "${e}"`,(()=>e.split("").map((e=>e.charCodeAt(0))))),this._onData.fire(e)}triggerBinaryEvent(e){this._optionsService.rawOptions.disableStdin||(this._logService.debug(`sending binary "${e}"`,(()=>e.split("").map((e=>e.charCodeAt(0))))),this._onBinary.fire(e))}};t.CoreService=d=s([r(0,h.IBufferService),r(1,h.ILogService),r(2,h.IOptionsService)],d)},9074:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DecorationService=void 0;const s=i(8055),r=i(8460),n=i(844),o=i(6106);let a=0,h=0;class c extends n.Disposable{get decorations(){return this._decorations.values()}constructor(){super(),this._decorations=new o.SortedList((e=>e?.marker.line)),this._onDecorationRegistered=this.register(new r.EventEmitter),this.onDecorationRegistered=this._onDecorationRegistered.event,this._onDecorationRemoved=this.register(new r.EventEmitter),this.onDecorationRemoved=this._onDecorationRemoved.event,this.register((0,n.toDisposable)((()=>this.reset())))}registerDecoration(e){if(e.marker.isDisposed)return;const t=new l(e);if(t){const e=t.marker.onDispose((()=>t.dispose()));t.onDispose((()=>{t&&(this._decorations.delete(t)&&this._onDecorationRemoved.fire(t),e.dispose())})),this._decorations.insert(t),this._onDecorationRegistered.fire(t)}return t}reset(){for(const e of this._decorations.values())e.dispose();this._decorations.clear()}*getDecorationsAtCell(e,t,i){let s=0,r=0;for(const n of this._decorations.getKeyIterator(t))s=n.options.x??0,r=s+(n.options.width??1),e>=s&&e<r&&(!i||(n.options.layer??"bottom")===i)&&(yield n)}forEachDecorationAtCell(e,t,i,s){this._decorations.forEachByKey(t,(t=>{a=t.options.x??0,h=a+(t.options.width??1),e>=a&&e<h&&(!i||(t.options.layer??"bottom")===i)&&s(t)}))}}t.DecorationService=c;class l extends n.Disposable{get isDisposed(){return this._isDisposed}get backgroundColorRGB(){return null===this._cachedBg&&(this.options.backgroundColor?this._cachedBg=s.css.toColor(this.options.backgroundColor):this._cachedBg=void 0),this._cachedBg}get foregroundColorRGB(){return null===this._cachedFg&&(this.options.foregroundColor?this._cachedFg=s.css.toColor(this.options.foregroundColor):this._cachedFg=void 0),this._cachedFg}constructor(e){super(),this.options=e,this.onRenderEmitter=this.register(new r.EventEmitter),this.onRender=this.onRenderEmitter.event,this._onDispose=this.register(new r.EventEmitter),this.onDispose=this._onDispose.event,this._cachedBg=null,this._cachedFg=null,this.marker=e.marker,this.options.overviewRulerOptions&&!this.options.overviewRulerOptions.position&&(this.options.overviewRulerOptions.position="full")}dispose(){this._onDispose.fire(),super.dispose()}}},4348:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InstantiationService=t.ServiceCollection=void 0;const s=i(2585),r=i(8343);class n{constructor(...e){this._entries=new Map;for(const[t,i]of e)this.set(t,i)}set(e,t){const i=this._entries.get(e);return this._entries.set(e,t),i}forEach(e){for(const[t,i]of this._entries.entries())e(t,i)}has(e){return this._entries.has(e)}get(e){return this._entries.get(e)}}t.ServiceCollection=n,t.InstantiationService=class{constructor(){this._services=new n,this._services.set(s.IInstantiationService,this)}setService(e,t){this._services.set(e,t)}getService(e){return this._services.get(e)}createInstance(e,...t){const i=(0,r.getServiceDependencies)(e).sort(((e,t)=>e.index-t.index)),s=[];for(const t of i){const i=this._services.get(t.id);if(!i)throw new Error(`[createInstance] ${e.name} depends on UNKNOWN service ${t.id}.`);s.push(i)}const n=i.length>0?i[0].index:t.length;if(t.length!==n)throw new Error(`[createInstance] First service dependency of ${e.name} at position ${n+1} conflicts with ${t.length} static arguments`);return new e(...[...t,...s])}}},7866:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.traceCall=t.setTraceLogger=t.LogService=void 0;const n=i(844),o=i(2585),a={trace:o.LogLevelEnum.TRACE,debug:o.LogLevelEnum.DEBUG,info:o.LogLevelEnum.INFO,warn:o.LogLevelEnum.WARN,error:o.LogLevelEnum.ERROR,off:o.LogLevelEnum.OFF};let h,c=t.LogService=class extends n.Disposable{get logLevel(){return this._logLevel}constructor(e){super(),this._optionsService=e,this._logLevel=o.LogLevelEnum.OFF,this._updateLogLevel(),this.register(this._optionsService.onSpecificOptionChange("logLevel",(()=>this._updateLogLevel()))),h=this}_updateLogLevel(){this._logLevel=a[this._optionsService.rawOptions.logLevel]}_evalLazyOptionalParams(e){for(let t=0;t<e.length;t++)"function"==typeof e[t]&&(e[t]=e[t]())}_log(e,t,i){this._evalLazyOptionalParams(i),e.call(console,(this._optionsService.options.logger?"":"xterm.js: ")+t,...i)}trace(e,...t){this._logLevel<=o.LogLevelEnum.TRACE&&this._log(this._optionsService.options.logger?.trace.bind(this._optionsService.options.logger)??console.log,e,t)}debug(e,...t){this._logLevel<=o.LogLevelEnum.DEBUG&&this._log(this._optionsService.options.logger?.debug.bind(this._optionsService.options.logger)??console.log,e,t)}info(e,...t){this._logLevel<=o.LogLevelEnum.INFO&&this._log(this._optionsService.options.logger?.info.bind(this._optionsService.options.logger)??console.info,e,t)}warn(e,...t){this._logLevel<=o.LogLevelEnum.WARN&&this._log(this._optionsService.options.logger?.warn.bind(this._optionsService.options.logger)??console.warn,e,t)}error(e,...t){this._logLevel<=o.LogLevelEnum.ERROR&&this._log(this._optionsService.options.logger?.error.bind(this._optionsService.options.logger)??console.error,e,t)}};t.LogService=c=s([r(0,o.IOptionsService)],c),t.setTraceLogger=function(e){h=e},t.traceCall=function(e,t,i){if("function"!=typeof i.value)throw new Error("not supported");const s=i.value;i.value=function(...e){if(h.logLevel!==o.LogLevelEnum.TRACE)return s.apply(this,e);h.trace(`GlyphRenderer#${s.name}(${e.map((e=>JSON.stringify(e))).join(", ")})`);const t=s.apply(this,e);return h.trace(`GlyphRenderer#${s.name} return`,t),t}}},7302:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OptionsService=t.DEFAULT_OPTIONS=void 0;const s=i(8460),r=i(844),n=i(6114);t.DEFAULT_OPTIONS={cols:80,rows:24,cursorBlink:!1,cursorStyle:"block",cursorWidth:1,cursorInactiveStyle:"outline",customGlyphs:!0,drawBoldTextInBrightColors:!0,documentOverride:null,fastScrollModifier:"alt",fastScrollSensitivity:5,fontFamily:"courier-new, courier, monospace",fontSize:15,fontWeight:"normal",fontWeightBold:"bold",ignoreBracketedPasteMode:!1,lineHeight:1,letterSpacing:0,linkHandler:null,logLevel:"info",logger:null,scrollback:1e3,scrollOnUserInput:!0,scrollSensitivity:1,screenReaderMode:!1,smoothScrollDuration:0,macOptionIsMeta:!1,macOptionClickForcesSelection:!1,minimumContrastRatio:1,disableStdin:!1,allowProposedApi:!1,allowTransparency:!1,tabStopWidth:8,theme:{},rescaleOverlappingGlyphs:!1,rightClickSelectsWord:n.isMac,windowOptions:{},windowsMode:!1,windowsPty:{},wordSeparator:" ()[]{}',\"`",altClickMovesCursor:!0,convertEol:!1,termName:"xterm",cancelEvents:!1,overviewRulerWidth:0};const o=["normal","bold","100","200","300","400","500","600","700","800","900"];class a extends r.Disposable{constructor(e){super(),this._onOptionChange=this.register(new s.EventEmitter),this.onOptionChange=this._onOptionChange.event;const i={...t.DEFAULT_OPTIONS};for(const t in e)if(t in i)try{const s=e[t];i[t]=this._sanitizeAndValidateOption(t,s)}catch(e){console.error(e)}this.rawOptions=i,this.options={...i},this._setupOptions(),this.register((0,r.toDisposable)((()=>{this.rawOptions.linkHandler=null,this.rawOptions.documentOverride=null})))}onSpecificOptionChange(e,t){return this.onOptionChange((i=>{i===e&&t(this.rawOptions[e])}))}onMultipleOptionChange(e,t){return this.onOptionChange((i=>{-1!==e.indexOf(i)&&t()}))}_setupOptions(){const e=e=>{if(!(e in t.DEFAULT_OPTIONS))throw new Error(`No option with key "${e}"`);return this.rawOptions[e]},i=(e,i)=>{if(!(e in t.DEFAULT_OPTIONS))throw new Error(`No option with key "${e}"`);i=this._sanitizeAndValidateOption(e,i),this.rawOptions[e]!==i&&(this.rawOptions[e]=i,this._onOptionChange.fire(e))};for(const t in this.rawOptions){const s={get:e.bind(this,t),set:i.bind(this,t)};Object.defineProperty(this.options,t,s)}}_sanitizeAndValidateOption(e,i){switch(e){case"cursorStyle":if(i||(i=t.DEFAULT_OPTIONS[e]),!function(e){return"block"===e||"underline"===e||"bar"===e}(i))throw new Error(`"${i}" is not a valid value for ${e}`);break;case"wordSeparator":i||(i=t.DEFAULT_OPTIONS[e]);break;case"fontWeight":case"fontWeightBold":if("number"==typeof i&&1<=i&&i<=1e3)break;i=o.includes(i)?i:t.DEFAULT_OPTIONS[e];break;case"cursorWidth":i=Math.floor(i);case"lineHeight":case"tabStopWidth":if(i<1)throw new Error(`${e} cannot be less than 1, value: ${i}`);break;case"minimumContrastRatio":i=Math.max(1,Math.min(21,Math.round(10*i)/10));break;case"scrollback":if((i=Math.min(i,4294967295))<0)throw new Error(`${e} cannot be less than 0, value: ${i}`);break;case"fastScrollSensitivity":case"scrollSensitivity":if(i<=0)throw new Error(`${e} cannot be less than or equal to 0, value: ${i}`);break;case"rows":case"cols":if(!i&&0!==i)throw new Error(`${e} must be numeric, value: ${i}`);break;case"windowsPty":i=i??{}}return i}}t.OptionsService=a},2660:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.OscLinkService=void 0;const n=i(2585);let o=t.OscLinkService=class{constructor(e){this._bufferService=e,this._nextId=1,this._entriesWithId=new Map,this._dataByLinkId=new Map}registerLink(e){const t=this._bufferService.buffer;if(void 0===e.id){const i=t.addMarker(t.ybase+t.y),s={data:e,id:this._nextId++,lines:[i]};return i.onDispose((()=>this._removeMarkerFromLink(s,i))),this._dataByLinkId.set(s.id,s),s.id}const i=e,s=this._getEntryIdKey(i),r=this._entriesWithId.get(s);if(r)return this.addLineToLink(r.id,t.ybase+t.y),r.id;const n=t.addMarker(t.ybase+t.y),o={id:this._nextId++,key:this._getEntryIdKey(i),data:i,lines:[n]};return n.onDispose((()=>this._removeMarkerFromLink(o,n))),this._entriesWithId.set(o.key,o),this._dataByLinkId.set(o.id,o),o.id}addLineToLink(e,t){const i=this._dataByLinkId.get(e);if(i&&i.lines.every((e=>e.line!==t))){const e=this._bufferService.buffer.addMarker(t);i.lines.push(e),e.onDispose((()=>this._removeMarkerFromLink(i,e)))}}getLinkData(e){return this._dataByLinkId.get(e)?.data}_getEntryIdKey(e){return`${e.id};;${e.uri}`}_removeMarkerFromLink(e,t){const i=e.lines.indexOf(t);-1!==i&&(e.lines.splice(i,1),0===e.lines.length&&(void 0!==e.data.id&&this._entriesWithId.delete(e.key),this._dataByLinkId.delete(e.id)))}};t.OscLinkService=o=s([r(0,n.IBufferService)],o)},8343:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createDecorator=t.getServiceDependencies=t.serviceRegistry=void 0;const i="di$target",s="di$dependencies";t.serviceRegistry=new Map,t.getServiceDependencies=function(e){return e[s]||[]},t.createDecorator=function(e){if(t.serviceRegistry.has(e))return t.serviceRegistry.get(e);const r=function(e,t,n){if(3!==arguments.length)throw new Error("@IServiceName-decorator can only be used to decorate a parameter");!function(e,t,r){t[i]===t?t[s].push({id:e,index:r}):(t[s]=[{id:e,index:r}],t[i]=t)}(r,e,n)};return r.toString=()=>e,t.serviceRegistry.set(e,r),r}},2585:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IDecorationService=t.IUnicodeService=t.IOscLinkService=t.IOptionsService=t.ILogService=t.LogLevelEnum=t.IInstantiationService=t.ICharsetService=t.ICoreService=t.ICoreMouseService=t.IBufferService=void 0;const s=i(8343);var r;t.IBufferService=(0,s.createDecorator)("BufferService"),t.ICoreMouseService=(0,s.createDecorator)("CoreMouseService"),t.ICoreService=(0,s.createDecorator)("CoreService"),t.ICharsetService=(0,s.createDecorator)("CharsetService"),t.IInstantiationService=(0,s.createDecorator)("InstantiationService"),function(e){e[e.TRACE=0]="TRACE",e[e.DEBUG=1]="DEBUG",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.OFF=5]="OFF"}(r||(t.LogLevelEnum=r={})),t.ILogService=(0,s.createDecorator)("LogService"),t.IOptionsService=(0,s.createDecorator)("OptionsService"),t.IOscLinkService=(0,s.createDecorator)("OscLinkService"),t.IUnicodeService=(0,s.createDecorator)("UnicodeService"),t.IDecorationService=(0,s.createDecorator)("DecorationService")},1480:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UnicodeService=void 0;const s=i(8460),r=i(225);class n{static extractShouldJoin(e){return 0!=(1&e)}static extractWidth(e){return e>>1&3}static extractCharKind(e){return e>>3}static createPropertyValue(e,t,i=!1){return(16777215&e)<<3|(3&t)<<1|(i?1:0)}constructor(){this._providers=Object.create(null),this._active="",this._onChange=new s.EventEmitter,this.onChange=this._onChange.event;const e=new r.UnicodeV6;this.register(e),this._active=e.version,this._activeProvider=e}dispose(){this._onChange.dispose()}get versions(){return Object.keys(this._providers)}get activeVersion(){return this._active}set activeVersion(e){if(!this._providers[e])throw new Error(`unknown Unicode version "${e}"`);this._active=e,this._activeProvider=this._providers[e],this._onChange.fire(e)}register(e){this._providers[e.version]=e}wcwidth(e){return this._activeProvider.wcwidth(e)}getStringCellWidth(e){let t=0,i=0;const s=e.length;for(let r=0;r<s;++r){let o=e.charCodeAt(r);if(55296<=o&&o<=56319){if(++r>=s)return t+this.wcwidth(o);const i=e.charCodeAt(r);56320<=i&&i<=57343?o=1024*(o-55296)+i-56320+65536:t+=this.wcwidth(i)}const a=this.charProperties(o,i);let h=n.extractWidth(a);n.extractShouldJoin(a)&&(h-=n.extractWidth(i)),t+=h,i=a}return t}charProperties(e,t){return this._activeProvider.charProperties(e,t)}}t.UnicodeService=n}},t={};function i(s){var r=t[s];if(void 0!==r)return r.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,i),n.exports}var s={};return(()=>{var e=s;Object.defineProperty(e,"__esModule",{value:!0}),e.Terminal=void 0;const t=i(9042),r=i(3236),n=i(844),o=i(5741),a=i(8285),h=i(7975),c=i(7090),l=["cols","rows"];class d extends n.Disposable{constructor(e){super(),this._core=this.register(new r.Terminal(e)),this._addonManager=this.register(new o.AddonManager),this._publicOptions={...this._core.options};const t=e=>this._core.options[e],i=(e,t)=>{this._checkReadonlyOptions(e),this._core.options[e]=t};for(const e in this._core.options){const s={get:t.bind(this,e),set:i.bind(this,e)};Object.defineProperty(this._publicOptions,e,s)}}_checkReadonlyOptions(e){if(l.includes(e))throw new Error(`Option "${e}" can only be set in the constructor`)}_checkProposedApi(){if(!this._core.optionsService.rawOptions.allowProposedApi)throw new Error("You must set the allowProposedApi option to true to use proposed API")}get onBell(){return this._core.onBell}get onBinary(){return this._core.onBinary}get onCursorMove(){return this._core.onCursorMove}get onData(){return this._core.onData}get onKey(){return this._core.onKey}get onLineFeed(){return this._core.onLineFeed}get onRender(){return this._core.onRender}get onResize(){return this._core.onResize}get onScroll(){return this._core.onScroll}get onSelectionChange(){return this._core.onSelectionChange}get onTitleChange(){return this._core.onTitleChange}get onWriteParsed(){return this._core.onWriteParsed}get element(){return this._core.element}get parser(){return this._parser||(this._parser=new h.ParserApi(this._core)),this._parser}get unicode(){return this._checkProposedApi(),new c.UnicodeApi(this._core)}get textarea(){return this._core.textarea}get rows(){return this._core.rows}get cols(){return this._core.cols}get buffer(){return this._buffer||(this._buffer=this.register(new a.BufferNamespaceApi(this._core))),this._buffer}get markers(){return this._checkProposedApi(),this._core.markers}get modes(){const e=this._core.coreService.decPrivateModes;let t="none";switch(this._core.coreMouseService.activeProtocol){case"X10":t="x10";break;case"VT200":t="vt200";break;case"DRAG":t="drag";break;case"ANY":t="any"}return{applicationCursorKeysMode:e.applicationCursorKeys,applicationKeypadMode:e.applicationKeypad,bracketedPasteMode:e.bracketedPasteMode,insertMode:this._core.coreService.modes.insertMode,mouseTrackingMode:t,originMode:e.origin,reverseWraparoundMode:e.reverseWraparound,sendFocusMode:e.sendFocus,wraparoundMode:e.wraparound}}get options(){return this._publicOptions}set options(e){for(const t in e)this._publicOptions[t]=e[t]}blur(){this._core.blur()}focus(){this._core.focus()}input(e,t=!0){this._core.input(e,t)}resize(e,t){this._verifyIntegers(e,t),this._core.resize(e,t)}open(e){this._core.open(e)}attachCustomKeyEventHandler(e){this._core.attachCustomKeyEventHandler(e)}attachCustomWheelEventHandler(e){this._core.attachCustomWheelEventHandler(e)}registerLinkProvider(e){return this._core.registerLinkProvider(e)}registerCharacterJoiner(e){return this._checkProposedApi(),this._core.registerCharacterJoiner(e)}deregisterCharacterJoiner(e){this._checkProposedApi(),this._core.deregisterCharacterJoiner(e)}registerMarker(e=0){return this._verifyIntegers(e),this._core.registerMarker(e)}registerDecoration(e){return this._checkProposedApi(),this._verifyPositiveIntegers(e.x??0,e.width??0,e.height??0),this._core.registerDecoration(e)}hasSelection(){return this._core.hasSelection()}select(e,t,i){this._verifyIntegers(e,t,i),this._core.select(e,t,i)}getSelection(){return this._core.getSelection()}getSelectionPosition(){return this._core.getSelectionPosition()}clearSelection(){this._core.clearSelection()}selectAll(){this._core.selectAll()}selectLines(e,t){this._verifyIntegers(e,t),this._core.selectLines(e,t)}dispose(){super.dispose()}scrollLines(e){this._verifyIntegers(e),this._core.scrollLines(e)}scrollPages(e){this._verifyIntegers(e),this._core.scrollPages(e)}scrollToTop(){this._core.scrollToTop()}scrollToBottom(){this._core.scrollToBottom()}scrollToLine(e){this._verifyIntegers(e),this._core.scrollToLine(e)}clear(){this._core.clear()}write(e,t){this._core.write(e,t)}writeln(e,t){this._core.write(e),this._core.write("\r\n",t)}paste(e){this._core.paste(e)}refresh(e,t){this._verifyIntegers(e,t),this._core.refresh(e,t)}reset(){this._core.reset()}clearTextureAtlas(){this._core.clearTextureAtlas()}loadAddon(e){this._addonManager.loadAddon(this,e)}static get strings(){return t}_verifyIntegers(...e){for(const t of e)if(t===1/0||isNaN(t)||t%1!=0)throw new Error("This API only accepts integers")}_verifyPositiveIntegers(...e){for(const t of e)if(t&&(t===1/0||isNaN(t)||t%1!=0||t<0))throw new Error("This API only accepts positive integers")}}e.Terminal=d})(),s})()));
//# sourceMappingURL=xterm.js.map

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@xterm/xterm/css/xterm.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@xterm/xterm/css/xterm.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * Copyright (c) 2014 The xterm.js authors. All rights reserved.
 * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)
 * https://github.com/chjj/term.js
 * @license MIT
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Originally forked from (with the author's permission):
 *   Fabrice Bellard's javascript vt100 for jslinux:
 *   http://bellard.org/jslinux/
 *   Copyright (c) 2011 Fabrice Bellard
 *   The original design remains. The terminal itself
 *   has been extended to include xterm CSI codes, among
 *   other features.
 */

/**
 *  Default styles for xterm.js
 */

.xterm {
    cursor: text;
    position: relative;
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
}

.xterm.focus,
.xterm:focus {
    outline: none;
}

.xterm .xterm-helpers {
    position: absolute;
    top: 0;
    /**
     * The z-index of the helpers must be higher than the canvases in order for
     * IMEs to appear on top.
     */
    z-index: 5;
}

.xterm .xterm-helper-textarea {
    padding: 0;
    border: 0;
    margin: 0;
    /* Move textarea out of the screen to the far left, so that the cursor is not visible */
    position: absolute;
    opacity: 0;
    left: -9999em;
    top: 0;
    width: 0;
    height: 0;
    z-index: -5;
    /** Prevent wrapping so the IME appears against the textarea at the correct position */
    white-space: nowrap;
    overflow: hidden;
    resize: none;
}

.xterm .composition-view {
    /* TODO: Composition position got messed up somewhere */
    background: #000;
    color: #FFF;
    display: none;
    position: absolute;
    white-space: nowrap;
    z-index: 1;
}

.xterm .composition-view.active {
    display: block;
}

.xterm .xterm-viewport {
    /* On OS X this is required in order for the scroll bar to appear fully opaque */
    background-color: #000;
    overflow-y: scroll;
    cursor: default;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
}

.xterm .xterm-screen {
    position: relative;
}

.xterm .xterm-screen canvas {
    position: absolute;
    left: 0;
    top: 0;
}

.xterm .xterm-scroll-area {
    visibility: hidden;
}

.xterm-char-measure-element {
    display: inline-block;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: -9999em;
    line-height: normal;
}

.xterm.enable-mouse-events {
    /* When mouse events are enabled (eg. tmux), revert to the standard pointer cursor */
    cursor: default;
}

.xterm.xterm-cursor-pointer,
.xterm .xterm-cursor-pointer {
    cursor: pointer;
}

.xterm.column-select.focus {
    /* Column selection mode */
    cursor: crosshair;
}

.xterm .xterm-accessibility:not(.debug),
.xterm .xterm-message {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    color: transparent;
    pointer-events: none;
}

.xterm .xterm-accessibility-tree:not(.debug) *::selection {
  color: transparent;
}

.xterm .xterm-accessibility-tree {
  user-select: text;
  white-space: pre;
}

.xterm .live-region {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
}

.xterm-dim {
    /* Dim should not apply to background, so the opacity of the foreground color is applied
     * explicitly in the generated class and reset to 1 here */
    opacity: 1 !important;
}

.xterm-underline-1 { text-decoration: underline; }
.xterm-underline-2 { text-decoration: double underline; }
.xterm-underline-3 { text-decoration: wavy underline; }
.xterm-underline-4 { text-decoration: dotted underline; }
.xterm-underline-5 { text-decoration: dashed underline; }

.xterm-overline {
    text-decoration: overline;
}

.xterm-overline.xterm-underline-1 { text-decoration: overline underline; }
.xterm-overline.xterm-underline-2 { text-decoration: overline double underline; }
.xterm-overline.xterm-underline-3 { text-decoration: overline wavy underline; }
.xterm-overline.xterm-underline-4 { text-decoration: overline dotted underline; }
.xterm-overline.xterm-underline-5 { text-decoration: overline dashed underline; }

.xterm-strikethrough {
    text-decoration: line-through;
}

.xterm-screen .xterm-decoration-container .xterm-decoration {
	z-index: 6;
	position: absolute;
}

.xterm-screen .xterm-decoration-container .xterm-decoration.xterm-decoration-top-layer {
	z-index: 7;
}

.xterm-decoration-overview-ruler {
    z-index: 8;
    position: absolute;
    top: 0;
    right: 0;
    pointer-events: none;
}

.xterm-decoration-top {
    z-index: 2;
    position: relative;
}
`, "",{"version":3,"sources":["webpack://./node_modules/@xterm/xterm/css/xterm.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA+BE;;AAEF;;EAEE;;AAEF;IACI,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN;;;MAGE;IACF,UAAU;AACd;;AAEA;IACI,UAAU;IACV,SAAS;IACT,SAAS;IACT,uFAAuF;IACvF,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,MAAM;IACN,QAAQ;IACR,SAAS;IACT,WAAW;IACX,sFAAsF;IACtF,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,uDAAuD;IACvD,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gFAAgF;IAChF,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,QAAQ;IACR,OAAO;IACP,MAAM;IACN,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,MAAM;AACV;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,kBAAkB;IAClB,MAAM;IACN,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,oFAAoF;IACpF,eAAe;AACnB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;;IAEI,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,SAAS;IACT,QAAQ;IACR,WAAW;IACX,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,UAAU;IACV,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI;8DAC0D;IAC1D,qBAAqB;AACzB;;AAEA,qBAAqB,0BAA0B,EAAE;AACjD,qBAAqB,iCAAiC,EAAE;AACxD,qBAAqB,+BAA+B,EAAE;AACtD,qBAAqB,iCAAiC,EAAE;AACxD,qBAAqB,iCAAiC,EAAE;;AAExD;IACI,yBAAyB;AAC7B;;AAEA,oCAAoC,mCAAmC,EAAE;AACzE,oCAAoC,0CAA0C,EAAE;AAChF,oCAAoC,wCAAwC,EAAE;AAC9E,oCAAoC,0CAA0C,EAAE;AAChF,oCAAoC,0CAA0C,EAAE;;AAEhF;IACI,6BAA6B;AACjC;;AAEA;CACC,UAAU;CACV,kBAAkB;AACnB;;AAEA;CACC,UAAU;AACX;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,oBAAoB;AACxB;;AAEA;IACI,UAAU;IACV,kBAAkB;AACtB","sourcesContent":["/**\n * Copyright (c) 2014 The xterm.js authors. All rights reserved.\n * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)\n * https://github.com/chjj/term.js\n * @license MIT\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n *\n * Originally forked from (with the author's permission):\n *   Fabrice Bellard's javascript vt100 for jslinux:\n *   http://bellard.org/jslinux/\n *   Copyright (c) 2011 Fabrice Bellard\n *   The original design remains. The terminal itself\n *   has been extended to include xterm CSI codes, among\n *   other features.\n */\n\n/**\n *  Default styles for xterm.js\n */\n\n.xterm {\n    cursor: text;\n    position: relative;\n    user-select: none;\n    -ms-user-select: none;\n    -webkit-user-select: none;\n}\n\n.xterm.focus,\n.xterm:focus {\n    outline: none;\n}\n\n.xterm .xterm-helpers {\n    position: absolute;\n    top: 0;\n    /**\n     * The z-index of the helpers must be higher than the canvases in order for\n     * IMEs to appear on top.\n     */\n    z-index: 5;\n}\n\n.xterm .xterm-helper-textarea {\n    padding: 0;\n    border: 0;\n    margin: 0;\n    /* Move textarea out of the screen to the far left, so that the cursor is not visible */\n    position: absolute;\n    opacity: 0;\n    left: -9999em;\n    top: 0;\n    width: 0;\n    height: 0;\n    z-index: -5;\n    /** Prevent wrapping so the IME appears against the textarea at the correct position */\n    white-space: nowrap;\n    overflow: hidden;\n    resize: none;\n}\n\n.xterm .composition-view {\n    /* TODO: Composition position got messed up somewhere */\n    background: #000;\n    color: #FFF;\n    display: none;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 1;\n}\n\n.xterm .composition-view.active {\n    display: block;\n}\n\n.xterm .xterm-viewport {\n    /* On OS X this is required in order for the scroll bar to appear fully opaque */\n    background-color: #000;\n    overflow-y: scroll;\n    cursor: default;\n    position: absolute;\n    right: 0;\n    left: 0;\n    top: 0;\n    bottom: 0;\n}\n\n.xterm .xterm-screen {\n    position: relative;\n}\n\n.xterm .xterm-screen canvas {\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.xterm .xterm-scroll-area {\n    visibility: hidden;\n}\n\n.xterm-char-measure-element {\n    display: inline-block;\n    visibility: hidden;\n    position: absolute;\n    top: 0;\n    left: -9999em;\n    line-height: normal;\n}\n\n.xterm.enable-mouse-events {\n    /* When mouse events are enabled (eg. tmux), revert to the standard pointer cursor */\n    cursor: default;\n}\n\n.xterm.xterm-cursor-pointer,\n.xterm .xterm-cursor-pointer {\n    cursor: pointer;\n}\n\n.xterm.column-select.focus {\n    /* Column selection mode */\n    cursor: crosshair;\n}\n\n.xterm .xterm-accessibility:not(.debug),\n.xterm .xterm-message {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 10;\n    color: transparent;\n    pointer-events: none;\n}\n\n.xterm .xterm-accessibility-tree:not(.debug) *::selection {\n  color: transparent;\n}\n\n.xterm .xterm-accessibility-tree {\n  user-select: text;\n  white-space: pre;\n}\n\n.xterm .live-region {\n    position: absolute;\n    left: -9999px;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n}\n\n.xterm-dim {\n    /* Dim should not apply to background, so the opacity of the foreground color is applied\n     * explicitly in the generated class and reset to 1 here */\n    opacity: 1 !important;\n}\n\n.xterm-underline-1 { text-decoration: underline; }\n.xterm-underline-2 { text-decoration: double underline; }\n.xterm-underline-3 { text-decoration: wavy underline; }\n.xterm-underline-4 { text-decoration: dotted underline; }\n.xterm-underline-5 { text-decoration: dashed underline; }\n\n.xterm-overline {\n    text-decoration: overline;\n}\n\n.xterm-overline.xterm-underline-1 { text-decoration: overline underline; }\n.xterm-overline.xterm-underline-2 { text-decoration: overline double underline; }\n.xterm-overline.xterm-underline-3 { text-decoration: overline wavy underline; }\n.xterm-overline.xterm-underline-4 { text-decoration: overline dotted underline; }\n.xterm-overline.xterm-underline-5 { text-decoration: overline dashed underline; }\n\n.xterm-strikethrough {\n    text-decoration: line-through;\n}\n\n.xterm-screen .xterm-decoration-container .xterm-decoration {\n\tz-index: 6;\n\tposition: absolute;\n}\n\n.xterm-screen .xterm-decoration-container .xterm-decoration.xterm-decoration-top-layer {\n\tz-index: 7;\n}\n\n.xterm-decoration-overview-ruler {\n    z-index: 8;\n    position: absolute;\n    top: 0;\n    right: 0;\n    pointer-events: none;\n}\n\n.xterm-decoration-top {\n    z-index: 2;\n    position: relative;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/notyf/notyf.min.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/notyf/notyf.min.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@-webkit-keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes notyf-fadeinleft{0%{opacity:0;transform:translateX(25%)}to{opacity:1;transform:translateX(0)}}@keyframes notyf-fadeinleft{0%{opacity:0;transform:translateX(25%)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes notyf-fadeoutright{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(25%)}}@keyframes notyf-fadeoutright{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(25%)}}@-webkit-keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@-webkit-keyframes ripple{0%{transform:scale(0) translateY(-45%) translateX(13%)}to{transform:scale(1) translateY(-45%) translateX(13%)}}@keyframes ripple{0%{transform:scale(0) translateY(-45%) translateX(13%)}to{transform:scale(1) translateY(-45%) translateX(13%)}}.notyf{position:fixed;top:0;left:0;height:100%;width:100%;color:#fff;z-index:9999;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;pointer-events:none;box-sizing:border-box;padding:20px}.notyf__icon--error,.notyf__icon--success{height:21px;width:21px;background:#fff;border-radius:50%;display:block;margin:0 auto;position:relative}.notyf__icon--error:after,.notyf__icon--error:before{content:"";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px;left:9px;height:12px;top:5px}.notyf__icon--error:after{transform:rotate(-45deg)}.notyf__icon--error:before{transform:rotate(45deg)}.notyf__icon--success:after,.notyf__icon--success:before{content:"";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px}.notyf__icon--success:after{height:6px;transform:rotate(-45deg);top:9px;left:6px}.notyf__icon--success:before{height:11px;transform:rotate(45deg);top:5px;left:10px}.notyf__toast{display:block;overflow:hidden;pointer-events:auto;-webkit-animation:notyf-fadeinup .3s ease-in forwards;animation:notyf-fadeinup .3s ease-in forwards;box-shadow:0 3px 7px 0 rgba(0,0,0,.25);position:relative;padding:0 15px;border-radius:2px;max-width:300px;transform:translateY(25%);box-sizing:border-box;flex-shrink:0}.notyf__toast--disappear{transform:translateY(0);-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s}.notyf__toast--disappear .notyf__icon,.notyf__toast--disappear .notyf__message{-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;opacity:1;transform:translateY(0)}.notyf__toast--disappear .notyf__dismiss{-webkit-animation:notyf-fadeoutright .3s forwards;animation:notyf-fadeoutright .3s forwards;opacity:1;transform:translateX(0)}.notyf__toast--disappear .notyf__message{-webkit-animation-delay:.05s;animation-delay:.05s}.notyf__toast--upper{margin-bottom:20px}.notyf__toast--lower{margin-top:20px}.notyf__toast--dismissible .notyf__wrapper{padding-right:30px}.notyf__ripple{height:400px;width:400px;position:absolute;transform-origin:bottom right;right:0;top:0;border-radius:50%;transform:scale(0) translateY(-51%) translateX(13%);z-index:5;-webkit-animation:ripple .4s ease-out forwards;animation:ripple .4s ease-out forwards}.notyf__wrapper{display:flex;align-items:center;padding-top:17px;padding-bottom:17px;padding-right:15px;border-radius:3px;position:relative;z-index:10}.notyf__icon{width:22px;text-align:center;font-size:1.3em;opacity:0;-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.3s;animation-delay:.3s;margin-right:13px}.notyf__dismiss{position:absolute;top:0;right:0;height:100%;width:26px;margin-right:-15px;-webkit-animation:notyf-fadeinleft .3s forwards;animation:notyf-fadeinleft .3s forwards;-webkit-animation-delay:.35s;animation-delay:.35s;opacity:0}.notyf__dismiss-btn{background-color:rgba(0,0,0,.25);border:none;cursor:pointer;transition:opacity .2s ease,background-color .2s ease;outline:none;opacity:.35;height:100%;width:100%}.notyf__dismiss-btn:after,.notyf__dismiss-btn:before{content:"";background:#fff;height:12px;width:2px;border-radius:3px;position:absolute;left:calc(50% - 1px);top:calc(50% - 5px)}.notyf__dismiss-btn:after{transform:rotate(-45deg)}.notyf__dismiss-btn:before{transform:rotate(45deg)}.notyf__dismiss-btn:hover{opacity:.7;background-color:rgba(0,0,0,.15)}.notyf__dismiss-btn:active{opacity:.8}.notyf__message{vertical-align:middle;position:relative;opacity:0;-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s;line-height:1.5em}@media only screen and (max-width:480px){.notyf{padding:0}.notyf__ripple{height:600px;width:600px;-webkit-animation-duration:.5s;animation-duration:.5s}.notyf__toast{max-width:none;border-radius:0;box-shadow:0 -2px 7px 0 rgba(0,0,0,.13);width:100%}.notyf__dismiss{width:56px}}`, "",{"version":3,"sources":["webpack://./node_modules/notyf/notyf.min.css"],"names":[],"mappings":"AAAA,kCAAkC,GAAG,SAAS,CAAC,yBAAyB,CAAC,GAAG,SAAS,CAAC,uBAAuB,CAAC,CAAC,0BAA0B,GAAG,SAAS,CAAC,yBAAyB,CAAC,GAAG,SAAS,CAAC,uBAAuB,CAAC,CAAC,oCAAoC,GAAG,SAAS,CAAC,yBAAyB,CAAC,GAAG,SAAS,CAAC,uBAAuB,CAAC,CAAC,4BAA4B,GAAG,SAAS,CAAC,yBAAyB,CAAC,GAAG,SAAS,CAAC,uBAAuB,CAAC,CAAC,sCAAsC,GAAG,SAAS,CAAC,uBAAuB,CAAC,GAAG,SAAS,CAAC,yBAAyB,CAAC,CAAC,8BAA8B,GAAG,SAAS,CAAC,uBAAuB,CAAC,GAAG,SAAS,CAAC,yBAAyB,CAAC,CAAC,qCAAqC,GAAG,SAAS,CAAC,uBAAuB,CAAC,GAAG,SAAS,CAAC,yBAAyB,CAAC,CAAC,6BAA6B,GAAG,SAAS,CAAC,uBAAuB,CAAC,GAAG,SAAS,CAAC,yBAAyB,CAAC,CAAC,0BAA0B,GAAG,mDAAmD,CAAC,GAAG,mDAAmD,CAAC,CAAC,kBAAkB,GAAG,mDAAmD,CAAC,GAAG,mDAAmD,CAAC,CAAC,OAAO,cAAc,CAAC,KAAK,CAAC,MAAM,CAAC,WAAW,CAAC,UAAU,CAAC,UAAU,CAAC,YAAY,CAAC,YAAY,CAAC,qBAAqB,CAAC,oBAAoB,CAAC,wBAAwB,CAAC,mBAAmB,CAAC,qBAAqB,CAAC,YAAY,CAAC,0CAA0C,WAAW,CAAC,UAAU,CAAC,eAAe,CAAC,iBAAiB,CAAC,aAAa,CAAC,aAAa,CAAC,iBAAiB,CAAC,qDAAqD,UAAU,CAAC,uBAAuB,CAAC,aAAa,CAAC,iBAAiB,CAAC,SAAS,CAAC,iBAAiB,CAAC,QAAQ,CAAC,WAAW,CAAC,OAAO,CAAC,0BAA0B,wBAAwB,CAAC,2BAA2B,uBAAuB,CAAC,yDAAyD,UAAU,CAAC,uBAAuB,CAAC,aAAa,CAAC,iBAAiB,CAAC,SAAS,CAAC,iBAAiB,CAAC,4BAA4B,UAAU,CAAC,wBAAwB,CAAC,OAAO,CAAC,QAAQ,CAAC,6BAA6B,WAAW,CAAC,uBAAuB,CAAC,OAAO,CAAC,SAAS,CAAC,cAAc,aAAa,CAAC,eAAe,CAAC,mBAAmB,CAAC,qDAAqD,CAAC,6CAA6C,CAAC,sCAAsC,CAAC,iBAAiB,CAAC,cAAc,CAAC,iBAAiB,CAAC,eAAe,CAAC,yBAAyB,CAAC,qBAAqB,CAAC,aAAa,CAAC,yBAAyB,uBAAuB,CAAC,gDAAgD,CAAC,wCAAwC,CAAC,4BAA4B,CAAC,oBAAoB,CAAC,+EAA+E,gDAAgD,CAAC,wCAAwC,CAAC,SAAS,CAAC,uBAAuB,CAAC,yCAAyC,iDAAiD,CAAC,yCAAyC,CAAC,SAAS,CAAC,uBAAuB,CAAC,yCAAyC,4BAA4B,CAAC,oBAAoB,CAAC,qBAAqB,kBAAkB,CAAC,qBAAqB,eAAe,CAAC,2CAA2C,kBAAkB,CAAC,eAAe,YAAY,CAAC,WAAW,CAAC,iBAAiB,CAAC,6BAA6B,CAAC,OAAO,CAAC,KAAK,CAAC,iBAAiB,CAAC,mDAAmD,CAAC,SAAS,CAAC,8CAA8C,CAAC,sCAAsC,CAAC,gBAAgB,YAAY,CAAC,kBAAkB,CAAC,gBAAgB,CAAC,mBAAmB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,UAAU,CAAC,aAAa,UAAU,CAAC,iBAAiB,CAAC,eAAe,CAAC,SAAS,CAAC,6CAA6C,CAAC,qCAAqC,CAAC,2BAA2B,CAAC,mBAAmB,CAAC,iBAAiB,CAAC,gBAAgB,iBAAiB,CAAC,KAAK,CAAC,OAAO,CAAC,WAAW,CAAC,UAAU,CAAC,kBAAkB,CAAC,+CAA+C,CAAC,uCAAuC,CAAC,4BAA4B,CAAC,oBAAoB,CAAC,SAAS,CAAC,oBAAoB,gCAAgC,CAAC,WAAW,CAAC,cAAc,CAAC,qDAAqD,CAAC,YAAY,CAAC,WAAW,CAAC,WAAW,CAAC,UAAU,CAAC,qDAAqD,UAAU,CAAC,eAAe,CAAC,WAAW,CAAC,SAAS,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,oBAAoB,CAAC,mBAAmB,CAAC,0BAA0B,wBAAwB,CAAC,2BAA2B,uBAAuB,CAAC,0BAA0B,UAAU,CAAC,gCAAgC,CAAC,2BAA2B,UAAU,CAAC,gBAAgB,qBAAqB,CAAC,iBAAiB,CAAC,SAAS,CAAC,6CAA6C,CAAC,qCAAqC,CAAC,4BAA4B,CAAC,oBAAoB,CAAC,iBAAiB,CAAC,yCAAyC,OAAO,SAAS,CAAC,eAAe,YAAY,CAAC,WAAW,CAAC,8BAA8B,CAAC,sBAAsB,CAAC,cAAc,cAAc,CAAC,eAAe,CAAC,uCAAuC,CAAC,UAAU,CAAC,gBAAgB,UAAU,CAAC","sourcesContent":["@-webkit-keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes notyf-fadeinleft{0%{opacity:0;transform:translateX(25%)}to{opacity:1;transform:translateX(0)}}@keyframes notyf-fadeinleft{0%{opacity:0;transform:translateX(25%)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes notyf-fadeoutright{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(25%)}}@keyframes notyf-fadeoutright{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(25%)}}@-webkit-keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@-webkit-keyframes ripple{0%{transform:scale(0) translateY(-45%) translateX(13%)}to{transform:scale(1) translateY(-45%) translateX(13%)}}@keyframes ripple{0%{transform:scale(0) translateY(-45%) translateX(13%)}to{transform:scale(1) translateY(-45%) translateX(13%)}}.notyf{position:fixed;top:0;left:0;height:100%;width:100%;color:#fff;z-index:9999;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;pointer-events:none;box-sizing:border-box;padding:20px}.notyf__icon--error,.notyf__icon--success{height:21px;width:21px;background:#fff;border-radius:50%;display:block;margin:0 auto;position:relative}.notyf__icon--error:after,.notyf__icon--error:before{content:\"\";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px;left:9px;height:12px;top:5px}.notyf__icon--error:after{transform:rotate(-45deg)}.notyf__icon--error:before{transform:rotate(45deg)}.notyf__icon--success:after,.notyf__icon--success:before{content:\"\";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px}.notyf__icon--success:after{height:6px;transform:rotate(-45deg);top:9px;left:6px}.notyf__icon--success:before{height:11px;transform:rotate(45deg);top:5px;left:10px}.notyf__toast{display:block;overflow:hidden;pointer-events:auto;-webkit-animation:notyf-fadeinup .3s ease-in forwards;animation:notyf-fadeinup .3s ease-in forwards;box-shadow:0 3px 7px 0 rgba(0,0,0,.25);position:relative;padding:0 15px;border-radius:2px;max-width:300px;transform:translateY(25%);box-sizing:border-box;flex-shrink:0}.notyf__toast--disappear{transform:translateY(0);-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s}.notyf__toast--disappear .notyf__icon,.notyf__toast--disappear .notyf__message{-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;opacity:1;transform:translateY(0)}.notyf__toast--disappear .notyf__dismiss{-webkit-animation:notyf-fadeoutright .3s forwards;animation:notyf-fadeoutright .3s forwards;opacity:1;transform:translateX(0)}.notyf__toast--disappear .notyf__message{-webkit-animation-delay:.05s;animation-delay:.05s}.notyf__toast--upper{margin-bottom:20px}.notyf__toast--lower{margin-top:20px}.notyf__toast--dismissible .notyf__wrapper{padding-right:30px}.notyf__ripple{height:400px;width:400px;position:absolute;transform-origin:bottom right;right:0;top:0;border-radius:50%;transform:scale(0) translateY(-51%) translateX(13%);z-index:5;-webkit-animation:ripple .4s ease-out forwards;animation:ripple .4s ease-out forwards}.notyf__wrapper{display:flex;align-items:center;padding-top:17px;padding-bottom:17px;padding-right:15px;border-radius:3px;position:relative;z-index:10}.notyf__icon{width:22px;text-align:center;font-size:1.3em;opacity:0;-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.3s;animation-delay:.3s;margin-right:13px}.notyf__dismiss{position:absolute;top:0;right:0;height:100%;width:26px;margin-right:-15px;-webkit-animation:notyf-fadeinleft .3s forwards;animation:notyf-fadeinleft .3s forwards;-webkit-animation-delay:.35s;animation-delay:.35s;opacity:0}.notyf__dismiss-btn{background-color:rgba(0,0,0,.25);border:none;cursor:pointer;transition:opacity .2s ease,background-color .2s ease;outline:none;opacity:.35;height:100%;width:100%}.notyf__dismiss-btn:after,.notyf__dismiss-btn:before{content:\"\";background:#fff;height:12px;width:2px;border-radius:3px;position:absolute;left:calc(50% - 1px);top:calc(50% - 5px)}.notyf__dismiss-btn:after{transform:rotate(-45deg)}.notyf__dismiss-btn:before{transform:rotate(45deg)}.notyf__dismiss-btn:hover{opacity:.7;background-color:rgba(0,0,0,.15)}.notyf__dismiss-btn:active{opacity:.8}.notyf__message{vertical-align:middle;position:relative;opacity:0;-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s;line-height:1.5em}@media only screen and (max-width:480px){.notyf{padding:0}.notyf__ripple{height:600px;width:600px;-webkit-animation-duration:.5s;animation-duration:.5s}.notyf__toast{max-width:none;border-radius:0;box-shadow:0 -2px 7px 0 rgba(0,0,0,.13);width:100%}.notyf__dismiss{width:56px}}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/fonts.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/fonts.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/IBM.woff */ "./src/assets/fonts/IBM.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'IBM';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff');
}
`, "",{"version":3,"sources":["webpack://./src/styles/fonts.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,2DAAmD;AACvD","sourcesContent":["@font-face {\n    font-family: 'IBM';\n    src: url('../assets/fonts/IBM.woff') format('woff');\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_xterm_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./xterm.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/xterm.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_notyf_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./notyf.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/notyf.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./fonts.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/fonts.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_5__);
// Imports






var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/noise.png */ "./src/assets/noise.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_xterm_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_notyf_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_5___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::after,
*::before {
    box-sizing: border-box;
}

html {
    height: 100%;
}

body {
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 60px 55px;
    background: #35210d;
}

.grain-filter {
    position: absolute;
    inset: -200%;

    pointer-events: none;

    opacity: 30%;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    animation: shift 0.7s linear infinite both;
}

.box-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 103;

    pointer-events: none;

    box-shadow: inset 0px 0px 200px -2px rgba(0, 0, 0, 1);
}

@keyframes shift {
    0% {
        transform: translateX(10%) translateY(10%);
    }
    100% {
        transform: translateX(-10%) translateY(-10%);
    }
}

.scanlines {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.scanlines:before,
.scanlines:after {
    display: block;
    pointer-events: none;
    content: '';
    position: absolute;
}

.scanlines:before {
    width: 100%;
    height: 2px;
    z-index: 101;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(255, 255, 255, 0.2) 10%,
        rgba(0, 0, 0, 0.1) 100%
    );
    opacity: 0.75;
    animation: scanline 10s linear infinite;
}

.scanlines:after {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 102;
    background: linear-gradient(
        to bottom,
        transparent 50%,
        rgba(0, 0, 0, 0.3) 51%
    );
    background-size: 100% 4px;
    animation: scanlines 1s steps(60) infinite;
}

@keyframes scanline {
    0% {
        transform: translate3d(0, 200000%, 0);
    }
}
@keyframes scanlines {
    0% {
        background-position: 0 50%;
    }
}

@keyframes scan {
    0% {
        background-position: 0 100%;
    }
    100% {
        background-position: 0 -100%;
    }
}
`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAIA;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,WAAW;IACX,SAAS;IACT,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;;IAEZ,oBAAoB;;IAEpB,YAAY;IACZ,mDAAsC;IACtC,0CAA0C;AAC9C;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,YAAY;;IAEZ,oBAAoB;;IAEpB,qDAAqD;AACzD;;AAEA;IACI;QACI,0CAA0C;IAC9C;IACA;QACI,4CAA4C;IAChD;AACJ;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oBAAoB;AACxB;;AAEA;;IAEI,cAAc;IACd,oBAAoB;IACpB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,YAAY;IACZ;;;;;KAKC;IACD,aAAa;IACb,uCAAuC;AAC3C;;AAEA;IACI,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,YAAY;IACZ;;;;KAIC;IACD,yBAAyB;IACzB,0CAA0C;AAC9C;;AAEA;IACI;QACI,qCAAqC;IACzC;AACJ;AACA;IACI;QACI,0BAA0B;IAC9B;AACJ;;AAEA;IACI;QACI,2BAA2B;IAC/B;IACA;QACI,4BAA4B;IAChC;AACJ","sourcesContent":["@import url('xterm.css');\n@import url('notyf.css');\n@import url('fonts.css');\n\n*,\n*::after,\n*::before {\n    box-sizing: border-box;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    position: relative;\n    overflow: hidden;\n    min-height: 100vh;\n    width: 100%;\n    margin: 0;\n    padding: 60px 55px;\n    background: #35210d;\n}\n\n.grain-filter {\n    position: absolute;\n    inset: -200%;\n\n    pointer-events: none;\n\n    opacity: 30%;\n    background: url('../assets/noise.png');\n    animation: shift 0.7s linear infinite both;\n}\n\n.box-shadow {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 103;\n\n    pointer-events: none;\n\n    box-shadow: inset 0px 0px 200px -2px rgba(0, 0, 0, 1);\n}\n\n@keyframes shift {\n    0% {\n        transform: translateX(10%) translateY(10%);\n    }\n    100% {\n        transform: translateX(-10%) translateY(-10%);\n    }\n}\n\n.scanlines {\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n}\n\n.scanlines:before,\n.scanlines:after {\n    display: block;\n    pointer-events: none;\n    content: '';\n    position: absolute;\n}\n\n.scanlines:before {\n    width: 100%;\n    height: 2px;\n    z-index: 101;\n    background: linear-gradient(\n        0deg,\n        rgba(0, 0, 0, 0) 0%,\n        rgba(255, 255, 255, 0.2) 10%,\n        rgba(0, 0, 0, 0.1) 100%\n    );\n    opacity: 0.75;\n    animation: scanline 10s linear infinite;\n}\n\n.scanlines:after {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 102;\n    background: linear-gradient(\n        to bottom,\n        transparent 50%,\n        rgba(0, 0, 0, 0.3) 51%\n    );\n    background-size: 100% 4px;\n    animation: scanlines 1s steps(60) infinite;\n}\n\n@keyframes scanline {\n    0% {\n        transform: translate3d(0, 200000%, 0);\n    }\n}\n@keyframes scanlines {\n    0% {\n        background-position: 0 50%;\n    }\n}\n\n@keyframes scan {\n    0% {\n        background-position: 0 100%;\n    }\n    100% {\n        background-position: 0 -100%;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/notyf.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/notyf.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.notyf {
    font-family: 'IBM', monospace;
    font-size: 22px;
    z-index: 100;
    filter: blur(1px);
}

.notyf .notyf-info {
    background-color: #cec9b5;
    color: black;
}

.notyf__wrapper {
    padding-right: 0 !important;
}

.notyf .notyf__message button {
    font-size: inherit;
    background: #ffaa2a;
    color: black;
    cursor: pointer;
    margin: 0;
    padding: 0 5px;
    border: none;
    outline: none;
}
`, "",{"version":3,"sources":["webpack://./src/styles/notyf.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;IAC7B,eAAe;IACf,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,SAAS;IACT,cAAc;IACd,YAAY;IACZ,aAAa;AACjB","sourcesContent":[".notyf {\n    font-family: 'IBM', monospace;\n    font-size: 22px;\n    z-index: 100;\n    filter: blur(1px);\n}\n\n.notyf .notyf-info {\n    background-color: #cec9b5;\n    color: black;\n}\n\n.notyf__wrapper {\n    padding-right: 0 !important;\n}\n\n.notyf .notyf__message button {\n    font-size: inherit;\n    background: #ffaa2a;\n    color: black;\n    cursor: pointer;\n    margin: 0;\n    padding: 0 5px;\n    border: none;\n    outline: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/xterm.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/xterm.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#xterm-wrapper {
    height: calc(100vh - 120px);
}

.xterm-viewport {
    overflow-y: hidden !important;
}

.xterm-rows {
    filter: blur(1px);
}
`, "",{"version":3,"sources":["webpack://./src/styles/xterm.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;AAC/B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":["#xterm-wrapper {\n    height: calc(100vh - 120px);\n}\n\n.xterm-viewport {\n    overflow-y: hidden !important;\n}\n\n.xterm-rows {\n    filter: blur(1px);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/notyf/notyf.es.js":
/*!****************************************!*\
  !*** ./node_modules/notyf/notyf.es.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_OPTIONS: () => (/* binding */ DEFAULT_OPTIONS),
/* harmony export */   Notyf: () => (/* binding */ Notyf),
/* harmony export */   NotyfArray: () => (/* binding */ NotyfArray),
/* harmony export */   NotyfArrayEvent: () => (/* binding */ NotyfArrayEvent),
/* harmony export */   NotyfEvent: () => (/* binding */ NotyfEvent),
/* harmony export */   NotyfNotification: () => (/* binding */ NotyfNotification),
/* harmony export */   NotyfView: () => (/* binding */ NotyfView)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var NotyfNotification = /** @class */ (function () {
    function NotyfNotification(options) {
        this.options = options;
        this.listeners = {};
    }
    NotyfNotification.prototype.on = function (eventType, cb) {
        var callbacks = this.listeners[eventType] || [];
        this.listeners[eventType] = callbacks.concat([cb]);
    };
    NotyfNotification.prototype.triggerEvent = function (eventType, event) {
        var _this = this;
        var callbacks = this.listeners[eventType] || [];
        callbacks.forEach(function (cb) { return cb({ target: _this, event: event }); });
    };
    return NotyfNotification;
}());
var NotyfArrayEvent;
(function (NotyfArrayEvent) {
    NotyfArrayEvent[NotyfArrayEvent["Add"] = 0] = "Add";
    NotyfArrayEvent[NotyfArrayEvent["Remove"] = 1] = "Remove";
})(NotyfArrayEvent || (NotyfArrayEvent = {}));
var NotyfArray = /** @class */ (function () {
    function NotyfArray() {
        this.notifications = [];
    }
    NotyfArray.prototype.push = function (elem) {
        this.notifications.push(elem);
        this.updateFn(elem, NotyfArrayEvent.Add, this.notifications);
    };
    NotyfArray.prototype.splice = function (index, num) {
        var elem = this.notifications.splice(index, num)[0];
        this.updateFn(elem, NotyfArrayEvent.Remove, this.notifications);
        return elem;
    };
    NotyfArray.prototype.indexOf = function (elem) {
        return this.notifications.indexOf(elem);
    };
    NotyfArray.prototype.onUpdate = function (fn) {
        this.updateFn = fn;
    };
    return NotyfArray;
}());

var NotyfEvent;
(function (NotyfEvent) {
    NotyfEvent["Dismiss"] = "dismiss";
    NotyfEvent["Click"] = "click";
})(NotyfEvent || (NotyfEvent = {}));
var DEFAULT_OPTIONS = {
    types: [
        {
            type: 'success',
            className: 'notyf__toast--success',
            backgroundColor: '#3dc763',
            icon: {
                className: 'notyf__icon--success',
                tagName: 'i',
            },
        },
        {
            type: 'error',
            className: 'notyf__toast--error',
            backgroundColor: '#ed3d3d',
            icon: {
                className: 'notyf__icon--error',
                tagName: 'i',
            },
        },
    ],
    duration: 2000,
    ripple: true,
    position: {
        x: 'right',
        y: 'bottom',
    },
    dismissible: false,
};

var NotyfView = /** @class */ (function () {
    function NotyfView() {
        this.notifications = [];
        this.events = {};
        this.X_POSITION_FLEX_MAP = {
            left: 'flex-start',
            center: 'center',
            right: 'flex-end',
        };
        this.Y_POSITION_FLEX_MAP = {
            top: 'flex-start',
            center: 'center',
            bottom: 'flex-end',
        };
        // Creates the main notifications container
        var docFrag = document.createDocumentFragment();
        var notyfContainer = this._createHTMLElement({ tagName: 'div', className: 'notyf' });
        docFrag.appendChild(notyfContainer);
        document.body.appendChild(docFrag);
        this.container = notyfContainer;
        // Identifies the main animation end event
        this.animationEndEventName = this._getAnimationEndEventName();
        this._createA11yContainer();
    }
    NotyfView.prototype.on = function (event, cb) {
        var _a;
        this.events = __assign(__assign({}, this.events), (_a = {}, _a[event] = cb, _a));
    };
    NotyfView.prototype.update = function (notification, type) {
        if (type === NotyfArrayEvent.Add) {
            this.addNotification(notification);
        }
        else if (type === NotyfArrayEvent.Remove) {
            this.removeNotification(notification);
        }
    };
    NotyfView.prototype.removeNotification = function (notification) {
        var _this = this;
        var renderedNotification = this._popRenderedNotification(notification);
        var node;
        if (!renderedNotification) {
            return;
        }
        node = renderedNotification.node;
        node.classList.add('notyf__toast--disappear');
        var handleEvent;
        node.addEventListener(this.animationEndEventName, (handleEvent = function (event) {
            if (event.target === node) {
                node.removeEventListener(_this.animationEndEventName, handleEvent);
                _this.container.removeChild(node);
            }
        }));
    };
    NotyfView.prototype.addNotification = function (notification) {
        var node = this._renderNotification(notification);
        this.notifications.push({ notification: notification, node: node });
        // For a11y purposes, we still want to announce that there's a notification in the screen
        // even if it comes with no message.
        this._announce(notification.options.message || 'Notification');
    };
    NotyfView.prototype._renderNotification = function (notification) {
        var _a;
        var card = this._buildNotificationCard(notification);
        var className = notification.options.className;
        if (className) {
            (_a = card.classList).add.apply(_a, className.split(' '));
        }
        this.container.appendChild(card);
        return card;
    };
    NotyfView.prototype._popRenderedNotification = function (notification) {
        var idx = -1;
        for (var i = 0; i < this.notifications.length && idx < 0; i++) {
            if (this.notifications[i].notification === notification) {
                idx = i;
            }
        }
        if (idx !== -1) {
            return this.notifications.splice(idx, 1)[0];
        }
        return;
    };
    NotyfView.prototype.getXPosition = function (options) {
        var _a;
        return ((_a = options === null || options === void 0 ? void 0 : options.position) === null || _a === void 0 ? void 0 : _a.x) || 'right';
    };
    NotyfView.prototype.getYPosition = function (options) {
        var _a;
        return ((_a = options === null || options === void 0 ? void 0 : options.position) === null || _a === void 0 ? void 0 : _a.y) || 'bottom';
    };
    NotyfView.prototype.adjustContainerAlignment = function (options) {
        var align = this.X_POSITION_FLEX_MAP[this.getXPosition(options)];
        var justify = this.Y_POSITION_FLEX_MAP[this.getYPosition(options)];
        var style = this.container.style;
        style.setProperty('justify-content', justify);
        style.setProperty('align-items', align);
    };
    NotyfView.prototype._buildNotificationCard = function (notification) {
        var _this = this;
        var options = notification.options;
        var iconOpts = options.icon;
        // Adjust container according to position (e.g. top-left, bottom-center, etc)
        this.adjustContainerAlignment(options);
        // Create elements
        var notificationElem = this._createHTMLElement({ tagName: 'div', className: 'notyf__toast' });
        var ripple = this._createHTMLElement({ tagName: 'div', className: 'notyf__ripple' });
        var wrapper = this._createHTMLElement({ tagName: 'div', className: 'notyf__wrapper' });
        var message = this._createHTMLElement({ tagName: 'div', className: 'notyf__message' });
        message.innerHTML = options.message || '';
        var mainColor = options.background || options.backgroundColor;
        // Build the icon and append it to the card
        if (iconOpts) {
            var iconContainer = this._createHTMLElement({ tagName: 'div', className: 'notyf__icon' });
            if (typeof iconOpts === 'string' || iconOpts instanceof String)
                iconContainer.innerHTML = new String(iconOpts).valueOf();
            if (typeof iconOpts === 'object') {
                var _a = iconOpts.tagName, tagName = _a === void 0 ? 'i' : _a, className_1 = iconOpts.className, text = iconOpts.text, _b = iconOpts.color, color = _b === void 0 ? mainColor : _b;
                var iconElement = this._createHTMLElement({ tagName: tagName, className: className_1, text: text });
                if (color)
                    iconElement.style.color = color;
                iconContainer.appendChild(iconElement);
            }
            wrapper.appendChild(iconContainer);
        }
        wrapper.appendChild(message);
        notificationElem.appendChild(wrapper);
        // Add ripple if applicable, else just paint the full toast
        if (mainColor) {
            if (options.ripple) {
                ripple.style.background = mainColor;
                notificationElem.appendChild(ripple);
            }
            else {
                notificationElem.style.background = mainColor;
            }
        }
        // Add dismiss button
        if (options.dismissible) {
            var dismissWrapper = this._createHTMLElement({ tagName: 'div', className: 'notyf__dismiss' });
            var dismissButton = this._createHTMLElement({
                tagName: 'button',
                className: 'notyf__dismiss-btn',
            });
            dismissWrapper.appendChild(dismissButton);
            wrapper.appendChild(dismissWrapper);
            notificationElem.classList.add("notyf__toast--dismissible");
            dismissButton.addEventListener('click', function (event) {
                var _a, _b;
                (_b = (_a = _this.events)[NotyfEvent.Dismiss]) === null || _b === void 0 ? void 0 : _b.call(_a, { target: notification, event: event });
                event.stopPropagation();
            });
        }
        notificationElem.addEventListener('click', function (event) { var _a, _b; return (_b = (_a = _this.events)[NotyfEvent.Click]) === null || _b === void 0 ? void 0 : _b.call(_a, { target: notification, event: event }); });
        // Adjust margins depending on whether its an upper or lower notification
        var className = this.getYPosition(options) === 'top' ? 'upper' : 'lower';
        notificationElem.classList.add("notyf__toast--" + className);
        return notificationElem;
    };
    NotyfView.prototype._createHTMLElement = function (_a) {
        var tagName = _a.tagName, className = _a.className, text = _a.text;
        var elem = document.createElement(tagName);
        if (className) {
            elem.className = className;
        }
        elem.textContent = text || null;
        return elem;
    };
    /**
     * Creates an invisible container which will announce the notyfs to
     * screen readers
     */
    NotyfView.prototype._createA11yContainer = function () {
        var a11yContainer = this._createHTMLElement({ tagName: 'div', className: 'notyf-announcer' });
        a11yContainer.setAttribute('aria-atomic', 'true');
        a11yContainer.setAttribute('aria-live', 'polite');
        // Set the a11y container to be visible hidden. Can't use display: none as
        // screen readers won't read it.
        a11yContainer.style.border = '0';
        a11yContainer.style.clip = 'rect(0 0 0 0)';
        a11yContainer.style.height = '1px';
        a11yContainer.style.margin = '-1px';
        a11yContainer.style.overflow = 'hidden';
        a11yContainer.style.padding = '0';
        a11yContainer.style.position = 'absolute';
        a11yContainer.style.width = '1px';
        a11yContainer.style.outline = '0';
        document.body.appendChild(a11yContainer);
        this.a11yContainer = a11yContainer;
    };
    /**
     * Announces a message to screenreaders.
     */
    NotyfView.prototype._announce = function (message) {
        var _this = this;
        this.a11yContainer.textContent = '';
        // This 100ms timeout is necessary for some browser + screen-reader combinations:
        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
        //   second time without clearing and then using a non-zero delay.
        // (using JAWS 17 at time of this writing).
        // https://github.com/angular/material2/blob/master/src/cdk/a11y/live-announcer/live-announcer.ts
        setTimeout(function () {
            _this.a11yContainer.textContent = message;
        }, 100);
    };
    /**
     * Determine which animationend event is supported
     */
    NotyfView.prototype._getAnimationEndEventName = function () {
        var el = document.createElement('_fake');
        var transitions = {
            MozTransition: 'animationend',
            OTransition: 'oAnimationEnd',
            WebkitTransition: 'webkitAnimationEnd',
            transition: 'animationend',
        };
        var t;
        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
        // No supported animation end event. Using "animationend" as a fallback
        return 'animationend';
    };
    return NotyfView;
}());

/**
 * Main controller class. Defines the main Notyf API.
 */
var Notyf = /** @class */ (function () {
    function Notyf(opts) {
        var _this = this;
        this.dismiss = this._removeNotification;
        this.notifications = new NotyfArray();
        this.view = new NotyfView();
        var types = this.registerTypes(opts);
        this.options = __assign(__assign({}, DEFAULT_OPTIONS), opts);
        this.options.types = types;
        this.notifications.onUpdate(function (elem, type) { return _this.view.update(elem, type); });
        this.view.on(NotyfEvent.Dismiss, function (_a) {
            var target = _a.target, event = _a.event;
            _this._removeNotification(target);
            // tslint:disable-next-line: no-string-literal
            target['triggerEvent'](NotyfEvent.Dismiss, event);
        });
        // tslint:disable-next-line: no-string-literal
        this.view.on(NotyfEvent.Click, function (_a) {
            var target = _a.target, event = _a.event;
            return target['triggerEvent'](NotyfEvent.Click, event);
        });
    }
    Notyf.prototype.error = function (payload) {
        var options = this.normalizeOptions('error', payload);
        return this.open(options);
    };
    Notyf.prototype.success = function (payload) {
        var options = this.normalizeOptions('success', payload);
        return this.open(options);
    };
    Notyf.prototype.open = function (options) {
        var defaultOpts = this.options.types.find(function (_a) {
            var type = _a.type;
            return type === options.type;
        }) || {};
        var config = __assign(__assign({}, defaultOpts), options);
        this.assignProps(['ripple', 'position', 'dismissible'], config);
        var notification = new NotyfNotification(config);
        this._pushNotification(notification);
        return notification;
    };
    Notyf.prototype.dismissAll = function () {
        while (this.notifications.splice(0, 1))
            ;
    };
    /**
     * Assigns properties to a config object based on two rules:
     * 1. If the config object already sets that prop, leave it as so
     * 2. Otherwise, use the default prop from the global options
     *
     * It's intended to build the final config object to open a notification. e.g. if
     * 'dismissible' is not set, then use the value from the global config.
     *
     * @param props - properties to be assigned to the config object
     * @param config - object whose properties need to be set
     */
    Notyf.prototype.assignProps = function (props, config) {
        var _this = this;
        props.forEach(function (prop) {
            // intentional double equality to check for both null and undefined
            config[prop] = config[prop] == null ? _this.options[prop] : config[prop];
        });
    };
    Notyf.prototype._pushNotification = function (notification) {
        var _this = this;
        this.notifications.push(notification);
        var duration = notification.options.duration !== undefined ? notification.options.duration : this.options.duration;
        if (duration) {
            setTimeout(function () { return _this._removeNotification(notification); }, duration);
        }
    };
    Notyf.prototype._removeNotification = function (notification) {
        var index = this.notifications.indexOf(notification);
        if (index !== -1) {
            this.notifications.splice(index, 1);
        }
    };
    Notyf.prototype.normalizeOptions = function (type, payload) {
        var options = { type: type };
        if (typeof payload === 'string') {
            options.message = payload;
        }
        else if (typeof payload === 'object') {
            options = __assign(__assign({}, options), payload);
        }
        return options;
    };
    Notyf.prototype.registerTypes = function (opts) {
        var incomingTypes = ((opts && opts.types) || []).slice();
        var finalDefaultTypes = DEFAULT_OPTIONS.types.map(function (defaultType) {
            // find if there's a default type within the user input's types, if so, it means the user
            // wants to change some of the default settings
            var userTypeIdx = -1;
            incomingTypes.forEach(function (t, idx) {
                if (t.type === defaultType.type)
                    userTypeIdx = idx;
            });
            var userType = userTypeIdx !== -1 ? incomingTypes.splice(userTypeIdx, 1)[0] : {};
            return __assign(__assign({}, defaultType), userType);
        });
        return finalDefaultTypes.concat(incomingTypes);
    };
    return Notyf;
}());




/***/ }),

/***/ "./node_modules/notyf/notyf.min.css":
/*!******************************************!*\
  !*** ./node_modules/notyf/notyf.min.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_notyf_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./notyf.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/notyf/notyf.min.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_notyf_min_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_notyf_min_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_notyf_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_notyf_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/xterm-addon-fit/lib/xterm-addon-fit.js":
/*!*************************************************************!*\
  !*** ./node_modules/xterm-addon-fit/lib/xterm-addon-fit.js ***!
  \*************************************************************/
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(self,(()=>(()=>{"use strict";var e={};return(()=>{var t=e;Object.defineProperty(t,"__esModule",{value:!0}),t.FitAddon=void 0,t.FitAddon=class{activate(e){this._terminal=e}dispose(){}fit(){const e=this.proposeDimensions();if(!e||!this._terminal||isNaN(e.cols)||isNaN(e.rows))return;const t=this._terminal._core;this._terminal.rows===e.rows&&this._terminal.cols===e.cols||(t._renderService.clear(),this._terminal.resize(e.cols,e.rows))}proposeDimensions(){if(!this._terminal)return;if(!this._terminal.element||!this._terminal.element.parentElement)return;const e=this._terminal._core,t=e._renderService.dimensions;if(0===t.css.cell.width||0===t.css.cell.height)return;const r=0===this._terminal.options.scrollback?0:e.viewport.scrollBarWidth,i=window.getComputedStyle(this._terminal.element.parentElement),o=parseInt(i.getPropertyValue("height")),s=Math.max(0,parseInt(i.getPropertyValue("width"))),n=window.getComputedStyle(this._terminal.element),l=o-(parseInt(n.getPropertyValue("padding-top"))+parseInt(n.getPropertyValue("padding-bottom"))),a=s-(parseInt(n.getPropertyValue("padding-right"))+parseInt(n.getPropertyValue("padding-left")))-r;return{cols:Math.max(2,Math.floor(a/t.css.cell.width)),rows:Math.max(1,Math.floor(l/t.css.cell.height))}}}})(),e})()));
//# sourceMappingURL=xterm-addon-fit.js.map

/***/ }),

/***/ "./node_modules/xterm-addon-web-links/lib/xterm-addon-web-links.js":
/*!*************************************************************************!*\
  !*** ./node_modules/xterm-addon-web-links/lib/xterm-addon-web-links.js ***!
  \*************************************************************************/
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(self,(()=>(()=>{"use strict";var e={6:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LinkComputer=t.WebLinkProvider=void 0,t.WebLinkProvider=class{constructor(e,t,n,i={}){this._terminal=e,this._regex=t,this._handler=n,this._options=i}provideLinks(e,t){const i=n.computeLink(e,this._regex,this._terminal,this._handler);t(this._addCallbacks(i))}_addCallbacks(e){return e.map((e=>(e.leave=this._options.leave,e.hover=(t,n)=>{if(this._options.hover){const{range:i}=e;this._options.hover(t,n,i)}},e)))}};class n{static computeLink(e,t,i,r){const o=new RegExp(t.source,(t.flags||"")+"g"),[s,a]=n._getWindowedLineStrings(e-1,i),c=s.join("");let d;const l=[];for(;d=o.exec(c);){const e=d[0];try{const t=new URL(e),n=decodeURI(t.toString());if(e!==n&&e+"/"!==n)continue}catch(e){continue}const[t,o]=n._mapStrIdx(i,a,0,d.index),[s,c]=n._mapStrIdx(i,t,o,e.length);if(-1===t||-1===o||-1===s||-1===c)continue;const p={start:{x:o+1,y:t+1},end:{x:c,y:s+1}};l.push({range:p,text:e,activate:r})}return l}static _getWindowedLineStrings(e,t){let n,i=e,r=e,o=0,s="";const a=[];if(n=t.buffer.active.getLine(e)){const e=n.translateToString(!0);if(n.isWrapped&&" "!==e[0]){for(o=0;(n=t.buffer.active.getLine(--i))&&o<2048&&(s=n.translateToString(!0),o+=s.length,a.push(s),n.isWrapped&&-1===s.indexOf(" ")););a.reverse()}for(a.push(e),o=0;(n=t.buffer.active.getLine(++r))&&n.isWrapped&&o<2048&&(s=n.translateToString(!0),o+=s.length,a.push(s),-1===s.indexOf(" ")););}return[a,i]}static _mapStrIdx(e,t,n,i){const r=e.buffer.active,o=r.getNullCell();let s=n;for(;i;){const e=r.getLine(t);if(!e)return[-1,-1];for(let n=s;n<e.length;++n){e.getCell(n,o);const s=o.getChars();if(o.getWidth()&&(i-=s.length||1,n===e.length-1&&""===s)){const e=r.getLine(t+1);e&&e.isWrapped&&(e.getCell(0,o),2===o.getWidth()&&(i+=1))}if(i<0)return[t,n]}t++,s=0}return[t,s]}}t.LinkComputer=n}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}var i={};return(()=>{var e=i;Object.defineProperty(e,"__esModule",{value:!0}),e.WebLinksAddon=void 0;const t=n(6),r=/https?:[/]{2}[^\s"'!*(){}|\\\^<>`]*[^\s"':,.!?{}|\\\^~\[\]`()<>]/;function o(e,t){const n=window.open();if(n){try{n.opener=null}catch(e){}n.location.href=t}else console.warn("Opening link blocked as opener could not be cleared")}e.WebLinksAddon=class{constructor(e=o,t={}){this._handler=e,this._options=t}activate(e){this._terminal=e;const n=this._options,i=n.urlRegex||r;this._linkProvider=this._terminal.registerLinkProvider(new t.WebLinkProvider(this._terminal,i,this._handler,n))}dispose(){var e;null===(e=this._linkProvider)||void 0===e||e.dispose()}}})(),i})()));
//# sourceMappingURL=xterm-addon-web-links.js.map

/***/ }),

/***/ "./node_modules/xterm-link-provider/lib/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/xterm-link-provider/lib/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkProvider: () => (/* binding */ LinkProvider),
/* harmony export */   computeLink: () => (/* binding */ computeLink)
/* harmony export */ });
class LinkProvider {
    /**
     * Create a Link Provider for xterm.js
     * @param _terminal The terminal instance
     * @param _regex The regular expression to use for matching
     * @param _handler Callback for when link is clicked
     * @param _options Further hooks, eg. hover, leave and decorations
     * @param _matchIndex The index to use from regexp.exec result, default 1
     */
    constructor(_terminal, _regex, _handler, _options = {}, _matchIndex = 1) {
        this._terminal = _terminal;
        this._regex = _regex;
        this._handler = _handler;
        this._options = _options;
        this._matchIndex = _matchIndex;
    }
    provideLinks(y, callback) {
        const links = computeLink(y, this._regex, this._terminal, this._matchIndex).map((_link) => (Object.assign({ range: _link.range, text: _link.text, activate: this._handler }, this._options)));
        callback(links);
    }
}
/**
 * Find link range and text for the given line and regex
 * @param y The line number to process
 * @param regex The regular expression to use for matching
 * @param terminal The terminal instance
 * @param matchIndex The index to use from regexp.exec result, default 1
 */
const computeLink = (y, regex, terminal, matchIndex = 1) => {
    const rex = new RegExp(regex.source, ((regex.flags || '') + 'g')
        .split('')
        .filter((value, index, arr) => arr.indexOf(value) === index)
        .join(''));
    const [line, startLineIndex] = translateBufferLineToStringWithWrap(y - 1, terminal);
    let match;
    let stringIndex = -1;
    const result = [];
    while ((match = rex.exec(line)) !== null) {
        const text = match[matchIndex];
        if (!text) {
            // something matched but does not comply with the given matchIndex
            // since this is most likely a bug the regex itself we simply do nothing here
            console.log('match found without corresponding matchIndex');
            break;
        }
        // Get index, match.index is for the outer match which includes negated chars
        // therefore we cannot use match.index directly, instead we search the position
        // of the match group in text again
        // also correct regex and string search offsets for the next loop run
        stringIndex = line.indexOf(text, stringIndex + 1);
        rex.lastIndex = stringIndex + text.length;
        if (stringIndex < 0) {
            // invalid stringIndex (should not have happened)
            break;
        }
        const range = {
            start: stringIndexToBufferPosition(terminal, startLineIndex, stringIndex),
            end: stringIndexToBufferPosition(terminal, startLineIndex, stringIndex + text.length - 1, true)
        };
        result.push({ range, text });
    }
    return result;
};
const translateBufferLineToStringWithWrap = (lineIndex, terminal) => {
    let lineString = '';
    let lineWrapsToNext;
    let prevLinesToWrap;
    do {
        const line = terminal.buffer.active.getLine(lineIndex);
        if (!line) {
            break;
        }
        if (line.isWrapped) {
            lineIndex--;
        }
        prevLinesToWrap = line.isWrapped;
    } while (prevLinesToWrap);
    const startLineIndex = lineIndex;
    do {
        const nextLine = terminal.buffer.active.getLine(lineIndex + 1);
        lineWrapsToNext = nextLine ? nextLine.isWrapped : false;
        const line = terminal.buffer.active.getLine(lineIndex);
        if (!line) {
            break;
        }
        lineString += line.translateToString(true).substring(0, terminal.cols);
        lineIndex++;
    } while (lineWrapsToNext);
    return [lineString, startLineIndex];
};
const stringIndexToBufferPosition = (terminal, lineIndex, stringIndex, reportLastCell = false) => {
    const cell = terminal.buffer.active.getNullCell();
    while (stringIndex) {
        const line = terminal.buffer.active.getLine(lineIndex);
        if (!line) {
            return { x: 0, y: 0 };
        }
        const length = line.length;
        for (let i = 0; i < length;) {
            line.getCell(i, cell);
            stringIndex -= cell.getChars().length;
            if (stringIndex < 0) {
                return { x: i + (reportLastCell ? cell.getWidth() : 1), y: lineIndex + 1 };
            }
            i += cell.getWidth();
        }
        lineIndex++;
    }
    return { x: 1, y: lineIndex + 1 };
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/assets/fonts/IBM.woff":
/*!***********************************!*\
  !*** ./src/assets/fonts/IBM.woff ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8954d8dac4bf5506d4ac.woff";

/***/ }),

/***/ "./src/assets/noise.png":
/*!******************************!*\
  !*** ./src/assets/noise.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1c007019913c38fae526.png";

/***/ }),

/***/ "./src/commands/about.command-handler.js":
/*!***********************************************!*\
  !*** ./src/commands/about.command-handler.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutCommandHandler: () => (/* binding */ aboutCommandHandler)
/* harmony export */ });
/* harmony import */ var _utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/commands.utils */ "./src/utils/commands.utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var ABOUT_MESSAGE = "About Me\n\nExperienced Full Stack Developer with over 4 years of success in developing complex projects across diverse industries.\n\nWhat I Do:\n\nI specialize in architecting end-to-end solutions that:\n\n\u2022 Enhance efficiency\n\u2022 Streamline operations\n\u2022 Deliver impactful results\n\nTechnical Expertise:\n\n\u2022 Next.js, Nest.js, Node.js\n\u2022 TypeScript, JavaScript\n\u2022 C# and .NET\n\u2022 React for front-end development\n\nBeyond Coding:\n\nPassionate about mentoring, terminal customization, and DevOps practices. Skilled in agile methodologies, best practices, and delivering scalable, user-focused solutions.\n\nNeed Guidance?\n\nType or click \x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0m[help]\x1B[0m to see the list of available commands.";
var aboutCommandHandler = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(term) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__.emulateCommandWriting)(term, ABOUT_MESSAGE);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function aboutCommandHandler(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/commands/clear.command-handler.js":
/*!***********************************************!*\
  !*** ./src/commands/clear.command-handler.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearCommandHandler: () => (/* binding */ clearCommandHandler)
/* harmony export */ });
/* harmony import */ var _tooltips_clear_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tooltips/clear.tooltip */ "./src/tooltips/clear.tooltip.js");

var clearCommandHandler = function clearCommandHandler(term) {
  setTimeout(function () {
    return term.clear();
  }, 0);
  (0,_tooltips_clear_tooltip__WEBPACK_IMPORTED_MODULE_0__.showClearToast)();
};

/***/ }),

/***/ "./src/commands/commands.descriptions.js":
/*!***********************************************!*\
  !*** ./src/commands/commands.descriptions.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ABOUT_COMMAND_DESCRIPTION: () => (/* binding */ ABOUT_COMMAND_DESCRIPTION),
/* harmony export */   CLEAR_COMMAND_DESCRIPTION: () => (/* binding */ CLEAR_COMMAND_DESCRIPTION),
/* harmony export */   CONFIGS_COMMAND_DESCRIPTION: () => (/* binding */ CONFIGS_COMMAND_DESCRIPTION),
/* harmony export */   CONTACT_COMMAND_DESCRIPTION: () => (/* binding */ CONTACT_COMMAND_DESCRIPTION),
/* harmony export */   EDUCATION_COMMAND_DESCRIPTION: () => (/* binding */ EDUCATION_COMMAND_DESCRIPTION),
/* harmony export */   EXPERIENCE_COMMAND_DESCRIPTION: () => (/* binding */ EXPERIENCE_COMMAND_DESCRIPTION),
/* harmony export */   HELP_COMMAND_DESCRIPTION: () => (/* binding */ HELP_COMMAND_DESCRIPTION),
/* harmony export */   ILLIASAY_COMMAND_DESCRIPTION: () => (/* binding */ ILLIASAY_COMMAND_DESCRIPTION),
/* harmony export */   PROJECTS_COMMAND_DESCRIPTION: () => (/* binding */ PROJECTS_COMMAND_DESCRIPTION),
/* harmony export */   SKILLS_COMMAND_DESCRIPTION: () => (/* binding */ SKILLS_COMMAND_DESCRIPTION),
/* harmony export */   WELCOME_COMMAND_DESCRIPTION: () => (/* binding */ WELCOME_COMMAND_DESCRIPTION)
/* harmony export */ });
/* harmony import */ var _commands_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commands.names */ "./src/commands/commands.names.js");

var ABOUT_COMMAND_DESCRIPTION = 'Displays information about me';
var CLEAR_COMMAND_DESCRIPTION = 'Clears terminal';
var CONTACT_COMMAND_DESCRIPTION = 'Displays contact information';
var EDUCATION_COMMAND_DESCRIPTION = 'Displays education background';
var EXPERIENCE_COMMAND_DESCRIPTION = 'Displays my work experience';
var HELP_COMMAND_DESCRIPTION = 'Displays help message';
var ILLIASAY_COMMAND_DESCRIPTION = 'Displays an ASCII portrait of me with a speech bubble.';
var PROJECTS_COMMAND_DESCRIPTION = 'Displays my featured projects';
var SKILLS_COMMAND_DESCRIPTION = 'Displays my technical skills';
var WELCOME_COMMAND_DESCRIPTION = 'Displays welcome message';
var CONFIGS_COMMAND_DESCRIPTION = 'Displays my configuration files' + ' source';

/***/ }),

/***/ "./src/commands/commands.dispatcher.js":
/*!*********************************************!*\
  !*** ./src/commands/commands.dispatcher.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dispatchCommand: () => (/* binding */ dispatchCommand)
/* harmony export */ });
/* harmony import */ var _utils_cursor_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cursor.utils */ "./src/utils/cursor.utils.js");
/* harmony import */ var _commands_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands.handlers */ "./src/commands/commands.handlers.js");
/* harmony import */ var _events_event_dispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/event.dispatcher */ "./src/events/event.dispatcher.js");
/* harmony import */ var _events_events_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/events.list */ "./src/events/events.list.js");
/* harmony import */ var _events_events_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/events.names */ "./src/events/events.names.js");
/* harmony import */ var _utils_commands_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/commands.utils */ "./src/utils/commands.utils.js");
/* harmony import */ var _state_prompt_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/prompt.state */ "./src/state/prompt.state.js");
/* harmony import */ var _commands_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./commands.names */ "./src/commands/commands.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








var dispatchCommand = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(term, prompt) {
    var _prompt$trim$split, _prompt$trim$split2, command, parameters;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _prompt$trim$split = prompt.trim().split(' '), _prompt$trim$split2 = _toArray(_prompt$trim$split), command = _prompt$trim$split2[0], parameters = _prompt$trim$split2.slice(1);
          if (command) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return");
        case 3:
          term.writeln('');
          term.writeln('');
          if (!(command in _commands_handlers__WEBPACK_IMPORTED_MODULE_1__.COMMAND_HANDLERS)) {
            _context.next = 11;
            break;
          }
          (0,_events_event_dispatcher__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(_events_events_list__WEBPACK_IMPORTED_MODULE_3__.EVENTS[_events_events_names__WEBPACK_IMPORTED_MODULE_4__.CLOSE_ALL_TOASTS_EVENT_NAME]);
          _context.next = 9;
          return _commands_handlers__WEBPACK_IMPORTED_MODULE_1__.COMMAND_HANDLERS[command](term, parameters.join(' '));
        case 9:
          _context.next = 13;
          break;
        case 11:
          _context.next = 13;
          return (0,_utils_commands_utils__WEBPACK_IMPORTED_MODULE_5__.emulateCommandWriting)(term, "".concat(command, ": command not found"));
        case 13:
          (0,_state_prompt_state__WEBPACK_IMPORTED_MODULE_6__.clearPrompt)();
          if (!(command === _commands_names__WEBPACK_IMPORTED_MODULE_7__.CLEAR_COMMAND_NAME)) {
            _context.next = 18;
            break;
          }
          _context.next = 17;
          return (0,_utils_cursor_utils__WEBPACK_IMPORTED_MODULE_0__.writeCursorWithWritingEmulation)(term);
        case 17:
          return _context.abrupt("return");
        case 18:
          term.writeln('');
          _context.next = 21;
          return (0,_utils_cursor_utils__WEBPACK_IMPORTED_MODULE_0__.writeCursorWithWritingEmulation)(term);
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function dispatchCommand(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/commands/commands.handlers.js":
/*!*******************************************!*\
  !*** ./src/commands/commands.handlers.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMMAND_HANDLERS: () => (/* binding */ COMMAND_HANDLERS)
/* harmony export */ });
/* harmony import */ var _commands_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commands.names */ "./src/commands/commands.names.js");
/* harmony import */ var _projects_command_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.command-handler */ "./src/commands/projects.command-handler.js");
/* harmony import */ var _education_command_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./education.command-handler */ "./src/commands/education.command-handler.js");
/* harmony import */ var _experience_command_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience.command-handler */ "./src/commands/experience.command-handler.js");
/* harmony import */ var _skills_command_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills.command-handler */ "./src/commands/skills.command-handler.js");
/* harmony import */ var _about_command_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.command-handler */ "./src/commands/about.command-handler.js");
/* harmony import */ var _contact_command_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.command-handler */ "./src/commands/contact.command-handler.js");
/* harmony import */ var _illiasay_command_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./illiasay.command-handler */ "./src/commands/illiasay.command-handler.js");
/* harmony import */ var _welcome_command_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./welcome.command-handler */ "./src/commands/welcome.command-handler.js");
/* harmony import */ var _clear_command_handler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clear.command-handler */ "./src/commands/clear.command-handler.js");
/* harmony import */ var _help_command_handler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./help.command-handler */ "./src/commands/help.command-handler.js");
/* harmony import */ var _configs_command__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./configs.command */ "./src/commands/configs.command.js");
var _COMMAND_HANDLERS;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }












var COMMAND_HANDLERS = (_COMMAND_HANDLERS = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_COMMAND_HANDLERS, _commands_names__WEBPACK_IMPORTED_MODULE_0__.HELP_COMMAND_NAME, _help_command_handler__WEBPACK_IMPORTED_MODULE_10__.helpCommandHandler), _commands_names__WEBPACK_IMPORTED_MODULE_0__.CLEAR_COMMAND_NAME, _clear_command_handler__WEBPACK_IMPORTED_MODULE_9__.clearCommandHandler), _commands_names__WEBPACK_IMPORTED_MODULE_0__.WELCOME_COMMAND_NAME, _welcome_command_handler__WEBPACK_IMPORTED_MODULE_8__.welcomeCommandHandler), _commands_names__WEBPACK_IMPORTED_MODULE_0__.ILLIASAY_COMMAND_NAME, _illiasay_command_handler__WEBPACK_IMPORTED_MODULE_7__.illiasayCommandHandler), _commands_names__WEBPACK_IMPORTED_MODULE_0__.CONTACT_COMMAND_NAME, _contact_command_handler__WEBPACK_IMPORTED_MODULE_6__.contactCommandHandler), _commands_names__WEBPACK_IMPORTED_MODULE_0__.ABOUT_COMMAND_NAME, _about_command_handler__WEBPACK_IMPORTED_MODULE_5__.aboutCommandHandler), _commands_names__WEBPACK_IMPORTED_MODULE_0__.SKILLS_COMMAND_NAME, _skills_command_handler__WEBPACK_IMPORTED_MODULE_4__.skillsCommandHandler), _commands_names__WEBPACK_IMPORTED_MODULE_0__.EXPERIENCE_COMMAND_NAME, _experience_command_handler__WEBPACK_IMPORTED_MODULE_3__.experienceCommandHandler), _commands_names__WEBPACK_IMPORTED_MODULE_0__.EDUCATION_COMMAND_NAME, _education_command_handler__WEBPACK_IMPORTED_MODULE_2__.educationCommandHandler), _commands_names__WEBPACK_IMPORTED_MODULE_0__.PROJECTS_COMMAND_NAME, _projects_command_handler__WEBPACK_IMPORTED_MODULE_1__.projectsCommandHandler), _defineProperty(_COMMAND_HANDLERS, _commands_names__WEBPACK_IMPORTED_MODULE_0__.CONFIGS_COMMAND_NAME, _configs_command__WEBPACK_IMPORTED_MODULE_11__["default"]));

/***/ }),

/***/ "./src/commands/commands.names.js":
/*!****************************************!*\
  !*** ./src/commands/commands.names.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ABOUT_COMMAND_NAME: () => (/* binding */ ABOUT_COMMAND_NAME),
/* harmony export */   CLEAR_COMMAND_NAME: () => (/* binding */ CLEAR_COMMAND_NAME),
/* harmony export */   CONFIGS_COMMAND_NAME: () => (/* binding */ CONFIGS_COMMAND_NAME),
/* harmony export */   CONTACT_COMMAND_NAME: () => (/* binding */ CONTACT_COMMAND_NAME),
/* harmony export */   EDUCATION_COMMAND_NAME: () => (/* binding */ EDUCATION_COMMAND_NAME),
/* harmony export */   EXPERIENCE_COMMAND_NAME: () => (/* binding */ EXPERIENCE_COMMAND_NAME),
/* harmony export */   HELP_COMMAND_NAME: () => (/* binding */ HELP_COMMAND_NAME),
/* harmony export */   ILLIASAY_COMMAND_NAME: () => (/* binding */ ILLIASAY_COMMAND_NAME),
/* harmony export */   PROJECTS_COMMAND_NAME: () => (/* binding */ PROJECTS_COMMAND_NAME),
/* harmony export */   SKILLS_COMMAND_NAME: () => (/* binding */ SKILLS_COMMAND_NAME),
/* harmony export */   WELCOME_COMMAND_NAME: () => (/* binding */ WELCOME_COMMAND_NAME)
/* harmony export */ });
var ABOUT_COMMAND_NAME = 'about';
var CLEAR_COMMAND_NAME = 'clear';
var CONTACT_COMMAND_NAME = 'contact';
var EDUCATION_COMMAND_NAME = 'education';
var EXPERIENCE_COMMAND_NAME = 'experience';
var HELP_COMMAND_NAME = 'help';
var ILLIASAY_COMMAND_NAME = 'illiasay';
var PROJECTS_COMMAND_NAME = 'projects';
var SKILLS_COMMAND_NAME = 'skills';
var WELCOME_COMMAND_NAME = 'welcome';
var CONFIGS_COMMAND_NAME = 'configs';

/***/ }),

/***/ "./src/commands/configs.command.js":
/*!*****************************************!*\
  !*** ./src/commands/configs.command.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   configsCommandHandler: () => (/* binding */ configsCommandHandler),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/commands.utils */ "./src/utils/commands.utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var CONFIGS_REPO_API_URL = "https://api.github.com/repos/IlliaHalchun/configs/contents";
var CONFIGS_REPO_URL = "https://github.com/IlliaHalchun/configs";
var TECHNOLOGY_DESCRIPTIONS = {
  "i3": "tiling window manager designed for X11, inspired by wmii and written in C",
  "ideavim": "vim emulation plugin for IDEs based on the IntelliJ platform",
  "kitty": "fast, feature-rich, GPU-based terminal emulator",
  "nvim": "extensible Vim-based text editor",
  "ranger": "console file manager with VI key bindings"
};
var configsCommandHandler = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(term) {
    var response, data, directories, configsList, message;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch(CONFIGS_REPO_API_URL);
        case 3:
          response = _context.sent;
          if (response.ok) {
            _context.next = 6;
            break;
          }
          throw new Error("Failed to fetch repository contents");
        case 6:
          _context.next = 8;
          return response.json();
        case 8:
          data = _context.sent;
          directories = data.filter(function (item) {
            return item.type === "dir";
          });
          configsList = directories.map(function (folder) {
            var techDescription = TECHNOLOGY_DESCRIPTIONS[folder.name] || "No description available.";
            return "\u2022 ".concat(folder.name, " - ").concat(techDescription);
          }).join("\n\r");
          message = "You can find configs in the repository here:  \x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0m".concat(CONFIGS_REPO_URL, "\x1B[0m\n        \nThe repository includes configurations for the following technologies:\n\n").concat(configsList, "\n        \nNeed Guidance?\n\nType or click \x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0m[help]\x1B[0m to see the list of available commands.");
          _context.next = 14;
          return (0,_utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__.emulateCommandWriting)(term, message);
        case 14:
          _context.next = 20;
          break;
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          _context.next = 20;
          return (0,_utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__.emulateCommandWriting)(term, "Error: ".concat(_context.t0.message));
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 16]]);
  }));
  return function configsCommandHandler(_x) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configsCommandHandler);

/***/ }),

/***/ "./src/commands/contact.command-handler.js":
/*!*************************************************!*\
  !*** ./src/commands/contact.command-handler.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactCommandHandler: () => (/* binding */ contactCommandHandler)
/* harmony export */ });
/* harmony import */ var _utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/commands.utils */ "./src/utils/commands.utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var CONTACT_MESSAGE = "Contact Me\n\nThank you for visiting my interactive portfolio!\n\nFeel free to reach out to me via the following methods:\n\nEmail: gsv19782000@gmail.com\n\nPhone: +48574949097\n\nGitHub: \x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0mhttps://github.com/illiahalchun\x1B[0m\n\nLinkedIn: \x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0mhttps://www.linkedin.com/in/illia-halchun-7aa620254\x1B[0m\n\nLooking forward to connecting with you!\n\nNeed Guidance?\n\nType or click \x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0m[help]\x1B[0m to see the list of available commands.";
var contactCommandHandler = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(term) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__.emulateCommandWriting)(term, CONTACT_MESSAGE);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function contactCommandHandler(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/commands/education.command-handler.js":
/*!***************************************************!*\
  !*** ./src/commands/education.command-handler.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   educationCommandHandler: () => (/* binding */ educationCommandHandler)
/* harmony export */ });
/* harmony import */ var _utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/commands.utils */ "./src/utils/commands.utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var EDUCATION_MESSAGE = "Education\n\nInstitution: Open Source Society University\n\nDegree: Computer Science\n\nYears: 2018 - 2022\n\nThis program followed a structured curriculum inspired by top universities, covering core computer science principles, software development, and problem-solving skills.\n\nNeed Guidance?\n\nType or click \x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0m[help]\x1B[0m to see the list of available commands.";
var educationCommandHandler = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(term) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__.emulateCommandWriting)(term, EDUCATION_MESSAGE);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function educationCommandHandler(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/commands/experience.command-handler.js":
/*!****************************************************!*\
  !*** ./src/commands/experience.command-handler.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   experienceCommandHandler: () => (/* binding */ experienceCommandHandler)
/* harmony export */ });
/* harmony import */ var _utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/commands.utils */ "./src/utils/commands.utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var EXPERIENCE_MESSAGE = "Professional Experience\n\n\u2022 RavenDB | Internal System | CRM Systems\n\nPosition: Full-Stack Engineer | Mar 2023 - Present\n\nAs a Full Stack Developer, I contributed to designing and implementing an internal sales system with CRM-like features, streamlining operations and enhancing user experiences.\n\nKey Achievements:\n\n\u2714  Implemented CRM features like customer tracking and lead management, improving efficiency by 7%.\n\u2714  Optimized database queries, reducing sales report processing time by 15%.\n\u2714  Contributed to agile development cycles, delivering high-quality updates on strict timelines.\n\n\u2022 MafiaHub | Social Web\n\nPosition: CEO & Sole Developer | May 2022 - Present\n\nDeveloping a web application that digitizes the Mafia tabletop game, providing game history tracking, turn recording, and detailed player statistics.\n\nKey Achievements:\n\n\u2714  Built a CI/CD pipeline for automated builds, testing, and deployment.\n\u2714  Implemented core game mechanics, including game setup, turn tracking, and data storage.\n\u2714  Created containerized development environments for seamless builds.\n\n\u2022 Sigma Software Group | Food Delivery App | Food & Beverage\n\nPosition: Full-Stack Engineer | Feb 2021 - Feb 2023\n\nDeveloped a comprehensive food delivery application to enhance interactions between users, restaurants, and delivery partners.\n\nKey Achievements:\n\n\u2714  Designed a modular backend with Nest.js for scalable feature development.\n\u2714  Implemented server-side rendering (SSR) with Next.js for improved SEO and performance.\n\u2714  Built real-time order status updates and delivery tracking for better user engagement.\n\n\u2022 Sigma Software Group | Internship | E-commerce\n\nPosition: Intern | Jun 2020 - Feb 2021\n\nGained hands-on experience in e-commerce solutions and full-stack development practices.\n\nNeed Guidance?\n\nType or click \x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0m[help]\x1B[0m to explore available commands.";
var experienceCommandHandler = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(term) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__.emulateCommandWriting)(term, EXPERIENCE_MESSAGE);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function experienceCommandHandler(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/commands/help.command-handler.js":
/*!**********************************************!*\
  !*** ./src/commands/help.command-handler.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   helpCommandHandler: () => (/* binding */ helpCommandHandler)
/* harmony export */ });
/* harmony import */ var _commands_descriptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commands.descriptions */ "./src/commands/commands.descriptions.js");
/* harmony import */ var _utils_commands_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/commands.utils */ "./src/utils/commands.utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var HELP_MESSAGE = "Help Menu\n\nHere\u2019s a list of available commands to navigate this terminal portfolio.\n\n\u250C\u2500 General Commands \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\n\x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0m[welcome]\x1B[0m    - ".concat(_commands_descriptions__WEBPACK_IMPORTED_MODULE_0__.WELCOME_COMMAND_DESCRIPTION, "\n\nclear        - ").concat(_commands_descriptions__WEBPACK_IMPORTED_MODULE_0__.CLEAR_COMMAND_DESCRIPTION, "\n\n\x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0m[help]\x1B[0m       - ").concat(_commands_descriptions__WEBPACK_IMPORTED_MODULE_0__.HELP_COMMAND_DESCRIPTION, "\n\n\u250C\u2500 Portfolio Navigation \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\n\x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0m[projects]\x1B[0m   - ").concat(_commands_descriptions__WEBPACK_IMPORTED_MODULE_0__.PROJECTS_COMMAND_DESCRIPTION, "\n\n\x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0m[about]\x1B[0m      - ").concat(_commands_descriptions__WEBPACK_IMPORTED_MODULE_0__.ABOUT_COMMAND_DESCRIPTION, "\n\n\x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0m[skills]\x1B[0m     - ").concat(_commands_descriptions__WEBPACK_IMPORTED_MODULE_0__.SKILLS_COMMAND_DESCRIPTION, "\n\n\x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0m[experience]\x1B[0m - ").concat(_commands_descriptions__WEBPACK_IMPORTED_MODULE_0__.EXPERIENCE_COMMAND_DESCRIPTION, "\n\n\x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0m[education]\x1B[0m  - ").concat(_commands_descriptions__WEBPACK_IMPORTED_MODULE_0__.EDUCATION_COMMAND_DESCRIPTION, "\n\n\u250C\u2500 Additional Information \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\n\x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0m[contact]\x1B[0m    - ").concat(_commands_descriptions__WEBPACK_IMPORTED_MODULE_0__.CONTACT_COMMAND_DESCRIPTION, "\n\n\x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0m[configs]\x1B[0m    - ").concat(_commands_descriptions__WEBPACK_IMPORTED_MODULE_0__.CONFIGS_COMMAND_DESCRIPTION, "\n\nType or click a command to begin exploring.");
var helpCommandHandler = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(term) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_utils_commands_utils__WEBPACK_IMPORTED_MODULE_1__.emulateCommandWriting)(term, HELP_MESSAGE);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function helpCommandHandler(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/commands/illiasay.command-handler.js":
/*!**************************************************!*\
  !*** ./src/commands/illiasay.command-handler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   illiasayCommandHandler: () => (/* binding */ illiasayCommandHandler)
/* harmony export */ });
/* harmony import */ var _utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/commands.utils */ "./src/utils/commands.utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var ILLIA_PORTRAIT = "      _______\n     /       \\\n    |  O   O  |  <- Illia\n    |         |\n    |    ^    |\n    |         |\n    |   ---   |\n     \\_______/";
var wrapText = function wrapText(text, maxLength) {
  var words = text.split(' ');
  var lines = [];
  var currentLine = '';
  words.forEach(function (word) {
    if ((currentLine + word).length > maxLength) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine += (currentLine ? ' ' : '') + word;
    }
  });
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines;
};
var buildSpeechBubble = function buildSpeechBubble(message) {
  var wrappedMessage = wrapText(message, 30);
  var bubbleWidth = Math.max.apply(Math, _toConsumableArray(wrappedMessage.map(function (line) {
    return line.length;
  }))) + 2;
  var topBottom = ' ' + '─'.repeat(bubbleWidth) + ' ';
  var middle = wrappedMessage.map(function (line) {
    return "\u2502 ".concat(line.padEnd(bubbleWidth - 2), " \u2502");
  }).join('\n');
  return "\n".concat(topBottom, "\n").concat(middle, "\n").concat(topBottom);
};
var illiasayCommandHandler = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(term, message) {
    var speechBubble, output;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(message.trim().length === 0)) {
            _context.next = 4;
            break;
          }
          _context.next = 3;
          return (0,_utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__.emulateCommandWriting)(term, 'Please specify illiasay message');
        case 3:
          return _context.abrupt("return");
        case 4:
          speechBubble = buildSpeechBubble(message);
          output = "".concat(ILLIA_PORTRAIT, "\n").concat(speechBubble);
          _context.next = 8;
          return (0,_utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__.emulateCommandWriting)(term, output);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function illiasayCommandHandler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/commands/projects.command-handler.js":
/*!**************************************************!*\
  !*** ./src/commands/projects.command-handler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectsCommandHandler: () => (/* binding */ projectsCommandHandler)
/* harmony export */ });
/* harmony import */ var _utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/commands.utils */ "./src/utils/commands.utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var PROJECTS_MESSAGE = "Projects Showcase\n\n1. Tarcza dla Ukrainy - \x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0mhttps://tarczadlaukrainy.pl\x1B[0m\n\n   Social Help Project - Supports Ukrainian soldiers and civilians affected by war.\n   \n   Tech Stack:\n   \n   \u2022 Strapi CMS for content management\n   \u2022 Next.js for better SEO optimizations\n   \u2022 Nginx & Certbot for deployment and SSL\n\n2. Artist Portfolio - \x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0mhttps://anastasiia-tereshchenko.art\x1B[0m\n\n   Custom Admin & Art Showcase - A digital portfolio for an artist to showcase and manage paintings.\n   \n   Tech Stack:\n   \n   \u2022 Custom-built admin panel for managing messages & artwork\n   \u2022 Next.js for a fast, interactive UI\n   \u2022 Nginx & Certbot for secure deployment\n\n3. Life Game CLI - \x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0mhttps://github.com/IlliaHalchun/life-game-cli\x1B[0m\n\n   Terminal-Based Game - A beautiful CLI implementation of Conway's Game of Life.\n   \n   Tech Stack:\n   \n   \u2022 TypeScript for robust type-safe development\n   \u2022 Node.js for CLI execution\n   \u2022 High-performance rendering loop with keyboard controls\n\nNeed Guidance?\n\nType or click \x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0m[help]\x1B[0m to see the list of available commands.";
var projectsCommandHandler = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(term) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__.emulateCommandWriting)(term, PROJECTS_MESSAGE);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function projectsCommandHandler(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/commands/skills.command-handler.js":
/*!************************************************!*\
  !*** ./src/commands/skills.command-handler.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   skillsCommandHandler: () => (/* binding */ skillsCommandHandler)
/* harmony export */ });
/* harmony import */ var _utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/commands.utils */ "./src/utils/commands.utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var SKILLS_MESSAGE = "Technical Skills\n\n\uD83D\uDE80  Frontend Development\n\n\u2022 Languages: JavaScript, TypeScript, Rust/WASM\n\u2022 React Stack: React, Next.js, Redux, Zustand, Jest, React Testing Library, Storybook\n\u2022 Layout: HTML, CSS, Gulp, SASS, LESS, SCCS, Tailwind\n\n\uD83D\uDDA5\uFE0F  Backend Development\n\n\u2022 Languages: Node.js, C#, Rust\n\u2022 Frameworks: Express.js, Nest.js, .NET, Gotham, Serverless Framework\n\u2022 APIs: REST, GraphQL, gRPC\n\n\u2022 Databases: MongoDB, PostgreSQL, RavenDB\n\n\uD83D\uDEE0\uFE0F  DevOps & Infrastructure\n\n\u2022 Docker, Nginx, Apache, RabbitMQ, Redis, CI/CD\n\u2022 Swagger, Postman, AWS, Terraform, Ansible\n\n\uD83D\uDCC2  Project Management & Tools\n\n\u2022 Git, GitHub, Bitbucket\n\u2022 Jira, Confluence, Trello, Slack, ClickUp\n\u2022 Agile Methodologies: SCRUM, Kanban\n\n\uD83D\uDCDA  Software Architecture & Best Practices\n\n\u2022 Web/Design Patterns, System Design\n\u2022 SOLID, KISS, DRY, Microservices Architecture\n\n\uD83C\uDFA8  Others\n\n\u2022 Figma, DrawIO, Strapi\n\nNeed Guidance?\n\nType or click \x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0m[help]\x1B[0m to see the list of available commands.";
var skillsCommandHandler = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(term) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__.emulateCommandWriting)(term, SKILLS_MESSAGE);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function skillsCommandHandler(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/commands/welcome.command-handler.js":
/*!*************************************************!*\
  !*** ./src/commands/welcome.command-handler.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   welcomeCommandHandler: () => (/* binding */ welcomeCommandHandler)
/* harmony export */ });
/* harmony import */ var _utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/commands.utils */ "./src/utils/commands.utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var WELCOME_MESSAGE = "Welcome to my interactive terminal portfolio!\n\nThis is a unique space where you can explore my work, experience, and skills through a terminal interface.\n\nAbout Me:\n\nI am Illia Halchun, a full-stack software developer with expertise in modern web technologies.\n\nI specialize in building high-performance applications using:\n\n\u2022 Next.js, Nest.js and Node.js\n\u2022 TypeScript and JavaScript\n\u2022 C# and .NET\n\u2022 React for front-end development\n\nEnjoy your stay and have fun exploring my work!\n\nNeed Guidance?\n\nType or click \x1B[1m\x1B[48;2;255;170;42m\x1B[38;5;0m[help]\x1B[0m to see the list of available commands and start exploring.";
var welcomeCommandHandler = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(term, afterCommand) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__.emulateCommandWriting)(term, WELCOME_MESSAGE, afterCommand);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function welcomeCommandHandler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/events/close-all-toasts.event-handler.js":
/*!******************************************************!*\
  !*** ./src/events/close-all-toasts.event-handler.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeAllToastsEventHandler: () => (/* binding */ closeAllToastsEventHandler)
/* harmony export */ });
var closeAllToastsEventHandler = function closeAllToastsEventHandler(notyf) {
  notyf.dismissAll();
};

/***/ }),

/***/ "./src/events/event.dispatcher.js":
/*!****************************************!*\
  !*** ./src/events/event.dispatcher.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dispatchEvent: () => (/* binding */ dispatchEvent)
/* harmony export */ });
/* harmony import */ var _utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/commands.utils */ "./src/utils/commands.utils.js");

var dispatchEvent = function dispatchEvent(event) {
  if ((0,_utils_commands_utils__WEBPACK_IMPORTED_MODULE_0__.isTerminalEmulatesWriting)() === false) document.dispatchEvent(event);
};

/***/ }),

/***/ "./src/events/events.handlers.js":
/*!***************************************!*\
  !*** ./src/events/events.handlers.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EVENT_HANDLERS: () => (/* binding */ EVENT_HANDLERS)
/* harmony export */ });
/* harmony import */ var _events_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.names */ "./src/events/events.names.js");
/* harmony import */ var _close_all_toasts_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./close-all-toasts.event-handler */ "./src/events/close-all-toasts.event-handler.js");
/* harmony import */ var _commands_about_command_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commands/about.command-handler */ "./src/commands/about.command-handler.js");
/* harmony import */ var _commands_contact_command_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commands/contact.command-handler */ "./src/commands/contact.command-handler.js");
/* harmony import */ var _commands_education_command_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commands/education.command-handler */ "./src/commands/education.command-handler.js");
/* harmony import */ var _commands_experience_command_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../commands/experience.command-handler */ "./src/commands/experience.command-handler.js");
/* harmony import */ var _commands_help_command_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../commands/help.command-handler */ "./src/commands/help.command-handler.js");
/* harmony import */ var _commands_projects_command_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../commands/projects.command-handler */ "./src/commands/projects.command-handler.js");
/* harmony import */ var _commands_skills_command_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../commands/skills.command-handler */ "./src/commands/skills.command-handler.js");
/* harmony import */ var _commands_welcome_command_handler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../commands/welcome.command-handler */ "./src/commands/welcome.command-handler.js");
/* harmony import */ var _modules_xterm_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/xterm.module */ "./src/modules/xterm.module.js");
/* harmony import */ var _modules_notyf_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modules/notyf.module */ "./src/modules/notyf.module.js");
/* harmony import */ var _utils_events_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/events.utils */ "./src/utils/events.utils.js");
/* harmony import */ var _commands_commands_names__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../commands/commands.names */ "./src/commands/commands.names.js");
/* harmony import */ var _commands_configs_command__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../commands/configs.command */ "./src/commands/configs.command.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_xterm_module__WEBPACK_IMPORTED_MODULE_10__]);
_modules_xterm_module__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }















var EVENT_HANDLERS = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, _events_names__WEBPACK_IMPORTED_MODULE_0__.CLOSE_ALL_TOASTS_EVENT_NAME, function () {
  return (0,_close_all_toasts_event_handler__WEBPACK_IMPORTED_MODULE_1__.closeAllToastsEventHandler)(_modules_notyf_module__WEBPACK_IMPORTED_MODULE_11__.notyf);
}), _events_names__WEBPACK_IMPORTED_MODULE_0__.ABOUT_EVENT_NAME, function () {
  return (0,_utils_events_utils__WEBPACK_IMPORTED_MODULE_12__.convertCommandHandlerToEventHandler)(_modules_xterm_module__WEBPACK_IMPORTED_MODULE_10__.term, _commands_about_command_handler__WEBPACK_IMPORTED_MODULE_2__.aboutCommandHandler, _commands_commands_names__WEBPACK_IMPORTED_MODULE_13__.ABOUT_COMMAND_NAME);
}), _events_names__WEBPACK_IMPORTED_MODULE_0__.CONTACT_EVENT_NAME, function () {
  return (0,_utils_events_utils__WEBPACK_IMPORTED_MODULE_12__.convertCommandHandlerToEventHandler)(_modules_xterm_module__WEBPACK_IMPORTED_MODULE_10__.term, _commands_contact_command_handler__WEBPACK_IMPORTED_MODULE_3__.contactCommandHandler, _commands_commands_names__WEBPACK_IMPORTED_MODULE_13__.CONTACT_COMMAND_NAME);
}), _events_names__WEBPACK_IMPORTED_MODULE_0__.EDUCATION_EVENT_NAME, function () {
  return (0,_utils_events_utils__WEBPACK_IMPORTED_MODULE_12__.convertCommandHandlerToEventHandler)(_modules_xterm_module__WEBPACK_IMPORTED_MODULE_10__.term, _commands_education_command_handler__WEBPACK_IMPORTED_MODULE_4__.educationCommandHandler, _commands_commands_names__WEBPACK_IMPORTED_MODULE_13__.EDUCATION_COMMAND_NAME);
}), _events_names__WEBPACK_IMPORTED_MODULE_0__.EXPERIENCE_EVENT_NAME, function () {
  return (0,_utils_events_utils__WEBPACK_IMPORTED_MODULE_12__.convertCommandHandlerToEventHandler)(_modules_xterm_module__WEBPACK_IMPORTED_MODULE_10__.term, _commands_experience_command_handler__WEBPACK_IMPORTED_MODULE_5__.experienceCommandHandler, _commands_commands_names__WEBPACK_IMPORTED_MODULE_13__.EXPERIENCE_COMMAND_NAME);
}), _events_names__WEBPACK_IMPORTED_MODULE_0__.HELP_EVENT_NAME, function () {
  return (0,_utils_events_utils__WEBPACK_IMPORTED_MODULE_12__.convertCommandHandlerToEventHandler)(_modules_xterm_module__WEBPACK_IMPORTED_MODULE_10__.term, _commands_help_command_handler__WEBPACK_IMPORTED_MODULE_6__.helpCommandHandler, _commands_commands_names__WEBPACK_IMPORTED_MODULE_13__.HELP_COMMAND_NAME);
}), _events_names__WEBPACK_IMPORTED_MODULE_0__.PROJECTS_EVENT_NAME, function () {
  return (0,_utils_events_utils__WEBPACK_IMPORTED_MODULE_12__.convertCommandHandlerToEventHandler)(_modules_xterm_module__WEBPACK_IMPORTED_MODULE_10__.term, _commands_projects_command_handler__WEBPACK_IMPORTED_MODULE_7__.projectsCommandHandler, _commands_commands_names__WEBPACK_IMPORTED_MODULE_13__.PROJECTS_COMMAND_NAME);
}), _events_names__WEBPACK_IMPORTED_MODULE_0__.SKILLS_EVENT_NAME, function () {
  return (0,_utils_events_utils__WEBPACK_IMPORTED_MODULE_12__.convertCommandHandlerToEventHandler)(_modules_xterm_module__WEBPACK_IMPORTED_MODULE_10__.term, _commands_skills_command_handler__WEBPACK_IMPORTED_MODULE_8__.skillsCommandHandler, _commands_commands_names__WEBPACK_IMPORTED_MODULE_13__.SKILLS_COMMAND_NAME);
}), _events_names__WEBPACK_IMPORTED_MODULE_0__.WELCOME_EVENT_NAME, function () {
  return (0,_utils_events_utils__WEBPACK_IMPORTED_MODULE_12__.convertCommandHandlerToEventHandler)(_modules_xterm_module__WEBPACK_IMPORTED_MODULE_10__.term, _commands_welcome_command_handler__WEBPACK_IMPORTED_MODULE_9__.welcomeCommandHandler, _commands_commands_names__WEBPACK_IMPORTED_MODULE_13__.WELCOME_COMMAND_NAME);
}), _events_names__WEBPACK_IMPORTED_MODULE_0__.CONFIGS_EVENT_NAME, function () {
  return (0,_utils_events_utils__WEBPACK_IMPORTED_MODULE_12__.convertCommandHandlerToEventHandler)(_modules_xterm_module__WEBPACK_IMPORTED_MODULE_10__.term, _commands_configs_command__WEBPACK_IMPORTED_MODULE_14__["default"], _commands_commands_names__WEBPACK_IMPORTED_MODULE_13__.CONFIGS_COMMAND_NAME);
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/events/events.list.js":
/*!***********************************!*\
  !*** ./src/events/events.list.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EVENTS: () => (/* binding */ EVENTS)
/* harmony export */ });
/* harmony import */ var _events_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.names */ "./src/events/events.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var EVENTS = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, _events_names__WEBPACK_IMPORTED_MODULE_0__.CLOSE_ALL_TOASTS_EVENT_NAME, new Event(_events_names__WEBPACK_IMPORTED_MODULE_0__.CLOSE_ALL_TOASTS_EVENT_NAME)), _events_names__WEBPACK_IMPORTED_MODULE_0__.ABOUT_EVENT_NAME, new Event(_events_names__WEBPACK_IMPORTED_MODULE_0__.ABOUT_EVENT_NAME)), _events_names__WEBPACK_IMPORTED_MODULE_0__.CONTACT_EVENT_NAME, new Event(_events_names__WEBPACK_IMPORTED_MODULE_0__.CONTACT_EVENT_NAME)), _events_names__WEBPACK_IMPORTED_MODULE_0__.EDUCATION_EVENT_NAME, new Event(_events_names__WEBPACK_IMPORTED_MODULE_0__.EDUCATION_EVENT_NAME)), _events_names__WEBPACK_IMPORTED_MODULE_0__.EXPERIENCE_EVENT_NAME, new Event(_events_names__WEBPACK_IMPORTED_MODULE_0__.EXPERIENCE_EVENT_NAME)), _events_names__WEBPACK_IMPORTED_MODULE_0__.HELP_EVENT_NAME, new Event(_events_names__WEBPACK_IMPORTED_MODULE_0__.HELP_EVENT_NAME)), _events_names__WEBPACK_IMPORTED_MODULE_0__.PROJECTS_EVENT_NAME, new Event(_events_names__WEBPACK_IMPORTED_MODULE_0__.PROJECTS_EVENT_NAME)), _events_names__WEBPACK_IMPORTED_MODULE_0__.SKILLS_EVENT_NAME, new Event(_events_names__WEBPACK_IMPORTED_MODULE_0__.SKILLS_EVENT_NAME)), _events_names__WEBPACK_IMPORTED_MODULE_0__.WELCOME_EVENT_NAME, new Event(_events_names__WEBPACK_IMPORTED_MODULE_0__.WELCOME_EVENT_NAME)), _events_names__WEBPACK_IMPORTED_MODULE_0__.CONFIGS_EVENT_NAME, new Event(_events_names__WEBPACK_IMPORTED_MODULE_0__.CONFIGS_EVENT_NAME));

/***/ }),

/***/ "./src/events/events.names.js":
/*!************************************!*\
  !*** ./src/events/events.names.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ABOUT_EVENT_NAME: () => (/* binding */ ABOUT_EVENT_NAME),
/* harmony export */   CLOSE_ALL_TOASTS_EVENT_NAME: () => (/* binding */ CLOSE_ALL_TOASTS_EVENT_NAME),
/* harmony export */   CONFIGS_EVENT_NAME: () => (/* binding */ CONFIGS_EVENT_NAME),
/* harmony export */   CONTACT_EVENT_NAME: () => (/* binding */ CONTACT_EVENT_NAME),
/* harmony export */   EDUCATION_EVENT_NAME: () => (/* binding */ EDUCATION_EVENT_NAME),
/* harmony export */   EVENT_NAME_SUFFIX: () => (/* binding */ EVENT_NAME_SUFFIX),
/* harmony export */   EXPERIENCE_EVENT_NAME: () => (/* binding */ EXPERIENCE_EVENT_NAME),
/* harmony export */   HELP_EVENT_NAME: () => (/* binding */ HELP_EVENT_NAME),
/* harmony export */   PROJECTS_EVENT_NAME: () => (/* binding */ PROJECTS_EVENT_NAME),
/* harmony export */   SKILLS_EVENT_NAME: () => (/* binding */ SKILLS_EVENT_NAME),
/* harmony export */   WELCOME_EVENT_NAME: () => (/* binding */ WELCOME_EVENT_NAME)
/* harmony export */ });
/* harmony import */ var _commands_commands_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commands/commands.names */ "./src/commands/commands.names.js");

var EVENT_NAME_SUFFIX = 'event';
var CLOSE_ALL_TOASTS_EVENT_NAME = "close-all-toasts-".concat(EVENT_NAME_SUFFIX);
var ABOUT_EVENT_NAME = _commands_commands_names__WEBPACK_IMPORTED_MODULE_0__.ABOUT_COMMAND_NAME + "-".concat(EVENT_NAME_SUFFIX);
var CONTACT_EVENT_NAME = _commands_commands_names__WEBPACK_IMPORTED_MODULE_0__.CONTACT_COMMAND_NAME + "-".concat(EVENT_NAME_SUFFIX);
var EDUCATION_EVENT_NAME = _commands_commands_names__WEBPACK_IMPORTED_MODULE_0__.EDUCATION_COMMAND_NAME + "-".concat(EVENT_NAME_SUFFIX);
var EXPERIENCE_EVENT_NAME = _commands_commands_names__WEBPACK_IMPORTED_MODULE_0__.EXPERIENCE_COMMAND_NAME + "-".concat(EVENT_NAME_SUFFIX);
var HELP_EVENT_NAME = _commands_commands_names__WEBPACK_IMPORTED_MODULE_0__.HELP_COMMAND_NAME + "-".concat(EVENT_NAME_SUFFIX);
var PROJECTS_EVENT_NAME = _commands_commands_names__WEBPACK_IMPORTED_MODULE_0__.PROJECTS_COMMAND_NAME + "-".concat(EVENT_NAME_SUFFIX);
var SKILLS_EVENT_NAME = _commands_commands_names__WEBPACK_IMPORTED_MODULE_0__.SKILLS_COMMAND_NAME + "-".concat(EVENT_NAME_SUFFIX);
var WELCOME_EVENT_NAME = _commands_commands_names__WEBPACK_IMPORTED_MODULE_0__.WELCOME_COMMAND_NAME + "-".concat(EVENT_NAME_SUFFIX);
var CONFIGS_EVENT_NAME = _commands_commands_names__WEBPACK_IMPORTED_MODULE_0__.CONFIGS_COMMAND_NAME + "-".concat(EVENT_NAME_SUFFIX);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_xterm_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/xterm.module.js */ "./src/modules/xterm.module.js");
/* harmony import */ var _modules_notyf_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/notyf.module.js */ "./src/modules/notyf.module.js");
/* harmony import */ var _modules_events_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/events.module.js */ "./src/modules/events.module.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _xterm_xterm_css_xterm_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @xterm/xterm/css/xterm.css */ "./node_modules/@xterm/xterm/css/xterm.css");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_xterm_module_js__WEBPACK_IMPORTED_MODULE_0__, _modules_events_module_js__WEBPACK_IMPORTED_MODULE_2__]);
([_modules_xterm_module_js__WEBPACK_IMPORTED_MODULE_0__, _modules_events_module_js__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// JS




// Styles


var wrapper = document.querySelector(".xterm-wrapper");
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/modules/events.module.js":
/*!**************************************!*\
  !*** ./src/modules/events.module.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events_events_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/events.list */ "./src/events/events.list.js");
/* harmony import */ var _events_events_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/events.handlers */ "./src/events/events.handlers.js");
/* harmony import */ var _events_event_dispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/event.dispatcher */ "./src/events/event.dispatcher.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_events_events_handlers__WEBPACK_IMPORTED_MODULE_1__]);
_events_events_handlers__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



Object.entries(_events_events_list__WEBPACK_IMPORTED_MODULE_0__.EVENTS).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    name = _ref2[0],
    _ = _ref2[1];
  document.addEventListener(name, _events_events_handlers__WEBPACK_IMPORTED_MODULE_1__.EVENT_HANDLERS[name]);
});
document.customDispatchEvent = _events_event_dispatcher__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/modules/notyf.module.js":
/*!*************************************!*\
  !*** ./src/modules/notyf.module.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INFINITY_DURATION: () => (/* binding */ INFINITY_DURATION),
/* harmony export */   notyf: () => (/* binding */ notyf)
/* harmony export */ });
/* harmony import */ var notyf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! notyf */ "./node_modules/notyf/notyf.es.js");
/* harmony import */ var notyf_notyf_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! notyf/notyf.min.css */ "./node_modules/notyf/notyf.min.css");


var INFINITY_DURATION = 1000 * 100000;
var notyf = new notyf__WEBPACK_IMPORTED_MODULE_0__.Notyf({
  types: [{
    type: 'info',
    icon: false,
    dismissible: false,
    className: 'notyf-info',
    ripple: false
  }]
});

/***/ }),

/***/ "./src/modules/xterm.module.js":
/*!*************************************!*\
  !*** ./src/modules/xterm.module.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   term: () => (/* binding */ term)
/* harmony export */ });
/* harmony import */ var _xterm_xterm_lib_xterm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xterm/xterm/lib/xterm.js */ "./node_modules/@xterm/xterm/lib/xterm.js");
/* harmony import */ var _xterm_xterm_lib_xterm_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_xterm_xterm_lib_xterm_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xterm_link_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xterm-link-provider */ "./node_modules/xterm-link-provider/lib/esm/index.js");
/* harmony import */ var _state_prompt_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/prompt.state */ "./src/state/prompt.state.js");
/* harmony import */ var xterm_addon_fit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xterm-addon-fit */ "./node_modules/xterm-addon-fit/lib/xterm-addon-fit.js");
/* harmony import */ var xterm_addon_fit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xterm_addon_fit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var xterm_addon_web_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xterm-addon-web-links */ "./node_modules/xterm-addon-web-links/lib/xterm-addon-web-links.js");
/* harmony import */ var xterm_addon_web_links__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xterm_addon_web_links__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_cursor_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/cursor.utils */ "./src/utils/cursor.utils.js");
/* harmony import */ var _commands_commands_dispatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../commands/commands.dispatcher */ "./src/commands/commands.dispatcher.js");
/* harmony import */ var _commands_commands_handlers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../commands/commands.handlers */ "./src/commands/commands.handlers.js");
/* harmony import */ var _state_history_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../state/history.state */ "./src/state/history.state.js");
/* harmony import */ var _commands_commands_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../commands/commands.names */ "./src/commands/commands.names.js");
/* harmony import */ var _events_event_dispatcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../events/event.dispatcher */ "./src/events/event.dispatcher.js");
/* harmony import */ var _events_events_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../events/events.list */ "./src/events/events.list.js");
/* harmony import */ var _utils_events_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/events.utils */ "./src/utils/events.utils.js");
/* harmony import */ var _utils_commands_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/commands.utils */ "./src/utils/commands.utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }














var term = new _xterm_xterm_lib_xterm_js__WEBPACK_IMPORTED_MODULE_0__.Terminal({
  cursorBlink: true,
  fontSize: 22,
  fontWeight: 400,
  fontFamily: 'IBM, monospace',
  theme: {
    background: '#35210D',
    foreground: '#FFAA2A',
    cursor: '#c0caf5'
  },
  convertEol: true,
  cursorStyle: 'block',
  allowTransparency: true,
  allowProposedApi: true
});
var fitAddon = new xterm_addon_fit__WEBPACK_IMPORTED_MODULE_3__.FitAddon();
var webLinksAddon = new xterm_addon_web_links__WEBPACK_IMPORTED_MODULE_4__.WebLinksAddon();
term.loadAddon(fitAddon);
term.loadAddon(webLinksAddon);
term.open(document.getElementById('xterm-wrapper'));

// Resize handling

window.addEventListener('DOMContentLoaded', function () {
  fitAddon.fit();
  term.focus();
});
window.addEventListener('resize', function () {
  fitAddon.fit();
});

// Welcome message

await (0,_utils_commands_utils__WEBPACK_IMPORTED_MODULE_13__.emulateCommandWriting)(term, _utils_cursor_utils__WEBPACK_IMPORTED_MODULE_5__.CURSOR);
await (0,_utils_commands_utils__WEBPACK_IMPORTED_MODULE_13__.emulateCommandWriting)(term, _commands_commands_names__WEBPACK_IMPORTED_MODULE_9__.WELCOME_COMMAND_NAME);
term.writeln('');
term.writeln('');
await _commands_commands_handlers__WEBPACK_IMPORTED_MODULE_7__.COMMAND_HANDLERS[_commands_commands_names__WEBPACK_IMPORTED_MODULE_9__.WELCOME_COMMAND_NAME](term);
term.writeln('');
await (0,_utils_cursor_utils__WEBPACK_IMPORTED_MODULE_5__.writeCursorWithWritingEmulation)(term);

// Prompt handling

term.onData(/*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_char) {
    var prompt, prevHistoryElement, nextHistoryElement;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          prompt = (0,_state_prompt_state__WEBPACK_IMPORTED_MODULE_2__.getPrompt)();
          if (!(0,_utils_commands_utils__WEBPACK_IMPORTED_MODULE_13__.isTerminalEmulatesWriting)()) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return");
        case 3:
          _context.t0 = _char;
          _context.next = _context.t0 === "\x03" ? 6 : _context.t0 === '\r' ? 14 : _context.t0 === "\x7F" ? 23 : _context.t0 === '\x1b[A' ? 25 : _context.t0 === '\x1b[B' ? 30 : 35;
          break;
        case 6:
          // Ctrl+C
          term.writeln('');
          term.write('^C');
          _context.next = 10;
          return (0,_state_prompt_state__WEBPACK_IMPORTED_MODULE_2__.clearPrompt)(term);
        case 10:
          term.writeln('');
          _context.next = 13;
          return (0,_utils_cursor_utils__WEBPACK_IMPORTED_MODULE_5__.writeCursorWithWritingEmulation)(term);
        case 13:
          return _context.abrupt("break", 36);
        case 14:
          if (!(prompt.trim() === '')) {
            _context.next = 18;
            break;
          }
          term.writeln('');
          _context.next = 18;
          return (0,_utils_cursor_utils__WEBPACK_IMPORTED_MODULE_5__.writeCursorWithWritingEmulation)(term);
        case 18:
          _context.next = 20;
          return (0,_commands_commands_dispatcher__WEBPACK_IMPORTED_MODULE_6__.dispatchCommand)(term, prompt);
        case 20:
          (0,_state_history_state__WEBPACK_IMPORTED_MODULE_8__.pushHistoryElement)(prompt);
          (0,_state_history_state__WEBPACK_IMPORTED_MODULE_8__.returnHistoryIndexToStart)();
          return _context.abrupt("break", 36);
        case 23:
          // Backspace (DEL)
          (0,_state_prompt_state__WEBPACK_IMPORTED_MODULE_2__.deleteCharFromThePrompt)(term);
          return _context.abrupt("break", 36);
        case 25:
          // Arrow Up
          prevHistoryElement = (0,_state_history_state__WEBPACK_IMPORTED_MODULE_8__.getPrevHistoryElement)();
          (0,_state_prompt_state__WEBPACK_IMPORTED_MODULE_2__.setPrompt)(term, prevHistoryElement);
          (0,_utils_cursor_utils__WEBPACK_IMPORTED_MODULE_5__.updateCursor)(term);
          term.write(prevHistoryElement);
          return _context.abrupt("break", 36);
        case 30:
          // Arrow Down
          nextHistoryElement = (0,_state_history_state__WEBPACK_IMPORTED_MODULE_8__.getNextHistoryElement)();
          (0,_state_prompt_state__WEBPACK_IMPORTED_MODULE_2__.setPrompt)(term, nextHistoryElement);
          (0,_utils_cursor_utils__WEBPACK_IMPORTED_MODULE_5__.updateCursor)(term);
          term.write(nextHistoryElement);
          return _context.abrupt("break", 36);
        case 35:
          // Print all other characters
          if (_char >= String.fromCharCode(0x20) && _char <= String.fromCharCode(0x7e) || _char >= "\xA0") {
            (0,_state_prompt_state__WEBPACK_IMPORTED_MODULE_2__.addCharToThePrompt)(term, _char);
            term.write(_char);
          }
        case 36:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

// Links handling

var linksRegex = /\[(.*?)\]/g;
term.registerLinkProvider(new xterm_link_provider__WEBPACK_IMPORTED_MODULE_1__.LinkProvider(term, linksRegex, function (_, commandName) {
  var eventName = (0,_utils_events_utils__WEBPACK_IMPORTED_MODULE_12__.getEventNameFromCommandName)(commandName);
  var event = _events_events_list__WEBPACK_IMPORTED_MODULE_11__.EVENTS[eventName];
  (0,_events_event_dispatcher__WEBPACK_IMPORTED_MODULE_10__.dispatchEvent)(event);
}));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/state/history.state.js":
/*!************************************!*\
  !*** ./src/state/history.state.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNextHistoryElement: () => (/* binding */ getNextHistoryElement),
/* harmony export */   getPrevHistoryElement: () => (/* binding */ getPrevHistoryElement),
/* harmony export */   pushHistoryElement: () => (/* binding */ pushHistoryElement),
/* harmony export */   returnHistoryIndexToStart: () => (/* binding */ returnHistoryIndexToStart)
/* harmony export */ });
var history = [];
var currentIndex = -1;
var pushHistoryElement = function pushHistoryElement(command) {
  if (command.trim() === '') return;
  history.push(command);
  currentIndex = history.length;
};
var returnHistoryIndexToStart = function returnHistoryIndexToStart() {
  currentIndex = history.length;
};
var getPrevHistoryElement = function getPrevHistoryElement() {
  if (history.length === 0) return '';
  if (currentIndex > 0) {
    currentIndex -= 1;
    return history[currentIndex];
  }
  return history[0];
};
var getNextHistoryElement = function getNextHistoryElement() {
  if (history.length === 0) return '';
  if (currentIndex < history.length - 1) {
    currentIndex += 1;
    return history[currentIndex];
  }
  currentIndex = history.length;
  return '';
};

/***/ }),

/***/ "./src/state/prompt.state.js":
/*!***********************************!*\
  !*** ./src/state/prompt.state.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCharToThePrompt: () => (/* binding */ addCharToThePrompt),
/* harmony export */   clearPrompt: () => (/* binding */ clearPrompt),
/* harmony export */   deleteCharFromThePrompt: () => (/* binding */ deleteCharFromThePrompt),
/* harmony export */   getPrompt: () => (/* binding */ getPrompt),
/* harmony export */   setPrompt: () => (/* binding */ setPrompt)
/* harmony export */ });
/* harmony import */ var _utils_cursor_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cursor.utils */ "./src/utils/cursor.utils.js");

var prompt = '';
var addCharToThePrompt = function addCharToThePrompt(term, _char) {
  prompt += _char;
};
var deleteCharFromThePrompt = function deleteCharFromThePrompt(term) {
  if (term._core.buffer.x > _utils_cursor_utils__WEBPACK_IMPORTED_MODULE_0__.CURSOR.length) {
    if (prompt.length > 0) {
      prompt = prompt.slice(0, prompt.length - 1);
      term.write('\b \b');
    }
  }
};
var setPrompt = function setPrompt(term, value) {
  prompt = value;
};
var clearPrompt = function clearPrompt() {
  prompt = '';
};
var getPrompt = function getPrompt() {
  return prompt;
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/tooltips/clear.tooltip.js":
/*!***************************************!*\
  !*** ./src/tooltips/clear.tooltip.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showClearToast: () => (/* binding */ showClearToast)
/* harmony export */ });
/* harmony import */ var _modules_notyf_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/notyf.module */ "./src/modules/notyf.module.js");
/* harmony import */ var _events_events_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/events.names */ "./src/events/events.names.js");


var showClearToast = function showClearToast() {
  _modules_notyf_module__WEBPACK_IMPORTED_MODULE_0__.notyf.open({
    type: 'info',
    duration: _modules_notyf_module__WEBPACK_IMPORTED_MODULE_0__.INFINITY_DURATION,
    message: "Type or click <button onclick=\"document.customDispatchEvent(new Event('".concat(_events_events_names__WEBPACK_IMPORTED_MODULE_1__.HELP_EVENT_NAME, "'))\"><strong>[help]</strong></button> to see the list of available commands. ")
  });
};

/***/ }),

/***/ "./src/utils/commands.utils.js":
/*!*************************************!*\
  !*** ./src/utils/commands.utils.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emulateCommandWriting: () => (/* binding */ emulateCommandWriting),
/* harmony export */   isTerminalEmulatesWriting: () => (/* binding */ isTerminalEmulatesWriting)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var WRITING_DELAY = 30;
var isTerminalWrites = false;
var emulateCommandWriting = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(term, text) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (res) {
            isTerminalWrites = true;
            var alreadyWrittenDelay = 0;
            text.split('').forEach(function (_char, index) {
              var WRITING_RANDOM_FACTOR = Math.random();
              var computedDelay = WRITING_DELAY * WRITING_RANDOM_FACTOR;
              setTimeout(function () {
                term.write(_char);
                if (text.length - 1 === index) {
                  isTerminalWrites = false;
                  return res();
                }
              }, computedDelay + alreadyWrittenDelay);
              alreadyWrittenDelay += computedDelay;
            });
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function emulateCommandWriting(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var isTerminalEmulatesWriting = function isTerminalEmulatesWriting() {
  return isTerminalWrites;
};

/***/ }),

/***/ "./src/utils/cursor.utils.js":
/*!***********************************!*\
  !*** ./src/utils/cursor.utils.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CURSOR: () => (/* binding */ CURSOR),
/* harmony export */   updateCursor: () => (/* binding */ updateCursor),
/* harmony export */   writeCursorWithWritingEmulation: () => (/* binding */ writeCursorWithWritingEmulation)
/* harmony export */ });
/* harmony import */ var _commands_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commands.utils */ "./src/utils/commands.utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var CURSOR = 'illia-halchun-term git:(main) -> ';
var writeCursorWithWritingEmulation = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(term) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_commands_utils__WEBPACK_IMPORTED_MODULE_0__.emulateCommandWriting)(term, "\r\n".concat(CURSOR));
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function writeCursorWithWritingEmulation(_x) {
    return _ref.apply(this, arguments);
  };
}();
var updateCursor = function updateCursor(term) {
  term.write('\x1b[2K\r');
  term.write("".concat(CURSOR));
};

/***/ }),

/***/ "./src/utils/events.utils.js":
/*!***********************************!*\
  !*** ./src/utils/events.utils.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertCommandHandlerToEventHandler: () => (/* binding */ convertCommandHandlerToEventHandler),
/* harmony export */   getEventNameFromCommandName: () => (/* binding */ getEventNameFromCommandName)
/* harmony export */ });
/* harmony import */ var _events_events_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/events.names */ "./src/events/events.names.js");
/* harmony import */ var _cursor_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cursor.utils */ "./src/utils/cursor.utils.js");
/* harmony import */ var _events_event_dispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/event.dispatcher */ "./src/events/event.dispatcher.js");
/* harmony import */ var _events_events_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/events.list */ "./src/events/events.list.js");
/* harmony import */ var _commands_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commands.utils */ "./src/utils/commands.utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





var getEventNameFromCommandName = function getEventNameFromCommandName(commandName) {
  return commandName + "-".concat(_events_events_names__WEBPACK_IMPORTED_MODULE_0__.EVENT_NAME_SUFFIX);
};
var convertCommandHandlerToEventHandler = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(term, commandHandler, commandName) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          term.clear();
          _context.next = 3;
          return (0,_commands_utils__WEBPACK_IMPORTED_MODULE_4__.emulateCommandWriting)(term, commandName);
        case 3:
          term.writeln('');
          term.writeln('');
          (0,_events_event_dispatcher__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(_events_events_list__WEBPACK_IMPORTED_MODULE_3__.EVENTS[_events_events_names__WEBPACK_IMPORTED_MODULE_0__.CLOSE_ALL_TOASTS_EVENT_NAME]);
          _context.next = 8;
          return commandHandler(term);
        case 8:
          term.writeln('');
          _context.next = 11;
          return (0,_cursor_utils__WEBPACK_IMPORTED_MODULE_1__.writeCursorWithWritingEmulation)(term);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function convertCommandHandlerToEventHandler(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map