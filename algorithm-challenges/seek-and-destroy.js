

// sort array

// count up and compare for equal or larger nr

// return that index -1

function getIndexToIns(arr, num) {

  var sortedArr = arguments[0].sort();

  var response;

  for (i = 0; i < sortedArr.length; i++) {

   if([i] <= num) {

      response = i-1;

    }

  }

return response;

}

getIndexToIns([40, 40, 60], 50);





Liviu Iancu

