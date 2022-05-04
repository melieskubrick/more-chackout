import { createContext } from 'react';

import { light } from '../../themes/light';

export interface IThemeContextData {
  theme: typeof light;
  toggleTheme(): void;
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

export { ThemeContext };
