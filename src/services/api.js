import axios from 'axios';

const api = axios.create({
  baseURL: 'https://devore.herokuapp.com/',
});
const accessId = localStorage.getItem('access_id');

if (accessId) {
  api.defaults.headers.access_id = accessId;
}

export default api;
