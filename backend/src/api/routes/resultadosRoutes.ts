import { Router } from 'express';
import { Request, Response } from 'express';
import { ResultadoController } from '../controllers/ResultadoController';
const router = Router();

//GET
router.get('/api/resultados', ResultadoController.pegaTodosOsResultados);
router.get('/api/resultados/destaques', (req: Request, res: Response)=>{
    try {
        res.status(200).json(
            {data:
                {message:'Busca no banco por resultados em destaque'}
            });
    } catch (error) {
        res.status(500).json(error);
    }
});
router.get('/api/resultados/:idResultado', (req: Request, res: Response)=>{
    const {idResultado}=req.params;
    try {
        res.status(200).json(
            {data:
                {message: `Busca no banco por resultados id ${idResultado}`}
            });
    } catch (error) {
        res.status(500).json(error);
    }
});


router.post('/api/resultados', (req: Request, res: Response)=>{
    try {
        res.status(200).json(req.body);
    } catch (error) {
        res.status(500).json(error);
    }
});
router.post('/api/resultados/destaques/:idResultado', (req: Request, res: Response)=>{
    const {idResultado}=req.params;
    try {
        res.status(200).json({idResultado,...req.body});
    } catch (error) {
        res.status(500).json(error);
    }
});
router.delete('/api/resultados/:idResultado', (req: Request, res: Response)=>{
    const {idResultado}=req.params;
    try {
        res.status(200).json(idResultado);
    } catch (error) {
        res.status(500).json(error);
    }
});
router.delete('/api/resultados/destaques/:idResultado', (req: Request, res: Response)=>{
    const {idResultado}=req.params;
    try {
        res.status(200).json(idResultado);
    } catch (error) {
        res.status(500).json(error);
    }
});
export default router;