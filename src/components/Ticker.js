import React, { Component } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import Marquee3k from 'marquee3000'
import { flexRowCenteredVert, animationFadeIn } from './../styles/mixins'

class Ticker extends Component {
  componentDidMount() {
    setTimeout(() => {
      Marquee3k.init()
    }, 1);
  }
  render() {
    return (
      <TickerWrapper>
        <div className="marquee3k" data-speed="0.5" >
          <h1><span dangerouslySetInnerHTML={{__html: this.props.copy }}/></h1>
        </div>
      </TickerWrapper>
    )
  }
}

Ticker.propTypes = {
  copy: propTypes.string
}

export default Ticker

const TickerWrapper = styled.div`
  ${animationFadeIn(2500, 100)};
  ${flexRowCenteredVert};
  width: 100%;
  height: 100%;
  flex: 1;
  h1 {
    ${flexRowCenteredVert};
    font-size: 3rem;
    line-height: 1.1;
  }
  .marquee3k__copy {
    padding-left: 0;
    padding-right: 0;
    box-sizing: border-box;
  }
`