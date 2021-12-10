import React, { useState } from "react";
import { SvgActionIcon } from "~/icons";
import { useStore } from "~/store";
import { filterData } from "~/store/actions";

import {
  StyledWrapper,
  StyledFilterName,
  StyledDropDownContainer,
  StyledDropDownList,
  StyledDropDownHeader,
  StyledListItem,
} from "./styled";

type TOption = {
  title: string;
  val: boolean;
};

const options: TOption[] = [
  { title: "Ano", val: true },
  { title: "Ne", val: false },
];

const ReservationFilter = () => {
  const { dispatch } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(
    options[0].title
  );

  const handleOpen = (): void => setIsOpen(!isOpen);

  const handleOption = (option: TOption) => (): void => {
    setSelectedOption(option.title);
    setIsOpen(false);
    dispatch(filterData("instantBookable", option.val));
  };

  return (
    <StyledWrapper>
      <StyledFilterName>
        <span>Okamžitá rezervace</span>
        <SvgActionIcon />
      </StyledFilterName>
      <StyledDropDownContainer>
        <StyledDropDownHeader onClick={handleOpen}>
          {selectedOption || "Ano"}
        </StyledDropDownHeader>
        {isOpen && (
          <StyledDropDownList>
            {options.map((option: TOption) => (
              <StyledListItem
                onClick={handleOption(option)}
                key={Math.random()}
              >
                {option.title}
              </StyledListItem>
            ))}
          </StyledDropDownList>
        )}
      </StyledDropDownContainer>
    </StyledWrapper>
  );
};

export { ReservationFilter };
