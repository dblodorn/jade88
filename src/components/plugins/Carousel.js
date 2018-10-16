import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Swiper from 'react-id-swiper/lib/custom'
import CarouselSlide from './CarouselSlide'
import { spacing } from './../../styles/theme.json'
import { buttonInit, absoluteTopFull, absoluteCentered, staggeredColor } from './../../styles/mixins'

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: true,
      autoplay: true,
      transitionTime: this.props.transition_time || 1500
    }
  }

  render() {
    const swiperParams = {
      autoplay: true,
      effect: 'fade',
      noSwiping: true,
      fadeEffect: {
        crossFade: true
      },
      speed: 3000
    }

    const HeroSlides = this.props.slides.map((slide, i) =>
      <HeroSlide key={i} data-slidetype={slide.slide_type} className={(this.props.navigation) && 'nav'}>
        <CarouselSlide slideData={slide} caption={this.props.captions}/>
      </HeroSlide>
    )
    return (
      <HeroSlider>
        <Swiper {...swiperParams} ref={node => { if (node) this.swiper = node.swiper }}>
          {HeroSlides}
        </Swiper>
      </HeroSlider>
    )
  }
}

export default Carousel

// STYLES
const HeroSlide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  &:nth-child(odd) {
    flex-direction: row;
  }
  ${staggeredColor};
  &.nav {
    padding: 0 5.25rem;
  }
`

const HeroSlider = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .swiper-container {
    height: 100%;
    width: 100%;
  }
  .swiper-wrapper {
    height: 100%;
  }
  .hero-player {
    ${absoluteTopFull};
    z-index: 100;
  }
`
