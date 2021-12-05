import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  flex-basis: 20%;
  height: 100%;
  border-left: 1px solid;
  border-color: ${({ theme }) => theme.colors.beige};
  padding: ${({ theme }) => theme.rem(16)};
`;

export const StyledFilterName = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: ${({ theme }) => theme.rem(26)};
  letter-spacing: 0;
  display: flex;
  align-items: center;

  & span {
    margin-right: ${({ theme }) => theme.rem(8)};
  }
`;

export const StyledDropDownContainer = styled.div``;

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

export const StyledDropDownListContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.rem(176)};
`;

export const StyledDropDownList = styled.ul`
  border: 2px solid ${({ theme }) => theme.colors.beige};
`;

export const StyledListItem = styled.div`
  height: ${({ theme }) => theme.rem(48)};
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.rem(12)};
  cursor: pointer;
  background-color: white;

  &:hover {
    background-color: ${({ theme }) => theme.colors.beige};
  }
`;
