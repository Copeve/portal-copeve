import express from 'express';
import swaggerSetup from '../middleware/swagger';
import bodyParser from 'body-parser';
import routesConcursos from './api/routes/concursosRoutes';
import routesNoticias from './api/routes/noticiasRoutes';
import routesResultados from './api/routes/resultadosRoutes';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(cors());


app.use(bodyParser.json(), routesConcursos, routesNoticias, routesResultados);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

swaggerSetup(app);
export {app};