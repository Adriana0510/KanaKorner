const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const hiraganaSchema = new Schema({
    id: {type: String},
    kana: {type: String },
    romanji:{type:String },
    palabra:{type:String },
    audio: { type: Buffer },
    imagen: { type: Buffer }, 
}, {versionKey:false});

const hiragana = mongoose.model('hiragana', hiraganaSchema);

module.exports = hiragana;