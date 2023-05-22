module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Tipos_eventos', [
            {
                nome: 'evento1',
                descricao: 'Descrição dos acontecimentos em evento 1',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'evento2',
                descricao: 'Descrição dos acontecimentos em evento 2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'evento3',
                descricao: 'Descrição dos acontecimentos em evento 3',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'evento4',
                descricao: 'Descrição dos acontecimentos em evento 4',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Tipos_eventos', null, {});
    }
};