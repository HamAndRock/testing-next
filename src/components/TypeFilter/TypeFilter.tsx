import React from "react";

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
    descr: "Obytka s rozměry osobáku, se kterou dojedete všude.",
  },
  {
    filterName: "Integrál",
    descr: "Král mezi karavany. Luxus na kolech.",
  },
  {
    filterName: "Vestavba",
    descr: "Celý byt geniálně poskládaný do dodávky.",
  },
  {
    filterName: "Přívěs",
    descr: "Tažný karavan za vaše auto. Od kapkovitých až po rodinné.",
  },
];

const TypeFilter = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Typ karavanu</StyledTitle>
      <StyledTypesBox>
        {filterTypes.map(({ filterName, descr }) => (
          <StyledTypeCard key={filterName}>
            <StyledTypeName>{filterName}</StyledTypeName>
            <StyledTypeDescr>{descr}</StyledTypeDescr>
          </StyledTypeCard>
        ))}
      </StyledTypesBox>
    </StyledWrapper>
  );
};

export { TypeFilter };
