// Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
// Assume that all characters in the provided string are each unique.
function permAlone(str) {
  // if only on elem exist return 1
  if (str.length === 1) {
    return 1;
  }
// if string is made of repeating letter return 0
// 
// spin elements around
// count++ each valid combination
// skip each combination with repeating neighbours

  return str;
}

// permAlone('aab');
// permAlone("aaab");
