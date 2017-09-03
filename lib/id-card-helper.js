!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("id-card-helper",[],t):"object"==typeof exports?exports["id-card-helper"]=t():e["id-card-helper"]=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),i={TaiwanFormater:u.TaiwanFormater},a=function(){function e(t){n(this,e),this.change(t)}return o(e,[{key:"change",value:function(e){this.country=e.replace(/\b\w/g,function(e){return e.toUpperCase()});var t=new i[this.country+"Formater"];this.check=t.check,this.generate=t.generate}}]),e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TaiwanFormater=void 0;var n=r(2),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.TaiwanFormater=o.default,t.default={TaiwanFormater:o.default}},function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var u=Object.getPrototypeOf(t);return null===u?void 0:e(u,r,n)}if("value"in o)return o.value;var i=o.get;if(void 0!==i)return i.call(n)},f=r(3),l=function(e){return e&&e.__esModule?e:{default:e}}(f),s="1234567890",p="ABCDEFGHJKLMNPQRSTUVXYWZIO",d=["male","female"],y={LENGTH:"InvalidLength",FIRST:"InvalidFirstChar",SECOND:"InvalidSecondChar",NUMBER:"InvalidNumber",INVALID:"InvalidID"},h=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"check",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{if(e="string"==typeof e?(""+e).trim():e,c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"check",this).call(this,e),w(e))throw new Error(y.LENGTH);if(g(e))throw new Error(y.FIRST);if(m(e))throw new Error(y.SECOND);if(O(e))throw new Error(y.NUMBER);if(_(e))throw new Error(y.INVALID);return!0}catch(e){return e.message}}},{key:"generate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=void 0,r=void 0,o=[];do{t=0,r="";var u=e.area||p[v(0,p.length-1)],i=e.gender&&d.indexOf(e.gender)+1||v(1,2);r=u+i,t+=b(u),t+=8*i;for(var a=7;a>0;a--){var c=v(0,9);t+=a*c,r+=""+c}if(r+=10-(t%10||10),!e.count)break;e.count-=1,o=[].concat(n(o),[r])}while(e.count);return o.length?o:r}}]),t}(l.default),v=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},b=function(e){var t=(""+(p.indexOf(e)+10)).split("");return+t[0]+9*t[1]},w=function(e){return 10!==e.length},g=function(e){return-1===p.indexOf(e.substring(0,1))},m=function(e){return-1==="12".indexOf(e.substr(1,1))},O=function(e){return e.substr(2).split("").some(function(e){return-1===s.indexOf(e)})},_=function(e){var t=b(e.substring(0,1));return e.substr(1,8).split("").reduce(function(e,t,r){return e+t*(8-r)},t+ +e.substr(9,1))%10!=0};t.default=h},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(){function e(){n(this,e)}return o(e,[{key:"check",value:function(t){try{if(e.isEmpty(t))throw new Error(e.Error.Empty)}catch(e){throw e}return!0}}],[{key:"isEmpty",value:function(e){return""===e||(null===e||"string"!=typeof e)}},{key:"Error",get:function(){return{Empty:"NotAllowedEmpty"}}}]),e}();t.default=u}])});
//# sourceMappingURL=id-card-helper.js.map