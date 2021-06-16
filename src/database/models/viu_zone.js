const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class viu_zone extends Model {
    static associate(models) {
      viu_zone.belongsTo(models.viu_country, {
        foreignKey: "country_id",
      });

      viu_zone.hasMany(models.viu_recruit, {
        foreignKey: "zone_id",
      });
    }
  }
  viu_zone.init(
    {
      zone_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
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
      modelName: "viu_zone",
      timestamps: false,
    }
  );
  return viu_zone;
};
