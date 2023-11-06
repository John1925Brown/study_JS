const form = document.querySelector(".form");
const usd = document.querySelector(".input__usd");
const eur = document.querySelector(".input__eur");
const usdRadio = document.querySelector(".usd");
const eurRadio = document.querySelector(".eur");
const button = document.querySelector(".btn");
const formInputs = Array.from(document.querySelectorAll("input[type=text]"));
const url = "http://api.currencylayer.com/";

form.addEventListener("change", (e) => {
  formInputs.forEach((elem) => {
    if (elem.classList.value === `input__${e.target.value}`) {
      elem.disabled = false;
    } else {
      elem.disabled = true;
    }
  });
});

function getParams(paramsObj) {
  return new URLSearchParams({
    access_key: "f7fcedaeccaa01e4d20ff0203d4ff215",
    ...paramsObj,
  });
}

function eurToUsd(options) {
  fetch(`${url}live?${getParams(options)}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      usd.value = response.quotes.EURUSD * eur.value;
    });
}

function usdToEur(options) {
  fetch(`${url}live?${getParams(options)}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      eur.value = response.quotes.USDEUR * usd.value;
    });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (eurRadio.checked) {
    eurToUsd({ source: "EUR" });
  }
  if (usdRadio.checked) {
    usdToEur({ source: "USD" });
  }
});
