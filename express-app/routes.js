const express = require("express"),
  router = express.Router();

//GET home page.
router.get("/", function(req, res) {
  res.render("index.html");
});

router.get("/users/list", function(req, res) {
  var data=[
    {id:1,name:"二狗",age:22},
    {id:1,name:"二狗",age:22},
    {id:1,name:"二狗",age:22},
    {id:1,name:"二狗",age:22},
    {id:1,name:"二狗",age:22}
  ]
  res.json({
    code:200,
    data:data
  });
});

router.get("/pageThree", function(req, res) {
  res.render("pageThree", { title: "Page 3" });
});

router.get("/pageFour", function(req, res) {
  res.render("pageFour", { title: "Page 4" });
});

module.exports = router;
