function getIndexToIns(arr, num) {
  // sorted array
  var sortedArr = arguments[0].sort(function(a, b) {
  return a - b;
});

  for (i = 0; i < sortedArr.length; i++) {
    // look for array element equal or larger than num
    if (sortedArr[i] >= num) {
      // console.log('i = number ' + 'index ' + i + ' ' + sortedArr[i]);
      return i;
    }
    // when num is larger than any of the elements in arr
    else if (sortedArr[sortedArr.length - 1] < num) {
      // almost as if num was added to the end of the array
      // required to pass the test challenge
      extraIndex = sortedArr.length;
      return extraIndex;
    }
  }

}

getIndexToIns([2, 5, 10], 15);
