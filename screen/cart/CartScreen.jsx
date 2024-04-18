import React from 'react';
import {Text, VStack} from '@gluestack-ui/themed';
import {FlashList} from '@shopify/flash-list';
import {useSelector} from 'react-redux';

import CartListItem from './component/CartListItem';

const CartScreen = () => {
  const items = useSelector(state => state.cart.items);
  const itemList = Object.values(items);

  const renderItem = ({item}) => {
    return <CartListItem item={item} />;
  };

  const keyExtractor = item => item.name;

  if (Array.isArray(itemList) && itemList.length === 0) {
    return (
      <VStack height="$full" justifyContent="center" alignItems="center">
        <Text>No items in the cart</Text>
      </VStack>
    );
  }

  return (
    <FlashList
      data={itemList}
      renderItem={renderItem}
      estimatedItemSize={200}
      keyExtractor={keyExtractor}
    />
  );
};

export default CartScreen;
