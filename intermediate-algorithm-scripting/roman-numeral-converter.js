var romanNumerals = [
  // 1...9
  ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  // 10...90
  ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  // 100...900
  ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
  // 1000...3000
  ["", "M", "MM", "MMM", ]
];

function convertToRoman(num) {
  var romanNumber = "";
  // convert numbers starting from right to left
  var numArray = num.toString().split('').reverse();

  // count how many numbers need to be converted
  for (var i = numArray.length - 1; i >= 0; i--) {
    // select romanNumerals array, enter needed sub array, add to romanNumber
    romanNumber += romanNumerals[i][parseInt(numArray[i])];
  }

  return romanNumber;
}

convertToRoman(2017);

