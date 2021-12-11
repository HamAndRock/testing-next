import React, { useState } from "react";

import { useStore, filterData } from "~/store";

import {
  StyledWrapper,
  StyledTitle,
  StyledTypesBox,
  StyledTypeCard,
  StyledTypeName,
  StyledTypeDescr,
} from "./styled";

const filterTypes = [
  {
    filterName: "Campervan",
    option: "Campervan",
    descr: "Obytka s rozměry osobáku, se kterou dojedete všude.",
  },
  {
    filterName: "Intergrated",
    option: "Integrál",
    descr: "Král mezi karavany. Luxus na kolech.",
  },
  {
    filterName: "BuiltIn",
    option: "Vestavba",
    descr: "Celý byt geniálně poskládaný do dodávky.",
  },
  {
    filterName: "Alcove",
    option: "Přívěs",
    descr: "Tažný karavan za vaše auto. Od kapkovitých až po rodinné.",
  },
];

const TypeFilter = () => {
  const [active, setActive] = useState("");
  const { dispatch } = useStore();

  const handleTypeFilter = (filterName: string) => {
    dispatch(filterData("vehicleType", filterName));
    setActive(filterName);
  };

  return (
    <StyledWrapper>
      <StyledTitle>Typ karavanu</StyledTitle>
      <StyledTypesBox>
        {filterTypes.map(({ filterName, option, descr }) => (
          <StyledTypeCard
            key={option}
            onClick={() => handleTypeFilter(filterName)}
            active={active === option}
          >
            <StyledTypeName>{option}</StyledTypeName>
            <StyledTypeDescr>{descr}</StyledTypeDescr>
          </StyledTypeCard>
        ))}
      </StyledTypesBox>
    </StyledWrapper>
  );
};

export { TypeFilter };
