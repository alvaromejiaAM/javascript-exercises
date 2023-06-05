const leapYears = function(year) {
  if(year % 4 === 0 && year % 100 === 0){ //determines century years
    if(year % 400 === 0){
      return true; 
    }
    return false;
  }
  if(year % 400 === 0 || year % 4 === 0){ //determines non century years
    return true;
  }
  else{
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
