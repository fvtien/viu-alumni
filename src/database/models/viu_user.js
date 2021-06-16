const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class viu_user extends Model {
    static associate(models) {
      viu_user.belongsTo(models.viu_user_group, {
        foreignKey: "user_group_id",
      });

      viu_user.hasMany(models.viu_news, {
        foreignKey: "user_id",
      });

      viu_user.hasMany(models.viu_recruit, {
        foreignKey: "user_id",
      });
    }
  }
  viu_user.init(
    {
      user_id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING(30),
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING(30),
      },
      date_birth: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      phone_number: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      faculty: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      majors: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      user_class: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      status: {
        allowNull: false,
        type: DataTypes.INTEGER(1),
        defaultValue: 1,
      },
    },
    {
      sequelize,
      modelName: "viu_user",
      timestamps: false,
    }
  );
  return viu_user;
};
