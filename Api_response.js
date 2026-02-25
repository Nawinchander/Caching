const cache = {};

async function fetchUser(id) {
  if (cache[id]) {
    console.log("Cache hit");
    return cache[id];
  }

  console.log("Fetching from DB/API");
  
  // fake async call
  const data = await new Promise(resolve =>
    setTimeout(() => resolve({ id, name: "User " + id }), 1000)
  );

  cache[id] = data;
  return data;
}

fetchUser(1).then(console.log);
fetchUser(1).then(console.log);