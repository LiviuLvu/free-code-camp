function pairwise(arr, arg) {
  var result = arr.reduce(function(sum, currentValue, currentIndex, initialArr) {
    arr.slice(currentIndex + 1).some(function(value2, i) {
      if (currentValue + value2 === arg && currentValue !== undefined) {
        sum += currentIndex + (i + 1 + currentIndex);
        currentValue = initialArr[i + 1 + currentIndex] = undefined;
      }
    });
    return sum;
  }, 0);

  return result;
}
pairwise([0, 0, 0, 0, 1, 1], 1);
