import{a as h,P as w}from"./go-top-2532b0e9.js";let i=1,r="Body parts",s,p="",f="";function g(e,t=1){window.innerWidth<768?s=9:s=12,h.getFilters({filter:e,page:t,limit:s}).then(c=>{const d=document.getElementById("category-cards");d.innerHTML="",c.results.forEach(n=>{const o=document.createElement("div");o.style.background=`linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${n.imgURL}) lightgray -22.462px -5px / 109.595% 107.556% no-repeat`,o.classList.add("category-card"),o.innerHTML=`<h3 class="category-title">${n.name}</h3>
          <p class="category-subcategory"> ${n.filter}</p>
        `,d.appendChild(o)}),E(c.totalPages)}).catch(c=>{console.error(c)})}function E(e){const t=document.getElementById("pagination");t.innerHTML="";const a={totalItems:e*s,itemsPerPage:s,visiblePages:5,page:i};new w(t,a).on("beforeMove",d=>{const n=d.page;i=n,g(r,n)})}document.getElementById("bodypart-filter").addEventListener("click",function(){i=1,r="Body parts",g(r,i)});document.getElementById("muscles-filter").addEventListener("click",function(){i=1,r="Muscles",g(r,i)});document.getElementById("equipment-filter").addEventListener("click",function(){i=1,r="Equipment",g(r,i)});g(r);document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".exercise-section-button");e.forEach(t=>{t.addEventListener("click",function(){e.forEach(a=>{a.classList.remove("js-active-filter-button")}),this.classList.add("js-active-filter-button")})})});document.querySelector(".category-cards").addEventListener("click",e=>{if(e.target===e.currentTarget)return;const t=e.target.closest(".category-card");t&&(r=t.children[1].textContent.trim(),p=t.children[0].textContent.trim(),f="",i=1,x(r,p,f,i))});function x(e,t,a,c=1){window.innerWidth<768?s=8:s=10;const n={};if(e==="Body parts")n.bodypart=t;else if(e==="Muscles")n.muscles=t;else if(e==="Equipment")n.equipment=t;else return;n.page=c,a&&(n.keyword=a),n.limit=s,h.getFiltered(n).then(o=>{console.log(o);const v=document.getElementById("category-cards");v.innerHTML="",o.results.forEach(l=>{const u=document.createElement("div");u.classList.add("exr-item"),u.dataset.id=`${l._id}`,u.innerHTML=`
          <div class="exr-item-header">
            <div class="exr-item-header-workout">WORKOUT</div>
            <div class="exr-item-header-rating">${l.rating}</div>
            <div class="exr-item-header-star">
              <svg width="14" height="13">
                <use href="../img/icons.svg#star-rate"></use>
              </svg>
            </div>
            <div class="exr-item-header-start">Start</div>
            <div>
              <svg class="exr-item-header-arrow" width="16" height="16">
                <use href="../img/icons.svg#icon-arrow"></use>
              </svg>
            </div>
          </div>

          <div class="exr-item-name">
            <div class="exr-item-name-svg">
              <svg class="exr-item-name-svg-svg" width="20" height="20">
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
        `,v.appendChild(u)}),L(o.totalPages)}).catch(o=>{console.error(o)})}function L(e){const t=document.getElementById("pagination");t.innerHTML="";const a={totalItems:e*s,itemsPerPage:s,visiblePages:5,page:i};new w(t,a).on("beforeMove",d=>{const n=d.page;i=n,x(r,p,f,n)})}const y={quoteText:document.querySelector(".js-quoteText"),quoteAutor:document.querySelector(".js-quoteAutor")};function m(e){return new Date().toLocaleDateString()}function P(){localStorage.getItem("LS-curentDate")===null&&localStorage.setItem("LS-curentDate",m()),localStorage.getItem("LS-curentDate")!==m()&&localStorage.setItem("LS-curentDate",m()),h.getQuote().then(e=>{y.quoteText.textContent=e.quote,y.quoteAutor.textContent=e.author})}P();
