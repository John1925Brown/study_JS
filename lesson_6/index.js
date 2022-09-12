// Используйте функции alert, confirm, prompt для общения с пользователем.
// Написать игровой бот."Загадывание случайного числа от 1 до 100"
// Что должна делать программа:
// — спрашивает пользователя: "Угадай число от 1 до 100".
// — если пользовательское число больше, то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;
// — если пользовательское число меньше, то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;
// — если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
// — если пользователь нажимает "Отмена", то игра заканчивается и выводится сообщение "Игра окончена".
// —  если пользовательское число равно загаданному, то игра заканчивается и выводит сообщение  "Поздравляю, Вы угадали!!!".
// Программа должны быть выполнена с помощью рекурсии, без единого цикла.
// Загаданное число должно храниться «в замыкании»

let randNumber = Math.round(Math.random() * 100); // Как я понял, если переменная обхъявлена глобально, как тут, то она не в замыкании, но, если я помещу ее в функцию randomNumber, то при ответе больше/меньше/не число, переменная перезаписывается, соответственно число меняется.
function randomNumber() {
  // console.log(randNumber);
  let playerNumber = prompt('Угадай число от 1 до 100');
  function isNumber() {
    if (playerNumber === null) { // Работает
      return alert('Игра окончена');
    } else if (isNaN(parseFloat(playerNumber))) { // Работает
      alert('Введите число');
      return randomNumber();
    } else if (Number(playerNumber) === randNumber) { // Работает
      return alert('Поздравляю, Вы угадали!!!');
    }
    else if (Number(playerNumber) > randNumber) { // Работает
      alert('Заданное число больше');
      return randomNumber();
    } else if (Number(playerNumber) < randNumber) { // Работает
      alert('Заданное число меньше');
      return randomNumber();
    }

  }
  return isNumber();
}

randomNumber();
