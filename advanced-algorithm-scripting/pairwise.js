// find all 2 numbers that return the sum equal to second argument
// return sum of their indexes
function pairwise(arr, arg) {
  tempArray = [];

  var sumIndex = arr.reduce(function(acc, add, index, self) {
    var correctNr;
    
    correctNr = self.find(function (elem, index2) {
        if (add + elem === arg) {
          console.log(arr + 'hey array');
          arr = arr.slice(index, 1);
          arr = arr.slice(index2, 1);
          tempArray.push(index);
          return self.indexOf(index2);
        }
    });
    if (correctNr === undefined) {
      correctNr = 0;
    }
    console.log(tempArray);
    return acc + correctNr;
  }, 0);

  return sumIndex;
}

// pairwise([16, 4, 2, 5, 3, 0], 7);
// must return 11.
pairwise([1, 1, 1], 2);
// should return 1
