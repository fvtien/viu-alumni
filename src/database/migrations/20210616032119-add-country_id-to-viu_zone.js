module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("viu_zones", "country_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: "CASCADE",
      references: {
        model: "viu_countries",
        key: "country_id",
      },
    });
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("viu_zones", "country_id");
  },
};
