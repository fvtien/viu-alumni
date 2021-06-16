const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class viu_news extends Model {
    static associate(models) {
      viu_news.belongsTo(models.viu_user, {
        foreignKey: "user_id",
      });

      viu_news.belongsTo(models.viu_news_category, {
        foreignKey: "news_category_id",
      });
    }
  }
  viu_news.init(
    {
      news_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      short_description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      status: {
        allowNull: false,
        type: DataTypes.INTEGER(1),
        defaultValue: 0,
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
      modelName: "viu_news",
    }
  );
  return viu_news;
};
