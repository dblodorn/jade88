import React from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'
import { shadow, transTransform } from './../styles/mixins'
import { colors, widths, breakpoints } from './../styles/theme.json'
import Logo from './Logo'
import Ticker from './Ticker'

const Sidebar = (props) =>
  <SidebarWrapper className={(props.cart.isCartOpen || props.info || !props.fonts || ((props.scroll == 'down') && (props.ww >= breakpoints.desktop))) ? `${props.position} cart-open` : `${props.position} ${props.scroll}`}>
    <SidebarTop>
      <Logo/>
    </SidebarTop>
    <TickerFlip className={props.position}>
      <TickerWrapper className={props.position}>
        {props.apiData && <Ticker copy={`${props.apiData.options.banner_text}`}/>}
      </TickerWrapper>
    </TickerFlip>
    <SidebarBottom>
      <Logo/>
    </SidebarBottom>
  </SidebarWrapper>

export default connect(
  state => ({
    apiData: state.apiData,
    cart: state.cart,
    info: state.info,
    scroll: state.scroll_direction,
    ww: state.resize_state.window_width,
    fonts: state.fonts_loaded
  })
)(Sidebar)

/* STYLES */
const sideBarVert = css`
  height: 100vh;
  width: ${widths.sidebar_desktop};
  z-index: 100;
`

const sideBarHorizontal = css`
  height: ${widths.sidebar_desktop};
  width: 100vw;
  z-index: 10;
`

const SidebarWrapper = styled.div`
  ${shadow};
  ${transTransform};
  position: fixed;
  padding: 0;
  z-index: 1000;
  background-color: ${colors.header_bg_color};
  * {
    color: ${colors.header_type_color}!important;
  }
  &.right {
    ${sideBarVert};
    right: 0;
    top: 0;
    &.cart-open,
    &.at-bottom {
      transform: translateX(${widths.sidebar_desktop});
    }
  }
  &.left {
    ${sideBarVert};
    left: 0;
    top: 0;
    &.cart-open,
    &.at-bottom {
      transform: translateX(-${widths.sidebar_desktop});
    }
  }
  &.top {
    ${sideBarHorizontal};
    left: 0;
    top: 0;
    &.cart-open,
    &.at-bottom {
      transform: translateY(-${widths.sidebar_desktop});
    }
  }
  &.bottom {
    ${sideBarHorizontal};
    left: 0;
    bottom: 0;
    &.cart-open,
    &.at-bottom {
      transform: translateY(${widths.sidebar_desktop});
    }
  }
`

const SidebarTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

const SidebarBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  .logo {
    transform: rotate(90deg);
  }
`

const TickerFlip = styled.div`
  position: absolute;
  overflow: hidden;
  background-color: ${colors.header_bg_color};
  &.top,
  &.bottom {
    top: 0;
    left: ${widths.sidebar_desktop};
    height: ${widths.sidebar_desktop};
    width: calc(100vw - (${widths.sidebar_desktop} * 2));
  }
  &.left,
  &.right {
    height: calc(100vh - (${widths.sidebar_desktop} * 2));
    width: ${widths.sidebar_desktop};
    top: ${widths.sidebar_desktop};
    left: 0;
  }
`

const TickerWrapper = styled.div`
  width: calc(100vh - (${widths.sidebar_desktop} * 2));
  height: ${widths.sidebar_desktop};
  position: absolute;
  padding-bottom: .5rem;
  &.right {
    transform: rotate(90deg);
    transform-origin: bottom left;
    top: -${widths.sidebar_desktop};
    left: 0;
  }
  &.left {
    transform: rotate(270deg);
    transform-origin: bottom left;
    top: ${widths.sidebar_desktop};
    left: ${widths.sidebar_desktop};
  }
  &.top {
    top: 0;
    left: ${widths.sidebar_desktop};
  }
  &.bottom {
    transform: rotate(180deg);
  }
  * {
    color: ${colors.black}!important;
    font-style: italic;
  }
`

