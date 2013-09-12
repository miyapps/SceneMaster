/**
 * Articles Controller
 */

var mongoose = require('mongoose');
var Shape = require('../models/shape').Shape;

exports.list = function(req, res){
	Shape.find(function(err,user){
		res.send(user);
	});
};

exports.create = function (req, res) {
	var shape = new Shape({name : "MyItem"});
	shape.save();
	res.send("ok");
};
