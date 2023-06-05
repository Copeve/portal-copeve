import { Router } from 'express';
import { Request, Response } from 'express';
import { ResultadoController } from '../controllers/ResultadoController';
const router = Router();

//GET
router
    .get('/api/resultados', ResultadoController.pegaTodosOsResultados)
    .get('/api/resultados/destaques', ResultadoController.pegaResultadosEmDestaque)
    .get('/api/resultados/:idResultado', ResultadoController.pegaResultadoPorId)
    .post('/api/resultados', ResultadoController.adicionaResultado)
    .post('/api/resultados/destaques', ResultadoController.adicionaResultadoDestaque);
    
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