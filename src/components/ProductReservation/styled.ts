import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  flex-basis: 20%;
  height: 100%;
  border-left: 1px solid;
  border-color: ${({ theme }) => theme.colors.beige};
`;
