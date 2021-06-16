const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class viu_country extends Model {}
  viu_country.init(
    {
      country_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(128),
      },
      status: {
        allowNull: false,
        type: DataTypes.INTEGER(1),
        defaultValue: 1,
      },
    },
    {
      sequelize,
      modelName: "viu_country",
      timestamps: false,
    }
  );
  return viu_country;
};
