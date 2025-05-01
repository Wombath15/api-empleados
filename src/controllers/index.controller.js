import { pool } from '../db.js';

export const ping = async (req, res) => {
    try {
        const [results] = await pool.query('SELECT "Pong" AS result');
        res.json(results[0]);
    } catch (error) {
        console.error('ERROR EN /ping:', error);
        res.status(500).json({ message: 'Error al hacer ping a la base de datos' });
    }
}; 
