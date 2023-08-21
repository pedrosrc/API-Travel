const express = require('express');
const tripsController = require('./controllers/tripsController');

const router = express.Router();

router.get('/trips', tripsController.getAll);

router.get('/trips/:id', tripsController.getOne);

module.exports = router;
