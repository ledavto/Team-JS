import axios from 'axios';
import api from './api';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

let currentPage = 1;
let selectedCategory = 'Body parts';
let itemsPerPage;

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
    showCategories(selectedCategory, currentPage);
  });

document
  .getElementById('muscles-filter')
  .addEventListener('click', function () {
    currentPage = 1;
    selectedCategory = 'Muscles';
    showCategories(selectedCategory, currentPage);
  });

document
  .getElementById('equipment-filter')
  .addEventListener('click', function () {
    currentPage = 1;
    selectedCategory = 'Equipment';
    showCategories(selectedCategory, currentPage);
  });

showCategories(selectedCategory);
