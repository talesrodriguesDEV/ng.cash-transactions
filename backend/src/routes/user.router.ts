const express = require('express');
const router = express.Router();

import UserController from '../controllers/user.controller';
import LoginMiddlewares from '../middlewares/login.middleware';
import UserMiddlewares from'../middlewares/user.middleware';

const { addNewUser, getUserBalance, userTransaction, listUserTransactions } = UserController;
const { validateUsername, validatePassword } = UserMiddlewares;
const { isUserLogged } = LoginMiddlewares;

router.get('/', UserController.listUsers);
router.post('/new', validateUsername, validatePassword, addNewUser);

router.use(isUserLogged);
router.get('/balance', getUserBalance);
router.post('/transaction', userTransaction);
router.get('/transactions-list', listUserTransactions);

export default router;
