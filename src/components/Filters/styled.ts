import { styled } from "~/theme";

export const StyledWrapper = styled.header`
  height: ${({ theme }) => theme.rem(170)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.beige};
`;

export const StyledFilters = styled.div`
  display: flex;
  height: 100%;
`;
