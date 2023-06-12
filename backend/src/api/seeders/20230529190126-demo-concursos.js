module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('Concursos', [
            {
                nome: 'concurso1',
                ano: 2023,
                data_inicio: new Date(),
                data_fim: new Date(),
                encerrado: false,
                grupo_concurso: 1,
                link_inscricao: 'https://concurso1.com.br',
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
                link_inscricao: 'https://concurso2.com.br',
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
                link_inscricao: 'https://concurso3.com.br',
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
                link_inscricao: 'https://concurso4.com.br',
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
                link_inscricao: 'https://concurso5.com.br',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('Concursos', null, {});
    }
};
