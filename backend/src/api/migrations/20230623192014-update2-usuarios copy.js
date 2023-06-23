'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.changeColumn('Usuarios', 'senha', {
            type: Sequelize.STRING,
        });
        await queryInterface.changeColumn('Usuarios', 'usuario', {
            type: Sequelize.STRING,
        });
    },
};