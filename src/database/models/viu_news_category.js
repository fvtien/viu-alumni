const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class viu_news_category extends Model {
    static associate(models) {
      viu_news_category.hasMany(models.viu_news, {
        foreignKey: "news_category_id",
      });
    }
  }
  viu_news_category.init(
    {
      news_category_id: {
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
    },
    {
      sequelize,
      modelName: "viu_news_category",
      timestamps: false,
    }
  );
  return viu_news_category;
};
