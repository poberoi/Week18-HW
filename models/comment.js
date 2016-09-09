// require mongoose
var mongoose = require('mongoose');
// create a schema class
var Schema = mongoose.Schema;

// create the comment schema
var commentSchema = new Schema({
  // just a string
  body: {
    type:String
  }
});

// Remember, Mongoose will automatically save the ObjectIds of the comments.
// These ids are referred to in the Article model.

// create the comment model with the commentSchema
var comment = mongoose.model('Comment', commentSchema);

// export the comment model
module.exports = comment;