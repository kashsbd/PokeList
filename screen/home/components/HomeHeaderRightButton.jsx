import React from 'react';
import {
  ButtonIcon,
  VStack,
  Badge,
  BadgeText,
  Pressable,
} from '@gluestack-ui/themed';
import {ShoppingCart} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const HomeHeaderRightButton = () => {
  const {navigate} = useNavigation();
  const items = useSelector(state => state.cart.items);

  const totalCount = Object.values(items).reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const navigateToCart = () => {
    navigate('Cart');
  };

  return (
    <Pressable alignItems="center" mr="$3" onPress={navigateToCart}>
      <VStack>
        <Badge
          bg="$red600"
          borderRadius="$full"
          mb={-2}
          mr={-14}
          zIndex={1}
          variant="solid"
          alignSelf="flex-end">
          <BadgeText color="$white">{totalCount}</BadgeText>
        </Badge>
        <ButtonIcon as={ShoppingCart} />
      </VStack>
    </Pressable>
  );
};

export default HomeHeaderRightButton;
