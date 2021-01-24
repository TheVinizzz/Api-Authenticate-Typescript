import {Router} from 'express'
import authMiddleware from "./app/middlewares/authMiddleware";
import UserController from './app/controllers/UserController'
import AuthController from './app/controllers/AuthController'

const router = Router()

router.get('/', (req, res) => {res.send(`Esta Rodando index ${process.env.API_DATABASE}`)})
router.post('/users', UserController.store)
router.post('/authenticate', AuthController.authenticate)
router.get('/users', authMiddleware, UserController.index)

export default router