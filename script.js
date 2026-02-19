///EX 1 

// simple cache object
const cache = {};

function getUser(id) {
  // check cache first
  if (cache[id]) {
    console.log("From cache");
    return cache[id];
  }

  // simulate API/database call
  console.log("Fetching from DB...");
  const user = { id: id, name: "User " + id };

  // store in cache
  cache[id] = user;

  return user;
}

// usage
console.log(getUser(1)); // DB call
console.log(getUser(1)); // cached
console.log(getUser(2)); // DB call

//// EX2

function cacheFunction(fn) {
  const cache = {};

  return function(value) {
    if (cache[value]) {
      console.log("Cached result");
      return cache[value];
    }

    console.log("Calculating...");
    const result = fn(value);
    cache[value] = result;
    return result;
  };
}

// slow function
function square(n) {
  return n * n;
}

const cachedSquare = cacheFunction(square);

console.log(cachedSquare(5)); // calculated
console.log(cachedSquare(5)); // cached
