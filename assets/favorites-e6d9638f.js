import{s as u,P as h}from"./go-top-f33d03b6.js";const l=document.querySelector(".js-favorites");document.querySelector(".js-favorites-message");const f="checkout";let v=1,a=8,g=JSON.parse(localStorage.getItem(f))??[];function p(s=1){g.length===0?l.insertAdjacentHTML("beforeend",`<p class="favoritesMessage js-favorites-message">
    It appears that you haven't added any exercises to your favorites yet.
    To get started, you can add exercises that you like to your favorites
    for easier access in the future.
  </p>`):(l.innerHTML="",l.insertAdjacentHTML("beforeend",y(g,s)),document.querySelectorAll(".favorites-card-item").forEach(t=>{t.querySelector(".btnStartFav").addEventListener("click",n=>{document.querySelector(".backdrop").classList.remove("is-hidden"),console.log(t),document.querySelector(".backdrop-exr").setAttribute("id",t.getAttribute("data-id"))})}),document.querySelectorAll(".favorites-card-item").forEach(t=>{console.log(t.querySelector(".trash-icon")),t.querySelector(".trash-icon").addEventListener("click",n=>{console.log(t.getAttribute("data-id"));const r=t.getAttribute("data-id");let i=JSON.parse(localStorage.getItem(f))??[];i.find(({_id:d})=>d===r);const e=i.findIndex(({_id:d})=>d===r);e!==-1&&(i.splice(e,1),localStorage.setItem(f,JSON.stringify(i)),t.remove()),i.length===0&&l.insertAdjacentHTML("beforeend",`<p class="favoritesMessage js-favorites-message">
    It appears that you haven't added any exercises to your favorites yet.
    To get started, you can add exercises that you like to your favorites
    for easier access in the future.
  </p>`)})}))}p(v);function y(s,o=1){const c=window.innerWidth;c<768?a=8:c<1440?a=10:a=0;const t=g.length;let n=0,r=t;a>0&&(n=(o-1)*a,r=o*a,r>t&&(r=t));const i=[];for(let e=n;e<r;e++){const d=`<div data-id="${s[e]._id}" class="favorites-card-item">
      <div class="favorites-card-workout">
      <p class="favorites-workout">WORKOUT</p>
      <div class="btnTrashFav">
      <svg class="trash-icon" width="16" height="16">
                  <use href="${u}#icon-trash"></use>
                </svg>
                </div>
              <div class="btnStartFav">
                <div class="favorites-start">Start</div>
              
                <svg class="favorites-header-arrow" width="16" height="16">
                  <use href="${u}#icon-arrow"></use>
                </svg>
              </div>
              </div>
  
              <div class="favorites-name">
              <div class="favorites-name-svg">
                <svg class="favorites-name-svg-svg" width="20" height="20">
                  <use href="${u}#icon-running-stick-figure"></use>
                </svg>
              </div>
              <div class="favorites-name-text">${s[e].name}</div>
            </div>
            <div class="description">
            <p class="description-burned-grey">Burned calories:</p>
            <p class="description-burned-normal">${s[e].burnedCalories} / ${s[e].time} min</p>
            <p class="description-part-grey">Body part:</p>
            <p class="description-part-normal">${s[e].bodyPart}</p>
            <p class="description-target-grey">Target:</p>
            <p class="description-target-normal">${s[e].target}</p>
            </div>
      </div>`;i.push(d)}if(a>0){let e=t/a;e=Math.trunc(e),e*a<t&&(e=e+1),m(e)}return i.join(" ")}function m(s){const o=document.getElementById("pagination");o.innerHTML="";const c={totalItems:s*a,itemsPerPage:a,visiblePages:5,page:v};new h(o,c).on("beforeMove",n=>{v=n.page,p(v)})}g.length/8;
