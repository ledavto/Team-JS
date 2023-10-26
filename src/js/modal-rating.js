import api from './api.js';

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
  //exerciseId: '64f389465ae26083f39b17a2',
  exerciseId: document.querySelector('.backdrop-exr'),
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
    refsRating.stars.forEach((star, i) => {
      if (value > i) {
        star.classList.add('icon-star-highlight');
      }
    });
  }
}

refsRating.rateList.addEventListener('mouseout', handleOut);
function handleOut() {
  refsRating.stars.forEach(star => {
    const value = star.parentNode.previousElementSibling.value;
    if (value > variables.rate) {
      star.classList.remove('icon-star-highlight');
    }
  });
}

refsRating.form.addEventListener('change', handleChange);
function handleChange(event) {
  const target = event.target;
  if (target.type === 'radio') {
    variables.rate = target.value;
    refsRating.ratingChoosed.textContent = target.value + '.0';
    refsRating.stars.forEach((star, i) => {
      if (target.value > i) {
        star.classList.add('icon-star-highlight');
      } else {
        star.classList.remove('icon-star-highlight');
      }
    });
  }
}

refsRating.form.addEventListener('submit', handleRatigSubmit);
async function handleRatigSubmit(event) {
  event.preventDefault();
  const id = variables.exerciseId.dataset.id;
  const body = {};
  body.email = refsRating.form.elements.email.value;
  body.review = refsRating.form.elements.comment.value;
  body.rate = variables.rate / 1;

  const response = await api.setRating(id, body);

  if (response) {
    refsRating.form.reset();
    refsRating.stars.forEach(star => {
      star.classList.remove('icon-star-highlight');
    });
    refsRating.ratingChoosed.textContent = '0.0';
    variables.rate = 0;
    handleRatingClose();
  }
}

refsRating.ratingCloseBtn.addEventListener('click', handleRatingClose);
function handleRatingClose() {
  variables.rate = 0;
  refsRating.ratingModal.classList.add('is-hidden');
  document.querySelector('[data-modal-general]').classList.remove('is-hidden');
}
