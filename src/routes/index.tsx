import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Stack from './stack.routes';
import AppProvider from '../context';

if (__DEV__) {
  import('../../reactotron');
}

function Routes() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </AppProvider>
  );
}

export default Routes;
