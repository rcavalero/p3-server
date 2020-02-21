const db = require("./models");


db.Ingredient.bulkCreate(
    [
    {   name: "Salt"},
    {   name: "Pepper"},
    {   name: "Ketchup"},
    {   name: "Onion"},
    {   name: "Tomato"},
    {   name: "Ground Beef"},
    {   name: "Mayonaise"},
    {   name: "Cheddar Cheese"},
    {   name: "Mustard"},
    {   name: "Hamburger Buns"}
    ],
).then(function (dbIngredient) {
    console.log("Ingredients added!");


    db.Recommendation.bulkCreate(
       [ {
            brand: "Hunts",
            url: "https://www.amazon.com/Hunts-Tomato-Ketchup/dp/B005GD9156",
            image: "tba",
            price: 4.79,
            IngredientId: 3
        },
        {
            brand: "Heinz",
            url: "https://www.amazon.com/s?k=heinz+ketchup&i=grocery&crid=13KAL1N6GC6ZB&sprefix=heinz+%2Cgrocery%2C246&ref=nb_sb_ss_i_1_6",
            image: "tba",
            price: 2.23,
            IngredientId: 3
        },
        {
            brand: "Portland",
            url: "https://www.amazon.com/s?k=portland+ketchup&i=grocery&ref=nb_sb_noss_2",
            image: "tba",
            price: 11.39,
            IngredientId: 3
        }]
    ).then(function (dbIngredient) {
        console.log("Recommendations added!");
    });
})