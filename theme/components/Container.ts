import { styled } from "../";

export const Container = styled.div`
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ theme }) => theme.rem(1280)};
  padding-left: ${({ theme }) => theme.rem(15)};
  padding-right: ${({ theme }) => theme.rem(15)};
`;
