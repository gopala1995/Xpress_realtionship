const express = require("express")

const router = express.Router()
const Book = require("../models/books.model")

router.post("",async(req,res)=>{
    const book = await Book.create(req.body)
    return res.status(200).send(book)
})

router.get("",async(req,res)=>{
    const books = await Book.find().lean().exec()
    return res.status(200).send(books)
})
module.exports = router