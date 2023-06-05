const sumAll = function(num1, num2) {
  let total = 0;
  if(isNaN(num1) 
  || isNaN(num2) 
  || num1 < 0 
  || num2 < 0
  || typeof(num1) === 'string'
  || typeof(num2) === 'string'){
    return 'ERROR';
  }
  else if(num1 > num2){
   for(; num1 >= num2; num1--){ 
    total += num1;
   }
  }
  else if (num2 > num1){
    for(; num1 <= num2; num2--){
      total += num2;
    }
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
