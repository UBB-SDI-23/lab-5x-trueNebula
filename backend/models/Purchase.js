module.exports = (sequelize, Sequelize) => {
    const Purchase = sequelize.define("purchase", {
        date: {
            type: Sequelize.DATE
        },

        received: {
            type: Sequelize.BOOLEAN
        },

        clientId: {
            type: Sequelize.INTEGER
        },

        productId: {
            type: Sequelize.INTEGER
        }

    });
    
    return Purchase;

};