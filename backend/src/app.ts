import express from 'express';
import UserRoutes from './routes/user.router';
import LoginRoutes from './routes/login.router';

const app = express();

app.use(express.json());
app.use('/users', UserRoutes);
app.use('/login', LoginRoutes);

export default app;
