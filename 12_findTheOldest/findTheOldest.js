const findTheOldest = function (arr) {
  const updatedPeople = arr
    .map((person) => {
      if (!person.yearOfDeath) {
        person.yearOfDeath = new Date().getFullYear();
      }
      return person;
    })
    .map((person) => {
      return { ...person, lived: person.yearOfDeath - person.yearOfBirth };
    });

  updatedPeople.sort((a, b) => {
    return b.lived - a.lived;
  });
  return updatedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
