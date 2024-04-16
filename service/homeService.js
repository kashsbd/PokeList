import $axios from './axios';

export const fetchPokemonList = async offset => {
  try {
    const response = await $axios.get(`?offset=${offset}&limit=10`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
