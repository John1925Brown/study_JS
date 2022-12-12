// Функции высшего порядка
// function (callback) { // Функция высшего порядка - функция, которая, в качестве аргумента, принимает другую функцию, вызывая ее внутри
//   callback();
// }

// function funcClosest(args) { // Либо возвращает
//   const close = null;
//   return function () {
//     Применяем close и/или args
//   }
// }

// Если функция в аргументах, то это коллбэк

// function (callback) { // Если возвращаемая функция имеет тот же смысл, что и функция в аргументе, то это называется обертка (wrapper)
//   return function () {
//     callback();
//   }
// }

function foo(data, callback) { // Функция foo - функция высшего порядка, так как она принимает коллбэк
  if (typeof data === 'string') {
    callback(data, 'строка')
  } else {
    callback(data, 'не строка')
  }
}

foo(213, (db, res) => {
  console.log(db, res);
})

const bar = function (a) {
  const b = 'второго замкнуло';
  return function (c) {
    console.log(a, b, c);
  }
}

const foo = bar('Первый замкнут');

console.log(foo); // После вызова вернется функция, которую bar возращает(с аргументом 'c') и будет записана функция в foo

foo('Третий не замкнут');

const foo = function (a) {
  const x = a * a;
  return function (b) {
    const y = a / b;
    return function (c) {
      return x + y + c;
    }
  }
}

const foo1 = foo(4);
console.log("foo1:" + foo1);

const foo2 = foo1(2);
console.log("foo2:" + foo2);

const foo3 = foo2(3);
console.log("foo3:" + foo3);



const foo = function () {
  const arr = [];
  return function (a) {
    arr.push(a);
    console.log(arr);
  }
}

const foo1 = foo();
const foo2 = foo();

foo1(1);
foo2(2);

foo1('asdas');
foo2(['das', 'w', 'q', 'e']);

foo1('1');
foo1([212312, 2, 4]);
foo1({ a: 1 });
foo2('2d');


const foo = function () { // Сохранениев кэш без перезаписи
  const cache = {};
  return function (key) {
    if (cache[key]) {
      console.log(key + ' Уже есть');
    } else {
      cache[key] = 'val: ' + key;
      console.log(cache);
    }
  }
}


const foo1 = foo();
const foo2 = foo();

foo1(5);
foo1('Hello');
foo1('5');
foo2(5);
foo2(6);
foo2('Hello');
foo2('5');
foo2(5);

// Логирование
const logger = function (cb) {
  return function () {
    const args = Array.prototype.slice.call(arguments);
  }
}

function foo() {
  const args = Array.prototype.slice.call(arguments);
  console.log(args);
}

foo(123, 234, 345);

const logger = function (cb) {
  return function () {
    const args = Array.prototype.slice.call(arguments);
    const res = cb.apply(null, args);
    console.log("Вызов функции: " + cb.name + ". Результат вызова: " + res);
    return res;
  }
}

const sum = function (a, b, c) {
  return a + b + c;
}

const sumLog = logger(sum);

sumLog(2, 4, 6);