module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('Usuarios', [
            {
                nome: 'usuarioTeste1',
                usuario: 'teste1', 
                senha: '1234', 
                tipo_usuario: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }, 
            {
                nome: 'usuarioTeste2',
                usuario: 'teste2', 
                senha: '4321', 
                tipo_usuario: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }, 
            {
                nome: 'usuarioTeste3',
                usuario: 'teste3', 
                senha: '12345', 
                tipo_usuario: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }, 
            {
                nome: 'usuarioTeste4',
                usuario: 'teste4', 
                senha: '54321', 
                tipo_usuario: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('Usuarios', null, {});
    }
};
