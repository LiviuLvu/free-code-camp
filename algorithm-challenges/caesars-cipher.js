// keep non alphabetical characters unchanged

function rot13(str) {
// LBH QVQ VG!
  var letters = /^[A-Za-z]+$/;
  // loop through string
  for (var i = 0; i < str.length; i++) {
    // only affect letters and ignore other non alphanumeric characters
    if (str[i].match(letters)) {
      console.log('found a letter');
    }

    // offset character by 13 characters
    character = str.charCodeAt(i) - 13;
    var newChar = String.fromCharCode(character);

    // console.log(newChar);

  }

  return str;
}

rot13('TE ST');

// rot13("SERR PBQR PNZC");
