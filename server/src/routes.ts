import { Router } from "express";
import multer from "multer";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

import ensureAuth from "./app/middlewares/ensureAuth";
import uploadConfig from './config/upload'

const router = Router();
const upload = multer(uploadConfig);

// rotas publicas
router.post('/user', UserController.create)

router.post('/sessions', SessionController.create)

// rotas privadas
router.use(ensureAuth)
router.get('/user', UserController.index)
router.put('/user', upload.single('avatar'), UserController.update)


export default router;
