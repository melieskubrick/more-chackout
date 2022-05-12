import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

/* Screens */
import Home from '../screens/Home';
import Cart from '#/screens/Cart';
import Success from '#/screens/Success';

const { Navigator, Screen, Group } = createNativeStackNavigator();

const Stack: React.FC = () => {
  return (
    <Navigator initialRouteName="Home">
      <Group>
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Screen name="Cart" component={Cart} options={{ headerShown: false }} />
        <Screen
          name="Success"
          component={Success}
          options={{ headerShown: false }}
        />
      </Group>
    </Navigator>
  );
};

export default Stack;
