// Sharding (Handling Massive Scale)

// Used by:
// Instagram
// Twitter


function getShard(userId) {
  return userId % 3; // simple sharding
}


const dbShards = [db1, db2, db3];

async function getUser(userId) {
  const shard = getShard(userId);
  return dbShards[shard].findUser(userId);
}




