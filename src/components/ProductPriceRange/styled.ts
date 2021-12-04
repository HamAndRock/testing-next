import { styled } from "~/theme";

interface Props {
  myPropMax: number;
  myPropMin: number;
}

export const StyledWrapper = styled.div`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: initial;
  height: 100%;
  border-right: 1px solid;
  padding: ${({ theme }) => theme.rem(16)};
  border-color: ${({ theme }) => theme.colors.beige};
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: ${({ theme }) => theme.rem(26)};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.rem(26)};

  .thumb {
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      border: none;
      cursor: pointer;
      margin-top: ${({ theme }) => theme.rem(4)};
      pointer-events: all;
      position: relative;
    }

    &::-moz-range-thumb {
      border: none;
      cursor: pointer;
      margin-top: ${({ theme }) => theme.rem(4)};
      pointer-events: all;
      position: relative;
    }
  }
`;

export const FirstInput = styled.input<Props>`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: ${({ theme }) => theme.rem(328)};
  outline: none;
  z-index: 3;
  ${({ myPropMax, myPropMin }) => myPropMin > myPropMax - 100 && `z-index: 5`}
`;

export const SecondInput = styled.input`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: ${({ theme }) => theme.rem(328)};
  outline: none;
  z-index: 4;
`;

export const Slider = styled.div`
  position: relative;
  width: ${({ theme }) => theme.rem(328)};
`;

export const SliderTrack = styled.div`
  position: absolute;
  border-radius: ${({ theme }) => theme.rem(3)};
  height: ${({ theme }) => theme.rem(4)};
  background-color: ${({ theme }) => theme.colors.beige};
  width: 100%;
  z-index: 1;
`;

export const SliderRange = styled.div`
  position: absolute;
  border-radius: ${({ theme }) => theme.rem(3)};
  height: ${({ theme }) => theme.rem(4)};
  background-color: ${({ theme }) => theme.colors.green};
  z-index: 2;
`;

export const NumberInputs = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NumberInputWrapper = styled.div`
  position: relative;
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

export const NumberInput = styled.input`
  outline: none;
  width: 100%;
  height: 100%;
  padding: 0 ${({ theme }) => theme.rem(12)};
  border: 1px solid ${({ theme }) => theme.colors.beige};
  border-radius: ${({ theme }) => theme.rem(8)};
  font-size: ${({ theme }) => theme.rem(16)};
`;
