// Write-Around Cache (High Write Systems)

// Used in:
// Logging systems
// Analytics pipelines

// Idea:
// Write directly to DB
// Cache only on read


async function createLog(log, db) {
  await db.insert(log); // no cache write
}



