const mongoose = require("mongoose")
const electronicSchema = mongoose.Schema({
electronic_type: String,
ratting: String,
cost: Number
})
module.exports = mongoose.model("electronic",
electronicSchema)
