"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("pages", [
      {
        page_id: "55db58a5-d8f8-4596-9d57-dfe79c238937",
        parent_page_id: null,
        page: "HOME",
        title: "To be a leading packaging partner to the industries",
        subtitle: null,
        description:
          "We prioritize sustainability by innovating eco-friendly plastic bottle packaging solutions that reduce environmental impact and meet our clients' diverse packaging needs.",
        sequence: 1,
        last_updated_by: null,
        created_at: 1714208782051,
        updated_at: null,
      },
      {
        page_id: "e50266ab-c7d6-446c-8a30-d2738a0a076d",
        parent_page_id: null,
        page: "HOME",
        title: "Who are we?",
        subtitle: null,
        description:
          "We are Hasil Raya Industries, a company that provides plastic packaging solutions for various industries. We have been in the plastic packaging industry for decades and have become an expert in our field. We offer products such as plastic bottles and caps, plastic cups, jerry cans and PET preforms as well as decoration printing and labelling. We are based in Jakarta, Indonesia and have a vision to be a leading packaging partner to the industries and a mission to deliver exceptional products and customer service.",
        sequence: 2,
        last_updated_by: null,
        created_at: 1714208826184,
        updated_at: null,
      },
      {
        page_id: "8247f25e-0f68-498c-b6a8-1e0cd24cd82d",
        parent_page_id: null,
        page: "HOME",
        title: "Product",
        subtitle: null,
        description: null,
        sequence: 3,
        last_updated_by: null,
        created_at: 1714208826184,
        updated_at: null,
      },
      {
        page_id: "6a7830ff-70a8-4e01-b07f-ffc4bc1c0e3a",
        parent_page_id: null,
        page: "HOME",
        title: "Our Solution",
        subtitle: null,
        description:
          "We provide plastic packaging solutions that meet the needs and expectations of our customers. We use high-quality materials and advanced technology to produce products that are durable, safe, and attractive. We also offer decoration printing and labelling services to enhance the appearance and functionality of our products. We have a wide range of products that can cater to various industries such as food & beverage, pharmaceuticals, agriculture, chemicals, cosmetics and personal care. We are committed to delivering exceptional products and customer service that make us a reliable and trusted packaging partner.",
        sequence: 4,
        last_updated_by: null,
        created_at: 1714216897143,
        updated_at: null,
      },
      {
        page_id: "57e9c4d1-312b-4f9e-9b8d-8066a6a512ef",
        parent_page_id: null,
        page: "HOME",
        title: "Our Customer",
        subtitle: null,
        description: null,
        sequence: 5,
        last_updated_by: null,
        created_at: 1714216897143,
        updated_at: null,
      },
      {
        page_id: "95a4c210-7968-4e9e-9539-16a115eb1ded",
        parent_page_id: null,
        page: "HOME",
        title: "Become a customer",
        subtitle: null,
        description:
          "Have questions, need assistance, or want to discuss your plastic bottle packaging needs? Don't hesitate to get in touch",
        sequence: 6,
        last_updated_by: null,
        created_at: 1714208826184,
        updated_at: null,
      },
      {
        page_id: "603c96e4-1a97-4fe9-9c50-9f50d7036a24",
        parent_page_id: null,
        page: "HOME",
        title: "Join Our Newsletter",
        subtitle: null,
        description:
          "Join Our Plastic Packaging Revolution: Stay Informed with Our Newsletter!",
        sequence: 7,
        last_updated_by: null,
        created_at: 1714208826184,
        updated_at: null,
      },
      {
        page_id: "7f62518d-347e-42c9-8a00-7acb68f2a3c5",
        parent_page_id: "8247f25e-0f68-498c-b6a8-1e0cd24cd82d",
        page: "HOME",
        title: "Bottles",
        subtitle: null,
        description: null,
        sequence: 1,
        last_updated_by: null,
        created_at: 1714216897143,
        updated_at: null,
      },
      {
        page_id: "f852d7ce-8242-4d0e-beb2-a994f905b848",
        parent_page_id: "8247f25e-0f68-498c-b6a8-1e0cd24cd82d",
        page: "HOME",
        title: "Caps & Closures",
        subtitle: null,
        description: null,
        sequence: 2,
        last_updated_by: null,
        created_at: 1714216897143,
        updated_at: null,
      },
      {
        page_id: "a50e2576-e5d1-43bc-8ed9-64be82a191d6",
        parent_page_id: "8247f25e-0f68-498c-b6a8-1e0cd24cd82d",
        page: "HOME",
        title: "Jars",
        subtitle: null,
        description: null,
        sequence: 3,
        last_updated_by: null,
        created_at: 1714216897143,
        updated_at: null,
      },
      {
        page_id: "58a340d8-fc31-4b98-bb69-55e9a21ffe8a",
        parent_page_id: "8247f25e-0f68-498c-b6a8-1e0cd24cd82d",
        page: "HOME",
        title: "Jerry Cans",
        subtitle: null,
        description: null,
        sequence: 4,
        last_updated_by: null,
        created_at: 1714216897143,
        updated_at: null,
      },
      {
        page_id: "f4128b66-b1d0-4e6b-9e33-4588af90d593",
        parent_page_id: "8247f25e-0f68-498c-b6a8-1e0cd24cd82d",
        page: "HOME",
        title: "Preforms",
        subtitle: null,
        description: null,
        sequence: 5,
        last_updated_by: null,
        created_at: 1714216897143,
        updated_at: null,
      },
      {
        page_id: "e66e504c-ee72-4012-9783-bb2502600880",
        parent_page_id: "8247f25e-0f68-498c-b6a8-1e0cd24cd82d",
        page: "HOME",
        title: "Cups",
        subtitle: null,
        description: null,
        sequence: 6,
        last_updated_by: null,
        created_at: 1714216897143,
        updated_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("pages", null, {});
  },
};
