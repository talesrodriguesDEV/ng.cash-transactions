const { UserController } = require('../controllers');
const express = require('express');

const router = express.Router();

router.get('/', UserController.listUsers);
router.post('/new', UserController.addNewUser);

module.exports = router;
