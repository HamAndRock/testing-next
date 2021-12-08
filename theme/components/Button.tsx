import React from "react";

import { styled } from "../";

interface TProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLLinkElement> {}

const Button: React.FC<TProps> = ({ children, onClick }) => (
  <StyledButton onClick={onClick} type="button">
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  color: white;
  display: block;
  font-weight: bold;
  font-size: 16px;
  padding-left: ${({ theme }) => theme.rem(35)};
  padding-right: ${({ theme }) => theme.rem(35)};
  height: ${({ theme }) => theme.rem(48)};
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: ${({ theme }) => theme.rem(8)};
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in;
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.rem(100)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
  }
`;

export { Button };
