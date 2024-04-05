import React from 'react';
import {VStack, Image, Text, HStack, Card, View} from '@gluestack-ui/themed';

import ToggleAddToCartButton from './ToggleAddToCartButton';

import type {ListItemType} from '../../../types/home';

const PokeListItem = ({item}: {item: ListItemType}) => {
  const onToggleAddToCartBtnPressed = (hasAdded: boolean) => {};

  return (
    <Card m="$1">
      <VStack>
        <HStack justifyContent="center">
          <Image
            alt="image alt"
            size="md"
            source={{
              uri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            }}
          />
        </HStack>
        <Text textAlign="center">{item.name}</Text>
        <View mt="$3">
          <ToggleAddToCartButton
            hasAlreadyAdded={false}
            onPress={onToggleAddToCartBtnPressed}
          />
        </View>
      </VStack>
    </Card>
  );
};

export default PokeListItem;
