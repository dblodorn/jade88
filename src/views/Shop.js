import React, { Fragment, Component } from 'react'
import { addVariantToCart } from './../state/actions'
import { connect } from 'react-redux'
import { store } from './../state/store'
import styled from 'styled-components'
import { Products } from './../shopify'
import { Section } from './../styles/components'
import Hero from './Hero'
import InfoPopout from './InfoPopout'

class Shop extends Component {
  render() {
    const state = store.getState()
    return (
      <Fragment>
        <Hero/>
        <InfoPopout/>
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
