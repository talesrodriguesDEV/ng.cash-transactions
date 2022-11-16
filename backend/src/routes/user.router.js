const express = require('express');
const router = express.Router();

const { UserController } = require('../controllers');
const { UserMiddlewares, LoginMiddlewares } = require('../middlewares');

const { validateUsername, validatePassword } = UserMiddlewares;
const { isUserLogged } = LoginMiddlewares;

router.get('/', UserController.listUsers);
router.post('/new', validateUsername, validatePassword, UserController.addNewUser);
router.get('/balance', isUserLogged, UserController.getUserBalance);
router.post('/transaction', isUserLogged, UserController.userTransaction);
router.get('/transactions-list', isUserLogged, UserController.listUserTransactions);

module.exports = router;
