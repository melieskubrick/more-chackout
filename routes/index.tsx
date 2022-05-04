import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import Stack from './stack.routes';

if (__DEV__) {
  import('../reactotron');
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default Routes;
