import{a as p,S as u,i as g}from"./assets/vendor-GLHlJXmn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d=p.create({baseURL:"https://pixabay.com"});async function y(s){try{return Pace.start(),(await d.get("/api/",{params:{key:"48823669-6a3dc21720ce29a0e321c0b37",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data}catch(r){console.log(r)}finally{Pace.stop()}}const l=document.querySelector(".gallery"),h=s=>{s.hits.length===0&&g.error({title:"Sorry, there are no images matching",titleColor:"#fafafb",titleSize:"16px",titleLineHeight:"1.5",message:"your search query.Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight",theme:"dark",maxWidth:"432px"});const r=s.hits.map(i=>{const{largeImageURL:a,webformatURL:e,tags:t,likes:o,views:c,comments:f,downloads:m}=i;return`<li class="gallery-item">
                    <a class="gallery-link" href="${a}">
                        <img
                            class="gallery-image"
                            src="${e}"
                            alt="${t}"
                        />
                    </a>
                    <ul class="wrapper">
                        <li class="info-list">Likes <p class="info-text">${o}</p></li>
                        <li class="info-list">Views <p class="info-text">${c}</p></li>
                        <li class="info-list">Comments <p class="info-text">${f}</p></li>
                        <li class="info-list">Downloads <p class="info-text">${m}</p></li>
                    </ul>
                </li>`}).join("");l.insertAdjacentHTML("beforeend",r),L.refresh()};let L=new u(".gallery-item a",{captionsData:"alt",captionDelay:250});const b={form:document.querySelector(".form")},{form:n}=b;n.addEventListener("submit",s=>{s.preventDefault(),l.innerHTML="";const r=n.elements.image.value.trim();r!==""&&(y(r).then(i=>h(i)),n.reset())});
//# sourceMappingURL=index.js.map
