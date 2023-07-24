'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('Noticias', 'imagem', {
            type: Sequelize.INTEGER,
            allowNull: false,
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('Noticias', 'imagem');
    }
};
