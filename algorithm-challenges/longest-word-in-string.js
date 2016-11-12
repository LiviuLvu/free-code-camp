function findLongestWord(str) {
  // split string in array of words
  str = str.split(' ');

  // map over array and return largest array element .length with Math.max
  var largestNumber = Math.max.apply(Math, str.map(function (arrayElement) {
    return arrayElement.length;
  }));

  console.log(largestNumber);
  return largestNumber;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
