const data = {
  RU: [
    {
      country: "Россия",
      count: "144500000",
      cities: [
        {
          name: "Рязань",
          count: "538962",
          link: "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C",
        },
        {
          name: "Москва",
          count: "12615882",
          link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0",
        },
        {
          name: "Санкт-Петербург",
          count: "5383968",
          link: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Краснодар",
          count: "918145",
          link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80",
        },
        {
          name: "Екатеринбург",
          count: "1484456",
          link: "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Ростов-на-Дону",
          count: "1130305",
          link: "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83",
        },
        {
          name: "Воронеж",
          count: "1054537",
          link: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6",
        },
      ],
    },
    {
      country: "Германия",
      count: 82175684,
      cities: [
        {
          name: "Берлин",
          count: "3613495",
          link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD",
        },
        {
          name: "Мюнхен",
          count: "1456039",
          link: "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD",
        },
        {
          name: "Франкфурт-на-Майне",
          count: "736414",
          link: "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5",
        },
        {
          name: "Кёльн",
          count: "1080394",
          link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD",
        },
      ],
    },
    {
      country: "Англия",
      count: 53012456,
      cities: [
        {
          name: "Лондон",
          count: "8869898",
          link: "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD",
        },
        {
          name: "Манчестер",
          count: "545500",
          link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80",
        },
        {
          name: "Эдинбург",
          count: "488100",
          link: "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Бристоль",
          count: "567111",
          link: "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C",
        },
      ],
    },
  ],
  EN: [
    {
      country: "Russia",
      count: "144500000",
      cities: [
        {
          name: "Ryazan",
          count: "538962",
          link: "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C",
        },
        {
          name: "Moscow",
          count: "12615882",
          link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0",
        },
        {
          name: "St Petersburg",
          count: "5383968",
          link: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Krasnodar",
          count: "918145",
          link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80",
        },
        {
          name: "Yekaterinburg",
          count: "1484456",
          link: "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Rostov-on-Don",
          count: "1130305",
          link: "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83",
        },
        {
          name: "Voronezh",
          count: "1054537",
          link: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6",
        },
      ],
    },
    {
      country: "Germany",
      count: 82175684,
      cities: [
        {
          name: "Berlin",
          count: "3613495",
          link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD",
        },
        {
          name: "Munich",
          count: "1456039",
          link: "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD",
        },
        {
          name: "frankfurt",
          count: "736414",
          link: "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5",
        },
        {
          name: "Cologne",
          count: "1080394",
          link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD",
        },
      ],
    },
    {
      country: "United Kingdom",
      count: 53012456,
      cities: [
        {
          name: "London",
          count: " 8869898",
          link: "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD",
        },
        {
          name: "Manchester",
          count: "545500",
          link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80",
        },
        {
          name: "Edinburgh",
          count: "488100",
          link: "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Bristol",
          count: "567111",
          link: "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C",
        },
      ],
    },
  ],
  DE: [
    {
      country: "Russland",
      count: "144500000",
      cities: [
        {
          name: "Ryazan",
          count: "538962",
          link: "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C",
        },
        {
          name: "Moskau",
          count: "12615882",
          link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0",
        },
        {
          name: "Saint Petersburg",
          count: "5383968",
          link: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Krasnodar",
          count: "918145",
          link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80",
        },
        {
          name: "Jekaterinburg",
          count: "1484456",
          link: "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Rostow",
          count: "1130305",
          link: "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83",
        },
        {
          name: "Woronesch",
          count: "1054537",
          link: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6",
        },
      ],
    },
    {
      country: "Deutschland",
      count: 82175684,
      cities: [
        {
          name: "Berlin",
          count: "3613495",
          link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD",
        },
        {
          name: "München",
          count: "1456039",
          link: "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD",
        },
        {
          name: "Frankfurt",
          count: "736414",
          link: "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5",
        },
        {
          name: "Köln",
          count: "1080394",
          link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD",
        },
      ],
    },
    {
      country: "England",
      count: 53012456,
      cities: [
        {
          name: "London",
          count: " 8869898",
          link: "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD",
        },
        {
          name: "Manchester",
          count: "545500",
          link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80",
        },
        {
          name: "Edinburgh",
          count: "488100",
          link: "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Bristol",
          count: "567111",
          link: "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C",
        },
      ],
    },
  ],
};

const listDefault = document.querySelector(".dropdown-lists__list--default");
const listSelect = document.querySelector(".dropdown-lists__list--select");
const listAutoComplete = document.querySelector(
  ".dropdown-lists__list--autocomplete"
);
const input = document.querySelector("input");
const label = document.querySelector(".label");
const closeBtn = document.querySelector(".close-button");
const linkBtn = document.querySelector(".button");

const allCities = [];

// Думаю, не самый лучший подход, но другого не придумал. Для того, чтобы достать ссылки из городов, пришлось бы использовать цикл в цикле
const addAllCities = () => {
  data.RU.forEach((elem) => {
    allCities.push(...elem.cities);
  });
};

addAllCities();

// Открытие списка default
input.addEventListener("click", () => {
  addListDefault();
});

// Создание списка default
const addListDefault = () => {
  listDefault.style.display = "block";
  listSelect.style.display = "none";
  listAutoComplete.style.display = "none";
  deleteListSelect();
  deleteListDefault();
  deleteAutoComplete();

  data.RU.forEach((elem) => {
    createListDefault(elem.country, elem.count, elem.cities);
  });
};

// Создание списка default
const createListDefault = (country, count, cities) => {
  let newBlock = document.createElement("div");
  newBlock.classList.add("dropdown-lists__countryBlock");
  listDefault.append(newBlock);

  let newTotalLine = document.createElement("div");
  newTotalLine.classList.add("dropdown-lists__total-line");
  newBlock.append(newTotalLine);

  let newCountryName = document.createElement("div");
  newCountryName.classList.add("dropdown-lists__country");
  newCountryName.textContent = country;
  newTotalLine.append(newCountryName);

  let newCountryCount = document.createElement("div");
  newCountryCount.classList.add("dropdown-lists__count");
  newCountryCount.textContent = count;
  newTotalLine.append(newCountryCount);

  cities.sort((a, b) => {
    return b.count - a.count;
  });

  for (let i = 0; i < 3; i++) {
    let newListLine = document.createElement("div");
    newListLine.classList.add("dropdown-lists__line");
    newBlock.append(newListLine);

    let newCityName = document.createElement("div");
    newCityName.classList.add("dropdown-lists__city");
    newCityName.textContent = cities[i].name;
    newListLine.append(newCityName);

    let newCityCount = document.createElement("div");
    newCityCount.classList.add("dropdown-lists__count");
    newCityCount.textContent = cities[i].count;
    newListLine.append(newCityCount);
  }
};

// Открытие списка select
listDefault.addEventListener("click", (e) => {
  if (e.target.classList.contains("dropdown-lists__total-line")) {
    let nameCountry = e.target.textContent.replace(/[0-9]/g, "");
    data.RU.forEach((elem) => {
      if (elem.country === nameCountry) {
        listDefault.style.display = "none";
        listAutoComplete.style.display = "none";
        listSelect.style.display = "block";
        createListSelect(elem.country, elem.count, elem.cities);
      }
    });
  }
});

// Создание списка select
const createListSelect = (country, count, cities) => {
  let newBlock = document.createElement("div");
  newBlock.classList.add("dropdown-lists__countryBlock");
  listSelect.append(newBlock);

  let newTotalLine = document.createElement("div");
  newTotalLine.classList.add("dropdown-lists__total-line");
  newBlock.append(newTotalLine);

  let newCountryName = document.createElement("div");
  newCountryName.classList.add("dropdown-lists__country");
  newCountryName.textContent = country;
  newTotalLine.append(newCountryName);

  let newCountryCount = document.createElement("div");
  newCountryCount.classList.add("dropdown-lists__count");
  newCountryCount.textContent = count;
  newTotalLine.append(newCountryCount);

  cities.forEach((city) => {
    let newListLine = document.createElement("div");
    newListLine.classList.add("dropdown-lists__line");
    newBlock.append(newListLine);

    let newCityName = document.createElement("div");
    newCityName.classList.add("dropdown-lists__city");
    newCityName.textContent = city.name;
    newListLine.append(newCityName);

    let newCityCount = document.createElement("div");
    newCityCount.classList.add("dropdown-lists__count");
    newCityCount.textContent = city.count;
    newListLine.append(newCityCount);
  });
};

// Функция очистки списка select
const deleteListSelect = () => {
  listSelect.textContent = "";
};

// Функция очистки списка default
const deleteListDefault = () => {
  listDefault.textContent = "";
};

// Функция очистки списка autoComplete
const deleteAutoComplete = () => {
  listAutoComplete.textContent = "";
};

// Очистка и скрытие списка select(переключение на список default)
listSelect.addEventListener("click", (e) => {
  if (e.target.classList.contains("dropdown-lists__total-line")) {
    deleteListSelect();
    listSelect.style.display = "none";
    addListDefault();
    listDefault.style.display = "block";
  }
});

// Создание списка autoComplete
input.addEventListener("input", (e) => {
  if (input.value) {
    closeBtn.style.display = "block";
  } else {
    linkBtn.href = '#';
    closeBtn.style.display = "none";
  }
  deleteAutoComplete();
  listDefault.style.display = "none";
  listSelect.style.display = "none";
  listAutoComplete.style.display = "block";

  addListAutoComplete(allCities);
});

// Создание списка autoComplete
const addListAutoComplete = (cities) => {
  let checkedCities = [];

  cities.forEach((city) => {
    let newBlock = document.createElement("div");
    newBlock.classList.add("dropdown-lists__countryBlock");
    listAutoComplete.append(newBlock);

    if (
      city.name.toLowerCase().includes(input.value.toLowerCase()) &&
      input.value
    ) {
      checkedCities.push(city);

      let newListLine = document.createElement("div");
      newListLine.classList.add("dropdown-lists__line");
      newBlock.append(newListLine);

      let newCityName = document.createElement("div");
      newCityName.classList.add("dropdown-lists__city");
      newCityName.textContent = city.name;
      newListLine.append(newCityName);

      let newCityCount = document.createElement("div");
      newCityCount.classList.add("dropdown-lists__count");
      newCityCount.textContent = city.count;
      newListLine.append(newCityCount);
    }
  });

  if (!checkedCities.length && input.value) {
    listAutoComplete.textContent = "Ничего не найдено";
  }
  if (!input.value) {
    addListDefault();
  }
};

// Вывод названия города в инпут при клике
document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("dropdown-lists__line") ||
    e.target.classList.contains("dropdown-lists__city")
  ) {
    input.value = e.target.textContent.replace(/[0-9]/g, "");
    closeBtn.style.display = "block";

    allCities.forEach((city) => {
      if (city.name === input.value) {
        linkBtn.href = city.link;
      }
    });
  }
  changeLabel();
});

// Изменение позиции лейбла(в css меняет позицию только при фокусе, если не поменять, при клике на город, будет поверх значения в инпуте)
const changeLabel = () => {
  if (input.value) {
    label.style.top = "-25px";
    label.style.left = "0";
    label.style.color = "#00416a";
  }
};

// События по клику на крестик в инпут
closeBtn.addEventListener("click", () => {
  deleteListSelect();
  deleteListDefault();
  deleteAutoComplete();
  input.value = "";
  closeBtn.style.display = "none";
  linkBtn.href = "#";
});
