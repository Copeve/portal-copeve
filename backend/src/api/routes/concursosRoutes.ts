import express from 'express';
const router = express.Router();
import {ConcursoController} from '../controllers/ConcursoController';
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
    .post('/api/concursos', ConcursoController.adicionaConcurso)
    .post('/api/concursos/eventos', ConcursoController.adicionaEventoEmConcurso)
    .post('/api/concursos/noticias', ConcursoController.adicionaNoticiaEmConcurso)
    .post('/api/concursos/arquivos', ConcursoController.adicionaArquivoEmConcurso)
    .delete('/api/concursos/concurso/:idConcurso', ConcursoController.deletaConcurso)
    .delete('/api/concursos/eventos/:idEvento', ConcursoController.deletaEventoDeConcurso)
    .delete('/api/concursos/arquivos/:idArquivo', ConcursoController.deletaArquivoDeConcurso);
export default router;