import express from 'express'
import router from './routes';
import './database/index'
import 'dotenv/config'
import cors from 'cors';

const app = express();

const PORT = process.env.PORT_BACK || 3333

app.use(cors());

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running\nPort: ${PORT}`)
})