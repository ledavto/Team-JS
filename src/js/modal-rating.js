import api from './api.js';

// Modal
const refsModal = {};
// Rating

// TODO: Доробити код для модалки rating

const refsRating = {
  ratingModal: document.querySelector('[data-rating-modal]'),
  form: document.querySelector('.rating-form'),
  ratingCloseBtn: document.querySelector('.rating-close-btn'),
  rateList: document.querySelector('.rate'),
  ratingChoosed: document.querySelector('.rating-choosed'),
  stars: document.querySelectorAll('.icon-star'),
};

const variables = {
  rate: 0,
  exerciseId: '64f389465ae26083f39b17a2',
};

refsRating.rateList.addEventListener('mouseover', handleHover);
function handleHover(event) {
  const target = event.target;
  let value = 0;
  switch (target.tagName) {
    case 'use':
      value = target.parentNode.parentNode.previousElementSibling.value;
      break;
    case 'svg':
      value = target.parentNode.previousElementSibling.value;
      break;
    case 'LABEL':
      value = target.previousElementSibling.value;
      break;
  }
  if (value) {
    for (let i = 0; i < value; i++) {
      refsRating.stars[i].classList.add('icon-star-hover');
    }
  }
}

refsRating.rateList.addEventListener('mouseout', handleOut);
function handleOut() {
  refsRating.stars.forEach(star => {
    const value = star.parentNode.previousElementSibling.value;
    if (value > variables.rate) {
      star.classList.remove('icon-star-hover');
    }
  });
}

refsRating.rateList.addEventListener('click', handleSetRating);
function handleSetRating(event) {
  const target = event.target;
  let value = 0;

  switch (target.tagName) {
    case 'use':
      value = target.parentNode.parentNode.previousElementSibling.value;
      break;
    case 'svg':
      value = target.parentNode.previousElementSibling.value;
      break;
    case 'LABEL':
      value = target.previousElementSibling.value;
      break;
  }

  if (value) {
    for (let i = 0; i < value; i++) {
      refsRating.stars[i].classList.add('icon-star-hover');
    }
    variables.rate = value;
    refsRating.stars.forEach(star => {
      const value = star.parentNode.previousElementSibling.value;
      if (value > variables.rate) {
        star.classList.remove('icon-star-hover');
      }
    });
    refsRating.ratingChoosed.textContent = variables.rate + '.0';
  }
}

refsRating.form.addEventListener('submit', handleRatigSubmit);
function handleRatigSubmit(event) {
  event.preventDefault();
  const id = variables.exerciseId;
  const body = {};
  body.email = refsRating.form.elements.email.value;
  body.review = refsRating.form.elements.comment.value;
  body.rate = variables.rate / 1;

  api.setRating(id, body);

  refsRating.form.reset();
  refsRating.stars.forEach(star => {
    star.classList.remove('icon-star-hover');
  });
  refsRating.ratingChoosed.textContent = '0.0';
  variables.rate = 0;
}

refsRating.ratingCloseBtn.addEventListener('click', handleRatingClose);
function handleRatingClose() {
  refsRating.ratingModal.classList.add('is-hidden');
}
