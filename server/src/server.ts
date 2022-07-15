import express from 'express'
import router from './routes';
import uploadConfig from './config/upload'
import './database/index'
import 'dotenv/config'

const app = express();

const PORT = process.env.PORT_BACK || 3333

app.use(express.json());

app.use('/files', express.static(uploadConfig.directory))

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running\nPort: ${PORT}`)
})