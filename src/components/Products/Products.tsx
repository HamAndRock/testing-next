import React from "react";
import {
  SvgActionIcon,
  SvgBedIcon,
  SvgSeatIcon,
  SvgShowerIcon,
  SvgToiletIcon,
} from "~/icons";
import { Container } from "~/theme/components";
import {
  StyledWrapper,
  StyledCardsContainer,
  StyledCard,
  StyledImage,
  StyledName,
  StyledVehicleType,
  StyledLocation,
  StyledFeatures,
  StyledFeature,
  StyledFeatureCount,
  StyledPriceSection,
  StyledPriceTitle,
  StyledPrice,
  StyledCardInfo,
} from "./styled";
import { TProduct } from "./types";

interface TProps {
  products: TProduct[];
}

const Products: React.FC<TProps> = ({ products }) => {
  return (
    <StyledWrapper>
      <Container>
        <StyledCardsContainer>
          {products.map((product: TProduct) => (
            <StyledCard key={Math.random()}>
              <StyledImage src={product.pictures[0]} />
              <StyledCardInfo>
                <StyledVehicleType>{product.vehicleType}</StyledVehicleType>
                <StyledName>{product.name}</StyledName>
                <StyledLocation>{product.location}</StyledLocation>
                <StyledFeatures>
                  <StyledFeature>
                    <SvgSeatIcon />
                    <StyledFeatureCount>
                      {product.passengersCapacity}
                    </StyledFeatureCount>
                  </StyledFeature>
                  <StyledFeature>
                    <SvgBedIcon />
                    <StyledFeatureCount>
                      {product.sleepCapacity}
                    </StyledFeatureCount>
                  </StyledFeature>
                  <StyledFeature>
                    <SvgToiletIcon />
                    <StyledFeatureCount>{product.toilet}</StyledFeatureCount>
                  </StyledFeature>
                  <StyledFeature>
                    <SvgShowerIcon />
                    <StyledFeatureCount>{product.shower}</StyledFeatureCount>
                  </StyledFeature>
                </StyledFeatures>
                <StyledPriceSection>
                  <StyledPriceTitle>Cena od</StyledPriceTitle>
                  <StyledPrice>
                    {product.price.toLocaleString()} Kč/den
                    {product.instantBookable && (
                      <span>
                        <SvgActionIcon />
                      </span>
                    )}
                  </StyledPrice>
                </StyledPriceSection>
              </StyledCardInfo>
            </StyledCard>
          ))}
        </StyledCardsContainer>
      </Container>
    </StyledWrapper>
  );
};

export { Products };
