import { css } from "styled-components";
import { breakpoints } from "../variables/breakpoints";

type cssParams = Parameters<typeof css>;
const keys = Object.keys(breakpoints) as Array<keyof typeof breakpoints>;

export const includeBreakpoint = keys.reduce((accumulator, label) => {
  accumulator[label] = (...args: cssParams) => css`
    @media (max-device-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;

  return accumulator;
}, {} as Record<keyof typeof breakpoints, Function>);
