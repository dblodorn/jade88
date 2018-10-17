import React from 'react'
import { Carousel, LogoType } from './../components'
import { scroller } from 'react-scroll'
import styled from 'styled-components'
import { media, flexCenteredAll } from './../styles/mixins'
import { widths } from './../styles/theme.json'
import { LozengeButton } from './../styles/components'

const scrollToElement = () => {
  console.log('click')
  scroller.scrollTo('rollers', {
    duration: 750,
    smooth: true
  })
}

export default () =>
  <CarouselWrapper>
    <LogoWrapper>
      <LogoType/>
    </LogoWrapper>
    <Cta>
      <LozengeButton onClick={scrollToElement}>
        <span>Roll With Us</span>
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

// STYLES
const CarouselWrapper = styled.section`
  display: block;
  width: 100%;
  height: 100vh;
  position: relative;
  max-height: 100vh;
`

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
  padding: 4rem 1rem 12rem;
  ${media.desktopNav`
    align-items: center;
    width: 100%;
    opacity: .8;
    padding: 0;
  `}
`

const Cta = styled.div`
  ${flexCenteredAll}
  width: 100%;
  height: 8rem;
  position: absolute;
  bottom: ${widths.sidebar_desktop};
  left: 0;
  z-index: 1000;
`

// SLIDES
const slides = [
  {
    "image": {
        "large": "/assets/imgs/jade-88-rollerz_00001.jpg",
        "medium": "/assets/imgs/jade-88-rollerz_00001.jpg",
        "small": "/assets/imgs/jade-88-rollerz_00001.jpg",
        "id": 94,
        "description": false
    },
    "slide_type": "image",
    "image_style": "cover",
    "theme": [
        "a"
    ]
  },{
    "image": {
        "large": "/assets/imgs/jade-88-rollerz_00002.jpg",
        "medium": "/assets/imgs/jade-88-rollerz_00002.jpg",
        "small": "/assets/imgs/jade-88-rollerz_00002.jpg",
        "id": 94,
        "description": false
    },
    "slide_type": "image",
    "image_style": "cover",
    "theme": [
        "a"
    ]
  },{
    "image": {
        "large": "/assets/imgs/jade-88-rollerz_00003.jpg",
        "medium": "/assets/imgs/jade-88-rollerz_00003.jpg",
        "small": "/assets/imgs/jade-88-rollerz_00003.jpg",
        "id": 94,
        "description": false
    },
    "slide_type": "image",
    "image_style": "cover",
    "theme": [
        "a"
    ]
  },{
    "image": {
        "large": "/assets/imgs/jade-88-rollerz_00004.jpg",
        "medium": "/assets/imgs/jade-88-rollerz_00004.jpg",
        "small": "/assets/imgs/jade-88-rollerz_00004.jpg",
        "id": 94,
        "description": false
    },
    "slide_type": "image",
    "image_style": "cover",
    "theme": [
        "a"
    ]
  },{
    "image": {
        "large": "/assets/imgs/jade-88-rollerz_00005.jpg",
        "medium": "/assets/imgs/jade-88-rollerz_00005.jpg",
        "small": "/assets/imgs/jade-88-rollerz_00005.jpg",
        "id": 94,
        "description": false
    },
    "slide_type": "image",
    "image_style": "cover",
    "theme": [
        "a"
    ]
  },
]