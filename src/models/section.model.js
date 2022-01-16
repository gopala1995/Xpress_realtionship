const mongoose = require("mongoose")

const sectionShema = new mongoose.Schema({
    name:{type:String,required:true}
})

module.exports = mongoose.model("section",sectionShema)