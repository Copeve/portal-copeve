import express from 'express';
const router = express.Router();
import {ConcursoController} from '../controllers/ConcursoController';
//GET
router
    .get('/api/concursos', ConcursoController.pegaTodosOsConcursos)
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
export default router;