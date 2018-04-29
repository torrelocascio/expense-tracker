var mongoose = require('mongoose');
var Schema = mongoose.Schema

var schema = new Schema({
name: {type: String, required: true},
amount: {type: Number, required: true},
date: {type: Date, required:true},
notes: {type: String},
project: {type: Schema.Types.ObjectId, ref: 'Project'}


})

module.exports = mongoose.model('Expense', schema)