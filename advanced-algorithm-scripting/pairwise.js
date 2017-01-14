// find all 2 numbers that return the sum equal to second argument
// return sum of their indexes
function pairwise(arr, arg) {
  var result = arr.reduce(function(sum, value1, index1, self) {
    // in here the first index is arr[0];
    // in the next line slice() returns a new array with the first element removed
    arr.slice(index1 + 1).forEach(function(value2, index2) {
      // in here the first index is skipped
      if (value1 + value2 === arg) {
        sum += arr.indexOf(value1) + arr.indexOf(value2);
      }
    });
    return sum;
  }, 0);

  return result;
}


// pairwise([1, 4, 2, 3, 0, 5], 7);
// must return 11
pairwise([1, 1, 1], 2);
// should return 1
