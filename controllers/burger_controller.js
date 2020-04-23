var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", (req, res) => {
  let data = burger.selectAll();
  let hbsObject = {burgers: data};
  console.log(hbsObject);
  res.render("index", hbsObject);
});

router.post("/api/burgers", (req, res) => {
  result = burger.create(
  [
   "burger_name", "devoured" 
  ],
  [
    req.body.burger_name, req.body.devoured
  ],
  res.json({ id: result.insertId })
  );
});

// Export routes for server.js to use.
module.exports = router;
