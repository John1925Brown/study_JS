// let car = {
//   doors: 4,
//   turbo: false,
//   ride: function () {
//     console.log('Машина едет');
//     }
// };

// let newCar = Object.create(car); // Создание нового объекта, car будет его прототипом

// newCar.model = 'mazda 3';

// console.log(newCar.doors);

// console.log(newCar.hasOwnProperty('model')); // Проверяет есть ли свойство в этом объекте, но не видит наследуемые свойства
// console.log(newCar.hasOwnProperty('doors'));

// console.log(newCar.__proto__.hasOwnProperty('model')); // Проверяет, является ли переданное свойство наследуемым
// console.log(newCar.__proto__.hasOwnProperty('doors'));

// console.log(car.isPrototypeOf(newCar)); // Показывает является ли car прототипом для newCar
//-----------------------------------------------------------------------------------------------------
// Любая функция может быть использована как конструктор. То есть любую функцию можно вызвать оператором new

// function Car(){ // Чтобы выделить функцию-конструктор, их называют с большой буквы
//   this.model = 'Mazda';
// };

// Car.prototype.ride = function () { // Добавляем метод
//   console.log('Ехать');
//   };


  // let car1 = new Car();
  // new создает новый пустой объект, который изначально хранится в памяти
  // После вызывает функцию Car()
  // Прототип функции-конструктора становится прототипом функции-объекта ????
  // Новый объект становится this для вызова конструктора. То есть перенаправляет this на новый объект
  // Далее возвращает новый объект и он присваивается переменной  car1
  // Если объект создан через new, то this будет указывать на этот объект
  // let carTest = {
  //   model: 'Mazda'
  // };
  
  // console.log(car1); // Car {model: 'Mazda'} / Видно, что car1 создан при помощи конструктора
  // console.log(carTest); // {model: 'Mazda'}
  // console.dir(Car);
  // ride() появился и в Car, и в car1
  //-------------------------------------------------------------------------------------------------------------
//   function Car(model, color) { // При вызове функции параметры будут переданы
//     this.color = color;
//     this.model = model;
//     };

// Car.prototype.ride = function () { 
//   console.log('Ехать');
//   };

// let car1 = new Car('Mazda', 'red');
// let car2 = new Car('Vaz', 'black');
// console.log(car1.ride() === car2.ride()); // Будет true, так как это одна и та же функция
// ------------------------------------------------------------------------------------------------------------

// function Car(brand, model, options) { 
//   this.brand = brand;
//   this.model = model;
//   options = options || {};
//   this.color = options.color;
//   this.transissions = options.transissions;
//   };

// Car.prototype.ride = function(){
//   console.log(this.brand + ' ' + this.model + ' поехала!');
// };

// let car1 = new Car('Mazda', '3', { color: 'blue'});
// let car2 = new Car('BMW', 'X3', {ABS: true});

// console.log(car1);
// console.log(car2); // ABS: true не будет, так как это свойство не было задекларировано в конструкторе

// car1.ride();
// car2.ride();

//------------------------------------------------- Наследование

function Car3(countryBuild, options) {
  this.countryBuild = countryBuild;
  options = options || {};
  this.color = options.color;
  };

  // Привязываем прототип Car3 к прототипу Audi
  Audi.prototype = Object.create(Car3.prototype);

Car3.prototype.ride = function () {
  console.log(this.brand + ' ' + this.model +  ' едет!');
  };

  function Audi(countryBuild, options, model, type) {
    this.brand = 'Audi';
    Car3.apply(this, arguments);
    this.model = model;
    this.type = type;
  };

  let carQ7 = new Audi('Germany', {color: 'red'}, 'Q7', 'S');
  console.log(carQ7 instanceof Car3);
  console.log(carQ7 instanceof Audi);