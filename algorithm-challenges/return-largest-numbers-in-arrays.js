function largestOfFour(arr) {
  var newArray = [];
  
  for (var i = 0; i < arr.length; i++) {
    arrayElement = arr[i];
    var largestNr = Math.max.apply(null, arrayElement);
    newArray.push(largestNr);

    console.log(newArray);
  }
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
