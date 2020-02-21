module.exports = function(sequelize, DataTypes) {
    var Recommendation = sequelize.define("Recommendation", {
      brand:{ type: DataTypes.STRING, allowNull: false},
      url:{ type: DataTypes.STRING, allowNull: false},
      image:{ type: DataTypes.STRING, allowNull: false},
      price:{ type: DataTypes.DECIMAL(10,2), allowNull: false}
    });
  
    Recommendation.associate = function(models) {
        Recommendation.belongsTo(models.Ingredient, {
          foreignKey: {
            allowNull: false
          }
        });
    }

    return Recommendation;
};