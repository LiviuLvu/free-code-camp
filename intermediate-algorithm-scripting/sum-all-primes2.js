function sumPrimes(num) {
  totalPrimes = 0;
  
  for (var i = 2; i <= num; i++) {
    // if prime and add to totalPrimes sum
    isPrime(i);
  }

  function isPrime(index) {
    var start = 2;

    while (start <= Math.floor(Math.sqrt(index))) {
      if (index % start++ === 0) {
        return false;
      }
    }

    totalPrimes += index;
  }

  return totalPrimes;
}

sumPrimes(10);
