const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class viu_menu extends Model {}
  viu_menu.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      parent_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      url: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "viu_menu",
      timestamps: false,
    }
  );
  return viu_menu;
};
