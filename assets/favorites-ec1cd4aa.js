import{s as g,P as m}from"./go-top-d669fd5c.js";const v=document.querySelector(".js-favorites");document.querySelector(".js-favorites-message");const f="checkout";let l=1,a=8,u=JSON.parse(localStorage.getItem(f))??[];function p(s=1){if(u.length===0)v.insertAdjacentHTML("beforeend",`<p class="favoritesMessage js-favorites-message">
    It appears that you haven't added any exercises to your favorites yet.
    To get started, you can add exercises that you like to your favorites
    for easier access in the future.
  </p>`);else{v.innerHTML="",v.insertAdjacentHTML("beforeend",y(u,s)),document.querySelectorAll(".favorites-card-item").forEach(t=>{t.querySelector(".btnStartFav").addEventListener("click",c=>{document.querySelector(".backdrop").classList.remove("is-hidden"),console.log(t),document.querySelector(".backdrop-exr").setAttribute("id",t.getAttribute("data-id"))})});const o=document.querySelectorAll(".favorites-card-item");o.forEach(t=>{t.querySelector(".trash-icon").addEventListener("click",c=>{const r=t.getAttribute("data-id");let i=JSON.parse(localStorage.getItem(f))??[];i.find(({_id:d})=>d===r);const e=i.findIndex(({_id:d})=>d===r);e!==-1&&(i.splice(e,1),localStorage.setItem(f,JSON.stringify(i)),t.remove(),h(o/8)),i.length===0&&v.insertAdjacentHTML("beforeend",`<p class="favoritesMessage js-favorites-message">
    It appears that you haven't added any exercises to your favorites yet.
    To get started, you can add exercises that you like to your favorites
    for easier access in the future.
  </p>`)})})}}p(l);function y(s,n=1){const o=window.innerWidth;o<768?a=8:o<1440?a=10:a=0;const t=u.length;let c=0,r=t;a>0&&(c=(n-1)*a,r=n*a,r>t&&(r=t));const i=[];for(let e=c;e<r;e++){const d=`<div data-id="${s[e]._id}" class="favorites-card-item">
      <div class="favorites-card-workout">
      <p class="favorites-workout">WORKOUT</p>
      <div class="btnTrashFav">
      <svg class="trash-icon" width="16" height="16">
                  <use href="${g}#icon-trash"></use>
                </svg>
                </div>
              <div class="btnStartFav">
                <div class="favorites-start">Start</div>
              
                <svg class="favorites-header-arrow" width="16" height="16">
                  <use href="${g}#icon-arrow"></use>
                </svg>
              </div>
              </div>
  
              <div class="favorites-name">
              <div class="favorites-name-svg">
                <svg class="favorites-name-svg-svg" width="20" height="20">
                  <use href="${g}#icon-running-stick-figure"></use>
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
      </div>`;i.push(d)}if(a>0){let e=t/a;e=Math.trunc(e),e*a<t&&(e=e+1),h(e)}return i.join(" ")}function h(s){const n=document.getElementById("pagination");n.innerHTML="";const o={totalItems:s*a,itemsPerPage:a,visiblePages:5,page:l};new m(n,o).on("beforeMove",c=>{l=c.page,p(l)})}u.length/8;
