import React, {useCallback} from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import HomeScreen from './screens/home/HomeScreen';
import DetailScreen from './screens/home/DetailScreen';
import CartListScreen from './screens/cart/CartScreen';
import HomeHeaderRightButton from './screens/home/components/HomeHeaderRightButton';

import {store} from './store/store';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  const renderHomeHeaderRight = useCallback(
    () => <HomeHeaderRightButton />,
    [],
  );

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <GluestackUIProvider config={config}>
          <Provider store={store}>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  title: 'Home',
                  headerRight: renderHomeHeaderRight,
                }}
              />
              <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{title: 'Detail'}}
              />
              <Stack.Screen
                name="Cart"
                component={CartListScreen}
                options={{title: 'Cart'}}
              />
            </Stack.Navigator>
          </Provider>
        </GluestackUIProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
