const textTask1 = document.querySelector('#task1');
// console.log(textTask1.);
// textTask1.textContent = textTask1.textContent.replace(/функц/g, '<strong>функц</strong>');
textTask1.innerHTML = textTask1.innerHTML.replace(/функция|функции/g, '<strong>функция</strong>');

const textTask2 = document.querySelector('#task2');

textTask1.innerHTML = textTask1.innerHTML.replace(/\d{2}:\d{2}/g, '<div></div>');
textTask2.innerHTML = textTask2.innerHTML.replace(/".*"/gi, '<mark>$&</mark>');

const changeLinkShort = (siteName) => {
  return '<a href="http://' + siteName + '">' + siteName + '</a>';
}

textTask2.innerHTML = textTask2.innerHTML.replace(/http:\/\/([\w.]+)/gi, changeLinkShort);

// const changeLinkLong = (siteName) => {
//   return '<a href="http://www.' + siteName + '">' + siteName + '</a>';
// }
//   console.log(textTask2.innerHTML.match(/http:\/\/www\.([\w.\/]+)\//gi));

// textTask2.innerHTML = textTask2.innerHTML.replace(/http:\/\/www\.([\w.\/]+)\//gi, changeLinkLong);

