import express from 'express';
import db from '../db.js';

const router = express.Router();

// Create a new wand
router.post('/holiday-ideas-data', async (req, res) => {
  try {
    const { /* wand data from the request body */ } = req.body;
    const query = 'INSERT INTO holidayideas (/* wand column names */) VALUES (/* values placeholders */)';
    const [result] = await db.query(query, [/* wand values */]);
    res.json({ msg: 'holiday idea created', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error creating holiday idea' });
  }
});

// Read all wands
router.get('/holiday-ideas-data', async (req, res) => {
	let status = 200;
	let retVal = {};

	try {
		const query = 'SELECT * FROM holidayideas';
		const [rows] = await db.query(query);
		retVal.data = rows;
	} catch (error) {
		console.error(error);
		retVal.error = error;
		status = 500;
	}finally{
		res.status(status).json(retVal);
	}
});

// Read a single wand by ID
router.get('/holiday-ideas-data/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const query = 'SELECT * FROM holidayideas WHERE id = ?';
    const [rows] = await db.query(query, [id]);

    if (!rows[0]) {
      res.status(404).json({ msg: 'holiday idea not found' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error fetching holiday idea' });
  }
});

// Update a wand by ID
router.put('/holiday-ideas-data/:id', async (req, res) => {
  // Similar to create, but with an UPDATE query
});

// Delete a wand by ID
router.delete('/holiday-ideas-data/:id', async (req, res) => {
  // Write code to delete a wand by ID
});

export default router;
