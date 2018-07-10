const config = require('./config');
const MongoClient = require('mongodb').MongoClient;

const connection = (closure) => {
    return MongoClient.connect(config.connectionUrl(), { useNewUrlParser: true }, (err, client) => {
        if (err) return console.log( err);
        closure(client.db('webtrekk'));
    });
};

module.exports = connection;