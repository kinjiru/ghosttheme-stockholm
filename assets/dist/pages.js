!function(n){var a={};function i(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=49)}({0:function(e,t,n){"use strict";e.exports=function(n){var o=[];return o.toString=function(){return this.map(function(e){var t=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var i=(o=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),r=a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"});return[n].concat(r).concat([i]).join("\n")}var o;return[n].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},o.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},a=0;a<this.length;a++){var i=this[a][0];null!=i&&(n[i]=!0)}for(a=0;a<e.length;a++){var r=e[a];null!=r[0]&&n[r[0]]||(t&&!r[2]?r[2]=t:t&&(r[2]="("+r[2]+") and ("+t+")"),o.push(r))}},o}},2:function(e,t,a){var n,i,r,s={},l=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=n.apply(this,arguments)),i}),o=(r={},function(e,t){if("function"==typeof e)return e();if(void 0===r[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}),m=null,d=0,p=[],g=a(3);function c(e,t){for(var n=0;n<e.length;n++){var a=e[n],i=s[a.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](a.parts[r]);for(;r<a.parts.length;r++)i.parts.push(w(a.parts[r],t))}else{var o=[];for(r=0;r<a.parts.length;r++)o.push(w(a.parts[r],t));s[a.id]={id:a.id,refs:1,parts:o}}}}function h(e,t){for(var n=[],a={},i=0;i<e.length;i++){var r=e[i],o=t.base?r[0]+t.base:r[0],p={css:r[1],media:r[2],sourceMap:r[3]};a[o]?a[o].parts.push(p):n.push(a[o]={id:o,parts:[p]})}return n}function f(e,t){var n=o(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=p[p.length-1];if("top"===e.insertAt)a?a.nextSibling?n.insertBefore(t,a.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),p.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(e.insertAt.before,n);n.insertBefore(t,i)}}function u(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=p.indexOf(e);0<=t&&p.splice(t,1)}function x(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return a.nc}();n&&(e.attrs.nonce=n)}return b(t,e.attrs),f(e,t),t}function b(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function w(t,e){var n,a,i,r,o,p;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var s=d++;n=m||(m=x(e)),a=k.bind(null,n,s,!1),i=k.bind(null,n,s,!0)}else i=t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=e,p=document.createElement("link"),void 0===o.attrs.type&&(o.attrs.type="text/css"),o.attrs.rel="stylesheet",b(p,o.attrs),f(o,p),a=function(e,t,n){var a=n.css,i=n.sourceMap,r=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||r)&&(a=g(a));i&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([a],{type:"text/css"}),p=e.href;e.href=URL.createObjectURL(o),p&&URL.revokeObjectURL(p)}.bind(null,n=p,e),function(){u(n),n.href&&URL.revokeObjectURL(n.href)}):(n=x(e),a=function(e,t){var n=t.css,a=t.media;a&&e.setAttribute("media",a);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),function(){u(n)});return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else i()}}e.exports=function(e,o){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(o=o||{}).attrs="object"==typeof o.attrs?o.attrs:{},o.singleton||"boolean"==typeof o.singleton||(o.singleton=l()),o.insertInto||(o.insertInto="head"),o.insertAt||(o.insertAt="bottom");var p=h(e,o);return c(p,o),function(e){for(var t=[],n=0;n<p.length;n++){var a=p[n];(i=s[a.id]).refs--,t.push(i)}e&&c(h(e,o),o);for(n=0;n<t.length;n++){var i;if(0===(i=t[n]).refs){for(var r=0;r<i.parts.length;r++)i.parts[r]();delete s[i.id]}}}};var v,y=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function k(e,t,n,a){var i=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var r=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(r,o[t]):e.appendChild(r)}}},3:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var i=t.protocol+"//"+t.host,r=i+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var n,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(n=0===a.indexOf("//")?a:0===a.indexOf("/")?i+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},49:function(e,t,n){n(6);$(document).ready(function(){postFunctions.postInit()})},6:function(e,t,n){var a=n(7);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(2)(a,i);a.locals&&(e.exports=a.locals)},7:function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"/* Global Styles */\n/*====================================================\n\tCOLOR VARIABLE FOR THEME\n====================================================*/\n/*====================================================\n\tMIXINS\n====================================================*/\n/**\n * Allows you to use retina images at various pixel densities.\n * Examples:\n *\n *   .retina(/images/mypic.jpg, 2);\n *   .retina(/images/mypic.jpg, 3, 100px 100px, left top no-repeat transparent);\n *\n * @param  {String} $path               The path to the file name minus extension.\n * @param  {Number} $cap:    2          The highest pixel density level images exist for.\n * @param  {Value}  $size:   auto auto  The intended width of the rendered image.\n * @param  {Value}  $extras: null       Any other `background` values to be added.\n */\n/* Page Styles */\n.page-template h1 {\n  font-weight: 100;\n}\n.page-template .main-content {\n  box-shadow: 0 0 5px rgba(65, 67, 144, 0.15);\n  background: white;\n}\n.page-about {\n  margin-bottom: 0;\n  font-weight: 500;\n}\n.page-about .author-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  flex-flow: row wrap;\n  margin: 0 40px 20px;\n}\n@media (max-width: 1040px) {\n  .page-about .author-container {\n    margin: 0 10px 30px;\n  }\n}\n@media (max-width: 900px) {\n  .page-about .author-container {\n    margin: 0 30px 30px;\n  }\n}\n.page-about .author-container .author-card-small {\n  width: 48.5%;\n  margin-bottom: 5px !important;\n}\n.page-about figure {\n  margin: 0;\n}\n@media (max-width: 600px) {\n  .page-about figure {\n    margin-bottom: 10px;\n  }\n}\n.page-about iframe {\n  /*box-shadow: 0 0 22px #8d9fb9;*/\n  margin-bottom: 30px;\n  width: 100%;\n  left: 0;\n}\n.page-about .page-title {\n  margin: 40px 40px 30px !important;\n  font-weight: 500;\n}\n@media (max-width: 1100px) {\n  .page-about .page-title {\n    font-size: 3em;\n    display: none;\n  }\n}\n.page-about .about-content > p {\n  margin: 0 44px 20px !important;\n}\n@media (max-width: 600px) {\n  .page-about .about-content > p {\n    margin: 0 30px 20px !important;\n  }\n}\n@media (max-width: 800px) {\n  .page-about .about-content {\n    display: flex;\n    flex-direction: column;\n    margin: -14px 0 0 !important;\n  }\n}\n.page-about .featured-media {\n  display: none !important;\n}\n.page-about .welcomevideo,\n.page-about iframe {\n  margin: 0 0 40px !important;\n  height: 400px;\n  display: block;\n}\n@media (max-width: 1100px) {\n  .page-about .welcomevideo,\n  .page-about iframe {\n    width: 100%;\n    margin: -12px auto 20px 0 !important;\n  }\n}\n@media (max-width: 800px) {\n  .page-about .welcomevideo,\n  .page-about iframe {\n    height: 451px;\n  }\n}\n@media (max-width: 600px) {\n  .page-about .welcomevideo,\n  .page-about iframe {\n    width: 100%;\n    height: 360px;\n    margin: -12px 0 10px 0 !important;\n    top: -7px;\n  }\n}\n@media (max-width: 470px) {\n  .page-about .welcomevideo,\n  .page-about iframe {\n    height: 250px !important;\n    min-height: auto !important;\n  }\n}\n.page-about .fluid-width-video-wrapper {\n  height: 50px;\n}\n@media (max-width: 600px) {\n  .page-about .fluid-width-video-wrapper {\n    margin: 0 40px 30px;\n  }\n}\n.page-about .fluid-width-video-wrapper {\n  width: 90%;\n  margin: auto;\n  position: relative;\n  padding: 0;\n}\n.tag-template .series-cover {\n  background-size: cover;\n  background-position-y: center;\n  height: 300px;\n  background-color: #192e4c;\n  background-blend-mode: soft-light;\n}\n@media (max-width: 600px) {\n  .tag-template .series-cover {\n    margin-left: calc(-50vw + 50%) !important;\n    margin-right: calc(-50vw + 50%) !important;\n    margin-top: -20px;\n  }\n}\n.tag-template .series-cover .tag-name {\n  font-size: 2.2em;\n  color: white !important;\n  font-family: 'TTNormsPro-Regular';\n  text-shadow: 0 0 20px #2f2d56;\n  margin-top: 110px;\n}\n.tag-template .series-cover .tag-description {\n  font-weight: 600;\n  line-height: 1.5;\n  max-width: 90%;\n  margin: 20px auto 0;\n  color: white;\n  font-family: TTNormsPro-Regular;\n  text-shadow: 2px 2px 0 #15133c, 2px 2px 10px #15133c;\n  font-size: 1.2em;\n}\n.tag-template .postlist {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.tag-template .postlist article {\n  margin-bottom: 20px;\n}\n.tag-template .postlist article .content {\n  position: relative;\n  margin: 5px 15px 15px;\n  padding: 0;\n  height: auto;\n  display: block;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .content {\n    height: auto;\n    margin: 5px 15px 15px;\n  }\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .post-content {\n    display: none;\n  }\n}\n.tag-template .postlist article {\n  width: 49%;\n  height: auto;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article {\n    width: 100%;\n    height: auto;\n  }\n}\n.tag-template .postlist article .post-head {\n  margin: 0;\n  min-height: 140px;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .post-head {\n    margin: 0 0 80px;\n    min-height: unset;\n  }\n}\n.tag-template .postlist article .post-title {\n  font-size: 1.4em;\n}\n.tag-template .postlist article .post-title a {\n  font-family: 'ProductSans-Medium', sans-serif;\n  font-weight: 500;\n}\n.tag-template .postlist article .featured-media {\n  display: block;\n  margin: 0 auto;\n  background-size: cover;\n  width: 100%;\n}\n.tag-template .postlist article .post-excerpt {\n  -webkit-line-clamp: 3;\n  display: -webkit-box;\n  min-height: 80px;\n  margin-bottom: 55px;\n  overflow: hidden;\n  font-family: 'TTNormsPro-Regular';\n  font-size: 1em !important;\n  text-overflow: ellipsis;\n  font-weight: 600;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .post-excerpt {\n    font-size: 0.95em !important;\n    min-height: unset;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    max-height: -webkit-fit-content;\n    max-height: -moz-fit-content;\n    max-height: fit-content;\n    position: relative;\n    margin-bottom: 20px;\n  }\n}\n.tag-template .postlist article .post-permalink {\n  position: absolute;\n  bottom: 0;\n  width: -webkit-fill-available;\n  padding: 10px 0 0;\n}\n.tag-template .postlist article .post-permalink .meta {\n  justify-content: left;\n}\n.tag-template .postlist article .post-permalink .btn {\n  padding: 12px 20px;\n  font-size: 16px;\n  font-family: TTNormsPro-Regular, sans-serif;\n}\n.tag-template .postlist article .post-permalink .btn a {\n  line-height: 1;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.tag-template .postlist article .post-permalink .btn:hover {\n  background: #30b1a7;\n  color: white;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .post-permalink .btn {\n    display: block !important;\n  }\n}\n.tag-template .postlist article .author,\n.tag-template .postlist article .tags,\n.tag-template .postlist article p {\n  display: none !important;\n}\n.tag-template .tag-image {\n  width: 100%;\n  height: 370px;\n  background-size: cover !important;\n}\n.tag-template .post-title a {\n  font-size: 1em !important;\n  font-family: 'ProductSans-Regular', sans-serif;\n}\n.tag-template .post-preview {\n  padding: 0 !important;\n}\n.page-series .page-head {\n  margin: 40px 40px 0;\n  padding: 0;\n}\n@media (max-width: 800px) {\n  .page-series .page-head {\n    margin: 40px 30px 0;\n  }\n}\n.page-series .post-title {\n  margin: 27px 28px 20px;\n}\n@media (max-width: 600px) {\n  .page-series .post-title {\n    font-size: 3em;\n  }\n}\n@media (max-width: 900px) {\n  .page-series .post-title .post-content {\n    margin: 25px 50px 0;\n  }\n}\n@media (max-width: 900px) {\n  .page-series .post-title .page-title {\n    margin: 40px 50px 0;\n  }\n}\n@media (max-width: 900px) {\n  .page-series .post-title .container {\n    width: 90% !important;\n  }\n}\n@media (max-width: 600px) {\n  .page-series .post-title .container {\n    width: 100% !important;\n  }\n}\n.page-series p {\n  color: #505050;\n  margin: -20px 40px 20px;\n}\n@media (max-width: 900px) {\n  .page-series p {\n    min-height: 63px;\n    margin: -20px 30px 20px;\n  }\n}\n.page-series .tag-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  flex-flow: row wrap;\n  margin: 30px 40px 20px;\n}\n@media (max-width: 800px) {\n  .page-series .tag-container {\n    margin: 30px 30px 20px;\n  }\n}\n@media (max-width: 600px) {\n  .page-series .tag-container {\n    margin: 20px;\n  }\n}\n.page-series .tag-container .tag-wrapper {\n  background: #025fa5;\n  background: #f4fcff;\n  width: 48.5%;\n  margin: 0 0 15px;\n  border: 1px solid #dadada;\n  transition: all 0.3s ease-out;\n  display: block;\n}\n.page-series .tag-container .tag-wrapper .tag-title {\n  margin: 0;\n  width: auto;\n  background: linear-gradient(0deg, rgba(2, 0, 36, 0) 0%, #001b2f 100%);\n  height: 204px;\n  padding: 20px 20px 0;\n}\n.page-series .tag-container .tag-wrapper .tag-title span {\n  font-size: 1.1em;\n  margin: 0;\n  font-weight: 600;\n}\n@media (max-width: 900px) {\n  .page-series .tag-container .tag-wrapper {\n    margin: 0 0 25px;\n  }\n  .page-series .tag-container .tag-wrapper:last-of-type {\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 600px) {\n  .page-series .tag-container .tag-wrapper {\n    width: 100%;\n  }\n}\n.page-series .tag-container .tag-wrapper:hover {\n  background-color: #0db0e2;\n  border: 1px solid #0db0e2;\n  cursor: pointer !important;\n}\n.page-series .tag-container .tag-wrapper:hover .tag-title {\n  background: linear-gradient(0deg, rgba(2, 0, 36, 0) 0%, #007ad4 100%);\n}\n.page-series .tag-container .tag-wrapper:hover h2,\n.page-series .tag-container .tag-wrapper:hover p,\n.page-series .tag-container .tag-wrapper:hover span {\n  color: #1e608a !important;\n}\n.page-series .tag-container .tag-wrapper:hover .img-wrapper {\n  opacity: 0.7;\n}\n.page-series .tag-container .tag-wrapper .img-wrapper {\n  text-align: center;\n  width: 100%;\n  max-height: 187px;\n  height: auto;\n  position: relative;\n  display: block;\n  transition: all 0.3s ease-out;\n}\n@media (max-width: 800px) {\n  .page-series .tag-container .tag-wrapper .img-wrapper {\n    max-height: 206px;\n  }\n}\n@media (max-width: 600px) {\n  .page-series .tag-container .tag-wrapper .img-wrapper {\n    max-height: 320px;\n  }\n}\n.page-series .tag-container .tag-wrapper .img-wrapper img {\n  max-width: 100%;\n}\n.page-series .tag-container .tag-wrapper .meta-info {\n  font-weight: 900;\n  color: white;\n  font-size: 12px;\n  padding: 0;\n  text-align: left;\n}\n.page-series .tag-container .tag-wrapper .description {\n  padding: 15px;\n  background: rgba(246, 252, 255, 0.9);\n  margin: 0;\n  position: relative;\n  bottom: 0;\n  color: #162c52;\n  width: auto;\n  display: block;\n  align-items: left;\n  min-height: 150px;\n}\n@media (max-width: 600px) {\n  .page-series .tag-container .tag-wrapper .description {\n    min-height: 0;\n  }\n}\n.page-series .tag-container .tag-wrapper .description h2 {\n  color: #3f4856;\n  font-family: 'ProductSans-Regular';\n  margin-bottom: 7px;\n  margin-top: 0;\n  font-size: 1.3em;\n  line-height: 1.2;\n  font-weight: 600;\n}\n.page-series .tag-container .tag-wrapper .description p {\n  font-size: 0.9em;\n  color: #2d2f35;\n  margin: 5px 0;\n  line-height: 1.5;\n  text-align: left;\n  font-family: 'TTNormsPro-Regular';\n  flex-grow: 1;\n  flex-shrink: 0;\n  flex-basis: auto;\n  font-weight: 600;\n}\n@media (max-width: 600px) {\n  .page-series .tag-container .tag-wrapper .description p {\n    margin: 10px 0 25px;\n    min-height: 0;\n  }\n}\n.page-series .tag-container .tag-wrapper .description .postcount {\n  color: #4d4a5e;\n  text-align: right;\n  line-height: 1;\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  font-size: 0.9em;\n  font-family: 'TTNormsPro-Medium';\n}\n.tag-title {\n  color: white;\n}\n.tag-image {\n  margin-top: 30px;\n}\n@media (max-width: 600px) {\n  .tag-image {\n    display: none;\n  }\n}\n.page-resources h1 {\n  margin: 40px 40px 30px;\n}\n.page-resources section {\n  width: -webkit-fill-available;\n}\n.page-resources p {\n  margin: auto 40px 30px;\n}\n.page-resources #tablewrapper {\n  margin: auto 40px 40px;\n  width: -webkit-fill-available;\n}\n.page-resources #resources-table {\n  width: 100%;\n}\n.page-resources #resources-table td {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-align: left;\n}\n.page-resources #resources-table tbody tr td:first-of-type {\n  text-align: center;\n}\n.page-resources #resources-table tbody tr .issuetype_icon {\n  text-align: center !important;\n  width: 25px;\n  height: auto;\n}\n.page-resources #resources-table tbody tr .summmary {\n  font-weight: 600 !important;\n  font-size: 0.85em !important;\n}\n.page-resources #resources-table tbody tr .description {\n  max-width: none;\n}\n.page-resources #resources-table tbody tr .issuetype-name {\n  font-size: 0.8em !important;\n  min-width: 100px;\n}\n.page-resources #resources-table tbody tr.Epic {\n  display: none !important;\n}\n.author-template .tag-name,\n.home-template .tag-name,\n.paged .tag-name,\n.tag-template .tag-name {\n  font-size: 1.3em;\n  margin-top: 0;\n  font-family: 'TTNormsPro-Regular';\n}\n.author-template .tag-name i,\n.home-template .tag-name i,\n.paged .tag-name i,\n.tag-template .tag-name i {\n  font-size: 0.8em;\n  margin-right: 5px;\n  font-weight: 100;\n}\n@media (max-width: 800px) {\n  .author-template .main-header,\n  .home-template .main-header,\n  .paged .main-header,\n  .tag-template .main-header {\n    height: 200px;\n  }\n}\n.series-template {\n  /* Bar which sorts articles */\n}\n@media (max-width: 800px) {\n  .series-template .postlist {\n    width: 100%;\n    margin: 0px 0 20px;\n    padding: 0;\n  }\n}\n@media (max-width: 800px) {\n  .series-template .main-content {\n    width: 95%;\n    margin: auto;\n  }\n}\n.series-template .sorted-series {\n  display: flex;\n  flex-direction: column;\n  background: white;\n  box-shadow: 0 0 5px rgba(65, 67, 144, 0.15);\n}\n.series-template .descending {\n  flex-direction: column-reverse;\n}\n.series-template .series-article-preview {\n  position: relative;\n  background: white;\n  max-width: -webkit-fill-available;\n}\n@media (max-width: 800px) {\n  .series-template .series-article-preview {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    width: 100%;\n  }\n}\n.series-template .series-article-preview:hover {\n  background: #b4d4e6;\n  cursor: pointer;\n}\n.series-template i {\n  height: 15px !important;\n  font-size: 15px !important;\n}\n.series-template .fa-arrow-to-bottom {\n  transition: all 0.3s ease-out;\n}\n.series-template .sort-toggle .desc {\n  display: inline !important;\n}\n.series-template .sort-toggle .asc {\n  display: none !important;\n}\n.series-template .sort-toggle i {\n  -webkit-transform: rotate(180deg) !important;\n          transform: rotate(180deg) !important;\n}\n.series-template .sort-container {\n  display: flex;\n  width: 97%;\n  height: 29px;\n  margin-bottom: 20px;\n  background: #ffffff;\n  box-shadow: 0 0 5px rgba(65, 67, 144, 0.15);\n  padding: 12px 12px;\n  align-items: center;\n  justify-content: flex-end;\n}\n.series-template .sort-container .sort {\n  float: right;\n  line-height: 1;\n}\n.series-template .sort-container .sort:hover {\n  cursor: pointer;\n}\n.series-template .sort-container .sort:hover * {\n  color: #40cebb;\n}\n.series-template .sort-container .sort .desc {\n  display: none;\n}\n.series-template .sort-container .sort .asc {\n  display: inline;\n}\n.series-template .sort-container .sort .sort-title {\n  font-family: 'TTNormsPro-Medium';\n}\n.series-template .sort-container .sort .sort-method {\n  font-family: 'TTNormsPro-Medium';\n}\n.series-template .series-article-preview {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 20px;\n  border-bottom: solid 1px #dadada;\n  transition: all 0.2s ease-out;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview {\n    padding: 15px;\n  }\n}\n.series-template .series-article-preview:last-child {\n  border-bottom: none;\n}\n.series-template .series-article-preview .featured-media {\n  margin: 0;\n  height: auto;\n  width: auto;\n  position: relative;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .featured-media {\n    max-width: 115px;\n    height: 100% !important;\n  }\n}\n.series-template .series-article-preview .post-count {\n  margin: 0 0 3px;\n  font-family: 'ProductSans-Regular', serif;\n  font-weight: 100;\n  color: #407393;\n  font-size: 0.9em;\n  line-height: 1;\n}\n.series-template .series-article-preview .mobile-date,\n.series-template .series-article-preview .mobile-name {\n  display: none;\n}\n.series-template .series-article-preview .details {\n  width: -webkit-fill-available;\n  padding: 0 20px;\n  position: relative;\n  max-height: 125px;\n}\n@media (max-width: 800px) {\n  .series-template .series-article-preview .details {\n    max-width: -webkit-fill-available;\n    padding: 0 0 0 15px;\n  }\n}\n.series-template .series-article-preview .details .meta {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n}\n.series-template .series-article-preview .details .meta i {\n  margin-right: 5px;\n}\n.series-template .series-article-preview .details .meta .info {\n  display: none;\n}\n.series-template .series-article-preview .details .post-head {\n  width: 100%;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .details .post-head {\n    width: -webkit-fill-available;\n    overflow: hidden;\n  }\n}\n.series-template .series-article-preview .details .post-head .post-title {\n  font-weight: 900;\n  width: 100%;\n  margin: 0 0 5px;\n  font-size: 1.3em;\n  min-height: 56px;\n  line-height: 1.2;\n}\n.series-template .series-article-preview .details .post-head .post-title a {\n  font-family: 'ProductSans-Regular', sans-serif;\n  font-size: 1em;\n  color: #153b52;\n  transition: all 0.2s ease-out;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .details .post-head .post-title a {\n    font-family: 'ProductSans-Regular', sans-serif;\n    font-size: 0.9em;\n  }\n}\n.series-template .series-article-preview .details .post-head .post-title a:hover {\n  color: #30b1a7;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .details .post-head .post-title {\n    width: -webkit-fill-available;\n    overflow: hidden;\n    line-height: 1;\n  }\n}\n.series-template .series-article-preview .details .post-head .post-excerpt {\n  color: #153b52;\n  font-family: 'ProductSans-Regular', 'TTNormsPro-Medium', serif;\n  font-size: 1em;\n  font-weight: 100;\n  line-height: 1.21;\n  text-align: left;\n  display: none;\n  white-space: pre-wrap;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .details .post-head .post-excerpt {\n    display: none;\n  }\n}\n.series-template .series-article-preview .details .post-head .postcount {\n  font-family: 'TTNormsPro-Medium', serif;\n  font-size: 1.3em;\n}\n.series-template .series-article-preview .details .meta {\n  padding: 0;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .details .meta {\n    display: none;\n  }\n}\n.series-template .series-article-preview .details .meta .meta-item {\n  margin: auto 40px auto 0;\n}\n.series-template .series-article-preview .details .meta .meta-item:last-of-type {\n  margin: auto 0;\n}\n.series-template .series-article-preview .details .meta .meta-item span {\n  font-family: 'TTNormsPro-Medium';\n}\n.series-template .series-article-preview .details .meta .date *,\n.series-template .series-article-preview .details .meta .tags * {\n  color: #565771;\n}\n.series-template .series-article-preview .details .meta .tags {\n  padding: 2px 8px;\n}\n.series-template .series-article-preview .details .meta .tags i {\n  margin-right: 8px;\n}\n.series-template .series-article-preview .details .meta .author img {\n  width: 30px;\n  margin-right: 8px;\n}\n.series-template .series-article-preview .details .meta .author span {\n  text-transform: capitalize;\n  color: #565771;\n}\n.series-template .series-article-preview .details .meta .author-mobile {\n  display: none !important;\n}\n.series-template .series-article-preview .imagewrapper {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: block;\n  max-width: 326px;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .imagewrapper {\n    max-width: 40%;\n  }\n}\n.series-template .series-article-preview .imagewrapper img {\n  width: 100%;\n}\n.series-template .series-article-preview .imagewrapper .post-card-image {\n  max-width: 220px;\n  height: auto;\n  margin: 0;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .imagewrapper .post-card-image {\n    max-width: 200px;\n  }\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .imagewrapper .post-card-image {\n    max-width: 120px;\n    height: auto;\n    margin: 0;\n  }\n}\n/*====================================================\n\tTag page & author page cover\n====================================================*/\n.cover {\n  text-align: center;\n  background-color: white;\n  padding: 40px;\n  margin-bottom: 30px;\n  width: -webkit-fill-available;\n  width: -moz-fill-available;\n  box-shadow: 0 0 5px rgba(65, 67, 144, 0.15);\n}\n@media (max-width: 800px) {\n  .cover {\n    margin: 0 auto 20px;\n    width: 92%;\n    padding: 40px 0;\n  }\n}\n@media (max-width: 600px) {\n  .cover {\n    margin-left: calc(-50vw + 50%) !important;\n    margin-right: calc(-50vw + 50%) !important;\n    margin-top: 0;\n    padding: 30px 0;\n    width: 100%;\n  }\n}\n.cover .post-title {\n  font-weight: 500;\n}\n.cover .tag-name {\n  margin-top: 0;\n}\n.cover .tag-name i {\n  font-size: 25px;\n  margin-right: 5px;\n}\n.cover .tag-description {\n  width: 80%;\n  margin: 0 auto;\n  text-align: 14px;\n  line-height: 1.5;\n}\n@media (max-width: 600px) {\n  .cover .tag-description {\n    width: 93%;\n    margin: 0 auto;\n    text-align: 14px;\n    font-size: 0.95em;\n    line-height: 1.6;\n  }\n}\n.cover .post-excerpt {\n  font-family: 'TTNormsPro-Medium';\n}\n.cover h3 {\n  margin-bottom: 10px;\n  font-family: 'TTNormsPro-Medium', serif;\n}\n@media (max-width: 600px) {\n  .cover h3 {\n    margin: 5px 10px;\n  }\n}\n.cover .meta-info {\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  font-size: 0.9em;\n  display: flex;\n  justify-content: space-around;\n  width: 81%;\n  margin: auto;\n}\n@media (max-width: 600px) {\n  .cover .meta-info {\n    flex-direction: column;\n  }\n}\n.cover .meta-info span {\n  margin: 0 7px;\n  font-size: 0.9em;\n  line-height: 1.8;\n}\n.cover .meta-info span i {\n  margin-right: 7px;\n}\n@media (max-width: 600px) {\n  .cover .meta-info span {\n    display: block;\n    line-height: 1.6;\n  }\n}\n/* Table Styles for Resources Page */\n.post-template table,\n.page-resources table,\n.post-template td,\n.page-resources td,\n.post-template th,\n.page-resources th {\n  border: none;\n  max-width: 150px;\n  overflow: hidden;\n  text-align: left !important;\n  padding: 15px 20px;\n}\n.post-template table,\n.page-resources table {\n  min-width: 100%;\n  display: table;\n  border-collapse: collapse;\n  border-spacing: 0;\n  border: 1px solid rgba(77, 87, 109, 0.25);\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .post-template table,\n  .page-resources table {\n    width: 100%;\n  }\n}\n.post-template table.left tbody td,\n.page-resources table.left tbody td {\n  text-align: left;\n  vertical-align: top;\n}\n.post-template table.left tbody .pre,\n.page-resources table.left tbody .pre {\n  font-size: 0.8em;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.post-template table thead tr,\n.page-resources table thead tr {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  background-color: #5d6b8a !important;\n  color: white;\n}\n.post-template table thead th,\n.page-resources table thead th {\n  text-align: center;\n  font-family: 'TTNormsPro-Regular';\n  min-width: 30px;\n  padding: 10px;\n  font-size: 0.9em;\n}\n.post-template table thead th strong,\n.page-resources table thead th strong {\n  font-family: 'TTNormsPro-Regular';\n}\n.post-template table thead th::before,\n.page-resources table thead th::before {\n  font-family: 'TTNormsPro-Regular' !important;\n}\n.post-template table.striped tr,\n.page-resources table.striped tr {\n  border-bottom: none;\n}\n.post-template table.striped tbody tr:nth-child(odd),\n.page-resources table.striped tbody tr:nth-child(odd) {\n  background-color: rgba(242, 242, 242, 0.5);\n}\n.post-template table.striped tbody tr > td,\n.page-resources table.striped tbody tr > td {\n  border-radius: 0;\n}\n.post-template table.highlight > tbody > tr,\n.page-resources table.highlight > tbody > tr {\n  transition: background-color 0.25s ease;\n}\n.post-template table.highlight > tbody > tr:hover,\n.page-resources table.highlight > tbody > tr:hover {\n  background-color: rgba(242, 242, 242, 0.5);\n}\n.post-template table.centered tbody tr td,\n.page-resources table.centered tbody tr td,\n.post-template table.centered thead tr th,\n.page-resources table.centered thead tr th {\n  text-align: center;\n}\n.post-template tr:nth-child(odd),\n.page-resources tr:nth-child(odd) {\n  background-color: #fff;\n}\n.post-template tr:nth-child(even),\n.page-resources tr:nth-child(even) {\n  background-color: #f5f8ff;\n}\n.post-template td,\n.page-resources td,\n.post-template th,\n.page-resources th {\n  padding: 15px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: middle;\n  font-size: 0.8em;\n  text-align: center;\n  line-height: 1.2;\n}\n@media (max-width: 600px) {\n  .post-template table,\n  .page-resources table {\n    width: auto;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: table;\n    position: relative;\n    overflow-x: scroll;\n  }\n  .post-template table tbody:hover,\n  .page-resources table tbody:hover {\n    cursor: -webkit-grab !important;\n    cursor: grab !important;\n  }\n  .post-template table td:empty:before,\n  .page-resources table td:empty:before {\n    content: '\\00a0';\n  }\n  .post-template table td,\n  .page-resources table td,\n  .post-template table th,\n  .page-resources table th {\n    margin: 0;\n    vertical-align: top;\n    border-spacing: 0 !important;\n    border-collapse: collapse !important;\n    font-size: 0.8em;\n  }\n  .post-template table td,\n  .page-resources table td {\n    width: -webkit-fill-available;\n    width: -moz-available;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-family: TTNormsPro-Light;\n  }\n  .post-template table thead,\n  .page-resources table thead {\n    position: absolute;\n    left: 0;\n    width: 120px;\n    height: 100%;\n    box-shadow: 1px 0 4px rgba(62, 69, 86, 0.7);\n    z-index: 2;\n  }\n  .post-template table thead th,\n  .page-resources table thead th {\n    display: block;\n    padding: 10px 5px!important !important;\n    font-family: 'TTNormsPro-Regular';\n    letter-spacing: 0.5px;\n    text-align: center;\n    text-align: left;\n    text-transform: capitalize;\n    font-weight: 500;\n    font-size: 0.8em;\n  }\n  .post-template table thead th *,\n  .page-resources table thead th * {\n    font-size: 1em;\n  }\n  .post-template table thead tr,\n  .page-resources table thead tr {\n    display: block;\n    border-spacing: 0;\n    padding: 0;\n    height: 100%;\n  }\n  .post-template table tbody,\n  .page-resources table tbody {\n    margin-left: 120px;\n    width: auto;\n    position: relative;\n    overflow-x: auto;\n    white-space: nowrap;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n  }\n  .post-template table tbody > tr > th,\n  .page-resources table tbody > tr > th {\n    border-bottom: 1px solid #e0e0e0;\n    border-radius: 0;\n    border-spacing: 0;\n    border-collapse: collapse;\n  }\n  .post-template table tbody tr,\n  .page-resources table tbody tr {\n    width: 115px;\n    vertical-align: top;\n    display: flex;\n    flex-direction: column;\n    overflow-wrap: normal;\n    line-break: strict;\n    white-space: inherit;\n    padding: 0 15px;\n    border-bottom: none;\n  }\n  .post-template table tbody tr td,\n  .page-resources table tbody tr td {\n    display: block;\n    min-height: 1.25em;\n    padding: 10px 0 !important;\n    border-spacing: 0;\n    border-collapse: collapse;\n    overflow: hidden;\n    line-break: normal;\n    white-space: nowrap;\n    width: -webkit-fill-available;\n    text-overflow: ellipsis;\n    width: -moz-available;\n    min-width: -webkit-fill-available;\n  }\n  .post-template table tbody:last-child::after,\n  .page-resources table tbody:last-child::after {\n    content: \" \";\n    display: table-row;\n    max-width: 300px;\n    min-width: 300px;\n    margin-left: -300px;\n  }\n}\n.post-template .dataframe thead th,\n.page-resources .dataframe thead th {\n  text-align: center !important;\n  font-family: 'TTNormsPro-Regular' !important;\n}\n.post-template .dataframe tbody tr th:only-of-type,\n.page-resources .dataframe tbody tr th:only-of-type {\n  vertical-align: middle;\n  text-align: center;\n}\n.post-template .tableContainer,\n.page-resources .tableContainer {\n  box-shadow: 0 0 5px #d1d4e8;\n  margin: 20px auto 40px;\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .post-template .tableContainer,\n  .page-resources .tableContainer {\n    margin-left: calc(-50vw + 50%);\n    margin-right: calc(-50vw + 50%);\n    width: auto!important;\n  }\n  .post-template .tableContainer:hover,\n  .page-resources .tableContainer:hover {\n    cursor: -webkit-grab;\n    cursor: grab;\n  }\n}\n.post-template .handscroller:hover,\n.page-resources .handscroller:hover {\n  cursor: -webkit-grab !important;\n  cursor: grab !important;\n}\n.post-template .handscroller *:hover,\n.page-resources .handscroller *:hover {\n  cursor: -webkit-grab !important;\n  cursor: grab !important;\n}\n.post-template .tablefade,\n.page-resources .tablefade {\n  position: absolute;\n  right: 0;\n  height: 100%;\n  width: 70px;\n  top: 0;\n  display: block;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8));\n}\n",""])}});