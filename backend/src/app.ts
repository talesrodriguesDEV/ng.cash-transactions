import express from 'express';
import cors from 'cors';

import UserRoutes from './routes/user.router';
import LoginRoutes from './routes/login.router';

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('/users', UserRoutes);
app.use('/login', LoginRoutes);

export default app;
