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