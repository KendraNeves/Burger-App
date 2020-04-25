let orm = require("../config/orm.js");


var burger = {
 
  selectAll: (cb) => {
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  },
   
  create: (newVal) => {
    // call orm.insertOne with the correct values for YOUR burger database
    let result = orm.insertOne("burgers", "burger_name", newVal);
    return result;
  },

  update: (objColVals, condition) => {
    let result = orm.updateOne("burgers", objColVals, condition);
    return result;
  }

}

//TESTS
// burger.selectAll()
// burger.create("Bacon Burger");
// burger.update({devoured: true}, "burger_name='Big Mac'");


 

module.exports = burger;