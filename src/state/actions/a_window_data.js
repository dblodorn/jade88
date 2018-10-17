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

const fontsLoaded = (bool) => {
  return {
    type: 'FONTS_LOADED',
    bool
  }
}

const hasTouch = (bool) => {
  return {
    type: 'HAS_TOUCH',
    bool
  }
}

const setScrollDirection = (string) => {
  return {
    type: 'SCROLL_DIRECTION',
    string
  };
}

const setCurrentPixel = (string) => {
  return {
    type: 'SCROLL_PIXEL',
    string
  };
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
  setInfoState,
  setScrollDirection,
  setCurrentPixel
}
