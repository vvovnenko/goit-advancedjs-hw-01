import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{P as r,t as a}from"./assets/vendor-1e54b975.js";const e="videoplayer-current-time",n=function({seconds:o}){localStorage.setItem(e,JSON.stringify(o))},i=()=>JSON.parse(localStorage.getItem(e))||0,m=document.querySelector("iframe#vimeo-player"),t=new r(m);t.setCurrentTime(i());t.on("timeupdate",a(n,1e3));
//# sourceMappingURL=commonHelpers2.js.map
