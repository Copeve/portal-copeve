import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController';
const router = Router();

//GET
router
    .post('/api/login', UsuarioController.confereLogin)
    .post('/api/criaUsuario', UsuarioController.salvaUsuario)
    .get('/api/validaToken', UsuarioController.confereToken);

export default router;