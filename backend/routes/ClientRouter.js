const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const db = require('../models');
const { getPagination, getPagingData } = require('./RouterUtils.js');
const Client = db.clients;

router.get('/clients', async (req, res) => {
    const { page, size, name } = req.query;
    const { limit, offset } = getPagination(page, size);

    const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Client.findAndCountAll({ where: condition, limit, offset })
        .then(data => {
            const response = getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving clients."
            });
        });



    //     console.log('getting clients');
    //     pool.query('SELECT * FROM clients ORDER BY id ASC', (error, results) => {
    //         if (error) {
    //             throw error;
    //         }

    //         res.status(200).json(results.rows);

    //       }
    //     );
    // } catch (err) {
    //     res.status(500).send(err);

    // }

});


router.post('/clients', async (req, res) => {
    try {
        const {name, password, isvip, datejoined} = req.body;
        console.log(req.body);

        const vip = isvip === "true" ? true : false;
        console.log(isvip);

        pool.query('INSERT INTO clients (name, password, isVIP, dateJoined) VALUES ($1, $2, $3, $4) RETURNING *', [name, password, isvip, datejoined], (error, results) => {
            if (error) {
                throw error;
            }

            res.status(201).send(`Client added with ID: ${results.rows[0].id}`);

          });

    } catch (err) {
        res.status(500).send(err);

    }

});


router.get('/clients/filter/:isVIP', async (req, res) => {
    try {
        const isVIP = req.params.isVIP;

        pool.query('SELECT * FROM clients WHERE isVIP = $1', [isVIP], (error, results) => {
            if (error) {
                throw error;
            }

            res.status(200).json(results.rows);

            });

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
        const id = parseInt(req.params.id);

        pool.query('SELECT * FROM clients WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error;
            }

            res.status(200).json(results.rows[0])
        });

    } catch (err) {
        res.status(500).send(err);

    }
});

router.put('/clients/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id); 
        const {name, password, isvip, datejoined} = req.body;

        pool.query(
            'UPDATE clients SET name = $1, password = $2, isVIP = $3, dateJoined = $4 WHERE id = $5',
            [name, password, isvip, datejoined, id],
            (error, results) => {
                if (error) {
                    throw error;
                }

                res.status(200).send(`Client modified with ID: ${id}`);
            }
        );

    } catch (err) {
        res.status(500).send(err)

    }

});


router.delete('/clients/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        pool.query('DELETE FROM clients WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error;
            }

            res.status(200).send(`Client deleted with ID: ${id}`);
        });

    } catch (err) {
        res.status(500).send(err);

    }

});

module.exports = router;