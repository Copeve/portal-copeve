'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Eventos_concursos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            data: {
                allowNull:false,
                type: Sequelize.DATE
            },
            evento: {
                type: Sequelize.STRING
            },
            concurso: {
                type: Sequelize.INTEGER,
                allowNull: false, 
                references: { model:'Concursos', key: 'id' }
            },
            tipo_evento: {
                type: Sequelize.INTEGER,
                allowNull: false, //pode ser nulll ou  não?
                references: { model:'Tipos_eventos', key: 'id' }
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
        await queryInterface.dropTable('Eventos_concursos');
    }
};