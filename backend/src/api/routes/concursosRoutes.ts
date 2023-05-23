import { Router } from 'express';
const router = Router();
import ConcursoController from '../controllers/ConcursoController';

//GET
/*router.get('/api/concursos',  ConcursoController.pegaTodosOsConcursos);(req: Request, res: Response)=>{
    try {
        res.status(200).json({
            data:{
                message:'Busca no banco por concursos'
            }
        });
    } catch (error) {
        res.status(500).json(error);
    }
});*/
/*router.get('/api/concursos',  (req: Request, res: Response)=>{
    try {
        res.status(200).json({
            data:{
                message:'Busca no banco por concursos'
            }
        });
    } catch (error) {
        res.status(500).json(error);
    }
});
router.get('/api/concursos/abertos',  (req: Request, res: Response)=>{
    try {
        res.status(200).json({
            data:{
                message:'Busca no banco por concursos abertos'
            }
        });
    } catch (error) {
        res.status(500).json(error);
    }
});
router.get('/api/concursos/fechados',  (req: Request, res: Response)=>{
    try {
        res.status(200).json({
            data:{
                message:'Busca no banco por concursos fechados'
            }
        });
    } catch (error) {
        res.status(500).json(error);
    }
});
router.get('/api/concursos/:idConcurso',  (req: Request, res: Response)=>{
    console.log(req.params);
    const {idConcurso} = req.params;
    try {
        res.status(200).json({
            data:{
                message:`Busca no banco por concurso ${idConcurso}`
            }
        });
    } catch (error) {
        res.status(500).json(error);
    }
});
router.get('/api/concursos/:idConcurso',  (req: Request, res: Response)=>{
    console.log(req.params);
    const {idConcurso} = req.params;
    try {
        res.status(200).json({
            data:{
                message:`Busca no banco por concurso ${idConcurso}`
            }
        });
    } catch (error) {
        res.status(500).json(error);
    }
});
router.get('/api/concursos/:idConcurso/eventos',  (req: Request, res: Response)=>{
    console.log(req.params);
    const {idConcurso} = req.params;
    try {
        res.status(200).json({
            data:{
                message:`Busca no banco por eventos do concurso ${idConcurso}`
            }
        });
    } catch (error) {
        res.status(500).json(error);
    }
});
router.get('/api/concursos/:idConcurso/faq',  (req: Request, res: Response)=>{
    console.log(req.params);
    const {idConcurso} = req.params;
    try {
        res.status(200).json({
            data:{
                message:`Busca no banco por faqs do concurso ${idConcurso}`
            }
        });
    } catch (error) {
        res.status(500).json(error);
    }
});
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