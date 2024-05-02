"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("images", [
      {
        image_id: "9145fbb4-c86c-4207-b686-e6ce0fd97e18",
        page_id: "8121b852-d0d5-4a8d-b739-ba1667cfba1b",
        filename: "ddbb5534-bce1-40bf-961f-083d30f66169.png",
        created_at: 1714613304490,
        updated_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("images", null, {});
  },
};
