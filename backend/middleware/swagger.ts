import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Nome da sua API',
            version: '1.0.0',
            description: 'Descrição da sua API',
        },
    },
    //apis: ['./routes/*.ts'], // substitua pelo caminho dos seus arquivos de rotas
    apis: ['./src/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default (app: Express) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
