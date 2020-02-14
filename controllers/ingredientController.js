var express = require("express")
var router = express.Router()
var db = require("../models");


router.get("/api/ingredients", (req, res) => {
    db.Ingredient.findAll().then(ingredients => {
        res.json(ingredients);
    })
})


module.exports = router;