import {useQuery} from '@tanstack/react-query';

import {fetchPokemonDetail} from '../service/detailService';

const useGetPokemonDetail = name => {
  return useQuery({
    queryKey: ['pokemonlist', {for: name}],
    queryFn: () => fetchPokemonDetail(name),
  });
};

export default useGetPokemonDetail;
