!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";e.exports=n(1)},function(e,t,n){"use strict";
/** @license React v16.12.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var y=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var v="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||b}function w(){}function S(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||b}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=x.prototype;var j=S.prototype=new w;j.constructor=S,r(j,x.prototype),j.isPureReactComponent=!0;var k={current:null},E={current:null},M=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,o={},u=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(u=""+t.key),t)M.call(t,r)&&!O.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var c=Array(l),f=0;f<l;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:i,type:e,key:u,ref:a,props:o,_owner:E.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g,R=[];function $(e,t,n,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function F(e,t,n){return null==e?0:function e(t,n,r,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var l=!1;if(null===t)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case i:case u:l=!0}}if(l)return r(o,t,""===n?"."+A(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var f=n+A(a=t[c],c);l+=e(a,f,r,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=v&&t[v]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),c=0;!(a=t.next()).done;)l+=e(a=a.value,f=n+A(a,c++),r,o);else if("object"===a)throw r=""+t,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function T(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,r,n,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function U(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(P,"$&/")+"/"),F(e,I,t=$(t,i,r,o)),N(t)}function L(){var e=k.current;if(null===e)throw Error(m(321));return e}var q={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return U(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;F(e,T,t=$(null,null,t,n)),N(t)},count:function(e){return F(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(m(143));return e}},createRef:function(){return{current:null}},Component:x,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return L().useCallback(e,t)},useContext:function(e,t){return L().useContext(e,t)},useEffect:function(e,t){return L().useEffect(e,t)},useImperativeHandle:function(e,t,n){return L().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return L().useLayoutEffect(e,t)},useMemo:function(e,t){return L().useMemo(e,t)},useReducer:function(e,t,n){return L().useReducer(e,t,n)},useRef:function(e){return L().useRef(e)},useState:function(e){return L().useState(e)},Fragment:a,Profiler:c,StrictMode:l,Suspense:d,createElement:_,cloneElement:function(e,t,n){if(null==e)throw Error(m(267,e));var o=r({},e.props),u=e.key,a=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,l=E.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(f in t)M.call(t,f)&&!O.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==c?c[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){c=Array(f);for(var s=0;s<f;s++)c[s]=arguments[s+2];o.children=c}return{$$typeof:i,type:e.type,key:u,ref:a,props:o,_owner:l}},createFactory:function(e){var t=_.bind(null,e);return t.type=e,t},isValidElement:C,version:"16.12.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:r}},B={default:q},D=B&&q||B;e.exports=D.default||D},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,l=u(e),c=1;c<arguments.length;c++){for(var f in n=Object(arguments[c]))o.call(n,f)&&(l[f]=n[f]);if(r){a=r(n);for(var s=0;s<a.length;s++)i.call(n,a[s])&&(l[a[s]]=n[a[s]])}}return l}},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(6)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(5);(e.exports=r(!1)).push([e.i,".d3-chart {\n  margin-top: 20px;\n  border-bottom: 1px solid white;\n  border-left: 1px solid white;\n  z-index: 99;\n  color: white;\n}\n.d3-line-text {\n  fill: white;\n  font: italic 18px serif;\n}\n\nline {\n  /* stroke: #555555;  */\n  stroke: rgb(18, 147, 154);\n  stroke-width: 1;\n}\n\n.d3-line-grid {\n  stroke: #555555; \n  stroke-width:0.1;\n}\n.d3-axis-labels {\n  font: italic 11px;\n  fill: white;\n  stroke: none;\n} ",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(u=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(u)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var u,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r=0;r<e.length;r++){var o=[].concat(e[r]);n&&(o[2]?o[2]="".concat(n," and ").concat(o[2]):o[2]=n),t.push(o)}},t}},function(e,t,n){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},u=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function a(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[u]?r[u].parts.push(a):n.push(r[u]={id:u,parts:[a]})}return n}function l(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id],u=0;if(i){for(i.refs++;u<i.parts.length;u++)i.parts[u](r.parts[u]);for(;u<r.parts.length;u++)i.parts.push(v(r.parts[u],t))}else{for(var a=[];u<r.parts.length;u++)a.push(v(r.parts[u],t));o[r.id]={id:r.id,refs:1,parts:a}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var o=u(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var f,s=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(i,u[t]):e.appendChild(i)}}function d(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&e.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var y=null,h=0;function v(e,t){var n,r,o;if(t.singleton){var i=h++;n=y||(y=c(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=c(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=a(e,t);return l(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var u=n[i],c=o[u.id];c&&(c.refs--,r.push(c))}e&&l(a(e,t),t);for(var f=0;f<r.length;f++){var s=r[f];if(0===s.refs){for(var p=0;p<s.parts.length;p++)s.parts[p]();delete o[s.id]}}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=function(e,t){return e<t?-1:e>t?1:e>=t?0:NaN};function u(e,t){let n;if(void 0===t)for(const t of e)null!=t&&(n<t||void 0===n&&t>=t)&&(n=t);else{let r=-1;for(let o of e)null!=(o=t(o,++r,e))&&(n<o||void 0===n&&o>=o)&&(n=o)}return n}function a(e,t){let n;if(void 0===t)for(const t of e)null!=t&&(n>t||void 0===n&&t>=t)&&(n=t);else{let r=-1;for(let o of e)null!=(o=t(o,++r,e))&&(n>o||void 0===n&&o>=o)&&(n=o)}return n}function l(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function c(e,t,n){if(r=(e=Float64Array.from(function*(e,t){if(void 0===t)for(let t of e)null!=t&&(t=+t)>=t&&(yield t);else{let n=-1;for(let r of e)null!=(r=t(r,++n,e))&&(r=+r)>=r&&(yield r)}}(e,n))).length){if((t=+t)<=0||r<2)return a(e);if(t>=1)return u(e);var r,o=(r-1)*t,c=Math.floor(o),f=u(function e(t,n,r=0,o=t.length-1,u=i){for(;o>r;){if(o-r>600){const i=o-r+1,a=n-r+1,l=Math.log(i),c=.5*Math.exp(2*l/3),f=.5*Math.sqrt(l*c*(i-c)/i)*(a-i/2<0?-1:1);e(t,n,Math.max(r,Math.floor(n-a*c/i+f)),Math.min(o,Math.floor(n+(i-a)*c/i+f)),u)}const i=t[n];let a=r,c=o;for(l(t,r,n),u(t[o],i)>0&&l(t,r,o);a<c;){for(l(t,a,c),++a,--c;u(t[a],i)<0;)++a;for(;u(t[c],i)>0;)--c}0===u(t[r],i)?l(t,r,c):(++c,l(t,c,o)),c<=n&&(r=c+1),n<=c&&(o=c-1)}return t}(e,c).subarray(0,c+1));return f+(a(e.subarray(c+1))-f)*(o-c)}}n(3);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.default=function(e){e.className;var t=e.data,n=(e.marginLeft,e.marginTop,e.lineAttrs),r=e.plotStyle;if(!t||!Array.isArray(t)||0===t.length)return null;var u=!0;if(t.forEach((function(e){var t;(null==(t=e)||t.constructor!==Number)&&(u=!1)})),!u)return null;var a=r&&r.height||100,l=t.sort(i),s=+c(l=l.map((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{oldMax:10,oldMin:1,newMax:1,newMin:0},n=(e-t.oldMin)*(t.newMax-t.newMin)/(t.oldMax-t.oldMin)+t.newMin;return+n.toFixed(2)}(e,{oldMax:l[l.length-1],oldMin:l[0],newMax:95,newMin:5})})),.25).toFixed(2),p=+c(l,.5).toFixed(2),d=+c(l,.75).toFixed(2),y=+(d-s).toFixed(2),h=+(s-1.5*y).toFixed(2),v=+(s+1.5*y).toFixed(2),m=l.filter((function(e){return e>v||e<h})),b=t;return t.length>5&&(b=[],t.forEach((function(e,n){var r=Math.floor(t.length/5);if(1===r&&(r=2),n%r==0){var o=Math.floor(e);o>1e3&&(o=(o/1e3).toFixed(1)+"k"),b.push(o)}}))),o.a.createElement("div",{style:{width:"100%",height:a,position:"relative",display:"flex",alignItems:"center",justifyContent:"center"}},o.a.createElement("div",{style:{width:"100%",height:"100%",maxWidth:"600px"}},o.a.createElement("svg",{width:"100%",height:"100%"},o.a.createElement("g",{style:{stroke:r&&r.lineColor||"rgb(18, 147, 154)"}},o.a.createElement("line",f({x1:h+"%",x2:s+"%",y1:"35%",y2:"35%"},n)),o.a.createElement("line",f({style:{strokeWidth:1},x1:h+"%",x2:h+"%",y1:"5%",y2:"65%"},n)),o.a.createElement("line",f({x1:v+"%",x2:d+"%",y1:"35%",y2:"35%"},n)),o.a.createElement("line",f({style:{strokeWidth:1},x1:v+"%",x2:v+"%",y1:"5%",y2:"65%"},n)),o.a.createElement("rect",{x:s+"%",width:y+"%",y:"5%",height:"60%",fill:r&&r.fillColor||"rgb(18, 147, 154)",stroke:"black 0.5px"}),o.a.createElement("line",f({style:{stroke:"black",strokeWidth:1},x1:p+"%",x2:p+"%",y1:"5%",y2:"65%"},n)),m.map((function(e,t){return o.a.createElement("circle",{key:e+"-"+t,r:"5",cx:(e>v?e+2:e-2)+"%",cy:"35%",style:{fill:"none",opacity:1}})})),b&&b.map((function(e,t){var n=t*(100/b.length);return o.a.createElement("g",{key:n+"-"+t},o.a.createElement("text",{x:n+2+"%",y:"85%",className:"d3-axis-labels"},e))}))))))}}]));