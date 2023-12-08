const estudiante = require('../model/estudiante');
const Estudiante = require('../model/estudiante');

//insertar
function crear(req, res){
    const estudiante = new Estudiante({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correoElectronico: req.body.correoElectronico,
        edad:  req.body.edad,
    })
    estudiante.save().then(
        res.redirect('/')
    ).catch(err=>res.status(500).send({err}))
}

//Mostrar
function visualizar(req, res) {
    Estudiante.find({})
        .then(estudiantes => {
            if (estudiantes.length > 0) {
                res.status(200).json({ Estudiantes: estudiantes });
            } else {
                res.status(204).json({ message: 'NO CONTENT' });
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
}


function editar(req, res){
    const id = req.body.id_editar
    const nombre = req.body.estudiante_editar
    const apellido = req.body.contraseña_editar
    const correoElectronico = req.body.estudiante_editar
    const edad = req.body.contraseña_editar
    Estudiante.findByIdAndUpdate(id, {nombre:nombre, apellido:apellido, correoElectronico:correoElectronico, edad:edad}).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
}

function eliminar(req, res) {
    const id = req.params.id;

    if (!id) {
        return res.status(400).json({ error: 'ID de estudiante no proporcionado' });
    }

    Estudiante.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({ message: 'Estudiante eliminado exitosamente' });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
}
module.exports = {
    visualizar, 
    crear,
    editar, 
    eliminar
}
