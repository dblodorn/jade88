import React from 'react'
import styled from 'styled-components'
import { mainPadding, flexCenteredAll, fancyScroll, flexRow, flexRowCenteredVert, shadow, transTransform, flexColumn, media, mediumType  } from './../styles/mixins'
import { BuyButton } from './../styles/components'
import { colors } from './../styles/theme.json'

export default (props) =>
  <SvgButton bgColor={colors.magenta} startAngle={`-20deg`} endAngle={`20deg`} className="App__view-cart" onClick={props.clickFunction}>
    <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <title>shopping cart</title>
      <g fill="#ffffff">
        <path d="M11.016,32.179C11.103,32.655,11.517,33,12,33h28c0.483,0,0.897-0.345,0.984-0.821l4-22 c0.053-0.292-0.026-0.592-0.216-0.819S44.296,9,44,9H10.857L9.884,3.643C9.711,2.691,8.883,2,7.917,2H1v4h5.247L11.016,32.179z" fill="#ffffff"/>
        <circle cx="14" cy="41" r="5"/>
        <circle cx="38" cy="41" r="5"/>
      </g>
    </svg>
  </SvgButton>

const SvgButton = styled(BuyButton)`
  padding: 2rem;
`
