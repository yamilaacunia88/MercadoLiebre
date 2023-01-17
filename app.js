const express = require('express');
const app = express();
app.use(express.static('public'));
const port = process.env.PORT || 3001;

//implemento rutas

app.listen(port,()=> console.log ('servidor corriendo en puerto $(port)'));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{S
    res.sendFile(__dirname + '/views/register.html');
});