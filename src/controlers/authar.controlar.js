const express = require("express")

const router = express.Router()

const Auther = require("../models/authar.model")

router.post("",async(req,res)=>{
    const authers = await Auther.create(req.body)
    return res.status(200).send(authers)
})

router.get("",async(req,res)=>{
    const auther = await Auther.find().lean().exec()
    return res.status(200).send(auther)
})

module.exports = router