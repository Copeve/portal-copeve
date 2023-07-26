'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.changeColumn('Noticias', 'corpo', {
            type: Sequelize.TEXT,
            allowNull: true,
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.changeColumn('Noticias', 'corpo', {
            type: Sequelize.STRING,
            allowNull: true,
        });
    }
};