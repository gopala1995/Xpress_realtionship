const express = require("express")

const router = express.Router()
const Book = require("../models/books.model")
const Chekout = require("../models/checkout.model")

router.post("",async(req,res)=>{
    const bookUpdate = await Book.findByIdAndUpdate(req.body.book,{isCheckout:true})
    const checkout = await Chekout.create(req.body)
    return res.status(200).send({checkout,bookUpdate})
})

router.get("",async(req,res)=>{
    const checkout = await Chekout.find().lean().exec()
    return res.status(200).send(checkout)
})

module.exports = router