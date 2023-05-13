import express from 'express';
import { Request, Response } from 'express';
import swaggerSetup from '../middleware/swagger';
import bodyParser from 'body-parser';
import routesConcursos from './concursosRoutes';
import routesNoticias from './noticiasRoutes';

const app = express();
const port = 4000;

/**
 * @swagger
 * /example:
 *   get:
 *     summary: Retorna Hello World
 *     responses:
 *       200:
 *         description: Resposta de Hello World
 */
app.get('/example', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.use(bodyParser.json(), routesConcursos, routesNoticias);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

swaggerSetup(app);
export {app};