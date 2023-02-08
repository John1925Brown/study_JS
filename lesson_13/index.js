// this всегда ссылается на объект

let person = {
  name: 'Name1',
  lastName: 'LastName1',
  fullName: function () {
    return this.name + ' ' + this.lastName;
  },
  personTwo: {
    name: 'Name2',
    lastName: 'LastName2',
    fullName: function () {
      return this.name + ' ' + this.lastName;
    }
  }
}

console.log(person.fullName());
console.log(person.personTwo.fullName()); // this всегда ссылается к ближайшему родительскому объекту


function add(c, d) {
  console.log(this.a + this.b + c + d);
}; // Выведет Nan, так как this.a, this.b - undefined

var ten = { a: 1, b: 2 };
add.call(ten, 3, 4); // В call() первый параметр - объект, на который будет ссылатся this, остальные- параметры, что передаются функции
// Следовательно, в add(), this.a соответствует ten.a и this.b соответствует ten.b

add.apply(ten, [3, 4]); // То же самое, только параметры функции передаются массивом
// call и apply сразу же вызывают

var small = {
  a: 1,
  go: function (b, c, d) {
    console.log(this.a + b + c + d);
  }
};
var large = {
  a: 100
};

// Если нужно использовать large:a
small.go.call(large, 1, 2, 3);

// Если сразу не изестны все аргументы, лучше использовать bind()
var bindTest = small.go.bind(large, 2);
console.log(bindTest); // this привязан к large


bindTest(3, 4); // Когда известны остальные переменные, их можно передать

let obj = {
  x: 10,
  y: 15,
  test: newTest
};

function newTest() {
  console.log('Этот объект: ', this); // Ссылаемся на объект obj
};

obj.test(); // Выведет объект

newTest(); // Если отдельно вызвать newTest, то this будет ссылаться на window. Важно где вызвали функцию, а не где ее привязали


let obj1 = {
  x: 10,
  y: 15
};

function newTest1() {
  console.log('Этот объект: ', this); // Ссылаемся на объект obj
};

// newTest1.call(obj1); // Явная привязка
// newTest1.apply(obj1);

function hardBind() {
  newTest1.call(obj1); // Привязывает this к obj1
};

hardBind();