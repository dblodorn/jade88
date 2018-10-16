import React from 'react'
import { Carousel, LogoType } from './../components'
import styled from 'styled-components'
import { flexCenteredAll } from './../styles/mixins'

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

export default (props) =>
  <CarouselWrapper>
    <LogoWrapper>
      <LogoType/>
    </LogoWrapper>
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
  width: 100vw;
  height: 100vh;
  position: relative;
  max-height: 100vh;
  pointer-events: none;
`

const LogoWrapper = styled.div`
  ${flexCenteredAll};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 900;
  opacity: .8;
`
