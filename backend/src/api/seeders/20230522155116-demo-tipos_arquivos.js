module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Tipos_arquivos', [
            {
                nome: 'pdf',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'docx',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'doc',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'ppt',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Tipos_arquivos', null, {});
    }
};