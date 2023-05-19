'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Noticias', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            titulo: {
                type: Sequelize.STRING
            },
            corpo: {
                type: Sequelize.STRING
            },
            data_postagem: {
                type: Sequelize.DATE
            },
            data_atualizacao: {
                type: Sequelize.DATE
            },
            destaque: {
                type: Sequelize.BOOLEAN
            },
            concurso:{
                type: Sequelize.INTEGER, 
                allowNull: false, 
                references: { model:'Concursos', key: 'id' }
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
        await queryInterface.dropTable('Noticias');
    }
};