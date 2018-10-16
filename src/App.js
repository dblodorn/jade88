import React, { Component } from 'react'
import Document from './Document'

class App extends Component {
  componentWillMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <Document/>
    )
  }
}

export default App
