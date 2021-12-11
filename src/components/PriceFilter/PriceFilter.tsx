import React, { useCallback, useEffect, useRef, useState } from "react";

import { useStore, filterData } from "~/store";
import {
  StyledWrapper,
  StyledName,
  StyledContainer,
  StyledFirstInput,
  StyledSecondInput,
  StyledSlider,
  StyledSliderTrack,
  StyledSliderRange,
  StyledNumberInputs,
  StyledNumberInput,
  StyledNumberInputWrapper,
} from "./styled";

interface Props {
  min: number;
  max: number;
}

const PriceFilter: React.FC<Props> = ({ min, max }) => {
  const { dispatch } = useStore();
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
      const maxPercent = getPercent(+maxValRef.current.value);

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

  const handleRangeMinValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(+event.target.value, maxVal - 1);
    setMinVal(value);
    dispatch(filterData("priceFrom", value));
  };

  const handleRangeMaxValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(+event.target.value, minVal + 1);
    setMaxVal(value);
    dispatch(filterData("priceTo", value));
  };

  const handleNumberMinValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const clearValue = event.target.value.replace(/\D/g, "");
    const value = +clearValue > maxVal ? maxVal - 1 : +clearValue;
    setMinVal(value);
    dispatch(filterData("priceFrom", value));
  };

  const handleNumberMaxValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const clearValue = event.target.value.replace(/\D/g, "");
    const value =
      +clearValue > max ? max : +clearValue < minVal ? minVal + 1 : +clearValue;
    setMaxVal(value);
    dispatch(filterData("priceTo", value));
  };

  return (
    <StyledWrapper>
      <StyledName>Cena za den</StyledName>
      <StyledContainer>
        <StyledFirstInput
          type="range"
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          maxProp={minVal}
          minProp={max}
          onChange={handleRangeMinValue}
          className="thumb"
        />
        <StyledSecondInput
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={handleRangeMaxValue}
          className="thumb"
        />
        <StyledSlider>
          <StyledSliderTrack />
          <StyledSliderRange ref={range} />
        </StyledSlider>
      </StyledContainer>
      <StyledNumberInputs>
        <StyledNumberInputWrapper>
          <StyledNumberInput
            type="text"
            value={minVal.toLocaleString("ru-RU")}
            onChange={handleNumberMinValue}
          />
        </StyledNumberInputWrapper>
        <StyledNumberInputWrapper>
          <StyledNumberInput
            type="text"
            value={maxVal.toLocaleString("ru-RU")}
            onChange={handleNumberMaxValue}
          />
        </StyledNumberInputWrapper>
      </StyledNumberInputs>
    </StyledWrapper>
  );
};

export { PriceFilter };
