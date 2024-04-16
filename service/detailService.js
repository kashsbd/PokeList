import $axios from './axios';

export const fetchPokemonDetail = async name => {
  try {
    const response = await $axios.get(`/${name}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
