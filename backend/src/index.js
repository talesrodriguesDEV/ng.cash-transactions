const app = require('./app');

require('dotenv').config();

const port = process.env.NODE_PORT;

app.listen(port, () => console.log(`Listening on port ${port}`));
