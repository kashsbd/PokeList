import React from 'react';
import {VStack, Spinner, HStack} from '@gluestack-ui/themed';
import {MasonryFlashList} from '@shopify/flash-list';

import PokeListItem from './components/PokeListItem';
import useInfiniteGetPokemonList from '../../hook/useInfiniteGetPokemonList';

const HomeScreen = () => {
  const {isPending, data, fetchNextPage, hasNextPage} =
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

  const renderListFooter = () => {
    return (
      <HStack justifyContent="center" py="$3">
        <Spinner />
      </HStack>
    );
  };

  const keyExtractor = item => item.name;

  const onEndReached = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  if (isPending) {
    return (
      <VStack flex={1} justifyContent="center" alignItems="center">
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
        onEndThreshold={0}
        ListFooterComponent={renderListFooter}
        onEndReached={onEndReached}
        keyExtractor={keyExtractor}
      />
    </VStack>
  );
};

export default HomeScreen;
