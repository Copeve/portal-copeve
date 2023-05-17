'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Concursos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nome: {
                allowNull: false,
                type: Sequelize.STRING
            },
            ano: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            data_inicio: {
                type: Sequelize.DATE
            },
            data_fim: {
                type: Sequelize.DATE
            },
            encerrado: {
                type: Sequelize.BOOLEAN
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Concursos');
    }
};