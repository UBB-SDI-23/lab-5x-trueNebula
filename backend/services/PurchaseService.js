const PurchaseModel = require('../models/Purchase');

class PurchaseService {
    async getPurchases(){
        try{
            const products = await PurchaseModel.find(); 
            return products;
        }

        catch(err){
            throw err;
        }

    }

    async createPurchase(newPurchase){
        try{
            const product = new PurchaseModel({
                date: newPurchase.date,
                received: newPurchase.received,
                client: newPurchase.client,
                product: newPurchase.product
            }); 
            
            await product.save();
            return product;
        }

        catch(err){
            throw err;
        }

    }

    async getPurchaseById(id){
        try{
            const product = await PurchaseModel.findById(id);
            return product;
        }

        catch(err){
            throw err;
        }

    }

    async updatePurchaseById(id, newPurchase){
        try{
            const product = await PurchaseModel.findByIdAndUpdate(id, newPurchase, { new: true });
            return product;
        }

        catch(err){
            throw err;
        }

    }

    async deletePurchaseById(id){
        try{
            const product = await PurchaseModel.findByIdAndDelete(id);
            return product;
        }

        catch(err){
            throw err;
        }

    }

    async filterPurchaseByPrice(price){
        try{
            const products = PurchaseModel.find({price: { $gt: price} });
            return products;
        }   

        catch(err){
            throw err;

        }

    }

}

module.exports = PurchaseService;