function repeatStringNumTimes(str, num) {
  // add strings to a variable
  repeatedStr = '';

  if (num > 0) {
    var i = 0;
    while (i < num) {
      i++;
      repeatedStr += str;
    }
  }
  else if (num === 0) {
    repeatedStr = str;
  }

  return repeatedStr;
}

repeatStringNumTimes("abc", 3);
