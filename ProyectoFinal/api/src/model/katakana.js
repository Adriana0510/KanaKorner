const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const katakanaSchema = new Schema({
    id: {type: String},
    kana: {type: String },
    romanji:{type:String },
    palabraJapones:{type:String },
    palabraEspañol:{type:String }
}, {versionKey:false});

const katakana = mongoose.model('katakana', katakanaSchema);

module.exports = katakana;