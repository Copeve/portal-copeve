'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('Eventos', 'link_evento', {
            type: Sequelize.STRING,
            allowNull: true,
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('Eventos', 'link_evento');
    }
};
