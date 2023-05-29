'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Eventos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            evento: {
                type: Sequelize.STRING,
                allowNull: false
            },
            data: {
                allowNull:false,
                type: Sequelize.DATE
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            concurso: {
                type: Sequelize.INTEGER,
                allowNull: false, 
                references: { model:'Concursos', key: 'id' }
            },
            tipo_evento: {
                type: Sequelize.INTEGER,
                allowNull: false, 
                references: { model:'Tipos_eventos', key: 'id' }
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Eventos');
    }
};