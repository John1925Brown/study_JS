// Событие, которое делает так, чтобы скрипт подгружался, только когда вся страница загрузится. 
// Вешается в самом начале, функция закрывается в конце документа
document.addEventListener('DOMContentLoaded', function () {
  let square = document.querySelector('.square');

  // Слушатель события. Первый параметр - событие, второй - функция, которая обрабатывает событие
  square.addEventListener('click', function () {
    console.log('Клик');
  })
  // square.addEventListener('click', function () { // Можно вешать несколько обработчиков на одно событие
  //   console.log('Клик 2');
  // })

  let count = 0;

  let clicked = function () {
    count++;
    if (count === 3) {
      square.removeEventListener('click', clicked); // Удаляет событие
    }
    console.log('Один клик');
  }

  square.addEventListener('click', clicked);


  let eventFunc = function (event) { // Event - объект, само событие, имеет различные свойства, как type, target и тд
    console.log(event.type);
  }

  square.addEventListener('click', eventFunc);
  // square.addEventListener('mousemove', eventFunc); // Движение мышью по цели
  // square.addEventListener('mouseup', eventFunc); // Отпустить кнопки мыши
  // square.addEventListener('mousedown', eventFunc); // Нажать на кнопку мыши
  // square.addEventListener('mouseenter', eventFunc); // Навел мышью на цель, не срабатывает с дочерними элементами
  // square.addEventListener('mouseleave', eventFunc); // Ушел курсором с цели, не срабатывает с дочерними элементами
  // square.addEventListener('mouseover', eventFunc); // Навел мышью на цель, срабатывает с дочерними элементами
  // square.addEventListener('mouseout', eventFunc); // Ушел курсором с цели, срабатывает с дочерними элементами

  // document.querySelector('#text').addEventListener('input', eventFunc); // Срабатывает, когда меняется value, то есть, когда изменяется содержимое
  // document.querySelector('#text').addEventListener('change', eventFunc); // Срабатывает, когда убирается фокус с инпута, при том, что value меняется
  // document.querySelector('#text').addEventListener('keydown', eventFunc); // Нажать на клавишу
  // document.querySelector('#text').addEventListener('keyup', eventFunc); // Отпустить клавишу
  document.querySelector('#text').addEventListener('focus', eventFunc); // Срабатывает, когда кликаем на элемент
  document.querySelector('#text').addEventListener('blur', eventFunc); // Срабатывает, когда теряем фокус

  document.querySelector('#link').addEventListener('click', function (e) {
    e.preventDefault(); // Удаляет стандартные событие. Тут - переход по ссылке. Можно написать свои события
    console.log('click');
  })
  // document.addEventListener('contextmenu', function (e) { // Убирает стандартное контекстное меню при нажатии правой кнопкой мыши
  //   e.preventDefault();
  // })

  let clickElem = null;

  function greenHundler(e) {
    if (clickElem) {
      clickElem.classList.remove('green');
    }
    clickElem = e.currentTarget;
    clickElem.classList.add('green');
  }

  document.querySelector('.event__btn').addEventListener('click', greenHundler, true); // Третий параметр необходим для захвата события
  document.querySelector('.circle').addEventListener('click', greenHundler, true);
  document.querySelector('.square').addEventListener('click', greenHundler, true);
  document.querySelector('body').addEventListener('click', greenHundler, true);



  // window.onbeforeunload = function () { // Вызывает alert, не закрывая сразу страницу
  //   return ' Вы уверены?'; // В большинстве случаев браузер перехватывает это сообщение и заливает свое
  // }

});