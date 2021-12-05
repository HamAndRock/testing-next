import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  flex-basis: 55%;
  height: 100%;
  border-left: 1px solid;
  border-right: 1px solid;
  border-color: ${({ theme }) => theme.colors.beige};
  padding: ${({ theme }) => theme.rem(16)};
`;

export const StyledTitle = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: ${({ theme }) => theme.rem(26)};
  letter-spacing: 0;
`;

export const StyledTypesBox = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTypeCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.beige};
  border-radius: 8px;
  min-width: 156px;
  height: 88px;
  padding: 8px 12px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 16px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.green};
  }
`;

export const StyledTypeName = styled.div`
  margin-bottom: 5px;
`;

export const StyledTypeDescr = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 12px;
  letter-spacing: 0;
`;
