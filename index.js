let myBtn = document.getElementById('myBtn');
let inputText = document.getElementById('myText');
let text = document.getElementById('text');

// localStorage - объект

// Обращение к localStorage напрямую
// let showText = function () {
//   text.textContent = localStorage.newText;
// };

// myBtn.addEventListener('click', function () { // Значение остается в localStorage
//   localStorage.newText = inputText.value;
//   showText();
// });

//sessionstorage: значение хранится только на время сессии

// Обращение к localStorage через методы

// let showText = function () {
//   text.textContent = localStorage.getItem('memory'); // Достаем значение из localStorage
// };

// myBtn.addEventListener('click', function () {
//   localStorage.setItem('memory', inputText.value); // Передаем значение. Первый параметр - ключ, второй = значение
//   showText();
// });

// localStorage.removeItem('memory'); // Удаляет определенные данные

// Cookie работают только через http-сервер. Cookie содержатся в объекте document
// Чтобы сохранить, надо строкой передать ключ и значение, делается без пробелов

// С одним куки - один ключ. Значения перезаписываются
// document.cookie = 'ключ=значение';
// document.cookie = 'ключ2=значение2';
// document.cookie = 'ключ3=значение3';
// document.cookie = 'ключ=значение4';

// document.cookie = 'hope=life; expires=Mon, 1 May 2028 00:00:00 GMT'; // Дата, до которой будет хранится куки

// Для cookie обычно пишут функцию
// Для того, чтобы скрыть данные, используют кодировку UTF-8
function setCookie(key, value, year, month, day, path, domain, secure) {
  let cookieStr = encodeURI(key) + '=' + encodeURI(value); // encodeURI используется чтобы закодировать. decodeURI - обратно
  if (year) {
    const expires = new Date(year, month, day);
    cookieStr += '; expires' + '=' + expires.toGMTString();
  }

  cookieStr += path ? '; path' + '=' + encodeURI(path) : '';
  cookieStr += domain ? '; domain' + '=' + encodeURI(domain) : '';
  cookieStr += secure ? '; secure' : '';

  document.cookie = cookieStr;
};

setCookie('Привет', 'мир');
setCookie('Любимый праздник', 'Новый год', 2024, 1, 1);

console.log(decodeURI(document.cookie)); 
