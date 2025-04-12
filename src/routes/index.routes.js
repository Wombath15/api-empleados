import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

router.get('/ping', async (req, res) => {
    const [results] = await pool.query('SELECT "Pong" AS result');
    res.json(results[0]);
});

export default router;
