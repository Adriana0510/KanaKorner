const express = require('express')
const router = express.Router()

const usuariocontroller = require('../controller/usuariocontroller')

//Mostrar
router.get('/', usuariocontroller.visualizar);

//Insertar
router.post('/crear', usuariocontroller.crear );

//Post
router.post('/editar', usuariocontroller.editar);

//delete
router.get('/borrar/:id', usuariocontroller.eliminar);

router.post('/login', usuariocontroller.login);

module.exports = router;