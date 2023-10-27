import{a as x,s as v,m as S,P as E,n as h}from"./go-top-235ac5f9.js";let s=1,c="Body parts",d,g="",y="";function p(t,e=1){window.innerWidth<768?d=9:d=12,x.getFilters({filter:t,page:e,limit:d}).then(o=>{const i=document.getElementById("category-cards");i.innerHTML="",o.results.forEach(n=>{const l=document.createElement("div");l.style.background=`linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${n.imgURL}) top / cover no-repeat`,l.classList.add("category-card"),l.innerHTML=`<h3 class="category-title">${n.name}</h3>
          <p class="category-subcategory"> ${n.filter}</p>
        `,i.appendChild(l)}),L(o.totalPages)}).catch(o=>{console.error(o)})}function L(t){const e=document.getElementById("pagination");e.innerHTML="",t>0?e.style.display="block":e.style.display="none";const r={totalItems:t*d,itemsPerPage:d,visiblePages:5,page:s},o=new E(e,r);t>1?(document.querySelector(".tui-first").style.display="inline-block",document.querySelector(".tui-prev").style.display="inline-block",document.querySelector(".tui-next").style.display="inline-block",document.querySelector(".tui-last").style.display="inline-block"):(document.querySelector(".tui-first").style.display="none",document.querySelector(".tui-prev").style.display="none",document.querySelector(".tui-next").style.display="none",document.querySelector(".tui-last").style.display="none"),o.on("beforeMove",i=>{const n=i.page;s=n,p(c,n)})}document.getElementById("bodypart-filter").addEventListener("click",function(){s=1,c="Body parts",document.querySelector(".exercise-section-title").innerHTML="",document.querySelector(".exercise-section-title").innerHTML='Exercise<span class="exercise-section-title-span"></span>',document.querySelector(".exercise-section-search").style.display="none",p(c,s)});document.getElementById("muscles-filter").addEventListener("click",function(){s=1,c="Muscles",document.querySelector(".exercise-section-title").innerHTML="",document.querySelector(".exercise-section-title").innerHTML='Exercise<span class="exercise-section-title-span"></span>',document.querySelector(".exercise-section-search").style.display="none",p(c,s)});document.getElementById("equipment-filter").addEventListener("click",function(){s=1,c="Equipment",document.querySelector(".exercise-section-title").innerHTML="",document.querySelector(".exercise-section-title").innerHTML='Exercise<span class="exercise-section-title-span"></span>',document.querySelector(".exercise-section-search").style.display="none",p(c,s)});p(c);document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".exercise-section-button");t.forEach(e=>{e.addEventListener("click",function(){t.forEach(r=>{r.classList.remove("js-active-filter-button")}),this.classList.add("js-active-filter-button")})})});document.querySelector(".category-cards").addEventListener("click",t=>{if(t.target===t.currentTarget)return;const e=t.target.closest(".category-card");e&&(c=e.children[1].textContent.trim(),g=e.children[0].textContent.trim(),y="",s=1,b(c,g,y,s))});function b(t,e,r,o=1){window.innerWidth<768?d=8:d=10;const n={};if(t==="Body parts")n.bodypart=e;else if(t==="Muscles")n.muscles=e;else if(t==="Equipment")n.equipment=e;else return;n.page=o,r&&(n.keyword=r),n.limit=d,x.getFiltered(n).then(l=>{const f=document.getElementById("category-cards");if(f.innerHTML="",l.totalPages>0)l.results.forEach(a=>{const u=document.createElement("div");u.classList.add("exr-item"),u.dataset.id=`${a._id}`,u.innerHTML=`
          <div class="exr-item-header">
            <div class="exr-item-header-workout">WORKOUT</div>
            <div class="exr-item-header-rating">${a.rating}</div>
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
            <div class="exr-item-name-text">${a.name}</div>
          </div>

          <div class="exr-item-info">
            <p class="exr-item-info-burned-grey">Burned calories:</p>
            <p class="exr-item-info-burned-normal">${a.burnedCalories} / ${a.time} min</p>

            <p class="exr-item-info-part-grey">Body part:</p>
            <p class="exr-item-info-part-normal">${a.bodyPart}</p>

            <p class="exr-item-info-target-grey">Target:</p>
            <p class="exr-item-info-target-normal">${a.target}</p>
          </div>
        `,f.appendChild(u),u.querySelector(".exr-item-header-start").addEventListener("click",async()=>{const q=u.getAttribute("data-id");document.querySelector(".modal-general").setAttribute("data-id",q),await S.setDataExerciseModal(q)})});else{const a=document.createElement("div");a.classList.add("exr-empty-search-list"),a.innerHTML="Nothing was found for your request.",f.appendChild(a)}w(l.totalPages),document.querySelector(".exercise-section-title").innerHTML=`Exercise / <span class="exercise-section-title-span">${e}</span>`,document.querySelector(".exercise-section-search").style.display=""}).catch(l=>{console.error(l)})}document.querySelector(".exercise-section-search-form").addEventListener("submit",t=>{t.preventDefault();const e=t.target;y=e.elements.keyword.value.trim(),s=1,e.elements.keyword.value="",b(c,g,y,s)});function w(t){const e=document.getElementById("pagination");e.innerHTML="",t>0?e.style.display="block":e.style.display="none";const r={totalItems:t*d,itemsPerPage:d,visiblePages:5,page:s},o=new E(e,r);t>1?(document.querySelector(".tui-first").style.display="inline-block",document.querySelector(".tui-prev").style.display="inline-block",document.querySelector(".tui-next").style.display="inline-block",document.querySelector(".tui-last").style.display="inline-block"):(document.querySelector(".tui-first").style.display="none",document.querySelector(".tui-prev").style.display="none",document.querySelector(".tui-next").style.display="none",document.querySelector(".tui-last").style.display="none"),o.on("beforeMove",i=>{const n=i.page;s=n,b(c,g,y,n)})}const m=document.getElementById("subscribe-input"),k=async t=>{t.preventDefault();const e=m.value,r=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;if(e.match(r)){const i=await x.subscribe(e);i===void 0||i.status!==201&&i.status!==200?(m.classList.add("error"),h.Notify.failure(i.data.message)):(m.classList.remove("error"),m.value="",h.Notify.success(i.data.message))}else{m.classList.add("error");const i=e===""?"Email can not be empty!":"Invalid email!";h.Notify.failure(i)}};document.getElementById("subscribe-btn").addEventListener("click",k);
