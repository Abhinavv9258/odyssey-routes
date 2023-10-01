const mongoose = require('mongoose');
require('dotenv').config();

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const uri = `${process.env.MONGO_URL}`;

const connexion = mongoose.connect(uri, connectionParams)
    .then(() => console.log('Connection established with database..!!'))
    .catch((error) => console.log('Error while connecting to database..!!', error));

module.exports = connexion