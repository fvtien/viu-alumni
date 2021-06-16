module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("viu_users", "user_group_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: "CASCADE",
      references: {
        model: "viu_user_groups",
        key: "user_group_id",
      },
    });
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("viu_users", "user_group_id");
  },
};
