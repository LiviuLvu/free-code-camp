function factorialize(num) {
  // decrease from num until 0 is reached,
  // extract new number from each iteration
  // multiply each iteration to total variable
  var total = 1;
  var i = 1;
  while (i <= num) {
    total *= i;
    i++;

    console.log('test result: ' + total);
  }

  return total;
}

factorialize(5);
