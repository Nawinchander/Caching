const cache = {};

function setCache(key, value, ttlMs) {
  const expiry = Date.now() + ttlMs;
  cache[key] = { value, expiry };
}

function getCache(key) {
  const data = cache[key];

  if (!data) return null;

  if (Date.now() > data.expiry) {
    delete cache[key];
    return null;
  }

  return data.value;
}

// usage
setCache("user1", { name: "Nawin" }, 3000);

console.log(getCache("user1")); // returns value
setTimeout(() => console.log(getCache("user1")), 4000); // null after expiry