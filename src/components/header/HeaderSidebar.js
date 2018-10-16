import React from 'react'
import styled from 'styled-components'
import { flexColumn, shadow } from '../../styles/mixins'
import { colors, widths } from './../../styles/theme.json'
import { meta_defaults } from './../../config.json'
import Logo from './Logo'

export default (props) =>
  <HeaderWrapperSidebar>
    <HeaderTop>
      <Logo theme={'a'} title={meta_defaults.title} orientation={props.orientation}/>
    </HeaderTop>
    <HeaderBottom>
      <Logo theme={'a'} title={meta_defaults.title} orientation={props.orientation}/>
    </HeaderBottom>
  </HeaderWrapperSidebar>

/* STYLES */
const HeaderWrapperSidebar = styled.header`
  width: ${widths.sidebar_desktop};
  ${flexColumn};
  ${shadow};
  justify-content: space-between;
  height: 100vh;
  padding: 0;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  background-color: ${colors.header_bg_color};
  * {
    color: ${colors.header_type_color}!important;
  }
`

const HeaderTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

const HeaderBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  .logo {
    transform: rotate(90deg);
  }
`
