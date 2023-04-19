const ProductListModel = require('../models/ProductList');

class ProductListService {
    async getProductLists(){
        try{
            const productLists = await ProductListModel.find(); 
            return productLists;
        }

        catch(err){
            throw err;
        }

    }

    async createProductList(newProductList){
        try{
            const productList = new ProductListModel({
                name: newProductList.name,
                products: newProductList.products
            }); 
            
            await productList.save();
            return productList;
        }

        catch(err){
            throw err;
        }

    }

    async getProductListById(id){
        try{
            const productList = await ProductListModel.findById(id);
            return productList;
        }

        catch(err){
            throw err;
        }

    }

    async getAllProductsByListId(id){
        try{
            const products = await ProductListModel.findById(id).populate("products");
            return products;
        }

        catch(err){
            throw err;
        }

    }

    async updateProductListById(id, newProductList){
        try{
            const productList = await ProductListModel.findByIdAndUpdate(id, newProductList, { new: true });
            return productList;
        }

        catch(err){
            throw err;
        }

    }

    async deleteProductListById(id){
        try{
            const productList = await ProductListModel.findByIdAndDelete(id);            
            return productList;
        }

        catch(err){
            throw err;
        }

    }

}

module.exports = ProductListService;