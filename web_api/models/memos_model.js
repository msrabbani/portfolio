const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var memosSchema = new Schema({
  creator:  { type: Schema.Types.ObjectId, ref: 'users' },
  memo:     String
});

var Memos = mongoose.model('memos', memosSchema);

module.exports = Memos;
