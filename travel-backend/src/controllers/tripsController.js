const tripsModel = require('../models/tripsModel');

const getAll = async (req, res) => {
    const trips = await tripsModel.getAll();
    return res.status(200).json(trips);
};

const getOne = async (req, res) => {
    const trips = await tripsModel.getAll();
    const id = parseInt(req.params.id);
    const object = trips.find(obj => obj.id === id);

    if(!object){
        res.status(404).json({message: 'Not Found'})
    }

    return res.status(200).json(object);
};

module.exports = {
    getAll,
    getOne
};