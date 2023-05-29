module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Concursos', [
            {
                nome: 'concurso1',
                ano: 2023,
                data_inicio: new Date(),
                data_fim: new Date(),
                encerrado: false,
                grupo_concurso: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'concurso2',
                ano: 2023,
                data_inicio: new Date(),
                data_fim: new Date(),
                grupo_concurso: 2,
                encerrado: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nome: 'concurso3',
                ano: 2021,
                data_inicio: new Date(),
                data_fim: new Date(),
                encerrado: true,
                grupo_concurso: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'concurso4',
                ano: 2022,
                data_inicio: new Date(),
                data_fim: new Date(),
                encerrado: false,
                grupo_concurso: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'concurso5',
                ano: 2022,
                data_inicio: new Date(),
                data_fim: new Date(),
                encerrado: false,
                grupo_concurso: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Concursos', null, {});
    }
};
