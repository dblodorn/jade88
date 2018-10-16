import React, {Component} from 'react';
import styled from 'styled-components'
import { staggeredColor, flexRow, mainPadding } from './../styles/mixins'
import { H4, H6, StyledMarkup, BuyButton } from './../styles/components'
import { widths, colors, fonts, spacing } from './../styles/theme.json'
import { FitImage } from './../components'

class LineItem extends Component {
  constructor(props) {
    super(props);

    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  decrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity - 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  incrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity + 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  render() {
    return (
      <Item>
        <LineItemImage>
          {this.props.line_item.variant.image
            ? <FitImage src={this.props.line_item.variant.image.src} fit={'contain'}/> 
            : null
          }
        </LineItemImage>
        <div className="Line-item__content">
          <div className="Line-item__content-row">
            <div className="Line-item__variant-title">
              {this.props.line_item.variant.title}
            </div>
            <span className="Line-item__title">
              {this.props.line_item.title}
            </span>
          </div>
          <div className="Line-item__content-row">
            <div className="Line-item__quantity-container">
              <button className="Line-item__quantity-update" onClick={() => this.decrementQuantity(this.props.line_item.id)}>-</button>
              <span className="Line-item__quantity">{this.props.line_item.quantity}</span>
              <button className="Line-item__quantity-update" onClick={() => this.incrementQuantity(this.props.line_item.id)}>+</button>
            </div>
            <span className="Line-item__price">
              $ { (this.props.line_item.quantity * this.props.line_item.variant.price).toFixed(2) }
            </span>
            <button className="Line-item__remove" onClick={()=> this.props.removeLineItemInCart(this.props.line_item.id)}>×</button>
          </div>
        </div>
      </Item>
    );
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
  ${mainPadding};
`

const LineItemImage = styled.div`
  width: 50%;
  height: 100%;
  padding: ${spacing.double_pad};
  position: relative;
`
