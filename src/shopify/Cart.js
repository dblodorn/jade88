import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Transition } from 'react-spring'
import { mainPadding, flexCenteredAll, fancyScroll, flexRow, flexRowCenteredVert, shadow, transTransform, flexColumn, media  } from './../styles/mixins'
import { H2, BuyButton } from './../styles/components'
import { Close } from './../components'
import { widths, heights, shared, colors, spacing } from './../styles/theme.json'
import LineItem from './LineItem'

class Cart extends Component {
  constructor(props) {
    super(props);
    this.openCheckout = this.openCheckout.bind(this);
  }

  openCheckout() {
    window.open(this.props.checkout.webUrl);
  }

  render() {
    let line_items = this.props.checkout.lineItems.map((line_item) => {
      return (
        <LineItem
          updateQuantityInCart={this.props.updateQuantityInCart}
          removeLineItemInCart={this.props.removeLineItemInCart}
          key={line_item.id.toString()}
          line_item={line_item}
        />
      );
    });

    return (
      <Fragment>
        {!this.props.cart.isCartOpen &&
          <CartButtonWrapper className={this.props.cart.isCartOpen && 'cart-open'}>
            <BuyButton bgColor={colors.magenta} startAngle={`-20deg`} endAngle={`20deg`} className="App__view-cart" onClick={this.props.handleCartOpen}>Cart</BuyButton>
          </CartButtonWrapper>
        }
        <CartWrapper className={(this.props.cart.isCartOpen) && 'cart-open'}>
          <CartHeader>
            <H2>CART</H2>
            <CloseWrapper>
              <Close clickFunction={this.props.handleCartClose} color={colors.white}/>
            </CloseWrapper>
          </CartHeader>
          <CartItems>
            {line_items}
          </CartItems>
          <CartFooter>
            <div className="Cart-info clearfix">
              <div className="Cart-info__total Cart-info__small">Subtotal</div>
              <div className="Cart-info__pricing">
                <span className="pricing">$ {this.props.checkout.subtotalPrice}</span>
              </div>
            </div>
            <div className="Cart-info clearfix">
              <div className="Cart-info__total Cart-info__small">Taxes</div>
              <div className="Cart-info__pricing">
                <span className="pricing">$ {this.props.checkout.totalTax}</span>
              </div>
            </div>
            <div className="Cart-info clearfix">
              <div className="Cart-info__total Cart-info__small">Total</div>
              <div className="Cart-info__pricing">
                <span className="pricing">$ {this.props.checkout.totalPrice}</span>
              </div>
            </div>
            <Checkout>
              <BuyButton onClick={this.openCheckout}>Check Out</BuyButton>
            </Checkout>
          </CartFooter>
        </CartWrapper>
      </Fragment>
    )
  }
}

export default connect(
  state => ({
    cart: state.cart
  })
)(Cart)

// STYLES
const CartWrapper = styled.div`
  ${fancyScroll};
  ${shadow};
  ${transTransform};
  overflow-y: scroll;
  height: 100vh;
  width: 100vw;
  position: fixed;
  right: 0;
  top: 0;
  background-color: ${colors.green};
  padding-top: ${heights.header};
  z-index: 9000;
  transform: translateX(100vw);
  &.cart-open {
    transform: translateX(0);
  }
  ${media.desktopNav`
    width: 75vw;
    transform: translateX(75vw);
  `}
  ${media.big`
    width: ${widths.cart};
    transform: translateX(${widths.cart});
  `}
`

const CloseWrapper = styled.div`
  ${flexCenteredAll};
  height: 100%;
`

const CartButtonWrapper = styled.div`
  ${flexCenteredAll};
  ${transTransform};
  z-index: 9000;
  position: fixed;
  bottom: 3.75rem;
  right: 2rem;
  &.cart-open {
    transform: translateY(-10rem);
  }
`

const Checkout = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`

const CartHeader = styled.header`
  ${flexRowCenteredVert};
  justify-content: space-between;
  padding-left: ${spacing.double_pad};
  padding-right: 1rem;
  width: 100%;
  height: ${heights.header};
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colors.purple};
  * {
    color: ${colors.white};
  }
`

const CartItems = styled.ul`
  ${flexColumn};
  width: 100%;
`

const CartFooter = styled.footer`
  ${flexRow};
  ${mainPadding};
  width: 100%;
`