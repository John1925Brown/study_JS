const form = document.querySelector(".form");
const usd = document.querySelector(".input__usd");
const eur = document.querySelector(".input__eur");
const usdRadio = document.querySelector(".usd");
const eurRadio = document.querySelector(".eur");
const button = document.querySelector(".btn");
const url = "http://api.currencylayer.com/";

form.addEventListener("change", (e) => {
  if (e.target === eurRadio) {
    eur.disabled = false;
    usd.disabled = true;
  }
  if (e.target === usdRadio) {
    eur.disabled = true;
    usd.disabled = false;
  }
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
