'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Arquivos_concursos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            titulo: {
                type: Sequelize.STRING
            },
            link: {
                type: Sequelize.STRING
            },
            anexo:{
                type: Sequelize.INTEGER, 
            },
            concurso:{
                type: Sequelize.INTEGER, 
                allowNull: false, 
                references: { model:'Concursos', key: 'id' }
            },
            tipo_arquivo:{
                type: Sequelize.INTEGER, 
                allowNull: false, 
                references: { model:'Tipos_arquivos', key: 'id' }
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
        await queryInterface.dropTable('Arquivos_concursos');
    }
};