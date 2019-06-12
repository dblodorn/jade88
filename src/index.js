import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import WebFont from 'webfontloader'
import throttle from 'lodash/throttle'
import mixin from 'lodash/mixin'
import _ from 'lodash/wrapperLodash'
import { fetchApiData, setResizeState, hasTouch, fontsLoaded } from './state/actions'
import App from './App'
import config, { shopify } from './config.json'
import { store } from './state/store'
import Client from 'shopify-buy';

store.dispatch(fetchApiData())

const client = Client.buildClient({
  storefrontAccessToken: shopify.token,
  domain: shopify.domain
});

store.dispatch({type: 'CLIENT_CREATED', payload: client});

client.collection.fetchAllWithProducts().then((collections) => {
  store.dispatch({type: 'PRODUCTS_FOUND', payload: collections[0].products});
});

client.product.fetchAll().then((res) => {
  store.dispatch({type: 'PRODUCTS_FOUND', payload: res});
});

client.checkout.create().then((res) => {
  store.dispatch({type: 'CHECKOUT_FOUND', payload: res});
});
client.shop.fetchInfo().then((res) => {
  store.dispatch({type: 'SHOP_FOUND', payload: res});
});


mixin(_, {
  throttle: throttle
})

const resizeHandler = () => {
  store.dispatch(setResizeState())
}

resizeHandler()

window.addEventListener('resize', _.throttle(resizeHandler, 50))

window.addEventListener('touchstart', function onFirstTouch() {
  document.body.classList.add('touch')
  store.dispatch(hasTouch(true))
  window.removeEventListener('touchstart', onFirstTouch, false)
}, false)

// LOAD FONTS
WebFont.load({
  custom: {
    families: config.fonts,
    urls: ['/assets/fonts.css']
  },
  active: function() {
    store.dispatch(fontsLoaded(true))
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

module.hot.accept();