// Require the orm file from the config folder
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    create: function(cols, vals, cb){
        orm.create('burgers', cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb){
        orm.update("burgers", {
            devoured: true
        }, condition, cb);
    }
};
module.exports = burger;
