function uniteUnique(arr) {
  var finalArray = [];

  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {

      // only push value to finalArray if indexOf method returns -1 (the value does not yet exist)
      if (finalArray.indexOf(arguments[i][j]) < 0) {
        finalArray.push(arguments[i][j]);
      }
    }
  }

  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, [1], 4], [2, 1]);
