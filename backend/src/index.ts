import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.NODE_PORT;

app.listen(port, () => console.log(`Listening on port ${port}`));
