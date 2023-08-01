// ----------------------------------------Атрибуты
{
  const header = document.querySelector('h1'),
    link = document.querySelector('a'),
    img = document.querySelector('img');

  header.title = 'Заголовок'; // Можно напрямую влиять на атрибуты
  console.log(header.title);

  // выводит строку с парой ключ-значение всех атрибутов элемента изменить напрямую нельзя. В строке поменяется, в верстке - нет
  console.log(link.attributes); 

  // hasAttribute() возрвращает true, если есть такое атрибут, иначе false
  console.log(img.hasAttribute('src')); // true
  console.log(img.hasAttribute('img')); // false

  // getAttribute() возвращает значение атрибута
  console.log(img.getAttribute('alt')); // logo

  // setAttribute добавляет или изменяет атрибут
  img.setAttribute('alt', 'logotype'); 
  console.log(img.getAttribute('alt')); // logotype

  // removeAttribute удаляет атрибут
  img.removeAttribute('alt');
  console.log(img.getAttribute('alt')); // null

  // Data Атрибуты
  // Добавляет дата атрибут
  header.dataset.aboutHeader = 'Title'; // Атрибут data-about-header со значением 'Title'

  console.log(img.dataset); // Выводит объект с дата атрибутами

  img.addEventListener('mouseenter', (e) => {
    e.target.src = e.target.dataset.img; // Перезаписываем в src значение дата атрибута img
  });
}


// -------------------------------Регулярные выражения
{
  // Регулярное выражение записыватся между двух слешей
{  const reg = /привет/;

  console.log(reg.test('Всем привет, добро пожаловать')); // Вернет true, если находит подстроку
  console.log(/привет/.test('Всем привет, добро пожаловать')); // Вернет true, если находит подстроку
  console.log(/^привет/.test('Всем привет, добро пожаловать')); // Вернет true, если строка начинается с подстроки
  console.log(/привет$/.test('Добро пожаловать, всем привет')); // Вернет true, если строка заканчивается подстрокой
  console.log(/^привет$/.test('привет')); // Вернет true, строка такая же, как и подстрока
}
{
const str = `Привет друг, добро пожаловать, прошу проходите
мой номер телефона +375291234567 номер домофона 55
80291234567
80 (33) 123-45-67
80-44-123-45-67
девушка
дедушка
номера
номераааа
<div class="best">Hello World</div>
master@mail.ru
admin@gmail.com`;

const symbols = '* + . $ ^ / ? () [] {}';

const strEng = 'Hello friend, welcome, please pass';

let result = str.match(/п/); // Вернет массив
console.log(result);

result = str.match(/п/i); // При флаге 'i', не влияет регистр
console.log(result);

result = str.match(/п/ig); // При флаге 'g', вернет массив элементов
console.log(result);


let result2 = symbols.match(/\+/ig); // Спецсимволы необходимо экранировать через \
console.log(result2);

console.log(str.match(/./)); //Выводит первый символ
console.log(str.match(/./g)); // С флагом g, выводит все символы. кроме переносов строк

// [] нужны чтобы создать диапазон или для объединения символов
console.log(str.match(/[абв]/g)); // Выведет массив со всеми совпадениями

console.log(str.match(/[а-яА-Я]/g)); // Ищет все буквы на кириллице, также большие. ёЁ дописывается отдельно
console.log(strEng.match(/[a-z]/gi)); // Ищет все буквы на латинице, также большие

console.log(str.match(/[0-9]/g)); // Ищет все цифры
console.log(str.match(/[^0-9]/g)); // Символов ^ можно инвертировать регулярное выражение. Будет искать все кроме цифр
console.log(str.match(/\d/g)); // Экранированная d ищет только цифры
console.log(str.match(/\D/g)); // Экранированная D ищет все кроме цифр
console.log(str.match(/\s/g)); // Экранированная s ищет все 'пустые' символы
console.log(str.match(/\w/g)); // Экранированная w ищет все цифры, нижние подчеркивания и буквы, но только латинские
console.log(str.match(/\W/g)); // Экранированная W ищет то, что не ищет w

console.log(str.match(/телефона|домофона/gi)); // Символ | ищет обе подтстроки
console.log(str.match(/(теле|домо)фона/gi)); // Круглыми скобками можно группировать подстроки
console.log(str.match(/де(в|д)ушка/g)); 
console.log(str.match(/номера?/g)); // '?' указывает на то, что последний символ может быть, а может и не быть
console.log(str.match(/номера?/g)); // '?' указывает на то, что последний символ должен быть, но может быть много раз
console.log(str.match(/номера*/g)); // * работает как + и ? вместе
console.log(str.match(/номера{1,4}/g)); // {} указывает сколько раз может повториться символ

console.log(str.match(/о.о/g)); // Находит подстроку, которая начинается на о и заканчивается на о, а между ними один символ
console.log(str.match(/о.{1,3}о/g)); // Указываем сколько символов между буквами может быть
console.log(str.match(/<.*>/g)); // Ищем от < до > между ними (.*) сколько угодно символов. Но будет искать самую длинную подстроку
console.log(str.match(/<.*?>/g)); // Если поставить '?', то будет искать самые короткие сочитания
console.log(str.match(/номер(?= домофона)/g)); // positive lookahead. Ищет подстроку, после которой будет переданное значение
console.log(str.match(/номер(?! домофона)/g)); // negative lookahead. Ищет подстроку, после которой НЕ будет переданного значения
console.log(str.search(/номер/gi)); // Вернет индекс нахождения первого элемента регулярного выражения

const email = str.match(/\w+@\w+\.\w{2,3}/g);
// Разбор email: \w - только латинские низкие буквы, которых будет + (сколько угодно) раз. Знак @. Еще раз \w+. Экринированная точка(\.), \w{2,3} - 2-3 латинские буквы
console.log(email);

const phone = str.match(/(\+375|80)([-()\s]*(29|33|44))([-()\s]*\d){7}/g);
console.log(phone);

result = str.split(/[\s,]+/); // Получаем все слова без пробелов, табов и тд 
console.log(result);}
}

{
  const input = document.querySelector('input'),
    output = document.querySelector('.output');

  // input.addEventListener('input', (e) => {
  //   let text = input.value;
  //   output.textContent = text.replace(/(\w+)@(\w+\.\w{2,3})/g, (match, val1, val2) => val1.toUpperCase() + val2);
  //   // match - RegExp, val1 - первое значение в скобках(\w+), val2 - второе значение в скобках (\w+\.\w{2,3})
  // })

  input.addEventListener('input', () => {
    input.value = input.value.replace(/\d/, ''); // Ограничевает ввод
  });
}