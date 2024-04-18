import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Spinner,
  VStack,
  Text,
  Image,
  HStack,
  Button,
} from '@gluestack-ui/themed';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import QuantityAdjustmentButton from '../../component/QuantityAdjustmentButton';
import useGetPokemonDetail from '../../hook/useGetPokemonDetail';
import {addItemToCart, removeItemFromCart} from '../../store/slice/cartSlice';

const DetailScreen = () => {
  const {params} = useRoute();
  const dispatch = useDispatch();
  const {data, isPending} = useGetPokemonDetail(params.name);
  const items = useSelector(state => state.cart.items);

  const itemSelectedByName = items[params.name];
  const quantity = itemSelectedByName?.quantity || 0;
  const totalWeight = data?.weight * quantity;

  const onPlusBtnPressed = () => {
    dispatch(addItemToCart(params));
  };

  const onMinusBtnPressed = () => {
    dispatch(removeItemFromCart(params.name));
  };

  if (isPending) {
    <VStack height="$full" justifyContent="center" alignItems="center">
      <Spinner />
    </VStack>;
  }

  return (
    <VStack height="$full">
      <VStack height="90%" alignItems="center">
        <Image
          alt="image alt"
          style={styles.image}
          source={{
            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${params.name}.png`,
          }}
        />
        <Text style={styles.text}>Name: {data?.name}</Text>
        <Text style={styles.text}>Height: {data?.height}</Text>
        <Text style={styles.text}>Weight: {data?.weight}</Text>
        <Text style={styles.text}>
          Ability: {data?.abilities[0].ability.name}
        </Text>
        <Text style={styles.text}>Type: {data?.types[0].type.name}</Text>
      </VStack>
      <VStack bg="$white" height="10%" px="$5">
        {quantity === 0 ? (
          <HStack justifyContent="center" alignItems="center" height="$full">
            <Button onPress={onPlusBtnPressed} variant="outline">
              <Text p="$0">Add to cart</Text>
            </Button>
          </HStack>
        ) : (
          <HStack
            justifyContent="space-between"
            alignItems="center"
            height="$full">
            <Text fontWeight="bold">{totalWeight}</Text>
            <QuantityAdjustmentButton
              quantity={quantity}
              onPlusBtnPressed={onPlusBtnPressed}
              onMinusBtnPressed={onMinusBtnPressed}
            />
          </HStack>
        )}
      </VStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 180,
  },
  text: {
    fontSize: 22,
    marginBottom: 15,
  },
});

export default DetailScreen;
