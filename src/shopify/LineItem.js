import React, {Component} from 'react';
import styled from 'styled-components'
import { staggeredColor, flexRow, mainPadding, mediumType, flexRowCenteredAll, flexCenteredAll, bigType, media } from './../styles/mixins'
import { BuyButton } from './../styles/components'
import { heights, colors, spacing } from './../styles/theme.json'
import { toLowerCaseDash } from './../scripts'
import { FitImage } from './../components'

class LineItem extends Component {
  constructor(props) {
    super(props)
    this.decrementQuantity = this.decrementQuantity.bind(this)
    this.incrementQuantity = this.incrementQuantity.bind(this)
  }

  decrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity - 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity)
  }

  incrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity + 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity)
  }

  render() {
    return (
      <Item>
        <LineItemImage className={toLowerCaseDash(this.props.line_item.title)}>
          {this.props.line_item.variant.image
            ? <FitImage src={this.props.line_item.variant.image.src} fit={'contain'}/> 
            : null
          }
        </LineItemImage>
        <LineItemContent>
          <ContetntRow>
            <span>
              {this.props.line_item.title}
            </span>
          </ContetntRow>
          <ContetntRow>
            <QuantityContainer>
              <AdjustButton sizeMobie={`3.25rem`} size={`3rem`} startAngle={`0deg`} bgColor={`red`} onClick={() => this.decrementQuantity(this.props.line_item.id)}><span>-</span></AdjustButton>
              <span className="quantity">{this.props.line_item.quantity}</span>
              <AdjustButton sizeMobie={`3.25rem`} size={`3rem`} startAngle={`0deg`} bgColor={`red`} onClick={() => this.incrementQuantity(this.props.line_item.id)}><span>+</span></AdjustButton>
            </QuantityContainer>
          </ContetntRow>
          <Price>
            <span className="price">
              ${(this.props.line_item.quantity * this.props.line_item.variant.price).toFixed(2)}
            </span>
            <AdjustButton sizeMobie={`3.25rem`} size={`3rem`} startAngle={`0deg`} bgColor={`red`} className="remove" onClick={()=> this.props.removeLineItemInCart(this.props.line_item.id)}><span>x</span></AdjustButton>
          </Price>
        </LineItemContent>
      </Item>
    )
  }
}

export default LineItem;

// STYLES
const Item = styled.li`
  ${flexRow};
  ${staggeredColor};
  width: 100%;
  height: 45vh;
  position: relative;
`

const LineItemImage = styled.div`
  width: 50%;
  height: 100%;
  ${mainPadding};
  padding: ${spacing.double_pad};
  position: relative;
  &.green-jade-roller {
    background-color: ${colors.jade};
  }
  &.rose-quartz-roller {
    background-color: ${colors.magenta};
  }
  &.white-jade-roller {
    background-color: ${colors.white};
  }
`

const LineItemContent = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`

const ContetntRow = styled.div`
  padding: 0 ${spacing.double_pad};
  ${flexRowCenteredAll};
  padding: 1rem .5rem;
  border-bottom: 3px solid ${colors.black};
  position: relative;
  span {
    ${mediumType};
    margin: auto;
    display: block;
    text-align: center;
  }
  &:last-child {
    border: 0;
  }
  ${media.desktopNav`
    height: ${heights.header};
  `}
`

const QuantityContainer = styled.div`
  ${flexRowCenteredAll};
  max-width: 14rem;
  margin: auto;
  span.quantity {
    padding: 0 2rem;
    display: block;
  }
`

const Price = styled.div`
  ${flexRowCenteredAll};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(100% - (${heights.header} * 2));
  padding-bottom: 4rem;
  span.price {
    ${bigType};
    padding: 0 2rem;
    display: block;
  }
`

const AdjustButton = styled(BuyButton)`
  ${flexCenteredAll};
  span {
    font-size: 1.5rem;
    line-height: 1;
    display: block;
  }
  &.remove {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`
