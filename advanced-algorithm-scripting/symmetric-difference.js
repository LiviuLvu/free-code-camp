function sym(args) {
  // convert arguments to array
  args = Array.prototype.slice.call(arguments);

  var getDiff = function(arr1, arr2) {

    function filterFunction(arr1, arr2) {
      // filter() method creates a new array with all elements that pass the test implemented by the provided function.
      return arr1.filter(function(element) {
        // indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
        // if element in arr1 is not found in arr2, return the element
        return arr2.indexOf(element) === -1;
      });
    }

    return filterFunction(arr1, arr2)
      // concat() method is used to merge two or more arrays. This method returns a new array.
      .concat(filterFunction(arr2, arr1))
      // create new array
      .filter(function(element, index, arr) {
        // "arr" is the current array
        // "index" if the element in array
        // indexOf returns the first element found in "arr" if it's same as index
        return arr.indexOf(element) === index;
    });
  };

  // Reduce all arguments getting the difference of them
  return args.reduce(getDiff, []);
}

sym([1, 2, 3], [5, 2, 1, 4], [5, 2, 7]);
