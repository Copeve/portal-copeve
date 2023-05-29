module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Grupos_concursos', [
            {
                nome: 'COLTEC',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'PROFBIO',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Centro Pedagógico',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Habilidades',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Grupos_concursos', null, {});
    }
};