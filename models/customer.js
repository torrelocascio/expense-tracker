var mongoose = require('mongoose');
var Schema = mongoose.Schema
// var Project = require('./project')
// var User = require('./user')

var schema = new Schema({
  name: {type: string, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  projects: [{type: Schema.Types.ObjectId, ref: 'Project'}]

})

module.exports = mongoose.model('Customer', schema )