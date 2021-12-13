import { styled } from "~/src/theme";
import { includeBreakpoint } from "~/src/theme/mixins";

export const StyledWrapper = styled.div`
  padding: ${({ theme }) => theme.rem(30)};

  ${includeBreakpoint.mobile`
      padding: 20px 0;
  `}
`;

export const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${({ theme }) => theme.rem(392)});
  justify-content: space-between;
  grid-gap: ${({ theme }) => theme.rem(30)};

  ${includeBreakpoint.tablet`
      justify-content: center;
  `}
`;

export const StyledNotFound = styled.h2`
  margin: 0 auto;
  font-size: ${({ theme }) => theme.rem(25)};
  font-weight: bold;
`;
