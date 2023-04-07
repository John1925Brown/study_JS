{
const map = new Map(); //-------------------Создание коллекции map
// Коллекция map хранит пары: ключ: значение
// Разница от объекта в том, что ключом может быть любой тип данных, а не только строка, как в объектах

// С помощью set можно добавлять в коллекцию данные
map.set('car', {brand: 'mazda', model: 3}); // ключ - car, значение - объект
map.set(25, '25');// ключ - 25(тип number), значение - 25(string)
map.set(null, null);// ключ - null, значение - null

const objTest = {
  name: 'Max',
  age: 30
}

map.set(objTest, 123); // ключ - объект objTest, значение - 123
console.log(map);

// Значения из коллекции можно получать методом get:
console.log(map.get(objTest)); // Выведет 123

// У коллекции есть метод size. В объектах нет метода length
console.log(map.size); // Выведет количество ключей объекта. Грубо говоря, length
}

{
// Можно добавлять значения сразу при вызове конструктора:
// Добавляется в виде массива, который будет содержать массивы данных: ключ: значение
const newObjMap = new Map([
  [2019, 'summer'],
  ['joker', 1]
]);
console.log(newObjMap);


// К коллекции применяются rest, spread, Array.from() и тд:
const arr = Array.from(newObjMap);
console.log(arr); // Вернет многомерный массив: (2) [Array(2), Array(2)]

newObjMap.forEach((value, key, index) => {
  console.log(`Ключ - ${key}, значение - ${value}`); 
});
}


{
const collectMap = new Map([
  ['hello', 'world'],
  ['year', 1812]
]);

collectMap.delete('year'); // Удаление определенного элемента по ключу
console.log(collectMap); // Коллекция будет с одним элементом

collectMap.clear(); // Удаление всех элементов
console.log(collectMap); // Пустая коллекция
}


{// ------------------------------ Коллекция Set
// Нужна для хранения уникальных значений

const cars = new Set(); // Создание коллекции Set. Как и Map, через конструктор
// Как и в Map, ключом может быть любой тип данных, можно добавлять элементы сразу при создании
// Тоже является итерируемой структурой данных, то есть можно перебирать циклами

cars.add('Mazda');
cars.add('Volvo');
cars.add('BMW');

cars.add('Volvo'); // Дублированные элементы не добавятся
console.log(cars); // Set(3) {'Mazda', 'Volvo', 'BMW'}

cars.delete('Volvo'); // Удаление. Clear также присутсвует


console.log(cars.size); // Свойство size является геттером

console.log(cars.has('Mazda')); // Есть ли такой ключ(), вернет true

}



