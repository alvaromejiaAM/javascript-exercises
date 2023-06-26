const add = function(num1,num2) {
	let total = num1 + num2;
  return total;
};

const subtract = function(num1, num2) {
	let total = num1 - num2;
  return total;
};

const sum = function(arr) {
	let total = 0;
  for(let i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let total = 1;
  for(let i = 0; i < arr.length; i++){
    total *= arr[i];
  }
  return total;
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(num1) {
  let total = 1;
  if(num1 === 0){
    return 1;
  }
	for(i = 1; i <= num1; i++){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
