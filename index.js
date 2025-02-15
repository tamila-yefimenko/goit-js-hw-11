import{a as y,S as h,i as L}from"./assets/vendor-GLHlJXmn.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const b=y.create({baseURL:"https://pixabay.com"});async function x(r){try{return Pace.start(),(await b.get("/api/",{params:{key:"48823669-6a3dc21720ce29a0e321c0b37",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data}catch(s){console.log(s)}finally{Pace.stop()}}const l=document.querySelector(".gallery"),w=r=>{r.hits.length===0&&L.error({title:"Sorry, there are no images matching",titleColor:"#fafafb",titleSize:"16px",titleLineHeight:"1.5",message:"your search query.Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight",theme:"dark",maxWidth:"432px"});const s=r.hits.map(i=>{const{largeImageURL:a,webformatURL:e,tags:t,likes:o,views:c,comments:f,downloads:m}=i,p=t.split(", ").filter((u,g,d)=>d.indexOf(u)===g).join(", ");return`<li class="gallery-item">
                    <a class="gallery-link" href="${a}">
                        <img
                            class="gallery-image"
                            src="${e}"
                            alt="${p}"
                        />
                    </a>
                    <ul class="wrapper">
                        <li class="info-list">Likes <p class="info-text">${o}</p></li>
                        <li class="info-list">Views <p class="info-text">${c}</p></li>
                        <li class="info-list">Comments <p class="info-text">${f}</p></li>
                        <li class="info-list">Downloads <p class="info-text">${m}</p></li>
                    </ul>
                </li>`}).join("");l.insertAdjacentHTML("beforeend",s),S.refresh()};let S=new h(".gallery-item a",{captionsData:"alt",captionDelay:250});const $={form:document.querySelector(".form")},{form:n}=$;n.addEventListener("submit",r=>{r.preventDefault(),l.innerHTML="";const s=n.elements.image.value.trim();s!==""&&(x(s).then(i=>w(i)),n.reset())});
//# sourceMappingURL=index.js.map
