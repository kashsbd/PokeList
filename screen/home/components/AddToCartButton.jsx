import React from 'react';
import {Button, Text} from '@gluestack-ui/themed';

const AddToCartButton = ({onPress}) => {
  const onButtonPressed = () => {};

  return (
    <Button onPress={onButtonPressed} variant="outline">
      <Text p="$0">Add to cart</Text>
    </Button>
  );
};

export default AddToCartButton;
