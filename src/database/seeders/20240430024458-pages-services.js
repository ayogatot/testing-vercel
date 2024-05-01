"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("pages", [
      {
        page_id: "8e66c350-2137-469a-b9ee-ce06fa775a9d",
        parent_page_id: null,
        page: "SERVICE",
        title: "Our Services",
        subtitle: null,
        description:
          "Discover stress-free packaging solutions with our services.",
        sequence: 1,
        last_updated_by: null,
        created_at: 1714536483612,
        updated_at: null,
      },
      {
        page_id: "f3ac23b8-c6ef-492f-bfa5-9c2f16f0ea1c",
        parent_page_id: null,
        page: "SERVICE",
        title: "Ideas to Product",
        subtitle: null,
        description: null,
        sequence: 2,
        last_updated_by: null,
        created_at: 1714536483612,
        updated_at: null,
      },
      {
        page_id: "cdeff5ec-24da-43d1-99eb-ac1642a5b4ee",
        parent_page_id: "f3ac23b8-c6ef-492f-bfa5-9c2f16f0ea1c",
        page: "SERVICE",
        title: "Idea",
        subtitle: null,
        description: "Transform your vision into the perfect bottle design",
        sequence: 1,
        last_updated_by: null,
        created_at: 1714536483612,
        updated_at: null,
      },
      {
        page_id: "a2b727fa-cba7-470e-bcd6-009fda782e42",
        parent_page_id: "f3ac23b8-c6ef-492f-bfa5-9c2f16f0ea1c",
        page: "SERVICE",
        title: "Product Design",
        subtitle: null,
        description:
          "Our skilled team ensures functionality and manufacturability",
        sequence: 2,
        last_updated_by: null,
        created_at: 1714536483612,
        updated_at: null,
      },
      {
        page_id: "b22e8b45-273d-4869-90f7-ba056bc2be0e",
        parent_page_id: "f3ac23b8-c6ef-492f-bfa5-9c2f16f0ea1c",
        page: "SERVICE",
        title: "Mock Up",
        subtitle: null,
        description: "Fine-tune your design with a realistic mock-up",
        sequence: 3,
        last_updated_by: null,
        created_at: 1714536483612,
        updated_at: null,
      },
      {
        page_id: "ad88c1b8-f4de-414b-bd38-545b525dc862",
        parent_page_id: "f3ac23b8-c6ef-492f-bfa5-9c2f16f0ea1c",
        page: "SERVICE",
        title: "Mould Development",
        subtitle: null,
        description: "Precision molds for seamless production.",
        sequence: 4,
        last_updated_by: null,
        created_at: 1714536483612,
        updated_at: null,
      },
      {
        page_id: "afcd0b8d-7d9d-41cc-b0a0-3c6babf40497",
        parent_page_id: "f3ac23b8-c6ef-492f-bfa5-9c2f16f0ea1c",
        page: "SERVICE",
        title: "Production",
        subtitle: null,
        description: "Quality materials, expert craftsmanship",
        sequence: 5,
        last_updated_by: null,
        created_at: 1714536483612,
        updated_at: null,
      },
      {
        page_id: "ef6bd4b8-8d9e-4747-a887-ce308957ac84",
        parent_page_id: "f3ac23b8-c6ef-492f-bfa5-9c2f16f0ea1c",
        page: "SERVICE",
        title: "QC",
        subtitle: null,
        description: "Rigorous checks for consistency and excellence.",
        sequence: 6,
        last_updated_by: null,
        created_at: 1714536483612,
        updated_at: null,
      },
      {
        page_id: "33536cbd-742f-426a-ab36-670354495e94",
        parent_page_id: "f3ac23b8-c6ef-492f-bfa5-9c2f16f0ea1c",
        page: "SERVICE",
        title: "Delivery",
        subtitle: null,
        description:
          "Carefully packaged, promptly shipped, ready for confident showcasing",
        sequence: 7,
        last_updated_by: null,
        created_at: 1714536483613,
        updated_at: null,
      },
      {
        page_id: "7010f679-dc27-4b52-851a-95d42efaa696",
        parent_page_id: null,
        page: "SERVICE",
        title: "Services",
        subtitle: null,
        description: null,
        sequence: 3,
        last_updated_by: null,
        created_at: 1714536483612,
        updated_at: null,
      },
      {
        page_id: "9979111b-e675-47ce-8346-426e32e3ab41",
        parent_page_id: "7010f679-dc27-4b52-851a-95d42efaa696",
        page: "SERVICE",
        title: "Clean Room",
        subtitle: null,
        description:
          "When high-volume production of uniform plastic containers is required, we turn to extrusion blow molding. It's an efficient method for creating consistent, quality products, highlighting our commitment to efficiency and reliability.",
        sequence: 1,
        last_updated_by: null,
        created_at: 1714536483612,
        updated_at: null,
      },
      {
        page_id: "810dc098-46b2-471d-9d8e-57069ccaf881",
        parent_page_id: "7010f679-dc27-4b52-851a-95d42efaa696",
        page: "SERVICE",
        title: "In Plant",
        subtitle: null,
        description:
          "If you're in need of lightweight yet sturdy plastic bottles, stretch blow molding is the solution. This technique ensures that our final products are both robust and visually appealing, meeting the demands of various industries and applications",
        sequence: 2,
        last_updated_by: null,
        created_at: 1714536483612,
        updated_at: null,
      },
      {
        page_id: "7eb6d969-16e2-46d2-b9d0-53ee314b9e0e",
        parent_page_id: "7010f679-dc27-4b52-851a-95d42efaa696",
        page: "SERVICE",
        title: "Decorative Services",
        subtitle: null,
        description:
          "In the realm of PET bottles, our preform systems play a pivotal role. We manufacture preforms that, when heated, are transformed into PET bottles with exceptional clarity and durability. This process reflects our dedication to providing superior PET packaging solutions.",
        sequence: 3,
        last_updated_by: null,
        created_at: 1714536483612,
        updated_at: null,
      },
      {
        page_id: "813e483d-9c1f-4b3b-8a5b-594ac54a9b25",
        parent_page_id: null,
        page: "SERVICE",
        title: "Processes",
        subtitle: null,
        description: null,
        sequence: 4,
        last_updated_by: null,
        created_at: 1714536483612,
        updated_at: null,
      },
      {
        page_id: "270d0454-3c5f-4375-b8a8-26d8410324a2",
        parent_page_id: "813e483d-9c1f-4b3b-8a5b-594ac54a9b25",
        page: "SERVICE",
        title: "Injection",
        subtitle: null,
        description: null,
        sequence: 1,
        last_updated_by: null,
        created_at: 1714536483612,
        updated_at: null,
      },
      {
        page_id: "6a8de880-6fb3-4525-8b41-d02e8a27485e",
        parent_page_id: "813e483d-9c1f-4b3b-8a5b-594ac54a9b25",
        page: "SERVICE",
        title: "Injection Blow",
        subtitle: null,
        description: null,
        sequence: 2,
        last_updated_by: null,
        created_at: 1714536483612,
        updated_at: null,
      },
      {
        page_id: "d15f2a39-1595-4d25-b3d9-7ed382b67469",
        parent_page_id: "813e483d-9c1f-4b3b-8a5b-594ac54a9b25",
        page: "SERVICE",
        title: "Injection Strecth Blow",
        subtitle: null,
        description: null,
        sequence: 3,
        last_updated_by: null,
        created_at: 1714536483612,
        updated_at: null,
      },
      {
        page_id: "7fbd8ee6-ff48-46a5-8f6a-639ef1aea3a1",
        parent_page_id: "813e483d-9c1f-4b3b-8a5b-594ac54a9b25",
        page: "SERVICE",
        title: "Extrusion Blow",
        subtitle: null,
        description: null,
        sequence: 4,
        last_updated_by: null,
        created_at: 1714536483612,
        updated_at: null,
      },
      {
        page_id: "79d62267-79e8-49cb-83a1-6e802f91d444",
        parent_page_id: "813e483d-9c1f-4b3b-8a5b-594ac54a9b25",
        page: "SERVICE",
        title: "Strecth Blow",
        subtitle: null,
        description: null,
        sequence: 5,
        last_updated_by: null,
        created_at: 1714536483612,
        updated_at: null,
      },
      {
        page_id: "a0c9a9c3-8d72-47f6-95f8-53854cddeef3",
        parent_page_id: "813e483d-9c1f-4b3b-8a5b-594ac54a9b25",
        page: "SERVICE",
        title: "Preform System",
        subtitle: null,
        description: null,
        sequence: 6,
        last_updated_by: null,
        created_at: 1714536483612,
        updated_at: null,
      },
      {
        page_id: "251484fb-fdcb-480e-91d4-1a24e89f558a",
        parent_page_id: "813e483d-9c1f-4b3b-8a5b-594ac54a9b25",
        page: "SERVICE",
        title: "Thermoforming",
        subtitle: null,
        description: null,
        sequence: 7,
        last_updated_by: null,
        created_at: 1714536483612,
        updated_at: null,
      },
      {
        page_id: "20b3a1b5-9c1d-445d-83c4-f71738592a2c",
        parent_page_id: null,
        page: "SERVICE",
        title: "Connect with Us",
        subtitle: null,
        description:
          "Have questions, need assistance, or want to discuss your plastic bottle packaging needs? Don't hesitate to get in touch",
        sequence: 5,
        last_updated_by: null,
        created_at: 1714541127582,
        updated_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("pages", null, {});
  },
};
