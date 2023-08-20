const express = require('express');
const tripsController = require('./controllers/tripsController');

const router = express.Router();

router.get('/trips', tripsController.getAll);

module.exports = router;
