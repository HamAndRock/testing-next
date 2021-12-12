import React from "react";
import SlickSlider, { CustomArrowProps, Settings } from "react-slick";
import Image from "next/image";

import { SvgAngleIcon } from "~/icons";

import { StyledWrapper, StyledArrowLeft, StyledArrowRight } from "./styled";

const ArrowLeft: React.FC<CustomArrowProps> = ({ className, onClick }) => (
  <StyledArrowLeft className={className} onClick={onClick} type="button">
    <SvgAngleIcon />
  </StyledArrowLeft>
);

const ArrowRight: React.FC<CustomArrowProps> = ({ className, onClick }) => (
  <StyledArrowRight className={className} onClick={onClick} type="button">
    <SvgAngleIcon />
  </StyledArrowRight>
);

interface TProps {
  images: string[];
}

const Slider: React.FC<TProps> = ({ images }) => {
  const settings: Settings = {
    arrows: true,
    infinite: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  return (
    <StyledWrapper>
      <SlickSlider {...settings}>
        {images &&
          images.map(
            (image: string, index: number): React.ReactElement => (
              <React.Fragment key={`slide-${index}`}>
                <Image
                  alt="Slide"
                  unoptimized
                  priority
                  layout="fill"
                  src={image}
                />
              </React.Fragment>
            )
          )}
      </SlickSlider>
    </StyledWrapper>
  );
};

export { Slider };
