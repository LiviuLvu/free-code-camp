function fearNotLetter(str) {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  // first str letter location in alphabet array
  var startIndex = '';
  alphabet.find(function(element, index) {
    if (element === str[0]) {
      startIndex = index;
    }
  });
  
  // comapre str against alphabet, starting from startIndex
  for (var i = startIndex; i < str.length+startIndex; i++) {
    // return first letter not found in alphabet
    if(alphabet[i] !== str[i - startIndex]) {
      return alphabet[i];
    }
  }

  // if the function reaches this point it means a missing letter was not found
  return undefined;
}

fearNotLetter("bce");
