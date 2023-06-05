const convertToCelsius = function(fahTemp) {
  let celsTemp = (fahTemp - 32) * (5/9)
  return Math.round(celsTemp * 10) / 10;
};

const convertToFahrenheit = function(celsTemp) {
  let fahTemp = celsTemp * (9/5) + 32;
  return Math.round(fahTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
