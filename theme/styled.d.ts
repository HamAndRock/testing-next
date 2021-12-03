import { ThemeInterface } from "./";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}
