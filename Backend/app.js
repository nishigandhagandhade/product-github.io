const mongoose = require('mongoose')
const express = require('express')
const app = express();
const router = require('./router/Product-router')
const cors= require('cors')


// middleware 
app.use((express.json()))

//middleware router cors
app.use(cors())

//router
app.use('/product',router)



mongoose.connect('mongodb+srv://nishigandhagandhade:nishigandha@cluster0.gsp93rc.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {

        console.log('connected')
    })
    .then(() => {

        app.listen(5001, () => {

            console.log(`listening on http://localhost:5001`)
        })
    })
    .catch((e) => {

        console.log(`error is ${e}`)
    })