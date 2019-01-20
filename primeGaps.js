function gap(g, m, n) {
  const isPrime = num => {
      for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
        return num !== 1 && num !== 0;
  }
  var firstPrime = 0;
  var secondPrime = 0;
  for (let i = m; i<=n; i++) {
    if (isPrime(i)) {
      firstPrime = secondPrime;
      secondPrime = i;
    }
    if (secondPrime - firstPrime == g) {
      return [firstPrime, secondPrime]
    }
  }
  return null;
}