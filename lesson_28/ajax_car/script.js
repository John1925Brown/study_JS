document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const select = document.getElementById("cars"),
    output = document.getElementById("output");

  const choiceCar = (dataCar) => {
    return new Promise((resolve, reject) => {
      select.addEventListener("change", () => {
        const request = new XMLHttpRequest();
        request.open("GET", "./cars.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();
        request.addEventListener("readystatechange", () => {
          if (request.readyState !== 4) {
            return;
          }
          const data = JSON.parse(request.responseText);
          if (request.status === 200) {
            data.cars.forEach((item) => {
              if (item.brand === select.value) {
                resolve(item);
                const { brand, model, price } = item;
                output.innerHTML = `Тачка ${brand} ${model} <br>
                                Цена: ${price}$`;
              }
            });
          } else {
            reject(request.statusText);
          }
        });
      });
    });
  };

  choiceCar()
    .then() // Не описал изнутри, так как, когда описывал( передавал data и передавал forEach из функции, то select.value записывалось и не менялось, соотвественно, менял select, а данные выводились те же )
    .catch((err) => {
      console.error(err);
      output.innerHTML = "Произошла ошибка";
    });
});
