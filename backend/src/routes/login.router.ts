import express from 'express';
import LoginController from '../controllers/login.controller';
import LoginMiddlewares from '../middlewares/login.middleware';

const router = express.Router();

router.post('/', LoginMiddlewares.validateLogin, LoginController.doLogin);

export default router;
