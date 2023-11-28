const Hiragana = require('../model/hiragana');

//insertar
function crear(req, res){
    const hiragana = new Hiragana({
        kana: req.body.kana,
        romanji: req.body.romanji,
        palabra: req.body.palabra,
        audio: req.body.audio,
        imagen: req.body.imagen,
    })
    hiragana.save().then(
        res.redirect('/')
    ).catch(err=>res.status(500).send({err}))
}

//Mostrar
function visualizar(req, res){
    Hiragana.find({}).then(Hiragana=>{
        if(Hiragana.length) return res.render('index', {Hiragana:Hiragana})
        return res.status('204').send({message:'NO CONTENT'});

    }).catch(err=>res.status(500).send({err}))
}

function editar(req, res){
    const id = req.body.id_editar
    const kana = req.body.kana_editar
    const romanji = req.body.romanji_editar
    const palabra = req.body.palabra_editar
    const audio = req.body.audio_editar
    const imagen = req.body.imagen_editar
    Hiragana.findByIdAndUpdate(id, {kana:kana, romanji:romanji, palabra:palabra, audio:audio, imagen:imagen}).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
}

function eliminar(req, res){
    const id = req.params.id
    Hiragana.findByIdAndDelete(id).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
    
}
module.exports = {
    visualizar, 
    crear,
    editar, 
    eliminar
}