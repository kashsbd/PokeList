import React from 'react';
import {HStack, Pressable, Icon, Text} from '@gluestack-ui/themed';
import {Plus, Minus} from 'lucide-react-native';

const QuantityAdjustmentButton = ({
  onMinusBtnPressed = () => {},
  onPlusBtnPressed = () => {},
  quantity = 0,
}) => {
  const isMinusBtnDisabled = quantity === 0;

  return (
    <HStack
      columnGap="$3"
      p="2"
      borderRadius="$sm"
      borderWidth="$1"
      borderColor="$primary100"
      alignItems="center">
      <Pressable
        disabled={isMinusBtnDisabled}
        onPress={onMinusBtnPressed}
        p="$2"
        borderRightWidth="$1"
        borderColor="$primary100">
        <Icon as={Minus} />
      </Pressable>
      <Text fontWeight="bold">{quantity}</Text>
      <Pressable
        onPress={onPlusBtnPressed}
        p="$2"
        borderLeftWidth="$1"
        borderColor="$primary100">
        <Icon as={Plus} />
      </Pressable>
    </HStack>
  );
};

export default QuantityAdjustmentButton;
