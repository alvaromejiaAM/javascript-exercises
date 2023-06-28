const findTheOldest = function(people) {
  let currentTime = new Date();
  let year = currentTime.getFullYear();
  let oldestAge = 0;
  let index = 0;
  
  let age = people.map((person) =>{
    if('yearOfDeath' in person){
      return person.yearOfDeath - person.yearOfBirth;
    }
    else return year - person.yearOfBirth;
  });

  
  for(let i = 0; i < age.length; i++){
    if(age[i] > oldestAge){
      oldestAge = age[i];
      index = i;
    }
  }
 
  return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
