{
// rest-оператор. Берет все элементы, которые остались и помещает их в массив
function test(a,b,...arr) {
  console.log(arr);
  }
test('', 0, true, 123, 'asd'); // a = '', b = 0, arr = [true, 123, 'asd']
}

{ //--------------------------------------------------spread-параметр
let array = [true, 123, 'asd'];
let array2 = [false, 1];

function test(a, b, c, d, e) {
  console.log(a, b, c);
  console.log(d, e);
  }

  // Ранее, чтобы получить данные массива, нужно было делать так:
  // test(array[0], array[1], array[2]);
  // Сейчас можно использовать spread-параметр: ... + имя массива, который необходимо разобрать

test(...array); // Параметры будут переданы по одному: true, 123, 'asd';

// Можно передать несколько массивов
test(...array, ...array2); // true, 123, 'asd'; false, 1;

// Можно из нескольких массивов собирать один, при этом, добавляя дополнительные значения
let array3 = [null, ...array, 32, ...array2, '12'];
console.log(array3); // [true, 123, 'asd', false, 1]

// Также можно из Nodelist преобразовывать в массив
// Полезно, когда необходимо свойсво, которого нет в Nodelist

let allImg = document.querySelectorAll('img');
console.log(allImg); // 
let allImgArr = [...allImg]; // NodeList [img, img, img, img]
console.log(allImgArr); // [img, img, img, img]
}

// -----------------------------------------------Деструктуризация
{
const car = {
  brand: 'mazda',
  model: 3,
  color: 'red',
  options: {
    abs: true
  }
}

// Необходимо достать свойства из поместить их в отдельные переменные
// const brand = car.brand;
// const model = car.model;
// const color = car.color;

const {brand, model, color} = car; // Это есть деструктуризация объекта
console.log(brand, model, color); // mazda 3 red


// Если есть вложенность:
let {options:{abs}} = car;
console.log(abs); // true

// Можно задавать новую переменную со своим именем
let {options:{abs: absCar}} = car;
console.log(absCar); // true

// Можно указать значение по умолчанию
let {carInsp = true} = car;
console.log(carInsp); // true. Если бы значение уже было в объекте, то присвоилось бы оно. Так как нет, выводится по умолчанию

// Со вложенными свойствами так не выйдет - выбъет undefined, но можно сделать так:
let {options: {neon= false} = {}} = car;
console.log(neon); // false



{
const createCar = ({brand = 'Не указано', color = 'Не указано', model = 'Не указано'}) => { // Задаются значения по умолчанию
  console.log(`
  Запущено производство ${brand} ${model}
  цвет ${color}`);
};

createCar({ // Вызывается функция, в нее передается объект
  brand: 'mazda',
  model: 3,
  color: 'red',
  options: {
    abs: true
  }
});



{
const car = {
  brand: 'mazda',
  model: 3,
  color: 'red',
  options: {
    abs: true
  }
}

const {brand, ...otherParams} = car; // С помощью rest-оператора можно вытягивать остальные параметры(в массив)
console.log(brand, otherParams);
}



{// -----------------------------------Деструктуризация массивов
const cars = ['bmw', 'mazda', 'opel']; 
// Синтаксис тот же, только скобки квадратные

const [a, b, c, d = 'audi'] = cars; // Также работают значения по умолчанию
console.log(a, b, c, d); // 'bmw', 'mazda', 'opel', 'audi'
}


{ // ----------------------------------Деструктуризация массиво и объектов
const carsModel = {
  brand: 'volvo',
  models: {
    sedan: ['s60', 's90'],
    cross: ['v60', 'v90']
  }
};

// Достаем модели(carsModel.models.sedan / cross) в отдельные переменные:
const {models: {sedan: [s1, s2], cross: [v1, v2]}} = carsModel;
console.log(s1, s2, v1, v2); // s60 s90 v60 v90
}


{
// Необходимо создать свойства в объекте и вложить в них переменные
const car = 'audi';
const bicycle = 'cycle';
const bike = 'honda';

const transport = {
  // car: car,
  // bicycle: bicycle,
  // bike: bike,
  // ride: function () {
  //   console.log('go');
  //   }

  // Сейчас можно сделать так:
  car,
  bicycle,
  bike,
  ride(){
    console.log('go', this); // Также эта функция имеет this(будет смотреть на объект(transport), а не на window)
  }
}

transport.ride();
console.log(transport);


const newTransport = {
  bike: 'suzuki',
  quadBike: 'polaris'
};

// С помощью assign можно записать обновленные данные
Object.assign(transport, newTransport); 
// Первый аргумент - объект, который будет изменяться, далее - объект(ы), откуда берем обновленные свойства
console.log(transport);

// Если не нужно перезаписывать объект, первым параметром передаем пустой объект:
const currentTransport = Object.assign({}, transport, newTransport);
console.log(currentTransport);

// По ES9 можно использовать spread-оператор:
const ship = 'Photinia';

const currTr = {...transport, ...newTransport, ship}; // Можно добавлять новые значения
console.log(currTr);
}

}

}
