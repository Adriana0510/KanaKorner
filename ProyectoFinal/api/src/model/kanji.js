const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const kanjiSchema = new Schema({
    id: {type: String},
    kana: {type: String },
    romanji:{type:String },
    palabraJapones:{type:String },
    palabraEspanol:{type:String }
}, {versionKey:false});

const kanji = mongoose.model('kanji', kanjiSchema);

module.exports = kanji;