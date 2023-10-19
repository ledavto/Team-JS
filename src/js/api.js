import axios from 'axios';
// Реалізація всіх запитів через екземпляр классу
// nodemon ./src/js/api.js
// TODO: Прийняти дані від союзників та лоповнити функції

class Api {
  #BASE_URL = 'https://your-energy.b.goit.study/api';

  async #getData(url) {
    const response = await axios.get(url);
    return response.data;
  }

  /* Example
  params = {
  filter: "Muscles",
  page: 1,
  }
  */
  async getFilters(params) {
    const searchParams = new URLSearchParams(params);
    try {
      return await this.#getData(`${this.#BASE_URL}/filters?${searchParams}`);
    } catch (error) {
      console.log(error);
    }
  }

  /* Example
  params = {
  bodypart: "back",
  page: 1,
  }
  */
  async getFiltered(params) {
    const searchParams = new URLSearchParams(params);
    try {
      return await this.#getData(`${this.#BASE_URL}/exercises?${searchParams}`);
    } catch (error) {
      console.log(error);
    }
  }

  async getDetails(id) {
    try {
      return await this.#getData(`${this.#BASE_URL}/exercises?${id}`);
    } catch (error) {
      console.log(error);
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
      console.log(error);
    }
  }

  async getQuote() {
    try {
      return await this.#getData(`${this.#BASE_URL}/quote`);
    } catch (error) {
      console.log(error);
    }
  }

  // Example
  // email = "string@gmail.com"
  async subscribe(email) {
    try {
      return await axios.post(`${this.#BASE_URL}/subscription`, { email });
    } catch (error) {
      console.log(error);
    }
  }
}

const api = new Api();
export default api;
