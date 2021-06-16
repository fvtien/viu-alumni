module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("viu_recruits", {
      recruit_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      job_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      company_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      phone_number: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      salary_min: {
        allowNull: false,
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      salary_max: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      date_begin: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      date_end: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      skills: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("viu_recruits");
  },
};
