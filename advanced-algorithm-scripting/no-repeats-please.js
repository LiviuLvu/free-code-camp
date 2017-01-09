// modified solution from https://forum.freecodecamp.com/t/the-no-repeats-please-challenge/19820/22
function permAlone(str) {
  var len = str.length;
  var result = 0;
  var prev = arguments[1];

  // if str is one element return 1
  if (str.length === 1) {
    return 1;
  }
  // if string is made of one repeating letter return 0
  if (str.match(/^([a-z])\1+$/g)) {
    return 0;
  }

  for (var i = 0; i < len; i++) {
    // substring() method returns a subset of a string between one index and another, or through the end of the string
    var before = str.substring(0, i);
    var after = str.substring(i + 1, len);
    var char = str.charAt(i);
    // skip value if statement is true
    if (char == prev) continue;

    result += permAlone(before + after, char);
  }

  return result;
}

permAlone('abfdefa');
