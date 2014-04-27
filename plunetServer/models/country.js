var mongoose = require('mongoose');
var Schema = mongoose.Schema;
      
var countrySchema = new Schema({
    code : { type: String, trim:true},
    name : { type: String}
});
      
var countries = mongoose.model('countries', countrySchema);
      
module.exports = {
  Country: countries
};