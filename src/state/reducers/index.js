import { combineReducers } from 'redux'
import { resizeState, fontState, touchState, infoState, scrollDirectionState, currentPixelState } from './r_window_data'
import cart from './r_cart'

const rootReducer = combineReducers({
  cart: cart,
  resize_state: resizeState,
  fonts_loaded: fontState,
  touch_state: touchState,
  scroll_direction: scrollDirectionState,
  current_pixel: currentPixelState,
  info: infoState
})

export default rootReducer
