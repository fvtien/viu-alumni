module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("viu_news", "user_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: "CASCADE",
      references: {
        model: "viu_users",
        key: "user_id",
      },
    });
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("viu_news", "user_id");
  },
};
