import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  flex-basis: 50%;
  height: 100%;
  border-left: 1px solid;
  border-right: 1px solid;
  border-color: ${({ theme }) => theme.colors.beige};
`;
