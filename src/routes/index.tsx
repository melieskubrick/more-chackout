import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Stack from './stack.routes';
import { ThemeProvider } from 'styled-components/native';

import { theme } from '#/theme';

if (__DEV__) {
  import('../../reactotron');
}

function Routes() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default Routes;
