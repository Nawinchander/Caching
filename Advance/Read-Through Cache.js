/// Read-Through Cache

// Used in systems like: Netflix (user data, recommendations)
// Facebook (profile fetch)

// IDEA :  Check cache first
// If miss → fetch from DB → update cache

// cacheService.js
async function getUser(userId, cache, db) {
  const cached = await cache.get(userId);

  if (cached) {
    return JSON.parse(cached); // 🚀 fast path
  }

  const user = await db.findUser(userId);

  await cache.set(userId, JSON.stringify(user), 'EX', 60); // TTL 60s

  return user;
}







