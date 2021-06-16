module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("viu_news", "news_category_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: "CASCADE",
      references: {
        model: "viu_news_categories",
        key: "news_category_id",
      },
    });
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("viu_news", "news_category_id");
  },
};
