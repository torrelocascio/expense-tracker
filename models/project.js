var mongoose = require('mongoose');
var Schema = mongoose.Schema

var schema = new Schema({
  name: {type: String, required: true},
  customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
  expenses: [{type:Schema.Types.ObjectId, ref: 'Expense'}]

})

module.exports = mongoose.model('Project', schema)