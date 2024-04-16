import React from 'react';
import {Button, Text} from '@gluestack-ui/themed';

const AddToCartButton = ({onPress = () => {}}) => {
  return (
    <Button onPress={onPress} variant="outline">
      <Text p="$0">Add to cart</Text>
    </Button>
  );
};

export default AddToCartButton;
