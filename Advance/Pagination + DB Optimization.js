// Pagination + DB Optimization (Scaling Reads)

// Fetching millions of rows → slow


// Bad (OFFSET pagination) - SELECT * FROM users LIMIT 10 OFFSET 100000;

// Good (Cursor-based pagination) - SELECT * FROM users WHERE id > 100000 LIMIT 10;


async function getUsers(cursor, db) {
  return db.query(
    'SELECT * FROM users WHERE id > ? LIMIT 10',
    [cursor]
  );
}





