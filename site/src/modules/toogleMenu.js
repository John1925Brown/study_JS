const toogleMenu = () => {
  const btnMenu = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = document.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li");

  let animateInterval;
  let count = 0;

  let menuAnimate = function () {
    if (count < 100) {
      animateInterval = requestAnimationFrame(menuAnimate);
      count = count + 3;
      menu.style.transform = `translateX(${count}%)`;
    } else {
      count = 0;
      cancelAnimationFrame(animateInterval);
    }
  };

  btnMenu.addEventListener("click", () => {
    if (document.documentElement.clientWidth > 767) {
      animateInterval = requestAnimationFrame(menuAnimate);
    } else {
      menu.style.transform = "translateX(0)";
    }
  });

  let closeMenu = function () {
    menu.style.transform = "translateX(-100%)";
  };

  closeBtn.addEventListener("click", closeMenu);

  menuItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });
};

export default toogleMenu;
