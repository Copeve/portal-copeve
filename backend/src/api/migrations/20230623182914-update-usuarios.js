'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.removeColumn('Usuarios', 'login');
        await queryInterface.addColumn('usuarios', 'usuario',{
            allowNull: false,  
            type: Sequelize.BOOLEAN
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('Concursos', 'usuario');
    }
};