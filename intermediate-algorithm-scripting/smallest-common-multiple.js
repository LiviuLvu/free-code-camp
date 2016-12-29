function smallestCommons(arr) {
  var argumentsArr = arguments[0];
  // ascending array based on 2 numbers from arguments
  var divisorArr = [];

  argumentsArr = argumentsArr.sort(function(a, b) {
    return a - b;
  });
  for (var i = argumentsArr[0]; i <= argumentsArr[1]; i++) {
    divisorArr.push(i);
  }


  // return arr;
}

smallestCommons([5,1]);
