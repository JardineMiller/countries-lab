/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const CountryData = __webpack_require__(2);
const CountriesView = __webpack_require__(1);
const CountrySelectView = __webpack_require__(3);




var addCountryButton = document.querySelector('#add-country-button');



const app = function() {
  const countriesData = new CountryData('https://restcountries.eu/rest/v2/all');
  const bucketData = new CountryData('http://localhost:3000/api/countries');
  var bucketList = new CountriesView(document.querySelector('#bucket-list'));
  let countrySelectView = new CountrySelectView(document.querySelector('#country-select'), countriesData);

  countriesData.onLoad = countrySelectView.populate;
  countriesData.getData();
}

window.addEventListener('DOMContentLoaded', app);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

const CountriesView = function(container) {
  this.container = container;
}

CountriesView.prototype.render = function(data) {
  this.container.innerHTML = `
  <li>${data.name}</li>
  `
};

module.exports = CountriesView;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Request = __webpack_require__(4);

const CountryData = function(url) {
  this.url = url;
  this.onLoad = null;
}

CountryData.prototype.getData = function() {
  const request = new Request(this.url);
  request.get(this.onLoad);
};

module.exports = CountryData;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

const CountrySelectView = function(container, data) {
  this.container = container;
  this.data = data;
  // this.addCountry = this.addCountry.bind(this);
}

CountrySelectView.prototype.populate = function(data) {
  let select = this.container;
  console.log(this);

  // data.forEach(function(country) {
  //   select.innerHTML += `
  //   <option value='${country.name}'>${country.name}</option>
  // `
  // })
};

// CountrySelectView.prototype.addCountry = function(country) {
//   this.container += `
//     <option value='${country.name}'>${country.name}</option>
//   `
// };

module.exports = CountrySelectView;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

const Request = function(url) {
  this.url = url;
}

Request.prototype.get = function(callback) {
  const request = new XMLHttpRequest();
  request.open('GET', this.url);
  request.addEventListener('load', function() {
    if(this.status != 200) return;
    const responseBody = JSON.parse(this.responseText);
    callback(responseBody);
  })
  request.send();
};

Request.prototype.post = function(callback, body) {
  const request = new XMLHttpRequest();
  request.open('POST', this.url);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', function() {
    if(this.status != 201) return;
    const responseBody = JSON.parse(this.responseText);
    callback(responseBody);
  })
  request.send(JSON.stringify(body));
};

Request.prototype.delete = function(callback) {
  const request = new XMLHttpRequest();
  request.open('DELETE', this.url);
  request.addEventListener('load', function() {
    if(this.status != 204) return;
    callback();
  })
  request.send();
};

module.exports = Request;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map