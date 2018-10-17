import React, { Fragment, Component } from 'react'
import { addVariantToCart } from './../state/actions'
import { connect } from 'react-redux'
import { store } from './../state/store'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../styles/theme'
import { Products } from './../shopify'
import { Section } from './../styles/components'
import Hero from './Hero'

class Shop extends Component {
  render() {
    const state = store.getState()
    return (
      <Fragment>
        <Hero/>
        <ShopSection name="rollers">
          <Products
            products={state.cart.products}
            client={state.cart.client}
            addVariantToCart={addVariantToCart}
          />
        </ShopSection>
      </Fragment>
    )
  }  
}

export default connect((state) => state)(Shop);

const ShopSection = styled(Section)`
  width: 100%;
`
