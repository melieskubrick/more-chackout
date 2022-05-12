import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Stack from './stack.routes';
import { ThemeProvider } from 'styled-components/native';

import { theme } from '#/theme';
import { Provider } from 'react-redux';
import store from '#/store';

if (__DEV__) {
  import('../../reactotron');
}

function Routes() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default Routes;
