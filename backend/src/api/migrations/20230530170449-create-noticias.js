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
                type: Sequelize.STRING,
                allowNull: false
            },
            corpo: {
                type: Sequelize.STRING,
                allowNull: false
            },
            data_postagem:{
                type: Sequelize.DATE, 
                allowNull: false
            },
            data_atualizacao:{
                type: Sequelize.DATE, 
                allowNull: false
            },
            destaque:{
                type: Sequelize.BOOLEAN, 
                allowNull: false
            },
            concurso:{
                allowNull: true,
                type: Sequelize.INTEGER,
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