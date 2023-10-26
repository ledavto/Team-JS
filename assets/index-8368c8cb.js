import{a as y,P as b,n as E}from"./go-top-e0786b70.js";let o=1,c="Body parts",u,v="",f="";function h(t,e=1){window.innerWidth<768?u=9:u=12,y.getFilters({filter:t,page:e,limit:u}).then(a=>{const s=document.getElementById("category-cards");s.innerHTML="",a.results.forEach(i=>{const d=document.createElement("div");d.style.background=`linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${i.imgURL}) lightgray -22.462px -5px / 109.595% 107.556% no-repeat`,d.classList.add("category-card"),d.innerHTML=`<h3 class="category-title">${i.name}</h3>
          <p class="category-subcategory"> ${i.filter}</p>
        `,s.appendChild(d)}),q(a.totalPages)}).catch(a=>{console.error(a)})}function q(t){const e=document.getElementById("pagination");e.innerHTML="",t>0?e.style.display="":e.style.display="none";const n={totalItems:t*u,itemsPerPage:u,visiblePages:5,page:o};new b(e,n).on("beforeMove",s=>{const i=s.page;o=i,h(c,i)})}document.getElementById("bodypart-filter").addEventListener("click",function(){o=1,c="Body parts",document.querySelector(".exercise-section-title").innerHTML="",document.querySelector(".exercise-section-title").innerHTML='Exercise<span class="exercise-section-title-span"></span>',document.querySelector(".exercise-section-search").style.display="none",h(c,o)});document.getElementById("muscles-filter").addEventListener("click",function(){o=1,c="Muscles",document.querySelector(".exercise-section-title").innerHTML="",document.querySelector(".exercise-section-title").innerHTML='Exercise<span class="exercise-section-title-span"></span>',document.querySelector(".exercise-section-search").style.display="none",h(c,o)});document.getElementById("equipment-filter").addEventListener("click",function(){o=1,c="Equipment",document.querySelector(".exercise-section-title").innerHTML="",document.querySelector(".exercise-section-title").innerHTML='Exercise<span class="exercise-section-title-span"></span>',document.querySelector(".exercise-section-search").style.display="none",h(c,o)});h(c);document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".exercise-section-button");t.forEach(e=>{e.addEventListener("click",function(){t.forEach(n=>{n.classList.remove("js-active-filter-button")}),this.classList.add("js-active-filter-button")})})});document.querySelector(".category-cards").addEventListener("click",t=>{if(t.target===t.currentTarget)return;const e=t.target.closest(".category-card");e&&(c=e.children[1].textContent.trim(),v=e.children[0].textContent.trim(),f="",o=1,L(c,v,f,o))});function L(t,e,n,a=1){window.innerWidth<768?u=8:u=10;const i={};if(t==="Body parts")i.bodypart=e;else if(t==="Muscles")i.muscles=e;else if(t==="Equipment")i.equipment=e;else return;i.page=a,n&&(i.keyword=n),i.limit=u,y.getFiltered(i).then(d=>{const x=document.getElementById("category-cards");if(x.innerHTML="",d.totalPages>0)d.results.forEach(l=>{const m=document.createElement("div");m.classList.add("exr-item"),m.dataset.id=`${l._id}`,m.innerHTML=`
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
                <use href="./img/icons.svg#icon-running-stick-figure"></use>
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
        `,x.appendChild(m),m.addEventListener("click",S=>{document.querySelector(".backdrop").classList.remove("is-hidden"),document.querySelector(".backdrop-exr").setAttribute("id",S.currentTarget.getAttribute("data-id"))})});else{const l=document.createElement("div");l.classList.add("exr-empty-search-list"),l.innerHTML="Nothing was found for your request.",x.appendChild(l)}C(d.totalPages),document.querySelector(".exercise-section-title").innerHTML=`Exercise / <span class="exercise-section-title-span">${e}</span>`,document.querySelector(".exercise-section-search").style.display=""}).catch(d=>{console.error(d)})}document.querySelector(".exercise-section-search-form").addEventListener("submit",t=>{t.preventDefault();const e=t.target;f=e.elements.keyword.value.trim(),o=1,e.elements.keyword.value="",L(c,v,f,o)});function C(t){const e=document.getElementById("pagination");e.innerHTML="",t>0?e.style.display="":e.style.display="none";const n={totalItems:t*u,itemsPerPage:u,visiblePages:5,page:o};new b(e,n).on("beforeMove",s=>{const i=s.page;o=i,L(c,v,f,i)})}const g=document.getElementById("subscribe-input"),M=async t=>{t.preventDefault();const e=g.value,n=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;if(e.match(n)){const s=await y.subscribe(e);s===void 0||s.status!==201&&s.status!==200?(g.classList.add("error"),E.Notify.failure(s.data.message)):(g.classList.remove("error"),g.value="",E.Notify.success(s.data.message))}else{g.classList.add("error");const s=e===""?"Email can not be empty!":"Invalid email!";E.Notify.failure(s)}};document.getElementById("subscribe-btn").addEventListener("click",M);const r={ratingModal:document.querySelector("[data-rating-modal]"),form:document.querySelector(".rating-form"),ratingCloseBtn:document.querySelector(".rating-close-btn"),rateList:document.querySelector(".rate"),ratingChoosed:document.querySelector(".rating-choosed"),stars:document.querySelectorAll(".icon-star")},p={rate:0,exerciseId:"64f389465ae26083f39b17a2"};r.rateList.addEventListener("mouseover",k);function k(t){const e=t.target;let n=0;switch(e.tagName){case"use":n=e.parentNode.parentNode.previousElementSibling.value;break;case"svg":n=e.parentNode.previousElementSibling.value;break;case"LABEL":n=e.previousElementSibling.value;break}n&&r.stars.forEach((a,s)=>{n>s&&a.classList.add("icon-star-highlight")})}r.rateList.addEventListener("mouseout",I);function I(){r.stars.forEach(t=>{t.parentNode.previousElementSibling.value>p.rate&&t.classList.remove("icon-star-highlight")})}r.form.addEventListener("change",T);function T(t){const e=t.target;e.type==="radio"&&(p.rate=e.value,r.ratingChoosed.textContent=e.value+".0",r.stars.forEach((n,a)=>{e.value>a?n.classList.add("icon-star-highlight"):n.classList.remove("icon-star-highlight")}))}r.form.addEventListener("submit",B);async function B(t){t.preventDefault();const e=p.exerciseId,n={};n.email=r.form.elements.email.value,n.review=r.form.elements.comment.value,n.rate=p.rate/1,await y.setRating(e,n)&&(r.form.reset(),r.stars.forEach(s=>{s.classList.remove("icon-star-highlight")}),r.ratingChoosed.textContent="0.0",p.rate=0,w())}r.ratingCloseBtn.addEventListener("click",w);function w(){r.ratingModal.classList.add("is-hidden")}
