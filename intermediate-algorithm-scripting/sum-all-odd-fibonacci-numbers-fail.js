function sumFibs(num) {
  var sumOfOddNumbers = 0;
  var oldNr = 1;
  var newNr = 0;

  while (true) {

    oldNr += newNr;
    console.log(oldNr + ' oldNr');
    if (oldNr >= num) {
      break;
    }
    
    if (oldNr % 2 !== 0) {
      sumOfOddNumbers += oldNr;
      // console.log(oldNr + ' oldNr');

    }
    
    newNr += oldNr;
    console.log(newNr + ' newNr');
    if (newNr >= num) {
      break;
    }

    if (newNr % 2 !== 0) {
      sumOfOddNumbers += newNr;
      // console.log(newNr + ' newNr');

    }

    console.log(sumOfOddNumbers + ' sumOfOddNumbers');
  }

  return sumOfOddNumbers;
}

sumFibs(10);
