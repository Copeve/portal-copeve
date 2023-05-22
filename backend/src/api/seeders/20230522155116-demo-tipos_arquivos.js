module.exports = {
    up: (queryInterface) => {
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

    down: (queryInterface) => {
        return queryInterface.bulkDelete('Tipos_arquivos', null, {});
    }
};