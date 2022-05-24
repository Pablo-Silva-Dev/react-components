import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import 'jest-canvas-mock'

//FOR REACT SLICK TEST
//@ts-ignore
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
      media: {},
      onchange: () => {},
    };
  };

  //FOR TIMELINELEMENT COMPONENT TEST

  class IntersectionObserver {
    observe = jest.fn()
    disconnect = jest.fn()
    unobserve = jest.fn()
  }
  
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserver,
  })
  
  Object.defineProperty(global, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserver,
  })
