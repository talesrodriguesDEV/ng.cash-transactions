const express = require('express');
const app = express();
const { UserRoutes, LoginRoutes } = require('./routes');

app.use(express.json());
app.use('/users', UserRoutes);
app.use('/login', LoginRoutes);

module.exports = app;
