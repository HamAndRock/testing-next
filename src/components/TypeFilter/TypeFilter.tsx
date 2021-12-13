import React, { useState } from "react";

import { useStore, filterData } from "~/src/store";

import {
  StyledWrapper,
  StyledTitle,
  StyledTypesBox,
  StyledTypeCard,
  StyledTypeName,
  StyledTypeDescr,
} from "./styled";

type TFilterTypes = {
  filterName: string;
  option: string;
  description: string;
};

const filterTypes: TFilterTypes[] = [
  {
    filterName: "Campervan",
    option: "Campervan",
    description: "Obytka s rozměry osobáku, se kterou dojedete všude.",
  },
  {
    filterName: "Intergrated",
    option: "Integrál",
    description: "Král mezi karavany. Luxus na kolech.",
  },
  {
    filterName: "BuiltIn",
    option: "Vestavba",
    description: "Celý byt geniálně poskládaný do dodávky.",
  },
  {
    filterName: "Alcove",
    option: "Přívěs",
    description: "Tažný karavan za vaše auto. Od kapkovitých až po rodinné.",
  },
];

const TypeFilter = () => {
  const [active, setActive] = useState<string>("");
  const {
    dispatch,
    state: { filters },
  } = useStore();

  const handleTypeFilter = (filterName: string): void => {
    if (filterName !== filters.vehicleType) {
      dispatch(filterData("vehicleType", filterName));
      setActive(filterName);
    } else {
      dispatch(filterData("vehicleType", ""));
      setActive("");
    }
  };

  return (
    <StyledWrapper>
      <StyledTitle>Typ karavanu</StyledTitle>
      <StyledTypesBox>
        {filterTypes.map(
          ({ filterName, option, description }): React.ReactElement => (
            <StyledTypeCard
              key={option}
              onClick={() => handleTypeFilter(filterName)}
              active={active === filterName}
            >
              <StyledTypeName>{option}</StyledTypeName>
              <StyledTypeDescr>{description}</StyledTypeDescr>
            </StyledTypeCard>
          )
        )}
      </StyledTypesBox>
    </StyledWrapper>
  );
};

export { TypeFilter };
