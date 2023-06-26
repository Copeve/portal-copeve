import express from 'express';
const router = express.Router();
import {ConcursoController} from '../controllers/ConcursoController';
import auth from '../../../middleware/auth';
//GET
router
    .get('/api/concursos', ConcursoController.pegaTodosOsConcursos)
    .get('/api/concursos/destaques', ConcursoController.pegaConcursosEmDestaque)
    .get('/api/concursos/abertos', ConcursoController.pegaConcursosAbertos)
    .get('/api/concursos/fechados', ConcursoController.pegaConcursosFechados)
    .get('/api/concursos/concurso/:idConcurso', ConcursoController.PegaConcursoPorId)
    .get('/api/concursos/concurso/:idConcurso/eventos', ConcursoController.PegaEventosPorId)
    .get('/api/concursos/concurso/:idConcurso/arquivos', ConcursoController.pegaArquivosPorId)
    .get('/api/concursos/concurso/:idConcurso/noticias', ConcursoController.pegaNoticiasPorId)
    .post('/api/concursos', auth, ConcursoController.adicionaConcurso)
    .post('/api/concursos/eventos', auth, ConcursoController.adicionaEventoEmConcurso)
    .post('/api/concursos/noticias', auth, ConcursoController.adicionaNoticiaEmConcurso)
    .post('/api/concursos/arquivos', auth, ConcursoController.adicionaArquivoEmConcurso)
    .delete('/api/concursos/concurso/:idConcurso', ConcursoController.deletaConcurso)
    .delete('/api/concursos/eventos/:idEvento', auth, ConcursoController.deletaEventoDeConcurso)
    .delete('/api/concursos/arquivos/:idArquivo', auth, ConcursoController.deletaArquivoDeConcurso);
export default router;