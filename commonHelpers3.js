import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{t as m}from"./assets/vendor-1e54b975.js";const r="feedback-form-state",o=document.querySelector(".feedback-form"),a=[o.elements.email,o.elements.message],n=()=>a.reduce((e,t)=>({...e,[t.name]:t.value.trim()}),{}),c=e=>a.forEach(t=>t.value=e[t.name]||"");function s(){localStorage.setItem(r,JSON.stringify(n()))}function l(e){e.preventDefault(),console.log(n()),localStorage.removeItem(r),e.currentTarget.reset()}c(JSON.parse(localStorage.getItem(r))||{});o.addEventListener("input",m(s,500));o.addEventListener("submit",l);
//# sourceMappingURL=commonHelpers3.js.map