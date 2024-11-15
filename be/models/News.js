const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  Title: { type: String, maxlength: 250 },
  Url: { type: String, maxlength: 50 },
  Summary: { type: String, maxlength: 500 },
  Content: { type: String },
  Image_L: { type: String, maxlength: 250 },
  Image_M: { type: String, maxlength: 250 },
  Image_S: { type: String, maxlength: 250 },
  Image_L_I: { type: String, maxlength: 250 },
  Image_M_I: { type: String, maxlength: 250 },
  Image_S_I: { type: String, maxlength: 250 },
  Category_ID_Fk: { type: String },
  MetaTitle: { type: String, maxlength: 250 },
  MetaKeyword: { type: String, maxlength: 250 },
  MetaDescription: { type: String, maxlength: 500 },
  CreatedBy: { type: String, maxlength: 50 },
  CreatedDate: { type: Date },
  ModifiedBy: { type: String, maxlength: 50 },
  ModifiedDate: { type: Date },
  ViewCount: { type: Number },
  Status: { type: Number }
});

module.exports = mongoose.model('News', newsSchema);
