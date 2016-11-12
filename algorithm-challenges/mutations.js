function mutation(arr) {
  // convert all items to lowercase
  var firstElement = arr[0].toLowerCase();
  var searchValue = arr[1].toLowerCase();

  // check if all letters in second element are found in the first
  var checkLength = [];
  for (i = 0; i < searchValue.length; i++) {
    // for each letter in searchValue, search the first element
    var foundLetter = firstElement.indexOf(searchValue[i]);
    // if the index returned by indexOf is not -1, push the nuber to checkLength[];
    if (foundLetter >= 0) {
      checkLength.push(foundLetter);
    }
  }
  // if all letters are found
  if (checkLength.length === searchValue.length) {
    return true;
  }

  return false;
}

mutation(["hello", "hey"]);
