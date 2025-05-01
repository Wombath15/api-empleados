// src/routes/employees.routes.js

import { Router } from "express";
import {
    getEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
} from "../controllers/employees.controller.js";

const router = Router();

// Obtener todos los empleados
router.get('/employees', getEmployees);

// Obtener un empleado por ID
router.get('/employees/:id', getEmployee);

// Crear un nuevo empleado
router.post('/employees', createEmployee);

// Actualizar un empleado por ID
router.patch('/employees/:id', updateEmployee);

// Eliminar un empleado por ID
router.delete('/employees/:id', deleteEmployee);

export default router;
