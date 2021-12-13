import React, { useMemo } from "react";

import { useStore } from "~/src/store";
import { Container } from "~/src/theme/components";
import { StyledWrapper, StyledCardsContainer, StyledNotFound } from "./styled";
import { TProduct } from "./types";
import { Card } from "~/src/components";

const Products: React.FC = () => {
  const {
    state: { filteredItems, currentPage, itemsPerPage },
  } = useStore();

  const products = useMemo(() => {
    return filteredItems.slice(0, currentPage * itemsPerPage);
  }, [currentPage, itemsPerPage, filteredItems]);

  return (
    <StyledWrapper>
      <Container>
        <StyledCardsContainer>
          {products.length !== 0 ? (
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
