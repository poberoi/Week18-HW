// require mongoose
var mongoose = require('mongoose');
// create Schema class
var Schema = mongoose.Schema;

// Create article schema
var articleSchema = new Schema({
  // title is required
  title: {
    type:String,
    required:true
  },
  // link is required
  summary: {
    type:String,
    required:true
  },
  // this only saves one note's ObjectId. ref refers to the Note model.
  note: {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
  }
});

// Create the article model with the articleSchema
var article = mongoose.model('Article', articleSchema);

// export the model
module.exports = article;