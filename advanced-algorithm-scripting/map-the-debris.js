function orbitalPeriod(arr) {
  var orbitalTimeResults = [];

  // Formula implemented in getOrbPeriod function:
  //                ____________________________
  //  __           | (earthRadius + avgAlt) pow3
  //  | = 2 pi \  |  ---------------------------
  //            \|              GM

  var getOrbPeriod = function(resultObject) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var equationPart1 = 2 * Math.PI;
    var equationPart2 = Math.pow(earthRadius + resultObject.avgAlt, 3);
    var equationPart3 = Math.sqrt(equationPart2 / GM);
    var timeInSeconds = Math.round(equationPart1 * equationPart3);

    // remove property after calculations are done
    delete resultObject.avgAlt;

    resultObject.orbitalPeriod = timeInSeconds;
    return resultObject;
  };

  // apply forumla to each object in the arr
  for (var elem in arr) {
    orbitalTimeResults.push(getOrbPeriod(arr[elem]));
  }

  return orbitalTimeResults;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
