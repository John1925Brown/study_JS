document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const select = document.getElementById("cars");
  const output = document.getElementById("output");
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
            const selectedCar = data.cars.find((item) => item.brand === select.value);
            if (selectedCar) {
              const { brand, model, price } = selectedCar;
              resolve(selectedCar);
              output.innerHTML = `Тачка ${brand} ${model} <br>Цена: ${price}$`;
            } else {
              reject("Машина не найдена");
            }
          } else {
            reject(request.statusText);
          }
        });
      });
    });
  };
  choiceCar(select.value)
    .then((data) => {
      // Обработка данных, если нужно
    })
    .catch((err) => {
      console.error(err);
      output.innerHTML = "Произошла ошибка";
    });
});