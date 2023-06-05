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
    .post('/api/noticias/destaques', NoticiasController.adicionaNoticiaDestaque);


//DELETE
router.delete('/api/noticias/:idNoticia', (req: Request, res: Response)=>{
    const {idNoticia}=req.params;
    try {
        res.status(200).json(idNoticia);
    } catch (error) {
        res.status(500).json(error);
    }
});

export default router;