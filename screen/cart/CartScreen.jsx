import React from 'react';
import {NativeModules, PermissionsAndroid} from 'react-native';
import {HStack, Text, VStack, Button} from '@gluestack-ui/themed';
import {FlashList} from '@shopify/flash-list';
import {useSelector} from 'react-redux';

import CartListItem from './component/CartListItem';

const {ContactsModule, SmsModule} = NativeModules;
const CartScreen = () => {
  const items = useSelector(state => state.cart.items);
  const itemList = Object.values(items);

  const totalWeight = itemList.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.weight * currentValue.quantity,
    0,
  );

  const onCheckoutBtnPressed = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts Permission',
          message:
            'This app needs access to your contacts to demonstrate the feature.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const contacts = await ContactsModule.getContacts();
        console.log(contacts);
      } else {
        console.log('Contacts permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

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
    <VStack height="$full">
      <VStack height="85%">
        <FlashList
          data={itemList}
          renderItem={renderItem}
          estimatedItemSize={200}
          keyExtractor={keyExtractor}
        />
      </VStack>
      <VStack
        height="15%"
        bg="$white"
        p="$2"
        justifyContent="center"
        rowGap="$2">
        <HStack justifyContent="space-between">
          <Text fontWeight="$medium">Total weight</Text>
          <Text fontWeight="$medium">{totalWeight}</Text>
        </HStack>
        <Button onPress={onCheckoutBtnPressed} variant="outline" width="$full">
          <Text p="$0">Check items</Text>
        </Button>
      </VStack>
    </VStack>
  );
};

export default CartScreen;
