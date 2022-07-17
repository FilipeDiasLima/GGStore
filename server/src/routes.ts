import { Router } from "express";
import multer from "multer";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

import ensureAuth from "./app/middlewares/ensureAuth";
import uploadConfig from './config/upload'
import ProductController from "./app/controllers/ProductController";

const router = Router();
const uploadAvatar = multer(uploadConfig.upload());

// rotas publicas
router.post('/user', UserController.create)

router.post('/sessions', SessionController.create)

// rotas privadas
router.use(ensureAuth)
router.get('/user', UserController.index)
router.put('/user', uploadAvatar.single('avatar'), UserController.update)

router.post('/product', ProductController.create)
router.get('/product', ProductController.index)
router.get('/product/:id', ProductController.index)

export default router;
