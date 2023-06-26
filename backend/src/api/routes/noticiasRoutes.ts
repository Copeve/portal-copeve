import { Router } from 'express';

import { NoticiasController } from '../controllers/NoticiaController';
const router = Router();
import auth from '../../../middleware/auth';

//GET

router
    .get('/api/noticias', NoticiasController.pegaTodasAsNoticias)
    .get('/api/noticias/noticia/:idNoticia', NoticiasController.pegaNoticiaPorId)
    .get('/api/noticias/destaques', NoticiasController.pegaNoticiasEmDestaque)
    .post('/api/noticias', auth, NoticiasController.adicionaNoticia)
    .post('/api/noticias/destaques', auth, NoticiasController.adicionaNoticiaDestaque)
    .delete('/api/noticias/:idNoticia', auth, NoticiasController.apagaNoticia)
    .get('/api/noticias/:idNoticia/tiraDestaque', auth, NoticiasController.tiraNoticiaDeDestaque)
    .get('/api/noticias/:idNoticia/colocaDestaque', auth, NoticiasController.colocaNoticiaEmDestaque);

export default router;