let lang = prompt('На каком языке вывести дни недели? Введите ru для русского или en для английского!');

if (lang == 'ru') {
  console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else if (lang == 'en') {
  console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} else {
  console.log('Вы ввели неверное значение. Допустимо лишь ru, en!');
}
// ------------------------Решение через switch
switch (lang) {
  case 'ru':
    console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
    break;
  case 'en':
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    break;
  default:
    console.log('Вы ввели неверное значение. Допустимо лишь ru, en!');
}
