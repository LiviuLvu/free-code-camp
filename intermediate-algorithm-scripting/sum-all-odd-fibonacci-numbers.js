function sumFibs(num) {
  var oldNr = 0;
  // start counting from 1
  var newNr = 1;
  var total = 0;

  while (newNr <= num) {
    // check if uneven, add to total
    if (newNr % 2 !== 0) {
      total += newNr;
    }
    // add old value
    newNr += oldNr;
    // keep old value for next addition step
    oldNr = newNr - oldNr;
  }

  return total;
}

sumFibs(4);
