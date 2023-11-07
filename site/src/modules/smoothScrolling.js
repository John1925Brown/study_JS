const smoothScrolling = function () {
  let btnScrolling = document.querySelector("#btn__scrolling");
  let count = 0;
  let scrollingInterval;

  const scrollingFunc = function () {
    if (count < 831) {
      scrollingInterval = requestAnimationFrame(scrollingFunc);
      count = count + 25;
      document.documentElement.scrollTop = count;
    } else {
      cancelAnimationFrame(scrollingInterval);
      count = 0;
    }
  };

  btnScrolling.addEventListener("click", () => {
    scrollingInterval = requestAnimationFrame(scrollingFunc);
  });
};

export default smoothScrolling;
