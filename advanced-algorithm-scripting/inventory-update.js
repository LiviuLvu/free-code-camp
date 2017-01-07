function updateInventory(arr1, arr2) {

  arr2.forEach(function addToArr1(element, index) {
    for (var i = 0; i < arr1.length; i++) {
      // add qty from arr2 to arr1 if same item found
      if (arr1[i][1] === element[1]) {
        arr1[i][0] += element[0];
      }
    }
    // add qty from arr2 to arr1 if item not found in arr1
    var notFound = arr1.every(function (arr1Element) {
      return arr1Element[1] !== element[1];
    });
    if (notFound) {
      arr1.push(element);
    }
  });

  // sort arr1
  return arr1.sort(function (a, b) {
    a = a[1].toUpperCase();
    b = b[1].toUpperCase();
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
