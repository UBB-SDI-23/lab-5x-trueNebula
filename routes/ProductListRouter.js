const express = require('express');
const router = express.Router();
const ProductListService = require('../services/ProductListService');

const productListService = new ProductListService();


router.get('/lists', async (req, res) =>{
    try {
        const products = await productListService.getProductLists({});
        res.status(200).send(products);
    
    } catch (err){
        res.status(500).send(err);
    
    }

});


router.post('/lists', async (req, res) =>{
    try{
        const savedProduct = await productListService.createProductList(req.body);
        res.status(201).send(savedProduct);

    } catch(err){
        res.status(500).send(err);
    
    }

});


router.post('/lists/bulk', async (req, res) =>{
    try{
        const toAdd = req.body.lists;

        for(i in toAdd){
            await productListService.createProductList(toAdd[i]);
        }
        
        res.status(201).send("Added all products");

    } catch(err){
        res.status(500).send(err)
        
    }

});


router.get('/lists/:id', async (req, res) =>{
    try{
        const product = await productListService.getProductById(req.params.id);
        res.status(200).send(product);

    } catch(err){
        res.status(500).send(err);

    }
});


router.get('/lists/:id/products', async (req, res) =>{
    try{
        const products = await productListService.getAllProductsByListId(req.params.id);
        res.status(200).send(products);

    } catch(err){
        res.status(500).send(err);

    }


});


router.patch('/lists/:id', async (req, res) =>{
    try{
        const product = await productListService.updateProductListById(req.params.id, req.body)
        res.status(200).send(product);    
    
    } catch(err){
        res.status(500).send(err)

    }

});


router.delete('/lists/:id', async (req, res) =>{
    try{    
        await productListService.deleteProductListById(req.params.id);        
        res.status(204).send();
        
    } catch(err){
        res.status(500).send(err);

    }

});

module.exports = router;