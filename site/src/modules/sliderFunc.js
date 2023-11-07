const sliderFunc = () => {
  const slider = document.querySelector(".portfolio-content");
  let slides = document.querySelectorAll(".portfolio-item");
  const btnSlider = document.querySelectorAll(".portfolio-btn");
  let currentSlide = 0;
  let interval;

  const dotsAdd = () => {
    const dotsWrapper = document.querySelector(".portfolio-dots");

    for (let i = 0; i < slides.length - 1; i++) {
      let newDot = document.createElement("li");
      newDot.classList.add("dot");
      dotsWrapper.append(newDot);
    }
  };

  dotsAdd();

  let dots = document.querySelectorAll(".dot");

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  };

  const startSlide = (time = 1500) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener("click", (event) => {
    event.preventDefault();
    let target = event.target;

    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");

    if (target.matches("#arrow-right")) {
      currentSlide++;
    } else if (target.matches("#arrow-left")) {
      currentSlide--;
    } else if (target.matches(".dot")) {
      dots.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  });

  slider.addEventListener("mouseover", (e) => {
    if (e.target.matches(".portfolio-btn") || e.target.matches(".dot")) {
      stopSlide();
    }
  });

  slider.addEventListener("mouseout", (e) => {
    if (e.target.matches(".portfolio-btn") || e.target.matches(".dot")) {
      startSlide();
    }
  });

  startSlide(1500);
};

export default sliderFunc;
