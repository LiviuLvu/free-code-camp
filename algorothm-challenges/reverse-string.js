function reverseString(str) {
  var reversed = '';
  // total length of the string is
  i = str.length;
  
  while (i > 0) {
    // start from last character and read backwards one character at a time
    // add each new character to the reversed variable
    reversed += str.substring(i, i - 1);
    i--;
    console.log(reversed);
  }
  return reversed;
}

reverseString("hello");
