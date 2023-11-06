const errorMessage = 'Что-то пошло не так...';
const loadMessage = 'Загрузка...'
const sucsessMessage = 'Спасибо! Мы скоро с вами свяжемся';

const form = document.querySelector('.form');
let statusMessage = document.createElement('div');

form.addEventListener('submit', e => {
  e.preventDefault();
  form.appendChild(statusMessage);
  const formData = new FormData(form);
  const body = {};
  formData.forEach((val, key) => {
    body[key] = val;
  });
  statusMessage.textContent = loadMessage;

  postData(body)
    .then((response) => {
      if(response.status !== 200){
        throw new Error('Status network not 200');
      }
      console.log(response);
      statusMessage.textContent = sucsessMessage;
    })
    .catch(err => {
      console.error(err);
      statusMessage.textContent = errorMessage;
    });
});

const postData = (body) => {
  return fetch('./server.php', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
}
