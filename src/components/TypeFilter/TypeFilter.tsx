import React, { useState } from "react";
import { filterByType, useStore } from "~/store";

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
  const [active, setActive] = useState("");
  const { state, dispatch } = useStore();

  const handleTypeFilter = (filterName: string) => {
    dispatch(filterByType(filterName));
    setActive(filterName);
  };

  return (
    <StyledWrapper>
      <StyledTitle>Typ karavanu</StyledTitle>
      <StyledTypesBox>
        {filterTypes.map(({ filterName, descr }) => (
          <StyledTypeCard
            key={filterName}
            onClick={() => handleTypeFilter(filterName)}
            active={active === filterName}
          >
            <StyledTypeName>{filterName}</StyledTypeName>
            <StyledTypeDescr>{descr}</StyledTypeDescr>
          </StyledTypeCard>
        ))}
      </StyledTypesBox>
    </StyledWrapper>
  );
};

export { TypeFilter };
