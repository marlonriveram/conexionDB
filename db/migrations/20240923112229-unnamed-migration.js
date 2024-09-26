'use strict';
const { DONANTE_TABLA,donanteSchemas } = require('../models/donate.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {


     await queryInterface.createTable(DONANTE_TABLA,donanteSchemas);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
