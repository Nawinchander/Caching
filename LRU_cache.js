function createLRU(limit) {
  const cache = new Map();

  return {
    get(key) {
      if (!cache.has(key)) return null;

      const val = cache.get(key);
      cache.delete(key);
      cache.set(key, val);   // move to recent
      return val;
    },

    set(key, value) {
      if (cache.has(key)) cache.delete(key);
      else if (cache.size >= limit) {
        const oldest = cache.keys().next().value;
        cache.delete(oldest);
      }

      cache.set(key, value);
    }
  };
}

const lru = createLRU(2);
lru.set("a", 1);
lru.set("b", 2);
lru.get("a");
lru.set("c", 3); // removes "b"

console.log(lru);