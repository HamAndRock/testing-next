import { css } from "~/theme";

const slick = css`
  .slick-list,
  .slick-slider,
  .slick-track {
    height: 100%;
    position: relative;
    display: block;
  }

  .slick-loading .slick-slide,
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slider {
    box-shadow: 0 20px 50px -25px rgba(0, 0, 0, 1);
    box-sizing: border-box;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .slick-list:focus {
    outline: 0;
  }

  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-list,
  .slick-slider .slick-track {
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    top: 0;
    left: 0;
    transition: all 0.6s cubic-bezier(0.7, 0, 0.3, 1);
  }

  .slick-track:after,
  .slick-track:before {
    display: table;
    content: "";
  }

  .slick-track:after {
    clear: both;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
    position: relative;

    > div {
      height: 100%;
      position: relative;
    }

    img {
      display: block;
      height: 100%;
      object-fit: cover;
      width: 100%;
      transition: all 0.6s cubic-bezier(0.7, 0, 0.3, 1);
      transform: scale(1.2);
    }

    &.slick-active img {
      transform: scale(1);
    }
  }

  [dir="rtl"] .slick-slide {
    float: right;
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }

  .slick-arrow {
    position: absolute;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }
`;

export { slick };
