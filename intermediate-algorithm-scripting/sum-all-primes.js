function sumPrimes(num) {
  totalPrimes = 0;
  for (var i = 0; i <= num; i++) {
    isPrime(i);
  }

  function isPrime (nrCheck) {
    // check if num is prime
    for (var i = 2; i <= nrCheck; i++) {
      if (nrCheck === i) {
        console.log(nrCheck + ' nrCheck is prime');
        totalPrimes += nrCheck;
      } else if (nrCheck % i === 0) {
        return 0;
      }
    }
  }

  return totalPrimes;
}

sumPrimes(11);
