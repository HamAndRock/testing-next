import { styled } from "~/src/theme";
import { includeBreakpoint } from "~/src/theme/mixins";

export const StyledWrapper = styled.div`
  height: 100%;
  border-left: 1px solid;
  border-color: ${({ theme }) => theme.colors.beige};
  padding: ${({ theme }) => theme.rem(16)};

  ${includeBreakpoint.laptop`
      border: none;
  `}

  ${includeBreakpoint.mobile`
      align-self: start;
  `}
`;

export const StyledFilterName = styled.h3`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: ${({ theme }) => theme.rem(26)};
  letter-spacing: 0;
  display: flex;
  align-items: center;

  & span {
    margin-right: ${({ theme }) => theme.rem(8)};
  }
`;

export const StyledDropDownContainer = styled.div`
  position: relative;
`;

export const StyledDropDownHeader = styled.div`
  margin-bottom: 0.8em;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.beige};
  border-radius: ${({ theme }) => theme.rem(8)};
  width: 100%;
  max-width: ${({ theme }) => theme.rem(176)};
  height: ${({ theme }) => theme.rem(48)};
  padding: 0 ${({ theme }) => theme.rem(12)};
  cursor: pointer;
  position: relative;

  &::after {
    position: absolute;
    top: 50%;
    right: ${({ theme }) => theme.rem(12)};
    transform: translateY(-50%);
    content: "";
    width: ${({ theme }) => theme.rem(24)};
    height: ${({ theme }) => theme.rem(24)};
    background: url("/images/arrow.svg");
  }
`;

export const StyledDropDownListContainer = styled.div``;

export const StyledDropDownList = styled.ul`
  border: 2px solid ${({ theme }) => theme.colors.beige};
  position: absolute;
  width: 100%;
  max-width: ${({ theme }) => theme.rem(176)};
`;

export const StyledListItem = styled.li`
  height: ${({ theme }) => theme.rem(48)};
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.rem(12)};
  cursor: pointer;
  z-index: 201;
  position: relative;
  background-color: white;

  &:hover {
    background-color: ${({ theme }) => theme.colors.beige};
  }
`;
