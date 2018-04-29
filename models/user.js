var mongoose = require('mongoose');
var Schema = mongoose.Schema
var mongooseUniqueValidator = require('mongoose-unique-validator')
// var Customer = require('./customers')

var schema = new Schema({
username: {type: String, required: true, unique: true},
password: {type: String, required: true},
customers: [{type: Schema.Types.ObjectId, ref: 'Customer'}]

});

schema.plugin(mongooseUniqueValidator)

module.exports = mongoose.model('User', schema)

