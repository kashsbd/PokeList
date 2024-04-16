import React from 'react';
import {VStack, Spinner} from '@gluestack-ui/themed';
import {MasonryFlashList} from '@shopify/flash-list';

import PokeListItem from './components/PokeListItem';
import useInfiniteGetPokemonList from '../../hook/useInfiniteGetPokemonList';

const HomeScreen = () => {
  const {isPending, data, fetchNextPage, isFetchingNextPage, hasNextPage} =
    useInfiniteGetPokemonList();

  let allData = [];
  if (!isPending && Array.isArray(data?.pages) && data.pages.length > 0) {
    allData = data.pages.reduce(
      (accumulator, currentValue) => [...accumulator, ...currentValue?.results],
      [],
    );
  }

  const renderItem = ({item}) => {
    return <PokeListItem item={item} />;
  };

  if (isPending) {
    return (
      <VStack height="$full" justifyContent="center" alignItems="center">
        <Spinner />
      </VStack>
    );
  }

  return (
    <VStack height="$full">
      <MasonryFlashList
        data={allData}
        numColumns={2}
        renderItem={renderItem}
        estimatedItemSize={300}
      />
    </VStack>
  );
};

export default HomeScreen;
