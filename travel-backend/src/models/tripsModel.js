const connection = require('./connection');

const getAll = async() => {
    const [trips] = await connection.execute('SELECT * FROM trips');
    return trips;
};

module.exports = {
    getAll
}