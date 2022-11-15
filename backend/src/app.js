const express = require('express');
const app = express();
const { UserRoutes } = require('./routes');

app.use(express.json());
app.use('/users', UserRoutes);

module.exports = app;
