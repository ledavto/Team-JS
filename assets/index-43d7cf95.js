import{a as f,P as v}from"./go-top-90a69c03.js";let i=1,s="Body parts",o,p="",u="";function g(t,e=1){window.innerWidth<768?o=9:o=12,f.getFilters({filter:t,page:e,limit:o}).then(l=>{const d=document.getElementById("category-cards");d.innerHTML="",l.results.forEach(n=>{const a=document.createElement("div");a.style.background=`linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${n.imgURL}) lightgray -22.462px -5px / 109.595% 107.556% no-repeat`,a.classList.add("category-card"),a.innerHTML=`<h3 class="category-title">${n.name}</h3>
          <p class="category-subcategory"> ${n.filter}</p>
        `,d.appendChild(a)}),E(l.totalPages)}).catch(l=>{console.error(l)})}function E(t){const e=document.getElementById("pagination");e.innerHTML="",t>0?e.style.display="":e.style.display="none";const c={totalItems:t*o,itemsPerPage:o,visiblePages:5,page:i};new v(e,c).on("beforeMove",d=>{const n=d.page;i=n,g(s,n)})}document.getElementById("bodypart-filter").addEventListener("click",function(){i=1,s="Body parts",document.querySelector(".exercise-section-title").innerHTML="",document.querySelector(".exercise-section-title").innerHTML='Exercise<span class="exercise-section-title-span"></span>',document.querySelector(".exercise-section-search").style.display="none",g(s,i)});document.getElementById("muscles-filter").addEventListener("click",function(){i=1,s="Muscles",document.querySelector(".exercise-section-title").innerHTML="",document.querySelector(".exercise-section-title").innerHTML='Exercise<span class="exercise-section-title-span"></span>',document.querySelector(".exercise-section-search").style.display="none",g(s,i)});document.getElementById("equipment-filter").addEventListener("click",function(){i=1,s="Equipment",document.querySelector(".exercise-section-title").innerHTML="",document.querySelector(".exercise-section-title").innerHTML='Exercise<span class="exercise-section-title-span"></span>',document.querySelector(".exercise-section-search").style.display="none",g(s,i)});g(s);document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".exercise-section-button");t.forEach(e=>{e.addEventListener("click",function(){t.forEach(c=>{c.classList.remove("js-active-filter-button")}),this.classList.add("js-active-filter-button")})})});document.querySelector(".category-cards").addEventListener("click",t=>{if(t.target===t.currentTarget)return;const e=t.target.closest(".category-card");e&&(s=e.children[1].textContent.trim(),p=e.children[0].textContent.trim(),u="",i=1,h(s,p,u,i))});function h(t,e,c,l=1){window.innerWidth<768?o=8:o=10;const n={};if(t==="Body parts")n.bodypart=e;else if(t==="Muscles")n.muscles=e;else if(t==="Equipment")n.equipment=e;else return;n.page=l,c&&(n.keyword=c),n.limit=o,f.getFiltered(n).then(a=>{const y=document.getElementById("category-cards");if(y.innerHTML="",a.totalPages>0)a.results.forEach(r=>{const m=document.createElement("div");m.classList.add("exr-item"),m.dataset.id=`${r._id}`,m.innerHTML=`
          <div class="exr-item-header">
            <div class="exr-item-header-workout">WORKOUT</div>
            <div class="exr-item-header-rating">${r.rating}</div>
            <div class="exr-item-header-star">
              <svg width="14" height="13">
                <use href="../img/icons.svg#star-rate"></use>
              </svg>
            </div>
            <button class="exr-item-header-start" type="button">
              <span class="exr-item-header-text">Start</span>
              <svg class="exr-item-header-arrow" width="16" height="16">
                <use href="../img/icons.svg#icon-arrow"></use>
              </svg>
            </button>
          </div>

          <div class="exr-item-name">
            <div class="exr-item-name-svg">
              <svg class="exr-item-name-svg-svg" width="15" height="15">
                <use href="../img/icons.svg#icon-running-stick-figure"></use>
              </svg>
            </div>
            <div class="exr-item-name-text">${r.name}</div>
          </div>

          <div class="exr-item-info">
            <p class="exr-item-info-burned-grey">Burned calories:</p>
            <p class="exr-item-info-burned-normal">${r.burnedCalories} / ${r.time} min</p>

            <p class="exr-item-info-part-grey">Body part:</p>
            <p class="exr-item-info-part-normal">${r.bodyPart}</p>

            <p class="exr-item-info-target-grey">Target:</p>
            <p class="exr-item-info-target-normal">${r.target}</p>
          </div>
        `,y.appendChild(m),m.addEventListener("click",x=>{console.log("event.currentTarget: ",x.currentTarget),document.querySelector(".backdrop").classList.remove("is-hidden")})});else{const r=document.createElement("div");r.classList.add("exr-empty-search-list"),r.innerHTML="Nothing was found for your request.",y.appendChild(r)}w(a.totalPages),document.querySelector(".exercise-section-title").innerHTML=`Exercise / <span class="exercise-section-title-span">${e}</span>`,document.querySelector(".exercise-section-search").style.display=""}).catch(a=>{console.error(a)})}document.querySelector(".exercise-section-search-form").addEventListener("submit",t=>{t.preventDefault();const e=t.target;u=e.elements.keyword.value.trim(),i=1,e.elements.keyword.value="",h(s,p,u,i)});function w(t){const e=document.getElementById("pagination");e.innerHTML="",t>0?e.style.display="":e.style.display="none";const c={totalItems:t*o,itemsPerPage:o,visiblePages:5,page:i};new v(e,c).on("beforeMove",d=>{const n=d.page;i=n,h(s,p,u,n)})}
