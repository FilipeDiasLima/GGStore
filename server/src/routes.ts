import { Router } from "express";
import multer from "multer";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

import ensureAuth from "./app/middlewares/ensureAuth";
import uploadConfig from './config/upload'
import ProductController from "./app/controllers/ProductController";
import SaleController from "./app/controllers/SaleController";
import LibraryController from "./app/controllers/LibraryController";

const router = Router();
const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));
const uploadImageProduct = multer(uploadConfig.upload('./tmp/product'));

// rotas publicas
router.post('/user', uploadAvatar.single('avatar'), UserController.create)

router.post('/session', SessionController.create)

router.get('/product', ProductController.index)
// rotas privadas
router.use(ensureAuth)

router.get('/user', UserController.get)
router.put('/user', uploadAvatar.single('avatar'), UserController.update)

router.post('/product', uploadImageProduct.array('images', 2), ProductController.create)
router.get('/product/:id', ProductController.index)
router.delete('/product/:id', ProductController.delete)

router.post('/sale', SaleController.create)

router.get('/key', SaleController.indexKey)
router.get('/key/:productId', SaleController.indexKey)

router.get('/library', LibraryController.index)
router.get('/library/:productId', LibraryController.index)

router.get('/gender/:productId', LibraryController.getGender)

export default router;
