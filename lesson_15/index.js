 // ----------------------------------Классы

 class CarWash{ // Создает класс(функция-конструктор), функция, которая создает объект
  // Можно объявить конструктор - метод, который создается в момент создания класса
  // Конструктор подготавливает объект для дальнейшего использования и можно указывать свойства объекта

  // constructor(){ 
  //   this.brand = 'mazda';
  // }

  // В конструктор можно передавать аргументы(в таком случае, при создании объекта, передаем значение)
    constructor(brand, model = CarWash.noCarBaseModel(), services = []){ 
    this.brand = brand;
    this.model = model;
    this.washed = false;
    this._services = services; // Нижнее подчеркивание в названии нужно, чтобы мы не имели доступа к этой переменной извне(инкапсуляция)
  }

   // Можно создавать статические методы. Они будут пренадлежать классу, а не объекту
   static noCarBaseModel(){
    return 'none';
   };
   // Такие методы нельзя вызвать из объекта
   // То есть нельзя написать car1.noCarBaseModel() / car1.counter тоже не найдет

  // Методы добавляются обязательно(!) после конструктора
  washReady(){
    this.washed = true;
    CarWash.counter++;
    this.report();
  }

  report(){
    console.log(this.brand, this.model, this.washed);
  }

  get services(){
    console.log(this._services);
    return this._services.length > 0 ? 'Есть допуслуги': 'Нет допуслуг';
  }
   
  set services(addServices){ // Задает допуслуги
    return this._services.push(addServices);
  }
 };

class PassCar extends CarWash{ // Получение нового класса(PassCar), который наследует все свойства от CarWash
// Если свой конструктор не указан(в PassCar), то используется наследуемый от родителя(от CarWash)
// Для создания конструктора у наследуемого класса используется ключевое слово super
// Далее перечисляем свойства, которые будут наследоваться. Передаем в качестве аргументов конструктору и super
  constructor(brand, model, services, pass = 5){
    super(brand, model, services);
    this.pass = pass;
  }

  washReady(){ // Можно расширять и изменять метод
    // this.washed = true;
    // CarWash.counter++;
    // this.report();
    // Чтобы не переписывать часть кода, используем super
    super.washReady();
    this.reportOffice();
  }

  reportOffice(){
    console.log('На мойке для легковых была помыта машина ');
  }
};


CarWash.counter = 0; // Также добавление статического метода

const car1 = new CarWash('mazda', '3',['black tires', 'wax']); // Создали объект
const car2 = new CarWash('BMW', '5');

const car3PassCar = new PassCar('Volvo');
const car3 = new CarWash('Volvo');
// Ничего не поменяется, вывод будет одинаковый, так как PassCar наследует все свойства от CarWash(до изменений в конструкторе PassCar)

car1.washReady();
car2.washReady();

car1.services = 'Протирка стекол'; // Если бы не было _services(инкапсуляции), то добавлением этого значения заменились бы остальные
console.log(car1.services);
console.log(car2.services);

car3.washReady();
car3PassCar.washReady();

console.log(car3);
console.log(car3PassCar);

console.log(CarWash.counter);
