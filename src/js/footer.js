import api from './api';
import Notiflix from 'notiflix';

const input = document.getElementById('subscribe-input');

const clickHandler = async event => {
  event.preventDefault();
  const inputValue = input.value;
  const pattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const valid = inputValue.match(pattern);

  if (valid) {
    const response = await api.subscribe(inputValue);

    //   TODO: if undefined - error
    if (
      response === undefined ||
      (response.status !== 201 && response.status !== 200)
    ) {
      input.classList.add('error');
      Notiflix.Notify.failure(response.data.message);
    } else {
      input.classList.remove('error');
      input.value = '';
      Notiflix.Notify.success(response.data.message);
    }
  } else {
    input.classList.add('error');
    const errorMessage =
      inputValue === '' ? 'Email can not be empty!' : 'Invalid email!';
    Notiflix.Notify.failure(errorMessage);
  }
};

document
  .getElementById('subscribe-btn')
  .addEventListener('click', clickHandler);
