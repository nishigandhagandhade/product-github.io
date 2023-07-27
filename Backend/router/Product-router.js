const express =require('express')
const router = express.Router();
const Product = require('../model/Product')
const ProductController =require('../Controller/ProductController')


// routing 

router.post('/', ProductController.addProduct)

router.get('/',ProductController.getProduct)

router.get('/:id',ProductController.getProductById)

router.put('/:id',ProductController.updateProduct)

router.delete('/:id',ProductController.deleteProduct)

module.exports= router;
