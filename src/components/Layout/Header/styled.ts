import { styled } from "~/theme";
import { includeBreakpoint } from "~/theme/mixins";

export const StyledWrapper = styled.header`
  height: ${({ theme }) => theme.rem(80)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.beige};
`;

export const StyledLayout = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => theme.rem(14)};

  ${includeBreakpoint.mobile`
    justify-content: center;
  `}
`;
