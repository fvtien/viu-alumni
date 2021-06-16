module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("viu_users", {
      user_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      date_birth: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      phone_number: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      faculty: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      majors: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_class: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("viu_users");
  },
};
