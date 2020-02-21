var express = require("express")
var router = express.Router()
var db = require("../models");

router.get("/api/ingredients", (req, res) => {
    db.Ingredient.findAll().then(ingredients => {
        res.json(ingredients);
    })
})

router.get("/api/ingredient/:id", (req, res) => {
    db.Ingredient.findOne(
        {
            where: {
                id: req.params.id
            }
        }).then(data => {
            res.json(data)
        })
})

router.get("/api/recommendations/:id", (req, res) => {
    db.Recommendation.findAll(
        {   attributes: ["brand", "url", "image", "price"],
            include: [{model: db.Ingredient, attributes: ["name"] }],
            where: {
                Ingredientid: req.params.id,
            },

        }).then(data => {
            res.json(data)
        })
})

router.post("/api/ingredient", (req, res) => {
    db.Ingredient.create(req.body).then(data => {
        res.json(data)
    })
})

router.post("/api/recommendation", (req, res) => {
    db.Recommendation.create(req.body).then(data => {
        res.json(data)
    })
})

router.delete("/api/ingredient/:id", (req, res) => {
    db.Ingredient.destroy({
        where: {
            id: req.params.id
        }
    }).then(deletedIngredient => {
        res.json(deletedIngredient);
    })
})

router.delete("/api/recommendation/:id", (req, res) => {
    db.Recommendation.destroy({
        where: {
            id: req.params.id
        }
    }).then(deletedRecommendation => {
        res.json(deletedRecommendation);
    })
})


// router.get("/api/seed", (req, res) => {

//     db.Ingredient.bulkCreate(
//         [
//             { name: "Salt" },
//             { name: "Pepper" },
//             { name: "Ketchup" },
//             { name: "Onion" },
//             { name: "Tomato" },
//             { name: "Ground Beef" },
//             { name: "Mayonaise" },
//             { name: "Cheddar Cheese" },
//             { name: "Mustard" },
//             { name: "Hamburger Buns" }
//         ],
//     ).then(function (dbIngredient) {
//         console.log("Ingredients added!");


//         db.Recommendation.bulkCreate(
//             [{
//                 brand: "Hunts",
//                 url: "https://www.amazon.com/Hunts-Tomato-Ketchup/dp/B005GD9156",
//                 image: "tba",
//                 price: 4.79,
//                 IngredientId: 3
//             },
//             {
//                 brand: "Heinz",
//                 url: "https://www.amazon.com/s?k=heinz+ketchup&i=grocery&crid=13KAL1N6GC6ZB&sprefix=heinz+%2Cgrocery%2C246&ref=nb_sb_ss_i_1_6",
//                 image: "tba",
//                 price: 2.23,
//                 IngredientId: 3
//             },
//             {
//                 brand: "Portland",
//                 url: "https://www.amazon.com/s?k=portland+ketchup&i=grocery&ref=nb_sb_noss_2",
//                 image: "tba",
//                 price: 11.39,
//                 IngredientId: 3
//             }]
//         ).then(function (dbRecommendation) {
//             console.log("Recommendations added!");
//         });
//     })
// })

module.exports = router;