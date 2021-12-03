import React from "react";
import Link from "next/link";

import { StyledWrapper, StyledLink, StyledImage } from "./styled";

interface TProps {}

const Logo: React.FC<TProps> = () => (
  <StyledWrapper>
    <Link href="/" passHref>
      <StyledLink>
        <StyledImage alt="Logo" src="/images/logo.png" />
      </StyledLink>
    </Link>
  </StyledWrapper>
);

export { Logo };
