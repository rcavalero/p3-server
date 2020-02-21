module.exports = function(sequelize, DataTypes) {
    var Ingredient = sequelize.define("Ingredient", {
      name:{ type: DataTypes.STRING, allowNull: false}
    });

    Ingredient.associate = function(models) {
      Ingredient.hasMany(models.Recommendation, {
        onDelete: "cascade"
      });
    };
  
    return Ingredient;
  };