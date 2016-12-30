// return the first number in array that passes the test
function findElement(arr, func) {
  for (i = 0; i < arr.length; i++) {
    isTrue = func(arr[i]);
    if (isTrue) {
      return arr[i];
    }
  }
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
