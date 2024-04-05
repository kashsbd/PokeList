import {useInfiniteQuery} from '@tanstack/react-query';

import {fetchPokemonList} from '../services/homeService';

const useInfiniteGetPokemonList = () => {
  return useInfiniteQuery({
    queryKey: ['pokemonlist'],
    initialPageParam: 0,
    queryFn: ({pageParam}) => fetchPokemonList(pageParam),
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const totalCount = lastPage.count;
      if (lastPageParam >= totalCount) {
        return null;
      }
      return lastPageParam + 10;
    },
  });
};

export default useInfiniteGetPokemonList;
