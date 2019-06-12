import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setInfoState } from './../state/actions'
import { Close } from './../components'
import { media, shadow, fancyScroll, transTransform, flexCenteredAll } from './../styles/mixins'
import { StyledMarkup, BuyButton } from './../styles/components'
import { colors, heights, widths } from './../styles/theme.json'

const info = `<h2>Relax and indulge yourself with the cooling, massaging action of the roller.</h2><p>Improve blood circulation and tighten up those pores.</p><p>Reduce puffiness and dark circles.</p><p>Massage nasty toxins from your body through lymphatic massage.</p><p>Evenly distribute and soak facial tonics and oils deep into your skin as you roll.</p>`

const InfoPopup = (props) =>
  <Fragment>
    <InfoButtonWrapper className={(props.info || !props.fonts) && 'info-open'}>
      <BuyButton bgColor={colors.blue} startAngle={`20deg`} endAngle={`-20deg`} className="App__view-cart" onClick={() => props.info_toggle(!props.info)}><span>Info</span></BuyButton>
    </InfoButtonWrapper>
    <InfoWrapper className={props.info && 'info-open'}>
      <CloseWrapper>
        <Close clickFunction={() => props.info_toggle(!props.info)} color={colors.white}/>
      </CloseWrapper>
      <StyledMarkup dangerouslySetInnerHTML={{__html: info }}/>
    </InfoWrapper>
  </Fragment>

export default connect(
  state => ({
    info: state.info,
    scroll: state.scroll_direction,
    fonts: state.fonts_loaded
  }),
  dispatch => ({
    info_toggle: (bool) => dispatch(setInfoState(bool))
  })
)(InfoPopup)

// STYLES
const InfoWrapper = styled.div`
  ${fancyScroll};
  ${shadow};
  ${transTransform};
  ${flexCenteredAll};
  padding: 6rem 2rem 10rem;
  overflow-y: scroll;
  height: 100%;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${colors.green};
  padding-top: ${heights.header};
  z-index: 9000;
  transform: translateX(-100vw);
  &.info-open {
    transform: translateX(0);
  }
  ${media.desktopNav`
    width: 75vw;
    padding: 6rem 6rem 10rem;
  `}
  ${media.big`
    width: ${widths.cart};
  `}
`

const InfoButtonWrapper = styled.div`
  ${flexCenteredAll};
  ${transTransform};
  z-index: 1000;
  position: fixed;
  top: 9rem;
  left: 1rem;
  &.info-open {
    transform: translateY(-20rem) translateX(-20rem);
    pointer-events: none;
  }
  ${media.desktopNav`
    top: 3.5rem;
    left: 4rem;
  `}
`

const CloseWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`