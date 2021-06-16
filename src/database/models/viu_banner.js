const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class viu_banner extends Model {}
  viu_banner.init(
    {
      banner_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      link: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "viu_banner",
      timestamps: false,
    }
  );
  return viu_banner;
};
