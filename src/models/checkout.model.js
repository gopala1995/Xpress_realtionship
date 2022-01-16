
const mongoose = require("mongoose")

const checkoutSchema = new mongoose.Schema({
    book:{type:"ObjectId",ref:"books",required:true}
})

module.exports = mongoose.model("checkout",checkoutSchema)