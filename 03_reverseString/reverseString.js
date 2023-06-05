const reverseString = function(word) {
  let reverseStr = '';
  for(i = (word.length - 1); i >= 0; i--){
     reverseStr += word.charAt(i);
  }
  return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
