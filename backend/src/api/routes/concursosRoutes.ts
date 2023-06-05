import express from 'express';
const router = express.Router();
import {ConcursoController} from '../controllers/ConcursoController';
//GET
router
    .delete('/api/concursos/:idConcurso', ConcursoController.deletaConcurso)
    .get('/api/concursos/abertos', ConcursoController.pegaConcursosAbertos)
    .get('/api/concursos/fechados', ConcursoController.pegaConcursosFechados)
    .get('/api/concursos/:idConcurso', ConcursoController.PegaConcursoPorId)
    .get('/api/concursos/:idConcurso/eventos', ConcursoController.PegaEventosPorId)
    .get('/api/concursos/:idConcurso/arquivos', ConcursoController.pegaArquivosPorId)
    .get('/api/concursos/:idConcurso/noticias', ConcursoController.pegaNoticiasPorId)
    .post('/api/concursos', ConcursoController.adicionaConcurso)
    .post('/api/concursos/eventos', ConcursoController.adicionaEventoEmConcurso)
    .post('/api/concursos/noticias', ConcursoController.adicionaNoticiaEmConcurso)
    .post('/api/concursos/arquivos', ConcursoController.adicionaArquivoEmConcurso)
    .delete('/api/concursos/:idConcurso', ConcursoController.deletaConcurso)
    .delete('/api/concursos/eventos/:idEvento', ConcursoController.deletaEventoDeConcurso)
    .delete('/api/concursos/arquivos/:idArquivo', ConcursoController.deletaArquivoDeConcurso);
/*

//DELETE

router.delete('/api/concursos/:idConcurso/eventos/:idEventos', (req: Request, res: Response)=>{
    const {idConcurso, idEventos}=req.params;
    try {
        res.status(200).json({idConcurso, idEventos});
    } catch (error) {
        res.status(500).json(error);
    }
});
router.delete('/api/concursos/:idConcurso/faq/:idFaq', (req: Request, res: Response)=>{
    const {idConcurso, idEventos}=req.params;
    try {
        res.status(200).json({idConcurso, idEventos});
    } catch (error) {
        res.status(500).json(error);
    }
});
router.delete('/api/concursos/destaques/:idConcurso', (req: Request, res: Response)=>{
    const {idConcurso}=req.params;
    try {
        res.status(200).json(idConcurso);
    } catch (error) {
        res.status(500).json(error);
    }
});*/
export default router;