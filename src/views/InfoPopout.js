import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setInfoState } from './../state/actions'
import { Close } from './../components'
import * as _ from "./../styles/mixins"
import { BuyButton } from './../styles/components'
import { colors, widths, fonts } from './../styles/theme.json'

const InfoPopup = props =>
  <Fragment>
    <InfoButtonWrapper className={(props.info || !props.fonts) && 'info-open'}>
      <BuyButton bgColor={colors.blue} startAngle={`20deg`} endAngle={`-20deg`} className="App__view-cart" onClick={() => props.info_toggle(!props.info)}><span>Info</span></BuyButton>
    </InfoButtonWrapper>
    <InfoWrapper className={props.info && 'info-open'}>
      <CloseWrapper>
        <Close clickFunction={() => props.info_toggle(!props.info)} color={colors.white}/>
      </CloseWrapper>
      <InfoCopy dangerouslySetInnerHTML={{__html: props.infoCopy }}/>
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
  ${_.fancyScroll};
  ${_.shadow};
  ${_.transTransform};
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${colors.green};
  z-index: 9000;
  transform: translateX(-100vw);
  &.info-open {
    transform: translateX(0);
  }
  ${_.media.desktopNav`
    width: 75vw;
  `}
  ${_.media.big`
    width: ${widths.cart};
  `}
`

const InfoButtonWrapper = styled.div`
  ${_.flexCenteredAll};
  ${_.transTransform};
  z-index: 1000;
  position: fixed;
  top: 9rem;
  left: 1rem;
  &.info-open {
    transform: translateY(-20rem) translateX(-20rem);
    pointer-events: none;
  }
  ${_.media.desktopNav`
    top: 3.5rem;
    left: 4rem;
  `}
`

const InfoCopy = styled.div`
  padding: 2rem 3rem 6rem;
  ${_.media.desktopNav`
    padding: 2rem 6rem 6rem;
  `}
  p {
    ${_.bodyType};
    color: ${colors.black};
    font-family: ${fonts.display_font_a};
    padding-bottom: 1.5rem;
  }
  ul {
    padding-bottom: 1.5rem;
    list-style-type: circle;
    padding-left: 2rem;
    li {
      ${_.smallType};
      padding-bottom: .5rem;
    }
  }
`

const CloseWrapper = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`