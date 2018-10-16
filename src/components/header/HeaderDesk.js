import React from 'react'
import { connect } from 'react-redux'
import { setMenuState } from './../../state/actions'
import HeaderSidebar from './HeaderSidebar'

const HeaderDesk = (props) =>
  <HeaderSidebar header_state={props.header_state} orientation={props.style}/>

export default connect(
  state => ({
    header_state: state.header_state,
    style: state.header_style
  }),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setMenuState(bool))
  })
)(HeaderDesk)
