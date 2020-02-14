const ingredients = [
    {
        "ingredient": "Salt",
        "asin1": "B06XPN2785",
        "asin2": "B00IZL2572",
        "asin3": "B000Q3E8EA"
    },
    {
        "ingredient": "Black Pepper",
        "asin1": "B07VXKYTC3",
        "asin2": "B074H5LYJN",
        "asin3": "B0014E840Y"
    }
]

const db = require("./models");

db.Ingredient.bulkCreate(ingredients).then(data => {
    console.log("dataSeeded");
})