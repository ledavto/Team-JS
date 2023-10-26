const removeBodyClass = () => {
  document.querySelector('body').classList.remove('modal-exercise-open');
};

document.querySelector('.overlay').addEventListener('click', removeBodyClass);
document
  .querySelector('.modal-general-close-btn')
  .addEventListener('click', removeBodyClass);

document.addEventListener('keydown', event => {
  const key = event.key;
  if (key === 'Escape') {
    removeBodyClass();
  }
});
