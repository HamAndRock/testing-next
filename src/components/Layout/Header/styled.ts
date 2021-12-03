import { styled } from "~/theme";

export const StyledWrapper = styled.header`
  height: ${({ theme }) => theme.rem(60)};
`;

export const StyledLayout = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
