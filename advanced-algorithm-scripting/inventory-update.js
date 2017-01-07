function updateInventory(arr1, arr2) {
  arr2.forEach(function addToArr1(element, index) {
    console.log('forEach arr2' + element);
    for (var i = 0; i < arr1.length; i++) {
      console.log('for i in arr1');
      // add qty from arr2 to arr1 if same item found
      if (arr1[i][1] === element[1]) {
        console.log('if found add qty ' + arr1[i][0] + arr1[i][1]);
        arr1[i][0] += element[0];
        console.log('if found add qty ' + arr1[i][0] + arr1[i][1]);
      }
    }
    // add qty from arr2 to arr1 if item not found in arr1
    var notFound = arr1.every(function (arr1Element) {
      return arr1Element[1] !== element[1];
    });
    if (notFound) {
      console.log('not found in arr1' + element);
      arr1.push(element);
    }

  // sort arr1 ?
  });

  return arr1;
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
