const {Schema, model} = require('mongoose');

const userSechema = new Schema({
    nombre: String,
    apellido: String,
    avatar: String
});

module.exports = model('User', userSechema);