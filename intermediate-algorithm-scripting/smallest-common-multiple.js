function smallestCommons(arr) {
  var argumentsArr = arguments[0];
  // ascending array based on numbers from arguments
  var divisorArr = [];
  // when num in divisor array shares a denominator push to checkEachDivisor
  var checkEachDivisor = [];
  var isCommonDenominator = 0;

  argumentsArr = argumentsArr.sort(function(a, b) {
    return a - b;
  });

  for (i = argumentsArr[0]; i <= argumentsArr[1]; i++) {
    divisorArr.push(i);
  }
  
  while (checkEachDivisor.length < divisorArr.length) {
    isCommonDenominator = isCommonDenominator + argumentsArr[1];
    // check if result canbe evenly divided by rest of the numbers
    for (var j = divisorArr.length - 1; j >= 0; j--) {
      // if largest number divides well to each divisorArr push to  
      if (isCommonDenominator % divisorArr[j] === 0) {
        checkEachDivisor.push(divisorArr[j]);
      }
    }
    if (checkEachDivisor.length === divisorArr.length) {
      // h0000ray! we found all
      return isCommonDenominator;
    } else {
      // clear some numbers found and start again testing for larger 'i' common denominator
      checkEachDivisor = [];
    }
  }

}

smallestCommons([5,1]);
