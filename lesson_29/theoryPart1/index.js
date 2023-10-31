const select = document.querySelector('#cars');
const output = document.querySelector('#output');

select.addEventListener('change', e => {
  fetch('./cars.json', { // fetch возвращает Promise. Вторым параметром может принимать объект с настройками 
    method: 'GET', // Метод. По умолчанию GET
    mode: 'same-origin', // Режим правил ограничений домена. same-origin(по умолчанию) выполняется только в одном домене, cors - можно создать запросы к сторонним сайтам
    cache: 'default', // Режим кеширования
    credentials: 'same-origin', // Указывает, можно ли передавать учетные данные вместе с запросом
    headers: { // Объект, где перечисляем все заголовки
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // Поведение при перенаправлении. follor- ok, error - ошибка, manual - вручную
    referrer: 'client', // Указываем откуда пришел запрос
    // body для body из POST-запросов
  })
  .then((responce) => { // Принимаю Promise, возвращенный fetch и обрабатываю его далее
    if(responce.status !== 200){
      throw new Error('Status network not 200'); 
// throw создает исключения, то есть, если не проходит условие, попадаем на throw и создаем ошибку, сразу переходя в ближайший catch и обрабатывая ее
    }
    return responce.json(); // Метод отработает как JSON.parse(responce)
  })
  .then(responce => {
    responce.cars.forEach(item => {
      if(item.brand === select.value){
        const {brand, model, price} = item;
        output.innerHTML = `Авто ${brand} ${model} ${price}`
      }
    });
  })
  .catch(err => {
    console.error(err);
  })
});
