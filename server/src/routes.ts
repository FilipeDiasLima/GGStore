import { Router } from "express";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

import ensureAuth from "./app/middlewares/ensureAuth";

const router = Router();

// rotas publicas
router.post('/user', UserController.create)
router.get('/user', UserController.index)

router.post('/sessions', SessionController.create)

// rotas privadas
router.use(ensureAuth)


export default router;
