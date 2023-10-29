require('dotenv').config()

const express = require('express')
// import express from "express"
const app = express()


app.get('/',(req, res)=>{
    res.send("Hello World!")
})

app.get('/twitter', (req, res)=>{
    res.send("ayush@gmail.com")
})

app.get('/login', (req, res)=>{
    res.send('<h1> please login at chai aur code</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>chai our code</h2>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${process.env.PORT}`)
})



