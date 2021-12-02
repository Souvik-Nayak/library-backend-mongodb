const mongoose = require("mongoose")
const { Schema } = mongoose;

const dataSchema = new Schema({
    bookname: String,
    nameofissuer: String,
    date: String
});

module.exports = mongoose.model("data", dataSchema, "LibraryList")