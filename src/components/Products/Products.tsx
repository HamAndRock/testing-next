import React from "react";

import { useStore } from "~/store";
import { Container } from "~/theme/components";
import { StyledWrapper, StyledCardsContainer } from "./styled";
import { TProduct } from "./types";
import { Card } from "~/src/components";

const Products: React.FC = () => {
  const {
    state: { filteredItems, currentPage, itemsPerPage },
  } = useStore();

  const products = filteredItems.slice(0, currentPage * itemsPerPage);

  return (
    <StyledWrapper>
      <Container>
        <StyledCardsContainer>
          {products.length &&
            products.map((product: TProduct) => (
              <Card key={product.name + Math.random()} product={product} />
            ))}
        </StyledCardsContainer>
      </Container>
    </StyledWrapper>
  );
};

export { Products };
