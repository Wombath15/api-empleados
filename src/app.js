// src/index.js

import express from 'express';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';



const app = express();

// Middleware para que Express entienda JSON
app.use(express.json());

// Rutas montadas bajo /api
app.use('/api', employeesRoutes);

app.use(indexRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: 'endpoint Not Found' });
});

export default app;