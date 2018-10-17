import { store } from './../state/store'
import { setScrollDirection, setSideBarState } from './../state/actions'

export default () => {
  
  const threshold = 15

  const siderbarHandler = (bool) => {
    store.dispatch(setSideBarState(bool))
  }
  
  const directionHandler = (string) => {
    store.dispatch(setScrollDirection(string))
  }
  
  let currentPixel = window.pageYOffset;
  let scrollTime = 0;
  const looper = () => {
    const newPixel = window.pageYOffset;
    const diff = newPixel - currentPixel;
    const speed = diff * 1.125;
    if (speed > diff) {
      scrollTime = scrollTime + 1;
      if (scrollTime === threshold) {
        directionHandler('down');
      }
    } else if (speed < diff) {
      scrollTime = scrollTime + 1;
      if (scrollTime === threshold) {
        directionHandler('up');
      }
    } else {
      scrollTime = 0;
    }
    currentPixel = newPixel;
    if (currentPixel === 0 && (store.getState().scroll_direction != 'top')) {
      directionHandler('top');
      console.log(store.getState().scroll_direction);
    }
    console.log(currentPixel);
    requestAnimationFrame(looper);
  };
  looper();
};
