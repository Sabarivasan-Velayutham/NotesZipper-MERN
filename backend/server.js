
const express = require("express")
const notes = require("./data/notes")
const dotenv = require("dotenv")

const app = express()

const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`server started on port ${PORT}`))

app.get("/",(req,res) => {
    res.send("API is running ... ")
})

app.get("/api/notes",(req,res) => {
    res.json(notes)
})