import express from 'express';
import path from 'path';

import 'express-async-errors';
import errorHandle from './errors/handle';

import cors from 'cors';

import './database/connection';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandle);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3333);