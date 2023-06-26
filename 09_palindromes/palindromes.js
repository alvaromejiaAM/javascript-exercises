const palindromes = function (str) {
//remove special char, spaces, and char sensitivity
 str = str.toLowerCase();
 str = str.replace(/[^a-zA-Z ]/g, "");
 str = str.replace(/\s/g, '');
 //string to char in array
 const arr1 = str.split('');
 const arr2 = [...arr1]; //copy
 arr2.reverse();
for(let i = 0; i < arr1.length; i++){
    if(!(arr1[i] === arr2[i])){ //compare array char
      return false;
    }
}
return true;
};

// Do not edit below this line
module.exports = palindromes;
