import { css, styled } from "~/theme";
import { includeBreakpoint } from "~/theme/mixins";

const styles = css`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -${({ theme }) => theme.rem(12)};
  width: 100%;
  content: "";
  height: 1px;
  background-color: ${({ theme }) => theme.colors.beige};
`;

export const StyledCard = styled.div`
  height: ${({ theme }) => theme.rem(380)};
  border: 1px solid ${({ theme }) => theme.colors.beige};
  border-radius: ${({ theme }) => theme.rem(8)};
  width: 100%;
  max-width: ${({ theme }) => theme.rem(392)};
  margin-bottom: ${({ theme }) => theme.rem(32)};
  transition: box-shadow 0.2s ease-in;

  &:hover {
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);
  }

  ${includeBreakpoint.mobile`
      box-shadow: none;
  `}
`;

export const StyledImage = styled.img`
  height: ${({ theme }) => theme.rem(190)};
  width: 100%;
  object-fit: cover;
  border-top-left-radius: ${({ theme }) => theme.rem(8)};
  border-top-right-radius: ${({ theme }) => theme.rem(8)};
`;

export const StyledCardInfo = styled.div`
  padding: ${({ theme }) => theme.rem(16)};
`;

export const StyledName = styled.h2`
  font-size: ${({ theme }) => theme.rem(24)};
  font-weight: bold;
  letter-spacing: 0;
  position: relative;
  margin-bottom: ${({ theme }) => theme.rem(15)};

  &::after {
    ${styles}
    bottom: -${({ theme }) => theme.rem(8)};

    ${includeBreakpoint.mobile`
       bottom: -${({ theme }) => theme.rem(6)};
  `}
  }
`;

export const StyledVehicleType = styled.p`
  font-size: ${({ theme }) => theme.rem(12)};
  font-weight: bold;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.orange};
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.rem(10)};
`;

export const StyledLocation = styled.p`
  font-size: ${({ theme }) => theme.rem(14)};
  letter-spacing: 0px;
  margin-bottom: ${({ theme }) => theme.rem(10)};
`;

export const StyledFeatures = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: ${({ theme }) => theme.rem(24)};

  &::after {
    ${styles}
  }
`;

export const StyledFeature = styled.div`
  display: flex;
  margin-right: ${({ theme }) => theme.rem(10)};
`;

export const StyledFeatureCount = styled.p`
  margin-left: ${({ theme }) => theme.rem(4)};
`;

export const StyledPriceSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const StyledPriceTitle = styled.p`
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const StyledPrice = styled.div`
  font-weight: bold;
  letter-spacing: 0px;

  span {
    margin-left: ${({ theme }) => theme.rem(10)};
    line-height: ${({ theme }) => theme.rem(16)};
  }
`;
