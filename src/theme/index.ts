import styled, {
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider,
} from "styled-components";

import { breakpoints, TBreakpoints } from "./variables/breakpoints";
import { colors, TColors } from "./variables/colors";
import { fonts, TFonts } from "./variables/fonts";

export interface ThemeInterface {
  breakpoints: TBreakpoints;
  colors: TColors;
  fonts: TFonts;
  rem: (px: number) => string;
}

const theme: ThemeInterface = {
  breakpoints,
  colors,
  fonts,
  rem: (px: number) => {
    const baseFontSize = fonts.initialFontSize;

    return `${px / baseFontSize}rem`;
  },
};

export { createGlobalStyle, css, keyframes, styled, theme, ThemeProvider };
