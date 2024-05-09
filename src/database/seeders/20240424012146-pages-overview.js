"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("pages", [
      {
        page_id: "b330121b-213d-4d07-bef5-fc89f54c580d",
        parent_page_id: null,
        page: "OVERVIEW",
        section: "HERO",
        title: "Elevating Plastic Bottle Packaging",
        subtitle: null,
        description:
          "Welcome to Hasil Raya, your gateway to a world of plastic bottle packaging innovation.",
        sequence: 1,
        last_updated_by: null,
        created_at: 1714486114605,
        updated_at: null,
      },
      {
        page_id: "d0592304-eeec-4604-9a45-397e559a2ba4",
        parent_page_id: null,
        section: "MAIN",
        page: "OVERVIEW",
        title: "Company Overview",
        subtitle: "Your needs",
        description:
          "At Hasil Raya, we understand the importance of finding a trusted plastic packaging partner that can deliver flexible and cost-effective solutions. Our commitment to excellence sets us apart, making us the perfect fit for your packaging needs.\n\nAs your dedicated partner, we take pride in collaborating closely with you, ensuring that your plastic packaging requirements are not only met but exceeded. We are committed to efficiency, quality, and innovation, and we're here to make your packaging journey as seamless as possible. Choose Hasil Raya for a reliable partner in plastic packaging solutions.",
        sequence: 2,
        last_updated_by: null,
        created_at: 1714486114605,
        updated_at: null,
      },
      {
        page_id: "5fb524ee-0c8a-404b-a5f6-31535d414251",
        parent_page_id: null,
        section: "SOLUTION",
        page: "OVERVIEW",
        title: "Our Solution",
        subtitle: null,
        description:
          "At Hasil Raya, we're fully prepared and well-equipped to cater to a wide array of plastic packaging requirements. From plastic bottles and closures to plastic cups, preforms, jerry cans, and even decoration printing, we've got you covered.\n\nAs your one-stop destination for comprehensive plastic packaging solutions, we offer end-to-end services. This means we can take your project from its initial idea generation stage all the way through product design, mock-up creation, mold production, manufacturing, and finally, decoration. We're your trusted partner in bringing your plastic packaging concepts to life, seamlessly managing every step of the process to ensure your satisfaction and success.",
        sequence: 3,
        last_updated_by: null,
        created_at: 1714486114605,
        updated_at: null,
      },
      {
        page_id: "c1438683-4179-4a6a-9ed8-e3461f34936b",
        parent_page_id: null,
        page: "OVERVIEW",
        section: "VISION_MISSION",
        title: "Vision & Mission",
        subtitle: null,
        description: null,
        sequence: 4,
        last_updated_by: null,
        created_at: 1714486114605,
        updated_at: null,
      },
      {
        page_id: "0895197d-922b-44b5-b802-b8fbfa231eb2",
        parent_page_id: "c1438683-4179-4a6a-9ed8-e3461f34936b",
        page: "OVERVIEW",
        section: "VISION",
        title: "Our Vision",
        subtitle: null,
        description:
          "At Hasil Raya, we understand the importance of finding a trusted plastic packaging partner that can deliver flexible and cost-effective solutions. Our commitment to excellence sets us apart, making us the perfect fit for your packaging needs.\n\nAs your dedicated partner, we take pride in collaborating closely with you, ensuring that your plastic packaging requirements are not only met but exceeded. We are committed to efficiency, quality, and innovation, and we're here to make your packaging journey as seamless as possible. Choose Hasil Raya for a reliable partner in plastic packaging solutions.",
        sequence: 1,
        last_updated_by: null,
        created_at: 1714486114605,
        updated_at: null,
      },
      {
        page_id: "2ebc5080-5d23-4cea-b0a7-d87152117aae",
        parent_page_id: "c1438683-4179-4a6a-9ed8-e3461f34936b",
        page: "OVERVIEW",
        section: "MISSION",
        title: "Our Mision",
        subtitle: null,
        description:
          "At Hasil Raya, our commitment to customer satisfaction is at the heart of everything we do. We place a high priority on our customers, going above and beyond to ensure that we not only provide exceptional products but also deliver exceptional customer service.\n\nOur dedicated and well-trained team is committed to taking an innovative, customer-first approach in all that we do. This approach translates to quick and responsive service, high-quality products, and cost-efficient solutions. We understand the importance of meeting your needs promptly, and we're here to ensure that you experience both the quality and efficiency you deserve",
        sequence: 2,
        last_updated_by: null,
        created_at: 1714486114605,
        updated_at: null,
      },
      {
        page_id: "f68f43d5-b6c1-4a22-b6b2-eb929abcb976",
        parent_page_id: null,
        page: "OVERVIEW",
        section: "MILESTONE",
        title: "Milestone",
        subtitle: null,
        description: null,
        sequence: 5,
        last_updated_by: null,
        created_at: 1714486114605,
        updated_at: null,
      },
      {
        page_id: "7377d3d9-c248-499c-bfa6-bd16ed238e24",
        parent_page_id: "f68f43d5-b6c1-4a22-b6b2-eb929abcb976",
        page: "OVERVIEW",
        title: "1978",
        subtitle: null,
        description:
          "PT. Hasil Raya Industries was established with a singular injection and a solitary blow mould machine, marking the modest yet determined beginnings of the company",
        sequence: 1,
        last_updated_by: null,
        created_at: 1714486114605,
        updated_at: null,
      },
      {
        page_id: "788068de-490d-4b49-a34c-5cb6374bfb25",
        parent_page_id: "f68f43d5-b6c1-4a22-b6b2-eb929abcb976",
        page: "OVERVIEW",
        title: "1992",
        subtitle: null,
        description:
          "In a strategic move towards expansion, Hasil Raya Industries solidified its presence by inaugurating a second manufacturing plant, strategically located in the bustling industrial hub of Tangerang",
        sequence: 2,
        last_updated_by: null,
        created_at: 1714486114605,
        updated_at: null,
      },
      {
        page_id: "aeaffc7c-ffe3-43de-b7da-39b992b4abc9",
        parent_page_id: "f68f43d5-b6c1-4a22-b6b2-eb929abcb976",
        page: "OVERVIEW",
        title: "1995",
        subtitle: null,
        description:
          "Responding keenly to industry trends and consumer preferences, we took a pivotal step by diversifying our product offerings through the initiation of PET product production.",
        sequence: 3,
        last_updated_by: null,
        created_at: 1714486114605,
        updated_at: null,
      },
      {
        page_id: "c2bbfd75-c99a-4db7-bef1-586614222cf3",
        parent_page_id: "f68f43d5-b6c1-4a22-b6b2-eb929abcb976",
        page: "OVERVIEW",
        title: "2004",
        subtitle: null,
        description:
          "At the forefront of technological innovation, Hasil Raya Industries embraced advanced thermoforming techniques for the streamlined production of plastic cups.",
        sequence: 4,
        last_updated_by: null,
        created_at: 1714486114605,
        updated_at: null,
      },
      {
        page_id: "7a682469-362b-4e77-b10b-c0d8ecccd2f9",
        parent_page_id: "f68f43d5-b6c1-4a22-b6b2-eb929abcb976",
        page: "OVERVIEW",
        title: "2009",
        subtitle: null,
        description:
          "A monumental milestone in our pursuit of operational excellence, all facets of our production were seamlessly consolidated into a state-of-the-art third plant located in Karawang.",
        sequence: 5,
        last_updated_by: null,
        created_at: 1714486114605,
        updated_at: null,
      },
      {
        page_id: "02fb31a3-9d16-4f3c-9dac-3d8a73edf6ad",
        parent_page_id: "f68f43d5-b6c1-4a22-b6b2-eb929abcb976",
        page: "OVERVIEW",
        title: "2012",
        subtitle: null,
        description:
          "Pioneering innovation within our production processes, Hasil Raya Industries initiated its first in-plant project, focusing on plastic thermoforming for beverage cups",
        sequence: 6,
        last_updated_by: null,
        created_at: 1714486114605,
        updated_at: null,
      },
      {
        page_id: "5e541ff4-81f1-47c7-95e6-eb40f6df6a46",
        parent_page_id: "f68f43d5-b6c1-4a22-b6b2-eb929abcb976",
        page: "OVERVIEW",
        title: "2013",
        subtitle: null,
        description:
          "Building on the success of our inaugural in-plant project, we achieved yet another milestone with the implementation of a second in-plant project. This project specifically targeted the production of PET beverage bottles",
        sequence: 7,
        last_updated_by: null,
        created_at: 1714486114605,
        updated_at: null,
      },
      {
        page_id: "60d8c7e7-59e5-4756-b16f-e564505f8b77",
        parent_page_id: "f68f43d5-b6c1-4a22-b6b2-eb929abcb976",
        page: "OVERVIEW",
        title: "2015",
        subtitle: null,
        description:
          "Continuing our trajectory of innovation, the implementation of a third in-plant project marked a specialized focus on PET hot fill beverage containers",
        sequence: 8,
        last_updated_by: null,
        created_at: 1714486114605,
        updated_at: null,
      },
      {
        page_id: "3cda484c-e739-4352-a4d7-b5391a5c5ea6",
        parent_page_id: "f68f43d5-b6c1-4a22-b6b2-eb929abcb976",
        page: "OVERVIEW",
        title: "2018",
        subtitle: null,
        description:
          "Beyond these individual achievements, our journey remains marked by an unwavering commitment to ongoing development and improvement. Hasil Raya Industries persists in its dedication to a customer-centric approach",
        sequence: 9,
        last_updated_by: null,
        created_at: 1714486114605,
        updated_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("pages", null, {});
  },
};
