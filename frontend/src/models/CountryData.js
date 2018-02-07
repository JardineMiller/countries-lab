const Request = require('../services/request.js');

const CountryData = function(url) {
  this.url = url;
  this.onLoad = null;
}

CountryData.prototype.getData = function() {
  const request = new Request(this.url);
  request.get(this.onLoad);
};

module.exports = CountryData;