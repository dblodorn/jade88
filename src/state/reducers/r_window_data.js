const resizeState = (state = {}, action) => {
  switch (action.type) {
    case 'RESIZE_STATE':
      return action.resize_state
    default:
      return state
  }
}

const infoState = (state = false, action) => {
  switch (action.type) {
    case 'INFO_STATE':
      return action.bool
    default:
      return state
  }
}

const fontState = (state = false, action) => {
  switch (action.type) {
    case 'FONTS_LOADED':
      return action.bool
    default:
      return state
  }
}

const touchState = (state = false, action) => {
  switch (action.type) {
    case 'HAS_TOUCH':
      return action.bool
    default:
      return state
  }
}

const scrollDirectionState = (state = 'top', action) => {
  switch (action.type) {
    case 'SCROLL_DIRECTION':
      return action.string;
    default:
      return state;
  }
}

const sidebarState = (state = true, action) => {
  switch (action.type) {
    case 'SIDEBAR_STATE':
      return action.bool;
    default:
      return state;
  }
}

export {
  resizeState,
  infoState,
  fontState,
  touchState,
  scrollDirectionState,
  sidebarState
}
