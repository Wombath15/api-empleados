import { pool } from '../db.js';

// Obtener todos los empleados
export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employees');
        res.json(rows);
    } catch (error) {
        console.error('ERROR en GET /api/employees:', error);
        res.status(500).json({ message: 'Error al obtener los empleados' });
    }
};

// Obtener un empleado por ID
export const getEmployee = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el empleado' });
    }
};

// Crear un nuevo empleado
export const createEmployee = async (req, res) => {
    try {
        const { name, salary } = req.body;
        if (!name || !salary) {
            return res.status(400).json({ message: 'Nombre y salario requeridos' });
        }

        const [result] = await pool.query(
            'INSERT INTO employees (name, salary) VALUES (?, ?)',
            [name, salary]
        );

        res.status(201).json({ id: result.insertId, name, salary });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el empleado' });
    }
};

// Actualizar un empleado
export const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, salary } = req.body;

        const [result] = await pool.query(
            'UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?',
            [name, salary, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }

        const [updated] = await pool.query('SELECT * FROM employees WHERE id = ?', [id]);
        res.json(updated[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el empleado' });
    }
};

// Eliminar un empleado
export const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query('DELETE FROM employees WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }

        res.json({ message: 'Empleado eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el empleado' });
    }
};
