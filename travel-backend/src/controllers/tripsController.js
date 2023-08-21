const tripsModel = require('../models/tripsModel');

const getAll = async (req, res) => {

    const trips = await tripsModel.getAll();

    return res.status(200).json(trips);
};

const getOne = async (req, res) => {

    const trips = await tripsModel.getAll();
    const id = req.params.id;
    const object = trips.find(item => item.id === id);

    if(!object){
        return res.status(404).json('Object Not Found')
    }

    return res.status(200).json(object);
};

module.exports = {
    getAll,
    getOne
};