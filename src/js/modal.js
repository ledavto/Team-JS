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
