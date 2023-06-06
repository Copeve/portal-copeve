import { Router } from 'express';
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
    .get('/api/resultados/:idResultado/tiraDestaque', ResultadoController.tiraResultadoDeDestaque)
    .get('/api/resultados/:idResultado/colocaDestaque', ResultadoController.colocaResultadoEmDestaque);


export default router;