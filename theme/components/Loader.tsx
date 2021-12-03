import React from "react";

import { SvgLoaderIcon } from "~/icons";
import { keyframes, styled } from "~/theme";

const Loader: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledLayout>
        <SvgLoaderIcon />
      </StyledLayout>
    </StyledWrapper>
  );
};

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

const StyledWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 20;
`;

const StyledLayout = styled.div`
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-name: ${rotate};
  animation-timing-function: linear;
  height: ${({ theme }) => theme.rem(80)};
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: ${({ theme }) => theme.rem(150)};
  width: ${({ theme }) => theme.rem(80)};
`;

export { Loader };
