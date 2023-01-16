let book = document.querySelectorAll('.book');
let books = document.querySelector('.books');
let adv = document.querySelector('.adv');
let link = document.querySelectorAll('a');
let ul = document.querySelectorAll('ul');
let listSecElems = ul[0].querySelectorAll('li');
let listFifElems = ul[5].querySelectorAll('li');
let listSixElems = ul[2].querySelectorAll('li');
let titles = document.querySelectorAll('h2');


const arrBook = Object.keys(book).sort((last, next) => {
  if (book[last].firstElementChild.textContent > book[next].firstElementChild.textContent) {
    return 1;
  } else {
    return -1;
  }
});

for (let i = 0; i < arrBook.length; i++) {
  books.append(book[arrBook[i]]);
}

let newTitle = document.createElement('a'); // Изменение заголовка
newTitle.href = href = "https://github.com/azat-io/you-dont-know-js-ru/blob/master/up%20%26%20going/README.md#%D0%92%D1%8B-%D0%BD%D0%B5-%D0%B7%D0%BD%D0%B0%D0%B5%D1%82%D0%B5-js-%D0%9D%D0%B0%D1%87%D0%BD%D0%B8%D1%82%D0%B5-%D0%B8-%D0%A1%D0%BE%D0%B2%D0%B5%D1%80%D1%88%D0%B5%D0%BD%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%D1%81%D1%8C";
newTitle.target = "_blank";
newTitle.textContent = "Книга 3. this и Прототипы Объектов";
link[4].replaceWith(newTitle);

adv.style.display = "none"; // Убрать рекламу

document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)"; // Поменять фон

ul[0].prepend(listSecElems[10]); // Порядок глав в книгах
ul[0].prepend(listSecElems[2]);
ul[0].prepend(listSecElems[9]);
ul[0].prepend(listSecElems[7]);
ul[0].prepend(listSecElems[5]);
ul[0].prepend(listSecElems[4]);
ul[0].prepend(listSecElems[8]);
ul[0].prepend(listSecElems[6]);
ul[0].prepend(listSecElems[3]);
ul[0].prepend(listSecElems[1]);
ul[0].prepend(listSecElems[0]);

ul[5].prepend(listFifElems[10]);
ul[5].prepend(listFifElems[8]);
ul[5].prepend(listFifElems[5]);
ul[5].prepend(listFifElems[7]);
ul[5].prepend(listFifElems[6]);
ul[5].prepend(listFifElems[2]);
ul[5].prepend(listFifElems[4]);
ul[5].prepend(listFifElems[3]);
ul[5].prepend(listFifElems[9]);
ul[5].prepend(listFifElems[1]);
ul[5].prepend(listFifElems[0]);

let newCharter = listSixElems[0].cloneNode(true); // Добавление главы
newCharter.textContent = "Глава 8: За пределами ES6";
listSixElems[9].before(newCharter);
