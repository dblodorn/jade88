import React from 'react'
import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../styles/theme'
import { flexRowCenteredAll, mainPadding, absoluteTopFull, flexCenteredAll, opacityTransition, flexColumn } from './../../styles/mixins'
import { H1, H4, P, SmallP } from './../../styles/components'
import FitImage from '../utils/FitImage'
import { breakpoints, shared, colors, heights } from './../../styles/theme.json'

const Caption = (props) =>
  <CaptionWrapper>
    <H4>{props.caption.title}</H4>
    <SmallP>{props.caption.description}</SmallP>
  </CaptionWrapper>  

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
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 50;
  pointer-events: none;
  
`
