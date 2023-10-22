import api from './api.js';

// Modal

// Rating

// TODO: Доробити код для модалки rating

const refs = {
  ratingModal: document.querySelector('[data-rating-modal]'),
  form: document.querySelector('.rating-form'),
  rateList: document.querySelector('.rate'),
  stars: document.querySelectorAll('.icon-star'),
  ratingChoosed: document.querySelector('.rating-choosed'),
  ratingCloseBtn: document.querySelector('.rating-close-btn'),
};

const variables = {
  rate: 0,
  exerciseId: '64f389465ae26083f39b17a2',
};

refs.rateList.addEventListener('mouseover', handleHover);
function handleHover(event) {
  const target = event.target;
  let targetId = target.dataset.id;
  if (target.tagName === 'use') {
    targetId = target.parentNode.dataset.id;
  }
  if (targetId) {
    for (let i = 0; i < targetId; i++) {
      refs.stars[i].classList.add('icon-star-hover');
    }
  }
}

refs.rateList.addEventListener('mouseout', handleOut);
function handleOut() {
  refs.stars.forEach(star => {
    if (star.dataset.id > variables.rate) {
      star.classList.remove('icon-star-hover');
    }
  });
}

refs.rateList.addEventListener('click', handleSetRating);
function handleSetRating(event) {
  const target = event.target;
  let targetId = target.dataset.id;
  if (target.tagName === 'use') {
    targetId = target.parentNode.dataset.id;
  }
  if (targetId) {
    for (let i = 0; i < targetId; i++) {
      refs.stars[i].classList.add('icon-star-hover');
    }
    variables.rate = targetId;
    refs.stars.forEach(star => {
      if (star.dataset.id > variables.rate) {
        star.classList.remove('icon-star-hover');
      }
    });
    refs.ratingChoosed.textContent = variables.rate + '.0';
  }
}

refs.form.addEventListener('submit', handleRatigSubmit);
function handleRatigSubmit(event) {
  event.preventDefault();
  const id = variables.exerciseId;
  const body = {};
  body.email = refs.form.elements.email.value;
  body.review = refs.form.elements.comment.value;
  body.rate = variables.rate / 1;

  api.setRating(id, body);

  refs.form.reset();
  refs.stars.forEach(star => {
    star.classList.remove('icon-star-hover');
  });
  refs.ratingChoosed.textContent = '0.0';
  variables.rate = 0;
}

refs.ratingCloseBtn.addEventListener('click', handleRatingClose);
function handleRatingClose() {
  refs.ratingModal.classList.add('is-hidden');
}
