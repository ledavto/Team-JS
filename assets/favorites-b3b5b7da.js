import{P as p}from"./go-top-9f2a7146.js";const c=document.querySelector(".js-favorites");document.querySelector(".js-favorites-message");const g="checkout";let d=1,a=8,l=JSON.parse(localStorage.getItem(g))??[];function f(t=1){l.length===0?c.insertAdjacentHTML("beforeend",`<p class="favoritesMessage js-favorites-message">
    It appears that you haven't added any exercises to your favorites yet.
    To get started, you can add exercises that you like to your favorites
    for easier access in the future.
  </p>`):(c.innerHTML="",c.insertAdjacentHTML("beforeend",u(l,t)))}f(d);function u(t,r=1){const o=window.innerWidth;o<768?a=8:o<1440?a=10:a=0;const s=l.length;let n=0,i=s;a>0&&(n=(r-1)*a,i=r*a,i>s&&(i=s));const v=[];for(let e=n;e<i;e++)v.push(`<div data-id="${t[e]._id}"class="favorites-card-item">
      <div class="favorites-card-workout">
      <p class="favorites-workout">WORKOUT</p>
      <img class="trash-icon" src="./img/trash-01.png" alt="icon-trash" width="16"/> 
      <div class="favorites-start">Start</div>
              <div>
                <svg class="favorites-header-arrow" width="16" height="16">
                  <use href="./img/icons.svg#icon-arrow"></use>
                </svg>
              </div>
              </div>
  
              <div class="favorites-name">
              <div class="favorites-name-svg">
                <svg class="favorites-name-svg-svg" width="20" height="20">
                  <use href="./img/icons.svg#icon-running-stick-figure"></use>
                </svg>
              </div>
              <div class="favorites-name-text">${t[e].name}</div>
            </div>
            <div class="description">
            <p class="description-burned-grey">Burned calories:</p>
            <p class="description-burned-normal">${t[e].burnedCalories} / ${t[e].time} min</p>
            <p class="description-part-grey">Body part:</p>
            <p class="description-part-normal">${t[e].bodyPart}</p>
            <p class="description-target-grey">Target:</p>
            <p class="description-target-normal">${t[e].target}</p>
            </div>
      </div>`);if(a>0){let e=s/a;e=Math.trunc(e),e*a<s&&(e=e+1),h(e)}return v.join(" ")}function h(t){const r=document.getElementById("pagination");r.innerHTML="";const o={totalItems:t*a,itemsPerPage:a,visiblePages:5,page:d};new p(r,o).on("beforeMove",n=>{d=n.page,f(d)})}l.length/8;c.addEventListener("click",m);function m(t){if(!t.target.classList.contains("trash-icon"))return;const r=t.target.closest(".favorites-card-item"),o=r.dataset.id;let s=JSON.parse(localStorage.getItem(g))??[];s.find(({_id:i})=>i===o);const n=s.findIndex(({_id:i})=>i===o);n!==-1&&(s.splice(n,1),localStorage.setItem(g,JSON.stringify(s)),r.remove()),s.length===0&&c.insertAdjacentHTML("beforeend",`<p class="favoritesMessage js-favorites-message">
    It appears that you haven't added any exercises to your favorites yet.
    To get started, you can add exercises that you like to your favorites
    for easier access in the future.
  </p>`)}
