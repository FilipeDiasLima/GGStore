import express from 'express'
import router from './routes';
import './database/index'
import 'dotenv/config'
import cors from 'cors';
import path from 'path';

const app = express();

const PORT = process.env.PORT_BACK || 3333

app.use(cors());

app.use(express.json());

app.use('/static', express.static(path.resolve(__dirname, '..', 'static')));
app.use('/tmp/avatar', express.static(path.resolve(__dirname, '..', 'tmp', 'avatar')));
app.use('/tmp/product', express.static(path.resolve(__dirname, '..', 'tmp', 'product')));

app.use(router);


app.listen(PORT, () => {
  console.log(`Server is running\nPort: ${PORT}`)
})