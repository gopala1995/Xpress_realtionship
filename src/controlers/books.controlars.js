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

// find books that are checked out
router.get("checkout",async(req,res)=>{
    const books = await Book.find({isCheckout:true}).lean().exec()
    return res.status(200).send(books)
})
// find all books written by an author
router.get("/written/:id",async(req,res)=>{
    const books = await Book.find({authar:req.params.id}).lean().exec()
    return res.status(200).send(books)
})
// find books in a section
router.get("/findbysection/:id",async(req,res)=>{
    const books = await Book.find({section:req.params.id}).lean().exec()
    return res.status(200).send(books)
})
// find books in a section that are not checked out
router.get("/findbysection/notcheckout/:id",async(req,res)=>{
    const books = await Book.find({section:req.params.id,isCheckout:false}).lean().exec()
    return res.status(200).send(books)
})
// find books of 1 author inside a section

module.exports = router