import React, { Component } from 'react'
import { connect } from 'react-redux'
import Document from './Document'
import { setScrollDirection, setSideBarState } from './state/actions'
import { scrollWatcher } from './scripts'

class App extends Component {
  componentWillMount() {
    window.scrollTo(0, 0)
    scrollWatcher()
  }
  render() {
    return (
      <Document/>
    )
  }
}

export default connect(
  state => ({
    sidebar: state.sidebar_state
  }),
  dispatch => ({
    setSideBarState: (bool) => dispatch(setSideBarState(bool)),
    setScrollDirection: (string) => dispatch(setScrollDirection(string))
  })
)(App)
