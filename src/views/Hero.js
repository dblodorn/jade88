import React from "react";
import { Carousel, LogoType } from "./../components";
import { connect } from "react-redux";
import { scroller } from "react-scroll";
import styled from "styled-components";
import {
  media,
  flexCenteredAll,
  absoluteCentered,
  slowBounce
} from "./../styles/mixins";
import { widths } from "./../styles/theme.json";
import { LozengeButton } from "./../styles/components";

const scrollToElement = () => {
  console.log("click");
  scroller.scrollTo("rollers", {
    duration: 750,
    smooth: true
  });
};

const Down = () => (
  <DownWrapper>
    <svg
      width="16"
      height="16"
      version="1.1"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
    >
      <g fill="#ffffff">
        <path
          d="M8.001,14c0.326,0,0.632-0.159,0.819-0.427l7-10c0.214-0.305,0.238-0.704,0.068-1.035 C15.715,2.207,15.374,2,15.001,2H0.999C0.626,2,0.285,2.207,0.112,2.538c-0.17,0.331-0.146,0.73,0.068,1.035l7,10 C7.367,13.841,7.673,14,7.999,14C8,14,8,14,8.001,14C8,14,8,14,8.001,14z"
          fill="#ffffff"
        />
      </g>
    </svg>
  </DownWrapper>
);

const Hero = props => (
  <CarouselWrapper>
    <LogoWrapper>
      <LogoType/>
    </LogoWrapper>
    <Cta className={props.scroll}>
      <LozengeButton onClick={scrollToElement}>
        <Down/>
        <span>Roll With Us</span>
        <Down/>
      </LozengeButton>
    </Cta>
    <Carousel
      slides={slides}
      navigation={false}
      pagination={false}
      captions={false}
      autoplay={true}
      transition_time={3000}
    />
  </CarouselWrapper>
);

export default connect(state => ({
  scroll: state.scroll_direction
}))(Hero);

// STYLES
const DownWrapper = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  margin: 0 1rem;
  svg {
    ${absoluteCentered};
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const CarouselWrapper = styled.section`
  display: block;
  width: 100%;
  height: 100vh;
  position: relative;
  max-height: 100vh;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 900;
  opacity: 1;
  padding: 4rem 1rem 14rem;
  ${media.desktopNav`
    align-items: center;
    width: 100%;
    opacity: .8;
    padding: 0;
  `};
`;

const Cta = styled.div`
  ${flexCenteredAll} width: 100%;
  height: 8rem;
  position: absolute;
  bottom: ${widths.sidebar_desktop};
  left: 0;
  z-index: 1000;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
  will-change: opacity;
  ${media.desktopNav`
    height: 10rem;
  `}
  &.at-top {
    ${slowBounce};
    height: 12.5rem;
    ${media.desktopNav`
      height: 10rem;
    `}
  }
`;

// SLIDES
const slides = [
  {
    image: {
      large: "/assets/imgs/jade-88-00001.jpg",
      medium: "/assets/imgs/jade-88-00001.jpg",
      small: "/assets/imgs/jade-88-00001.jpg",
      id: 94,
      description: false
    },
    slide_type: "image",
    image_style: "cover",
    theme: ["a"]
  },
  {
    image: {
      large: "/assets/imgs/jade-88-00002.jpg",
      medium: "/assets/imgs/jade-88-00002.jpg",
      small: "/assets/imgs/jade-88-00002.jpg",
      id: 94,
      description: false
    },
    slide_type: "image",
    image_style: "cover",
    theme: ["a"]
  },
  {
    image: {
      large: "/assets/imgs/jade-88-00003.jpg",
      medium: "/assets/imgs/jade-88-00003.jpg",
      small: "/assets/imgs/jade-88-00003.jpg",
      id: 94,
      description: false
    },
    slide_type: "image",
    image_style: "cover",
    theme: ["a"]
  },
  {
    image: {
      large: "/assets/imgs/jade-88-00004.jpg",
      medium: "/assets/imgs/jade-88-00004.jpg",
      small: "/assets/imgs/jade-88-00004.jpg",
      id: 94,
      description: false
    },
    slide_type: "image",
    image_style: "cover",
    theme: ["a"]
  },
  {
    image: {
      large: "/assets/imgs/jade-88-00005.jpg",
      medium: "/assets/imgs/jade-88-00005.jpg",
      small: "/assets/imgs/jade-88-00005.jpg",
      id: 94,
      description: false
    },
    slide_type: "image",
    image_style: "cover",
    theme: ["a"]
  },
  {
    image: {
      large: "/assets/imgs/jade-88-00006.jpg",
      medium: "/assets/imgs/jade-88-00006.jpg",
      small: "/assets/imgs/jade-88-00006.jpg",
      id: 94,
      description: false
    },
    slide_type: "image",
    image_style: "cover",
    theme: ["a"]
  },
  {
    image: {
      large: "/assets/imgs/jade-88-00007.jpg",
      medium: "/assets/imgs/jade-88-00007.jpg",
      small: "/assets/imgs/jade-88-00007.jpg",
      id: 94,
      description: false
    },
    slide_type: "image",
    image_style: "cover",
    theme: ["a"]
  },
  {
    image: {
      large: "/assets/imgs/jade-88-00008.jpg",
      medium: "/assets/imgs/jade-88-00008.jpg",
      small: "/assets/imgs/jade-88-00008.jpg",
      id: 94,
      description: false
    },
    slide_type: "image",
    image_style: "cover",
    theme: ["a"]
  },
  {
    image: {
      large: "/assets/imgs/jade-88-00009.jpg",
      medium: "/assets/imgs/jade-88-00009.jpg",
      small: "/assets/imgs/jade-88-00009.jpg",
      id: 94,
      description: false
    },
    slide_type: "image",
    image_style: "cover",
    theme: ["a"]
  },
  {
    image: {
      large: "/assets/imgs/jade-88-00010.jpg",
      medium: "/assets/imgs/jade-88-00010.jpg",
      small: "/assets/imgs/jade-88-00010.jpg",
      id: 94,
      description: false
    },
    slide_type: "image",
    image_style: "cover",
    theme: ["a"]
  }
];
