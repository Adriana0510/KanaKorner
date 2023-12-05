const kanji = require('../model/kanji');
const Kanji = require('../model/kanji');

//insertar
function crear(req, res){
    const kanji = new Kanji({
        kana: req.body.kana,
        romanji: req.body.romanji,
        palabraJapones: req.body.palabraJapones,
        palabraEspanol: req.body.palabraEspanol
    })
    kanji.save().then(
        res.redirect('/')
    ).catch(err=>res.status(500).send({err}))
}

//Mostrar
function visualizar(req, res) {
    Kanji.find({})
        .then(kanji => {
            if (kanji.length > 0) {
                res.status(200).json({ Kanji: kanji });
            } else {
                res.status(204).json({ message: 'NO CONTENT' });
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
}

function getHiraganaByKana(req, res) {
    const { kana } = req.params;

    Hiragana.findOne({ kana })
        .then(hiragana => {
            if (hiragana) {
                res.status(200).json(hiragana);
            } else {
                res.status(404).json({ message: 'Hiragana no encontrado' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
}

function editar(req, res){
    const id = req.body.id_editar
    const kana = req.body.kana_editar
    const romanji = req.body.romanji_editar
    const palabraJapones = req.body.palabraJapones_editar
    const palabraEspanol = req.body.palabraEspanol
    Kanji.findByIdAndUpdate(id, {kana:kana, romanji:romanji, palabraJapones:palabraJapones, palabraEspanol:palabraEspanol}).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
}

function eliminar(req, res){
    const id = req.params.id
    Kanji.findByIdAndDelete(id).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
    
}
module.exports = {
    visualizar, 
    crear,
    editar, 
    eliminar
}