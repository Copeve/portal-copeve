module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Tipos_arquivos', [
            {
                nome: 'Resultados',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Edital',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Comunicados',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Estatística',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Tipos_arquivos', null, {});
    }
};