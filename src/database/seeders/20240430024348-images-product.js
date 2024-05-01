"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("images", [
      {
        image_id: "4db9591c-1051-4e9a-9c8d-e1530cbdf4c0",
        page_id: "a0ddbe7f-cd0c-46ef-9c95-184980f7d2ac",
        filename: "3b83893d-e2d3-4ce1-8866-857b14699437.png",
        created_at: 1714534530217,
        updated_at: null,
      },
      {
        image_id: "e065adad-c86d-4fb7-91fe-4e41b3bc3d67",
        page_id: "6baec89e-4c9d-4ea3-8668-b3f2773052fe",
        filename: "d33d8ac5-e03b-4d80-8691-6407a9e698ff.png",
        created_at: 1714534693535,
        updated_at: null,
      },
      {
        image_id: "d1218f73-6809-4e84-b9d4-bea3f9852e02",
        page_id: "4d85f66a-81c2-4369-b3cc-86e073df0deb",
        filename: "f1320a8b-d613-49b6-98cc-c3ad33e1617e.png",
        created_at: 1714534718141,
        updated_at: null,
      },
      {
        image_id: "40f933fb-b29c-4211-9dd4-a82856f318fe",
        page_id: "8e858983-9494-4405-a3aa-724e0d3b909b",
        filename: "edf9eadf-69b3-4518-96dc-92a1b8dea63e.png",
        created_at: 1714534744449,
        updated_at: null,
      },
      {
        image_id: "268c98a5-383d-4900-bd4f-b1ed77a120d8",
        page_id: "6040290b-e7a0-4c39-8e78-ef88295aab1d",
        filename: "37c0c8e5-71df-42e1-83e2-0a22f91690d8.png",
        created_at: 1714534773273,
        updated_at: null,
      },
      {
        image_id: "563812fe-24b7-4717-b3e9-d54b27fc8aa7",
        page_id: "312ba431-eb5f-467b-860b-0ef8c7f0e252",
        filename: "f5fb0e01-42a2-4f9a-8d4b-4d9e1f81dead.png",
        created_at: 1714534801048,
        updated_at: null,
      },
      {
        image_id: "d6a0435d-a17d-470a-99e2-b8e261b432e2",
        page_id: "230ca4a8-99f0-4d67-b62e-a57cbbdb0904",
        filename: "3e027eea-5f24-4713-af5e-945fa1b78574.png",
        created_at: 1714534832652,
        updated_at: null,
      },
      {
        image_id: "5c6c144c-e33c-4dbe-bb05-72ed9a2b04ec",
        page_id: "795aac38-9ba0-401d-953c-8a158c69ebdf",
        filename: "e513daca-d225-4b95-934f-9c34de908224.png",
        created_at: 1714534874755,
        updated_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("images", null, {});
  },
};
