var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// router.get("/", (req, res) => {
//   // burger.all(function(data) {
//   //   var hbsObject = {
//   //     burgers: data
//   //   };
//   //   console.log(hbsObject);
//   //   res.render("index", hbsObject);
//   // });
//   res.send("Hello, world");
// });

router.get("/", (req, res) => {
  let data = burger.selectAll();
  let hbsObject = {burgers: data};
  console.log(hbsObject);
  res.render("index", hbsObject);
});

// router.post("api/burgers", (req, res) => {
//   burger.create([

//   ])
// })

// Export routes for server.js to use.
module.exports = router;
