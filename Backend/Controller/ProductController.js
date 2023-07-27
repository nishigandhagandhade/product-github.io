const Product = require('../model/Product')



// add product
const addProduct = async (req, res, next) => {

    let Products;

    try {

        Products = new Product(req.body)
        await Products.save()

    } catch (e) {

        console.log(e)
    }


    if (!Products) {

        return res.status(500).json({ messege: "can't crate" })
    }
    else {

        res.status(201).json(Products)
    }
}

// get product 
const getProduct = async (req, res, next) => {
    let Products

    try {

        Products = await Product.find()

    }
    catch (e) {

        console.log(`error is ${e}`)
    }

    if (!Products) {

        return res.status(404).json({ messege: "product not found" })
    }
    else {

        return res.status(200).json(Products)
    }
}

// getProductById 
const getProductById = async (req, res, next) => {

    const _id = req.params.id;
    let Products

    try {

        Products = await Product.findById({ _id })

    }
    catch (e) {

        console.log(e)
    }

    if (!Products) {

        res.status(404).json({ messege: 'not product found' })
    }
    else {

        res.status(200).json(Products)
    }
}

// upadatProduct
const updateProduct = async (req, res, next) => {

    const _id = req.params.id;

    const { name, prize, quantity,description, image } = req.body
    let Products;


    try {


        Products = await Product.findByIdAndUpdate(_id, {


            name,
            prize,
            quantity,
            description,
            image,
        })
        Products = await Products.save()

    }
    catch (e) {

        console.log(e)

    }

    if (!Products) {

        res.status(501).json({ messege: 'product not updated' })
    }
    else {

        res.status(201).json(Products)
    }

}

// deletebook 
const deleteProduct = async (req, res, next) => {

    const _id = req.params.id;

    let Products;

    try {


        Products = await Product.findByIdAndDelete(_id)




    }
    catch (e) {

        console.log(e)
    }

    if (!Products) {

        res.status(404).json({ messege: 'procduct not found' })
    }
    else {

        res.status(201).json(Products)
    }
}
exports.addProduct = addProduct;
exports.getProduct = getProduct;
exports.getProductById = getProductById;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;

