var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var todosSchema = new Schema({
  userid: String,
  memo: String,
  status: String
});

var Todos = mongoose.model('Todos', todosSchema);

module.exports = Todos;
