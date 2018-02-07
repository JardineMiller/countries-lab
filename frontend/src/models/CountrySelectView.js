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