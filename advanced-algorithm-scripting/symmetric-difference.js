function sym(args) {
  var args = Array.prototype.slice.call(arguments);

  var getDiff = function(arr1, arr2) {

    function filterFunction(arr1, arr2) {
      return arr1.filter(function(item) {
        return arr2.indexOf(item) === -1;
      });
    }

    // Run filter function on each array against the other then get unique values
    return filterFunction(arr1, arr2)
      .concat(filterFunction(arr2, arr1))
      .filter(function(item, idx, arr) {
        // Keep any items that are unique - the index of the current item === index of the first occurrence in the array
        return arr.indexOf(item) === idx;
      });
  };

  // Reduce all arguments getting the difference of them
  return args.reduce(getDiff, []);
}

sym([1, 2, 3], [5, 2, 1, 4]);
