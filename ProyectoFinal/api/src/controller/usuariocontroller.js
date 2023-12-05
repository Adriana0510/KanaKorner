const Usuario = require('../model/usuario');
const Estudiante = require('../model/estudiante');

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
  // Using the find method to retrieve all users from the database
  Usuario.find({}).then(usuarios => {
      // Checking if there are users found
      if (usuarios.length) {
          // Rendering the 'index' view with the retrieved users
          return res.render('index', { Usuario: usuarios });
      }

      // If no users are found, sending a 204 status code with a message
      return res.status(204).send({ message: 'NO CONTENT' });
  }).catch(err => {
      // Handling errors by sending a 500 Internal Server Error response
      res.status(500).send({ err });
  });
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