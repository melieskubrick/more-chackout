import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

/* Screens */
import Home from '../screens/Home';

const {Navigator, Screen, Group} = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
  //   headerShown: false,
};

const Stack: React.FC = () => {
  return (
    <Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Group>
        <Screen name="Home" component={Home} options={{headerShown: false}} />
      </Group>
    </Navigator>
  );
};

export default Stack;
