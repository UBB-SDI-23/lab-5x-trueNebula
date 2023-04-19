const ClientModel = require('../models/Client');
const ClientService = require('../services/ClientService');
const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/lab1';

beforeAll(async () => {
    await mongoose.connect(mongoURI);

});

test('Testing getClientsByTotalPurchasePrice', async () => {
    const clientService = new ClientService();
    const clients = await clientService.getClientsByTotalPurchasePrice();

    expect(clients.length).toStrictEqual(3);

});