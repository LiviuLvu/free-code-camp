function sumPrimes(num) {
  // check if num is prime
  for (var i = 2; i <= num; i++) {
    if (num === i) {
      console.log('prime number');
      return num;
    }
    else if (num % i === 0) {
      console.log('not prime');
      return num;
    }
  }

}

sumPrimes(11);
