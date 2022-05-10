import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

//for React Slick tests
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
