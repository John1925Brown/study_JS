const doUniversity = (docs) => {
  return new Promise((resolve, reject) => {
    if (docs) {
      console.log("Рассмотрение документов...");
      setTimeout(() => {
        if (Math.random() > 0.3) {
          let result = "Принят";
          resolve(result);
        } else {
          reject("Отказано");
        }
      }, 2000);
    } else {
      reject("Отазано, нет документов");
    }
  });
};

const doArmy = (docs) => {
  return new Promise((resolve, reject) => {
    if (docs) {
      console.log("Военком думает...");
      setTimeout(() => {
        if (docs === "Принят") {
          resolve("Отсрочка");
          console.log("Отсрочка");
        } else {
          reject("Повестка");
        }
      }, 2000);
    } else {
      reject("Повестка");
    }
  });
};

const dance = (docs) => {
  console.log("Потанцевали");
  return docs;
};

const doWork = (docs) => {
  return new Promise((resolve, reject) => {
    if (docs === "Отсрочка") {
      console.log("Работодатель думает...");
      setTimeout(() => {
        if (Math.random() > 0.3) {
          let result = "Принят на работу";
          resolve(result);
          console.log(result);
        } else {
          reject("Отказано в работе");
        }
      }, 2000);
    } else {
      reject("Отказано в работе");
    }
  });
};

let documents = ["Паспорт", "Аттестат"];

doUniversity(documents)
  .then((result) => {
    console.log(result);
    return result;
  })
  .then(doArmy)
  .then(dance)
  .then(doWork)
  .catch((reason) => console.error(reason));
