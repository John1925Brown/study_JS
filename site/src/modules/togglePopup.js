const togglePopup = () => {
  const popUp = document.querySelector(".popup");
  const popUpBtns = document.querySelectorAll(".popup-btn");

  document.addEventListener("click", (event) => {
    let target = event.target;
    if (popUp.style.display === "block") {
      if (target.classList.contains("popup-close")) {
        popUp.style.display = "none";
      }
      target = target.closest(".popup-content");
      if (!target) {
        popUp.style.display = "none";
        target = event.target;
      }
    }

    if (target.classList.contains("popup-btn")) {
      popUp.style.display = "block";
    }
  });
};

export default togglePopup;
