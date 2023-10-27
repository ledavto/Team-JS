import{a as x,s as v,m as b,P as w,n as h}from"./go-top-235ac5f9.js";let i=1,a="Body parts",d,y="",p="";function g(t,e=1){window.innerWidth<768?d=9:d=12,x.getFilters({filter:t,page:e,limit:d}).then(l=>{const s=document.getElementById("category-cards");s.innerHTML="",l.results.forEach(n=>{const o=document.createElement("div");o.style.background=`linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${n.imgURL}) top / cover no-repeat`,o.classList.add("category-card"),o.innerHTML=`<h3 class="category-title">${n.name}</h3>
          <p class="category-subcategory"> ${n.filter}</p>
        `,s.appendChild(o)}),q(l.totalPages)}).catch(l=>{console.error(l)})}function q(t){const e=document.getElementById("pagination");e.innerHTML="",t>0?e.style.display="":e.style.display="none";const r={totalItems:t*d,itemsPerPage:d,visiblePages:5,page:i};new w(e,r).on("beforeMove",s=>{const n=s.page;i=n,g(a,n)})}document.getElementById("bodypart-filter").addEventListener("click",function(){i=1,a="Body parts",document.querySelector(".exercise-section-title").innerHTML="",document.querySelector(".exercise-section-title").innerHTML='Exercise<span class="exercise-section-title-span"></span>',document.querySelector(".exercise-section-search").style.display="none",g(a,i)});document.getElementById("muscles-filter").addEventListener("click",function(){i=1,a="Muscles",document.querySelector(".exercise-section-title").innerHTML="",document.querySelector(".exercise-section-title").innerHTML='Exercise<span class="exercise-section-title-span"></span>',document.querySelector(".exercise-section-search").style.display="none",g(a,i)});document.getElementById("equipment-filter").addEventListener("click",function(){i=1,a="Equipment",document.querySelector(".exercise-section-title").innerHTML="",document.querySelector(".exercise-section-title").innerHTML='Exercise<span class="exercise-section-title-span"></span>',document.querySelector(".exercise-section-search").style.display="none",g(a,i)});g(a);document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".exercise-section-button");t.forEach(e=>{e.addEventListener("click",function(){t.forEach(r=>{r.classList.remove("js-active-filter-button")}),this.classList.add("js-active-filter-button")})})});document.querySelector(".category-cards").addEventListener("click",t=>{if(t.target===t.currentTarget)return;const e=t.target.closest(".category-card");e&&(a=e.children[1].textContent.trim(),y=e.children[0].textContent.trim(),p="",i=1,E(a,y,p,i))});function E(t,e,r,l=1){window.innerWidth<768?d=8:d=10;const n={};if(t==="Body parts")n.bodypart=e;else if(t==="Muscles")n.muscles=e;else if(t==="Equipment")n.equipment=e;else return;n.page=l,r&&(n.keyword=r),n.limit=d,x.getFiltered(n).then(o=>{const f=document.getElementById("category-cards");if(f.innerHTML="",o.totalPages>0)o.results.forEach(c=>{const u=document.createElement("div");u.classList.add("exr-item"),u.dataset.id=`${c._id}`,u.innerHTML=`
          <div class="exr-item-header">
            <div class="exr-item-header-workout">WORKOUT</div>
            <div class="exr-item-header-rating">${c.rating}</div>
            <div class="exr-item-header-star">
              <svg width="14" height="13">
                <use href="${v}#star-rate"></use>
              </svg>
            </div>
            <button class="exr-item-header-start" type="button">
              <span class="exr-item-header-text">Start</span>
              <svg class="exr-item-header-arrow" width="16" height="16">
                <use href="${v}#icon-arrow"></use>
              </svg>
            </button>
          </div>

          <div class="exr-item-name">
            <div class="exr-item-name-svg">
              <svg class="exr-item-name-svg-svg" width="15" height="15">
                <use href="${v}#icon-running-stick-figure"></use>
              </svg>
            </div>
            <div class="exr-item-name-text">${c.name}</div>
          </div>

          <div class="exr-item-info">
            <p class="exr-item-info-burned-grey">Burned calories:</p>
            <p class="exr-item-info-burned-normal">${c.burnedCalories} / ${c.time} min</p>

            <p class="exr-item-info-part-grey">Body part:</p>
            <p class="exr-item-info-part-normal">${c.bodyPart}</p>

            <p class="exr-item-info-target-grey">Target:</p>
            <p class="exr-item-info-target-normal">${c.target}</p>
          </div>
        `,f.appendChild(u),u.querySelector(".exr-item-header-start").addEventListener("click",async()=>{const L=u.getAttribute("data-id");document.querySelector(".modal-general").setAttribute("data-id",L),await b.setDataExerciseModal(L)})});else{const c=document.createElement("div");c.classList.add("exr-empty-search-list"),c.innerHTML="Nothing was found for your request.",f.appendChild(c)}M(o.totalPages),document.querySelector(".exercise-section-title").innerHTML=`Exercise / <span class="exercise-section-title-span">${e}</span>`,document.querySelector(".exercise-section-search").style.display=""}).catch(o=>{console.error(o)})}document.querySelector(".exercise-section-search-form").addEventListener("submit",t=>{t.preventDefault();const e=t.target;p=e.elements.keyword.value.trim(),i=1,e.elements.keyword.value="",E(a,y,p,i)});function M(t){const e=document.getElementById("pagination");e.innerHTML="",t>0?e.style.display="":e.style.display="none";const r={totalItems:t*d,itemsPerPage:d,visiblePages:5,page:i};new w(e,r).on("beforeMove",s=>{const n=s.page;i=n,E(a,y,p,n)})}const m=document.getElementById("subscribe-input"),S=async t=>{t.preventDefault();const e=m.value,r=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;if(e.match(r)){const s=await x.subscribe(e);s===void 0||s.status!==201&&s.status!==200?(m.classList.add("error"),h.Notify.failure(s.data.message)):(m.classList.remove("error"),m.value="",h.Notify.success(s.data.message))}else{m.classList.add("error");const s=e===""?"Email can not be empty!":"Invalid email!";h.Notify.failure(s)}};document.getElementById("subscribe-btn").addEventListener("click",S);
