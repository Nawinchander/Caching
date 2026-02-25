const cache = {};

function slowSquare(n) {
  if (cache[n]) {
    console.log("From cache");
    return cache[n];
  }

  console.log("Calculated");
  const result = n * n;   // imagine heavy work here
  cache[n] = result;

  return result;
}

console.log(slowSquare(5)); // Calculated
console.log(slowSquare(5)); // From cache