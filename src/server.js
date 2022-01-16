const express = require("express")
const app = express()

app.use(express.json())

const connect = require("./config/db")

const sectionControlar = require("./controlers/section.controlar")
const autharControlar = require("./controlers/authar.controlar")
const checkoutControlar = require("./controlers/checkout.controlar")
const booksControlar = require("./controlers/books.controlars")

app.use("/section",sectionControlar)
app.use("/authar",autharControlar)
app.use("/books",booksControlar)
app.use("/chekout",checkoutControlar)


app.listen(2345,async()=>{
    await connect()
    console.log("listening port from 2345")
})