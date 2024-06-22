const mongoose = require("mongoose");
const Favorite = mongoose.model("Favorite", {
  name: String,
});
module.exports = Favorite;
