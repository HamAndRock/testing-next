import { styled } from "~/theme";
import { includeBreakpoint } from "~/theme/mixins";

export const StyledWrapper = styled.div`
  height: 100%;
  min-height: ${({ theme }) => theme.rem(170)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.beige};
`;

export const StyledFilters = styled.div`
  display: flex;
  height: 100%;

  ${includeBreakpoint.mobile`
    flex-direction: column;
    align-items: center;
  `}
`;
