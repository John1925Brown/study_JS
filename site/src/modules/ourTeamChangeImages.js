const ourTeamChangeImages = () => {
  let teammatesBlock = document.querySelector("#command");
  teammatesBlock.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.classList.contains("command__photo")) {
      event.target.alt = event.target.src;
      event.target.src = event.target.dataset.img;
    }
  });
  teammatesBlock.addEventListener("mouseout", (event) => {
    let target = event.target;
    if (target.classList.contains("command__photo")) {
      event.target.src = event.target.alt;
    }
  });
};

export default ourTeamChangeImages;
