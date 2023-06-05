import { Router } from 'express';
import { Request, Response } from 'express';
import { NoticiasController } from '../controllers/NoticiaController';
const router = Router();

//GET

router
    .get('/api/noticias', NoticiasController.pegaTodasAsNoticias)
    .get('/api/noticias/:idNoticia', NoticiasController.pegaNoticiaPorId)
    .get('/api/noticias/destaques', NoticiasController.pegaNoticiasEmDestaque)
    .post('/api/noticias', NoticiasController.adicionaNoticia)
    .post('/api/noticias/destaques', NoticiasController.adicionaNoticiaDestaque)
    .delete('/api/noticias/:idNoticia', NoticiasController.apagaNoticia)
    .get('/api/noticias/:idNoticia/tiraDestaque', NoticiasController.tiraNoticiaDeDestaque)
    .get('/api/noticias/:idNoticia/colocaDestaque', NoticiasController.colocaNoticiaEmDestaque);



//put destaque

export default router;