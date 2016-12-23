function myReplace(str, before, after) {
  
  // teste and preserve case
  stringCheck = before[0];
  if (before[0] === stringCheck.toUpperCase()) {
    after = after.replace(/\b\w/g, function(l) {
      return l.toUpperCase();
    });
  }

  str = str.replace(before, after);
  return str;
}

myReplace("His name is Tom", "Tom", "john");
