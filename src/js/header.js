// const homepage = document.querySelector('.homepageitem');
// const favoritespageitem = document.querySelector('.favoritespageitem');

//Виділення активної сторінки

//console.log(window.location.pathname.includes('favorites.html'));

if (window.location.pathname.includes('favorites.html')) {
  document.querySelector('.homepage').classList.remove('active');
  document.querySelector('.favorites').classList.add('active');
  document.querySelector('.homepage-mob').classList.remove('active');
  document.querySelector('.favorites-mob').classList.add('active');
} else {
  document.querySelector('.homepage').classList.add('active');
  document.querySelector('.favorites').classList.remove('active');
  document.querySelector('.homepage-mob').classList.add('active');
  document.querySelector('.favorites-mob').classList.remove('active');
}
// Mobile menu function
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

// changing style for navigation header
// const changeTextColor = () => {
//   homepage.style.backgroundColor = '#242424';
//   homepage.style.color = '#F4F4F4';
//   homepage.style.padding = '0';
//   favoritespageitem.style.padding = '0';
//   favoritespageitem.style.backgroundColor = '#F4F4F4';
//   favoritespageitem.style.color = '#242424';
//   favoritespageitem.style.width = '87px';
// };

// const changeTextColorHome = () => {
//   homepage.style.backgroundColor = '#F4F4F4';
//   homepage.style.color = '#242424';

//   favoritespageitem.style.backgroundColor = '#242424';
//   favoritespageitem.style.color = '#F4F4F4';
// };

// homepage.addEventListener('click', changeTextColorHome);
// favoritespageitem.addEventListener('click', changeTextColor);
