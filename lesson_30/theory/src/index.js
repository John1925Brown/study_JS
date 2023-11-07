// const moduleOne = require("./moduleOne");
// const moduleTwo = require("./moduleTwo"); // В переменных содержится то, что экспортировали
// moduleOne();
// moduleTwo();

// Но нужно все собрать в один bundle

// Новые стандарты экспорта и импорта

// import { one as num, two as twoNum } from "./moduleOne"; // Импорт определенных модулей
// console.log(num, twoNum);

import * as obj from "./moduleOne"; // Импорт всех модулей
import moduleTwo from "./moduleTwo";

moduleTwo();

console.log(obj);

obj.eat();
console.log(obj.two);
