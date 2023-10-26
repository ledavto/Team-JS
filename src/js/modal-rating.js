import api from './api';
import Notiflix from 'notiflix';

import modalFunctions from './modal';

const email = document.getElementById('rating-email');
const comment = document.getElementById('rating-comment');

const submitHandler = async event => {
  event.preventDefault();
  const id = document.querySelector('.modal-general').getAttribute('data-id');
  const rate = Number(document.getElementById('rating-choosed').textContent);

  const emailValue = email.value;
  const pattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const valid = emailValue.match(pattern) && comment.value;

  if (valid) {
    const response = await api.setRating(id, {
      rate,
      email: email.value,
      review: comment.value,
    });

    if (
      response === undefined ||
      (response.status !== 201 && response.status !== 200)
    ) {
      email.classList.add('error');
      Notiflix.Notify.failure(response.data.message);
    } else {
      email.classList.remove('error');
      email.value = '';
      Notiflix.Notify.success('Rating sent successfully!');

      modalFunctions.closeRatingModal();
    }
  } else {
    email.classList.add('error');
    const errorMessage =
      emailValue === '' || comment.value === ''
        ? 'All fields required!'
        : 'Invalid email!';
    Notiflix.Notify.failure(errorMessage);
  }
}
  const starClickHandler = e => {
  document.getElementById('rating-choosed').innerHTML =
    e.target.closest('.rate-star').value;
};

document
  .getElementById('rating-submit-button')
  .addEventListener('click', submitHandler);

document.querySelectorAll('.rate-star').forEach(star => {
  star.addEventListener('click', starClickHandler);
});
