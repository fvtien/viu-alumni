module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("viu_recruits", "zone_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: "CASCADE",
      references: {
        model: "viu_zones",
        key: "zone_id",
      },
    });
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("viu_recruits", "zone_id");
  },
};
