(self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),i=n(6330),o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,o=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+i(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),i=n(1400),o=n(6244),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c),l=i(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!s(e,"length").writable)throw o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),o=n(4326),s=n(5112),a=s("toStringTag"),c=Object,u="Arguments"==o(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?o(t):"Object"==(r=o(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),o=n(1236),s=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=s.f,u=o.f,l=0;l<a.length;l++){var d=a[l];r(e,d)||n&&r(n,d)||c(e,d,u(t,d))}}},8880:function(e,t,n){var r=n(9781),i=n(3070),o=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),i=n(3070),o=n(6339),s=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&o(n,u,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){"use strict";var r=n(6330),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,o=n(7854),s=n(8113),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),i=Error,o=r("".replace),s=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),i=n(1236).f,o=n(8880),s=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,d,h,f,p,m=e.target,g=e.global,v=e.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(d in t){if(f=t[d],e.dontCallGetSet?(p=i(l,d),h=p&&p.value):h=l[d],n=u(g?d:m+(v?".":"#")+d,e.forced),!n&&void 0!==h){if(typeof f==typeof h)continue;c(f,h)}(e.sham||h&&h.sham)&&o(f,"sham",!0),s(l,d,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);e.exports=r?s:function(e){return function(){return o.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),o=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),o=n(4326),s=Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a(e,""):s(e)}:s},9587:function(e,t,n){var r=n(614),i=n(111),o=n(7674);e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),o=n(5465),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},9909:function(e,t,n){var r,i,o,s=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),d=n(5465),h=n(6200),f=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(e){return o(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(s||d.state){var b=d.state||(d.state=new g);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw m(p);return t.facade=e,b.set(e,t),t},i=function(e){return b.get(e)||{}},o=function(e){return b.has(e)}}else{var w=h("state");f[w]=!0,r=function(e,t){if(l(e,w))throw m(p);return t.facade=e,u(e,w,t),t},i=function(e){return l(e,w)?e[w]:{}},o=function(e){return l(e,w)}}e.exports={set:r,get:i,has:o,enforce:v,getterFor:y}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),o=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===o}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),o=n(7976),s=n(3307),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),i=n(614),o=n(2597),s=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,d=u.get,h=Object.defineProperty,f=s&&!r((function(){return 8!==h((function(){}),"length",{value:8}).length})),p=String(String).split("String"),m=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||a&&e.name!==t)&&(s?h(e,"name",{value:t,configurable:!0}):e.name=t),f&&n&&o(n,"arity")&&e.length!==n.arity&&h(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?s&&h(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=l(e);return o(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return i(this)&&d(this).source||c(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),i=n(4664),o=n(3353),s=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d="enumerable",h="configurable",f="writable";t.f=r?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:d in n?n[d]:r[d],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),o=n(5296),s=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=c(t),l)try{return d(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),i=n(9670),o=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),o=n(111),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!o(a=r(n,e)))return a;if(i(n=e.valueOf)&&!o(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!o(a=r(n,e)))return a;throw s("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),o=n(8006),s=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.27.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),o=n(2190),s=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,c=s(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),i=n(614),o=r.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},5112:function(e,t,n){var r=n(7854),i=n(2309),o=n(2597),s=n(9711),a=n(6293),c=n(3307),u=i("wks"),l=r.Symbol,d=l&&l["for"],h=c?l:l&&l.withoutSetter||s;e.exports=function(e){if(!o(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&o(l,e)?u[e]=l[e]:u[e]=c&&d?d(t):h(t)}return u[e]}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{push:function(e){var t=i(this),n=o(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},541:function(e,t,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(5117),c=n(7207),u=1!==[].unshift(0),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{unshift:function(e){var t=i(this),n=o(t),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var l=u+r;u in t?t[l]=t[u]:a(t,l)}for(var d=0;d<r;d++)t[d]=arguments[d]}return s(t,n+r)}})},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),o=n(5005),s=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),d=n(6277),h=n(3678),f=n(1060),p=n(9781),m=n(1913),g="DOMException",v=o("Error"),y=o(g),b=function(){u(this,w);var e=arguments.length,t=d(e<1?void 0:arguments[0]),n=d(e<2?void 0:arguments[1],"Error"),r=new y(t,n),i=v(t);return i.name=g,a(r,"stack",s(1,f(i.stack,1))),l(r,this,b),r},w=b.prototype=y.prototype,_="stack"in v(g),I="stack"in new y(1,2),E=y&&p&&Object.getOwnPropertyDescriptor(i,g),T=!!E&&!(E.writable&&E.configurable),S=_&&!T&&!I;r({global:!0,constructor:!0,forced:m||S},{DOMException:S?b:y});var k=o(g),O=k.prototype;if(O.constructor!==k)for(var C in m||a(O,"constructor",s(1,k)),h)if(c(h,C)){var R=h[C],A=R.s;c(k,A)||a(k,A,s(6,R.c))}},223:function(e,t,n){"use strict";n.d(t,{$s:function(){return q},BH:function(){return v},L:function(){return a},LL:function(){return C},Pz:function(){return g},ZR:function(){return O},aH:function(){return m},b$:function(){return _},eu:function(){return T},hl:function(){return E},m9:function(){return W},ne:function(){return j},pd:function(){return M},q4:function(){return p},ru:function(){return w},tV:function(){return c},uI:function(){return b},vZ:function(){return P},w1:function(){return I},xO:function(){return D},xb:function(){return N},z$:function(){return y},zI:function(){return S},zd:function(){return L}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let d=(15&s)<<2|c>>6,h=63&c;a||(h=64,o||(d=64)),r.push(n[u],n[l],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==l)throw Error();const d=t<<2|s>>4;if(r.push(d),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){const t=r(e);return o.encodeByteArray(t,!0)},a=function(e){return s(e).replace(/\./g,"")},c=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=()=>u().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",VUE_APP_FIREBASE_KEY:"AIzaSyDFszPXYxAMeNu1HOVcdYbaKf59v2uVYGw",VUE_APP_FIREBASE_ID:"nhlpredictions-bdbb5",VUE_APP_FIREBASE_AUTH_DOMAIN:"localhost",VUE_APP_FIREBASE_DB_URL:"https://nhlpredictions-bdbb5-default-rtdb.firebaseio.com",VUE_APP_FIREBASE_STORAGE_BUCKET:"nhlpredictions-bdbb5.appspot.com",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},h=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&c(e[1]);return t&&JSON.parse(t)},f=()=>{try{return l()||d()||h()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},p=e=>{var t,n;return null===(n=null===(t=f())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=()=>{var e;return null===(e=f())||void 0===e?void 0:e.config},g=e=>{var t;return null===(t=f())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function y(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function b(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())}function w(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function _(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function I(){const e=y();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function E(){try{return"object"===typeof indexedDB}catch(e){return!1}}function T(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function S(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k="FirebaseError";class O extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=k,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?R(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new O(r,s,n);return a}}function R(e,t){return e.replace(A,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function P(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(x(n)&&x(o)){if(!P(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function x(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function L(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function M(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){const n=new U(e,t);return n.subscribe.bind(n)}class U{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=F(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=B),void 0===r.error&&(r.error=B),void 0===r.complete&&(r.complete=B);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function F(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function B(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $=1e3,H=2,V=144e5,z=.5;function q(e,t=$,n=H){const r=t*Math.pow(n,e),i=Math.round(z*r*(Math.random()-.5)*2);return Math.min(V,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){"use strict";n.d(t,{Bj:function(){return o},Fl:function(){return Be},IU:function(){return Ce},Jd:function(){return E},PG:function(){return Te},Um:function(){return _e},WL:function(){return je},X$:function(){return O},X3:function(){return Oe},Xl:function(){return Re},dq:function(){return De},j:function(){return S},lk:function(){return T},qj:function(){return we},qq:function(){return b},yT:function(){return ke}});n(7658);var r=n(7139);let i;class o{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this.active=!1}}}function s(e,t=i){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&p)>0,u=e=>(e.n&p)>0,l=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~p,i.n&=~p}t.length=n}},h=new WeakMap;let f=0,p=1;const m=30;let g;const v=Symbol(""),y=Symbol("");class b{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,s(this,n)}run(){if(!this.active)return this.fn();let e=g,t=_;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,_=!0,p=1<<++f,f<=m?l(this):w(this),this.fn()}finally{f<=m&&d(this),p=1<<--f,g=this.parent,_=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(w(this),this.onStop&&this.onStop(),this.active=!1)}}function w(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let _=!0;const I=[];function E(){I.push(_),_=!1}function T(){const e=I.pop();_=void 0===e||e}function S(e,t,n){if(_&&g){let t=h.get(e);t||h.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const i=void 0;k(r,i)}}function k(e,t){let n=!1;f<=m?u(e)||(e.n|=p,n=!c(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function O(e,t,n,i,o,s){const c=h.get(e);if(!c)return;let u=[];if("clear"===t)u=[...c.values()];else if("length"===n&&(0,r.kJ)(e)){const e=(0,r.He)(i);c.forEach(((t,n)=>{("length"===n||n>=e)&&u.push(t)}))}else switch(void 0!==n&&u.push(c.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&u.push(c.get("length")):(u.push(c.get(v)),(0,r._N)(e)&&u.push(c.get(y)));break;case"delete":(0,r.kJ)(e)||(u.push(c.get(v)),(0,r._N)(e)&&u.push(c.get(y)));break;case"set":(0,r._N)(e)&&u.push(c.get(v));break}if(1===u.length)u[0]&&C(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);C(a(e))}}function C(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&R(r,t);for(const r of n)r.computed||R(r,t)}function R(e,t){(e!==g||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const A=(0,r.fY)("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),P=j(),x=j(!1,!0),D=j(!0),L=M();function M(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ce(this);for(let t=0,i=this.length;t<i;t++)S(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ce)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){E();const n=Ce(this)[t].apply(this,e);return T(),n}})),e}function j(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&o===(e?t?ve:ge:t?me:pe).get(n))return n;const s=(0,r.kJ)(n);if(!e&&s&&(0,r.RI)(L,i))return Reflect.get(L,i,o);const a=Reflect.get(n,i,o);return((0,r.yk)(i)?N.has(i):A(i))?a:(e||S(n,"get",i),t?a:De(a)?s&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Ie(a):we(a):a)}}const U=B(),F=B(!0);function B(e=!1){return function(t,n,i,o){let s=t[n];if(Se(s)&&De(s)&&!De(i))return!1;if(!e&&(ke(i)||Se(i)||(s=Ce(s),i=Ce(i)),!(0,r.kJ)(t)&&De(s)&&!De(i)))return s.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,o);return t===Ce(o)&&(a?(0,r.aU)(i,s)&&O(t,"set",n,i,s):O(t,"add",n,i)),c}}function $(e,t){const n=(0,r.RI)(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&O(e,"delete",t,void 0,i),o}function H(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&N.has(t)||S(e,"has",t),n}function V(e){return S(e,"iterate",(0,r.kJ)(e)?"length":v),Reflect.ownKeys(e)}const z={get:P,set:U,deleteProperty:$,has:H,ownKeys:V},q={get:D,set(e,t){return!0},deleteProperty(e,t){return!0}},W=(0,r.l7)({},z,{get:x,set:F}),J=e=>e,K=e=>Reflect.getPrototypeOf(e);function G(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ce(e),o=Ce(t);n||(t!==o&&S(i,"get",t),S(i,"get",o));const{has:s}=K(i),a=r?J:n?Ne:Ae;return s.call(i,t)?a(e.get(t)):s.call(i,o)?a(e.get(o)):void(e!==i&&e.get(t))}function X(e,t=!1){const n=this["__v_raw"],r=Ce(n),i=Ce(e);return t||(e!==i&&S(r,"has",e),S(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Z(e,t=!1){return e=e["__v_raw"],!t&&S(Ce(e),"iterate",v),Reflect.get(e,"size",e)}function Y(e){e=Ce(e);const t=Ce(this),n=K(t),r=n.has.call(t,e);return r||(t.add(e),O(t,"add",e,e)),this}function Q(e,t){t=Ce(t);const n=Ce(this),{has:i,get:o}=K(n);let s=i.call(n,e);s||(e=Ce(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?(0,r.aU)(t,a)&&O(n,"set",e,t,a):O(n,"add",e,t),this}function ee(e){const t=Ce(this),{has:n,get:r}=K(t);let i=n.call(t,e);i||(e=Ce(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&O(t,"delete",e,void 0,o),s}function te(){const e=Ce(this),t=0!==e.size,n=void 0,r=e.clear();return t&&O(e,"clear",void 0,void 0,n),r}function ne(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=Ce(o),a=t?J:e?Ne:Ae;return!e&&S(s,"iterate",v),o.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function re(e,t,n){return function(...i){const o=this["__v_raw"],s=Ce(o),a=(0,r._N)(s),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=o[e](...i),d=n?J:t?Ne:Ae;return!t&&S(s,"iterate",u?y:v),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&this}}function oe(){const e={get(e){return G(this,e)},get size(){return Z(this)},has:X,add:Y,set:Q,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return G(this,e,!1,!0)},get size(){return Z(this)},has:X,add:Y,set:Q,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return G(this,e,!0)},get size(){return Z(this,!0)},has(e){return X.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!1)},r={get(e){return G(this,e,!0,!0)},get size(){return Z(this,!0)},has(e){return X.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=re(i,!1,!1),n[i]=re(i,!0,!1),t[i]=re(i,!1,!0),r[i]=re(i,!0,!0)})),[e,n,t,r]}const[se,ae,ce,ue]=oe();function le(e,t){const n=t?e?ue:ce:e?ae:se;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,o)}const de={get:le(!1,!1)},he={get:le(!1,!0)},fe={get:le(!0,!1)};const pe=new WeakMap,me=new WeakMap,ge=new WeakMap,ve=new WeakMap;function ye(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function be(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ye((0,r.W7)(e))}function we(e){return Se(e)?e:Ee(e,!1,z,de,pe)}function _e(e){return Ee(e,!1,W,he,me)}function Ie(e){return Ee(e,!0,q,fe,ge)}function Ee(e,t,n,i,o){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=be(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function Te(e){return Se(e)?Te(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Se(e){return!(!e||!e["__v_isReadonly"])}function ke(e){return!(!e||!e["__v_isShallow"])}function Oe(e){return Te(e)||Se(e)}function Ce(e){const t=e&&e["__v_raw"];return t?Ce(t):e}function Re(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Ae=e=>(0,r.Kn)(e)?we(e):e,Ne=e=>(0,r.Kn)(e)?Ie(e):e;function Pe(e){_&&g&&(e=Ce(e),k(e.dep||(e.dep=a())))}function xe(e,t){e=Ce(e),e.dep&&C(e.dep)}function De(e){return!(!e||!0!==e.__v_isRef)}function Le(e){return De(e)?e.value:e}const Me={get:(e,t,n)=>Le(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return De(i)&&!De(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function je(e){return Te(e)?e:new Proxy(e,Me)}var Ue;class Fe{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Ue]=!1,this._dirty=!0,this.effect=new b(e,(()=>{this._dirty||(this._dirty=!0,xe(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ce(this);return Pe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Be(e,t,n=!1){let i,o;const s=(0,r.mf)(e);s?(i=e,o=r.dG):(i=e.get,o=e.set);const a=new Fe(i,o,s||!o,n);return a}Ue="__v_isReadonly"},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return s},Cn:function(){return M},FN:function(){return fn},HY:function(){return Pt},Ko:function(){return Fe},P$:function(){return re},Q6:function(){return ue},U2:function(){return oe},Uk:function(){return tn},Us:function(){return kt},Wm:function(){return Zt},Y8:function(){return ee},_:function(){return Xt},aZ:function(){return le},dD:function(){return L},h:function(){return An},iD:function(){return Vt},ic:function(){return Se},j4:function(){return zt},kq:function(){return nn},nK:function(){return ce},up:function(){return Le},wg:function(){return Ut},wy:function(){return Pe}});n(7658),n(541);var r=n(4870),i=n(7139);function o(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){a(o,t,n)}return i}function s(e,t,n,r){if((0,i.mf)(e)){const s=o(e,t,n,r);return s&&(0,i.tI)(s)&&s.catch((e=>{a(e,t,n)})),s}const c=[];for(let i=0;i<e.length;i++)c.push(s(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void o(a,null,10,[e,i,s])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const d=[];let h=0;const f=[];let p=null,m=0;const g=Promise.resolve();let v=null;function y(e){const t=v||g;return e?t.then(this?e.bind(this):e):t}function b(e){let t=h+1,n=d.length;while(t<n){const r=t+n>>>1,i=k(d[r]);i<e?t=r+1:n=r}return t}function w(e){d.length&&d.includes(e,u&&e.allowRecurse?h+1:h)||(null==e.id?d.push(e):d.splice(b(e.id),0,e),_())}function _(){u||l||(l=!0,v=g.then(C))}function I(e){const t=d.indexOf(e);t>h&&d.splice(t,1)}function E(e){(0,i.kJ)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?m+1:m)||f.push(e),_()}function T(e,t=(u?h+1:0)){for(0;t<d.length;t++){const e=d[t];e&&e.pre&&(d.splice(t,1),t--,e())}}function S(e){if(f.length){const e=[...new Set(f)];if(f.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>k(e)-k(t))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const k=e=>null==e.id?1/0:e.id,O=(e,t)=>{const n=k(e)-k(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function C(e){l=!1,u=!0,d.sort(O);i.dG;try{for(h=0;h<d.length;h++){const e=d[h];e&&!1!==e.active&&o(e,null,14)}}finally{h=0,d.length=0,S(e),u=!1,v=null,(d.length||f.length)&&C(e)}}new Set;new Map;function R(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let o=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:s}=r[e]||i.kT;s&&(o=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(o=n.map(i.He))}let u;let l=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(t))]),l&&s(l,e,6,o);const d=r[u+"Once"];if(d){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,s(d,e,6,o)}}function A(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=A(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||c?((0,i.kJ)(s)?s.forEach((e=>a[e]=null)):(0,i.l7)(a,s),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function N(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let P=null,x=null;function D(e){const t=P;return P=e,x=e&&e.type.__scopeId||null,t}function L(e){x=e}function M(){x=null}function j(e,t=P,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&$t(-1);const i=D(t);let o;try{o=e(...n)}finally{D(i),r._d&&$t(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function U(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[c],slots:u,attrs:l,emit:d,render:h,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:v}=e;let y,b;const w=D(e);try{if(4&n.shapeFlag){const e=o||r;y=rn(h.call(e,e,f,s,m,p,g)),b=l}else{const e=t;0,y=rn(e.length>1?e(s,{attrs:l,slots:u,emit:d}):e(s,null)),b=t.props?l:F(l)}}catch(I){Mt.length=0,a(I,e,1),y=Zt(Dt)}let _=y;if(b&&!1!==v){const e=Object.keys(b),{shapeFlag:t}=_;e.length&&7&t&&(c&&e.some(i.tR)&&(b=B(b,c)),_=en(_,b))}return n.dirs&&(_=en(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),y=_,D(w),y}const F=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},B=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function $(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||H(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?H(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!N(u,n))return!0}}return!1}function H(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!N(n,o))return!0}return!1}function V({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const z=e=>e.__isSuspense;function q(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):E(e)}function W(e,t){if(hn){let n=hn.provides;const r=hn.parent&&hn.parent.provides;r===n&&(n=hn.provides=Object.create(r)),n[e]=t}else 0}function J(e,t,n=!1){const r=hn||P;if(r){const o=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const K={};function G(e,t,n){return X(e,t,n)}function X(e,t,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){const d=hn;let h,f,p=!1,m=!1;if((0,r.dq)(e)?(h=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(h=()=>e,a=!0):(0,i.kJ)(e)?(m=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),h=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?Q(e):(0,i.mf)(e)?o(e,d,2):void 0))):h=(0,i.mf)(e)?t?()=>o(e,d,2):()=>{if(!d||!d.isUnmounted)return f&&f(),s(e,d,3,[v])}:i.dG,t&&a){const e=h;h=()=>Q(e())}let g,v=e=>{f=I.onStop=()=>{o(e,d,4)}};if(bn){if(v=i.dG,t?n&&s(t,d,3,[h(),m?[]:void 0,v]):h(),"sync"!==c)return i.dG;{const e=Pn();g=e.__watcherHandles||(e.__watcherHandles=[])}}let y=m?new Array(e.length).fill(K):K;const b=()=>{if(I.active)if(t){const e=I.run();(a||p||(m?e.some(((e,t)=>(0,i.aU)(e,y[t]))):(0,i.aU)(e,y)))&&(f&&f(),s(t,d,3,[e,y===K?void 0:m&&y[0]===K?[]:y,v]),y=e)}else I.run()};let _;b.allowRecurse=!!t,"sync"===c?_=b:"post"===c?_=()=>St(b,d&&d.suspense):(b.pre=!0,d&&(b.id=d.uid),_=()=>w(b));const I=new r.qq(h,_);t?n?b():y=I.run():"post"===c?St(I.run.bind(I),d&&d.suspense):I.run();const E=()=>{I.stop(),d&&d.scope&&(0,i.Od)(d.scope.effects,I)};return g&&g.push(E),E}function Z(e,t,n){const r=this.proxy,o=(0,i.HD)(e)?e.includes(".")?Y(r,e):()=>r[e]:e.bind(r,r);let s;(0,i.mf)(t)?s=t:(s=t.handler,n=t);const a=hn;pn(this);const c=X(o,s.bind(r),n);return a?pn(a):mn(),c}function Y(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Q(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))Q(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)Q(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{Q(e,t)}));else if((0,i.PO)(e))for(const n in e)Q(e[n],t);return e}function ee(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ee((()=>{e.isMounted=!0})),ke((()=>{e.isUnmounting=!0})),e}const te=[Function,Array],ne={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:te,onEnter:te,onAfterEnter:te,onEnterCancelled:te,onBeforeLeave:te,onLeave:te,onAfterLeave:te,onLeaveCancelled:te,onBeforeAppear:te,onAppear:te,onAfterAppear:te,onAppearCancelled:te},setup(e,{slots:t}){const n=fn(),i=ee();let o;return()=>{const s=t.default&&ue(t.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==Dt){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(i.isLeaving)return se(a);const l=ae(a);if(!l)return se(a);const d=oe(l,c,i,n);ce(l,d);const h=n.subTree,f=h&&ae(h);let p=!1;const{getTransitionKey:m}=l.type;if(m){const e=m();void 0===o?o=e:e!==o&&(o=e,p=!0)}if(f&&f.type!==Dt&&(!Wt(l,f)||p)){const e=oe(f,c,i,n);if(ce(f,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},se(a);"in-out"===u&&l.type!==Dt&&(e.delayLeave=(e,t,n)=>{const r=ie(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=n})}return a}}},re=ne;function ie(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function oe(e,t,n,r){const{appear:o,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:d,onEnterCancelled:h,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:y,onAfterAppear:b,onAppearCancelled:w}=t,_=String(e.key),I=ie(n,e),E=(e,t)=>{e&&s(e,r,9,t)},T=(e,t)=>{const n=t[1];E(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!o)return;r=v||u}t._leaveCb&&t._leaveCb(!0);const i=I[_];i&&Wt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),E(r,[t])},enter(e){let t=l,r=d,i=h;if(!n.isMounted){if(!o)return;t=y||l,r=b||d,i=w||h}let s=!1;const a=e._enterCb=t=>{s||(s=!0,E(t?i:r,[e]),S.delayedLeave&&S.delayedLeave(),e._enterCb=void 0)};t?T(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();E(f,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),E(n?g:m,[t]),t._leaveCb=void 0,I[i]===e&&delete I[i])};I[i]=e,p?T(p,[t,s]):s()},clone(e){return oe(e,t,n,r)}};return S}function se(e){if(he(e))return e=en(e),e.children=null,e}function ae(e){return he(e)?e.children?e.children[0]:void 0:e}function ce(e,t){6&e.shapeFlag&&e.component?ce(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ue(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===Pt?(128&s.patchFlag&&i++,r=r.concat(ue(s.children,t,a))):(t||s.type!==Dt)&&r.push(null!=a?en(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function le(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const de=e=>!!e.type.__asyncLoader;const he=e=>e.type.__isKeepAlive;RegExp,RegExp;function fe(e,t){return(0,i.kJ)(e)?e.some((e=>fe(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function pe(e,t){ge(e,"a",t)}function me(e,t){ge(e,"da",t)}function ge(e,t,n=hn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(we(t,r,n),n){let e=n.parent;while(e&&e.parent)he(e.parent.vnode)&&ve(r,t,n,e),e=e.parent}}function ve(e,t,n,r){const o=we(t,e,r,!0);Oe((()=>{(0,i.Od)(r[t],o)}),n)}function ye(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function be(e){return 128&e.shapeFlag?e.ssContent:e}function we(e,t,n=hn,i=!1){if(n){const o=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),pn(n);const o=s(t,n,e,i);return mn(),(0,r.lk)(),o});return i?o.unshift(a):o.push(a),a}}const _e=e=>(t,n=hn)=>(!bn||"sp"===e)&&we(e,((...e)=>t(...e)),n),Ie=_e("bm"),Ee=_e("m"),Te=_e("bu"),Se=_e("u"),ke=_e("bum"),Oe=_e("um"),Ce=_e("sp"),Re=_e("rtg"),Ae=_e("rtc");function Ne(e,t=hn){we("ec",e,t)}function Pe(e,t){const n=P;if(null===n)return e;const r=kn(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=i.kT]=t[s];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Q(n),o.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return e}function xe(e,t,n,i){const o=e.dirs,a=t&&t.dirs;for(let c=0;c<o.length;c++){const u=o[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),s(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}const De="components";function Le(e,t){return je(De,e,!0,t)||e}const Me=Symbol();function je(e,t,n=!0,r=!1){const o=P||hn;if(o){const n=o.type;if(e===De){const e=On(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const s=Ue(o[e]||n[e],t)||Ue(o.appContext[e],t);return!s&&r?n:s}}function Ue(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function Fe(e,t,n,r){let o;const s=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[r]=o),o}const Be=e=>e?gn(e)?kn(e)||e.proxy:Be(e.parent):null,$e=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Be(e.parent),$root:e=>Be(e.root),$emit:e=>e.emit,$options:e=>Ge(e),$forceUpdate:e=>e.f||(e.f=()=>w(e.update)),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>Z.bind(e)}),He=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),Ve={get({_:e},t){const{ctx:n,setupState:o,data:s,props:a,accessCache:c,type:u,appContext:l}=e;let d;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(He(o,t))return c[t]=1,o[t];if(s!==i.kT&&(0,i.RI)(s,t))return c[t]=2,s[t];if((d=e.propsOptions[0])&&(0,i.RI)(d,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];ze&&(c[t]=0)}}const h=$e[t];let f,p;return h?("$attrs"===t&&(0,r.j)(e,"get",t),h(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return He(o,t)?(o[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||He(t,a)||(c=s[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)($e,a)||(0,i.RI)(o.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ze=!0;function qe(e){const t=Ge(e),n=e.proxy,o=e.ctx;ze=!1,t.beforeCreate&&Je(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:c,watch:u,provide:l,inject:d,created:h,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:_,unmounted:I,render:E,renderTracked:T,renderTriggered:S,errorCaptured:k,serverPrefetch:O,expose:C,inheritAttrs:R,components:A,directives:N,filters:P}=t,x=null;if(d&&We(d,o,x,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(o[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(ze=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const s=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=Rn({get:t,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Ke(u[r],o,n,r);if(l){const e=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{W(t,e[t])}))}function D(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(h&&Je(h,e,"c"),D(Ie,f),D(Ee,p),D(Te,m),D(Se,g),D(pe,v),D(me,y),D(Ne,k),D(Ae,T),D(Re,S),D(ke,w),D(Oe,I),D(Ce,O),(0,i.kJ)(C))if(C.length){const t=e.exposed||(e.exposed={});C.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i.dG&&(e.render=E),null!=R&&(e.inheritAttrs=R),A&&(e.components=A),N&&(e.directives=N)}function We(e,t,n=i.dG,o=!1){(0,i.kJ)(e)&&(e=et(e));for(const s in e){const n=e[s];let a;a=(0,i.Kn)(n)?"default"in n?J(n.from||s,n.default,!0):J(n.from||s):J(n),(0,r.dq)(a)&&o?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[s]=a}}function Je(e,t,n){s((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ke(e,t,n,r){const o=r.includes(".")?Y(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&G(o,n)}else if((0,i.mf)(e))G(o,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Ke(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&G(o,r,e)}else 0}function Ge(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,c=s.get(t);let u;return c?u=c:o.length||n||r?(u={},o.length&&o.forEach((e=>Xe(u,e,a,!0))),Xe(u,t,a)):u=t,(0,i.Kn)(t)&&s.set(t,u),u}function Xe(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Xe(e,o,n,!0),i&&i.forEach((t=>Xe(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=Ze[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Ze={data:Ye,props:nt,emits:nt,methods:nt,computed:nt,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:nt,directives:nt,watch:rt,provide:Ye,inject:Qe};function Ye(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function Qe(e,t){return nt(et(e),et(t))}function et(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function nt(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function rt(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=tt(e[r],t[r]);return n}function it(e,t,n,o=!1){const s={},a={};(0,i.Nj)(a,Jt,1),e.propsDefaults=Object.create(null),st(e,t,s,a);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=o?s:(0,r.Um)(s):e.type.props?e.props=s:e.props=a,e.attrs=a}function ot(e,t,n,o){const{props:s,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(s),[l]=e.propsOptions;let d=!1;if(!(o||c>0)||16&c){let r;st(e,t,s,a)&&(d=!0);for(const o in u)t&&((0,i.RI)(t,o)||(r=(0,i.rs)(o))!==o&&(0,i.RI)(t,r))||(l?!n||void 0===n[o]&&void 0===n[r]||(s[o]=at(l,u,o,void 0,e,!0)):delete s[o]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],d=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(N(e.emitsOptions,o))continue;const c=t[o];if(l)if((0,i.RI)(a,o))c!==a[o]&&(a[o]=c,d=!0);else{const t=(0,i._A)(o);s[t]=at(l,u,t,c,e,!1)}else c!==a[o]&&(a[o]=c,d=!0)}}d&&(0,r.X$)(e,"set","$attrs")}function st(e,t,n,o){const[s,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const l=t[r];let d;s&&(0,i.RI)(s,d=(0,i._A)(r))?a&&a.includes(d)?(c||(c={}))[d]=l:n[d]=l:N(e.emitsOptions,r)||r in o&&l===o[r]||(o[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),o=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=at(s,t,c,o[c],e,!(0,i.RI)(o,c))}}return u}function at(e,t,n,r,o,s){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=o;n in i?r=i[n]:(pn(o),r=i[n]=e.call(null,t),mn())}else r=e}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function ct(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,a={},c=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=ct(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!u)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(s))for(let d=0;d<s.length;d++){0;const e=(0,i._A)(s[d]);ut(e)&&(a[e]=i.kT)}else if(s){0;for(const e in s){const t=(0,i._A)(e);if(ut(t)){const n=s[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:Object.assign({},n);if(r){const e=ht(Boolean,r.type),n=ht(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,i.Kn)(e)&&r.set(e,l),l}function ut(e){return"$"!==e[0]}function lt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function dt(e,t){return lt(e)===lt(t)}function ht(e,t){return(0,i.kJ)(t)?t.findIndex((t=>dt(t,e))):(0,i.mf)(t)&&dt(t,e)?0:-1}const ft=e=>"_"===e[0]||"$stable"===e,pt=e=>(0,i.kJ)(e)?e.map(rn):[rn(e)],mt=(e,t,n)=>{if(t._n)return t;const r=j(((...e)=>pt(t(...e))),n);return r._c=!1,r},gt=(e,t,n)=>{const r=e._ctx;for(const o in e){if(ft(o))continue;const n=e[o];if((0,i.mf)(n))t[o]=mt(o,n,r);else if(null!=n){0;const e=pt(n);t[o]=()=>e}}},vt=(e,t)=>{const n=pt(t);e.slots.default=()=>n},yt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):gt(t,e.slots={})}else e.slots={},t&&vt(e,t);(0,i.Nj)(e.slots,Jt,1)},bt=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:((0,i.l7)(o,t),n||1!==e||delete o._):(s=!t.$stable,gt(t,o)),a=t}else t&&(vt(e,t),a={default:1});if(s)for(const i in o)ft(i)||i in a||delete o[i]};function wt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _t=0;function It(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const o=wt(),s=new Set;let a=!1;const c=o.app={_uid:_t++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:xn,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,i.mf)(e.install)?(s.add(e),e.install(c,...t)):(0,i.mf)(e)&&(s.add(e),e(c,...t))),c},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),c},component(e,t){return t?(o.components[e]=t,c):o.components[e]},directive(e,t){return t?(o.directives[e]=t,c):o.directives[e]},mount(i,s,u){if(!a){0;const l=Zt(n,r);return l.appContext=o,s&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,kn(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return o.provides[e]=t,c}};return c}}function Et(e,t,n,s,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>Et(e,t&&((0,i.kJ)(t)?t[r]:t),n,s,a)));if(de(s)&&!a)return;const c=4&s.shapeFlag?kn(s.component)||s.component.proxy:s.el,u=a?null:c,{i:l,r:d}=e;const h=t&&t.r,f=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=h&&h!==d&&((0,i.HD)(h)?(f[h]=null,(0,i.RI)(p,h)&&(p[h]=null)):(0,r.dq)(h)&&(h.value=null)),(0,i.mf)(d))o(d,l,12,[u,f]);else{const t=(0,i.HD)(d),o=(0,r.dq)(d);if(t||o){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,d)?p[d]:f[d]:d.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?(f[d]=[c],(0,i.RI)(p,d)&&(p[d]=f[d])):(d.value=[c],e.k&&(f[e.k]=d.value))}else t?(f[d]=u,(0,i.RI)(p,d)&&(p[d]=u)):o&&(d.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,St(r,n)):r()}else 0}}function Tt(){}const St=q;function kt(e){return Ot(e)}function Ot(e,t){Tt();const n=(0,i.E9)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:c,createText:u,createComment:l,setText:d,setElementText:h,parentNode:f,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:g}=e,v=(e,t,n,r=null,i=null,o=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Wt(e,t)&&(r=Y(e),J(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:d}=t;switch(u){case xt:y(e,t,n,r);break;case Dt:b(e,t,n,r);break;case Lt:null==e&&_(t,n,r,s);break;case Pt:D(e,t,n,r,i,o,s,a,c);break;default:1&d?O(e,t,n,r,i,o,s,a,c):6&d?L(e,t,n,r,i,o,s,a,c):(64&d||128&d)&&u.process(e,t,n,r,i,o,s,a,c,ee)}null!=l&&i&&Et(l,e&&e.ref,o,t||e,!t)},y=(e,t,n,r)=>{if(null==e)o(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},b=(e,t,n,r)=>{null==e?o(t.el=l(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),o(e,n,r),e=i;o(t,n,r)},k=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},O=(e,t,n,r,i,o,s,a,c)=>{s=s||"svg"===t.type,null==e?C(t,n,r,i,o,s,a,c):N(e,t,i,o,s,a,c)},C=(e,t,n,r,s,u,l,d)=>{let f,p;const{type:m,props:g,shapeFlag:v,transition:y,dirs:b}=e;if(f=e.el=c(e.type,u,g&&g.is,g),8&v?h(f,e.children):16&v&&A(e.children,f,null,r,s,u&&"foreignObject"!==m,l,d),b&&xe(e,null,r,"created"),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(f,t,null,g[t],u,e.children,r,s,Z);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&cn(p,r,e)}R(f,e,e.scopeId,l,r),b&&xe(e,null,r,"beforeMount");const w=(!s||s&&!s.pendingBranch)&&y&&!y.persisted;w&&y.beforeEnter(f),o(f,t,n),((p=g&&g.onVnodeMounted)||w||b)&&St((()=>{p&&cn(p,r,e),w&&y.enter(f),b&&xe(e,null,r,"mounted")}),s)},R=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let o=0;o<r.length;o++)m(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;R(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},A=(e,t,n,r,i,o,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?on(e[u]):rn(e[u]);v(null,c,t,n,r,i,o,s,a)}},N=(e,t,n,r,o,s,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;n&&Ct(n,!1),(g=m.onVnodeBeforeUpdate)&&cn(g,n,t,e),f&&xe(t,e,n,"beforeUpdate"),n&&Ct(n,!0);const v=o&&"foreignObject"!==t.type;if(d?P(e.dynamicChildren,d,u,n,r,v,s):c||H(e,t,u,null,n,r,v,s,!1),l>0){if(16&l)x(u,t,p,m,n,r,o);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,o),4&l&&a(u,"style",p.style,m.style,o),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const s=i[t],c=p[s],l=m[s];l===c&&"value"!==s||a(u,s,c,l,o,e.children,n,r,Z)}}1&l&&e.children!==t.children&&h(u,t.children)}else c||null!=d||x(u,t,p,m,n,r,o);((g=m.onVnodeUpdated)||f)&&St((()=>{g&&cn(g,n,t,e),f&&xe(t,e,n,"updated")}),r)},P=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Pt||!Wt(c,u)||70&c.shapeFlag)?f(c.el):n;v(c,u,l,null,r,i,o,s,!0)}},x=(e,t,n,r,o,s,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,o,s,Z);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],d=n[u];l!==d&&"value"!==u&&a(e,u,d,l,c,t.children,o,s,Z)}"value"in r&&a(e,"value",n.value,r.value)}},D=(e,t,n,r,i,s,a,c,l)=>{const d=t.el=e?e.el:u(""),h=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(o(d,n,r),o(h,n,r),A(t.children,n,h,i,s,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(P(e.dynamicChildren,p,n,i,s,a,c),(null!=t.key||i&&t===i.subTree)&&Rt(e,t,!0)):H(e,t,n,h,i,s,a,c,l)},L=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):M(t,n,r,i,o,s,c):j(e,t,c)},M=(e,t,n,r,i,o,s)=>{const a=e.component=dn(e,r,i);if(he(e)&&(a.ctx.renderer=ee),wn(a),a.asyncDep){if(i&&i.registerDep(a,F),!e.el){const e=a.subTree=Zt(Dt);b(null,e,t,n)}}else F(a,e,t,n,i,o,s)},j=(e,t,n)=>{const r=t.component=e.component;if($(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,I(r.update),r.update()}else t.el=e.el,r.vnode=t},F=(e,t,n,o,s,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:o,parent:u,vnode:l}=e,d=n;0,Ct(e,!1),n?(n.el=l.el,B(e,n,c)):n=l,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&cn(t,u,n,l),Ct(e,!0);const h=U(e);0;const p=e.subTree;e.subTree=h,v(p,h,f(p.el),Y(p),e,s,a),n.el=h.el,null===d&&V(e,h.el),o&&St(o,s),(t=n.props&&n.props.onVnodeUpdated)&&St((()=>cn(t,u,n,l)),s)}else{let r;const{el:c,props:u}=t,{bm:l,m:d,parent:h}=e,f=de(t);if(Ct(e,!1),l&&(0,i.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&cn(r,h,t),Ct(e,!0),c&&ne){const n=()=>{e.subTree=U(e),ne(c,e.subTree,e,s,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=U(e);0,v(null,r,n,o,e,s,a),t.el=r.el}if(d&&St(d,s),!f&&(r=u&&u.onVnodeMounted)){const e=t;St((()=>cn(r,h,e)),s)}(256&t.shapeFlag||h&&de(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&St(e.a,s),e.isMounted=!0,t=n=o=null}},l=e.effect=new r.qq(u,(()=>w(d)),e.scope),d=e.update=()=>l.run();d.id=e.uid,Ct(e,!0),d()},B=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,ot(e,t.props,i,n),bt(e,t.children,n),(0,r.Jd)(),T(),(0,r.lk)()},H=(e,t,n,r,i,o,s,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void q(u,d,n,r,i,o,s,a,c);if(256&f)return void z(u,d,n,r,i,o,s,a,c)}8&p?(16&l&&Z(u,i,o),d!==u&&h(n,d)):16&l?16&p?q(u,d,n,r,i,o,s,a,c):Z(u,i,o,!0):(8&l&&h(n,""),16&p&&A(d,n,r,i,o,s,a,c))},z=(e,t,n,r,o,s,a,c,u)=>{e=e||i.Z6,t=t||i.Z6;const l=e.length,d=t.length,h=Math.min(l,d);let f;for(f=0;f<h;f++){const r=t[f]=u?on(t[f]):rn(t[f]);v(e[f],r,n,null,o,s,a,c,u)}l>d?Z(e,o,s,!0,!1,h):A(t,n,r,o,s,a,c,u,h)},q=(e,t,n,r,o,s,a,c,u)=>{let l=0;const d=t.length;let h=e.length-1,f=d-1;while(l<=h&&l<=f){const r=e[l],i=t[l]=u?on(t[l]):rn(t[l]);if(!Wt(r,i))break;v(r,i,n,null,o,s,a,c,u),l++}while(l<=h&&l<=f){const r=e[h],i=t[f]=u?on(t[f]):rn(t[f]);if(!Wt(r,i))break;v(r,i,n,null,o,s,a,c,u),h--,f--}if(l>h){if(l<=f){const e=f+1,i=e<d?t[e].el:r;while(l<=f)v(null,t[l]=u?on(t[l]):rn(t[l]),n,i,o,s,a,c,u),l++}}else if(l>f)while(l<=h)J(e[l],o,s,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?on(t[l]):rn(t[l]);null!=e.key&&g.set(e.key,l)}let y,b=0;const w=f-m+1;let _=!1,I=0;const E=new Array(w);for(l=0;l<w;l++)E[l]=0;for(l=p;l<=h;l++){const r=e[l];if(b>=w){J(r,o,s,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=m;y<=f;y++)if(0===E[y-m]&&Wt(r,t[y])){i=y;break}void 0===i?J(r,o,s,!0):(E[i-m]=l+1,i>=I?I=i:_=!0,v(r,t[i],n,null,o,s,a,c,u),b++)}const T=_?At(E):i.Z6;for(y=T.length-1,l=w-1;l>=0;l--){const e=m+l,i=t[e],h=e+1<d?t[e+1].el:r;0===E[l]?v(null,i,n,h,o,s,a,c,u):_&&(y<0||l!==T[y]?W(i,n,h,2):y--)}}},W=(e,t,n,r,i=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void W(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,ee);if(a===Pt){o(s,t,n);for(let e=0;e<u.length;e++)W(u[e],t,n,r);return void o(e.anchor,t,n)}if(a===Lt)return void E(e,t,n);const d=2!==r&&1&l&&c;if(d)if(0===r)c.beforeEnter(s),o(s,t,n),St((()=>c.enter(s)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>o(s,t,n),u=()=>{e(s,(()=>{a(),i&&i()}))};r?r(s,a,u):u()}else o(s,t,n)},J=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:d,dirs:h}=e;if(null!=a&&Et(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&h,p=!de(e);let m;if(p&&(m=s&&s.onVnodeBeforeUnmount)&&cn(m,t,e),6&l)X(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&xe(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,ee,r):u&&(o!==Pt||d>0&&64&d)?Z(u,t,n,!1,!0):(o===Pt&&384&d||!i&&16&l)&&Z(c,t,n),r&&K(e)}(p&&(m=s&&s.onVnodeUnmounted)||f)&&St((()=>{m&&cn(m,t,e),f&&xe(e,null,t,"unmounted")}),n)},K=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Pt)return void G(n,r);if(t===Lt)return void k(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},G=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},X=(e,t,n)=>{const{bum:r,scope:o,update:s,subTree:a,um:c}=e;r&&(0,i.ir)(r),o.stop(),s&&(s.active=!1,J(a,e,t,n)),c&&St(c,t),St((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Z=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)J(e[s],t,n,r,i)},Y=e=>6&e.shapeFlag?Y(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Q=(e,t,n)=>{null==e?t._vnode&&J(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),T(),S(),t._vnode=e},ee={p:v,um:J,m:W,r:K,mt:M,mc:A,pc:H,pbc:P,n:Y,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:Q,hydrate:te,createApp:It(Q,te)}}function Ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Rt(e,t,n=!1){const r=e.children,o=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(o))for(let i=0;i<r.length;i++){const e=r[i];let t=o[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[i]=on(o[i]),t.el=e.el),n||Rt(e,t)),t.type===xt&&(t.el=e.el)}}function At(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const Nt=e=>e.__isTeleport;const Pt=Symbol(void 0),xt=Symbol(void 0),Dt=Symbol(void 0),Lt=Symbol(void 0),Mt=[];let jt=null;function Ut(e=!1){Mt.push(jt=e?null:[])}function Ft(){Mt.pop(),jt=Mt[Mt.length-1]||null}let Bt=1;function $t(e){Bt+=e}function Ht(e){return e.dynamicChildren=Bt>0?jt||i.Z6:null,Ft(),Bt>0&&jt&&jt.push(e),e}function Vt(e,t,n,r,i,o){return Ht(Xt(e,t,n,r,i,o,!0))}function zt(e,t,n,r,i){return Ht(Zt(e,t,n,r,i,!0))}function qt(e){return!!e&&!0===e.__v_isVNode}function Wt(e,t){return e.type===t.type&&e.key===t.key}const Jt="__vInternal",Kt=({key:e})=>null!=e?e:null,Gt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:P,r:e,k:t,f:!!n}:e:null;function Xt(e,t=null,n=null,r=0,o=null,s=(e===Pt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Kt(t),ref:t&&Gt(t),scopeId:x,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:P};return c?(sn(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),Bt>0&&!a&&jt&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&jt.push(u),u}const Zt=Yt;function Yt(e,t=null,n=null,o=0,s=null,a=!1){if(e&&e!==Me||(e=Dt),qt(e)){const r=en(e,t,!0);return n&&sn(r,n),Bt>0&&!a&&jt&&(6&r.shapeFlag?jt[jt.indexOf(e)]=r:jt.push(r)),r.patchFlag|=-2,r}if(Cn(e)&&(e=e.__vccOpts),t){t=Qt(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:z(e)?128:Nt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Xt(e,t,n,o,s,c,a,!0)}function Qt(e){return e?(0,r.X3)(e)||Jt in e?(0,i.l7)({},e):e:null}function en(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:a}=e,c=t?an(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Kt(c),ref:t&&t.ref?n&&o?(0,i.kJ)(o)?o.concat(Gt(t)):[o,Gt(t)]:Gt(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pt?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&en(e.ssContent),ssFallback:e.ssFallback&&en(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx};return u}function tn(e=" ",t=0){return Zt(xt,null,e,t)}function nn(e="",t=!1){return t?(Ut(),zt(Dt,null,e)):Zt(Dt,null,e)}function rn(e){return null==e||"boolean"===typeof e?Zt(Dt):(0,i.kJ)(e)?Zt(Pt,null,e.slice()):"object"===typeof e?on(e):Zt(xt,null,String(e))}function on(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:en(e)}function sn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),sn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Jt in t?3===r&&P&&(1===P.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=P}}else(0,i.mf)(t)?(t={default:t,_ctx:P},n=32):(t=String(t),64&r?(n=16,t=[tn(t)]):n=8);e.children=t,e.shapeFlag|=n}function an(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],o=r[e];!o||n===o||(0,i.kJ)(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=r[e])}return t}function cn(e,t,n,r=null){s(e,t,7,[n,r])}const un=wt();let ln=0;function dn(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||un,a={uid:ln++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ct(o,s),emitsOptions:A(o,s),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:o.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=R.bind(null,a),e.ce&&e.ce(a),a}let hn=null;const fn=()=>hn||P,pn=e=>{hn=e,e.scope.on()},mn=()=>{hn&&hn.scope.off(),hn=null};function gn(e){return 4&e.vnode.shapeFlag}let vn,yn,bn=!1;function wn(e,t=!1){bn=t;const{props:n,children:r}=e.vnode,i=gn(e);it(e,n,i,t),yt(e,r);const o=i?_n(e,t):void 0;return bn=!1,o}function _n(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Ve));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?Sn(e):null;pn(e),(0,r.Jd)();const c=o(s,e,0,[e.props,n]);if((0,r.lk)(),mn(),(0,i.tI)(c)){if(c.then(mn,mn),t)return c.then((n=>{In(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else In(e,c,t)}else En(e,t)}function In(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),En(e,n)}function En(e,t,n){const o=e.type;if(!e.render){if(!t&&vn&&!o.render){const t=o.template||Ge(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:s},r),a);o.render=vn(t,c)}}e.render=o.render||i.dG,yn&&yn(e)}pn(e),(0,r.Jd)(),qe(e),(0,r.lk)(),mn()}function Tn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Sn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Tn(e))},slots:e.slots,emit:e.emit,expose:t}}function kn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in $e?$e[n](e):void 0},has(e,t){return t in e||t in $e}}))}function On(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Cn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Rn=(e,t)=>(0,r.Fl)(e,t,bn);function An(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?qt(t)?Zt(e,null,[t]):Zt(e,t):Zt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&qt(n)&&(n=[n]),Zt(e,t,n))}const Nn=Symbol(""),Pn=()=>{{const e=J(Nn);return e}};const xn="3.2.45"},9242:function(e,t,n){"use strict";n.d(t,{nr:function(){return Q},ri:function(){return re}});n(7658);var r=n(7139),i=n(3396);n(4870);const o="http://www.w3.org/2000/svg",s="undefined"!==typeof document?document:null,a=s&&s.createElement("template"),c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?s.createElementNS(o,e):s.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>s.createTextNode(e),createComment:e=>s.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>s.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{a.innerHTML=r?`<svg>${e}</svg>`:e;const i=a.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function l(e,t,n){const i=e.style,o=(0,r.HD)(n);if(n&&!o){for(const e in n)h(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&h(i,e,"")}else{const r=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const d=/\s*!important$/;function h(e,t,n){if((0,r.kJ)(n))n.forEach((n=>h(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=m(e,t);d.test(n)?e.setProperty((0,r.rs)(i),n.replace(d,""),"important"):e[i]=n}}const f=["Webkit","Moz","ms"],p={};function m(e,t){const n=p[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return p[t]=i;i=(0,r.kC)(i);for(let r=0;r<f.length;r++){const n=f[r]+i;if(n in e)return p[t]=n}return t}const g="http://www.w3.org/1999/xlink";function v(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function y(e,t,n,i,o,s,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,o,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}function b(e,t,n,r){e.addEventListener(t,n,r)}function w(e,t,n,r){e.removeEventListener(t,n,r)}function _(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=E(t);if(r){const s=o[t]=O(r,i);b(e,n,s,a)}else s&&(w(e,n,s,a),o[t]=void 0)}}const I=/(?:Once|Passive|Capture)$/;function E(e){let t;if(I.test(e)){let n;t={};while(n=e.match(I))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let T=0;const S=Promise.resolve(),k=()=>T||(S.then((()=>T=0)),T=Date.now());function O(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.$d)(C(e,n.value),t,5,[e])};return n.value=e,n.attached=k(),n}function C(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const R=/^on[a-z]/,A=(e,t,n,i,o=!1,s,a,c,d)=>{"class"===t?u(e,i,o):"style"===t?l(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||_(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):N(e,t,i,o))?y(e,t,i,s,a,c,d):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),v(e,t,i,o))};function N(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&R.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!R.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const P="transition",x="animation",D=(e,{slots:t})=>(0,i.h)(i.P$,U(e),t);D.displayName="Transition";const L={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},M=(D.props=(0,r.l7)({},i.P$.props,L),(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),j=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function U(e){const t={};for(const r in e)r in L||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=s,appearActiveClass:l=a,appearToClass:d=c,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=F(o),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:w,onLeave:_,onLeaveCancelled:I,onBeforeAppear:E=y,onAppear:T=b,onAppearCancelled:S=w}=t,k=(e,t,n)=>{H(e,t?d:c),H(e,t?l:a),n&&n()},O=(e,t)=>{e._isLeaving=!1,H(e,h),H(e,p),H(e,f),t&&t()},C=e=>(t,n)=>{const r=e?T:b,o=()=>k(t,e,n);M(r,[t,o]),V((()=>{H(t,e?u:s),$(t,e?d:c),j(r)||q(t,i,g,o)}))};return(0,r.l7)(t,{onBeforeEnter(e){M(y,[e]),$(e,s),$(e,a)},onBeforeAppear(e){M(E,[e]),$(e,u),$(e,l)},onEnter:C(!1),onAppear:C(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>O(e,t);$(e,h),G(),$(e,f),V((()=>{e._isLeaving&&(H(e,h),$(e,p),j(_)||q(e,i,v,n))})),M(_,[e,n])},onEnterCancelled(e){k(e,!1),M(w,[e])},onAppearCancelled(e){k(e,!0),M(S,[e])},onLeaveCancelled(e){O(e),M(I,[e])}})}function F(e){if(null==e)return null;if((0,r.Kn)(e))return[B(e.enter),B(e.leave)];{const t=B(e);return[t,t]}}function B(e){const t=(0,r.He)(e);return t}function $(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function H(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function V(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let z=0;function q(e,t,n,r){const i=e._endId=++z,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=W(e,t);if(!s)return r();const u=s+"end";let l=0;const d=()=>{e.removeEventListener(u,h),o()},h=t=>{t.target===e&&++l>=c&&d()};setTimeout((()=>{l<c&&d()}),a+1),e.addEventListener(u,h)}function W(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${P}Delay`),o=r(`${P}Duration`),s=J(i,o),a=r(`${x}Delay`),c=r(`${x}Duration`),u=J(a,c);let l=null,d=0,h=0;t===P?s>0&&(l=P,d=s,h=o.length):t===x?u>0&&(l=x,d=u,h=c.length):(d=Math.max(s,u),l=d>0?s>u?P:x:null,h=l?l===P?o.length:c.length:0);const f=l===P&&/\b(transform|all)(,|$)/.test(r(`${P}Property`).toString());return{type:l,timeout:d,propCount:h,hasTransform:f}}function J(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>K(t)+K(e[n]))))}function K(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function G(){return document.body.offsetHeight}new WeakMap,new WeakMap;const X=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function Z(e){e.target.composing=!0}function Y(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Q={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e._assign=X(o);const s=i||o.props&&"number"===o.props.type;b(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),s&&(i=(0,r.He)(i)),e._assign(i)})),n&&b(e,"change",(()=>{e.value=e.value.trim()})),t||(b(e,"compositionstart",Z),b(e,"compositionend",Y),b(e,"change",Y))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:o}},s){if(e._assign=X(s),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((o||"number"===e.type)&&(0,r.He)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const ee=(0,r.l7)({patchProp:A},c);let te;function ne(){return te||(te=(0,i.Us)(ee))}const re=(...e)=>{const t=ne().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=ie(e);if(!i)return;const o=t._component;(0,r.mf)(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function ie(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){"use strict";n.d(t,{C_:function(){return d},DM:function(){return x},E9:function(){return ie},F7:function(){return S},Gg:function(){return q},HD:function(){return M},He:function(){return ne},Kn:function(){return U},NO:function(){return E},Nj:function(){return te},Od:function(){return C},PO:function(){return V},Pq:function(){return f},RI:function(){return A},S0:function(){return z},W7:function(){return H},WV:function(){return g},Z6:function(){return _},_A:function(){return K},_N:function(){return P},aU:function(){return Q},dG:function(){return I},e1:function(){return o},fY:function(){return r},hR:function(){return Y},hq:function(){return v},ir:function(){return ee},j5:function(){return s},kC:function(){return Z},kJ:function(){return N},kT:function(){return w},l7:function(){return O},mf:function(){return L},rs:function(){return X},tI:function(){return F},tR:function(){return k},yA:function(){return p},yk:function(){return j},zw:function(){return y}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);function s(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=M(r)?l(r):s(r);if(i)for(const e in i)t[e]=i[e]}return t}return M(e)||U(e)?e:void 0}const a=/;(?![^(]*\))/g,c=/:([^]+)/,u=/\/\*.*?\*\//gs;function l(e){const t={};return e.replace(u,"").split(a).forEach((e=>{if(e){const n=e.split(c);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function d(e){let t="";if(M(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=d(e[n]);r&&(t+=r+" ")}else if(U(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const h="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f=r(h);function p(e){return!!e||""===e}function m(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=g(e[r],t[r]);return n}function g(e,t){if(e===t)return!0;let n=D(e),r=D(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=j(e),r=j(t),n||r)return e===t;if(n=N(e),r=N(t),n||r)return!(!n||!r)&&m(e,t);if(n=U(e),r=U(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!g(e[n],t[n]))return!1}}return String(e)===String(t)}function v(e,t){return e.findIndex((e=>g(e,t)))}const y=e=>M(e)?e:null==e?"":N(e)||U(e)&&(e.toString===B||!L(e.toString))?JSON.stringify(e,b,2):String(e),b=(e,t)=>t&&t.__v_isRef?b(e,t.value):P(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:x(t)?{[`Set(${t.size})`]:[...t.values()]}:!U(t)||N(t)||V(t)?t:String(t),w={},_=[],I=()=>{},E=()=>!1,T=/^on[^a-z]/,S=e=>T.test(e),k=e=>e.startsWith("onUpdate:"),O=Object.assign,C=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},R=Object.prototype.hasOwnProperty,A=(e,t)=>R.call(e,t),N=Array.isArray,P=e=>"[object Map]"===$(e),x=e=>"[object Set]"===$(e),D=e=>"[object Date]"===$(e),L=e=>"function"===typeof e,M=e=>"string"===typeof e,j=e=>"symbol"===typeof e,U=e=>null!==e&&"object"===typeof e,F=e=>U(e)&&L(e.then)&&L(e.catch),B=Object.prototype.toString,$=e=>B.call(e),H=e=>$(e).slice(8,-1),V=e=>"[object Object]"===$(e),z=e=>M(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,q=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),W=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},J=/-(\w)/g,K=W((e=>e.replace(J,((e,t)=>t?t.toUpperCase():"")))),G=/\B([A-Z])/g,X=W((e=>e.replace(G,"-$1").toLowerCase())),Z=W((e=>e.charAt(0).toUpperCase()+e.slice(1))),Y=W((e=>e?`on${Z(e)}`:"")),Q=(e,t)=>!Object.is(e,t),ee=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},te=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ne=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let re;const ie=()=>re||(re="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},6237:function(e){e.exports="object"==typeof self?self.FormData:window.FormData},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},3379:function(e,t,n){"use strict";n.d(t,{Xp:function(){return O}});var r=n(3396),i=n(7139),o=n(4870),s=n(9242),a=Object.defineProperty,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t,n)=>(c(e,"symbol"!==typeof t?t+"":t,n),n);const l=["toast-top-right","toast-bottom-right","toast-bottom-left","toast-top-left","toast-top-full-width","toast-bottom-full-width","toast-top-center","toast-bottom-center"];var d=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const h=(0,r.aZ)({name:"ToastProgress",props:{percent:{type:Number,default:100}},computed:{styleObject(){return{width:`${this.percent.toString()}%`}}}}),f=h;function p(e,t,n,o,s,a){return(0,r.wg)(),(0,r.iD)("div",{class:"toast-progress",style:(0,i.j5)(e.styleObject)},null,4)}var m=d(f,[["render",p]]);class g{constructor(e){u(this,"id"),u(this,"params"),u(this,"remaning"),u(this,"estimated"),u(this,"times"),u(this,"stepTime"),this.params=e,this.id=0,this.remaning=0,this.estimated=0,this.times={},this.stepTime="undefined"===typeof e.stepTime?50:e.stepTime}callback(){this.times.callback=g.getTime(),this.remaning-=this.stepTime,this.estimated+=this.stepTime,this.callCallbackFN("callback"),this.remaning<=0&&this.finish()}static getTime(){return(new Date).getTime()}getPercent(){return Math.floor(this.remaning/this.params.totalTime*100)}start(){this.times.started=g.getTime(),this.callCallbackFN("before:start"),this.remaning=this.params.totalTime,this.setupInterval(),this.callCallbackFN("after:start")}finish(){this.times.finished=g.getTime(),this.callCallbackFN("before:finish"),this.clearInterval(),this.callCallbackFN("after:finish")}stop(){this.times.stoped=g.getTime(),this.callCallbackFN("before:stop"),this.clearInterval(),this.callCallbackFN("after:stop")}pause(){this.times.paused=g.getTime(),this.callCallbackFN("before:pause"),this.clearInterval(),this.callCallbackFN("after:pause")}resume(){this.times.resumed=g.getTime(),this.callCallbackFN("before:resume"),this.setupInterval(),this.callCallbackFN("after:resume")}callCallbackFN(e){var t;(null==(t=this.params)?void 0:t.callbackFunctions)&&"function"===typeof this.params.callbackFunctions[e]&&this.params.callbackFunctions[e]()}clearInterval(){clearInterval(this.id)}setupInterval(){this.id=setInterval((()=>{this.callback()}),this.stepTime)}}const v=(0,r.aZ)({name:"Toast",components:{ToastProgress:m},props:{data:{type:Object,default:()=>({})}},data(){return{timeout:0,progressbar:!1,progressBarTimer:void 0,timeoutTimer:void 0}},mounted(){this.progressBarTimer&&this.progressBarTimer.start(),this.timeoutTimer&&this.timeoutTimer.start()},created(){"undefined"!==typeof this.data.timeout&&0!==this.data.timeout?(this.timeoutTimer=new g({totalTime:this.data.timeout,stepTime:50,callbackFunctions:{"after:finish":()=>{this.close()}}}),!1!==this.data.progressbar&&(this.progressbar=!0,this.progressBarTimer=new g({totalTime:this.data.timeout}))):null!==this.data.progressBarValue&&!1!==this.data.progressbar&&(this.progressbar=!0)},computed:{classNames(){var e;return(null==(e=this.data)?void 0:e.classNames)?["toast",`toast-${this.data.type}`].concat(this.data.classNames):["toast",`toast-${this.data.type}`]},progressBarPercent(){return null!=this.data.progressBarValue?this.data.progressBarValue:void 0!==this.progressBarTimer?this.progressBarTimer.getPercent():0}},beforeUnmount(){null!=this.progressBarTimer&&this.progressBarTimer.stop(),null!=this.timeoutTimer&&this.timeoutTimer.stop()},methods:{onMouseOver(){"undefined"!==typeof this.data.onMouseOver&&this.data.onMouseOver(),this.data.closeOnHover&&(null!=this.progressBarTimer&&this.progressBarTimer.pause(),null!=this.timeoutTimer&&this.timeoutTimer.pause())},onMouseOut(){"undefined"!==typeof this.data.onMouseOut&&this.data.onMouseOut(),this.data.closeOnHover&&(null!=this.progressBarTimer&&this.progressBarTimer.resume(),null!=this.timeoutTimer&&this.timeoutTimer.resume())},clicked(){"undefined"!==typeof this.data.onClicked&&this.data.onClicked(),this.clickClose()},clickClose(){"undefined"!==typeof this.data.clickClose&&!1===this.data.clickClose||this.close()},close(){const e=this.$parent;e.Close(this.data)}}}),y=["innerHTML"],b=["innerHTML"];function w(e,t,n,o,s,a){const c=(0,r.up)("toast-progress");return(0,r.wg)(),(0,r.iD)("div",{style:(0,i.j5)([e.data.style,{display:"block"}]),class:(0,i.C_)(e.classNames),onClick:t[0]||(t[0]=t=>e.clicked()),onMouseover:t[1]||(t[1]=(...t)=>e.onMouseOver&&e.onMouseOver(...t)),onMouseout:t[2]||(t[2]=(...t)=>e.onMouseOut&&e.onMouseOut(...t))},[e.progressbar?((0,r.wg)(),(0,r.j4)(c,{key:0,percent:e.progressBarPercent,ref:"progressBar"},null,8,["percent"])):(0,r.kq)("",!0),e.data.title?((0,r.wg)(),(0,r.iD)("div",{key:1,class:"toast-title",innerHTML:e.data.title},null,8,y)):(0,r.kq)("",!0),e.data.msg?((0,r.wg)(),(0,r.iD)("div",{key:2,class:"toast-message",innerHTML:e.data.msg},null,8,b)):(0,r.kq)("",!0)],38)}var _=d(v,[["render",w]]);const I=(0,o.qj)({}),E=(0,o.qj)({}),T=(0,r.aZ)({name:"ToastContainer",props:{defaultClassNames:{type:Array,default:()=>[]},defaultPosition:{type:String,default:()=>"toast-top-right"},defaultType:{type:String,default:()=>"success"},defaultCloseOnHover:{type:Boolean,default:()=>!0},defaultTimeout:{type:Number,default:()=>5e3},defaultProgressBar:{type:Boolean,default:()=>!0},defaultProgressBarValue:{type:Number,default:()=>{}},defaultPreventDuplicates:{type:Boolean,default:()=>!1},defaultStyle:{type:Object,default:()=>({})}},components:{Toast:_},data(){for(let e=0;e<=l.length-1;e+=1)I[l[e]]={};return{positions:l,list:I,index:0,savedNames:E}},created(){},mounted(){},methods:{addToast(e){const t=e;this.index+=1,t.index=this.index,this.list[t.position][this.index]=t,"undefined"!==typeof t.name&&(this.savedNames[t.name]=t),this.$nextTick((()=>{"undefined"!==typeof t.onCreated&&t.onCreated()}))},removeByName(e){"undefined"!==typeof this.savedNames[e]&&(this.Close(this.savedNames[e]),delete this.savedNames[e])},removeToast(e){const t=this.list[e.position][e.index];"undefined"!==typeof t&&(delete this.list[e.position][e.index],this.$nextTick((()=>{"undefined"!==typeof e.onClosed&&e.onClosed()})))},setProgress(e,t){const n=this.list[e.position][e.index];"undefined"!==typeof n&&(n.progressBarValue=t)},Add(e){return this.AddData(this.processObjectData(e))},AddData(e){if("object"!==typeof e)return!1;if(e.preventDuplicates){const t=Object.keys(this.list[e.position]);for(let n=0;n<t.length;n+=1)if(this.list[e.position][t[n]].title===e.title&&this.list[e.position][t[n]].msg===e.msg)return!1}return this.addToast(e),e},processObjectData(e){const t=e;return"object"===typeof t&&"undefined"!==typeof t.msg?("undefined"===typeof t.classNames&&(t.classNames=this.defaultClassNames),"undefined"===typeof t.position&&(t.position=this.defaultPosition),"undefined"===typeof t.type&&(t.type=this.defaultType),"undefined"===typeof t.timeout&&(t.timeout=this.defaultTimeout),"undefined"===typeof t.progressbar&&(t.progressbar=this.defaultProgressBar),"undefined"===typeof t.progressBarValue&&(t.progressBarValue=this.defaultProgressBarValue),"undefined"===typeof t.closeOnHover&&(t.closeOnHover=this.defaultCloseOnHover),"undefined"===typeof t.preventDuplicates&&(t.preventDuplicates=this.defaultPreventDuplicates),"undefined"===typeof t.style&&(t.style=this.defaultStyle),t):{index:0,msg:t.toString(),position:this.defaultPosition,type:this.defaultType,timeout:this.defaultTimeout,closeOnHover:this.defaultCloseOnHover,progressbar:this.defaultProgressBar,progressBarValue:this.defaultProgressBarValue,preventDuplicates:this.defaultPreventDuplicates,style:this.defaultStyle,classNames:this.defaultClassNames}},e(e,t){const n=this.processObjectData(e);return n.type="error",t&&(n.title=t),this.AddData(n)},s(e,t){const n=this.processObjectData(e);return n.type="success",t&&(n.title=t),this.AddData(n)},w(e,t){const n=this.processObjectData(e);return n.type="warning",t&&(n.title=t),this.AddData(n)},i(e,t){const n=this.processObjectData(e);return n.type="info",t&&(n.title=t),this.AddData(n)},Close(e){this.removeToast(e)},removeByType(e){for(let t=0;t<this.positions.length;t+=1){const n=Object.keys(this.list[this.positions[t]]);for(let r=0;r<n.length;r+=1)this.list[this.positions[t]][n[r]].type===e&&this.Close(this.list[this.positions[t]][n[r]])}},clearAll(){for(let e=0;e<this.positions.length;e+=1){const t=Object.keys(this.list[this.positions[e]]);for(let n=0;n<t.length;n+=1)this.Close(this.list[this.positions[e]][t[n]])}}}});function S(e,t,n,o,s,a){const c=(0,r.up)("Toast");return(0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.list,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,i.C_)("toast-container "+t),key:t},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e,(e=>((0,r.wg)(),(0,r.j4)(c,{data:e,key:e.index},null,8,["data"])))),128))],2)))),128)}var k=d(T,[["render",S]]);const O={install:(e,t)=>{const n=(0,s.ri)(k,t),r=document.createElement("div"),i=n.mount(r);document.body&&document.body.appendChild(r),e.config.globalProperties.$toastr=i,e.provide("toastr",i)}}},9684:function(e,t,n){"use strict";n.d(t,{Jn:function(){return J},KN:function(){return X},Mq:function(){return G},Xd:function(){return H},ZF:function(){return K},qX:function(){return V}});n(7658);var r=n(7142),i=n(5168),o=n(223),s=n(3831);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(c(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function c(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const u="@firebase/app",l="0.9.1",d=new i.Yd("@firebase/app"),h="@firebase/app-compat",f="@firebase/analytics-compat",p="@firebase/analytics",m="@firebase/app-check-compat",g="@firebase/app-check",v="@firebase/auth",y="@firebase/auth-compat",b="@firebase/database",w="@firebase/database-compat",_="@firebase/functions",I="@firebase/functions-compat",E="@firebase/installations",T="@firebase/installations-compat",S="@firebase/messaging",k="@firebase/messaging-compat",O="@firebase/performance",C="@firebase/performance-compat",R="@firebase/remote-config",A="@firebase/remote-config-compat",N="@firebase/storage",P="@firebase/storage-compat",x="@firebase/firestore",D="@firebase/firestore-compat",L="firebase",M="9.16.0",j="[DEFAULT]",U={[u]:"fire-core",[h]:"fire-core-compat",[p]:"fire-analytics",[f]:"fire-analytics-compat",[g]:"fire-app-check",[m]:"fire-app-check-compat",[v]:"fire-auth",[y]:"fire-auth-compat",[b]:"fire-rtdb",[w]:"fire-rtdb-compat",[_]:"fire-fn",[I]:"fire-fn-compat",[E]:"fire-iid",[T]:"fire-iid-compat",[S]:"fire-fcm",[k]:"fire-fcm-compat",[O]:"fire-perf",[C]:"fire-perf-compat",[R]:"fire-rc",[A]:"fire-rc-compat",[N]:"fire-gcs",[P]:"fire-gcs-compat",[x]:"fire-fst",[D]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},F=new Map,B=new Map;function $(e,t){try{e.container.addComponent(t)}catch(n){d.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function H(e){const t=e.name;if(B.has(t))return d.debug(`There were multiple attempts to register component ${t}.`),!1;B.set(t,e);for(const n of F.values())$(n,e);return!0}function V(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},q=new o.LL("app","Firebase",z);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw q.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=M;function K(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:j,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!==typeof s||!s)throw q.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.aH)()),!n)throw q.create("no-options");const a=F.get(s);if(a){if((0,o.vZ)(n,a.options)&&(0,o.vZ)(i,a.config))return a;throw q.create("duplicate-app",{appName:s})}const c=new r.H0(s);for(const r of B.values())c.addComponent(r);const u=new W(n,i,c);return F.set(s,u),u}function G(e=j){const t=F.get(e);if(!t&&e===j)return K();if(!t)throw q.create("no-app",{appName:e});return t}function X(e,t,n){var i;let o=null!==(i=U[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void d.warn(e.join(" "))}H(new r.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="firebase-heartbeat-database",Y=1,Q="firebase-heartbeat-store";let ee=null;function te(){return ee||(ee=(0,s.X3)(Z,Y,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Q)}}}).catch((e=>{throw q.create("idb-open",{originalErrorMessage:e.message})}))),ee}async function ne(e){try{const t=await te();return t.transaction(Q).objectStore(Q).get(ie(e))}catch(t){if(t instanceof o.ZR)d.warn(t.message);else{const e=q.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});d.warn(e.message)}}}async function re(e,t){try{const n=await te(),r=n.transaction(Q,"readwrite"),i=r.objectStore(Q);return await i.put(t,ie(e)),r.done}catch(n){if(n instanceof o.ZR)d.warn(n.message);else{const e=q.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});d.warn(e.message)}}}function ie(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=1024,se=2592e6;class ae{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new le(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=ce();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=se})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ce(),{heartbeatsToSend:t,unsentEntries:n}=ue(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ce(){const e=new Date;return e.toISOString().substring(0,10)}function ue(e,t=oe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),de(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),de(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class le{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ne(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function de(e){return(0,o.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){H(new r.wA("platform-logger",(e=>new a(e)),"PRIVATE")),H(new r.wA("heartbeat",(e=>new ae(e)),"PRIVATE")),X(u,l,e),X(u,l,"esm2017"),X("fire-js","")}he("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Yd:function(){return u},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},6943:function(e,t,n){"use strict";n.d(t,{Z:function(){return xt}});n(7658);function r(e,t){return function(){return e.apply(t,arguments)}}const{toString:i}=Object.prototype,{getPrototypeOf:o}=Object,s=(e=>t=>{const n=i.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),a=e=>(e=e.toLowerCase(),t=>s(t)===e),c=e=>t=>typeof t===e,{isArray:u}=Array,l=c("undefined");function d(e){return null!==e&&!l(e)&&null!==e.constructor&&!l(e.constructor)&&m(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const h=a("ArrayBuffer");function f(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&h(e.buffer),t}const p=c("string"),m=c("function"),g=c("number"),v=e=>null!==e&&"object"===typeof e,y=e=>!0===e||!1===e,b=e=>{if("object"!==s(e))return!1;const t=o(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},w=a("Date"),_=a("File"),I=a("Blob"),E=a("FileList"),T=e=>v(e)&&m(e.pipe),S=e=>{const t="[object FormData]";return e&&("function"===typeof FormData&&e instanceof FormData||i.call(e)===t||m(e.toString)&&e.toString()===t)},k=a("URLSearchParams"),O=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function C(e,t,{allOwnKeys:n=!1}={}){if(null===e||"undefined"===typeof e)return;let r,i;if("object"!==typeof e&&(e=[e]),u(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let s;for(r=0;r<o;r++)s=i[r],t.call(null,e[s],s,e)}}function R(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;while(i-- >0)if(r=n[i],t===r.toLowerCase())return r;return null}const A=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),N=e=>!l(e)&&e!==A;function P(){const{caseless:e}=N(this)&&this||{},t={},n=(n,r)=>{const i=e&&R(t,r)||r;b(t[i])&&b(n)?t[i]=P(t[i],n):b(n)?t[i]=P({},n):u(n)?t[i]=n.slice():t[i]=n};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&C(arguments[r],n);return t}const x=(e,t,n,{allOwnKeys:i}={})=>(C(t,((t,i)=>{n&&m(t)?e[i]=r(t,n):e[i]=t}),{allOwnKeys:i}),e),D=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),L=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},M=(e,t,n,r)=>{let i,s,a;const c={};if(t=t||{},null==e)return t;do{i=Object.getOwnPropertyNames(e),s=i.length;while(s-- >0)a=i[s],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&o(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},j=(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},U=e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!g(t))return null;const n=new Array(t);while(t-- >0)n[t]=e[t];return n},F=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&o(Uint8Array)),B=(e,t)=>{const n=e&&e[Symbol.iterator],r=n.call(e);let i;while((i=r.next())&&!i.done){const n=i.value;t.call(e,n[0],n[1])}},$=(e,t)=>{let n;const r=[];while(null!==(n=e.exec(t)))r.push(n);return r},H=a("HTMLFormElement"),V=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),z=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),q=a("RegExp"),W=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};C(n,((n,i)=>{!1!==t(n,i,e)&&(r[i]=n)})),Object.defineProperties(e,r)},J=e=>{W(e,((t,n)=>{if(m(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];m(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},K=(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return u(e)?r(e):r(String(e).split(t)),n},G=()=>{},X=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Z=e=>{const t=new Array(10),n=(e,r)=>{if(v(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=u(e)?[]:{};return C(e,((e,t)=>{const o=n(e,r+1);!l(o)&&(i[t]=o)})),t[r]=void 0,i}}return e};return n(e,0)};var Y={isArray:u,isArrayBuffer:h,isBuffer:d,isFormData:S,isArrayBufferView:f,isString:p,isNumber:g,isBoolean:y,isObject:v,isPlainObject:b,isUndefined:l,isDate:w,isFile:_,isBlob:I,isRegExp:q,isFunction:m,isStream:T,isURLSearchParams:k,isTypedArray:F,isFileList:E,forEach:C,merge:P,extend:x,trim:O,stripBOM:D,inherits:L,toFlatObject:M,kindOf:s,kindOfTest:a,endsWith:j,toArray:U,forEachEntry:B,matchAll:$,isHTMLForm:H,hasOwnProperty:z,hasOwnProp:z,reduceDescriptors:W,freezeMethods:J,toObjectSet:K,toCamelCase:V,noop:G,toFiniteNumber:X,findKey:R,global:A,isContextDefined:N,toJSONObject:Z};n(541);function Q(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}Y.inherits(Q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Y.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ee=Q.prototype,te={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{te[e]={value:e}})),Object.defineProperties(Q,te),Object.defineProperty(ee,"isAxiosError",{value:!0}),Q.from=(e,t,n,r,i,o)=>{const s=Object.create(ee);return Y.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Q.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};var ne=Q,re=n(6237),ie=re;function oe(e){return Y.isPlainObject(e)||Y.isArray(e)}function se(e){return Y.endsWith(e,"[]")?e.slice(0,-2):e}function ae(e,t,n){return e?e.concat(t).map((function(e,t){return e=se(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}function ce(e){return Y.isArray(e)&&!e.some(oe)}const ue=Y.toFlatObject(Y,{},null,(function(e){return/^is[A-Z]/.test(e)}));function le(e){return e&&Y.isFunction(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator]}function de(e,t,n){if(!Y.isObject(e))throw new TypeError("target must be an object");t=t||new(ie||FormData),n=Y.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Y.isUndefined(t[e])}));const r=n.metaTokens,i=n.visitor||l,o=n.dots,s=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&le(t);if(!Y.isFunction(i))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(Y.isDate(e))return e.toISOString();if(!c&&Y.isBlob(e))throw new ne("Blob is not supported. Use a Buffer instead.");return Y.isArrayBuffer(e)||Y.isTypedArray(e)?c&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,i){let a=e;if(e&&!i&&"object"===typeof e)if(Y.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(Y.isArray(e)&&ce(e)||Y.isFileList(e)||Y.endsWith(n,"[]")&&(a=Y.toArray(e)))return n=se(n),a.forEach((function(e,r){!Y.isUndefined(e)&&null!==e&&t.append(!0===s?ae([n],r,o):null===s?n:n+"[]",u(e))})),!1;return!!oe(e)||(t.append(ae(i,n,o),u(e)),!1)}const d=[],h=Object.assign(ue,{defaultVisitor:l,convertValue:u,isVisitable:oe});function f(e,n){if(!Y.isUndefined(e)){if(-1!==d.indexOf(e))throw Error("Circular reference detected in "+n.join("."));d.push(e),Y.forEach(e,(function(e,r){const o=!(Y.isUndefined(e)||null===e)&&i.call(t,e,Y.isString(r)?r.trim():r,n,h);!0===o&&f(e,n?n.concat(r):[r])})),d.pop()}}if(!Y.isObject(e))throw new TypeError("data must be an object");return f(e),t}var he=de;function fe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function pe(e,t){this._pairs=[],e&&he(e,this,t)}const me=pe.prototype;me.append=function(e,t){this._pairs.push([e,t])},me.toString=function(e){const t=e?function(t){return e.call(this,t,fe)}:fe;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var ge=pe;function ve(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ye(e,t,n){if(!t)return e;const r=n&&n.encode||ve,i=n&&n.serialize;let o;if(o=i?i(t,n):Y.isURLSearchParams(t)?t.toString():new ge(t,n).toString(r),o){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}class be{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Y.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}var we=be,_e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ie="undefined"!==typeof URLSearchParams?URLSearchParams:ge,Ee=FormData;const Te=(()=>{let e;return("undefined"===typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!==typeof window&&"undefined"!==typeof document)})(),Se=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)();var ke={isBrowser:!0,classes:{URLSearchParams:Ie,FormData:Ee,Blob:Blob},isStandardBrowserEnv:Te,isStandardBrowserWebWorkerEnv:Se,protocols:["http","https","file","blob","url","data"]};function Oe(e,t){return he(e,new ke.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ke.isNode&&Y.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}function Ce(e){return Y.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}function Re(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Ae(e){function t(e,n,r,i){let o=e[i++];const s=Number.isFinite(+o),a=i>=e.length;if(o=!o&&Y.isArray(r)?r.length:o,a)return Y.hasOwnProp(r,o)?r[o]=[r[o],n]:r[o]=n,!s;r[o]&&Y.isObject(r[o])||(r[o]=[]);const c=t(e,n,r[o],i);return c&&Y.isArray(r[o])&&(r[o]=Re(r[o])),!s}if(Y.isFormData(e)&&Y.isFunction(e.entries)){const n={};return Y.forEachEntry(e,((e,r)=>{t(Ce(e),r,n,0)})),n}return null}var Ne=Ae;const Pe={"Content-Type":void 0};function xe(e,t,n){if(Y.isString(e))try{return(t||JSON.parse)(e),Y.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}const De={transitional:_e,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=Y.isObject(e);i&&Y.isHTMLForm(e)&&(e=new FormData(e));const o=Y.isFormData(e);if(o)return r&&r?JSON.stringify(Ne(e)):e;if(Y.isArrayBuffer(e)||Y.isBuffer(e)||Y.isStream(e)||Y.isFile(e)||Y.isBlob(e))return e;if(Y.isArrayBufferView(e))return e.buffer;if(Y.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Oe(e,this.formSerializer).toString();if((s=Y.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return he(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),xe(e)):e}],transformResponse:[function(e){const t=this.transitional||De.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&Y.isString(e)&&(n&&!this.responseType||r)){const n=t&&t.silentJSONParsing,o=!n&&r;try{return JSON.parse(e)}catch(i){if(o){if("SyntaxError"===i.name)throw ne.from(i,ne.ERR_BAD_RESPONSE,this,null,this.response);throw i}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ke.classes.FormData,Blob:ke.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Y.forEach(["delete","get","head"],(function(e){De.headers[e]={}})),Y.forEach(["post","put","patch"],(function(e){De.headers[e]=Y.merge(Pe)}));var Le=De;const Me=Y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var je=e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&Me[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const Ue=Symbol("internals");function Fe(e){return e&&String(e).trim().toLowerCase()}function Be(e){return!1===e||null==e?e:Y.isArray(e)?e.map(Be):String(e)}function $e(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(e))t[r[1]]=r[2];return t}function He(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function Ve(e,t,n,r){return Y.isFunction(r)?r.call(this,t,n):Y.isString(t)?Y.isString(r)?-1!==t.indexOf(r):Y.isRegExp(r)?r.test(t):void 0:void 0}function ze(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}function qe(e,t){const n=Y.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}class We{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function i(e,t,n){const i=Fe(t);if(!i)throw new Error("header name must be a non-empty string");const o=Y.findKey(r,i);(!o||void 0===r[o]||!0===n||void 0===n&&!1!==r[o])&&(r[o||t]=Be(e))}const o=(e,t)=>Y.forEach(e,((e,n)=>i(e,n,t)));return Y.isPlainObject(e)||e instanceof this.constructor?o(e,t):Y.isString(e)&&(e=e.trim())&&!He(e)?o(je(e),t):null!=e&&i(t,e,n),this}get(e,t){if(e=Fe(e),e){const n=Y.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return $e(e);if(Y.isFunction(t))return t.call(this,e,n);if(Y.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Fe(e),e){const n=Y.findKey(this,e);return!(!n||t&&!Ve(this,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=Fe(e),e){const i=Y.findKey(n,e);!i||t&&!Ve(n,n[i],i,t)||(delete n[i],r=!0)}}return Y.isArray(e)?e.forEach(i):i(e),r}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return Y.forEach(this,((r,i)=>{const o=Y.findKey(n,i);if(o)return t[o]=Be(r),void delete t[i];const s=e?ze(i):String(i).trim();s!==i&&delete t[i],t[s]=Be(r),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Y.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&Y.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=this[Ue]=this[Ue]={accessors:{}},n=t.accessors,r=this.prototype;function i(e){const t=Fe(e);n[t]||(qe(r,e),n[t]=!0)}return Y.isArray(e)?e.forEach(i):i(e),this}}We.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),Y.freezeMethods(We.prototype),Y.freezeMethods(We);var Je=We;function Ke(e,t){const n=this||Le,r=t||n,i=Je.from(r.headers);let o=r.data;return Y.forEach(e,(function(e){o=e.call(n,o,i.normalize(),t?t.status:void 0)})),i.normalize(),o}function Ge(e){return!(!e||!e.__CANCEL__)}function Xe(e,t,n){ne.call(this,null==e?"canceled":e,ne.ERR_CANCELED,t,n),this.name="CanceledError"}Y.inherits(Xe,ne,{__CANCEL__:!0});var Ze=Xe,Ye=null;n(2801);function Qe(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new ne("Request failed with status code "+n.status,[ne.ERR_BAD_REQUEST,ne.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var et=ke.isStandardBrowserEnv?function(){return{write:function(e,t,n,r,i,o){const s=[];s.push(e+"="+encodeURIComponent(t)),Y.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),Y.isString(r)&&s.push("path="+r),Y.isString(i)&&s.push("domain="+i),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function tt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function nt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function rt(e,t){return e&&!tt(t)?nt(e,t):t}var it=ke.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=Y.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}();function ot(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function st(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,o=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[s];i||(i=c),n[o]=a,r[o]=c;let l=s,d=0;while(l!==o)d+=n[l++],l%=e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),c-i<t)return;const h=u&&c-u;return h?Math.round(1e3*d/h):void 0}}var at=st;function ct(e,t){let n=0;const r=at(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,c=r(a),u=o<=s;n=o;const l={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&u?(s-o)/c:void 0,event:i};l[t?"download":"upload"]=!0,e(l)}}const ut="undefined"!==typeof XMLHttpRequest;var lt=ut&&function(e){return new Promise((function(t,n){let r=e.data;const i=Je.from(e.headers).normalize(),o=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}Y.isFormData(r)&&(ke.isStandardBrowserEnv||ke.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(t+":"+n))}const u=rt(e.baseURL,e.url);function l(){if(!c)return;const r=Je.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),i=o&&"text"!==o&&"json"!==o?c.response:c.responseText,s={data:i,status:c.status,statusText:c.statusText,headers:r,config:e,request:c};Qe((function(e){t(e),a()}),(function(e){n(e),a()}),s),c=null}if(c.open(e.method.toUpperCase(),ye(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new ne("Request aborted",ne.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new ne("Network Error",ne.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||_e;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new ne(t,r.clarifyTimeoutError?ne.ETIMEDOUT:ne.ECONNABORTED,e,c)),c=null},ke.isStandardBrowserEnv){const t=(e.withCredentials||it(u))&&e.xsrfCookieName&&et.read(e.xsrfCookieName);t&&i.set(e.xsrfHeaderName,t)}void 0===r&&i.setContentType(null),"setRequestHeader"in c&&Y.forEach(i.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),Y.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&"json"!==o&&(c.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&c.addEventListener("progress",ct(e.onDownloadProgress,!0)),"function"===typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",ct(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{c&&(n(!t||t.type?new Ze(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const d=ot(u);d&&-1===ke.protocols.indexOf(d)?n(new ne("Unsupported protocol "+d+":",ne.ERR_BAD_REQUEST,e)):c.send(r||null)}))};const dt={http:Ye,xhr:lt};Y.forEach(dt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));var ht={getAdapter:e=>{e=Y.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t;i++)if(n=e[i],r=Y.isString(n)?dt[n.toLowerCase()]:n)break;if(!r){if(!1===r)throw new ne(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(Y.hasOwnProp(dt,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!Y.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:dt};function ft(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ze(null,e)}function pt(e){ft(e),e.headers=Je.from(e.headers),e.data=Ke.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const t=ht.getAdapter(e.adapter||Le.adapter);return t(e).then((function(t){return ft(e),t.data=Ke.call(e,e.transformResponse,t),t.headers=Je.from(t.headers),t}),(function(t){return Ge(t)||(ft(e),t&&t.response&&(t.response.data=Ke.call(e,e.transformResponse,t.response),t.response.headers=Je.from(t.response.headers))),Promise.reject(t)}))}const mt=e=>e instanceof Je?e.toJSON():e;function gt(e,t){t=t||{};const n={};function r(e,t,n){return Y.isPlainObject(e)&&Y.isPlainObject(t)?Y.merge.call({caseless:n},e,t):Y.isPlainObject(t)?Y.merge({},t):Y.isArray(t)?t.slice():t}function i(e,t,n){return Y.isUndefined(t)?Y.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function o(e,t){if(!Y.isUndefined(t))return r(void 0,t)}function s(e,t){return Y.isUndefined(t)?Y.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,i,o){return o in t?r(n,i):o in e?r(void 0,n):void 0}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>i(mt(e),mt(t),!0)};return Y.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const o=c[r]||i,s=o(e[r],t[r],r);Y.isUndefined(s)&&o!==a||(n[r]=s)})),n}const vt="1.2.2",yt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{yt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const bt={};function wt(e,t,n){if("object"!==typeof e)throw new ne("options must be an object",ne.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;while(i-- >0){const o=r[i],s=t[o];if(s){const t=e[o],n=void 0===t||s(t,o,e);if(!0!==n)throw new ne("option "+o+" must be "+n,ne.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new ne("Unknown option "+o,ne.ERR_BAD_OPTION)}}yt.transitional=function(e,t,n){function r(e,t){return"[Axios v"+vt+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,o)=>{if(!1===e)throw new ne(r(i," has been removed"+(t?" in "+t:"")),ne.ERR_DEPRECATED);return t&&!bt[i]&&(bt[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,o)}};var _t={assertOptions:wt,validators:yt};const It=_t.validators;class Et{constructor(e){this.defaults=e,this.interceptors={request:new we,response:new we}}request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=gt(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;let o;void 0!==n&&_t.assertOptions(n,{silentJSONParsing:It.transitional(It.boolean),forcedJSONParsing:It.transitional(It.boolean),clarifyTimeoutError:It.transitional(It.boolean)},!1),void 0!==r&&_t.assertOptions(r,{encode:It.function,serialize:It.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),o=i&&Y.merge(i.common,i[t.method]),o&&Y.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=Je.concat(o,i);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,d=0;if(!a){const e=[pt.bind(this),void 0];e.unshift.apply(e,s),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);while(d<l)u=u.then(e[d++],e[d++]);return u}l=s.length;let h=t;d=0;while(d<l){const e=s[d++],t=s[d++];try{h=e(h)}catch(f){t.call(this,f);break}}try{u=pt.call(this,h)}catch(f){return Promise.reject(f)}d=0,l=c.length;while(d<l)u=u.then(c[d++],c[d++]);return u}getUri(e){e=gt(this.defaults,e);const t=rt(e.baseURL,e.url);return ye(t,e.params,e.paramsSerializer)}}Y.forEach(["delete","get","head","options"],(function(e){Et.prototype[e]=function(t,n){return this.request(gt(n||{},{method:e,url:t,data:(n||{}).data}))}})),Y.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(gt(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Et.prototype[e]=t(),Et.prototype[e+"Form"]=t(!0)}));var Tt=Et;class St{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;while(t-- >0)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new Ze(e,r,i),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;const t=new St((function(t){e=t}));return{token:t,cancel:e}}}var kt=St;function Ot(e){return function(t){return e.apply(null,t)}}function Ct(e){return Y.isObject(e)&&!0===e.isAxiosError}const Rt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Rt).forEach((([e,t])=>{Rt[t]=e}));var At=Rt;function Nt(e){const t=new Tt(e),n=r(Tt.prototype.request,t);return Y.extend(n,Tt.prototype,t,{allOwnKeys:!0}),Y.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return Nt(gt(e,t))},n}const Pt=Nt(Le);Pt.Axios=Tt,Pt.CanceledError=Ze,Pt.CancelToken=kt,Pt.isCancel=Ge,Pt.VERSION=vt,Pt.toFormData=he,Pt.AxiosError=ne,Pt.Cancel=Pt.CanceledError,Pt.all=function(e){return Promise.all(e)},Pt.spread=Ot,Pt.isAxiosError=Ct,Pt.mergeConfig=gt,Pt.AxiosHeaders=Je,Pt.formToJSON=e=>Ne(Y.isHTMLForm(e)?new FormData(e):e),Pt.HttpStatusCode=At,Pt.default=Pt;var xt=Pt},4466:function(e,t,n){"use strict";n.d(t,{IH:function(){return yt}});n(7658);var r=n(9684),i=n(5168),o=n(223),s=n(7142),a=(n(2801),n(3831));const c="@firebase/installations",u="0.6.1",l=1e4,d=`w:${u}`,h="FIS_v2",f="https://firebaseinstallations.googleapis.com/v1",p=36e5,m="installations",g="Installations",v={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},y=new o.LL(m,g,v);function b(e){return e instanceof o.ZR&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w({projectId:e}){return`${f}/projects/${e}/installations`}function _(e){return{token:e.token,requestStatus:2,expiresIn:k(e.expiresIn),creationTime:Date.now()}}async function I(e,t){const n=await t.json(),r=n.error;return y.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function E({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function T(e,{refreshToken:t}){const n=E(e);return n.append("Authorization",O(t)),n}async function S(e){const t=await e();return t.status>=500&&t.status<600?e():t}function k(e){return Number(e.replace("s","000"))}function O(e){return`${h} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=w(e),i=E(e),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={fid:n,authVersion:h,appId:e.appId,sdkVersion:d},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await S((()=>fetch(r,a)));if(c.ok){const e=await c.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:_(e.authToken)};return t}throw await I("Create Installation",c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=/^[cdef][\w-]{21}$/,P="";function x(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=D(e);return N.test(n)?n:P}catch(e){return P}}function D(e){const t=A(e);return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=new Map;function j(e,t){const n=L(e);U(n,t),F(n,t)}function U(e,t){const n=M.get(e);if(n)for(const r of n)r(t)}function F(e,t){const n=$();n&&n.postMessage({key:e,fid:t}),H()}let B=null;function $(){return!B&&"BroadcastChannel"in self&&(B=new BroadcastChannel("[Firebase] FID Change"),B.onmessage=e=>{U(e.data.key,e.data.fid)}),B}function H(){0===M.size&&B&&(B.close(),B=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V="firebase-installations-database",z=1,q="firebase-installations-store";let W=null;function J(){return W||(W=(0,a.X3)(V,z,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(q)}}})),W}async function K(e,t){const n=L(e),r=await J(),i=r.transaction(q,"readwrite"),o=i.objectStore(q),s=await o.get(n);return await o.put(t,n),await i.done,s&&s.fid===t.fid||j(e,t.fid),t}async function G(e){const t=L(e),n=await J(),r=n.transaction(q,"readwrite");await r.objectStore(q).delete(t),await r.done}async function X(e,t){const n=L(e),r=await J(),i=r.transaction(q,"readwrite"),o=i.objectStore(q),s=await o.get(n),a=t(s);return void 0===a?await o.delete(n):await o.put(a,n),await i.done,!a||s&&s.fid===a.fid||j(e,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e){let t;const n=await X(e.appConfig,(n=>{const r=Y(n),i=Q(e,r);return t=i.registrationPromise,i.installationEntry}));return n.fid===P?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Y(e){const t=e||{fid:x(),registrationStatus:0};return re(t)}function Q(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(y.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ee(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:te(e)}:{installationEntry:t}}async function ee(e,t){try{const n=await C(e,t);return K(e.appConfig,n)}catch(n){throw b(n)&&409===n.customData.serverCode?await G(e.appConfig):await K(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function te(e){let t=await ne(e.appConfig);while(1===t.registrationStatus)await R(100),t=await ne(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Z(e);return n||t}return t}function ne(e){return X(e,(e=>{if(!e)throw y.create("installation-not-found");return re(e)}))}function re(e){return ie(e)?{fid:e.fid,registrationStatus:0}:e}function ie(e){return 1===e.registrationStatus&&e.registrationTime+l<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe({appConfig:e,heartbeatServiceProvider:t},n){const r=se(e,n),i=T(e,n),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={installation:{sdkVersion:d,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await S((()=>fetch(r,a)));if(c.ok){const e=await c.json(),t=_(e);return t}throw await I("Generate Auth Token",c)}function se(e,{fid:t}){return`${w(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(e,t=!1){let n;const r=await X(e.appConfig,(r=>{if(!de(r))throw y.create("not-registered");const i=r.authToken;if(!t&&he(i))return r;if(1===i.requestStatus)return n=ce(e,t),r;{if(!navigator.onLine)throw y.create("app-offline");const t=pe(r);return n=le(e,t),t}})),i=n?await n:r.authToken;return i}async function ce(e,t){let n=await ue(e.appConfig);while(1===n.authToken.requestStatus)await R(100),n=await ue(e.appConfig);const r=n.authToken;return 0===r.requestStatus?ae(e,t):r}function ue(e){return X(e,(e=>{if(!de(e))throw y.create("not-registered");const t=e.authToken;return me(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function le(e,t){try{const n=await oe(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await K(e.appConfig,r),n}catch(n){if(!b(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await K(e.appConfig,n)}else await G(e.appConfig);throw n}}function de(e){return void 0!==e&&2===e.registrationStatus}function he(e){return 2===e.requestStatus&&!fe(e)}function fe(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+p}function pe(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function me(e){return 1===e.requestStatus&&e.requestTime+l<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ge(e){const t=e,{installationEntry:n,registrationPromise:r}=await Z(t);return r?r.catch(console.error):ae(t).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(e,t=!1){const n=e;await ye(n);const r=await ae(n,t);return r.token}async function ye(e){const{registrationPromise:t}=await Z(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function be(e){if(!e||!e.options)throw we("App Configuration");if(!e.name)throw we("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw we(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function we(e){return y.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="installations",Ie="installations-internal",Ee=e=>{const t=e.getProvider("app").getImmediate(),n=be(t),i=(0,r.qX)(t,"heartbeat"),o={app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return o},Te=e=>{const t=e.getProvider("app").getImmediate(),n=(0,r.qX)(t,_e).getImmediate(),i={getId:()=>ge(n),getToken:e=>ve(n,e)};return i};function Se(){(0,r.Xd)(new s.wA(_e,Ee,"PUBLIC")),(0,r.Xd)(new s.wA(Ie,Te,"PRIVATE"))}Se(),(0,r.KN)(c,u),(0,r.KN)(c,u,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ke="analytics",Oe="firebase_id",Ce="origin",Re=6e4,Ae="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ne="https://www.googletagmanager.com/gtag/js",Pe=new i.Yd("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xe(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function De(e,t){const n=document.createElement("script");n.src=`${Ne}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function Le(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Me(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const e=await xe(n),r=e.find((e=>e.measurementId===i));r&&await t[r.appId]}}catch(a){Pe.error(a)}e("config",i,o)}async function je(e,t,n,r,i){try{let o=[];if(i&&i["send_to"]){let e=i["send_to"];Array.isArray(e)||(e=[e]);const r=await xe(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){o=[];break}o.push(i)}}0===o.length&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Pe.error(o)}}function Ue(e,t,n,r){async function i(i,o,s){try{"event"===i?await je(e,t,n,o,s):"config"===i?await Me(e,t,n,r,o,s):"consent"===i?e("consent","update",s):e("set",o)}catch(a){Pe.error(a)}}return i}function Fe(e,t,n,r,i){let o=function(...e){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(o=window[i]),window[i]=Ue(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function Be(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Ne)&&n.src.includes(e))return n;return null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},He=new o.LL("analytics","Analytics",$e),Ve=30,ze=1e3;class qe{constructor(e={},t=ze){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const We=new qe;function Je(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ke(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Je(r)},o=Ae.replace("{app-id}",n),s=await fetch(o,i);if(200!==s.status&&304!==s.status){let e="";try{const n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw He.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}async function Ge(e,t=We,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw He.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw He.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Qe;return setTimeout((async()=>{a.abort()}),void 0!==n?n:Re),Xe({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Xe(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=We){var s;const{appId:a,measurementId:c}=e;try{await Ze(r,t)}catch(u){if(c)return Pe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===u||void 0===u?void 0:u.message}]`),{appId:a,measurementId:c};throw u}try{const t=await Ke(e);return i.deleteThrottleMetadata(a),t}catch(u){const t=u;if(!Ye(t)){if(i.deleteThrottleMetadata(a),c)return Pe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===t||void 0===t?void 0:t.message}]`),{appId:a,measurementId:c};throw u}const l=503===Number(null===(s=null===t||void 0===t?void 0:t.customData)||void 0===s?void 0:s.httpStatus)?(0,o.$s)(n,i.intervalMillis,Ve):(0,o.$s)(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(a,d),Pe.debug(`Calling attemptFetch again in ${l} millis`),Xe(e,d,r,i)}}function Ze(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(o),r(He.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function Ye(e){if(!(e instanceof o.ZR)||!e.customData)return!1;const t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}class Qe{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et,tt;async function nt(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}function rt(e){tt=e}function it(e){et=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(){if(!(0,o.hl)())return Pe.warn(He.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,o.eu)()}catch(e){return Pe.warn(He.create("indexeddb-unavailable",{errorInfo:null===e||void 0===e?void 0:e.toString()}).message),!1}return!0}async function st(e,t,n,r,i,o,s){var a;const c=Ge(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Pe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Pe.error(e))),t.push(c);const u=ot().then((e=>e?r.getId():void 0)),[l,d]=await Promise.all([c,u]);Be(o)||De(o,l.measurementId),tt&&(i("consent","default",tt),rt(void 0)),i("js",new Date);const h=null!==(a=null===s||void 0===s?void 0:s.config)&&void 0!==a?a:{};return h[Ce]="firebase",h.update=!0,null!=d&&(h[Oe]=d),i("config",l.measurementId,h),et&&(i("set",et),it(void 0)),l.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.app=e}_delete(){return delete ct[this.app.options.appId],Promise.resolve()}}let ct={},ut=[];const lt={};let dt,ht,ft="dataLayer",pt="gtag",mt=!1;function gt(){const e=[];if((0,o.ru)()&&e.push("This is a browser extension environment."),(0,o.zI)()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=He.create("invalid-analytics-context",{errorInfo:t});Pe.warn(n.message)}}function vt(e,t,n){gt();const r=e.options.appId;if(!r)throw He.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw He.create("no-api-key");Pe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=ct[r])throw He.create("already-exists",{id:r});if(!mt){Le(ft);const{wrappedGtag:e,gtagCore:t}=Fe(ct,ut,lt,ft,pt);ht=e,dt=t,mt=!0}ct[r]=st(e,ut,lt,t,dt,ft,n);const i=new at(e);return i}function yt(e=(0,r.Mq)()){e=(0,o.m9)(e);const t=(0,r.qX)(e,ke);return t.isInitialized()?t.getImmediate():bt(e)}function bt(e,t={}){const n=(0,r.qX)(e,ke);if(n.isInitialized()){const e=n.getImmediate();if((0,o.vZ)(t,n.getOptions()))return e;throw He.create("already-initialized")}const i=n.initialize({options:t});return i}function wt(e,t,n,r){e=(0,o.m9)(e),nt(ht,ct[e.app.options.appId],t,n,r).catch((e=>Pe.error(e)))}const _t="@firebase/analytics",It="0.9.1";function Et(){function e(e){try{const t=e.getProvider(ke).getImmediate();return{logEvent:(e,n,r)=>wt(t,e,n,r)}}catch(t){throw He.create("interop-component-reg-failed",{reason:t})}}(0,r.Xd)(new s.wA(ke,((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return vt(n,r,t)}),"PUBLIC")),(0,r.Xd)(new s.wA("analytics-internal",e,"PRIVATE")),(0,r.KN)(_t,It),(0,r.KN)(_t,It,"esm2017")}Et()},7795:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(9684),i="firebase",o="9.16.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,o,"app")},6696:function(e,t,n){"use strict";n.d(t,{Xb:function(){return ft},v0:function(){return wr},Aj:function(){return vt},e5:function(){return pt}});n(7658);var r=n(223),i=n(9684),o=n(5168);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),d=new o.Yd("@firebase/auth");function h(e,...t){d.logLevel<=o["in"].ERROR&&d.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),o=new r.LL("auth","Firebase",i);return o.create(t,{appName:e.name})}function g(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function v(e,t,...n){if(!e)throw g(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw h(t),new Error(t)}function b(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new Map;function _(e){b(e instanceof Function,"Expected a class definition");let t=w.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,w.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const o=n.initialize({options:t});return o}function E(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function S(){return"http:"===k()||"https:"===k()}function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function C(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return O()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},x=new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,i,o={}){return M(e,o,(async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),N.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))}))}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},P),t);try{const t=new F(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw B(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw B(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw B(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw B(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);f(e,a)}}catch(o){if(o instanceof r.ZR)throw o;f(e,"network-request-failed")}}async function j(e,t,n,r,i={}){const o=await L(e,t,n,r,i);return"mfaPendingCredential"in o&&f(e,"multi-factor-auth-required",{_serverResponse:o}),o}function U(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?A(e.config,i):`${e.config.apiScheme}://${i}`}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),x.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function B(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function H(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),o=W(i);v(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:V(q(o.auth_time)),issuedAtTime:V(q(o.iat)),expirationTime:V(q(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function q(e){return 1e3*Number(e)}function W(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return h("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(h("Failed to decode base64 JWT payload"),null)}catch(o){return h("Caught error parsing JWT payload as JSON",null===o||void 0===o?void 0:o.toString()),null}}function J(e){const t=W(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&G(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function G({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=V(this.lastLoginAt),this.creationTime=V(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e){var t;const n=e.auth,r=await e.getIdToken(),i=await K(e,H(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?te(o.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Z(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,d)}async function Q(e){const t=(0,r.m9)(e);await Y(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await M(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=U(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):J(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new re;return n&&(v("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Z(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return z(this,e)}reload(){return Q(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:I,stsTokenManager:E}=t;v(b&&E,e,"internal-error");const T=re.fromJSON(this.name,E);v("string"===typeof b,e,"internal-error"),ie(l,e.name),ie(d,e.name),v("boolean"===typeof w,e,"internal-error"),v("boolean"===typeof _,e,"internal-error"),ie(h,e.name),ie(f,e.name),ie(p,e.name),ie(m,e.name),ie(g,e.name),ie(y,e.name);const S=new oe({uid:b,auth:e,email:d,emailVerified:w,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return I&&Array.isArray(I)&&(S.providerData=I.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Y(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(_(ae),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||_(ae);const o=ce(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=oe._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(c){}}))),new ue(i,e,n)):new ue(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(de(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(ve(t))return"Webos";if(he(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=(0,r.z$)()){return/firefox\//i.test(e)}function he(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function me(e=(0,r.z$)()){return/android/i.test(e)}function ge(e=(0,r.z$)()){return/blackberry/i.test(e)}function ve(e=(0,r.z$)()){return/webos/i.test(e)}function ye(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function be(e=(0,r.z$)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function we(){return(0,r.w1)()&&10===document.documentMode}function _e(e=(0,r.z$)()){return ye(e)||me(e)||ve(e)||ge(e)||/windows phone/i.test(e)||pe(e)}function Ie(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=le((0,r.z$)());break;case"Worker":n=`${le((0,r.z$)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${o}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oe(this),this.idTokenSubscription=new Oe(this),this.beforeStateQueue=new Te(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null===s||void 0===s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Y(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=C()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[_(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return v(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function ke(e){return(0,r.m9)(e)}class Oe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ce(e,t,n){const r=ke(e);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Re(t),{host:s,port:a}=Ae(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Pe()}function Re(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ae(e){const t=Re(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ne(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ne(t)}}}function Ne(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Pe(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Le(e,t){return j(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Me(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}async function je(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends xe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ue(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ue(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Le(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Me(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return De(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return je(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(e,t){return j(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="http://localhost";class $e extends xe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $e(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new $e(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Fe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Fe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fe(e,t)}buildRequest(){const e={requestUri:Be,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function He(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}async function Ve(e,t){return j(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}async function ze(e,t){const n=await j(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(n.temporaryProof)throw B(e,"account-exists-with-different-credential",n);return n}const qe={["USER_NOT_FOUND"]:"user-not-found"};async function We(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return j(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,n),qe)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends xe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Je({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Je({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ve(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ze(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return We(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Je({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ge(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],o=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return o||i||n||t||e}class Xe{constructor(e){var t,n,i,o,s,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,d=Ke(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Ge(e);try{return new Xe(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze{constructor(){this.providerId=Ze.PROVIDER_ID}static credential(e,t){return Ue._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Xe.parseLink(t);return v(n,"argument-error"),Ue._fromEmailAndCode(e,n.code,n.tenantId)}}Ze.PROVIDER_ID="password",Ze.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ze.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends Ye{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et extends Qe{constructor(){super("facebook.com")}static credential(e){return $e._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return et.credential(e.oauthAccessToken)}catch(t){return null}}}et.FACEBOOK_SIGN_IN_METHOD="facebook.com",et.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends Qe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $e._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return tt.credential(t,n)}catch(r){return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com",tt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends Qe{constructor(){super("github.com")}static credential(e){return $e._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch(t){return null}}}nt.GITHUB_SIGN_IN_METHOD="github.com",nt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends Qe{constructor(){super("twitter.com")}static credential(e,t){return $e._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return rt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t){return j(e,"POST","/v1/accounts:signUp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt.TWITTER_SIGN_IN_METHOD="twitter.com",rt.PROVIDER_ID="twitter.com";class ot{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await oe._fromIdTokenResponse(e,n,r),o=st(n),s=new ot({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=st(n);return new ot({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function st(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,at.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new at(e,t,n,r)}}function ct(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw at._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ot._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function lt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await K(e,ct(r,i,t,e),n);v(o.idToken,r,"internal-error");const s=W(o.idToken);v(s,r,"internal-error");const{sub:a}=s;return v(e.uid===a,r,"user-mismatch"),ot._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&f(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,t,n=!1){const r="signIn",i=await ct(e,r,t),o=await ot._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function ht(e,t){return dt(ke(e),t)}async function ft(e,t,n){const r=ke(e),i=await it(r,{returnSecureToken:!0,email:t,password:n}),o=await ot._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function pt(e,t,n){return ht((0,r.m9)(e),Ze.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function gt(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}function vt(e,t,n,i){return(0,r.m9)(e).onAuthStateChanged(t,n,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function bt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}new WeakMap;const wt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(wt,"1"),this.storage.removeItem(wt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){const e=(0,r.z$)();return he(e)||ye(e)}const Et=1e3,Tt=10;class St extends _t{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=It()&&Ie(),this.fallbackToPolling=_e(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);we()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Tt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Et)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}St.type="LOCAL";const kt=St;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends _t{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ot.type="SESSION";const Ct=Ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new At(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await Rt(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.receivers=[];class Pt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=Nt("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return window}function Dt(e){xt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return"undefined"!==typeof xt()["WorkerGlobalScope"]&&"function"===typeof xt()["importScripts"]}async function Mt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function jt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Ut(){return Lt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="firebaseLocalStorageDb",Bt=1,$t="firebaseLocalStorage",Ht="fbase_key";class Vt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function zt(e,t){return e.transaction([$t],t?"readwrite":"readonly").objectStore($t)}function qt(){const e=indexedDB.deleteDatabase(Ft);return new Vt(e).toPromise()}function Wt(){const e=indexedDB.open(Ft,Bt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore($t,{keyPath:Ht})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains($t)?t(n):(n.close(),await qt(),t(await Wt()))}))}))}async function Jt(e,t,n){const r=zt(e,!0).put({[Ht]:t,value:n});return new Vt(r).toPromise()}async function Kt(e,t){const n=zt(e,!1).get(t),r=await new Vt(n).toPromise();return void 0===r?null:r.value}function Gt(e,t){const n=zt(e,!0).delete(t);return new Vt(n).toPromise()}const Xt=800,Zt=3;class Yt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Wt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Zt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=At._getInstance(Ut()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Mt(),!this.activeServiceWorker)return;this.sender=new Pt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&jt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wt();return await Jt(e,wt,"1"),await Gt(e,wt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Jt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Kt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Gt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=zt(e,!1).getAll();return new Vt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Xt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Yt.type="LOCAL";const Qt=Yt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",D(e,t))}function tn(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nn(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function rn(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",nn().appendChild(r)}))}function on(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
on("rcb"),new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sn="recaptcha";async function an(e,t,n){var r;const i=await n.verify();try{let o;if(v("string"===typeof i,e,"argument-error"),v(n.type===sn,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){v("enroll"===t.type,e,"internal-error");const n=await yt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;v(n,e,"missing-multi-factor-info");const s=await en(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await He(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cn{constructor(e){this.providerId=cn.PROVIDER_ID,this.auth=ke(e)}verifyPhoneNumber(e,t){return an(this.auth,e,(0,r.m9)(t))}static credential(e,t){return Je._fromVerification(e,t)}static credentialFromResult(e){const t=e;return cn.credentialFromTaggedObject(t)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Je._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function un(e,t){return t?_(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn.PROVIDER_ID="phone",cn.PHONE_SIGN_IN_METHOD="phone";class ln extends xe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function dn(e){return dt(e.auth,new ln(e),e.bypassAuthState)}function hn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),lt(n,new ln(e),e.bypassAuthState)}async function fn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),ut(n,new ln(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dn;case"linkViaPopup":case"linkViaRedirect":return fn;case"reauthViaPopup":case"reauthViaRedirect":return hn;default:f(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new R(2e3,1e4);class gn extends pn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,gn.currentPopupAction&&gn.currentPopupAction.cancel(),gn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=Nt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,mn.get())};e()}}gn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn="pendingRedirect",yn=new Map;class bn extends pn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=yn.get(this.auth._key());if(!e){try{const t=await wn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}yn.set(this.auth._key(),e)}return this.bypassAuthState||yn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function wn(e,t){const n=En(t),r=In(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function _n(e,t){yn.set(e._key(),t)}function In(e){return _(e._redirectPersistence)}function En(e){return ce(vn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(e,t,n=!1){const r=ke(e),i=un(r,t),o=new bn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sn=6e5;class kn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Rn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Cn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sn&&this.cachedEventUids.clear(),this.cachedEventUids.has(On(e))}saveEventToCache(e){this.cachedEventUids.add(On(e)),this.lastProcessedEventTime=Date.now()}}function On(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Cn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Rn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pn=/^https?/;async function xn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await An(e);for(const r of t)try{if(Dn(r))return}catch(n){}f(e,"unauthorized-domain")}function Dn(e){const t=T(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Pn.test(n))return!1;if(Nn.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new R(3e4,6e4);function Mn(){const e=xt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function jn(e){return new Promise(((t,n)=>{var r,i,o;function s(){Mn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mn(),n(p(e,"network-request-failed"))},timeout:Ln.get()})}if(null===(i=null===(r=xt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=xt().gapi)||void 0===o?void 0:o.load)){const t=on("iframefcb");return xt()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},rn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Un=null,e}))}let Un=null;function Fn(e){return Un=Un||jn(e),Un}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new R(5e3,15e3),$n="__/auth/iframe",Hn="emulator/auth/iframe",Vn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qn(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?A(t,Hn):`https://${e.config.authDomain}/${$n}`,o={apiKey:t.apiKey,appName:e.name,v:i.Jn},s=zn.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,r.xO)(o).slice(1)}`}async function Wn(e){const t=await Fn(e),n=xt().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:qn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),o=xt().setTimeout((()=>{r(i)}),Bn.get());function s(){xt().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kn=500,Gn=600,Xn="_blank",Zn="http://localhost";class Yn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Qn(e,t,n,i=Kn,o=Gn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Jn),{width:i.toString(),height:o.toString(),top:s,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=fe(l)?Xn:n),de(l)&&(t=t||Zn,u.scrollbars="yes");const d=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(be(l)&&"_self"!==c)return er(t||"",c),new Yn(null);const h=window.open(t||"",c,d);v(h,e,"popup-blocked");try{h.focus()}catch(f){}return new Yn(h)}function er(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="__/auth/handler",nr="emulator/auth/handler";function rr(e,t,n,o,s,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i.Jn,eventId:s};if(t instanceof Ye){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Qe){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${ir(e)}?${(0,r.xO)(u).slice(1)}`}function ir({config:e}){return e.emulator?A(e,nr):`https://${e.authDomain}/${tr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="webStorageSupport";class sr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ct,this._completeRedirectFn=Tn,this._overrideRedirectResult=_n}async _openPopup(e,t,n,r){var i;b(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=rr(e,t,n,T(),r);return Qn(e,o,Nt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Dt(rr(e,t,n,T(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Wn(e),n=new kn(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(or,{type:or},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[or];void 0!==i&&t(!!i),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _e()||he()||ye()}}const ar=sr;class cr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class ur extends cr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ur(e)}_finalizeEnroll(e,t,n){return bt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return tn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class lr{constructor(){}static assertion(e){return ur._fromCredential(e)}}lr.FACTOR_ID="phone";var dr="@firebase/auth",hr="0.21.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mr(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((t,r)=>{v(o&&!o.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},a=new Se(t,r,i);return E(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=ke(e.getProvider("auth").getImmediate());return(e=>new fr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(dr,hr,pr(e)),(0,i.KN)(dr,hr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=300,vr=(0,r.Pz)("authIdTokenMaxAge")||gr;let yr=null;const br=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vr)return;const i=null===n||void 0===n?void 0:n.token;yr!==i&&(yr=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wr(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=I(e,{popupRedirectResolver:ar,persistence:[Qt,kt,Ct]}),o=(0,r.Pz)("authTokenSyncURL");if(o){const e=br(o);gt(n,e,(()=>e(n.currentUser))),mt(n,(t=>e(t)))}const s=(0,r.q4)("auth");return s&&Ce(n,`http://${s}`),n}mr("Browser")},3831:function(e,t,n){"use strict";n.d(t,{X3:function(){return _}});n(2801);const r=(e,t)=>t.some((t=>e instanceof t));let i,o;function s(){return i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a(){return o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c=new WeakMap,u=new WeakMap,l=new WeakMap,d=new WeakMap,h=new WeakMap;function f(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(b(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&c.set(t,e)})).catch((()=>{})),h.set(t,e),t}function p(e){if(u.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));u.set(e,t)}let m={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return u.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return b(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function g(e){m=e(m)}function v(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?a().includes(e)?function(...t){return e.apply(w(this),t),b(c.get(this))}:function(...t){return b(e.apply(w(this),t))}:function(t,...n){const r=e.call(w(this),t,...n);return l.set(r,t.sort?t.sort():[t]),b(r)}}function y(e){return"function"===typeof e?v(e):(e instanceof IDBTransaction&&p(e),r(e,s())?new Proxy(e,m):e)}function b(e){if(e instanceof IDBRequest)return f(e);if(d.has(e))return d.get(e);const t=y(e);return t!==e&&(d.set(e,t),h.set(t,e)),t}const w=e=>h.get(e);function _(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=b(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(b(s.result),e.oldVersion,e.newVersion,b(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],E=["put","add","delete","clear"],T=new Map;function S(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(T.get(t))return T.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=E.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return T.set(t,o),o}g((e=>({...e,get:(t,n,r)=>S(t,n)||e.get(t,n,r),has:(t,n)=>!!S(t,n)||e.has(t,n)})))}}]);
//# sourceMappingURL=chunk-vendors.727a1337.js.map