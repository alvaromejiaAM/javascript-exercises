const removeFromArray = function(arr, ...numPop) {
  numPop.forEach((numPop) => {
  let index = arr.indexOf(numPop);
  if(index > -1){
    arr.splice(index,1);
  }
  });
  return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
