const express = require('express');
const { Pool } = require('pg');

const app = express();

// In Railway, DATABASE_URL is automatically provided if you “link”
// this service with the Postgres service.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // For some Postgres setups, you may need SSL. 
  // Check Railway docs if you need this:
  // ssl: { rejectUnauthorized: false },
});

app.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT phrase FROM phrases LIMIT 1;');
    if (rows.length === 0) {
      return res.send('No data in phrases table!');
    }
    return res.send(rows[0].phrase);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Error querying the database');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
