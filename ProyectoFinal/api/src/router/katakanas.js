const express = require('express')
const router = express.Router()

const katakanacontroller = require('../controller/katakanacontroller')

//Mostrar
router.get('/', katakanacontroller.visualizar);

//Insertar
router.post('/crear', katakanacontroller.crear );

//Post
router.post('/editar', katakanacontroller.editar);
//delete
router.get('/borrar/:id', katakanacontroller.eliminar)

//Mostrar por kana
router.get('/:kana', katakanacontroller.getKatakanaByKana)

module.exports = router;