const calc = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcDay = document.querySelector(".calc-day");
  const calcCount = document.querySelector(".calc-count");
  let totalValue = document.querySelector("#total");

  const countSum = () => {
    let total = 0;
    let countValue = 1;
    let dayValue = 1;
    let typeValue = calcType.options[calcType.selectedIndex].value;
    let squareValue = +calcSquare.value;

    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }
    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }
    if (typeValue && squareValue) {
      total = price * typeValue * squareValue * countValue * dayValue;
      const priceAnimate = () => {
        let price = 0;
        let interval = setInterval(() => {
          price += 1;
          if (price === total) {
            clearInterval(interval);
          }
          totalValue.textContent = price;
        }, 10);
      };
      priceAnimate();
    }
  };

  calcBlock.addEventListener("change", (event) => {
    const target = event.target;
    if (target.matches("select") || target.matches("input")) {
      countSum();
    }
  });
};

export default calc;
