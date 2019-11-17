import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';

import middleareAuth from './app/middlewares/auth';

const routes = new Router();

routes.post('/', (req, res) => res.json({ message: 'Hello World' }));

routes.post('/sessions', SessionController.store);

routes.use(middleareAuth);

routes.post('/students', StudentController.store);

export default routes;
