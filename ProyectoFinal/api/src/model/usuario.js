const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    id: {type: String},
    usuario: {type: String },
    contraseña:{type:String },
}, {versionKey:false});

const usuario = mongoose.model('usuario', usuarioSchema);

module.exports = usuario;
