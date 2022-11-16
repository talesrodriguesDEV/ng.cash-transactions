const express = require('express');
const router = express.Router();

const { UserController } = require('../controllers');
const { UserMiddlewares, LoginMiddlewares } = require('../middlewares');

const { addNewUser, getUserBalance, userTransaction, listUserTransactions } = UserController;
const { validateUsername, validatePassword } = UserMiddlewares;
const { isUserLogged } = LoginMiddlewares;

// router.get('/', UserController.listUsers);
router.post('/new', validateUsername, validatePassword, addNewUser);

router.use(isUserLogged);
router.get('/balance', getUserBalance);
router.post('/transaction', userTransaction);
router.get('/transactions-list', listUserTransactions);

module.exports = router;
