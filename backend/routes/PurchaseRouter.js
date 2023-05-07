const express = require('express');
const router = express.Router();
const PurchaseService = require('../services/PurchaseService');

const purchaseService = new PurchaseService();


router.get('/purchases', async (req, res) =>{
    try {
        const products = await purchaseService.getPurchases({});
        res.status(200).send(products);
    
    } catch (err){
        res.status(500).send(err);
    
    }

});


router.post('/purchases', async (req, res) =>{
    try{
        const savedProduct = await purchaseService.createPurchase(req.body);
        res.status(201).send(savedProduct);

    } catch(err){
        res.status(500).send(err);
    
    }

});


router.get('/purchases/:id', async (req, res) =>{
    try{
        const product = await purchaseService.getPurchaseById(req.params.id);
        res.status(200).send(product);

    } catch(err){
        res.status(500).send(err);

    }
});


router.patch('/purchases/:id', async (req, res) =>{
    try{
        const product = await purchaseService.updatePurchaseById(req.params.id, req.body)
        res.status(200).send(product);    
    
    } catch(err){
        res.status(500).send(err)

    }

});


router.delete('/purchases/:id', async (req, res) =>{
    try{    
        await purchaseService.deletePurchaseById(req.params.id);
        res.status(204).send();
        
    } catch(err){
        res.status(500).send(err);

    }

});



module.exports = router;