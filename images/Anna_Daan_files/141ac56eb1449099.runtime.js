(()=>{"use strict";var e,t,r,s,n,a={},o={};function c(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return a[e].call(r.exports,r,r.exports,c),r.loaded=!0,r.exports}c.m=a,c.amdD=function(){throw new Error("define cannot be used indirect")},c.amdO={},e=[],c.O=(t,r,s,n)=>{if(!r){var a=1/0;for(i=0;i<e.length;i++){for(var[r,s,n]=e[i],o=!0,d=0;d<r.length;d++)(!1&n||a>=n)&&Object.keys(c.O).every((e=>c.O[e](r[d])))?r.splice(d--,1):(o=!1,n<a&&(a=n));if(o){e.splice(i--,1);var f=s();void 0!==f&&(t=f)}}return t}n=n||0;for(var i=e.length;i>0&&e[i-1][2]>n;i--)e[i]=e[i-1];e[i]=[r,s,n]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,s){if(1&s&&(e=this(e)),8&s)return e;if("object"==typeof e&&e){if(4&s&&e.__esModule)return e;if(16&s&&"function"==typeof e.then)return e}var n=Object.create(null);c.r(n);var a={};t=t||[null,r({}),r([]),r(r)];for(var o=2&s&&e;"object"==typeof o&&!~t.indexOf(o);o=r(o))Object.getOwnPropertyNames(o).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,c.d(n,a),n},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>842===e?"f62d6093ab4c135d.vendor.js":252===e?"b26efd9e51fd2430.vendor.js":479===e?"28461df9b76666a6.js":480===e?"8483d446dad97563.js":131===e?"f726e59a60b7cf96.js":225===e?"43d1cd34b1832ea8.js":408===e?"83275c36c4b8a49f.js":696===e?"6298287ef3bce72f.js":717===e?"999bf51e7e7bc945.js":175===e?"0093c1f7c924e0ac.js":171===e?"669f8b706a32f6f5.js":907===e?"b8b1974a96afa746.js":360===e?"d4b74967932868b2.js":347===e?"21d0f8df5d4f1d25.js":978===e?"faabd36b32723cfa.vendor.js":887===e?"a3f7ea50de836738.js":768===e?"9228134bbd4b716f.vendor.js":676===e?"d0d1fff4894a371f.js":42===e?"1ebe4ec7c1194b94.js":361===e?"705ff3ccb233c3d3.js":291===e?"508e27764a494397.js":728===e?"4ef5a71f207843c4.js":582===e?"a54ab0a30c31550f.js":760===e?"478ae85b15b97d33.js":396===e?"c1bec771c879e8a9.js":792===e?"777373d69c96fc84.vendor.js":26===e?"2d3d4a48ae261fca.vendor.js":218===e?"696633e279063f30.vendor.js":204===e?"97bbbc7beb138e95.js":432===e?"407cafdb4ef2fe60.js":968===e?"9c7d528fe96f4dd4.js":548===e?"5a91e8ab13b495ec.vendor.js":586===e?"c9c9f67223b7c49f.js":940===e?"f9a4e468f37d8608.vendor.js":313===e?"993bc572b20c2ca2.js":293===e?"65273a3f0b312822.js":634===e?"075575f00e31358f.vendor.js":void 0,c.miniCssF=e=>414===e?"ef46db3751d8e999.runtime.css":{413:1,190:1,842:1,252:1,978:1,768:1,792:1,26:1,218:1,548:1,940:1,634:1}[e]?"ef46db3751d8e999.vendor.css":2===e?"0a1654c9ebedde15.css":{479:1,480:1,131:1,696:1,968:1,293:1}[e]?"ef46db3751d8e999.css":225===e?"3557a427abefaa24.css":408===e?"f322fb703ae71a74.css":717===e?"c72f575e369d1eab.css":175===e?"bd9a268b2b06d3c0.css":171===e?"483dc4396dbe9893.css":907===e?"d12053297bad7a67.css":360===e?"9b731f659d2c7c6c.css":347===e?"7af46d64f0eeb739.css":887===e?"0bac24633f991515.css":676===e?"b6479476fcdafabb.css":42===e?"2241612f35aa5839.css":361===e?"3fc0423a1ca36769.css":291===e?"41168acfb4d45c52.css":728===e?"c930ea33bf63ff45.css":582===e?"ebdc351874608219.css":760===e?"ce99490ba9864499.css":396===e?"9aae809f274951e1.css":204===e?"f40a6dc2f0d7854b.css":432===e?"bb1d8eefe6941def.css":586===e?"967ee0cc48c8e976.css":313===e?"170dec5850bc5cdd.css":void 0,c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s={},n="@canva/web:",c.l=(e,t,r,a)=>{if(s[e])s[e].push(t);else{var o,d;if(void 0!==r)for(var f=document.getElementsByTagName("script"),i=0;i<f.length;i++){var l=f[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+r){o=l;break}}o||(d=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.setAttribute("data-webpack",n+r),o.src=e,o.async=!1),s[e]=[t];var b=(t,r)=>{o.onerror=o.onload=null,clearTimeout(u);var n=s[e];if(delete s[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(r))),t)return t(r)},u=setTimeout(b.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=b.bind(null,o.onerror),o.onload=b.bind(null,o.onload),d&&document.head.appendChild(o)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{const e=c.e,t=function e(t,r,s){return t().catch((function(n){return 0===s?Promise.reject(n):(a=r,new Promise((function(e){setTimeout(e,a)}))).then((function(){return e(t,r,s-1)}));var a}))};c.e=function(r){return t((function(){return e(r)}),1e3,5)}})(),c.p="",function(){let e=c.miniCssF,t="undefined"!=typeof self&&void 0!==self.document?self.document.body.parentElement.getAttribute("dir"):"ltr";"ltr"!==t&&"rtl"!==t&&(console.warn("Could not determine the direction of text, please check that the dir attribute is set on the html tag"),t="ltr"),c.miniCssF=function(r){const s=self.window.cmsg&&self.window.cmsg.cssAssets&&self.window.cmsg.cssAssets[r]&&self.window.cmsg.cssAssets[r][t];return s||e.apply(this,arguments)}}();var d,f,i={};c.f.compat=(e,t)=>{!function(e,t,r){if(null==t[e]){let r,n;try{r=window.cmsg.locale||"en",n=window.cmsg.assets[r][e].js||[]}catch(s){return}t[e]=Promise.all(n.map((r=>new Promise(((s,n)=>{const a=document.createElement("script");a.async=!1,a.onerror=()=>{delete t[e],n(new Error(`Fail to load message files@${r}`))},a.onload=()=>{t[e]=0,s()},a.src=c.p+r,document.head.appendChild(a)})))))}t[e]&&r.push(t[e])}(e,i,t)},d=e=>new Promise(((t,r)=>{var s=c.miniCssF(e),n=c.p+s;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var n=(o=r[s]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===e||n===t))return o}var a=document.getElementsByTagName("style");for(s=0;s<a.length;s++){var o;if((n=(o=a[s]).getAttribute("data-href"))===e||n===t)return o}})(s,n))return t();((e,t,r,s)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var o=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=o,d.request=c,n.parentNode.removeChild(n),s(d)}},n.href=t,document.head.appendChild(n)})(e,n,t,r)})),f={414:0},c.f.miniCss=(e,t)=>{f[e]?t.push(f[e]):0!==f[e]&&{42:1,171:1,175:1,204:1,225:1,291:1,313:1,347:1,360:1,361:1,396:1,408:1,432:1,582:1,586:1,676:1,717:1,728:1,760:1,887:1,907:1}[e]&&t.push(f[e]=d(e).then((()=>{f[e]=0}),(t=>{throw delete f[e],t})))},(()=>{var e={414:0};c.f.j=(t,r)=>{var s=c.o(e,t)?e[t]:void 0;if(0!==s)if(s)r.push(s[2]);else if(414!=t){var n=new Promise(((r,n)=>s=e[t]=[r,n]));r.push(s[2]=n);var a=c.p+c.u(t),o=new Error;c.l(a,(r=>{if(c.o(e,t)&&(0!==(s=e[t])&&(e[t]=void 0),s)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",o.name="ChunkLoadError",o.type=n,o.request=a,s[1](o)}}),"chunk-"+t,t)}else e[t]=0},c.O.j=t=>0===e[t];var t=(t,r)=>{var s,n,[a,o,d]=r,f=0;if(a.some((t=>0!==e[t]))){for(s in o)c.o(o,s)&&(c.m[s]=o[s]);if(d)var i=d(c)}for(t&&t(r);f<a.length;f++)n=a[f],c.o(e,n)&&e[n]&&e[n][0](),e[a[f]]=0;return c.O(i)},r=self.webpackChunk_canva_web=self.webpackChunk_canva_web||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();
//# sourceMappingURL=sourcemaps/141ac56eb1449099.runtime.js.map