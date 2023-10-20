import axios from 'axios';
// Реалізація всіх запитів через екземпляр классу
// nodemon ./src/js/api.js
// TODO: Прийняти дані від команди та доповнити функції

class Api {
  #BASE_URL = 'https://your-energy.b.goit.study/api';

  async #getData(url) {
    const response = await axios.get(url);
    return response.data;
  }

  #handleError(error) {
    Notiflix.Notify.failure(error.response.data.message);
  }

  /* Example
  params = {
  filter: "Muscles",
  page: 1,
  }
  */
  async getFilters(params) {
    try {
      const searchParams = new URLSearchParams(params);
      return await this.#getData(`${this.#BASE_URL}/filters?${searchParams}`);
    } catch (error) {
      this.#handleError(error);
    }
  }

  /* Example
  params = {
  bodypart: "back",
  page: 1,
  }
  */
  async getFiltered(params) {
    try {
      const searchParams = new URLSearchParams(params);
      return await this.#getData(`${this.#BASE_URL}/exercises?${searchParams}`);
    } catch (error) {
      this.#handleError(error);
    }
  }

  async getDetails(id) {
    try {
      return await this.#getData(`${this.#BASE_URL}/exercises?${id}`);
    } catch (error) {
      this.#handleError(error);
    }
  }

  /* Example
  body = {
  "rate": 5,
  "email": "test@gmail.com",
  "review": "My best exercise"
}
*/
  async setRating(id, body) {
    try {
      return await axios.patch(
        `${this.#BASE_URL}/exercises?${id}/rating`,
        body
      );
    } catch (error) {
      this.#handleError(error);
    }
  }

  async getQuote() {
    try {
      return await this.#getData(`${this.#BASE_URL}/quote`);
    } catch (error) {
      this.#handleError(error);
    }
  }

  // Example
  // email = "string@gmail.com"
  async subscribe(email) {
    try {
      return await axios.post(`${this.#BASE_URL}/subscription`, { email });
    } catch (error) {
      this.#handleError(error);
    }
  }
}

const api = new Api();
export default api;
