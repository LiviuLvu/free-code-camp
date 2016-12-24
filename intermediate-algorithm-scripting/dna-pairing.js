function pairElement(str) {
  str = str.split('');

  var pairs = str.map(function (element) {
    var pair = '';

    // add pair
    if (element === 'A') {
      pair = element + 'T';
    }
    else if (element === 'T') {
      pair = element + 'A';
    }
    if (element === 'C') {
      pair = element + 'G';
    }
    else if (element === 'G') {
      pair = element + 'C';
    }

    // convert to array
    pair = pair.split('');
    return pair;
  });

  return pairs;
}

pairElement("ATGC");
