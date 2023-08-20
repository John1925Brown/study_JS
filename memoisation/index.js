// ----------------------------Мемоизация
// Пример: интернет-магазин, при поиске используется фильтр
// Каждая добавленная галочка в фильтре - запрос на сервер
// Чтобы не делать каждый раз запрос со значениями, которые уже искали,
// можно записывать эти значения в cache.
// Меньше перегружается страница, плюс быстрее будет фильтровать

// {const strKey = item => item.toString() + '(' + typeof item + ')';

// const generateKey = args => args.map(strKey).join(',');

// const memoize = fn => {
//   const cache = {};

//   return (...args) => {
//     const key = generateKey(args);
//     const val = cache[key];
//     if(val) return val;
//     const res = fn(...args);
//       cache[key] = res;
//       return res;
//   }
// }

// const foo = (a, b) => {
//   let res = 0;
//   for(let i = a; i < b; i++){
//     res += 1;
//   }
//   return res;
// }

// const fooMem = memoize(foo);
// console.log(fooMem(1, 1000000000)); // Первые 4 вызываются долго
// console.log(fooMem(1, 1000000001));
// console.log(fooMem(1, 1000000002));
// console.log(fooMem(1, 1000000003));
// console.log(fooMem(1, 1000000000)); // Последние 4 вызываются мнгновенно, потому что в cache хранится значение вывода с этими переменными
// console.log(fooMem(1, 1000000001));
// console.log(fooMem(1, 1000000002));
// console.log(fooMem(1, 1000000003));}


// {const strKey = item => JSON.stringify(item) + '(' + typeof item + ')';

// const generateKey = args => args.map(strKey).join(',');

// const memoize = (fn , length) => {
//   const cache = new Map;

//   return (...args) => {
//     const key = generateKey(args);
//     if(cache.has(key)) return cache.get(key);
//     const res = fn(...args);
//       if(cache.size >= length){
//         const firstKey = cache.keys().next().value;
//         console.log(firstKey);
//         cache.delete(firstKey);
//       }
//       cache.set(key, res);
//       return res;
//   }
// }

// const fib = n => (n < 2 ? 1 : fib(n - 1) + fib(n - 2));

// const fibMem = memoize(fib, 4);

// fibMem(30);
// fibMem(31);
// fibMem(30);
// fibMem(32);
// fibMem(33);
// fibMem(34); 
// // При максимальном количестве элементов(4), удалятся данные с первого вызова функции
// }

//---------------------------------- Чейнинг

// Чейнинг - вызов функции по цепочке
// Передавая каждый раз разные данные, не забываются предыдущие вызовы
// Пример: есть на сайте 10000 товаров
// Поставлена одна галочка в фильтре
// После запроса вернется уже 1000 товаров
// Поставлена еще одна галочка в фильтре
// Возвращается 100 товаров. То есть учитываются предыдущие условия фильтрации

{
// const foo = function(a){
// return function(b){
//   return function(c){
//     return a + b + c;
//   }
// }
// }

// const foo1 = foo(1);
// const foo2 = foo1(2);
// const foo3 = foo2(3);

// foo(1)(2)(3); // Получатся одинаковые значения
}

{
  // const Race = function (count) {
  //   this.count = count;
  //   this.racer = [];
  //   }

  // Race.prototype.addRacer = function (name) {
  //   if(this.count <= 0){
  //     console.log('Заявки в команду больше не принимаются');
  //     return this;
  //   }
  //   this.racer.push(name);
  //   this.count--;
  //   console.log(this.racer);
  //   return this;
  //   }
  //   const maximum = new Race(2);
  //   maximum.addRacer('Василий').addRacer('Петр').addRacer('Николай');
}

{
  // class Race{
  //   constructor(count){
  //     this.count = count;
  //     this.racer = [];
  //   }
  //   addRacer(name){
  //     if(this.count <= 0){
  //       console.log('Заявки в команду больше не принимаются');
  //       return this;
  //     }
  //     this.racer.push(name);
  //     this.count--;
  //     console.log(this.racer);
  //     return this;
  //   }
  // }


  // const maximum = new Race(2);
  // maximum.addRacer('Василий').addRacer('Петр').addRacer('Николай');
}


// -------------------------- Функциональный объект
{
  // function Foo(x) {
  //   this.x = x;
  //   }
  //   Foo.prototype.map = function (fn) {
  //     return new Foo(fn(this.x));
  //     }

  //   new Foo(5).map(a => {console.log(a + a)});
  //   new Foo('Привет').map(console.log);

  // function foo(x){
  //   return function(fn){
  //     return foo(fn(x));
  //   }
  // }
  // foo(5)(a => {console.log(a + a)});

  const race = (count = 0, racer = []) => ({
    addRacer(name){
      if(count <= 0){
        console.log('Нет мест');
        return race(count, racer);
      }
      racer.push(name);
      count--;
      console.log(racer);
      return race(count, racer);
    }
  });

    const maximum = race(2);
  maximum.addRacer('Василий').addRacer('Петр').addRacer('Николай');
}

{
  const race = (count = 0, racer = [], obj = {
    addRacer: name =>{
      if(count <= 0){
        console.log('Нет мест');
        return race(count, racer, obj);
      }
      racer.push(name);
      count--;
      console.log(racer);
      return race(count, racer, obj);
    },
    removeRacer: name => {
      const exist = racer.indexOf(name);
      if(exist === -1){
        console.log('Такого имени нет');
        return race(count, racer, obj);
      }
      racer.splice(exist,1);
      count++;
      console.log(racer);
      return race(count, racer, obj);
    }
  }) => obj;

  const maximum = race(3);
  maximum.addRacer('Василий').addRacer('Петр').removeRacer('Петр').addRacer('Николай').addRacer('Максим');

}