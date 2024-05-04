"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("applicants", [
      {
        applicant_id: "981bc9ea-cda7-40f8-b157-0503f10c2825",
        career_id: "70340995-5b3d-4745-822f-9ea3aa08ca60",
        email: "jhon@gmail.com",
        first_name: "John",
        last_name: "Doe",
        phone_number: "08912999121",
        message:
          "Saya ingin bekerja disini, saya adalah orang yg bekerja sangat kuat eh keras",
        cv: "a971dbac-35e6-4f52-9803-656a57e2903f.pdf",
        created_at: 1714801243243,
        updated_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("applicants", null, {});
  },
};
