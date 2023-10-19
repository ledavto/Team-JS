class Api {}
import axios from 'axios';
// Реалізація всіх запитів через екземпляр классу
// nodemon ./src/js/api.js
// TODO: Написати методи для усіх фетчів

class Api {
  #BASE_URL = 'https://your-energy.b.goit.study/api';

  async getData(url) {
    const response = await axios.get(url);
    return response.data;
  }

  async getExFilters(params) {
    const searchParams = new URLSearchParams(params);
    try {
      return await this.getData(`${this.#BASE_URL}/filters?${searchParams}`);
    } catch (error) {
      console.log(error);
    }
  }

  async getFiltered(params) {
    const searchParams = new URLSearchParams(params);
    try {
      return await this.getData(`${this.#BASE_URL}/exercises?${searchParams}`);
    } catch (error) {
      console.log(error);
    }
  }

  async getDetails(id) {
    try {
      return await this.getData(`${this.#BASE_URL}/exercises?${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  /*
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
      return await this.getData(`${this.#BASE_URL}/quote`);
    } catch (error) {
      console.log(error);
    }
  }

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
