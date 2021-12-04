import React from "react";

import { Container } from "~/theme/components";
import { ProductPriceRange } from "../ProductPriceRange";
import { ProductReservation } from "../ProductReservation";
import { ProductType } from "../ProductType";
import { StyledWrapper, StyledFilters } from "./styled";

const Filters: React.FC = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledFilters>
          <ProductPriceRange min={0} max={10000} />
          <ProductType />
          <ProductReservation />
        </StyledFilters>
      </Container>
    </StyledWrapper>
  );
};

export { Filters };
