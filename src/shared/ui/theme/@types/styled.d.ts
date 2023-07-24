import 'styled-components/native';
import {primaryDarkTheme} from '../theme';

type Theme = typeof primaryDarkTheme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
