import axios from 'axios';

class Api {
  url = 'https://reqres.in/api/users';

  async getUsers(page) {
    try {
      const { data } = await axios.get(`${this.url}?page=${page}`);
      return data;
    } catch (e) {
      return { error: e.message };
    }
  }

  async updUser(user) {
    const { data } = await axios.put(`${this.url}/${user.id}`, user);
    return data;
  }
  async dellUser(id) {
    const { data } = await axios.delete(`${this.url}/${id}`);
    return data;
  }
  async createUser(user) {
    const { data } = await axios.put(this.url, user);
    return data;
  }
}

const api = new Api();

export default api;
