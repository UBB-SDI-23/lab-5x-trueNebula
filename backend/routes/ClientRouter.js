const express = require('express');
const router = express.Router();
const ClientService = require('../services/ClientService');

const clientService = new ClientService();


router.get('/clients', async (req, res) => {
    try {
        const products = await clientService.getClients({});
        console.log(products);
        res.status(200).send(products);

    } catch (err) {
        res.status(500).send(err);

    }

});


router.post('/clients', async (req, res) => {
    try {
        const savedProduct = await clientService.createClient(req.body);
        res.status(201).send(savedProduct);

    } catch (err) {
        res.status(500).send(err);

    }

});


router.get('/clients/report', async (req, res) => {
    try {
        const clients = await clientService.getClientsByTotalPurchasePrice();
        res.status(200).send(clients);

    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

});

router.get('/clients/avgreport', async (req, res) => {
    try {
        const clients = await clientService.getClientsByAveragePurchasePrice();
        res.status(200).send(clients);

    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

});


router.get('/clients/:id', async (req, res) => {
    try {
        const product = await clientService.getClientById(req.params.id);
        res.status(200).send(product);

    } catch (err) {
        res.status(500).send(err);

    }
});

router.patch('/clients/:id', async (req, res) => {
    try {
        const product = await clientService.updateClientById(req.params.id, req.body)
        res.status(200).send(product);

    } catch (err) {
        res.status(500).send(err)

    }

});


router.delete('/clients/:id', async (req, res) => {
    try {
        await clientService.deleteClientById(req.params.id);
        res.status(204).send();

    } catch (err) {
        res.status(500).send(err);

    }

});

module.exports = router;