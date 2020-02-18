var express = require("express")
var router = express.Router()
var db = require("../models");

router.get("/api/ingredients", (req, res) => {
    db.Ingredient.findAll().then(ingredients => {
        res.json(ingredients);
    })
})

router.get("/api/ingredients/:id", (req, res) => {
    db.Ingredient.findOne(
        {
            where: {
                id: req.params.id
            }
        }).then(data => {
            res.json(data)
        })
})

router.post("/api/ingredients", (req, res) => {
    db.Ingredient.create(req.body).then(data => {
        res.json(data)
    })
})

router.put("/api/ingredients/:id", (req, res) => {
    db.Ingredient.update(
        req.body,
        {
            where: {
                id: req.params.id
            }
        }).then(data => {
            res.json(data)
        })
})

router.delete("/api/ingredients/:id", (req, res) => {
    db.Ingredient.destroy({
        where: {
            id: req.params.id
        }
    }).then(deletedIngredient => {
        res.json(deletedIngredient);
    })
})

router.get('/seedit',(req,res)=>{
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
    db.Ingredient.bulkCreate(ingredients).then(data => {
        console.log("dataSeeded");
    })
})

module.exports = router;