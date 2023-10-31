const form = document.querySelector(".form");

const usd = document.querySelector(".input__usd");
const eur = document.querySelector(".input__eur");

const usdRadio = document.querySelector("#usd");
const eurRadio = document.querySelector("#eur");

const button = document.querySelector(".btn");

let url = "http://api.exchangeratesapi.io/v1/";

function params(paramsObj) {
  return new URLSearchParams({
    access_key: "851e121f750e007626ba0b42d7a468af",
    ...paramsObj,
  });
}

function getLatest(options) {
  fetch(`${url}/latest?${params(options)}`)
    .then((reponse) => {
      return reponse.json();
    })
    .then((response) => {
      console.log(response);
    });
}

getLatest();

// form.addEventListener('change', (e) => { // Отвечает за переключение заглушек и радио
//   if(e.target === eurRadio){ // EUR => USD
//     eur.disabled = false;
//     usd.disabled = true;

//   }
//   if(e.target === usdRadio){ // USD => EUR
//     eur.disabled = true;
//     usd.disabled = false;
//   }
// });

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   countFunc()
//   .then(responce => {
//     if(responce.status !== 200){
//       throw  new Error(`Не удалось, ответ: ${responce.status}`);
//     }
//     return responce.json();
//   })
//   .then(responce => {
//     console.log(responce);
//   })
//   .catch(err => {
//     console.error(err);
//   })
// })

// const countFunc = () => {
//   return fetch('http://api.exchangeratesapi.io/v1/latest?851e121f750e007626ba0b42d7a468af');
// };
