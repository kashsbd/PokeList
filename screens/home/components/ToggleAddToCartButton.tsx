import React, {useState, useEffect} from 'react';
import {Button, Text} from '@gluestack-ui/themed';

type ButtonProp = {
  hasAlreadyAdded: boolean;
  onPress: (hasAdded: boolean) => void;
};

const ToggleAddToCartButton = ({
  hasAlreadyAdded = false,
  onPress,
}: ButtonProp) => {
  const [hasAdded, setHasAdded] = useState(hasAlreadyAdded);

  useEffect(() => {
    setHasAdded(hasAlreadyAdded);
  }, [hasAlreadyAdded]);

  const onToggle = () => {
    setHasAdded(pre => {
      const _pre = !pre;
      onPress(_pre);
      return _pre;
    });
  };

  return (
    <Button onPress={onToggle} variant="outline">
      {<Text p="$0">{hasAdded ? 'Remove from cart' : 'Add to cart'}</Text>}
    </Button>
  );
};

export default ToggleAddToCartButton;
