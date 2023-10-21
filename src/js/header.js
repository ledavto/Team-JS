const homepage = document.querySelector('.homepageitem');
// const favoritesLink = document.querySelector('.favoritelink');
const favoritespageitem = document.querySelector('.favoritespageitem');
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

const changeTextColor = () => {
  // Event.preventDefault();
  homepage.style.backgroundColor = '#242424';
  homepage.style.color = '#F4F4F4';

  favoritespageitem.style.backgroundColor = '#F4F4F4';
  favoritespageitem.style.color = '#242424';
  favoritespageitem.style.width = '87px';
};
favoritespageitem.addEventListener('click', changeTextColor);
