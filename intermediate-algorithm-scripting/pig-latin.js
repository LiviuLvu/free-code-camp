function translatePigLatin(str) {

  // returns true only if the first letter in str is a vowel
  function isVowelFirstLetter() {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (i = 0; i < vowels.length; i++) {
      if (vowels[i] === str[0]) {
        return true;
      }
    }
    return false;
  }

  // if str begins with vowel case
  if (isVowelFirstLetter()) {
    str += 'way';
  }
  else {
    // consonants to move to the end of string
    var consonants = '';

    while (isVowelFirstLetter() === false) {
      consonants += str.slice(0,1);
      // remove consonant from str beginning
      str = str.slice(1);
    }

    str += consonants + 'ay';
  }

  return str;
}

translatePigLatin("jstest");
