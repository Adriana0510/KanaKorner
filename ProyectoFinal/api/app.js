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
app.use("/estudiante",estudiantes);

const hiraganas = require('./src/router/hiraganas');
app.use("/hiragana",hiraganas);

const katakanas = require('./src/router/katakanas');
app.use("/katakana",katakanas);

const kanjis = require('./src/router/kanjis');
app.use("/kanji",kanjis);

app.get('/', (req, res)=>{
    res.send('Probando Integracion');
})

app.listen(3000, ()=>{
    console.log('Server is up!');
})