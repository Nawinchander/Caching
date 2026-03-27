// Distributed Cache (Horizontal Scaling)

// Example tools:
// Redis Cluster
// Memcached

const cacheNodes = [cache1, cache2, cache3];

function getCacheNode(key) {
  return cacheNodes[key.length % cacheNodes.length];
}


// FAANG thinking:
// Consistent hashing
// Avoid cache hotspots




