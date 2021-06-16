module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("viu_user_groups", {
      user_group_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      permission: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    });
  },
  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("viu_user_groups");
  },
};
