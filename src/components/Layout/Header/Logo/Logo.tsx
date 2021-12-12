import React from "react";
import Link from "next/link";
import Image from "next/image";

import { StyledWrapper, StyledLink, StyledImage } from "./styled";

const Logo: React.FC = () => (
  <StyledWrapper>
    <Link href="/" passHref>
      <StyledLink>
        <StyledImage>
          <Image
            alt="Logo"
            layout="fill"
            objectFit="contain"
            priority
            src="/images/logo.png"
          />
        </StyledImage>
      </StyledLink>
    </Link>
  </StyledWrapper>
);

export { Logo };
