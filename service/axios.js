import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

const instance = axios.create({
  baseURL: API_URL,
});

export default instance;
