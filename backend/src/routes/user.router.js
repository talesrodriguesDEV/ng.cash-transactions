const { UserController } = require('../controllers');
const express = require('express');

const router = express.Router();

router.get('/', UserController.listUsers);

module.exports = router;
