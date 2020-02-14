var express = require('express');
const cors = require("cors");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(cors({
    origin:["http://localhost:3000"]
}));
// app.use(cors({
//     origin:["https://seefood.herokuapp.com"]
// }));

// Requiring our models for syncing
var db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const ingredientController = require("./controllers/ingredientController");
app.use(ingredientController)

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});
