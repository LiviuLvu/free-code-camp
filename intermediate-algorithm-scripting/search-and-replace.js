function myReplace(str, before, after) {
  
  // teste and preserve case
  stringCheck = before[0];
  if (before[0] === stringCheck.toUpperCase()) {
    after = after.replace(/\b\w/g, function(l) {
      return l.toUpperCase();
    });
    console.log('uppercase ' + after);
  } 
  else if (before[0] !== stringCheck.toUpperCase()) {
    console.log('lowercase ' + after);
  }

  // does not work
  str = str.replace(before, after);
  return str;
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("His name is Tom", "Tom", "john");
