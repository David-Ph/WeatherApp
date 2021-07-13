/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_weather__WEBPACK_IMPORTED_MODULE_0__);\n// ? import module\r\n\r\n// getWeather(\"London\");\r\n\r\n// ? cache dom\r\nconst inputCity = document.getElementById(\"input-city\");\r\nconst submitCity = document.getElementById(\"submit-city\");\r\nconst weatherInfoBlock = document.querySelector(\".weather-info\");\r\n\r\n// ? add event listener\r\nsubmitCity.addEventListener(\"click\", onSubmit);\r\n\r\n// ? functions\r\nfunction onSubmit() {\r\n  renderWeather();\r\n}\r\n\r\nasync function renderWeather() {\r\n  const cityName = inputCity.value;\r\n  const weatherData = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(cityName);\r\n  if (!weatherData || weatherData.cod === \"404\") {\r\n    throwError();\r\n    return;\r\n  }\r\n\r\n  const div = document.createElement(\"div\");\r\n  weatherInfoBlock.innerHTML = \"\";\r\n  div.classList.add(\"column\");\r\n  div.innerHTML = `\r\n            <h3 class=\"title is-2 city-name\">${weatherData.name}, ${\r\n    weatherData.sys.country\r\n  }</h2>\r\n            <h3 class=\"title is-4 city-status has-text-white\">${\r\n              weatherData.weather[0].main\r\n            }</h2>\r\n            <div class=\"columns is-mobile\">\r\n              <div class=\"column is-one-fifth\">\r\n                <h2 class=\"title is-2 city-degree has-text-white\">${Math.floor(\r\n                  weatherData.main.temp\r\n                )} °C</h4>\r\n              </div>\r\n              <div class=\"column\">\r\n                <div class=\"city-info has-text-white\">\r\n                  <p>FEELS LIKE: ${weatherData.main.feels_like} °C</p>\r\n                  <p>WIND: ${weatherData.wind.speed} MPH</p>\r\n                  <p>HUMIDITY: ${weatherData.main.humidity}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n    `;\r\n\r\n  weatherInfoBlock.appendChild(div);\r\n}\r\n\r\nfunction throwError() {\r\n  weatherInfoBlock.innerHTML = \"\";\r\n\r\n  const error = document.createElement(\"p\");\r\n  error.classList.add(\"error\");\r\n  error.innerText = \"Not found!\";\r\n\r\n  weatherInfoBlock.appendChild(error);\r\n}\r\n\n\n//# sourceURL=webpack://12_weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((module) => {

eval("const APP_ID = \"2dc0595f2e0bc595b9ae29e14f77cfc3\";\r\n\r\nasync function getWeather(cityName) {\r\n  if (!cityName) {\r\n    return;\r\n  }\r\n  const data = await fetch(\r\n    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}&units=metric`,\r\n    { mode: \"cors\" }\r\n  );\r\n  const weatherData = await data.json();\r\n  return weatherData;\r\n}\r\n\r\nmodule.exports = {\r\n  getWeather,\r\n};\r\n\n\n//# sourceURL=webpack://12_weatherapp/./src/weather.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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