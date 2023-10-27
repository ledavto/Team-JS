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

const closeExerciseModal = () => {
  document.querySelector('body').classList.remove('modal-exercise-open');
};

const openExerciseModal = () => {
  document.querySelector('body').classList.add('modal-exercise-open');
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

  //Закриття по ESCAPE
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') handleClose();
  });

  //Зчитування з LocalStorage
  let checkoutFavorites = JSON.parse(localStorage.getItem('checkout')) ?? [];

  let getListFavor = [];
  if (localStorage.getItem('checkout')) {
    getListFavor = [...JSON.parse(localStorage.getItem('checkout'))];
  }

  console.log(checkoutFavorites);

  //Перевірка наявності у LocalStorage
  const findInLocal = checkoutFavorites.findIndex(
    ({ _id }) => _id === response._id
  );
  const getElemAdd = document.querySelector('.modal-add-favorates-btn');
  const getElemRem = document.querySelector('.modal-rem-favorates-btn');

  if (findInLocal !== -1) {
    getElemAdd.classList.add('is-hidden');
    getElemRem.classList.remove('is-hidden');
  } else {
    getElemAdd.classList.remove('is-hidden');
    getElemRem.classList.add('is-hidden');
  }

  if (document.querySelector('.modal-add-favorates-btn')) {
    //Слухач кнопки AddToFavorites
    getElemAdd.addEventListener('click', handleAddFav);
    function handleAddFav() {
      getListFavor.push(response);
      localStorage.setItem('checkout', JSON.stringify(getListFavor));
      getElemAdd.classList.add('is-hidden');
      getElemRem.classList.remove('is-hidden');
    }
  }

  //Слухач кнопки RemoveFavorites
  if (document.querySelector('.modal-rem-favorates-btn')) {
    getElemRem.addEventListener('click', handleRemFav);
    function handleRemFav() {
      getElemAdd.classList.remove('is-hidden');
      getElemRem.classList.add('is-hidden');

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
