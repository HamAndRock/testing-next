import { styled } from "~/theme";
import { includeBreakpoint } from "~/theme/mixins";

export const StyledWrapper = styled.div`
  padding: ${({ theme }) => theme.rem(30)};

  ${includeBreakpoint.mobile`
      padding: 20px 0;
  `}
`;

export const StyledCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  ${includeBreakpoint.tablet`
      justify-content: center;
  `}
`;
