import express from 'express';
import { Request, Response } from 'express';
import swaggerSetup from '../middleware/swagger';

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

swaggerSetup(app);