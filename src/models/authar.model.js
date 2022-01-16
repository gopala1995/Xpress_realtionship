const mongoose = require("mongoose")

const autharSchema = new mongoose.Schema({
    name:{type:String,required:true}
})

module.exports = mongoose.model("authar",autharSchema)