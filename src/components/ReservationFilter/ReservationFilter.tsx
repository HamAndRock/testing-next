import React, { useState } from "react";
import { SvgActionIcon } from "~/icons";

import {
  StyledWrapper,
  StyledFilterName,
  StyledDropDownContainer,
  StyledDropDownList,
  StyledDropDownHeader,
  StyledListItem,
} from "./styled";

const options = ["Ano", "Ne"];

const ReservationFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <StyledWrapper>
      <StyledFilterName>
        <span>Okamžitá rezervace</span>
        <SvgActionIcon />
      </StyledFilterName>
      <StyledDropDownContainer>
        <StyledDropDownHeader onClick={toggling}>
          {selectedOption || "Ano"}
        </StyledDropDownHeader>
        {isOpen && (
          <StyledDropDownList>
            {options.map((option) => (
              <StyledListItem
                onClick={onOptionClicked(option)}
                key={Math.random()}
              >
                {option}
              </StyledListItem>
            ))}
          </StyledDropDownList>
        )}
      </StyledDropDownContainer>
    </StyledWrapper>
  );
};

export { ReservationFilter };
