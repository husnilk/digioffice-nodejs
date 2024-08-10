"use strict";

const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let password = bcrypt.hashSync("password", 10);
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "admin@server.com",
          username: "admin",
          password: password,
          active: 1,
          type: "E",
          role: 2,
          avatar: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
