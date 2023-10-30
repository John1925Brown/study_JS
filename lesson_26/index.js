// ------------------------JSON
// {
// const smartphone = {
//   brand: 'samsung',
//   screen: 5.5,
//   rom: 128,
//   ram: 4,
//   gps: true,
//   sencor: ['Accelerometer', 'E-compas', 'FingerPrintSencor', 'Gyroscope'],
//   camera: {
//     back: [32, 5, 8],
//     front: 16
//   }
// }

// const jsonSmartphone = JSON.stringify(smartphone); 
// console.log(JSON.parse(jsonSmartphone));
// }

//--------------------------AJAX

const select = document.querySelector('#cars');
const output = document.querySelector('#output');

console.log(select);
//   {
// const request = new XMLHttpRequest(); // экземпляр XMLHttpRequest. Будет объектом

// request.open('GET', './cars.json'); // настройка ajax запроса(метод отправки, url)

// //http запросы состоят из head и body
// request.setRequestHeader('Content-type', 'aplication/json'); // создание head http запроса(имя заголовка, значение заголовка)

// request.send(); // Открывает соединение, отправляет запрос, параметром передает данные на сервер. Принимает body

// request.addEventListener('readystatechange', e => {
//   console.log(e);
// }); 
// // Происходит несколько раз за зарпос. Срабатывает, когда меняется свойство readyState
// // Имеет 5 состояний: 0 - объект только создан, 1 - вызван open
// // 2 - вызван метод send и получен заголовок, 3 - загружается body и responceText может содержать часть данных
// // 4 - завершено, приходит ответ сервера

// {
// // request.addEventListener('loadstart', e => {
// //   console.log(e);
// // }); // просто обозначает, что запрос начат. Передавать нужно до создания заголовка

// // request.addEventListener('progress', e => {
// //     console.log(e);
// //   }); // Срабатывает, когда от сервера приходит пакет данных

// // request.addEventListener('abort', e => {
// //   console.log(e);
// // }); // Можно увидеть, если произошла остановка запроса с помощью метода abort

// // request.addEventListener('load', e => {
// //   console.log(e);
// // }); // Срабатывает, если событие произошло без ошибок

// // request.addEventListener('error', e => {
// //   console.log(e);
// // }); // Срабатывает, если произошла ошибка

// // request.addEventListener('loadend', e => {
// //   console.log(e);
// // }); // Отслеживает сразу 3 события: load, error, abort
// }
// }

select.addEventListener('change', e => {
  const request = new XMLHttpRequest(); 

  request.open('GET', './cars.json');

  request.setRequestHeader('Content-type', 'aplication/json'); 

  request.send();

  request.addEventListener('readystatechange', e => {
    if(request.readyState === 4 && request.status === 200){
      // request.status  числовое значения от состояния http ответа сервера
      // request.statusText  текстовое содержание состояния сервера
      // request.responseText тело ответа сервера

      const data = JSON.parse(request.responseText);
      console.log(data); 
      data.cars.forEach(item => {
        if(item.brand === select.value){
          const {brand, model, price} = item;
          output.innerHTML = `Авто ${brand} ${model} ${price}`
        } else{
          output.innerHTML = 'Произошла ошибка'
        }
      });
    }
  }); 
})