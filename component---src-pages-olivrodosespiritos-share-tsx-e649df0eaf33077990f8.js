"use strict";(self.webpackChunkespiritismo_js=self.webpackChunkespiritismo_js||[]).push([[350],{4020:function(e){var t="%[a-f0-9]{2}",r=new RegExp("("+t+")|([^%]+?)","gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return[decodeURIComponent(e.join(""))]}catch(i){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function i(e){try{return decodeURIComponent(e)}catch(i){for(var t=e.match(r)||[],n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(e);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(t){var s=i(o[0]);s!==o[0]&&(r[o[0]]=s)}o=n.exec(e)}r["%C2"]="�";for(var a=Object.keys(r),u=0;u<a.length;u++){var c=a[u];e=e.replace(new RegExp(c,"g"),r[c])}return e}(e)}}},7187:function(e){var t,r="object"==typeof Reflect?Reflect:null,n=r&&"function"==typeof r.apply?r.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};t=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function i(){i.init.call(this)}e.exports=i,e.exports.once=function(e,t){return new Promise((function(r,n){function o(r){e.removeListener(t,i),n(r)}function i(){"function"==typeof e.removeListener&&e.removeListener("error",o),r([].slice.call(arguments))}m(e,t,i,{once:!0}),"error"!==t&&function(e,t,r){"function"==typeof e.on&&m(e,"error",t,r)}(e,o,{once:!0})}))},i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var s=10;function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function u(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function c(e,t,r,n){var o,i,s,c;if(a(r),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),i=e._events),s=i[t]),void 0===s)s=i[t]=r,++e._eventsCount;else if("function"==typeof s?s=i[t]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),(o=u(e))>0&&s.length>o&&!s.warned){s.warned=!0;var f=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");f.name="MaxListenersExceededWarning",f.emitter=e,f.type=t,f.count=s.length,c=f,console&&console.warn&&console.warn(c)}return e}function f(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function l(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},o=f.bind(n);return o.listener=r,n.wrapFn=o,o}function p(e,t,r){var n=e._events;if(void 0===n)return[];var o=n[t];return void 0===o?[]:"function"==typeof o?r?[o.listener||o]:[o]:r?function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(o):y(o,o.length)}function d(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function y(e,t){for(var r=new Array(t),n=0;n<t;++n)r[n]=e[n];return r}function m(e,t,r,n){if("function"==typeof e.on)n.once?e.once(t,r):e.on(t,r);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function o(i){n.once&&e.removeEventListener(t,o),r(i)}))}}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),i.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return u(this)},i.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var o="error"===e,i=this._events;if(void 0!==i)o=o&&void 0===i.error;else if(!o)return!1;if(o){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var u=i[e];if(void 0===u)return!1;if("function"==typeof u)n(u,this,t);else{var c=u.length,f=y(u,c);for(r=0;r<c;++r)n(f[r],this,t)}return!0},i.prototype.addListener=function(e,t){return c(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return c(this,e,t,!0)},i.prototype.once=function(e,t){return a(t),this.on(e,l(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,l(this,e,t)),this},i.prototype.removeListener=function(e,t){var r,n,o,i,s;if(a(t),void 0===(n=this._events))return this;if(void 0===(r=n[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(o=-1,i=r.length-1;i>=0;i--)if(r[i]===t||r[i].listener===t){s=r[i].listener,o=i;break}if(o<0)return this;0===o?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(r,o),1===r.length&&(n[e]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",e,s||t)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(e){var t,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0===arguments.length){var o,i=Object.keys(r);for(n=0;n<i.length;++n)"removeListener"!==(o=i[n])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},i.prototype.listeners=function(e){return p(this,e,!0)},i.prototype.rawListeners=function(e){return p(this,e,!1)},i.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):d.call(e,t)},i.prototype.listenerCount=d,i.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},2806:function(e){e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),i=0;i<n.length;i++){var s=n[i],a=e[s];(o?-1!==t.indexOf(s):t(s,a,e))&&(r[s]=a)}return r}},6811:function(e,t,r){r.r(t),r.d(t,{Head:function(){return a}});var n=r(7294),o=r(8053),i=r(5638),s=r(1181);t.default=()=>{const[e,t,r]=(0,i.useQueryParamString)("id","");return n.createElement(o.Z,{id:e,view:!0})};const a=()=>n.createElement(s.Z,{title:"O Livro dos Espíritos",pathname:"/olivrodosespiritos/share/"})},1232:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.clearQueryParam=t.setQueryParams=t.getQueryParams=t.useQueryParamString=t.queryParamsEventEmitter=void 0;const a=s(r(7294)),u=i(r(1377)),c=r(7187);function f(){let e={};return"undefined"!=typeof window&&(e=u.parse(window.location.search)),e}function l(e){if("undefined"!=typeof window){const r=Object.keys(e).length>0?`?${u.stringify(e)}`:"";window.history.replaceState(window.history.state,"",`${window.location.pathname}${r}`),t.queryParamsEventEmitter.emit("update")}}function p(e){const t=f();delete t[e],l(t)}t.queryParamsEventEmitter=new c.EventEmitter,t.useQueryParamString=function(e,r,n=!0){const[o,i]=a.default.useState(!1),[s,u]=a.default.useState(0),[c,d]=a.default.useState(r),y=a.default.useCallback((()=>{p(e)}),[e]),m=a.default.useCallback((t=>{d(t),n&&t===r?y():l(Object.assign(Object.assign({},f()),{[e]:t}))}),[y,n,r,e]),v=a.default.useCallback((()=>{const t=f()[e];d("string"==typeof t?t:r)}),[r,e]);return a.default.useEffect((()=>{o||(v(),i(!0))}),[v,r,o,e]),a.default.useEffect((()=>{s>0&&v()}),[v,s]),a.default.useEffect((()=>{const e=()=>{u(Date.now())};return t.queryParamsEventEmitter.addListener("update",e),()=>{t.queryParamsEventEmitter.removeListener("update",e)}}),[]),[c,m,o,y]},t.getQueryParams=f,t.setQueryParams=l,t.clearQueryParam=p},5638:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(1232),t)},1377:function(e,t,r){const n=r(610),o=r(4020),i=r(500),s=r(2806),a=Symbol("encodeFragmentIdentifier");function u(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function c(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function f(e,t){return t.decode?o(e):e}function l(e){return Array.isArray(e)?e.sort():"object"==typeof e?l(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function p(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function d(e){const t=(e=p(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function y(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function m(e,t){u((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),i="string"==typeof r&&!o&&f(r,e).includes(e.arrayFormatSeparator);r=i?f(r,e):r;const s=o||i?r.split(e.arrayFormatSeparator).map((t=>f(t,e))):null===r?r:f(r,e);n[t]=s};case"bracket-separator":return(t,r,n)=>{const o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!o)return void(n[t]=r?f(r,e):r);const i=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>f(t,e)));void 0!==n[t]?n[t]=[].concat(n[t],i):n[t]=i};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;let[e,s]=i(t.decode?o.replace(/\+/g," "):o,"=");s=void 0===s?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?s:f(s,t),r(f(e,t),s,n)}for(const o of Object.keys(n)){const e=n[o];if("object"==typeof e&&null!==e)for(const r of Object.keys(e))e[r]=y(e[r],t);else n[o]=y(e,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=l(r):e[t]=r,e}),Object.create(null))}t.extract=d,t.parse=m,t.stringify=(e,t)=>{if(!e)return"";u((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[c(t,e),"[",o,"]"].join("")]:[...r,[c(t,e),"[",c(o,e),"]=",c(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[c(t,e),"[]"].join("")]:[...r,[c(t,e),"[]=",c(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[c(t,e),":list="].join("")]:[...r,[c(t,e),":list=",c(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[c(r,e),t,c(o,e)].join("")]:[[n,c(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,c(t,e)]:[...r,[c(t,e),"=",c(n,e)].join("")]}}(t),o={};for(const s of Object.keys(e))r(s)||(o[s]=e[s]);const i=Object.keys(o);return!1!==t.sort&&i.sort(t.sort),i.map((r=>{const o=e[r];return void 0===o?"":null===o?c(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?c(r,t)+"[]":o.reduce(n(r),[]).join("&"):c(r,t)+"="+c(o,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=i(e,"#");return Object.assign({url:r.split("?")[0]||"",query:m(d(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:f(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[a]:!0},r);const n=p(e.url).split("?")[0]||"",o=t.extract(e.url),i=t.parse(o,{sort:!1}),s=Object.assign(i,e.query);let u=t.stringify(s,r);u&&(u=`?${u}`);let f=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(f=`#${r[a]?c(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${n}${u}${f}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[a]:!1},n);const{url:o,query:i,fragmentIdentifier:u}=t.parseUrl(e,n);return t.stringifyUrl({url:o,query:s(i,r),fragmentIdentifier:u},n)},t.exclude=(e,r,n)=>{const o=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,o,n)}},500:function(e){e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},610:function(e){e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}}]);
//# sourceMappingURL=component---src-pages-olivrodosespiritos-share-tsx-e649df0eaf33077990f8.js.map