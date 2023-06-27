const fibonacci = function(num) {
  let lastNum = 0,
      currentNum = 1,
      nextNum = 0;   
  if(num < 0) return 'OOPS';
  if(num === 0) return 0;
  for(let i = 0; i < num-1; i++){
    nextNum = lastNum + currentNum;
    lastNum = currentNum;
    currentNum = nextNum;
  }
  return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
