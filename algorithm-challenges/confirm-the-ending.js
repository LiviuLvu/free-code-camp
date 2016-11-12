function confirmEnding(str, target) {
  // target length is compared with string ending of same length
  // extract str ending of length = target
  // compare content with target
  
  var strEnding = str.substr(str.length - target.length);
  console.log(strEnding);
  
  if (strEnding === target) {
    return true;
  }
  
  return false;
}

confirmEnding("Bastian", "n");
