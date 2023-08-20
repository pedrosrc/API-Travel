const tripsModel = require('../models/tripsModel');

const getAll = async (req, res) => {

    const trips = await tripsModel.getAll();

    return res.status(200).json(trips);
};

module.exports = {
    getAll
};