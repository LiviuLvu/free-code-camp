// return a flat array
function steamrollArray(arr) {
  var flatArr = JSON.parse("[" + JSON.stringify(arr).replace(/\[\],|\[|\]/g,'') +"]");

  return flatArr;
}

steamrollArray([[["a"]], [["b"]]]);
