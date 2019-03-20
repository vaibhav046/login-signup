const express = require('express');
const userController = require('./user.controller.js');
// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const login = req.body;
        const result = await (userController.login(login));
        res.status(200).send(result);
    } catch (e) {
        res.status(e.status).send(e.message);
    }
});

router.post('/signup', async (req, res) => {
    try {
        const userData = req.body;
        const result = await userController.signup(userData);
        res.status(200).send(result);
    } catch (e) {
        res.status(e.status).send(e.message);
    }
});

module.exports = router;
