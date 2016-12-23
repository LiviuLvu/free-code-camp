function findPropValuePairs(collection, sourceObject) {
  var arr = [];

  for (var objIndex in collection) {
    for (var keyValue in sourceObject) {
      if (collection[objIndex].hasOwnProperty(keyValue) && collection[objIndex][keyValue] === sourceObject[keyValue]) {
        arr.push(collection[objIndex]);
      }
    }
  }

  return arr;
}
findPropValuePairs([{ "x": "11", "b": "22" }, { "b": "33" }], { "c": "22", "b": "33", "x": "11" });
