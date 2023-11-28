const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estudianteSchema = new Schema({
    id: {type: String},
    nombre: {type: String },
    apellido: {type:String },
    correoElectronico: {type:String },
    edad: {type: Number}
}, {versionKey:false});

const estudiante = mongoose.model('estudiante', estudianteSchema);

module.exports = estudiante;