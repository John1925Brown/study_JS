const inputsValidation = () => {
  // calc inputs validation
  const calcBlock = document.querySelector(".calc-block");
  const calcInputs = calcBlock.querySelectorAll("input");

  calcBlock.addEventListener("input", (event) => {
    event.target.value = event.target.value.replace(/\D/g, "");
  });

  // Questions block inputs validation
  const footerInputBlock = document.querySelector(".footer-form-input");
  const footerInputs = footerInputBlock.querySelectorAll("input");

  document.addEventListener("input", (event) => {
    let target = event.target;
    if (target.classList.contains("form-name")) {
      if (!/^[а-яА-ЯёЁ\ ]+$/.test(target.value)) {
        target.value = target.value.slice(0, -1);
      }
    }
    if (target.id === "form2-message") {
      if (!/^[\W0-9s]+$/.test(target.value)) {
        target.value = target.value.slice(0, -1);
      }
    }
    if (target.classList.contains("form-email")) {
      if (!/^[a-zA-Z0-9@\-_.'!*~]+$/.test(target.value)) {
        target.value = target.value.slice(0, -1);
      }
    }
    if (target.classList.contains("form-phone")) {
      if (!/^[0-9\-()+]+$/.test(target.value)) {
        target.value = target.value.slice(0, -1);
      }
    }
  });
  let inputsCorrection = () => {
    if (/^(-| )/g.test(event.target.value)) {
      // Удаляет пробелы и тире в начале строки
      event.target.value = event.target.value.slice(1);
      inputsCorrection(event.target);
    }

    if (/(-| )$/g.test(event.target.value)) {
      // Удаляет пробелы и тире в конце строки
      event.target.value = event.target.value.slice(0, -1);
      inputsCorrection(event.target);
    }
    event.target.value = event.target.value
      .replace(/-{2,}/g, "-")
      .replace(/ {2,}/g, " "); // Замена повторяющихся пробелов и дефисов на один
    if (event.target.id === "form2-name") {
      // Изменение имени на нужный формат
      let name =
        event.target.value[0].toUpperCase() +
        event.target.value.slice(1).toLowerCase();
      event.target.value = name;
    }
  };

  footerInputs.forEach((el) => {
    el.addEventListener("blur", inputsCorrection);
  });
};

export default inputsValidation;
