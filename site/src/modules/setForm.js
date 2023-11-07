const setForm = () => {
  const errorMessage = "Что-то пошло не так...";

  const sucsessMessage = "Спасибо! Мы скоро с вами свяжемся";
  let statusMessage = document.createElement("div");
  statusMessage.classList.add("preloader");
  const forms = Array.from(document.querySelectorAll("form"));

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      let target = e.target;
      e.preventDefault();

      if (target.tagName === "FORM") {
        if (target.id === "form3") {
          statusMessage.style.color = "white";
        }

        target.appendChild(statusMessage);

        const formData = new FormData(target);
        let body = {};

        formData.forEach((val, key) => {
          body[key] = val;
        });

        postData(body)
          .then((response) => {
            if (response.status !== 200) {
              throw new Error("Status network not 200");
            }

            target.reset();
            statusMessage.classList.remove("preloader");
            statusMessage.textContent = sucsessMessage;
          })
          .catch((err) => {
            statusMessage.classList.remove("preloader");
            console.error(err);
            statusMessage.textContent = errorMessage;
          });
      }
    });
  });

  const postData = (body) => {
    return fetch("server.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };
};

export default setForm;
