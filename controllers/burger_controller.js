var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", (req, res) => {
  burger.selectAll(function(data) {
    var hbsObject = {burgers: data};
    console.log("HERE" + hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  let result = burger.create(req.body.burger_name);
  console.log(result);
  res.status(200).end();
});

router.put("/api/burgers/:burger_name", (req, res) => {
  let condition = "burger_name=" + "'" + req.params.burger_name + "'";
  let result = burger.update({devoured: true}, condition);
  console.log(result);
  res.status(200).end();
});

// Export routes for server.js to use.
module.exports = router;
