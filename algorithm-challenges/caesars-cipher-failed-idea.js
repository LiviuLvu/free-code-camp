function rot13(str) {
  // LBH QVQ VG!
  // convert string to array
  var arrayFromStr = str.split('');

  // decode string
  function decoder (strIndex) {
    // filter only alphabetical characters
    var letters = /[A-Za-z]/;
    //  space match /^\S+$/

    // compare each string character to the letters variable
    if (strIndex.match(letters)) {

      // get each character code # and offset by 13 characters
      characterCode = strIndex.charCodeAt() - 13;

      // convert code to letter
      var convertedChar = String.fromCharCode(characterCode);
      console.log(convertedChar);

      return convertedChar;
    }
  }
  var decodedString = arrayFromStr.map(decoder);
  return decodedString;
}

rot13('TE ST');

// rot13("SERR PBQR PNZC");
