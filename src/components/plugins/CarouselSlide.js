import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { media } from './../../styles/mixins'
import { H1, H4, P, SmallP } from './../../styles/components'
import FitImage from '../utils/FitImage'
import { breakpoints, widths } from './../../styles/theme.json'

const CarouselSlide = (props) => {
  return (
    <InnerSlide className={`${props.slideData.slide_type}-slide`}>
      <SlideWrapper>
        <FitImage src={(props.window_width >= breakpoints.medium) ? props.slideData.image.large : props.slideData.image.medium} fit={props.slideData.image_style}/> :
      </SlideWrapper>
    </InnerSlide>
  )
}

export default connect(
  state => ({
    window_width: state.resize_state.window_width
  })
)(CarouselSlide)

// STYLES
const InnerSlide = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: ${widths.sidebar_desktop};
  ${media.desktopNav`
    width: 50%;
  `}
`

const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 50;
  pointer-events: none;
`
