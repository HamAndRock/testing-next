import React from "react";
import { LoadMore, useStore } from "~/src/store";

import { styled } from "~/src/theme";

const LoadButton: React.FC = () => {
  const { state, dispatch } = useStore();
  const { currentPage, itemsPerPage, filteredItems } = state;

  const isShownButton = currentPage * itemsPerPage < filteredItems.length;

  const handleClick = () => {
    dispatch(LoadMore());
  };

  return (
    <>
      {isShownButton && (
        <StyledButton type="button" onClick={handleClick}>
          Načíst další
        </StyledButton>
      )}
    </>
  );
};

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

export { LoadButton };
