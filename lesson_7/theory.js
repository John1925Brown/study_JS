// Объекты
let car = {
  model: 'mazda', // Свойства объекта. Имя свойства(ключ): 'значение свойства'
  year: 2006
};

let obj = new Object(); // Создание объекта с помощью конструктора

car.turbocharging = true; // Добавление свойства объекту
console.log(car);

obj.color = 'black';
console.log(car.model); // Обращение к свойства объекта
car.style = obj; // Вложили объект obj в свойство style в объекте car

car.ride = function (speed) { // Свойствами объекта могут являться функции
  console.log('Машина едет ' + speed + ' км/ч.');
}

car.stop = stop;

car.ride(60);

function stop() {
  console.log('Машина не едет.');
}

car['best place'] = 'city'; // Можно таким образом добавлять свойства объекту, но не самый лучший способ. Зато можно 2 раздельных слова использовать

let titleTrans = 'Коробка передач';
let bodyTrans = 'Автоматическая коробка передач';

car[titleTrans] = bodyTrans; // Можно делать ключом переменную и свойством так же

// Массивы

let arr = [1, 2, 3, 4]; // В массиве ключи заполняются автоматически с 0. Свойствами могту быть и объекты, функции, числа и тд

arr[0] = 'cat'; // Поменял 0-й элемент массива

console.log(arr[2]); // Обращение к элементу массива с индексом 2
console.log(arr.length); // Массив имеет свойство length

arr[arr.length] = 'dog'; // Таким образом можно добавить в конец ещё элемент, но это далеко не лучший способ
arr[10] = 'human'; // Добавляет элемент с определенным индексом, получится: 5 элементов, 5 пустых и один добавленный
console.log(arr);

let array2 = new Array(1, 2, 3); // Можно создавать массивы с помощью конструктора. Если передать при создании аргументы, то они станут элементами массива
let array3 = new Array(40); // А если передать только один аргумент, то это будет количество пустых элементов, то есть он станет длиной массива
console.log(array2);
console.log(array3);

arr.length = 30; // Можно самостоятельно менять длину массива
arr.length = 3; // Если передать длину массива меньше, чем элементов, то оставшиеся будут удалены

let array = ['Apple', 'Orange', 'banana'];

array.push('Kiwi', 'Pear'); // Добавляет в конец массива элементы
array.unshift('Papaya'); // Добавляет в начало массива элементы

console.log(array);

array.pop(); // Удаляет последний элемент массива
// console.log(array.pop()); // При этом метод возращает удаленный элемент
array.shift(); // Удаляет первый элемент массива
// console.log(array.shift()); // Также возращает удаленный элемент
array.sort(); // Сортирует массив по алфавиту, но чувствителен к регистру
console.log(array.slice(0, 2)); // Возвращает указанные элементы массива. Не изменяет массив, а создает копию

console.log(array.splice(1, 1, 'avocado', 'Papaya'));
//splice: с какого индекса удаляем, сколько элементов удаляем, какие элементы добавляем
console.log(array.join(' / ')); // Возвращает строку из элементов массива. Если передать аргумент, то он будут 'перегородкой' между элементаси
console.log(array.reverse()); // Возвращает обратный массив
console.log(array.concat(['Tomato', 'Cucumber'], 'beer')); // Соеденяет массивы
console.log(array);

// Перебор

let auto = {
  year: 2006,
  model: 'mazda',
  turbocharging: true,
  spetification: [],
  style: {
    color: 'blue'
  }
};

for (let key in auto) { // Перебираем объект
  console.log('Ключ: ' + key + '. Значение: ' + auto[key]);
}

console.log(Object.keys(auto).length); // Указывает количество элементов в объекте. Напрямую через lenght не получится

delete auto.turbocharging; // Удаляет элемент объекта
console.log(auto);

// Методы перебора массива

let newArr = [1, 22, 33, 41, 555];

for (let i = 0; i < newArr.length; i++) {
  console.log(newArr[i]);
}

newArr.forEach(function (item, i, array) {
  console.log(item, i, array);
}
);

for (let item of newArr) { // Используя for/of, будут выводиться сами элементы массива
  console.log(item);
}

for (let item in newArr) { // Используя for/in, будут выводиться индексы массива
  console.log(item);
}

delete newArr[2]; // Удаление определенного элемента массива, оставляет пустое место
console.log(newArr);
ы