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



/// EX 3 

const caches = {};

async function fetchData(url) {
  if (cache[url]) {
    console.log("Cache hit");
    return caches[url];
  }

  console.log("Fetching from API...");
  
  // fake fetch result
  const response = { data: "API response for " + url };

  caches[url] = response;
  return response;
}

fetchData("/users");
fetchData("/users"); // cached
