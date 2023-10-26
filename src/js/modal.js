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
};

//localStorage.removeItem('checkout');
let getListFavor = [];
if (localStorage.getItem('checkout')) {
  getListFavor = [...JSON.parse(localStorage.getItem('checkout'))];
}
console.log(getListFavor);

// getListFavor.push(JSON.parse(localStorage.getItem('checkout')));

// console.log(JSON.parse(getListFavor));

//const parsedListFavor = JSON.parse(listFavorites);

console.log(refs.modalCloseBtn);

//Слухач кнопки CLOSE
refs.modalCloseBtn.addEventListener('click', handleClose);
function handleClose() {
  refs.generalModals.classList.add('is-hidden');
  console.log(refs.modalCloseBtn);
}

//Слухач кнопки AddToFavorites
refs.modalAddFavoritesBtn.addEventListener('click', handleAddFav);
function handleAddFav() {
  api
    .getDetails(document.querySelector('.backdrop-exr').getAttribute('id'))
    .then(data => {
      console.log(data);

      getListFavor.push(data);
      localStorage.setItem('checkout', JSON.stringify(getListFavor));
    })
    .catch(error => {
      console.error(error);
    });

  // console.log(listDetailExr);

  // getListFavor.push(document.querySelector('.backdrop-exr').getAttribute('id'));
  // console.log(getListFavor);
}
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
