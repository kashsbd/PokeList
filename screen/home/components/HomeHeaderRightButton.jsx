import React from 'react';
import {Button, ButtonIcon} from '@gluestack-ui/themed';
import {ShoppingCart} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';

const HomeHeaderRightButton = () => {
  const {navigate} = useNavigation();
  return (
    <Button variant="link" onPress={() => navigate('Cart')}>
      <ButtonIcon as={ShoppingCart} />
    </Button>
  );
};

export default HomeHeaderRightButton;
