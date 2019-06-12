import React, { Fragment } from "react";
import { connect } from "react-redux";
import styled, { injectGlobal } from "styled-components";
import {
  handleCartClose,
  handleCartOpen,
  updateQuantityInCart,
  removeLineItemInCart
} from "./state/actions";
import { animationFadeIn, media } from "./styles/mixins";
import {
  colors,
  fonts,
  widths,
  breakpoints
} from "./styles/theme.json";
import { Sidebar, Head } from "./components";
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
        {props.apiData && 
          <Fragment>
            <Head
              title={props.apiData.options.meta_title}
              description={props.apiData.options.meta_description}
              social_image={props.apiData.options.social_card}
            />
            <InfoPopout infoCopy={props.apiData.options.about_copy} />
          </Fragment>
        }
        <SidebarWrapper>
          <Sidebar position={"right"} />
          {props.ww >= breakpoints.desktop && (
            <Fragment>
              <Sidebar position={"left"} />
              <Sidebar position={"top"} />
              <Sidebar position={"bottom"} />
            </Fragment>
          )}
        </SidebarWrapper>
        <Main className={props.cart.isCartOpen ? `cart-open ${props.header_style}` : props.header_style}>
          <Shop/>
        </Main>
      </Fragment>
    );
  } else {
    return <LoadingPage />;
  }
};

export default connect(state => ({
  apiData: state.apiData,
  ww: state.resize_state.window_width,
  router: state.router,
  cart: state.cart,
  header_state: state.header_state,
  style: state.header_style
}))(Document);

// MAIN STYLING
const Main = styled.main`
  ${animationFadeIn(1000, 150)};
  width: 100vw;
  height: 100%;
  position: relative;
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

const SidebarWrapper = styled.div`
  height: 100%;
  width: 100vw;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 800;
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
