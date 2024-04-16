import React from 'react';
import {
  VStack,
  Image,
  Text,
  HStack,
  Card,
  View,
  Pressable,
} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import AddToCartButton from './AddToCartButton';
import {addItemToCart} from '../../../store/slice/cartSlice';

const PokeListItem = ({item}) => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const onAddToCartBtnPressed = () => {
    dispatch(addItemToCart(item));
  };

  const navigateToDetail = () => {
    navigate('Detail', {name: item.name});
  };

  return (
    <Pressable onPress={navigateToDetail}>
      <Card m="$1">
        <VStack>
          <HStack justifyContent="center">
            <Image
              alt="image alt"
              size="md"
              source={{
                uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png`,
              }}
            />
          </HStack>
          <Text textAlign="center">{item.name}</Text>
          <View mt="$3">
            <AddToCartButton onPress={onAddToCartBtnPressed} />
          </View>
        </VStack>
      </Card>
    </Pressable>
  );
};

export default PokeListItem;
