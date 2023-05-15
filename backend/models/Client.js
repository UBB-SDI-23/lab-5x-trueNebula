module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("client", {
        name: {
            type: Sequelize.STRING
        },

        password: {
            type: Sequelize.STRING
        },

        isvip: {
            type: Sequelize.BOOLEAN
        },

        datejoined: {
            type: Sequelize.DATE
        }
    });
    
    return Client;

};