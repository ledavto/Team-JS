import Notiflix from 'notiflix';
import api from './api.js';

// const FAVORITES_LS_KEY = 'favoritesObject';
// const favoriteObject = {};
// localStorage.setItem(FAVORITES_LS_KEY, JSON.stringify(favoriteObject));

// fetch('https://your-energy.b.goit.study/api/exercises/')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`Вимушена помилка статусу: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(idEx => console.log(idEx))
//   .catch(err => console.log(err));

const refs = {
  generalModals: document.querySelector('[data-modal-general]'),
  modalCloseBtn: document.querySelector('.modal-general-close-btn'),
  modalOpenBtn: document.querySelector('.exr-item-header-start'),
  modalAddFavoritesBtn: document.querySelector('.modal-add-favorates-btn'),
  favoritExercise: document.querySelector('.exr-item'),
  modalRating: document.querySelector('.modal-giv-rating-btn'),
};

//localStorage.removeItem('checkout');
let getListFavor = [];
if (localStorage.getItem('checkout')) {
  getListFavor = [...JSON.parse(localStorage.getItem('checkout'))];
}
//console.log(getListFavor);

//Слухач кнопки CLOSE
refs.modalCloseBtn.addEventListener('click', handleClose);
function handleClose() {
  refs.generalModals.classList.add('is-hidden');
  //console.log(refs.modalCloseBtn);
}

//Закриття по ESCAPE
document.addEventListener("keydown", event => {
  if (event.key === 'Escape') handleClose();
});


// document.onmouseup(function (e) {
    
//   console.log(e.target);
// });

//Слухач кнопки AddToFavorites
console.log(refs.modalAddFavoritesBtn);
refs.modalAddFavoritesBtn.addEventListener('click', handleAddFav);
function handleAddFav() {
  api
    .getDetails(document.querySelector('.backdrop-exr').getAttribute('data-id'))
    .then(data => {
      console.log(data);

      getListFavor.push(data);
      localStorage.setItem('checkout', JSON.stringify(getListFavor));
    })
    .catch(error => {
      console.error(error);
    });
}

//Слухач RATING
refs.modalRating.addEventListener('click', event => {
  //localStorage.setItem(id_exr_start, event.currentTarget.);
  // console.log('event.currentTarget: ', event.currentTarget);
  // console.log(document.querySelector('.backdrop'));
  refs.generalModals.classList.add('is-hidden');
  document.querySelector('[data-rating-modal]').classList.remove('is-hidden');
});
// const showModal =() =>(event) {

//           //localStorage.setItem(id_exr_start, event.currentTarget.);
//           console.log("event.target: ", event.target);
//           console.log("event.currentTarget: ", event.currentTarget);

// }

// refs.modalOpenBtn.addEventListener('click', showModal);
// console.log(generalModals);

// const showModal = event => {
//   generalModals.classList.add('show');
// };

// refs.modalCloseBtn.addEventListener('click', e => {
//   e.preventDefault();
//   refs.generalModals.classList.toggle('is-hidden');
// });

// function favoriteExr (e){

// e.preventDefault();
// const {} = e.currentTarget.elements;
// console.log()
// }

//  refs.modalOpenBtn.addEventListener("click",clickOpen);
//   function clickOpen(e){
//    e.preventDefault();
///   const idExr = e.currentTarget.elements;
//   console.log(idExr.value);
//}

//const exId= `64f389465ae26083f39b17a2`;

// let unlock = true;
// const timeout = 800;

//////////Button/////////

//const modFaforiteBtn = document.querySelector('.modal-add-favorates-btn');
//modFaforiteBtn.addEventListener('click', function() {
// Змінюємо стилі кнопки при натисканні
// modFaforiteBtn.style.background = '#b6b3b3';
// modFaforiteBtn.textContent = "Remove favorites";

////////////////////////////////////

//});

//refs.generalModals.addEventListener("click",toggleModal);
//function toggleModal() {
// document.body.classList.toggle('no-scrol');
//}
//}

/** if (refs.generalModals.lenght > 0){
    for (let index = 0; index < refs.generalModals.lenght; index++){
        const generalModal = refs.generalModals[index];
        generalModal.addEventListener("click", function(e) {
            const modalName = generalModal.getAtribute(".exr-item").replace([id]);
            const curentModal =document.getElementById(modalName);
           
        })
    }
}**/

// Потрібно для роботи функції нижче
const modalRefs = {
  id: document.querySelector('.backdrop-exr'),
  exName: document.querySelector('.text-title-pop'),
  exStars: document.querySelectorAll('.icon-star-exr'),
  exTarget: document.querySelector('.target-name'),
  exBody: document.querySelector('.body-part-name'),
  exEquip: document.querySelector('.equipment-name'),
  exPopular: document.querySelector('.popular'),
  exCalories: document.querySelector('.how-much-calories'),
  exAbout: document.querySelector('.about-exr'),
  exGif: document.querySelector('.img-poppup'),
};

// Функція встановлює значення з серверу на модлаку
async function setDetails() {
  const {
    id,
    exName,
    exTarget,
    exBody,
    exEquip,
    exPopular,
    exCalories,
    exAbout,
    exGif,
  } = modalRefs;
  const data = await api.getDetails(id.dataset.id);
  const {
    name,
    target,
    bodyPart,
    equipment,
    popularity,
    burnedCalories,
    description,
    gifUrl,
  } = data;
  exName.textContent = name.charAt(0).toUpperCase() + str.slice(1);
  exTarget.textContent = target.charAt(0).toUpperCase() + str.slice(1);
  exBody.textContent = bodyPart.charAt(0).toUpperCase() + str.slice(1);
  exEquip.textContent = equipment.charAt(0).toUpperCase() + str.slice(1);
  exPopular.textContent = popularity;
  exCalories.textContent = burnedCalories + '/3 min';
  exAbout.textContent = description;
  exGif.src = gifUrl;
}
