async function updateUser(user, cache, db) {
  await db.updateUser(user);

  // ❗ invalidate cache
  await cache.del(user.id);
}


