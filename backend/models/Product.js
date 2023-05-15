module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        name: {
            type: Sequelize.STRING
        },

        price: {
            type: Sequelize.FLOAT
        },

        description: {
            type: Sequelize.STRING
        },

        quantity: {
            type: Sequelize.INTEGER
        },

        category: {
            type: Sequelize.STRING
        }

    });
    
    return Product;

};