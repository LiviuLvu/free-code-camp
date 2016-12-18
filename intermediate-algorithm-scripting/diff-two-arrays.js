function diffArray(arr1, arr2) {
  var singleElements = [];

  function findElements(source, compared) {

    source.filter(function(element) {
      // if element does not exist in compared, add to singleElements
      if (compared.indexOf(element) === -1) {
        singleElements.push(element);
      }
    });

  }

  findElements(arr1,arr2);
  findElements(arr2,arr1);

  return singleElements;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
