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

module.exports = router;