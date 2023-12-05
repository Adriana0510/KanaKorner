const Usuario = require('../model/usuario');
const Estudiante = require('../model/estudiante');
const usuario = require('../model/usuario');

//insertar
async function crear(req, res) {
    try {
      const { nombre, apellido, correo, edad, usuario, contrasena } = req.body;
      
      const nuevoEstudiante = new Estudiante({ nombre, apellido, correoElectronico: correo, edad });
      await nuevoEstudiante.save();
      
      const nuevoUsuario = new Usuario({ usuario, contraseña: contrasena });
      await nuevoUsuario.save();
      
      res.status(201).json({ message: 'Registro exitoso' });
    } catch (error) {
      console.error('Error al registrar:', error);
      res.status(500).json({ error: 'Hubo un problema al procesar la solicitud' });
    }
}

//Mostrar
function visualizar(req, res) {
  Usuario.find({})
      .then(usuario => {
          if (usuario.length > 0) {
              res.status(200).json({ Usuario: usuario });
          } else {
              res.status(204).json({ message: 'NO CONTENT' });
          }
      })
      .catch(err => res.status(500).json({ error: err.message }));
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

async function login(req, res) {
  try {
    const { usuario, contrasena: contrasena } = req.body;

    const user = await Usuario.findOne({ usuario });

    if (!user || user.contraseña !== contrasena) {
      return res.status(401).json({ error: 'Credenciales inválidas' }); 
    }

    return res.status(200).json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error('Error en el servidor:', error);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
}


module.exports = {
    visualizar, 
    crear,
    editar, 
    eliminar,
    login
}