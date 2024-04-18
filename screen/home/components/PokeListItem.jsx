import React from 'react';
import {
  VStack,
  Image,
  Text,
  HStack,
  Card,
  Pressable,
} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';

const PokeListItem = ({item}) => {
  const {navigate} = useNavigation();

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
        </VStack>
      </Card>
    </Pressable>
  );
};

export default PokeListItem;
