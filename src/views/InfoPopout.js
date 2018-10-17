import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { media, shadow, fancyScroll, transTransform } from './../styles/mixins'
import { StyledMarkup } from './../styles/components'

const info = `<h3>Relax and indulge yourself with the cooling, massaging action of the roller.</h3><p>Improve blood circulation and tighten up those pores.</p><p>Reduce puffiness and dark circles.</p><p>Massage nasty toxins from your body through lymphatic massage.</p><p>Evenly distribute and soak facial tonics and oils deep into your skin as you roll.</p>`

const InfoPopup = (props) =>
  <Fragment>
    <InfoWrapper>
      <StyledMarkup dangerouslySetInnerHTML={{__html: info }}/>
    </InfoWrapper>
  </Fragment>

export default connect(
  state => ({
    info: state.info
  })
)(InfoPopup)

// STYLES
const InfoWrapper = styled.div`
  ${fancyScroll};
  ${shadow};
  ${transTransform};
  overflow-y: scroll;
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${colors.green};
  padding-top: ${heights.header};
  z-index: 9000;
  transform: translateX(0);
  &.cart-open {
    transform: translateX(0);
  }
  ${media.desktopNav`
    width: 75vw;
  `}
  ${media.big`
    width: ${widths.cart};
  `}
`