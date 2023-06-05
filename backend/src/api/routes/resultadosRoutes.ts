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
    .post('/api/resultados/destaques', ResultadoController.adicionaResultadoDestaque)
    .delete('/api/resultados/:idResultado', ResultadoController.deletaResultado)
    .put('/api/resultados/:idEvento/tiraDestaque', res);

//put destaque
export default router;