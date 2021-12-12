import React from "react";

import {
  SvgSeatIcon,
  SvgBedIcon,
  SvgShowerIcon,
  SvgToiletIcon,
  SvgActionIcon,
} from "~/icons";
import { TProduct } from "../Products/types";
import { Slider } from "../Slider";
import {
  StyledCard,
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

interface TProps {
  product: TProduct;
}

const Card: React.FC<TProps> = ({ product }) => (
  <StyledCard>
    <Slider images={product.pictures} />
    <StyledCardInfo>
      <StyledVehicleType>{product.vehicleType}</StyledVehicleType>
      <StyledName>{product.name}</StyledName>
      <StyledLocation>{product.location}</StyledLocation>
      <StyledFeatures>
        <StyledFeature>
          <SvgSeatIcon />
          <StyledFeatureCount>{product.passengersCapacity}</StyledFeatureCount>
        </StyledFeature>
        <StyledFeature>
          <SvgBedIcon />
          <StyledFeatureCount>{product.sleepCapacity}</StyledFeatureCount>
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
          {product.price.toLocaleString("ru-RU")} Kč/den
          {product.instantBookable && (
            <span>
              <SvgActionIcon />
            </span>
          )}
        </StyledPrice>
      </StyledPriceSection>
    </StyledCardInfo>
  </StyledCard>
);

export { Card };
