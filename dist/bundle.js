!function(n){var r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)t.d(e,o,function(r){return n[r]}.bind(null,o));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=5)}([function(n,r,t){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=function(n,r){var t=n[1]||"",e=n[3];if(!e)return t;if(r&&"function"==typeof btoa){var o=(a=e,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,s;return[t].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(n,t,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);e&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),r.push(s))}},r}},function(n,r,t){var e=function(n){"use strict";var r=Object.prototype,t=r.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",i=e.asyncIterator||"@@asyncIterator",a=e.toStringTag||"@@toStringTag";function c(n,r,t){return Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),n[r]}try{c({},"")}catch(n){c=function(n,r,t){return n[r]=t}}function s(n,r,t,e){var o=r&&r.prototype instanceof l?r:l,i=Object.create(o.prototype),a=new k(e||[]);return i._invoke=function(n,r,t){var e="suspendedStart";return function(o,i){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===o)throw i;return E()}for(t.method=o,t.arg=i;;){var a=t.delegate;if(a){var c=x(a,t);if(c){if(c===d)continue;return c}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===e)throw e="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);e="executing";var s=u(n,r,t);if("normal"===s.type){if(e=t.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:t.done}}"throw"===s.type&&(e="completed",t.method="throw",t.arg=s.arg)}}}(n,t,a),i}function u(n,r,t){try{return{type:"normal",arg:n.call(r,t)}}catch(n){return{type:"throw",arg:n}}}n.wrap=s;var d={};function l(){}function f(){}function p(){}var h={};h[o]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(M([])));g&&g!==r&&t.call(g,o)&&(h=g);var v=p.prototype=l.prototype=Object.create(h);function y(n){["next","throw","return"].forEach((function(r){c(n,r,(function(n){return this._invoke(r,n)}))}))}function w(n,r){var e;this._invoke=function(o,i){function a(){return new r((function(e,a){!function e(o,i,a,c){var s=u(n[o],n,i);if("throw"!==s.type){var d=s.arg,l=d.value;return l&&"object"==typeof l&&t.call(l,"__await")?r.resolve(l.__await).then((function(n){e("next",n,a,c)}),(function(n){e("throw",n,a,c)})):r.resolve(l).then((function(n){d.value=n,a(d)}),(function(n){return e("throw",n,a,c)}))}c(s.arg)}(o,i,e,a)}))}return e=e?e.then(a,a):a()}}function x(n,r){var t=n.iterator[r.method];if(void 0===t){if(r.delegate=null,"throw"===r.method){if(n.iterator.return&&(r.method="return",r.arg=void 0,x(n,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var e=u(t,n.iterator,r.arg);if("throw"===e.type)return r.method="throw",r.arg=e.arg,r.delegate=null,d;var o=e.arg;return o?o.done?(r[n.resultName]=o.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function b(n){var r={tryLoc:n[0]};1 in n&&(r.catchLoc=n[1]),2 in n&&(r.finallyLoc=n[2],r.afterLoc=n[3]),this.tryEntries.push(r)}function L(n){var r=n.completion||{};r.type="normal",delete r.arg,n.completion=r}function k(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(b,this),this.reset(!0)}function M(n){if(n){var r=n[o];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var e=-1,i=function r(){for(;++e<n.length;)if(t.call(n,e))return r.value=n[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=v.constructor=p,p.constructor=f,f.displayName=c(p,a,"GeneratorFunction"),n.isGeneratorFunction=function(n){var r="function"==typeof n&&n.constructor;return!!r&&(r===f||"GeneratorFunction"===(r.displayName||r.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,p):(n.__proto__=p,c(n,a,"GeneratorFunction")),n.prototype=Object.create(v),n},n.awrap=function(n){return{__await:n}},y(w.prototype),w.prototype[i]=function(){return this},n.AsyncIterator=w,n.async=function(r,t,e,o,i){void 0===i&&(i=Promise);var a=new w(s(r,t,e,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},y(v),c(v,a,"Generator"),v[o]=function(){return this},v.toString=function(){return"[object Generator]"},n.keys=function(n){var r=[];for(var t in n)r.push(t);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},n.values=M,k.prototype={constructor:k,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!n)for(var r in this)"t"===r.charAt(0)&&t.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function e(t,e){return a.type="throw",a.arg=n,r.next=t,e&&(r.method="next",r.arg=void 0),!!e}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=t.call(i,"catchLoc"),s=t.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(n,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&t.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(n,r){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&r&&(this.next=r),d},finish:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),L(t),d}},catch:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===n){var e=t.completion;if("throw"===e.type){var o=e.arg;L(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,t){return this.delegate={iterator:M(n),resultName:r,nextLoc:t},"next"===this.method&&(this.arg=void 0),d}},n}(n.exports);try{regeneratorRuntime=e}catch(n){Function("r","regeneratorRuntime = r")(e)}},function(n,r,t){var e=t(3),o=t(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};e(o,i);n.exports=o.locals||{}},function(n,r,t){"use strict";var e,o=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},i=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}(),a=[];function c(n){for(var r=-1,t=0;t<a.length;t++)if(a[t].identifier===n){r=t;break}return r}function s(n,r){for(var t={},e=[],o=0;o<n.length;o++){var i=n[o],s=r.base?i[0]+r.base:i[0],u=t[s]||0,d="".concat(s," ").concat(u);t[s]=u+1;var l=c(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(f)):a.push({identifier:d,updater:g(f,r),references:1}),e.push(d)}return e}function u(n){var r=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var o=t.nc;o&&(e.nonce=o)}if(Object.keys(e).forEach((function(n){r.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(r);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var d,l=(d=[],function(n,r){return d[n]=r,d.filter(Boolean).join("\n")});function f(n,r,t,e){var o=t?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(n.styleSheet)n.styleSheet.cssText=l(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function p(n,r,t){var e=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var h=null,m=0;function g(n,r){var t,e,o;if(r.singleton){var i=m++;t=h||(h=u(r)),e=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=u(r),e=p.bind(null,t,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var t=s(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var e=0;e<t.length;e++){var o=c(t[e]);a[o].references--}for(var i=s(n,r),u=0;u<t.length;u++){var d=c(t[u]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}t=i}}}},function(n,r,t){"use strict";t.r(r);var e=t(0),o=t.n(e)()(!1);o.push([n.i,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Poppins', 'san-serif';\r\n    background-color: #d9dbf3;\r\n    color: #333;\r\n}\r\n\r\n.container{\r\n    width: 100%;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    align-items: center;\r\n    max-width: 1300px;\r\n    width: 100%;\r\n    margin: auto;\r\n    padding: 13px 8px;\r\n}\r\n\r\nnav h1 {\r\n    margin-right: 16px;\r\n}\r\n\r\n.weathersearch {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\ninput {\r\n    padding: 6px 15px;\r\n    font-size: 15px;\r\n}\r\n\r\ninput[type = submit]{\r\n    cursor: pointer;\r\n}\r\n\r\nsection {\r\n    width: 100%;\r\n    padding: 22px;\r\n}\r\n\r\n.result-wrapper {\r\n    width: 100%;\r\n    margin: auto;\r\n}\r\n\r\n::placeholder {\r\n    color: black;\r\n    font-size: 14px;\r\n}\r\n\r\n.loading {\r\n    font-size: 10px;\r\n    margin: 50px auto;\r\n    text-indent: -9999em;\r\n    width: 11em;\r\n    height: 11em;\r\n    border-radius: 50%;\r\n    background: #ffffff;\r\n    background: -moz-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);\r\n    background: -webkit-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);\r\n    background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);\r\n    background: -ms-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);\r\n    background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);\r\n    position: relative;\r\n    -webkit-animation: load3 1.4s infinite linear;\r\n    animation: load3 1.4s infinite linear;\r\n    -webkit-transform: translateZ(0);\r\n    -ms-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n}\r\n\r\n.loader:before {\r\n    width: 50%;\r\n    height: 50%;\r\n    background: #ffffff;\r\n    border-radius: 100% 0 0 0;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    content: '';\r\n}\r\n\r\n.loader:after {\r\n    background: #0dc5c1;\r\n    width: 75%;\r\n    height: 75%;\r\n    border-radius: 50%;\r\n    content: '';\r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n\r\n@-webkit-keyframes load3 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes load3 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n\r\n.conditions {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 10px;\r\n}\r\n\r\n.conditions h3 {\r\n    align-self: start;\r\n}\r\n\r\n.main {\r\n    padding: 10px;\r\n}\r\n\r\n.main h3{\r\n    text-align: center;\r\n    display: inline-block;\r\n    margin: auto;\r\n}\r\n\r\n.country{\r\n    font-size: 12px;\r\n}\r\n\r\n.main .tempicon {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.tempicon .temp {\r\n    font-size: 68px;\r\n}\r\n\r\n.main .description {\r\n    text-align: center;\r\n    font-size: 24px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.main .update {\r\n    text-align: center;\r\n}\r\n\r\n.secweather {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.secweather>div {\r\n    background-color: #fff;\r\n    margin: 5px;\r\n    padding: 10px;\r\n    min-width: 180px;\r\n    height: 150px;\r\n    border-radius: 7px;\r\n}\r\n\r\n.secweather .wind>div,\r\n.secweather .feels_like>div {\r\n    display: flex;\r\n    align-items: center;\r\n    padding-left: 5px;\r\n    height: 70%;\r\n    font-size: 28px;\r\n}\r\n\r\n#myProgress {\r\n    width: 100%;\r\n    background-color: grey;\r\n    height: 10px;\r\n    padding: 0;\r\n    margin-top: 1.7em;\r\n}\r\n\r\n#myBar {\r\n    height: 10px;\r\n    background-color: green;\r\n}\r\n\r\n.humidityresult{\r\n    text-align: center;\r\n    font-size: 22px;\r\n}\r\n\r\n.sunriseset > div{\r\n    text-align: center;\r\n    font-size: 22px;\r\n}\r\n\r\n.sunriseresult:before{\r\ncontent: \"🌝\";\r\nfont-size: 22px;\r\npadding-right: 10px;\r\n}\r\n\r\n.sunsetresult::before{\r\n    content: \"🌚\";\r\n    font-size: 22px;\r\n    padding-right: 10px;\r\n}\r\n.hourlymain {\r\n    margin: 26px;\r\n    width: 100%;\r\n}\r\n\r\n.hour {\r\n    display: flex;\r\n    width: 100%;\r\n    padding: 16px;\r\n    margin: 6px 0;\r\n    overflow-x: auto;\r\n}\r\n\r\n.hour>div {\r\n    min-width: 150px;\r\n    float: left;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.dailymain {\r\n    margin: 26px;\r\n    width: 100%;\r\n\r\n}\r\n\r\n.daily {\r\n    display: flex;\r\n    width: 100%;\r\n    padding: 16px;\r\n    margin: 6px 0;\r\n    overflow-x: auto;\r\n}\r\n\r\n.daily>div {\r\n    min-width: 150px;\r\n    float: left;\r\n    text-align: center;\r\n}\r\n\r\n.dailytemp span:first-child {\r\n    font-size: 24px;\r\n    padding-right: 5px;\r\n}\r\n\r\n@media screen and (max-width: 500px){\r\n    nav {\r\n        flex-direction: column;\r\n    }\r\n\r\n    nav h1 {\r\n        margin: 0 0 8px 0;\r\n    }\r\n\r\n    input {\r\n        padding: 5px 12px;\r\n        font-size: 15px;\r\n    }\r\n\r\n    .main{\r\n        margin-bottom: 16px;\r\n    }\r\n\r\n    .tempicon .temp {\r\n        font-size: 58px;\r\n    }\r\n\r\n    .main .description {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .secweather>div {\r\n        min-width: 300px;\r\n    }\r\n\r\n    .sunriseset>div {\r\n        text-align: left;\r\n        font-size: 22px;\r\n    }\r\n\r\n    .hour, .daily {\r\n        padding: 6px;\r\n        margin: 6px 0;\r\n    }\r\n\r\n    .hour>div, .daily>div {\r\n        float: left;\r\n        text-align: center;\r\n    }\r\n}",""]),r.default=o},function(n,r,t){"use strict";t.r(r);t(1);var e="5092421313c9ab9e8f02b90f7e94c274",o=document.querySelector(".location"),i=document.querySelector(".icon"),a=document.querySelector(".temp"),c=document.querySelector(".description"),s=document.querySelector(".update"),u=document.querySelector(".windresult"),d=document.querySelector(".humidityresult"),l=document.querySelector(".sunsetresult"),f=document.querySelector(".sunriseresult"),p=document.querySelector(".feels_likeresult"),h=document.querySelector(".daily"),m=document.querySelector(".hour"),g=document.querySelector(".loading"),v=document.getElementById("myBar"),y=(document.querySelector(".shimmer"),document.querySelector(".country")),w=document.getElementById("error");function x(n){var r=new Date(1e3*n),t=r.getHours(),e=r.getMinutes();return"".concat(L(t),":").concat(L(e))}function b(n){return new Date(1e3*n).toDateString().trim().slice(0,10)}function L(n){return n<10?"0"+n:n}navigator.geolocation?navigator.geolocation.getCurrentPosition((function(n){!function(n,r){var t="https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/onecall?lat=".concat(n,"&lon=").concat(r,"&appid=").concat(e,"&units=metric");fetch(t).then((function(n){return n.json()})).then((function(n){var r,t,e;console.log(n),g.style.display="none",r=n.current,o.innerText="your current location",s.innerText="Updated as at ".concat(x(r.dt)),i.innerHTML="<img src=http://openweathermap.org/img//wn/".concat(r.weather[0].icon,"@2x.png />"),a.innerHTML="".concat(Math.round(r.temp)," <span>&#176C</span>"),c.innerHTML=r.weather[0].description,u.innerHTML="".concat(r.wind_speed," <span>m/s</span>"),d.innerHTML="".concat(r.humidity," <span>%</span>"),f.innerText=x(r.sunrise),l.innerText="".concat(x(r.sunset)),p.innerHTML="".concat(Math.round(r.feels_like)," <span>&#176C</span>"),v.style.width="".concat(r.humidity,"%"),t=n.hourly.slice(0,12),e="",t.forEach((function(n){e+="<div>\n        <div>".concat(x(n.dt),"</div>\n        <img src=http://openweathermap.org/img//wn/").concat(n.weather[0].icon,'.png>\n        <div class="hourtemp"><span>').concat(Math.round(n.temp),"&#176</span></div>\n        <div>").concat(n.weather[0].description,"</div>\n        </div>\n        ")})),m.innerHTML=e,function(n){var r="";n.forEach((function(n){r+="<div>\n        <div>".concat(b(n.dt),"</div>\n        <img src=http://openweathermap.org/img//wn/").concat(n.weather[0].icon,'.png>\n        <div class="dailytemp"><span>').concat(Math.round(n.temp.max),"&#176</span><span>").concat(Math.round(n.temp.min),"&#176</span></div>\n        <div>").concat(n.weather[0].description,"</div>\n        </div>\n        ")})),h.innerHTML=r}(n.daily)}))}(n.coords.latitude,n.coords.longitude)})):window.alert("Could not get location");var k;t(2);function M(n){!function(n){k=5===n.length&&Number.parseInt(n)+""===n?"zip":"q"}(n),fetch("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?".concat(k,"=").concat(n,"&APPID=").concat(e,"&units=metric")).then((function(n){return n.json()})).then((function(n){var r;console.log(n),"404"!=n.cod?(!function(n){var r="https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/onecall?lat=".concat(n.lat,"&lon=").concat(n.lon,"&appid=").concat(e,"&units=metric");fetch(r).then((function(n){return n.json()})).then((function(n){var r,t;console.log(n),r=n.hourly.slice(0,12),t="",r.forEach((function(n){t+="<div>\n        <div>".concat(x(n.dt),"</div>\n        <img src=http://openweathermap.org/img//wn/").concat(n.weather[0].icon,'.png>\n        <div class="hourtemp"><span>').concat(Math.round(n.temp),"&#176</span></div>\n        <div>").concat(n.weather[0].description,"</div>\n        </div>\n        ")})),m.innerHTML=t,function(n){var r="";n.forEach((function(n){r+="<div>\n        <div>".concat(b(n.dt),"</div>\n        <img src=http://openweathermap.org/img//wn/").concat(n.weather[0].icon,'.png>\n        <div class="dailytemp"><span>').concat(Math.round(n.temp.max),"&#176</span><span>").concat(Math.round(n.temp.min),"&#176</span></div>\n        <div>").concat(n.weather[0].description,"</div>\n        </div>\n        ")})),h.innerHTML=r}(n.daily)}))}(n.coord),r=n,o.innerText="".concat(r.name),y.innerText="".concat(r.sys.country),s.innerText="Updated as at ".concat(x(r.dt)),i.innerHTML="<img src=http://openweathermap.org/img//wn/".concat(r.weather[0].icon,"@2x.png />"),a.innerHTML="".concat(Math.round(r.main.temp)," <span>&#176C</span>"),c.innerHTML=r.weather[0].description,u.innerHTML="".concat(r.wind.speed," <span>m/s</span>"),d.innerHTML="".concat(r.main.humidity," <span>%</span>"),f.innerText=x(r.sys.sunrise),l.innerText="".concat(x(r.sys.sunset)),p.innerHTML="".concat(Math.round(r.main.feels_like)," <span>&#176C</span>"),myBar.style.width="".concat(r.main.humidity,"%"),document.getElementById("conditions").style.visibility="visible"):w.innerHTML="Location not available"})).catch((function(n){console.log(n)}))}document.getElementById("form").addEventListener("submit",(function(n){n.preventDefault();var r=document.getElementById("search").value.trim();r&&M(r);var t=document.getElementById("error");t.textContent=""===r?"Enter a Location!!":""})),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js").then((function(n){console.log("SW registered: ",n)})).catch((function(n){console.log("SW registration failed: ",n)}))}))}]);