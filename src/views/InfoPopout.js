import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setInfoState } from './../state/actions'
import { Close } from './../components'
import { media, shadow, fancyScroll, transTransform, flexCenteredAll, mainPadding } from './../styles/mixins'
import { StyledMarkup, BuyButton } from './../styles/components'
import { colors, heights, widths } from './../styles/theme.json'

const info = `<h3>Relax and indulge yourself with the cooling, massaging action of the roller.</h3><p>Improve blood circulation and tighten up those pores.</p><p>Reduce puffiness and dark circles.</p><p>Massage nasty toxins from your body through lymphatic massage.</p><p>Evenly distribute and soak facial tonics and oils deep into your skin as you roll.</p>`

const InfoPopup = (props) =>
  <Fragment>
    <InfoButtonWrapper className={props.info && 'info-open'}>
      <BuyButton bgColor={colors.blue} startAngle={`20deg`} endAngle={`-20deg`} className="App__view-cart" onClick={() => props.info_toggle(!props.info)}>Info</BuyButton>
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
    info: state.info
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
  ${mainPadding};
  overflow-y: scroll;
  height: 100vh;
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
  `}
  ${media.big`
    width: ${widths.cart};
  `}
`

const InfoButtonWrapper = styled.div`
  ${flexCenteredAll};
  ${transTransform};
  z-index: 9000;
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  &.info-open {
    transform: translateY(-20rem) translateX(-20rem);
    pointer-events: none;
  }
`

const CloseWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`