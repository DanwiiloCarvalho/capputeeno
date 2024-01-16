import 'styled-components';
import { defaultTheme } from '../app/globalStyle';

export type ITheme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}