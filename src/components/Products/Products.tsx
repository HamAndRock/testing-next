import React from "react";

import { useStore } from "~/store";
import { Container } from "~/theme/components";
import { StyledWrapper, StyledCardsContainer } from "./styled";
import { TProduct } from "./types";
import { Card } from "~/src/components";

const Products: React.FC = () => {
  const {
    state: { items },
  } = useStore();

  // if (!items) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <StyledWrapper>
      <Container>
        <StyledCardsContainer>
          {items.map((product: TProduct) => (
            <Card key={product.name + Math.random()} product={product} />
          ))}
        </StyledCardsContainer>
      </Container>
    </StyledWrapper>
  );
};

export { Products };
