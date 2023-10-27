import api from './api';
import svgSprite from '../img/icons.svg';

const closeModalTemplate = (closeButtonSelector, closeFunction) => {
  document.querySelector('.overlay').addEventListener('click', closeFunction);
  document
    .querySelector(closeButtonSelector)
    .addEventListener('click', closeFunction);

  document.addEventListener('keydown', event => {
    const key = event.key;
    if (key === 'Escape') {
      closeFunction();
    }
  });
};
// TODO: Remove event listeners!

const openExerciseModal = () => {
  document.querySelector('body').classList.add('modal-exercise-open');
  document.querySelector('.go-top').classList.add('is-hidden');
  document.body.style.overflow = 'hidden';
};

const closeExerciseModal = () => {
  document.querySelector('body').classList.remove('modal-exercise-open');
  document.querySelector('.go-top').classList.remove('is-hidden');
  document.body.style.overflow = 'visible';
};

const setDataExerciseModal = async id => {
  const response = await api.getDetails(id);

  document.getElementById('modal-exersice-img').src = response.gifUrl;
  document.getElementById('modal-exersice-title').innerHTML = response.name;
  document.getElementById('modal-exersice-target').innerHTML = response.target;
  document.getElementById('modal-exersice-bodypart').innerHTML =
    response.bodyPart;
  document.getElementById('modal-exersice-equipment').innerHTML =
    response.equipment;
  document.getElementById('modal-exersice-popularity').innerHTML =
    response.popularity;
  document.getElementById(
    'modal-exersice-burnedcalories'
  ).innerHTML = `${response.burnedCalories}/${response.time} min`;
  document.getElementById('modal-exersice-description').innerHTML =
    response.description;
  document.getElementById(
    'modal-exersice-rating'
  ).style = `--rating: ${response.rating}`;
  document.getElementById('modal-exersice-rating-number').innerHTML =
    response.rating;

  openExerciseModal();

  //Зчитування з LocalStorage
  let checkoutFavorites = JSON.parse(localStorage.getItem('checkout')) ?? [];

  let getListFavor = [];
  if (localStorage.getItem('checkout')) {
    getListFavor = [...JSON.parse(localStorage.getItem('checkout'))];
  }

  //Перевірка наявності у LocalStorage
  const findInLocal = checkoutFavorites.findIndex(
    ({ _id }) => _id === response._id
  );

  const getBtnCont = document.querySelector('.modal-button');
  if (getBtnCont.querySelector('.modal-add-favorates-btn'))
    getBtnCont.querySelector('.modal-add-favorates-btn').remove();
  if (getBtnCont.querySelector('.modal-rem-favorates-btn'))
    getBtnCont.querySelector('.modal-rem-favorates-btn').remove();

  if (findInLocal !== -1) {
    getBtnCont.insertAdjacentHTML(
      'afterbegin',
      `<button class="modal-rem-favorates-btn">
        <span>Remove favorites</span>
        <svg class="icon-heart">
          <use href="${svgSprite}#icon-heart"></use>
        </svg>
      </button>`
    );
  } else {
    //console.log(getBtnCont);
    getBtnCont.insertAdjacentHTML(
      'afterbegin',
      `<button class="modal-add-favorates-btn">
        <span>Add favorites</span>
        <svg class="icon-heart">
          <use href="${svgSprite}#icon-heart"></use>
        </svg>
      </button>`
    );
  }

  function handleRemFav() {
    getBtnCont.querySelector('.modal-rem-favorates-btn').remove();

    //console.log(document.querySelector(`div[data-id="${response._id}"]`));
    document.querySelector(`div[data-id="${response._id}"]`).remove();
    //  button[data-action="close"]
    getBtnCont.insertAdjacentHTML(
      'afterbegin',
      `<button class="modal-add-favorates-btn">
        <span>Add favorites</span>
        <svg class="icon-heart">
          <use href="${svgSprite}#icon-heart"></use>
        </svg>
      </button>`
    );

    getBtnCont
      .querySelector('.modal-add-favorates-btn')
      .addEventListener('click', handleAddFav);

    const currentCard = checkoutFavorites.find(
      ({ _id }) => _id === response._id
    );
    const newCardIdx = checkoutFavorites.findIndex(
      ({ _id }) => _id === response._id
    );

    if (newCardIdx !== -1) {
      // якщо це вправа є в localStorage
      localStorage.clear();
      getListFavor.splice(newCardIdx, 1);
      localStorage.setItem('checkout', JSON.stringify(getListFavor));
    }
  }

  function handleAddFav() {
    getListFavor.push(response);
    localStorage.setItem('checkout', JSON.stringify(getListFavor));

    getBtnCont.querySelector('.modal-add-favorates-btn').remove();
    getBtnCont.insertAdjacentHTML(
      'afterbegin',
      `<button class="modal-rem-favorates-btn">
        <span>Remove favorites</span>
        <svg class="icon-heart">
          <use href="${svgSprite}#icon-heart"></use>
        </svg>
      </button>`
    );
    getBtnCont
      .querySelector('.modal-rem-favorates-btn')
      .addEventListener('click', handleRemFav);
  }

  if (document.querySelector('.modal-add-favorates-btn')) {
    //Слухач кнопки AddToFavorites
    const getElemAdd = document.querySelector('.modal-add-favorates-btn');
    getElemAdd.addEventListener('click', handleAddFav);
  }

  //Слухач кнопки RemoveFavorites
  if (document.querySelector('.modal-rem-favorates-btn')) {
    const getElemRem = document.querySelector('.modal-rem-favorates-btn');
    getElemRem.addEventListener('click', handleRemFav);
  }
};

closeModalTemplate('.modal-general-close-btn', closeExerciseModal);

const openRatingModal = () => {
  closeExerciseModal();
  document.querySelector('body').classList.add('modal-rating-open');
};

const closeRatingModal = () => {
  document.querySelector('body').classList.remove('modal-rating-open');
  openExerciseModal();
};

closeModalTemplate('.rating-close-btn', closeRatingModal);

document
  .querySelector('.modal-giv-rating-btn')
  .addEventListener('click', openRatingModal);

export default { setDataExerciseModal, closeRatingModal };
