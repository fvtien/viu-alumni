const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class viu_recruit extends Model {
    static associate(models) {
      viu_recruit.belongsTo(models.viu_user, {
        foreignKey: "user_id",
      });

      viu_recruit.belongsTo(models.viu_zone, {
        foreignKey: "zone_id",
      });
    }
  }
  viu_recruit.init(
    {
      recruit_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      job_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      company_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      phone_number: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      salary_min: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      salary_max: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      date_begin: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      date_end: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      skills: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "viu_recruit",
    }
  );
  return viu_recruit;
};
