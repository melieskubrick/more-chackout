import 'styled-components';
import {light} from '../themes/light';

declare module 'styled-components' {
  type ITheme = typeof light;
  export interface DefaultTheme extends ITheme {}
}
