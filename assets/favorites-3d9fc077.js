import{s as f,P as m}from"./go-top-742b48e5.js";const v=document.querySelector(".js-favorites");document.querySelector(".js-favorites-message");const g="checkout";let l=1,a=8,u=JSON.parse(localStorage.getItem(g))??[];function p(s=1){if(u.length===0)v.insertAdjacentHTML("beforeend",`<p class="favoritesMessage js-favorites-message">
    It appears that you haven't added any exercises to your favorites yet.
    To get started, you can add exercises that you like to your favorites
    for easier access in the future.
  </p>`);else{v.innerHTML="",v.insertAdjacentHTML("beforeend",y(u,s)),document.querySelectorAll(".favorites-card-item").forEach(t=>{t.querySelector(".btnStartFav").addEventListener("click",c=>{document.querySelector(".backdrop").classList.remove("is-hidden"),console.log(t),document.querySelector(".backdrop-exr").setAttribute("data-id",t.getAttribute("data-id")),document.querySelector(".modal-add-favorates-btn").textContent="Remove favorites",document.querySelector(".modal-add-favorates-btn").classList.add("removeFav")})});const i=document.querySelectorAll(".favorites-card-item");i.forEach(t=>{t.querySelector(".trash-icon").addEventListener("click",c=>{const r=t.getAttribute("data-id");let o=JSON.parse(localStorage.getItem(g))??[];o.find(({_id:d})=>d===r);const e=o.findIndex(({_id:d})=>d===r);e!==-1&&(o.splice(e,1),localStorage.setItem(g,JSON.stringify(o)),t.remove(),h(i/8)),o.length===0&&v.insertAdjacentHTML("beforeend",`<p class="favoritesMessage js-favorites-message">
    It appears that you haven't added any exercises to your favorites yet.
    To get started, you can add exercises that you like to your favorites
    for easier access in the future.
  </p>`)})})}}p(l);function y(s,n=1){const i=window.innerWidth;i<768?a=8:i<1440?a=10:a=0;const t=u.length;let c=0,r=t;a>0&&(c=(n-1)*a,r=n*a,r>t&&(r=t));const o=[];for(let e=c;e<r;e++){const d=`<div data-id="${s[e]._id}" class="favorites-card-item">
      <div class="favorites-card-workout">
      <p class="favorites-workout">WORKOUT</p>
      <div class="btnTrashFav">
      <svg class="trash-icon" width="16" height="16">
                  <use href="${f}#icon-trash"></use>
                </svg>
                </div>
              <div class="btnStartFav">
                <div class="favorites-start">Start</div>
              
                <svg class="favorites-header-arrow" width="16" height="16">
                  <use href="${f}#icon-arrow"></use>
                </svg>
              </div>
              </div>
  
              <div class="favorites-name">
              <div class="favorites-name-svg">
                <svg class="favorites-name-svg-svg" width="20" height="20">
                  <use href="${f}#icon-running-stick-figure"></use>
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
      </div>`;o.push(d)}if(a>0){let e=t/a;e=Math.trunc(e),e*a<t&&(e=e+1),h(e)}return o.join(" ")}function h(s){const n=document.getElementById("pagination");n.innerHTML="";const i={totalItems:s*a,itemsPerPage:a,visiblePages:5,page:l};new m(n,i).on("beforeMove",c=>{l=c.page,p(l)})}u.length/8;
