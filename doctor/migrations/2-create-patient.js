'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dob: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_id:{
        type: Sequelize.INTEGER,
        reference:{
          model:"Users",
          key:"id"
        }
      },
      doctor_id:{
        type:Sequelize.INTEGER,
        reference:{
          model:"Doctors",
          key:"id"
        }
      },
      reception_id:{
        type:Sequelize.INTEGER,
        reference:{
          model:"Receptionlists",
          key:"id"
        }
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
    await queryInterface.dropTable('Patients');
  }
};