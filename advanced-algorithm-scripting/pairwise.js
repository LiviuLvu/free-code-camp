// find all 2 numbers that return the sum equal to second argument
// return sum of their indexes
function pairwise(arr, arg) {
  var sumIndex = arr.reduce(function(acc, add, index, self) {
    var correctNr;
    
    correctNr = self.find(function (elem) {
        console.log(add + elem + ' where is 2');
        return add + elem === arg;
    });
    if (correctNr === undefined) {
      correctNr = 0;
    }
    console.log(correctNr);
    
    return acc + correctNr;
  }, 0);

  return sumIndex;
}

pairwise([1, 4, 2, 3, 0, 5], 7);
