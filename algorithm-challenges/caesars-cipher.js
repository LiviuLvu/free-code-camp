// keep non alphabetical characters unchanged
var decodedStr = '';
function rot13(str) {
// LBH QVQ VG!
  var letters = /[A-Z]/;
  // loop through string
  for (var i = 0; i < str.length; i++) {
    // only affect letters and ignore other non alphanumeric characters
    if (str[i].match(letters)) {
      // offset character by 13 characters
      characterCode = str.charCodeAt(i) - 1;
      var newChar = String.fromCharCode(characterCode);

      decodedStr += newChar;
      console.log(decodedStr);
    }

  }

  return decodedStr;
}

rot13('A B C D');

// rot13("SERR PBQR PNZC");
