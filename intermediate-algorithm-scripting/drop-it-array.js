// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
// Return the rest of the array, otherwise return an empty array.
function dropElements(arr, func) {
  var limit = arr.length;

  for (i = 0; i < limit; i++) {
    var isTrue = func(arr[0]);

    if (isTrue) {
      return arr;
    }
    arr.shift();
  }

  return arr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;});
