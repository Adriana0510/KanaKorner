const express = require('express')
const router = express.Router()

const hiraganacontroller = require('../controller/hiraganacontroller')

//Mostrar
router.get('/', hiraganacontroller.visualizar);

//Insertar
router.post('/crear', hiraganacontroller.crear );

//Post
router.post('/editar', hiraganacontroller.editar);

//delete
router.get('/borrar/:id', hiraganacontroller.eliminar)

//Mostrar por kana
router.get('/:kana', hiraganacontroller.getHiraganaByKana)

module.exports = router;