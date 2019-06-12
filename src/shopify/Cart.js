import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  mainPadding,
  flexCenteredAll,
  fancyScroll,
  flexRow,
  flexRowCenteredVert,
  shadow,
  transTransform,
  flexColumn,
  media,
  mediumType
} from "./../styles/mixins";
import { H2, LozengeButton, H3 } from "./../styles/components";
import { Close } from "./../components";
import { widths, heights, colors, spacing } from "./../styles/theme.json";
import LineItem from "./LineItem";
import CartButton from "./CartButton";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.openCheckout = this.openCheckout.bind(this);
  }

  openCheckout() {
    window.open(this.props.checkout.webUrl);
  }

  render() {
    let line_items = this.props.checkout.lineItems.map(line_item => {
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
        <CartButtonWrapper className={this.props.cart.isCartOpen || !this.props.fonts  && "cart-open"}>
          <CartButton clickFunction={this.props.handleCartOpen} />
        </CartButtonWrapper>
        <CartWrapper className={this.props.cart.isCartOpen && "cart-open"}>
          <CartHeader>
            <H2>CART</H2>
            <CloseWrapper>
              <Close
                clickFunction={this.props.handleCartClose}
                color={colors.white}
              />
            </CloseWrapper>
          </CartHeader>
          <CartInner>
            {(this.props.checkout.lineItems.length <= 0) && <CartEmpty><H3>🤭 YOUR CART IS EMPTY!</H3></CartEmpty>}
            <CartItems>{line_items}</CartItems>
            <CartFooter>
              <CartInfoGrid>
                <InfoItem>
                  <div className="Cart-info__total Cart-info__small">
                    Subtotal
                  </div>
                  <div className="Cart-info__pricing">
                    <span className="pricing">
                      $ {this.props.checkout.subtotalPrice}
                    </span>
                  </div>
                </InfoItem>
              </CartInfoGrid>
              <Checkout>
                <LozengeButton className={'shop-more'} onClick={this.props.handleCartClose}>
                  <span>Continue Shopping</span>
                </LozengeButton>
                <LozengeButton onClick={this.openCheckout}>
                  <span>Check Out</span>
                </LozengeButton>
              </Checkout>
            </CartFooter>
          </CartInner>
        </CartWrapper>
      </Fragment>
    );
  }
}

export default connect(state => ({
  cart: state.cart,
  fonts: state.fonts_loaded
}))(Cart);

// STYLES
const CartWrapper = styled.div`
  ${fancyScroll};
  ${shadow};
  ${transTransform};
  overflow-y: scroll;
  height: 100%;
  width: 100vw;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9000;
  background-color: ${colors.green};
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
  `};
`;

const CartEmpty = styled.div`
  width: 100%;
  background-color: ${colors.red};
  padding: ${spacing.double_pad};
  * {
    color: ${colors.white};
  }
`

const CartInner = styled.div`
  position: relative;
`;

const CloseWrapper = styled.div`
  ${flexCenteredAll};
  height: 100%;
`;

const CartButtonWrapper = styled.div`
  ${flexCenteredAll};
  ${transTransform};
  z-index: 1000;
  position: fixed;
  top: 1rem;
  left: 1rem;
  &.cart-open {
    transform: translateY(-20rem) translateX(-20rem);
    pointer-events: none;
  }
  ${media.desktopNav`
    top: auto;
    left: auto;
    bottom: 3.5rem;
    right: 4rem;
    &.cart-open {
      transform: translateY(30rem) translateX(30rem);
    }
  `};
`;

const Checkout = styled.div`
  ${flexColumn};
  align-items: center;
  position: relative;
  padding-top: 1.5rem;
  padding-bottom: 4rem;
  .shop-more {
    margin-bottom: ${spacing.double_pad};
  }
  ${media.desktopNav`
    ${flexRowCenteredVert};
    padding-top: 0;
    .shop-more {
      margin-right: ${spacing.double_pad};
      margin-bottom: 0;
    }
  `};
`;

const CartHeader = styled.header`
  ${flexRowCenteredVert};
  justify-content: space-between;
  padding-left: ${spacing.double_pad};
  padding-right: 1rem;
  width: 100%;
  height: ${heights.header};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9000;
  ${shadow};
  background-color: ${colors.purple};
  * {
    color: ${colors.white};
  }
`;
const CartFooter = styled.footer`
  ${flexColumn};
  ${mainPadding};
  justify-content: space-between;
  width: 100%;
  margin-bottom: 6rem;
  ${media.desktopNav`
    ${flexRow};
  `};
`;

const CartInfoGrid = styled.div`
  ${flexRow};
  justify-content: center;
  text-align: center;
  ${media.desktopNav`
    text-align: left;
    justify-content: space-between;
  `};
`;

const InfoItem = styled.div`
  padding-right: ${spacing.double_pad};
  &:last-child {
    padding-right: 0;
  }
  span {
    ${mediumType};
    font-size: 3.125rem;
  }
  ${media.desktopNav`
    &:last-child {
      padding-right: ${spacing.double_pad};
    }
  `};
`;

const CartItems = styled.ul`
  ${flexColumn};
  width: 100%;
`;
