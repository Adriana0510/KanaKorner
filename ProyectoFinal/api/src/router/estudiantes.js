const express = require('express')
const router = express.Router()

const estudiantecontroller = require('../controller/estudiantecontroller')

//Mostrar
//router.get('/', estudiantecontroller.visualizar);

//Insertar
router.post('/crear', estudiantecontroller.crear );

//Post
router.post('/editar', estudiantecontroller.editar);
//delete
router.get('/borrar/:id', estudiantecontroller.eliminar)

module.exports = router; 