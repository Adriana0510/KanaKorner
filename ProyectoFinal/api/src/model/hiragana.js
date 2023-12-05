const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const hiraganaSchema = new Schema({
    id: {type: String},
    kana: {type: String },
    romanji:{type:String },
    palabraJapones:{type:String },
    palabraEspanol:{type:String }
}, {versionKey:false});

const hiragana = mongoose.model('hiragana', hiraganaSchema);

module.exports = hiragana;