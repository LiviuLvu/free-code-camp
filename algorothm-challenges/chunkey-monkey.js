function chunkArrayInGroups(arr, size) {
  // store the final result in this array
  var multiArray = [];
  // loop through array in steps given by "size"
  i = 0;
  while (i < arr.length) {
    var subArray = arr.slice(i, i + size);
    i = i + size;
    multiArray.push(subArray);

    console.log(subArray);
  }

  return multiArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
