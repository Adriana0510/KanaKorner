const mongosee = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/Test';

mongosee.connect(url);

const db = mongosee.connection;
db.on('Error', console.error.bind(console, 'Error al conectar BD con Mongo'));
db.once('open', function callback(){
    console.log('Conectandose a MongoDB...!');
})

module.exports = db;