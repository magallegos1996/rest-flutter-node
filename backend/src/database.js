const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb://localhost/flutter-node',{
        userNewUrlParser: true
    });
    console.log('Database connected')
}

module.exports = { connect }; //se exporta solo la funcion connect