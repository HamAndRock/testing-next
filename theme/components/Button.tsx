import React from "react";

import { css, styled } from "../";

interface TProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLLinkElement> {}

const Button: React.FC<TProps> = ({ children, onClick }) => (
  <StyledButton onClick={onClick} type="button">
    {children}
  </StyledButton>
);

const styles = css`
  color: white;
  display: inline-block;
  font: ${({ theme }) => `${theme.rem(14)} ${theme.fonts.fontBold}`};
  height: ${({ theme }) => theme.rem(50)};
  min-width: ${({ theme }) => theme.rem(150)};
  padding-left: ${({ theme }) => theme.rem(35)};
  padding-right: ${({ theme }) => theme.rem(35)};
  text-transform: uppercase;
  transition: background-color 0.2s ease-in;
`;

const StyledButton = styled.button<{ inverted?: boolean }>`
  ${styles};
  background-color: ${({ inverted, theme }) =>
    inverted ? theme.colors.black : theme.colors.orange};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ inverted, theme }) =>
      inverted ? theme.colors.orange : theme.colors.black};
  }
`;

export { Button };
