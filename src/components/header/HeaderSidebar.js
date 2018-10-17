import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { flexColumn, shadow, transTransform } from '../../styles/mixins'
import { colors, widths } from './../../styles/theme.json'
import { meta_defaults } from './../../config.json'
import Logo from './Logo'
import Ticker from './../Ticker'

const manifesto = `We mean celebration.&nbsp;&nbsp;&nbsp;&nbsp;We mean indulgence.&nbsp;&nbsp;&nbsp;&nbsp;We mean extravagance.&nbsp;&nbsp;&nbsp;&nbsp;Be extra.&nbsp;&nbsp;&nbsp;&nbsp;Be mega.&nbsp;&nbsp;&nbsp;&nbsp;Be moisturized.&nbsp;&nbsp;&nbsp;&nbsp;Roll with us.`

const HeaderSidebar = (props) =>
  <HeaderWrapperSidebar className={props.cart.isCartOpen && 'cart-open'}>
    <HeaderTop>
      <Logo theme={'a'} title={meta_defaults.title} orientation={props.orientation}/>
    </HeaderTop>
    <TickerFlip>
      <TickerWrapper><Ticker copy={manifesto}/></TickerWrapper>
    </TickerFlip>
    <HeaderBottom>
      <Logo theme={'a'} title={meta_defaults.title} orientation={props.orientation}/>
    </HeaderBottom>
  </HeaderWrapperSidebar>

export default connect(
  state => ({
    cart: state.cart
  })
)(HeaderSidebar)

/* STYLES */
const HeaderWrapperSidebar = styled.header`
  ${flexColumn};
  ${shadow};
  width: ${widths.sidebar_desktop};
  justify-content: space-between;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  padding: 0;
  z-index: 1000;
  background-color: ${colors.header_bg_color};
  transition: transform 1000ms ease-in-out 450ms;
  &.cart-open {
    transform: translateX(${widths.sidebar_desktop});
  }
  * {
    color: ${colors.header_type_color}!important;
  }
`

const HeaderTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

const TickerFlip = styled.div`
  height: calc(100vh - (${widths.sidebar_desktop} * 2));
  width: ${widths.sidebar_desktop};
  position: absolute;
  top: ${widths.sidebar_desktop};
  overflow: hidden;
`

const TickerWrapper = styled.div`
  transform: rotate(90deg);
  width: calc(100vh - (${widths.sidebar_desktop} * 2));
  height: ${widths.sidebar_desktop};
  position: absolute;
  top: -${widths.sidebar_desktop};
  transform-origin: bottom left;
  padding-bottom: .5rem;
  * {
    color: ${colors.black}!important;
    font-style: italic;
  }
`

const HeaderBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  .logo {
    transform: rotate(90deg);
  }
`
