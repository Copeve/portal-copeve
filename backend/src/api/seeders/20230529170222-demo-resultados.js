module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('Resultados', [
            {
                numero: 300,
                descricao: 'descricao resultado de número 300',
                destaque: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                numero: 1000,
                descricao: 'descricao resultado de número 1000',
                destaque: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                numero: 1500,
                descricao: 'descricao resultado de número 1500',
                destaque: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('Resultados', null, {});
    }
};

