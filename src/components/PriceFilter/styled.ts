import { css, styled } from "~/src/theme";
import { includeBreakpoint } from "~/src/theme/mixins";

const styles = css`
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  margin-top: 4px;
  pointer-events: all;
  cursor: pointer;
  position: relative;
  background-color: ${({ theme }) => theme.colors.green};
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: initial;
  height: 100%;
  border-right: 1px solid;
  padding: ${({ theme }) => theme.rem(16)};
  border-color: ${({ theme }) => theme.colors.beige};

  input[type="range"] {
    -webkit-appearance: none;
    background: transparent;
  }

  input[type="range"]::-webkit-slider-thumb {
    ${styles};
  }

  input[type="range"]::-moz-range-thumb {
    ${styles};
  }

  input[type="range"]::-ms-thumb {
    ${styles};
  }

  ${includeBreakpoint.laptop`
      border: none;
  `}

  ${includeBreakpoint.mobile`
      align-self: start;
  `}
`;

export const StyledName = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: ${({ theme }) => theme.rem(26)};
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.rem(26)};
`;

export const StyledFirstInput = styled.input<{
  maxProp: number;
  minProp: number;
}>`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 100%;
  max-width: ${({ theme }) => theme.rem(258)};
  outline: none;
  z-index: 3;
  ${({ maxProp, minProp }) => minProp > maxProp - 100 && `z-index: 5`}
`;

export const StyledSecondInput = styled.input`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 100%;
  max-width: ${({ theme }) => theme.rem(258)};
  outline: none;
  z-index: 4;
`;

export const StyledSlider = styled.div`
  position: relative;
  width: ${({ theme }) => theme.rem(258)};
`;

export const StyledSliderTrack = styled.div`
  position: absolute;
  border-radius: ${({ theme }) => theme.rem(3)};
  height: ${({ theme }) => theme.rem(4)};
  background-color: ${({ theme }) => theme.colors.beige};
  width: 100%;
  z-index: 1;
`;

export const StyledSliderRange = styled.div`
  position: absolute;
  border-radius: ${({ theme }) => theme.rem(3)};
  height: ${({ theme }) => theme.rem(4)};
  background-color: ${({ theme }) => theme.colors.green};
  z-index: 2;
`;

export const StyledNumberInputs = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledNumberInputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ theme }) => theme.rem(116)};
  height: ${({ theme }) => theme.rem(48)};

  &::after {
    position: absolute;
    content: "Kč";
    top: 48%;
    transform: translateY(-50%);
    right: ${({ theme }) => theme.rem(12)};
    font-size: ${({ theme }) => theme.rem(16)};
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const StyledNumberInput = styled.input`
  outline: none;
  width: 100%;
  height: 100%;
  padding: 0 ${({ theme }) => theme.rem(12)};
  border: 1px solid ${({ theme }) => theme.colors.beige};
  border-radius: ${({ theme }) => theme.rem(8)};
  font-size: ${({ theme }) => theme.rem(16)};
`;
