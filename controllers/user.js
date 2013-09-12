
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.auth = function(req, res){
  res.redirect("/");
};