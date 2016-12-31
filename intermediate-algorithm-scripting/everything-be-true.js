// Check if the second argument is truthy on all elements of a collection (first argument).
function truthCheck(collection, pre) {

  function exist(object, i) {
    for (var key in object) {
      // if pre is not truthy in the current object
      if (!object[pre]) {
        return false;
      }
    }
    return true;
  }

  // check all array elements with every()
  return collection.every(exist);
}

truthCheck([{"double": "yes", "cake": "yes"}, {"single": "yes", "cake": "yes"}], "double");
