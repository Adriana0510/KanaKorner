const Usuario = require('../model/usuario');
const Estudiante = require('../model/estudiante');

//insertar
async function crear(req, res) {
    try {
      const { nombre, apellido, correo, edad, usuario, contraseña } = req.body;
      
      const nuevoEstudiante = new Estudiante({ nombre, apellido, correo, edad });
      await nuevoEstudiante.save();
      
      const nuevoUsuario = new Usuario({ usuario, contraseña });
      await nuevoUsuario.save();
      
      res.status(201).json({ message: 'Registro exitoso' });
    } catch (error) {
      console.error('Error al registrar:', error);
      res.status(500).json({ error: 'Hubo un problema al procesar la solicitud' });
    }
}

//Mostrar
function visualizar(req, res){
    Usuario.find({}).then(Usuario=>{
        if(Usuario.length) return res.render('index', {Usuario:Usuario})
        return res.status('204').send({message:'NO CONTENT'});

    }).catch(err=>res.status(500).send({err}))
}

function editar(req, res){
    const id = req.body.id_editar
    const usuario = req.body.usuario_editar
    const contraseña = req.body.contraseña_editar
    Usuario.findByIdAndUpdate(id, {usuario:usuario, contraseña:contraseña}).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
}

function eliminar(req, res){
    const id = req.params.id
    Usuario.findByIdAndDelete(id).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
    
}

module.exports = {
    visualizar, 
    crear,
    editar, 
    eliminar
}