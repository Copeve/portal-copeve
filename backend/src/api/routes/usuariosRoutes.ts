import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController';
const router = Router();

//GET
router
    .post('/api/login', UsuarioController.confereLogin)
    .get('/api/validaToken', UsuarioController.confereToken);


export default router;