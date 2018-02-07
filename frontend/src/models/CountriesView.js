const CountriesView = function(container) {
  this.container = container;
}

CountriesView.prototype.render = function(data) {
  this.container.innerHTML = `
  <li>${data.name}</li>
  `
};

module.exports = CountriesView;