var express = require('express');
const cors = require("cors");
const bcrypt = require("bcrypt");
const session = require("express-session")



// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// app.use(cors({
//     origin:["http://localhost:3000"],
//     credentials: true 
// }));

app.use(session({ secret: "something secret here", resave: true, saveUninitialized: true,cookie:{maxAge: 7200000} }));

app.use(cors({
    origin:["https://seefood-app.herokuapp.com"],
    credentials: true 
}));

// Requiring our models for syncing
var db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const ingredientController = require("./controllers/ingredientController");
app.use(ingredientController)
const userController = require("./controllers/userController");
app.use(userController)


db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});
