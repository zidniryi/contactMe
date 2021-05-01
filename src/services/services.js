import axios from 'axios';
const url = 'https://simple-contact-crud.herokuapp.com/';
/**
 * Singgeleton for instance API
 */
const baseApi = axios.create({
  baseURL: url,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default baseApi;
