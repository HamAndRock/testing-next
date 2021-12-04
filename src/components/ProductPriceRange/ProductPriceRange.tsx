import { setMaxListeners } from "process";
import React, { useCallback, useEffect, useRef, useState } from "react";

import {
  StyledWrapper,
  Name,
  Container,
  FirstInput,
  SecondInput,
  Slider,
  SliderTrack,
  SliderRange,
  NumberInputs,
  NumberInput,
  NumberInputWrapper,
} from "./styled";

interface MultiRangeSliderProps {
  min: number;
  max: number;
}

const ProductPriceRange: React.FC<MultiRangeSliderProps> = ({ min, max }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  return (
    <StyledWrapper>
      <Name>Cena za den</Name>
      <Container>
        <FirstInput
          type="range"
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          myPropMax={minVal}
          myPropMin={max}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const value = Math.min(+event.target.value, maxVal - 1);
            setMinVal(value);
          }}
          className="thumb"
        />
        <SecondInput
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const value = Math.max(+event.target.value, minVal + 1);
            setMaxVal(value);
          }}
          className="thumb"
        />
        <Slider>
          <SliderTrack />
          <SliderRange ref={range} />
        </Slider>
      </Container>
      <NumberInputs>
        <NumberInputWrapper>
          <NumberInput
            type="text"
            value={minVal.toLocaleString()}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const clearValue = event.target.value.replace(/\D/g, "");
              const value = +clearValue > max ? max : +clearValue;
              setMinVal(value);
            }}
          />
        </NumberInputWrapper>
        <NumberInputWrapper>
          <NumberInput
            type="text"
            value={maxVal.toLocaleString()}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const clearValue = event.target.value.replace(/\D/g, "");
              const value = +clearValue > max ? max : +clearValue;
              setMaxVal(value);
            }}
          />
        </NumberInputWrapper>
      </NumberInputs>
    </StyledWrapper>
  );
};

export { ProductPriceRange };
