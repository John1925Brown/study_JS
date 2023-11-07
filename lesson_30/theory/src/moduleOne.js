// function moduleOne() {
//   console.log("hello World");
// }

// module.exports = moduleOne; // Показываем что именно экспортировать

// Новые стандарты экспорта и импорта

// export let a = 3; // Экспортировать при создании

let a = 3;
let b = 5;

let run = function () {
  console.log("go");
};

export function eat() {
  console.log("eat");
}

export class Car {
  constructor(brand) {
    this.brand = brand;
  }
}

export { a as one, b as two, run };
