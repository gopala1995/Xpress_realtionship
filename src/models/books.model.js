
const mongoose = require("mongoose")

const booksSchema = new mongoose.Schema({
    name:{type:String,required:true},
    authar:{type:"ObjectId",ref:"authors",required:true},
    section:{type:"ObjectId",ref:"sections",required:true},
    isChekout:{type:Boolean,default:false}
})
module.exports = mongoose.model("books",booksSchema)