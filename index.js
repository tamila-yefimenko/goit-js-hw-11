import{a as u,S as g,i as d}from"./assets/vendor-GLHlJXmn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y=u.create({baseURL:"https://pixabay.com"});async function h(){try{return Pace.start(),(await y.get("/api",{params:{key:"48823669-6a3dc21720ce29a0e321c0b37",q:`${l}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data}catch(s){console.log(s)}finally{Pace.stop()}}const c=document.querySelector(".gallery"),L=s=>{s.hits.length===0&&d.info({title:"Sorry, there are no images matching",titleColor:"#fafafb",titleSize:"16px",titleLineHeight:"1.5",message:"your search query.Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight",iconUrl:"./icon.svg",theme:"dark",maxWidth:"432px"});const r=s.hits.map(a=>{const{largeImageURL:o,webformatURL:e,tags:t,likes:i,views:f,comments:m,downloads:p}=a;return`<li class="gallery-item">
                    <a class="gallery-link" href="${o}">
                        <img
                            class="gallery-image"
                            src="${e}"
                            alt="${t}"
                        />
                    </a>
                    <ul class="wrapper">
                        <li class="info-list">Likes <p class="info-text">${i}</p></li>
                        <li class="info-list">Views <p class="info-text">${f}</p></li>
                        <li class="info-list">Comments <p class="info-text">${m}</p></li>
                        <li class="info-list">Downloads <p class="info-text">${p}</p></li>
                    </ul>
                </li>`}).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()};let b=new g(".gallery-item a",{captionsData:"alt",captionDelay:250});const x={form:document.querySelector(".form")},{form:n}=x;let l;n.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="",l=n.elements.image.value.trim(),l!==""&&(h().then(r=>L(r)),n.reset())});
//# sourceMappingURL=index.js.map
