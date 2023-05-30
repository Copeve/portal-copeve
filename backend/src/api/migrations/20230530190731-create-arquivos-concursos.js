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
            path: {
                type: Sequelize.STRING, 
                allowNull:false
            },
            data_criacao:{
                type: Sequelize.DATE, 
                allowNull:false
            },
            data_ultimo_acesso:{
                type: Sequelize.DATE, 
                allowNull:false
            },
            data_alteracao:{
                type: Sequelize.DATE, 
                allowNull:false
            },
            guid:{
                type: Sequelize.STRING, 
                allowNull:false
            },
            nome:{
                type: Sequelize.STRING, 
                allowNull:false
            },
            extensao:{
                type: Sequelize.STRING, 
                allowNull:false
            }, 
            mime_type:{
                type: Sequelize.STRING, 
                allowNull:false
            },
            privado:{
                type: Sequelize.BOOLEAN, 
                allowNull: false
            },
            revisado:{
                type: Sequelize.BOOLEAN, 
                allowNull: false
            },
            concurso:{
                allowNull: true,
                type: Sequelize.INTEGER,
                references: { model:'Concursos', key: 'id' }
            },
            tipo_arquivo:{
                allowNull: true,
                type: Sequelize.INTEGER,
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