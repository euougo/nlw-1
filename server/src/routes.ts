import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const itemsController = new ItemsController();
const pointsController = new PointsController();

// Controller Methods: index, show, create, update, delete
routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show); // Refazer rota de listar especifico 1:39

export default routes;

// Abstrair mais????
// Service Pattern
// Repository Pattern (Data Mapper)









































