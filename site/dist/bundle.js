/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toogleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toogleMenu */ \"./src/modules/toogleMenu.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothScrolling */ \"./src/modules/smoothScrolling.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_sliderFunc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sliderFunc */ \"./src/modules/sliderFunc.js\");\n/* harmony import */ var _modules_ourTeamChangeImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/ourTeamChangeImages */ \"./src/modules/ourTeamChangeImages.js\");\n/* harmony import */ var _modules_inputsValidation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/inputsValidation */ \"./src/modules/inputsValidation.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_setForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/setForm */ \"./src/modules/setForm.js\");\n\n\n\n\n\n\n\n\n\n\n\n//Timer\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"10-june-2023\");\n\n// Menu\n(0,_modules_toogleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n// popup-window\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n// smoothScrolling\n(0,_modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n// tabs\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n// slider\n(0,_modules_sliderFunc__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n// ourTeam change images\n(0,_modules_ourTeamChangeImages__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n// Inputs Validation\n(0,_modules_inputsValidation__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n// Calculator\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(100);\n\n// send-ajax-form\n(0,_modules_setForm__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n\n//# sourceURL=webpack://site/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector(\".calc-block\");\n  var calcType = document.querySelector(\".calc-type\");\n  var calcSquare = document.querySelector(\".calc-square\");\n  var calcDay = document.querySelector(\".calc-day\");\n  var calcCount = document.querySelector(\".calc-count\");\n  var totalValue = document.querySelector(\"#total\");\n  var countSum = function countSum() {\n    var total = 0;\n    var countValue = 1;\n    var dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value;\n    var squareValue = +calcSquare.value;\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n      var priceAnimate = function priceAnimate() {\n        var price = 0;\n        var interval = setInterval(function () {\n          price += 1;\n          if (price === total) {\n            clearInterval(interval);\n          }\n          totalValue.textContent = price;\n        }, 10);\n      };\n      priceAnimate();\n    }\n  };\n  calcBlock.addEventListener(\"change\", function (event) {\n    var target = event.target;\n    if (target.matches(\"select\") || target.matches(\"input\")) {\n      countSum();\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://site/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction countTimer(deadline) {\n  var timerHours = document.querySelector(\"#timer-hours\");\n  var timerMinutes = document.querySelector(\"#timer-minutes\");\n  var timerSeconds = document.querySelector(\"#timer-seconds\");\n  var interval;\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime();\n    var dateNow = new Date().getTime();\n    var timeRemaining = (dateStop - dateNow) / 1000;\n    if (timeRemaining < 0) {\n      timeRemaining = 0;\n    }\n    var seconds = Math.floor(timeRemaining % 60);\n    var minutes = Math.floor(timeRemaining / 60 % 60);\n    var hours = Math.floor(timeRemaining / 60 / 60);\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  }\n  function updateClock() {\n    var timer = getTimeRemaining();\n    timerHours.textContent = timer.hours;\n    timerMinutes.textContent = timer.minutes;\n    timerSeconds.textContent = timer.seconds;\n    if (timer.timeRemaining < 0) {\n      clearInterval(interval);\n    }\n    if (timer.seconds < 10) {\n      timerSeconds.textContent = \"0\" + timer.seconds;\n    }\n    if (timer.minutes < 10) {\n      timerMinutes.textContent = \"0\" + timer.minutes;\n    }\n    if (timer.hours < 10) {\n      timerHours.textContent = \"0\" + timer.hours;\n    }\n  }\n  interval = setInterval(updateClock, 1000);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://site/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/inputsValidation.js":
/*!*****************************************!*\
  !*** ./src/modules/inputsValidation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar inputsValidation = function inputsValidation() {\n  // calc inputs validation\n  var calcBlock = document.querySelector(\".calc-block\");\n  var calcInputs = calcBlock.querySelectorAll(\"input\");\n  calcBlock.addEventListener(\"input\", function (event) {\n    event.target.value = event.target.value.replace(/\\D/g, \"\");\n  });\n\n  // Questions block inputs validation\n  var footerInputBlock = document.querySelector(\".footer-form-input\");\n  var footerInputs = footerInputBlock.querySelectorAll(\"input\");\n  document.addEventListener(\"input\", function (event) {\n    var target = event.target;\n    if (target.classList.contains(\"form-name\")) {\n      if (!/^[а-яА-ЯёЁ\\ ]+$/.test(target.value)) {\n        target.value = target.value.slice(0, -1);\n      }\n    }\n    if (target.id === \"form2-message\") {\n      if (!/^[\\W0-9s]+$/.test(target.value)) {\n        target.value = target.value.slice(0, -1);\n      }\n    }\n    if (target.classList.contains(\"form-email\")) {\n      if (!/^[a-zA-Z0-9@\\-_.'!*~]+$/.test(target.value)) {\n        target.value = target.value.slice(0, -1);\n      }\n    }\n    if (target.classList.contains(\"form-phone\")) {\n      if (!/^[0-9\\-()+]+$/.test(target.value)) {\n        target.value = target.value.slice(0, -1);\n      }\n    }\n  });\n  var inputsCorrection = function inputsCorrection() {\n    if (/^(-| )/g.test(event.target.value)) {\n      // Удаляет пробелы и тире в начале строки\n      event.target.value = event.target.value.slice(1);\n      inputsCorrection(event.target);\n    }\n    if (/(-| )$/g.test(event.target.value)) {\n      // Удаляет пробелы и тире в конце строки\n      event.target.value = event.target.value.slice(0, -1);\n      inputsCorrection(event.target);\n    }\n    event.target.value = event.target.value.replace(/-{2,}/g, \"-\").replace(/ {2,}/g, \" \"); // Замена повторяющихся пробелов и дефисов на один\n    if (event.target.id === \"form2-name\") {\n      // Изменение имени на нужный формат\n      var name = event.target.value[0].toUpperCase() + event.target.value.slice(1).toLowerCase();\n      event.target.value = name;\n    }\n  };\n  footerInputs.forEach(function (el) {\n    el.addEventListener(\"blur\", inputsCorrection);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputsValidation);\n\n//# sourceURL=webpack://site/./src/modules/inputsValidation.js?");

/***/ }),

/***/ "./src/modules/ourTeamChangeImages.js":
/*!********************************************!*\
  !*** ./src/modules/ourTeamChangeImages.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ourTeamChangeImages = function ourTeamChangeImages() {\n  var teammatesBlock = document.querySelector(\"#command\");\n  teammatesBlock.addEventListener(\"mouseover\", function (event) {\n    var target = event.target;\n    if (target.classList.contains(\"command__photo\")) {\n      event.target.alt = event.target.src;\n      event.target.src = event.target.dataset.img;\n    }\n  });\n  teammatesBlock.addEventListener(\"mouseout\", function (event) {\n    var target = event.target;\n    if (target.classList.contains(\"command__photo\")) {\n      event.target.src = event.target.alt;\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ourTeamChangeImages);\n\n//# sourceURL=webpack://site/./src/modules/ourTeamChangeImages.js?");

/***/ }),

/***/ "./src/modules/setForm.js":
/*!********************************!*\
  !*** ./src/modules/setForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar setForm = function setForm() {\n  var errorMessage = \"Что-то пошло не так...\";\n  var sucsessMessage = \"Спасибо! Мы скоро с вами свяжемся\";\n  var statusMessage = document.createElement(\"div\");\n  statusMessage.classList.add(\"preloader\");\n  var forms = Array.from(document.querySelectorAll(\"form\"));\n  forms.forEach(function (form) {\n    form.addEventListener(\"submit\", function (e) {\n      var target = e.target;\n      e.preventDefault();\n      if (target.tagName === \"FORM\") {\n        if (target.id === \"form3\") {\n          statusMessage.style.color = \"white\";\n        }\n        target.appendChild(statusMessage);\n        var formData = new FormData(target);\n        var body = {};\n        formData.forEach(function (val, key) {\n          body[key] = val;\n        });\n        postData(body).then(function (response) {\n          if (response.status !== 200) {\n            throw new Error(\"Status network not 200\");\n          }\n          target.reset();\n          statusMessage.classList.remove(\"preloader\");\n          statusMessage.textContent = sucsessMessage;\n        })[\"catch\"](function (err) {\n          statusMessage.classList.remove(\"preloader\");\n          console.error(err);\n          statusMessage.textContent = errorMessage;\n        });\n      }\n    });\n  });\n  var postData = function postData(body) {\n    return fetch(\"server.php\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(body)\n    });\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setForm);\n\n//# sourceURL=webpack://site/./src/modules/setForm.js?");

/***/ }),

/***/ "./src/modules/sliderFunc.js":
/*!***********************************!*\
  !*** ./src/modules/sliderFunc.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sliderFunc = function sliderFunc() {\n  var slider = document.querySelector(\".portfolio-content\");\n  var slides = document.querySelectorAll(\".portfolio-item\");\n  var btnSlider = document.querySelectorAll(\".portfolio-btn\");\n  var currentSlide = 0;\n  var interval;\n  var dotsAdd = function dotsAdd() {\n    var dotsWrapper = document.querySelector(\".portfolio-dots\");\n    for (var i = 0; i < slides.length - 1; i++) {\n      var newDot = document.createElement(\"li\");\n      newDot.classList.add(\"dot\");\n      dotsWrapper.append(newDot);\n    }\n  };\n  dotsAdd();\n  var dots = document.querySelectorAll(\".dot\");\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\n    prevSlide(dots, currentSlide, \"dot-active\");\n    currentSlide++;\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    }\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\n    nextSlide(dots, currentSlide, \"dot-active\");\n  };\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1500;\n    interval = setInterval(autoPlaySlide, time);\n  };\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n  slider.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    var target = event.target;\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\n    prevSlide(dots, currentSlide, \"dot-active\");\n    if (target.matches(\"#arrow-right\")) {\n      currentSlide++;\n    } else if (target.matches(\"#arrow-left\")) {\n      currentSlide--;\n    } else if (target.matches(\".dot\")) {\n      dots.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    } else if (currentSlide < 0) {\n      currentSlide = slides.length - 1;\n    }\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\n    nextSlide(dots, currentSlide, \"dot-active\");\n  });\n  slider.addEventListener(\"mouseover\", function (e) {\n    if (e.target.matches(\".portfolio-btn\") || e.target.matches(\".dot\")) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener(\"mouseout\", function (e) {\n    if (e.target.matches(\".portfolio-btn\") || e.target.matches(\".dot\")) {\n      startSlide();\n    }\n  });\n  startSlide(1500);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderFunc);\n\n//# sourceURL=webpack://site/./src/modules/sliderFunc.js?");

/***/ }),

/***/ "./src/modules/smoothScrolling.js":
/*!****************************************!*\
  !*** ./src/modules/smoothScrolling.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar smoothScrolling = function smoothScrolling() {\n  var btnScrolling = document.querySelector(\"#btn__scrolling\");\n  var count = 0;\n  var scrollingInterval;\n  var scrollingFunc = function scrollingFunc() {\n    if (count < 831) {\n      scrollingInterval = requestAnimationFrame(scrollingFunc);\n      count = count + 25;\n      document.documentElement.scrollTop = count;\n    } else {\n      cancelAnimationFrame(scrollingInterval);\n      count = 0;\n    }\n  };\n  btnScrolling.addEventListener(\"click\", function () {\n    scrollingInterval = requestAnimationFrame(scrollingFunc);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScrolling);\n\n//# sourceURL=webpack://site/./src/modules/smoothScrolling.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector(\".service-header\");\n  var tabs = tabHeader.querySelectorAll(\".service-header-tab\");\n  var tabContent = document.querySelectorAll(\".service-tab\");\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tabs[i].classList.add(\"active\");\n        tabContent[i].classList.remove(\"d-none\");\n      } else {\n        tabs[i].classList.remove(\"active\");\n        tabContent[i].classList.add(\"d-none\");\n      }\n    }\n  };\n  tabHeader.addEventListener(\"click\", function (event) {\n    var target = event.target;\n    target = target.closest(\".service-header-tab\");\n    if (target) {\n      tabs.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://site/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopup = function togglePopup() {\n  var popUp = document.querySelector(\".popup\");\n  var popUpBtns = document.querySelectorAll(\".popup-btn\");\n  document.addEventListener(\"click\", function (event) {\n    var target = event.target;\n    if (popUp.style.display === \"block\") {\n      if (target.classList.contains(\"popup-close\")) {\n        popUp.style.display = \"none\";\n      }\n      target = target.closest(\".popup-content\");\n      if (!target) {\n        popUp.style.display = \"none\";\n        target = event.target;\n      }\n    }\n    if (target.classList.contains(\"popup-btn\")) {\n      popUp.style.display = \"block\";\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://site/./src/modules/togglePopup.js?");

/***/ }),

/***/ "./src/modules/toogleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toogleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toogleMenu = function toogleMenu() {\n  var btnMenu = document.querySelector(\".menu\");\n  var menu = document.querySelector(\"menu\");\n  var closeBtn = document.querySelector(\".close-btn\");\n  var menuItems = menu.querySelectorAll(\"ul>li\");\n  var animateInterval;\n  var count = 0;\n  var menuAnimate = function menuAnimate() {\n    if (count < 100) {\n      animateInterval = requestAnimationFrame(menuAnimate);\n      count = count + 3;\n      menu.style.transform = \"translateX(\".concat(count, \"%)\");\n    } else {\n      count = 0;\n      cancelAnimationFrame(animateInterval);\n    }\n  };\n  btnMenu.addEventListener(\"click\", function () {\n    if (document.documentElement.clientWidth > 767) {\n      animateInterval = requestAnimationFrame(menuAnimate);\n    } else {\n      menu.style.transform = \"translateX(0)\";\n    }\n  });\n  var closeMenu = function closeMenu() {\n    menu.style.transform = \"translateX(-100%)\";\n  };\n  closeBtn.addEventListener(\"click\", closeMenu);\n  menuItems.forEach(function (item) {\n    item.addEventListener(\"click\", closeMenu);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toogleMenu);\n\n//# sourceURL=webpack://site/./src/modules/toogleMenu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;