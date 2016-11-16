// keep non alphabetical characters unchanged

function rot13(str) {
// LBH QVQ VG!

  // loop through string
  for (var i = 0; i < str.length; i++) {

    // offset character by 13 characters
    character = str.charCodeAt(0) - 13;

    var newChar = String.fromCharCode(character);

    console.log(newChar);

  }

  return str;
}

rot13('N');

// rot13("SERR PBQR PNZC");
