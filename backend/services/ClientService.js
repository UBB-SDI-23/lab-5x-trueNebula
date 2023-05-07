const ClientModel = require('../models/Client');
const ClientDTO = require('../DTOs/ClientDTO');

class ClientService {
    async getClients() {
        let error;
        try {
            const products = await ClientModel.find();
            return products;
        }

        catch (err) {
            error = err;
        }

        assert.equal(error.errors['name'].message, 'Path `name` is required.');
        error = cat.validateSync();
        assert.equal(error.errors['name'].message, 'Path `name` is required.');

    }

    async createClient(newClient) {
        try {
            const product = new ClientModel({
                name: newClient.name,
                password: newClient.password,
                isVIP: newClient.isVIP,
                dateJoined: newClient.dateJoined,
                products: newClient.products
            });

            await product.save();
            return product;
        }

        catch (err) {
            throw err;
        }

    }

    async getClientById(id) {
        try {
            const product = await ClientModel.findById(id);
            return product;
        }

        catch (err) {
            throw err;
        }

    }

    async updateClientById(id, newClient) {
        try {
            const product = await ClientModel.findByIdAndUpdate(id, newClient, { new: true });
            return product;
        }

        catch (err) {
            throw err;
        }

    }

    async deleteClientById(id) {
        try {
            const product = await ClientModel.findByIdAndDelete(id);
            return product;
        }

        catch (err) {
            throw err;
        }

    }

    async getClientsByTotalPurchasePrice() {
        try {
            const clients = await ClientModel.aggregate([
                {
                    $match: { purchases: { $not: { $size: 0 } } }
                },
                {
                    $lookup: {
                        from: "purchases",
                        localField: "purchases",
                        foreignField: "_id",
                        as: "clientPurchases"
                    }
                },
                {
                    $unwind: "$clientPurchases"
                },
                {
                    $lookup: {
                        from: "products",
                        localField: "clientPurchases.product",
                        foreignField: "_id",
                        as: "clientProducts"

                    }
                },
                {
                    $unwind: "$clientProducts"
                },
                {
                    $group: {
                        _id: "$_id",
                        name: { $first: "$name" },
                        totalPrice: { $sum: "$clientProducts.price" }
                    }
                },
                {
                    $sort: { totalPrice: -1 }
                }
            ]);

            const clientDTOs = clients.map(
                (client) => new ClientDTO(client.name, client.totalPrice)
            );

            //console.log(clientDTOs);

            return clientDTOs;

        }

        catch (err) {
            throw err;

        }

    }

    async getClientsByAveragePurchasePrice() {
        try {
            const clients = await ClientModel.aggregate([
                {
                    $match: { purchases: { $not: { $size: 0 } } }
                },
                {
                    $lookup: {
                        from: "purchases",
                        localField: "purchases",
                        foreignField: "_id",
                        as: "clientPurchases"
                    }
                },
                {
                    $unwind: "$clientPurchases"
                },
                {
                    $lookup: {
                        from: "products",
                        localField: "clientPurchases.product",
                        foreignField: "_id",
                        as: "clientProducts"

                    }
                },
                {
                    $unwind: "$clientProducts"
                },
                {
                    $group: {
                        _id: "$_id",
                        name: { $first: "$name" },
                        totalPrice: { $avg: "$clientProducts.price" }
                    }
                },
                {
                    $sort: { totalPrice: -1 }
                }
            ]);

            const clientDTOs = clients.map(
                (client) => new ClientDTO(client.name, client.totalPrice)
            );

            //console.log(clientDTOs);

            return clientDTOs;

        }

        catch (err) {
            throw err;

        }

    }

}

module.exports = ClientService;