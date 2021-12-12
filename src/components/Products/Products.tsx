import React from "react";

import { useStore } from "~/store";
import { Container } from "~/theme/components";
import { StyledWrapper, StyledCardsContainer, StyledNotFound } from "./styled";
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
          {products.length ? (
            products.map(
              (product: TProduct): React.ReactElement => (
                <Card key={product.name + Math.random()} product={product} />
              )
            )
          ) : (
            <StyledNotFound>Products not found :(</StyledNotFound>
          )}
        </StyledCardsContainer>
      </Container>
    </StyledWrapper>
  );
};

export { Products };
