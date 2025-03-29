!function(e){var n={};function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(i,a,function(n){return e[n]}.bind(null,a));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n),t(1),t(5),t(6)},function(e,n,t){var i=t(2),a=t(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);i(a,{insert:"head",singleton:!1}),e.exports=a.locals||{}},function(e,n,t){"use strict";var i,a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function r(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},i=[],a=0;a<e.length;a++){var l=e[a],c=n.base?l[0]+n.base:l[0],s=t[c]||0,d="".concat(c," ").concat(s);t[c]=s+1;var p=r(d),u={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(o[p].references++,o[p].updater(u)):o.push({identifier:d,updater:g(u,n),references:1}),i.push(d)}return i}function c(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=t.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var s,d=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function p(e,n,t,i){var a=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(n,a);else{var o=document.createTextNode(a),r=e.childNodes;r[n]&&e.removeChild(r[n]),r.length?e.insertBefore(o,r[n]):e.appendChild(o)}}function u(e,n,t){var i=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var m=null,f=0;function g(e,n){var t,i,a;if(n.singleton){var o=f++;t=m||(m=c(n)),i=p.bind(null,t,o,!1),a=p.bind(null,t,o,!0)}else t=c(n),i=u.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var a=r(t[i]);o[a].references--}for(var c=l(e,n),s=0;s<t.length;s++){var d=r(t[s]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}t=c}}}},function(e,n,t){(n=t(4)(!1)).push([e.i,'*,*::before,*::after{box-sizing:border-box}ul[class],ol[class]{padding:0}body,h1,h2,h3,h4,p,ul[class],ol[class],figure,blockquote,dl,dd{margin:0}html{scroll-behavior:smooth}body{min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5}ul[class],ol[class]{list-style:none}a:not([class]){text-decoration-skip-ink:auto}img{max-width:100%;display:block}article>*+*{margin-top:1em}input,button,textarea,select{font:inherit}img:not([alt]){filter:blur(10px)}@media(prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}@font-face{font-family:"digital";src:url(../assets/font/LettersLaughingAtTheirExecution-WJLG.ttf) format("truetype")}body{text-align:center;background:#000;color:#fff;font-family:"Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif}.neon{color:var(--neon-color);text-shadow:0 0 15px var(--neon-glow),0 0 2vmin var(--neon-glow),0 0 4vmin var(--neon-glow),0 0 8vmin var(--neon-glow),0 0 13vmin var(--neon-glow)}a{color:#fff}.wrap{display:flex;min-height:100vh;min-width:100%;justify-content:center;align-items:center}.wrap--inner{display:block;max-width:650px;box-sizing:border-box;padding:10px;margin:0 calc(50% - 50vw);width:100%;text-align:center;--neon-color:hsl(222 100% 95%);--neon-glow:hsl(222 98% 40%)}header{padding:1em 0 2em}header h1{font-size:60px;margin-bottom:.2em}.twitter-share-button{position:absolute!important;right:10px;top:10px}@media screen and (max-width:600px){header h1{font-size:30px}.twitter-share-button{right:5px;top:5px}}main fieldset{max-width:600px;margin:1em auto;padding:20px 0 10px;border-color:var(--neon-color)}main legend{padding:5px;font-size:20px}main ul{display:inline-block;font-size:20px;text-align-last:left}main li{margin-bottom:20px}main input{font-size:20px;vertical-align:middle}main input[type=number]{width:3em;font-size:20px}main select{font-size:20px;width:10em;vertical-align:middle}main .clock--iframe{display:inline-block;margin:0 calc(50% - 50vw);width:98vw;height:200px;border:0}main label{display:inline-block;width:6em;text-align:right}main label::after{content:" : "}main output{display:inline-block;margin-bottom:20px}main .licence::before{content:">> "}main .licence::after{content:" <<"}main h2{margin:3em 1em 1em}main h3{margin-bottom:1em;font-size:16px}main .detail{max-width:700px;margin:1em auto;padding:0 1em;text-align:left}main blockquote{max-width:600px;background-color:#222;margin:1.5em auto;padding:1em;text-align-last:left}footer{margin:3em 0 2em}@media screen and (max-width:600px){main fieldset{margin:1em;padding:10px 0}main .detail,main ul,main legend,main input,main input[type=number],main select,main blockquote{font-size:14px}main blockquote{margin:1.5em 1em}}#viewer{overflow:hidden}#viewer:target{overflow:auto}#clock--wrap{display:flex;min-height:100vh;min-width:100%;justify-content:center;align-items:center}#clock{display:inline-block;margin:.1em auto}#clock .digital{display:inline-block;font-family:digital,arial;position:relative;line-height:1;box-sizing:border-box}#clock .dd,#clock .m,#clock .z{margin-right:.5em}#clock .comma{position:relative;z-index:1;margin:0 .06em;transform:translate(-.04em,-.1em);display:inline-block}#clock .dot{position:relative;z-index:1;display:inline-block}#clock .slash{position:relative;z-index:1;margin:0 .1em;transform:translate(-.04em,-.05em);display:inline-block}.clock__year,.clock__time,.clock__format{display:inline-block}.clock--design__2,.clock--design__3{border:2px solid var(--neon-color);padding:0 12px 0 16px;border-radius:6px;background-color:#000;box-shadow:0 0 2px var(--neon-glow),0 0 1vmin var(--neon-glow),inset 0 0 2px var(--neon-glow),inset 0 0 1vmin var(--neon-glow)}.clock--design__3 .clock__year{display:block;position:relative}.clock--design__3 .clock__year::after{content:"";position:absolute;bottom:0;left:0;width:100%;height:3px;background-color:var(--neon-color);box-shadow:0 0 2px var(--neon-glow),0 0 1vmin var(--neon-glow),0 0 2px var(--neon-glow),0 0 1vmin var(--neon-glow)}#clock .clock--design__3 .dd{margin-right:0}',""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t,i,a,o=e[1]||"",r=e[3];if(!r)return o;if(n&&"function"==typeof btoa){var l=(t=r,i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(a," */")),c=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[o].concat(c).concat([l]).join("\n")}return[o].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(i)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(a[r]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);i&&a[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n){const t=document.querySelectorAll("main input, main select"),i=document.querySelector("iframe"),a=document.querySelector("#clock--url"),o="https://logicismdev.github.io/neon-digital-clock/";let r=o,l=[48,"004cff"];const c=()=>{const e=t[0].value,n=t[1].value.replace("#",""),c=t[2].value,s=t[3].value;l=[e,n,c,s],r=o+"viewer/?s="+l[0]+"&c="+encodeURIComponent(l[1])+"&t="+l[2]+"&d="+l[3],i.src=r+"#viewer",a.href=r,a.innerHTML=r};a&&t.forEach((function(e){e.addEventListener("change",(e=>{c()})),e.addEventListener("keyup",(e=>{c()}))}))},function(e,n){const t=document.querySelector("#clock");let i=1,a=1;const o=()=>{const e=new Date;let n=e.getHours()%12;n=n||12,n=("0"+n).slice(-2);const o=e.getFullYear(),r=("0"+(e.getMonth()+1)).slice(-2),l=("0"+e.getDate()).slice(-2),c=("0"+e.getMinutes()).slice(-2),s=`<div class="clock--inner clock--type__${i} clock--design__${a}">${2==i?`<div class="clock__year"><span class="digital mm">${r}</span><span class="slash">/</span><span class="digital dd">${l}</span></div>`:3==i?`<div class="clock__year"><span class="digital mm">${r}</span><span class="dot">.</span><span class="digital dd">${l}</span></div>`:4==i?`<div class="clock__year"><span class="digital yy">${o}</span><span class="slash">/</span><span class="digital mm">${r}</span><span class="slash">/</span><span class="digital dd">${l}</span></div>`:5==i?`<div class="clock__year"><span class="digital yy">${o}</span><span class="dot">.</span><span class="digital mm">${r}</span><span class="dot">.</span><span class="digital dd">${l}</span></div>`:""}<div class="clock__time"><span class="digital h">${n}</span><span class="comma">:</span><span class="digital m">${c}</span></div><div class="clock__format"><span class="digital z">${n>=12?"AM":"PM"}</span></div></div></div>`;t.innerHTML=s},r=e=>{e=e.replace("%23",""),rgb=(e=>("#"==e.slice(0,1)&&(e=e.slice(1)),3==e.length&&(e=e.slice(0,1)+e.slice(0,1)+e.slice(1,2)+e.slice(1,2)+e.slice(2,3)+e.slice(2,3)),[e.slice(0,2),e.slice(2,4),e.slice(4,6)].map((function(e){return parseInt(e,16)}))))(e);const n=rgb[0]/255,t=rgb[1]/255,i=rgb[2]/255,a=Math.max(n,t,i),o=Math.min(n,t,i),r=a-o;let l=0,c=(a+o)/2,s=r/(1-Math.abs(a+o-1));switch(o){case a:l=0;break;case n:l=(i-t)/r*60+180;break;case t:l=(n-i)/r*60+300;break;case i:l=(t-n)/r*60+60}return[l,s,c]};t&&((()=>{const e=location.search.substring(1).split("&"),n=new Object;for(let t=0;e[t];t++){const i=e[t].split("=");n[i[0]]=i[1]}i=n.t?Number(n.t):1,a=n.d?Number(n.d):1;const o=n.s?n.s:48,l=n.c?r(n.c):r("004cff");t.setAttribute("style","font-size: "+o+"px;\t--neon-color: hsl("+l[0]+" 100% 95%); --neon-glow: hsl("+l[0]+" 98% 40%);")})(),o(),setInterval(o,1e3))}]);
