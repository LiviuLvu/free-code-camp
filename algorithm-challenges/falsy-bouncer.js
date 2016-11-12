function bouncer(arr) {
  var newArray = arr.filter(Boolean);

  return newArray;
}

bouncer([7, "ate", "", false, 9]);
