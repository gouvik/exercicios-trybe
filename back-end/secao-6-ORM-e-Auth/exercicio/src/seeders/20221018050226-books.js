'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkInsert('Books', [
      {
         title: 'John Doe',
         author: 'God',
         pageQuantity: 200,
         createdAt: new Date("2022-01-28T04:51:32.514Z"),
         updatedAt: new Date("2022-01-28T04:51:32.514Z"),
       },
       {
        title: 'A Culpa é das Estrelas',
        author: 'John Green',
        pageQuantity: 250,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Books', null, {});
  }
};
