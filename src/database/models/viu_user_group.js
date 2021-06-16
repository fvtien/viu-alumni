const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class viu_user_group extends Model {
    static associate(models) {
      viu_user_group.hasMany(models.viu_user, {
        foreignKey: "user_group_id",
      });
    }
  }
  viu_user_group.init(
    {
      user_group_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(30),
      },
      permission: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "viu_user_group",
      timestamps: false,
    }
  );
  return viu_user_group;
};
