import React, { Fragment } from "react";
import { connect } from "react-redux";
import styled, { injectGlobal } from "styled-components";
import {
  handleCartClose,
  handleCartOpen,
  updateQuantityInCart,
  removeLineItemInCart
} from "./state/actions";
import { animationFadeIn, flexColumn, media } from "./styles/mixins";
import {
  colors,
  fonts,
  heights,
  widths,
  breakpoints
} from "./styles/theme.json";
import { Sidebar, Footer } from "./components";
import { LoadingPage, Shop, InfoPopout } from "./views";
import Cart from "./shopify/Cart";
import { shop } from "./config.json";

const Document = props => {
  if (props.cart) {
    return (
      <Fragment>
        {shop && (
          <Cart
            checkout={props.cart.checkout}
            isCartOpen={props.cart.isCartOpen}
            handleCartClose={handleCartClose}
            handleCartOpen={handleCartOpen}
            updateQuantityInCart={updateQuantityInCart}
            removeLineItemInCart={removeLineItemInCart}
          />
        )}
        <InfoPopout />
        <Sidebar position={"right"} />
        {props.ww >= breakpoints.desktop && (
          <Fragment>
            <Sidebar position={"left"} />
            <Sidebar position={"top"} />
            <Sidebar position={"bottom"} />
          </Fragment>
        )}
        <Main
          className={
            props.cart.isCartOpen
              ? `cart-open ${props.header_style}`
              : props.header_style
          }
        >
          <Shop />
        </Main>
        <Footer />
      </Fragment>
    );
  } else {
    return <LoadingPage />;
  }
};

export default connect(state => ({
  ww: state.resize_state.window_width,
  router: state.router,
  cart: state.cart,
  header_state: state.header_state,
  style: state.header_style
}))(Document);

// MAIN STYLING
const Main = styled.main`
  ${animationFadeIn(1000, 150)};
  ${flexColumn};
  width: 100vw;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  will-change: transform;
  transition: transform 400ms ease-in-out;
  -webkit-overflow-scrolling: touch;
  padding-right: ${widths.sidebar_desktop};
  ${media.desktopNav`
    padding-right: 0;
    overflow-y: visible;
  `} &.cart-open {
    transform: translateX(-35vw);
  }
`;

// NORMALIZE CSS
injectGlobal`
  html {
    font-size: 58%;
  }
  @media screen and (min-width: 960px) {
    html {
      font-size: 62.5%;
    }
  }
  @media screen and (min-width: 1550px) {
    html {
      font-size: 72.5%;
    }
  }
  @media screen and (min-width: 1750px) {
    html {
      font-size: 78.5%;
    }
  }
  body {
    font-family: arial;
    color: ${colors.black};
    font-family: ${fonts.sans};
    font-weight: 300;
    font-style: normal;
    text-decoration: none;
  }
  ::-webkit-input-placeholder,
  ::-moz-placeholder {
    color: white;
    font-size: 15vmin;
    ${fonts.sans};
  }
`;
