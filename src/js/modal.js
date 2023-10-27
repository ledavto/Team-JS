import api from './api';

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
};

const closeExerciseModal = () => {
  document.querySelector('body').classList.remove('modal-exercise-open');
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
    //getElemAdd.classList.add('is-hidden');
    //console.log(getBtnCont);
    getBtnCont.insertAdjacentHTML(
      'afterbegin',
      `<button class="modal-rem-favorates-btn">
        <span>Remove favorites</span>
        <svg class="icon-heart">
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>
      </button>`
    );
    //getElemRem.classList.remove('is-hidden');
  } else {
    //getElemAdd.classList.remove('is-hidden');
    console.log(getBtnCont);
    getBtnCont.insertAdjacentHTML(
      'afterbegin',
      `<button class="modal-add-favorates-btn">
        <span>Add favorites</span>
        <svg class="icon-heart">
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>
      </button>`
    );
    //getElemRem.classList.add('is-hidden');
  }

  function handleRemFav() {
    getBtnCont.querySelector('.modal-rem-favorates-btn').remove();

    getBtnCont.insertAdjacentHTML(
      'afterbegin',
      `<button class="modal-add-favorates-btn">
        <span>Add favorites</span>
        <svg class="icon-heart">
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>
      </button>`
    );

    getBtnCont
      .querySelector('.modal-add-favorates-btn')
      .addEventListener('click', handleAddFav);

    //getElemAdd.classList.remove('is-hidden');
    //getElemRem.classList.add('is-hidden');

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
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>
      </button>`
    );
    getBtnCont
      .querySelector('.modal-rem-favorates-btn')
      .addEventListener('click', handleRemFav);

    // getElemAdd.classList.add('is-hidden');
    // getElemRem.classList.remove('is-hidden');
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
