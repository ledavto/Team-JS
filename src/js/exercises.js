import axios from 'axios';
import api from './api';
import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';

import svgSprite from '../img/icons.svg';

let currentPage = 1;
let selectedCategory = 'Body parts';
let itemsPerPage;

let selectedSubCategory = ''; // lm
let selectedKeyword = ''; // lm

// Nikita
function showCategories(subcategory, page = 1) {
  const windowInnerWidth = window.innerWidth;

  if (windowInnerWidth < 768) {
    itemsPerPage = 9;
  } else {
    itemsPerPage = 12;
  }

  api
    .getFilters({ filter: subcategory, page, limit: itemsPerPage })
    .then(data => {
      const categoryCards = document.getElementById('category-cards');
      categoryCards.innerHTML = '';

      data.results.forEach(category => {
        const card = document.createElement('div');
        card.style.background = `linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${category.imgURL}) lightgray -22.462px -5px / 109.595% 107.556% no-repeat`;
        card.classList.add('category-card');

        card.innerHTML = `<h3 class="category-title">${category.name}</h3>
          <p class="category-subcategory"> ${category.filter}</p>
        `;
        categoryCards.appendChild(card);
      });

      updatePagination(data.totalPages);
    })
    .catch(error => {
      console.error(error);
    });
}

function updatePagination(totalPages) {
  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';

  // lm
  if (totalPages > 0) {
    paginationContainer.style.display = '';
  } else {
    paginationContainer.style.display = 'none';
  }
  // lm

  const options = {
    totalItems: totalPages * itemsPerPage,
    itemsPerPage: itemsPerPage,
    visiblePages: 5,
    page: currentPage,
  };

  const pagination = new Pagination(paginationContainer, options);

  pagination.on('beforeMove', event => {
    const newPage = event.page;
    currentPage = newPage;
    showCategories(selectedCategory, newPage);
  });
}

document
  .getElementById('bodypart-filter')
  .addEventListener('click', function () {
    currentPage = 1;
    selectedCategory = 'Body parts';

    // lm
    document.querySelector('.exercise-section-title').innerHTML = '';
    document.querySelector('.exercise-section-title').innerHTML =
      'Exercise<span class="exercise-section-title-span"></span>';
    document.querySelector('.exercise-section-search').style.display = 'none';
    // lm

    showCategories(selectedCategory, currentPage);
  });

document
  .getElementById('muscles-filter')
  .addEventListener('click', function () {
    currentPage = 1;
    selectedCategory = 'Muscles';

    // lm
    document.querySelector('.exercise-section-title').innerHTML = '';
    document.querySelector('.exercise-section-title').innerHTML =
      'Exercise<span class="exercise-section-title-span"></span>';
    document.querySelector('.exercise-section-search').style.display = 'none';
    // lm

    showCategories(selectedCategory, currentPage);
  });

document
  .getElementById('equipment-filter')
  .addEventListener('click', function () {
    currentPage = 1;
    selectedCategory = 'Equipment';

    // lm
    document.querySelector('.exercise-section-title').innerHTML = '';
    document.querySelector('.exercise-section-title').innerHTML =
      'Exercise<span class="exercise-section-title-span"></span>';
    document.querySelector('.exercise-section-search').style.display = 'none';
    // lm

    showCategories(selectedCategory, currentPage);
  });

showCategories(selectedCategory);

// Maryna
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.exercise-section-button');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      buttons.forEach(btn => {
        btn.classList.remove('js-active-filter-button');
      });
      this.classList.add('js-active-filter-button');
    });
  });
});

//Mykhaylo
document.querySelector('.category-cards').addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    return;
  }

  const targetElement = event.target.closest('.category-card');

  if (!targetElement) {
    return;
  }

  selectedCategory = targetElement.children[1].textContent.trim();
  selectedSubCategory = targetElement.children[0].textContent.trim();
  selectedKeyword = '';
  currentPage = 1;

  showExercises(
    selectedCategory,
    selectedSubCategory,
    selectedKeyword,
    currentPage
  );
});

function showExercises(category, subCategory, keywords, page = 1) {
  const windowInnerWidth = window.innerWidth;

  if (windowInnerWidth < 768) {
    itemsPerPage = 8;
  } else {
    itemsPerPage = 10;
  }

  const parameters = {};

  if (category === 'Body parts') {
    parameters.bodypart = subCategory;
  } else if (category === 'Muscles') {
    parameters.muscles = subCategory;
  } else if (category === 'Equipment') {
    parameters.equipment = subCategory;
  } else {
    return;
  }

  parameters.page = page;

  if (keywords) {
    parameters.keyword = keywords;
  }

  parameters.limit = itemsPerPage;

  api
    .getFiltered(parameters)
    .then(data => {
      const categoryCards = document.getElementById('category-cards');
      categoryCards.innerHTML = '';

      if (data.totalPages > 0) {
        data.results.forEach(exr => {
          const exrCard = document.createElement('div');
          exrCard.classList.add('exr-item');
          exrCard.dataset.id = `${exr._id}`;

          exrCard.innerHTML = `
          <div class="exr-item-header">
            <div class="exr-item-header-workout">WORKOUT</div>
            <div class="exr-item-header-rating">${exr.rating}</div>
            <div class="exr-item-header-star">
              <svg width="14" height="13">
                <use href="/img/icons.svg#star-rate"></use>
              </svg>
            </div>
            <button class="exr-item-header-start" type="button">
              <span class="exr-item-header-text">Start</span>
              <svg class="exr-item-header-arrow" width="16" height="16">
                <use href="${svgSprite}#icon-arrow"></use>
              </svg>
            </button>
          </div>

          <div class="exr-item-name">
            <div class="exr-item-name-svg">
              <svg class="exr-item-name-svg-svg" width="15" height="15">
                <use href="/img/icons.svg#icon-running-stick-figure"></use>
              </svg>
            </div>
            <div class="exr-item-name-text">${exr.name}</div>
          </div>

          <div class="exr-item-info">
            <p class="exr-item-info-burned-grey">Burned calories:</p>
            <p class="exr-item-info-burned-normal">${exr.burnedCalories} / ${exr.time} min</p>

            <p class="exr-item-info-part-grey">Body part:</p>
            <p class="exr-item-info-part-normal">${exr.bodyPart}</p>

            <p class="exr-item-info-target-grey">Target:</p>
            <p class="exr-item-info-target-normal">${exr.target}</p>
          </div>
        `;

          categoryCards.appendChild(exrCard);

          //Слухач на натискання скнопки START
          exrCard.addEventListener('click', event => {
            document.querySelector('.backdrop').classList.remove('is-hidden');

            //Додає ID вправи у карточку
            document
              .querySelector('.backdrop-exr')
              .setAttribute('id', event.currentTarget.getAttribute('data-id'));
          });
        });
      } else {
        const exrCard = document.createElement('div');
        exrCard.classList.add('exr-empty-search-list');
        exrCard.innerHTML = 'Nothing was found for your request.';
        categoryCards.appendChild(exrCard);
      }

      updatePaginationExercises(data.totalPages);

      document.querySelector(
        '.exercise-section-title'
      ).innerHTML = `Exercise / <span class="exercise-section-title-span">${subCategory}</span>`;
      document.querySelector('.exercise-section-search').style.display = '';
    })
    .catch(error => {
      console.error(error);
    });
}

document
  .querySelector('.exercise-section-search-form')
  .addEventListener('submit', event => {
    event.preventDefault();

    const form = event.target;
    const keyword = form.elements.keyword.value;

    selectedKeyword = keyword.trim();
    currentPage = 1;

    form.elements.keyword.value = '';

    showExercises(
      selectedCategory,
      selectedSubCategory,
      selectedKeyword,
      currentPage
    );
  });

function updatePaginationExercises(totalPages) {
  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';

  if (totalPages > 0) {
    paginationContainer.style.display = '';
  } else {
    paginationContainer.style.display = 'none';
  }

  const options = {
    totalItems: totalPages * itemsPerPage,
    itemsPerPage: itemsPerPage,
    visiblePages: 5,
    page: currentPage,
  };

  const pagination = new Pagination(paginationContainer, options);

  pagination.on('beforeMove', event => {
    const newPage = event.page;
    currentPage = newPage;
    //    showCategories(selectedCategory, newPage);
    showExercises(
      selectedCategory,
      selectedSubCategory,
      selectedKeyword,
      newPage
    );
  });
}
