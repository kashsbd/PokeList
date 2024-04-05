import $axios from '../services/axios';

export const fetchPokemonList = async (offset: number) => {
  try {
    const response = await $axios.get(`?offset=${offset}&limit=10`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
