import React from 'react';
import {HStack, VStack, Image, Text, Pressable} from '@gluestack-ui/themed';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import QuantityAdjustmentButton from '../../../component/QuantityAdjustmentButton';
import {
  addItemToCart,
  removeItemFromCart,
} from '../../../store/slice/cartSlice';

const CartListItem = ({item}) => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const onMinusBtnPressed = () => {
    dispatch(removeItemFromCart(item.name));
  };

  const onPlusBtnPressed = () => {
    dispatch(addItemToCart(item));
  };

  const navigateToDetail = () => {
    navigate('Detail', {name: item.name});
  };

  return (
    <Pressable onPress={navigateToDetail} mb="$1">
      <HStack bg="$white" columnGap="$3">
        <VStack justifyContent="center">
          <Image
            alt="image alt"
            size="lg"
            source={{
              uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png`,
            }}
          />
        </VStack>
        <VStack justifyContent="center" rowGap="$2">
          <Text>{item.name}</Text>
          <QuantityAdjustmentButton
            quantity={item.quantity}
            onMinusBtnPressed={onMinusBtnPressed}
            onPlusBtnPressed={onPlusBtnPressed}
          />
        </VStack>
      </HStack>
    </Pressable>
  );
};

export default CartListItem;
