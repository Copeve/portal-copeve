import express from 'express';
const router = express.Router();
import {ConcursoController} from '../controllers/ConcursoController';
//GET
router
    .get('/api/concursos',  ConcursoController.pegaConcursosAbertos)
    .get('api/concursos/abertos', ConcursoController.pegaConcursosAbertos)
    .get('/api/concursos/fechados', ConcursoController.pegaConcursosFechados)
    .get('/api/concursos/:idConcurso', ConcursoController.PegaConcursoPorId)
    .get('/api/concursos/:idConcurso/eventos', ConcursoController.PegaEventosPorId);
/*
router.get('api/concursos/:idConcurso/arquivos);
router.get('/api/concursos/:idConcurso/noticias',  (req: Request, res: Response)=>{
    const {idConcurso} = req.params;
    try {
        res.status(200).json({
            data:{
                message:`Busca no banco por noticias do concurso ${idConcurso}`
            }
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

//POST

router.post('/api/concursos', (req: Request, res: Response)=>{
    try {
        res.status(200).json(req.body);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/api/concursos/:idConcurso/eventos', (req: Request, res: Response)=>{
    const {idConcurso}=req.params;
    try {
        res.status(200).json({ idConcurso,...req.body});
    } catch (error) {
        res.status(500).json(error);
    }
});
router.post('/api/concursos/:idConcurso/faq', (req: Request, res: Response)=>{
    const {idConcurso}=req.params;
    try {
        res.status(200).json({ idConcurso,...req.body});
    } catch (error) {
        res.status(500).json(error);
    }
});
router.post('/api/concursos/:idConcurso/noticias', (req: Request, res: Response)=>{
    const {idConcurso}=req.params;
    try {
        res.status(200).json({ idConcurso,...req.body});
    } catch (error) {
        res.status(500).json(error);
    }
});

//DELETE
router.delete('/api/concursos/:idConcurso', (req: Request, res: Response)=>{
    const {idConcurso}=req.params;
    try {
        res.status(200).json(idConcurso);
    } catch (error) {
        res.status(500).json(error);
    }
});
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