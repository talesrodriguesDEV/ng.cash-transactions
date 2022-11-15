const express = require('express');
const router = express.Router();

const { UserController } = require('../controllers');
const { UserMiddlewares } = require('../middlewares');

const { validateUsername, validatePassword } = UserMiddlewares;

router.get('/', UserController.listUsers);
router.post('/new', validateUsername, validatePassword, UserController.addNewUser);

module.exports = router;
