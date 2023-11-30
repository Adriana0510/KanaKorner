const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const db = require('./database');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));

const usuarios = require('./src/router/usuarios');
app.use("/usuario",usuarios)

const estudiantes = require('./src/router/estudiantes');
app.use(estudiantes);

app.get('/', (req, res)=>{
    res.send('Probando Integracion');
})

app.listen(3000, ()=>{
    console.log('Server is up!');
})