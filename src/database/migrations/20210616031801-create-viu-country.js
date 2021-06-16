module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("viu_countries", {
      country_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(128),
      },
      status: {
        allowNull: false,
        type: Sequelize.INTEGER(1),
        defaultValue: 1,
      },
    });
  },
  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("viu_countries");
  },
};
