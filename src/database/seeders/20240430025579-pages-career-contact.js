"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("pages", [
      {
        page_id: "9f7b9490-479a-4616-90b0-5f6811cb4e35",
        parent_page_id: null,
        page: "CAREER",
        title: "Join Our Team",
        subtitle:
          "We are always looking for great talent to be a part of Hasil Raya’s Team",
        description: null,
        sequence: 1,
        last_updated_by: null,
        created_at: 1714613347866,
        updated_at: null,
      },
      {
        page_id: "8121b852-d0d5-4a8d-b739-ba1667cfba1b",
        parent_page_id: null,
        page: "CONTACT",
        title: "Get in Touch with Us",
        subtitle: "Contact us today to learn more about how we can help you",
        description: null,
        sequence: 1,
        last_updated_by: null,
        created_at: 1714613304250,
        updated_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("pages", null, {});
  },
};
