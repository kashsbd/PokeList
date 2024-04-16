import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Spinner, VStack, Text, Image} from '@gluestack-ui/themed';
import {useRoute} from '@react-navigation/native';

import useGetPokemonDetail from '../../hook/useGetPokemonDetail';

const DetailScreen = () => {
  const {params} = useRoute();
  const {data, isPending} = useGetPokemonDetail(params.name);

  if (isPending) {
    <VStack>
      <Spinner />
    </VStack>;
  }

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 22,
    marginBottom: 15,
  },
});

export default DetailScreen;
