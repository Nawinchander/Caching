// Write-Through Cache (Consistency Focus)

// Used when consistency matters (payments, profiles)

// Write to DB AND cache together


async function updateUser(user, cache, db) {
  await db.updateUser(user);
  await cache.set(user.id, JSON.stringify(user));
}



