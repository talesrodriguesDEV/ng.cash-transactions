const express = require('express');
const router = express.Router();

const { LoginController } = require('../controllers');
const { LoginMiddlewares } = require('../middlewares');

const { validateLogin } = LoginMiddlewares;

router.post('/', validateLogin, LoginController.doLogin);

module.exports = router;
