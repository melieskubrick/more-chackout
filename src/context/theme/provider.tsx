import React, { useCallback, useEffect, useState } from 'react';
import { ITheme, ThemeProvider as Provider } from 'styled-components';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from './context';

import { dark } from '../../themes/dark';
import { light } from '../../themes/light';

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(light);

  useEffect(() => {
    async function loadTheme() {
      const storaged = await AsyncStorage.getItem('@more:theme');
      if (storaged) {
        const parsedTheme = JSON.parse(storaged);
        setTheme(parsedTheme);
      }
    }

    loadTheme();
  }, []);

  const toggleTheme = useCallback(async () => {
    await AsyncStorage.setItem(
      '@more:theme',
      JSON.stringify(theme.title === 'light' ? dark : light),
    );

    setTheme(theme.title === 'light' ? dark : light);
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <Provider theme={theme}>{children}</Provider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
