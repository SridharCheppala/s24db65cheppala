const mongoose = require("mongoose")
const electronicSchema = mongoose.Schema({
electronic_type: String,
ratting: {
    type: String,
    minlength: 1,
    maxlength: 18,
},
cost:
{
    type: Number,
    min : 1,
    max :300,
}
})
module.exports = mongoose.model("electronic",
electronicSchema)
