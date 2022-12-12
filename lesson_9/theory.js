console.log(document.getElementsByTagName('h1')); // Получение элементов по тэгу
console.log(document.querySelector('head')); // Получение элемента по тэгу, самый первый
console.log(document.querySelector('.head')); // Получение элемента по классу


const mainHead = document.querySelector('.head'); // Выводит содержимое аттрибута
console.log(mainHead.getAttribute('title'));

const newHead = document.querySelector('.head');
const newHeadStyle = document.querySelector('.head');
newHeadStyle.setAttribute('title', 'Новый заголовок'); // Добавляем новый аттрибут
console.log(mainHead);

// Все элементы - объекты, многие аттрибуты по умлочанию являются свойствами объекта
mainHead.title = 'Самый новый title';
// mainHead.className = 'Head__green'; -- Есть минус в том, что остается только этот класс, а все остальные стираются
console.log(mainHead.title);
console.log(mainHead.className);

console.log(mainHead.classList); // Удобнее пользоваться classList
mainHead.classList.add('head__red'); // Добавить класс
console.log(mainHead.classList);
mainHead.classList.remove('head__black'); // Удалить класс
console.log(mainHead.classList);
console.log(mainHead.classList.contains('head__black')); // Сделать проверку: есть ли класс у этого элемента
mainHead.classList.toggle('head__black'); // Метод удаляет/добавляет класс в зависимости от того есть он или нет
console.log(mainHead.classList.contains('head__black'));

console.log(mainHead.style); // DOM-дерево заполняется из верстки. Можно из js напрямую воздействовать на это свойство
mainHead.style.color = 'blue'; // Меняем цвет текста
document.body.style.backgroundColor = 'yellow'; // Если менять через js, то свойства пишем CamelCase, а не как в css
document.body.style.marginTop = '300px';

const computedStyleMainHead = getComputedStyle(mainHead); // Полностью показать все стили или определенный
// console.log(computedStyleMainHead);
console.log(computedStyleMainHead.fontSize);
console.log(computedStyleMainHead.font);
const computedStyleMainHeadColor = getComputedStyle(mainHead, 'style'); // Цвет элемента
console.log(computedStyleMainHeadColor.color);

// querySelector можно использовать не только на document, но и на самих элементах
// Получаем все элементы внутри с классом head
// const hgroup = document.querySelector('hgroup'); 
// const head = document.querySelectorAll('.head');
//Так как head - дочерний элемент, можно упростить код
const head = document.querySelectorAll('hgroup>.head');
console.log(head);
