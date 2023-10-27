import{a as h,s as E,m as q,P as M,n as g}from"./go-top-031fcc8b.js";let a=1,o="Body parts",d,v="",y="";function f(t,e=1){window.innerWidth<768?d=9:d=12,h.getFilters({filter:t,page:e,limit:d}).then(c=>{const s=document.getElementById("category-cards");s.innerHTML="",c.results.forEach(n=>{const i=document.createElement("div");i.style.background=`linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${n.imgURL}) top / cover no-repeat`,i.classList.add("category-card"),i.innerHTML=`<h3 class="category-title">${n.name}</h3>
          <p class="category-subcategory"> ${n.filter}</p>
        `,s.appendChild(i)}),I(c.totalPages)}).catch(c=>{console.error(c)})}function I(t){const e=document.getElementById("pagination");e.innerHTML="",t>0?e.style.display="":e.style.display="none";const r={totalItems:t*d,itemsPerPage:d,visiblePages:5,page:a};new M(e,r).on("beforeMove",s=>{const n=s.page;a=n,f(o,n)})}document.getElementById("bodypart-filter").addEventListener("click",function(){a=1,o="Body parts",document.querySelector(".exercise-section-title").innerHTML="",document.querySelector(".exercise-section-title").innerHTML='Exercise<span class="exercise-section-title-span"></span>',document.querySelector(".exercise-section-search").style.display="none",f(o,a)});document.getElementById("muscles-filter").addEventListener("click",function(){a=1,o="Muscles",document.querySelector(".exercise-section-title").innerHTML="",document.querySelector(".exercise-section-title").innerHTML='Exercise<span class="exercise-section-title-span"></span>',document.querySelector(".exercise-section-search").style.display="none",f(o,a)});document.getElementById("equipment-filter").addEventListener("click",function(){a=1,o="Equipment",document.querySelector(".exercise-section-title").innerHTML="",document.querySelector(".exercise-section-title").innerHTML='Exercise<span class="exercise-section-title-span"></span>',document.querySelector(".exercise-section-search").style.display="none",f(o,a)});f(o);document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".exercise-section-button");t.forEach(e=>{e.addEventListener("click",function(){t.forEach(r=>{r.classList.remove("js-active-filter-button")}),this.classList.add("js-active-filter-button")})})});document.querySelector(".category-cards").addEventListener("click",t=>{if(t.target===t.currentTarget)return;const e=t.target.closest(".category-card");e&&(o=e.children[1].textContent.trim(),v=e.children[0].textContent.trim(),y="",a=1,b(o,v,y,a))});function b(t,e,r,c=1){window.innerWidth<768?d=8:d=10;const n={};if(t==="Body parts")n.bodypart=e;else if(t==="Muscles")n.muscles=e;else if(t==="Equipment")n.equipment=e;else return;n.page=c,r&&(n.keyword=r),n.limit=d,h.getFiltered(n).then(i=>{const x=document.getElementById("category-cards");if(x.innerHTML="",i.totalPages>0)i.results.forEach(l=>{const u=document.createElement("div");u.classList.add("exr-item"),u.dataset.id=`${l._id}`,u.innerHTML=`
          <div class="exr-item-header">
            <div class="exr-item-header-workout">WORKOUT</div>
            <div class="exr-item-header-rating">${l.rating}</div>
            <div class="exr-item-header-star">
              <svg width="14" height="13">
                <use href="${E}#star-rate"></use>
              </svg>
            </div>
            <button class="exr-item-header-start" type="button">
              <span class="exr-item-header-text">Start</span>
              <svg class="exr-item-header-arrow" width="16" height="16">
                <use href="${E}#icon-arrow"></use>
              </svg>
            </button>
          </div>

          <div class="exr-item-name">
            <div class="exr-item-name-svg">
              <svg class="exr-item-name-svg-svg" width="15" height="15">
                <use href="${E}#icon-running-stick-figure"></use>
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
        `,x.appendChild(u),u.querySelector(".exr-item-header-start").addEventListener("click",async()=>{const w=u.getAttribute("data-id");document.querySelector(".modal-general").setAttribute("data-id",w),await q.setDataExerciseModal(w)})});else{const l=document.createElement("div");l.classList.add("exr-empty-search-list"),l.innerHTML="Nothing was found for your request.",x.appendChild(l)}S(i.totalPages),document.querySelector(".exercise-section-title").innerHTML=`Exercise / <span class="exercise-section-title-span">${e}</span>`,document.querySelector(".exercise-section-search").style.display=""}).catch(i=>{console.error(i)})}document.querySelector(".exercise-section-search-form").addEventListener("submit",t=>{t.preventDefault();const e=t.target;y=e.elements.keyword.value.trim(),a=1,e.elements.keyword.value="",b(o,v,y,a)});function S(t){const e=document.getElementById("pagination");e.innerHTML="",t>0?e.style.display="":e.style.display="none";const r={totalItems:t*d,itemsPerPage:d,visiblePages:5,page:a};new M(e,r).on("beforeMove",s=>{const n=s.page;a=n,b(o,v,y,n)})}const p=document.getElementById("subscribe-input"),B=async t=>{t.preventDefault();const e=p.value,r=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;if(e.match(r)){const s=await h.subscribe(e);s===void 0||s.status!==201&&s.status!==200?(p.classList.add("error"),g.Notify.failure(s.data.message)):(p.classList.remove("error"),p.value="",g.Notify.success(s.data.message))}else{p.classList.add("error");const s=e===""?"Email can not be empty!":"Invalid email!";g.Notify.failure(s)}};document.getElementById("subscribe-btn").addEventListener("click",B);const m=document.getElementById("rating-email"),L=document.getElementById("rating-comment"),k=async t=>{t.preventDefault();const e=document.querySelector(".modal-general").getAttribute("data-id"),r=Number(document.getElementById("rating-choosed").textContent),c=m.value,s=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;if(c.match(s)&&L.value){const i=await h.setRating(e,{rate:r,email:m.value,review:L.value});i===void 0||i.status!==201&&i.status!==200?(m.classList.add("error"),g.Notify.failure(i.data.message)):(m.classList.remove("error"),m.value="",g.Notify.success("Rating sent successfully!"),q.closeRatingModal())}else{m.classList.add("error");const i=c===""||L.value===""?"All fields required!":"Invalid email!";g.Notify.failure(i)}},H=t=>{document.getElementById("rating-choosed").innerHTML=t.target.closest(".rate-star").value};document.getElementById("rating-submit-button").addEventListener("click",k);document.querySelectorAll(".rate-star").forEach(t=>{t.addEventListener("click",H)});
