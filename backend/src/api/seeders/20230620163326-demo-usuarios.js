module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('Usuarios', [
            {
                nome: 'usuarioTeste1',
                login: 'teste1', 
                senha: '1234', 
                tipo_usuario: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }, 
            {
                nome: 'usuarioTeste2',
                login: 'teste2', 
                senha: '4321', 
                tipo_usuario: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }, 
            {
                nome: 'usuarioTeste3',
                login: 'teste3', 
                senha: '12345', 
                tipo_usuario: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }, 
            {
                nome: 'usuarioTeste4',
                login: 'teste4', 
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
