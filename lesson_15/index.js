{ // ------------------------------------------ defineProperty
  const mazda = {
  model: 3,
  year: 2006
};

// mazda.color = 'blue';


// defineProperty позволяет добавлять свойство в объект и сразу настраивать его поведение
// Также можно изменять поведение уже существующего свойства
Object.defineProperty(mazda, 'color', { // Первый аргумет - объект, второй - ключ нового свойства
  value: 'blue', // Значение
  // Если writable, configurable, enumerable установить как true, то будет то же поведение, что и при обычном добавлении
  writable: true, // Можно ли изменить значение(перезаписать)
  configurable: true, // Можно ли удалить значение
  enumerable: true // Будет ли отображаться во время перебора
}); 

console.log(mazda);
}

{// -----------------------------------Геттеры и сеттеры
  const car = {
    brand: 'mazda',
    model: 3,
    year: 2006
  };

car.color = 'blue';

Object.defineProperty(car, 'fullTitle',{
  get: function(){ // Отдает значение
    return this.brand + ' ' + this.model;
  },
  set: function(val){ // Задает значение
    this.brand = val;
  }
});

car.fullTitle = 'BMW';

console.log(car.fullTitle);
}

{
const mazda = {
  model: 3,
  year: 2006,
  get fullTitle(){
    return this.brand + ' ' + this.model;
  },
  set fullTitle(value){
    this.brand = value;
  }
};

mazda.fullTitle = 'BMW';

console.log(mazda.fullTitle);
}





