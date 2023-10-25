import{a as f,P as v}from"./go-top-70ca806f.js";let i=1,s="Body parts",c,p="",m="";function u(e,t=1){window.innerWidth<768?c=9:c=12,f.getFilters({filter:e,page:t,limit:c}).then(o=>{const d=document.getElementById("category-cards");d.innerHTML="",o.results.forEach(n=>{const a=document.createElement("div");a.style.background=`linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${n.imgURL}) lightgray -22.462px -5px / 109.595% 107.556% no-repeat`,a.classList.add("category-card"),a.innerHTML=`<h3 class="category-title">${n.name}</h3>
          <p class="category-subcategory"> ${n.filter}</p>
        `,d.appendChild(a)}),x(o.totalPages)}).catch(o=>{console.error(o)})}function x(e){const t=document.getElementById("pagination");t.innerHTML="";const r={totalItems:e*c,itemsPerPage:c,visiblePages:5,page:i};new v(t,r).on("beforeMove",d=>{const n=d.page;i=n,u(s,n)})}document.getElementById("bodypart-filter").addEventListener("click",function(){i=1,s="Body parts",document.querySelector(".exercise-section-title").innerHTML="",document.querySelector(".exercise-section-title").innerHTML='Exercise<span class="exercise-section-title-span"></span>',document.querySelector(".exercise-section-search").style.display="none",u(s,i)});document.getElementById("muscles-filter").addEventListener("click",function(){i=1,s="Muscles",document.querySelector(".exercise-section-title").innerHTML="",document.querySelector(".exercise-section-title").innerHTML='Exercise<span class="exercise-section-title-span"></span>',document.querySelector(".exercise-section-search").style.display="none",u(s,i)});document.getElementById("equipment-filter").addEventListener("click",function(){i=1,s="Equipment",document.querySelector(".exercise-section-title").innerHTML="",document.querySelector(".exercise-section-title").innerHTML='Exercise<span class="exercise-section-title-span"></span>',document.querySelector(".exercise-section-search").style.display="none",u(s,i)});u(s);document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".exercise-section-button");e.forEach(t=>{t.addEventListener("click",function(){e.forEach(r=>{r.classList.remove("js-active-filter-button")}),this.classList.add("js-active-filter-button")})})});document.querySelector(".category-cards").addEventListener("click",e=>{if(e.target===e.currentTarget)return;const t=e.target.closest(".category-card");t&&(s=t.children[1].textContent.trim(),p=t.children[0].textContent.trim(),m="",i=1,y(s,p,m,i))});function y(e,t,r,o=1){window.innerWidth<768?c=8:c=10;const n={};if(e==="Body parts")n.bodypart=t;else if(e==="Muscles")n.muscles=t;else if(e==="Equipment")n.equipment=t;else return;n.page=o,r&&(n.keyword=r),n.limit=c,f.getFiltered(n).then(a=>{const h=document.getElementById("category-cards");h.innerHTML="",a.results.forEach(l=>{const g=document.createElement("div");g.classList.add("exr-item"),g.dataset.id=`${l._id}`,g.innerHTML=`
          <div class="exr-item-header">
            <div class="exr-item-header-workout">WORKOUT</div>
            <div class="exr-item-header-rating">${l.rating}</div>
            <div class="exr-item-header-star">
              <svg width="14" height="13">
                <use href="./img/icons.svg#star-rate"></use>
              </svg>
            </div>
            <button class="exr-item-header-start" type="button">
              <span class="exr-item-header-text">Start</span>
              <svg class="exr-item-header-arrow" width="16" height="16">
                <use href="./img/icons.svg#icon-arrow"></use>
              </svg>
            </button>
          </div>

          <div class="exr-item-name">
            <div class="exr-item-name-svg">
              <svg class="exr-item-name-svg-svg" width="15" height="15">
                <use href="../img/icons.svg#icon-running-stick-figure"></use>
              </svg>
            </div>
            <div class="exr-item-name-text">${l.name}</div>
          </div>

          <div class="exr-item-info">
            <p class="exr-item-info-burned-grey">Burned calories:</p>
            <p class="exr-item-info-burned-normal">${l.burnedCalories} / ${l.time} min</p>

            <p class="exr-item-info-part-grey">Body part:</p>
            <p class="exr-item-info-part-normal">${l.bodyPart}</p>

            <p class="exr-item-info-target-grey">Target:</p>
            <p class="exr-item-info-target-normal">${l.target}</p>
          </div>
        `,h.appendChild(g)}),document.querySelector(".exercise-section-title").innerHTML=`Exercise / <span class="exercise-section-title-span">${t}</span>`,document.querySelector(".exercise-section-search").style.display="",E(a.totalPages)}).catch(a=>{console.error(a)})}document.querySelector(".exercise-section-search-form").addEventListener("submit",e=>{e.preventDefault(),m=e.target.elements.keyword.value.trim(),i=1,y(s,p,m,i)});function E(e){const t=document.getElementById("pagination");t.innerHTML="";const r={totalItems:e*c,itemsPerPage:c,visiblePages:5,page:i};new v(t,r).on("beforeMove",d=>{const n=d.page;i=n,y(s,p,m,n)})}
