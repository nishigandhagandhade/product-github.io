const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    name: {

        type: String,
        required: true
    },
    prize: {

        type: String,
        required: true
    },
    quantity: {

        type: Number,
        required: true
    },
    description:{

        type: String,
        required: true
    },
    image:{

        type: String,
        required:true
    }
})

module.exports = mongoose.model('productsystem', productSchema)