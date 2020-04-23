let orm = require("../config/orm.js");


var burger = {
 
  selectAll: () => {
    orm.selectAll("burgers");
  },
   
  create: (newVal) => {
    // call orm.insertOne with the correct values for YOUR burger database
    orm.insertOne("burgers", "burger_name", newVal);
  },

  update: (objColVals, condition) => {
    orm.updateOne("burgers", objColVals, condition);
  }

}

//TESTS
// burger.create("Bacon Burger");
// burger.update({devoured: true}, "burger_name='Big Mac'");


 

module.exports = burger;