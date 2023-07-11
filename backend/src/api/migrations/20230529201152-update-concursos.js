'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('Concursos', 'destaque',{
            allowNull: false,  
            type: Sequelize.BOOLEAN
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('Concursos', 'destaque');
    }
};