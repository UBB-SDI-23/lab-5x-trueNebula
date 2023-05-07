const express = require('express');
const router = express.Router();
const ProductService = require('../services/ProductService');

const productService = new ProductService();


router.get('/products', async (req, res) =>{
    try {
        const products = await productService.getProducts({});
        res.status(200).send(products);
    
    } catch (err){
        res.status(500).send(err);
    
    }

});


router.post('/products', async (req, res) =>{
    try{
        const savedProduct = await productService.createProduct(req.body);
        res.status(201).send(savedProduct);

    } catch(err){
        res.status(500).send(err);
    
    }

});


router.get('/products/:id', async (req, res) =>{
    try{
        const product = await productService.getProductById(req.params.id);
        res.status(200).send(product);

    } catch(err){
        res.status(500).send(err);

    }
});


router.patch('/products/:id', async (req, res) =>{
    try{
        const product = await productService.updateProductById(req.params.id, req.body)
        res.status(200).send(product);    
    
    } catch(err){
        res.status(500).send(err)

    }

});


router.delete('/products/:id', async (req, res) =>{
    try{    
        await productService.deleteProductById(req.params.id);
        res.status(204).send();
        
    } catch(err){
        res.status(500).send(err);

    }

});



router.get('/products/filter/:price', async (req, res) =>{
    try{
        const filteredProducts = await productService.filterProductByPrice(req.params.price);
        res.status(200).send(filteredProducts);

    } catch(err){
        res.status(500).send(err);
    
    }

})

module.exports = router;
