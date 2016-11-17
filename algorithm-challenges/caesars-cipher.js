function rot13(str) {
  // save the decoded string in a new variable
  var decodedStr = '';

  for (var i = 0; i < str.length; i++) {

    // only affect letters and ignore other non alphanumeric characters
    var letters = /[A-Z]/;

    if (str[i].match(letters)) {
      // get numerical code for character;
      // offset character by 13 characters
      characterCode = str.charCodeAt(i)-13;

      if (characterCode < 65) {
        // if characterCode is smaller than A, offset alphabet length;
        characterCode += 26;
      }

      // convert code to string
      var newChar = String.fromCharCode(characterCode);

      decodedStr += newChar;
      console.log(decodedStr);
    }
    else {
      // add the unchanged characters to the decoded string
      decodedStr += str[i];
    }

  }

  return decodedStr;
}

// rot13('A, M! N. Z');

rot13('LBH QVQ VG!');
