var express = require("express")
var router = express.Router()
const bcrypt = require("bcrypt");

var db = require("../models");

router.post("/api/auth/signup", (req, res) => {
    db.User.create(req.body).then(userData => {
      res.json(userData);
    })
  })

router.post("/api/auth/login", (req, res) => {
db.User.findOne({
    where: {
    name: req.body.name
    }
}).then(dbUser=>{
    // this will compare encrypted password to entered password
    if(bcrypt.compareSync(req.body.password,dbUser.password)){
    req.session.user={
        id:dbUser.id,
        name:dbUser.name
    }
    res.json(req.session.user)
    }
    else{
    res.status(401).json("not logged in")
    }
})
})

router.get('/api/auth/loggedinuser',(req,res)=>{
if(req.session.user){
    res.json(req.session.user)
} else {
    res.status(401).json("not logged in")
}
})



module.exports = router;