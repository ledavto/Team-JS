import{m,s as u,P as y}from"./go-top-c35d1c6c.js";const l=document.querySelector(".js-favorites");document.querySelector(".js-favorites-message");const g="checkout";let v=1,a=8,f=JSON.parse(localStorage.getItem(g))??[];function p(s=1){if(f.length===0)l.insertAdjacentHTML("beforeend",`<p class="favoritesMessage js-favorites-message">
    It appears that you haven't added any exercises to your favorites yet.
    To get started, you can add exercises that you like to your favorites
    for easier access in the future.
  </p>`);else{l.innerHTML="",l.insertAdjacentHTML("beforeend",S(f,s)),document.querySelectorAll(".favorites-card-item").forEach(t=>{t.querySelector(".btnStartFav").addEventListener("click",async()=>{const r=t.getAttribute("data-id");document.querySelector(".modal-general").setAttribute("data-id",r),await m.setDataExerciseModal(r)})});const n=document.querySelectorAll(".favorites-card-item");n.forEach(t=>{t.querySelector(".trash-icon").addEventListener("click",r=>{const i=t.getAttribute("data-id");let o=JSON.parse(localStorage.getItem(g))??[];o.find(({_id:d})=>d===i);const e=o.findIndex(({_id:d})=>d===i);e!==-1&&(o.splice(e,1),localStorage.setItem(g,JSON.stringify(o)),t.remove(),h(n/8)),o.length===0&&l.insertAdjacentHTML("beforeend",`<p class="favoritesMessage js-favorites-message">
    It appears that you haven't added any exercises to your favorites yet.
    To get started, you can add exercises that you like to your favorites
    for easier access in the future.
  </p>`)})})}}p(v);function S(s,c=1){const n=window.innerWidth;n<768?a=8:n<1440?a=10:a=0;const t=f.length;let r=0,i=t;a>0&&(r=(c-1)*a,i=c*a,i>t&&(i=t));const o=[];for(let e=r;e<i;e++){const d=`<div data-id="${s[e]._id}" class="favorites-card-item">
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
      </div>`;o.push(d)}if(a>0){let e=t/a;e=Math.trunc(e),e*a<t&&(e=e+1),h(e)}return o.join(" ")}function h(s){const c=document.getElementById("pagination");c.innerHTML="";const n={totalItems:s*a,itemsPerPage:a,visiblePages:5,page:v};new y(c,n).on("beforeMove",r=>{v=r.page,p(v)})}
