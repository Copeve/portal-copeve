'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Arquivos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nome: {
                allowNull:false,
                type: Sequelize.STRING
            },
            extensao: {
                allowNull:false,
                type: Sequelize.STRING
            },
            data_criacao: {
                type: Sequelize.DATE
            },
            ultimo_acesso: {
                type: Sequelize.DATE
            },
            mime_type: {
                type: Sequelize.STRING
            },
            sub_pasta: {
                type: Sequelize.STRING
            },
            path: {
                allowNull:false,
                type: Sequelize.STRING
            },
            privado: {
                type: Sequelize.BOOLEAN
            },
            revisado: {
                type: Sequelize.BOOLEAN
            },
            concurso:{
                allowNull: false,
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('Arquivos');
    }
};