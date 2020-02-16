module.exports = function(sequelize, DataTypes) {
    var Ingredient = sequelize.define("Ingredient", {
      ingredient:{ type: DataTypes.STRING, allowNull: false},
      asin1:DataTypes.STRING,
      asin2:DataTypes.STRING,
      asin3:DataTypes.STRING,
      asin4:DataTypes.STRING
    });
  
  
    return Ingredient;
  };