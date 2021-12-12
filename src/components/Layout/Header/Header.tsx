import React from "react";

import { Logo } from "./Logo";
import { Container } from "~/theme/components";
import { StyledWrapper, StyledLayout } from "./styled";

const Header: React.FC = () => (
  <StyledWrapper>
    <Container>
      <StyledLayout>
        <Logo />
      </StyledLayout>
    </Container>
  </StyledWrapper>
);

export { Header };
