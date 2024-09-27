"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("careers", [
      {
        career_id: "cf7736b0-bb8d-47d9-8510-49e4c1bff610",
        title: "Web Developer",
        job_description:
          "Join our team as a Web Developer and play a crucial role in shaping exceptional user experiences and intuitive interfaces. As a key member of our design team, you will collaborate with cross-functional teams to understand user needs, create wireframes, prototypes, and deliver visually stunning designs. Your responsibilities will include conducting user research, iterating on designs based on feedback, and ensuring a seamless and delightful user journey. If you have a passion for creating visually appealing and user-friendly digital products, along with a strong grasp of design tools and industry trends, we invite you to contribute your skills to our dynamic team. Join us in crafting interfaces that not only meet but exceed user expectations",
        requirements:
          "<ol><li>Proven experience as a UI/UX Designer or similar role.</li><li>Strong portfolio showcasing a range of design projects.</li><li>Proficiency in design tools such as Sketch, Figma, or Adobe Creative Suite.</li><li>Solid understanding of user-centered design principles.</li><li>Ability to conduct user research and translate findings into design solutions.</li><li>Excellent communication skills and the ability to collaborate effectively with cross-functional teams.</li><li>Up-to-date with the latest UI/UX trends, techniques, and technologies.</li><li>Detail-oriented with a keen eye for aesthetics and a passion for creating visually appealing interfaces.</li><li>Bachelor's degree in Design, Human-Computer Interaction, or a related field (or equivalent work experience).</li></ol>",
        is_active: true,
        created_at: 1714620212891,
        updated_at: null,
      },
      {
        career_id: "70340995-5b3d-4745-822f-9ea3aa08ca60",
        title: "Mobile Developer",
        job_description:
          "Join our team as a Mobile Developer and play a crucial role in shaping exceptional user experiences and intuitive interfaces. As a key member of our design team, you will collaborate with cross-functional teams to understand user needs, create wireframes, prototypes, and deliver visually stunning designs. Your responsibilities will include conducting user research, iterating on designs based on feedback, and ensuring a seamless and delightful user journey. If you have a passion for creating visually appealing and user-friendly digital products, along with a strong grasp of design tools and industry trends, we invite you to contribute your skills to our dynamic team. Join us in crafting interfaces that not only meet but exceed user expectations",
        requirements:
          "<ol><li>Proven experience as a UI/UX Designer or similar role.</li><li>Strong portfolio showcasing a range of design projects.</li><li>Proficiency in design tools such as Sketch, Figma, or Adobe Creative Suite.</li><li>Solid understanding of user-centered design principles.</li><li>Ability to conduct user research and translate findings into design solutions.</li><li>Excellent communication skills and the ability to collaborate effectively with cross-functional teams.</li><li>Up-to-date with the latest UI/UX trends, techniques, and technologies.</li><li>Detail-oriented with a keen eye for aesthetics and a passion for creating visually appealing interfaces.</li><li>Bachelor's degree in Design, Human-Computer Interaction, or a related field (or equivalent work experience).</li></ol>",
        is_active: false,
        created_at: 1714619993065,
        updated_at: 1714620198066,
      },
      {
        career_id: "a3183862-3e1d-403d-9b8f-17c665c104b7",
        title: "UI/UX Designer",
        job_description:
          "Join our team as a UI/UX Designer and play a crucial role in shaping exceptional user experiences and intuitive interfaces. As a key member of our design team, you will collaborate with cross-functional teams to understand user needs, create wireframes, prototypes, and deliver visually stunning designs. Your responsibilities will include conducting user research, iterating on designs based on feedback, and ensuring a seamless and delightful user journey. If you have a passion for creating visually appealing and user-friendly digital products, along with a strong grasp of design tools and industry trends, we invite you to contribute your skills to our dynamic team. Join us in crafting interfaces that not only meet but exceed user expectations",
        requirements:
          "<ol><li>Proven experience as a UI/UX Designer or similar role.</li><li>Strong portfolio showcasing a range of design projects.</li><li>Proficiency in design tools such as Sketch, Figma, or Adobe Creative Suite.</li><li>Solid understanding of user-centered design principles.</li><li>Ability to conduct user research and translate findings into design solutions.</li><li>Excellent communication skills and the ability to collaborate effectively with cross-functional teams.</li><li>Up-to-date with the latest UI/UX trends, techniques, and technologies.</li><li>Detail-oriented with a keen eye for aesthetics and a passion for creating visually appealing interfaces.</li><li>Bachelor's degree in Design, Human-Computer Interaction, or a related field (or equivalent work experience).</li></ol>",
        is_active: true,
        created_at: 1714619956069,
        updated_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("careers", null, {});
  },
};
