import { Router } from 'express';
import { ResultadoController } from '../controllers/ResultadoController';
const router = Router();
import auth from '../../../middleware/auth';
//GET
router
    .get('/api/resultados', ResultadoController.pegaTodosOsResultados)
    .get('/api/resultados/destaques', ResultadoController.pegaResultadosEmDestaque)
    .get('/api/resultados/resultado/:idResultado', ResultadoController.pegaResultadoPorId)
    .post('/api/resultados', auth, ResultadoController.adicionaResultado)
    .post('/api/resultados/destaques', auth, ResultadoController.adicionaResultadoDestaque)
    .delete('/api/resultados/:idResultado', auth, ResultadoController.deletaResultado)
    .get('/api/resultados/:idResultado/tiraDestaque', auth, ResultadoController.tiraResultadoDeDestaque)
    .get('/api/resultados/:idResultado/colocaDestaque', auth, ResultadoController.colocaResultadoEmDestaque);


export default router;