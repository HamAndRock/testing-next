import { styled } from "~/theme";

export const StyledWrapper = styled.div``;

export const StyledLink = styled.a`
  width: ${({ theme }) => theme.rem(180)};
`;

export const StyledImage = styled.div`
  width: ${({ theme }) => theme.rem(180)};
  height: ${({ theme }) => theme.rem(35)};
  position: relative;
`;
