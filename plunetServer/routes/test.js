var Country = require('../models/country').Country;
      
exports.index = function(req, res) {

   console.log("inside");

   
  // Country.find({"code":"DZ"}, function(err, docs) {
   Country.find({}, function(err, docs) {
   console.log("country function");
  // console.log(docs);
   	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST");
    if(!err) {
		console.log("inside country");
	//	res.send(200);
	 res.send(200, docs);
    // res.json(200, { country: docs });
     } else {
//     res.json(500, { message: err });
	console.log("error country");
   res.send(500);
     }
   });
}

exports.show = function(req, res) {
  
  var id = req.params.id; 
  id = id.toUpperCase();
  	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST");
  
  Country.findOne({"code":id}, function(err, doc) {
  console.log(id);
  console.log(doc);
    if(!err && doc) {
      res.json(200, doc);
    } else if(err) {
      res.json(500, { message: "Error loading country." + err});
    } else {
      res.json(404, { message: "Country not found."});
    }
  });
}
