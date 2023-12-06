const express = require('express')
const router = express.Router()

const kanjicontroller = require('../controller/kanjicontroller')

//Mostrar
router.get('/', kanjicontroller.visualizar);

//Insertar
router.post('/crear', kanjicontroller.crear );

//Post
router.post('/editar', kanjicontroller.editar);
//delete
router.get('/borrar/:id', kanjicontroller.eliminar)

router.get('/:kana', kanjicontroller.getKanjiByKana)

module.exports = router;