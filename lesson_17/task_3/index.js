const cityArr = {
  test: 'test',
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
}

let country = document.querySelector('#country');
let city = document.querySelector('#city');
let resultCity = document.querySelector('.result');


country.addEventListener('change', function (e) {
  if(city.firstChild){
    [...city.children].forEach(el => {
      el.remove();
    });
  }

  if(e.target.value == 'uk'){
    cityArr.uk.forEach(el => {
      let option = document.createElement('option');
      option.textContent = el;
      city.appendChild(option);
    });
  }

  if(e.target.value == 'jap'){
    cityArr.jap.forEach(el => {
      let option = document.createElement('option');
      option.textContent = el;
      city.appendChild(option);
    });
  }

  if(e.target.value == 'bel'){
    cityArr.bel.forEach(el => {
      let option = document.createElement('option');
      option.textContent = el;
      city.appendChild(option);
    });
  }

  if(e.target.value == 'rus'){
    cityArr.rus.forEach(el => {
      let option = document.createElement('option');
      option.textContent = el;
      city.appendChild(option);
    });
  }
  })

city.addEventListener('change', function () {
  resultCity.textContent = country.options[country.selectedIndex].text + ', ' + city.value;
  })


  
