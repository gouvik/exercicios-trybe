"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /* 
id: dever ser do tipo integer, não pode ser nula e ser a chave primária da tabela com auto incremento;
title: deve ser do tipo string e não pode ser nulo;
author: deve ser do tipo string e não pode ser nulo;
pageQuantity: deve ser do tipo integer e pode ser nulo;
createdAt: deve ser do tipo date e não pode ser nulo;
updatedAt: deve ser do tipo date e não pode ser nulo;
  */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Books", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pageQuantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("books");
  },
};
