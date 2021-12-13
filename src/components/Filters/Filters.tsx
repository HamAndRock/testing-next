import React from "react";

import { Container } from "~/src/theme/components";
import { PriceFilter } from "../PriceFilter";
import { ReservationFilter } from "../ReservationFilter";
import { TypeFilter } from "../TypeFilter";
import { StyledWrapper, StyledFilters } from "./styled";

const Filters: React.FC = () => (
  <StyledWrapper>
    <Container>
      <StyledFilters>
        <PriceFilter min={0} max={10000} />
        <TypeFilter />
        <ReservationFilter />
      </StyledFilters>
    </Container>
  </StyledWrapper>
);

export { Filters };
