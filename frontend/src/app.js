const CountryData = require('./models/CountryData.js');
const CountriesView = require('./models/CountriesView.js');
const CountrySelectView = require('./models/CountrySelectView.js');




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