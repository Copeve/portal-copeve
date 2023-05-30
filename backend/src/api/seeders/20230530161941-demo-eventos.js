module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('Eventos', [
            {
                evento: 'evento x',
                data: '2023-05-22',
                concurso: 1,
                tipo_evento: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                evento: 'evento y',
                data: '2023-04-20',
                concurso: 1,
                tipo_evento: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                evento: 'evento z',
                data: '2023-02-12',
                concurso: 2,
                tipo_evento: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                evento: 'evento w',
                data: '2023-01-07',
                concurso: 2,
                tipo_evento: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                evento: 'evento t',
                data: '2023-01-15',
                concurso: 2,
                tipo_evento: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                evento: 'evento f',
                data: '2021-08-20',
                concurso: 3,
                tipo_evento: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                evento: 'evento f',
                data: '2021-09-10',
                concurso: 3,
                tipo_evento: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                evento: 'evento a',
                data: '2022-05-19',
                concurso: 4,
                tipo_evento: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                evento: 'evento v',
                data: '2022-06-27',
                concurso: 4,
                tipo_evento: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                evento: 'evento g',
                data: '2022-06-05',
                concurso: 4,
                tipo_evento: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('Eventos', null, {});
    }
};
