// find all 2 numbers that return the sum equal to second argument
// return sum of their indexes
function pairwise(arr, arg) {
  var test = arr.reduce(function(sum, value1, index1) {
    // inside this reduce() space, the first parameter is arr[0];
    // in the next line slice() returns a new array with the first element removed
    arr.slice(index1 + 1).forEach(function(value2, index2) {
      // describing first iteration
      // in this space index arr[0] is skipped
      // forEach function starts reading from value arr[1], which is index 0 inside this space
      if (value1 + value2 === arg) {
        // wtf !?
        // arr[index1] = arr[index1 + 1 + index2] = NaN;
        console.log(arr[index1]); // 4
        sum += index1 + index1 + 1 + index2;
      }

    });

    return sum;
  }, 0);

  return test;
}


pairwise([1, 4, 2, 3, 0, 5], 7);
// must return 11.
// pairwise([1, 1, 1], 2);
// should return 1
