const tripsModel = require('../models/tripsModel');

const getAll = async (req, res) => {

    const trips = await tripsModel.getAll();

    return res.status(200).json(trips);
};

const getOne = async (req, res) => {

    const trips = await tripsModel.getAll();
    const id = req.params.id;

    return res.status(200).json([trips[id]]);
};

module.exports = {
    getAll,
    getOne
};