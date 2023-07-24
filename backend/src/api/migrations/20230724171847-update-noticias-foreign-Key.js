'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        
        await queryInterface.addColumn('Noticias', 'imagem', {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: { model:'Arquivos_concursos', key: 'id' }
        });
    },
};