import { styled } from "~/src/theme";
import { includeBreakpoint } from "~/src/theme/mixins";

export const StyledWrapper = styled.section`
  height: ${({ theme }) => theme.rem(190)};
  position: relative;
`;

const StyledArrow = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.orange};
  cursor: pointer;
  height: ${({ theme }) => theme.rem(100)};
  padding: 0;
  top: 50%;
  width: ${({ theme }) => theme.rem(40)};
  z-index: 200;

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledArrowLeft = styled(StyledArrow)`
  left: ${({ theme }) => theme.rem(70)};
  transform: translateY(-50%) rotate(180deg);

  ${includeBreakpoint.tablet`
    left: ${({ theme }) => theme.rem(30)};
  `}

  ${includeBreakpoint.mobile`
    left: ${({ theme }) => theme.rem(15)};
  `}
`;

export const StyledArrowRight = styled(StyledArrow)`
  right: ${({ theme }) => theme.rem(70)};
  transform: translateY(-50%);

  ${includeBreakpoint.tablet`
    right: ${({ theme }) => theme.rem(30)};
  `}

  ${includeBreakpoint.mobile`
    right: ${({ theme }) => theme.rem(15)};
  `}
`;
