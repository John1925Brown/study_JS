const output = document.querySelector(".output");

const getUsers = () => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users");

    request.addEventListener("readystatechange", () => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        const responce = JSON.parse(request.responseText);
        resolve(responce);
      } else {
        reject(request.statusText);
      }
    });
    request.send();
  });
};

getUsers().then((data) => {
  console.log(data);
});

// const output = document.querySelector('.output');

// const getData = (url) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest(); // Создание запроса
//     request.open('GET', url); // Настройка запроса
//     request.addEventListener('readystatechange', () => { // При изменении readyState запускается событие
//       if(request.readyState !== 4){
//         return;
//       }
//       if(request.status === 200){
//         const responce = JSON.parse(request.responseText); // Переменная - данные, полученные с сервера
//         resolve(responce); // Функция, которая обрабатывает данные
//       } else{
//         reject(request.statusText); // Описание ошибки
//       }
//     });
//     request.send(); // Метод для запроса
//   });
// };

// // const outputPhotos = (data) => { // Функция для вывода случайной картинки в div
// //   const random = Math.floor(Math.random() * data.length);
// //   const obj = data[random];
// //   output.innerHTML = `<h2>${obj.title}</h2>
// //                       <img src = '${obj.thumbnailUrl}'>`;
// // };

// const outputPhotos = (data) => { // Функция для вывода картинок(в примере с Promise.all)
//   data.forEach(el => {
//     output.insertAdjacentHTML('beforebegin',
//     `<h2>${el.title}</h2>
//     <img src = '${el.thumbnailUrl}'>`);
//   });
// };

// const urlPhoto = 'https://jsonplaceholder.typicode.com/photos';

// const oneImg = getData('https://jsonplaceholder.typicode.com/photos/1');

// const twoImg = getData('https://jsonplaceholder.typicode.com/photos/2');

// // getData(urlPhoto).then(outputPhotos)
// //   .catch(error => {
// //     console.error(error);
// //   })
// // ;

// Promise.all([oneImg, twoImg]) // Выводится только после ответа всех промисов, суть примера в том, что всегда будут выводиться в одном порядке
//   .then(outputPhotos)
//   .catch(err => console.error(err));
