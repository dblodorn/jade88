// RESIZE DATA
const resizeData = (resize_state) => {
  return {
    type: 'RESIZE_STATE',
    resize_state
  }
}

const setInfoState = (bool) => {
  return {
    type: 'INFO_STATE',
    bool
  }
}

function fontsLoaded (bool) {
  return {
    type: 'FONTS_LOADED',
    bool
  }
}

function hasTouch (bool) {
  return {
    type: 'HAS_TOUCH',
    bool
  }
}

const setResizeState = () => {
  return (dispatch) => {
    dispatch(resizeData({
      window_width: window.innerWidth,
      window_height: window.innerHeight
    }))
  }
}

// EXPORTS
export {
  setResizeState,
  fontsLoaded,
  hasTouch,
  setInfoState
}
