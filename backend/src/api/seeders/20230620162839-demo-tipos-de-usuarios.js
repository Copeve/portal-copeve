module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('Tipos_usuarios', [
            {
                descricao: 'administrador',
                createdAt: new Date(),
                updatedAt: new Date()
            }, 
            {
                descricao: 'root',
                createdAt: new Date(),
                updatedAt: new Date()
            }, 
            {
                descricao: 'leitor',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        
        ], {});
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('Tipos_usuarios', null, {});
    }
};

